#!/usr/bin/env node
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { URL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const LANDING_PAGE = path.join(__dirname, 'public', 'index.html');
const BACKEND_URL = 'http://localhost:5000';

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Proxy API requests to backend
  if (req.url.startsWith('/api/')) {
    const backendUrl = new URL(BACKEND_URL + req.url);
    
    const options = {
      hostname: backendUrl.hostname,
      port: backendUrl.port,
      path: backendUrl.pathname + backendUrl.search,
      method: req.method,
      headers: {
        ...req.headers,
        'host': backendUrl.host,
      }
    };

    delete options.headers['connection'];

    const backendReq = http.request(options, (backendRes) => {
      res.writeHead(backendRes.statusCode, backendRes.headers);
      backendRes.pipe(res);
    });

    backendReq.on('error', (err) => {
      console.error('Backend request error:', err);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Backend service unavailable' }));
    });

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      req.pipe(backendReq);
    } else {
      backendReq.end();
    }
    return;
  }

  // Serve landing page
  if (req.url === '/' || req.url === '') {
    fs.readFile(LANDING_PAGE, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading index.html:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading page');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
    return;
  }

  // Route dashboard page
  if (req.url === '/dashboard') {
    const dashboardFile = path.join(PUBLIC_DIR, 'dashboard.html');
    fs.readFile(dashboardFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading dashboard.html:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading dashboard');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
    return;
  }

  // Direct routes for feature pages
  const featureRoutes = {
    '/crop-planning': 'crop-planning.html',
    '/business-plan': 'business-plan.html',
    '/water-schedule': 'water-schedule.html',
    '/fertilizer': 'fertilizer.html',
    '/marketplace': 'marketplace.html',
    '/farms': 'farms.html'
  };

  if (featureRoutes[req.url]) {
    const pageFile = path.join(PUBLIC_DIR, featureRoutes[req.url]);
    fs.readFile(pageFile, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading ${featureRoutes[req.url]}:`, err);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
    return;
  }

  // Route feature pages via /page/ path
  if (req.url.startsWith('/page/')) {
    const pageName = req.url.slice(6); // Remove '/page/'
    
    // Map page names to actual filenames
    const pageMap = {
      'crop-planning': 'crop-planning.html',
      'business-plan': 'business-plan.html',
      'water-schedule': 'water-schedule.html',
      'fertilizer': 'fertilizer.html',
      'marketplace': 'marketplace.html',
      'farms': 'farms.html'
    };

    const fileName = pageMap[pageName] || `${pageName}.html`;
    const pageFile = path.join(PUBLIC_DIR, fileName);
    
    fs.readFile(pageFile, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading ${fileName}:`, err);
        // Return a generic feature page for now
        const genericPage = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageName.replace(/-/g, ' ')} - Agri360</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
  <nav class="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <h1 class="text-2xl font-bold text-green-600">🌾 Agri360</h1>
        <button onclick="window.location.href='/dashboard'" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  </nav>
  <main class="max-w-7xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6">${pageName.replace(/-/g, ' ').toUpperCase()}</h2>
    <div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
      <p class="text-lg">This page is coming soon. The feature data is available via the API.</p>
      <pre class="mt-4 bg-gray-900 text-green-400 p-4 rounded overflow-auto">GET /api/${pageName.replace(/-/g, '/')}</pre>
    </div>
  </main>
</body>
</html>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(genericPage);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
    return;
  }

  // Serve static files
  const filePath = path.join(PUBLIC_DIR, req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
      };
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`✅ Frontend server running on http://localhost:${PORT}`);
  console.log(`🔗 Proxying API calls to http://localhost:5000`);
});
