# 🌾 Agri360 - Quick Access URLs

## 🎯 Main Entry Points

### Landing Page
```
URL: http://localhost:3000
Description: Main landing page with feature overview and login button
Features: 
  - Feature showcase cards
  - Dark/Light theme toggle
  - Login button
  - Test credentials display
```

### Dashboard (After Login)
```
URL: http://localhost:3000/dashboard
Description: Main dashboard with analytics
Features:
  - Welcome message
  - KPI cards (Revenue, Farms, Crops, Yield)
  - 6 Feature cards
  - Recent activity feed
  - Logout button
Access: Only after successful login
```

---

## 🔐 Authentication

### Login
```
URL: http://localhost:3000/api/auth/login
Method: POST
Headers: Content-Type: application/json

Example:
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "ahmed@example.com",
    "password": "password123"
  }'

Response:
{
  "user": { ... },
  "token": "token_1763227456070_9thnqif"
}
```

### Register
```
URL: http://localhost:3000/api/auth/register
Method: POST
Headers: Content-Type: application/json

Request:
{
  "name": "Your Name",
  "email": "your@email.com",
  "password": "password123",
  "phone": "+1234567890"
}
```

### Get Current User
```
URL: http://localhost:3000/api/auth/me
Method: GET
Headers: Authorization: Bearer {token}
```

---

## 📊 Feature APIs

### Dashboard Data
```
URL: http://localhost:3000/api/dashboard
Method: GET
Headers: Authorization: Bearer {token}

Returns: KPIs, activities, analytics data
```

### Farms Management
```
URL: http://localhost:3000/api/farms
Method: GET
Headers: Authorization: Bearer {token}
Returns: List of farms (3 sample farms included)

URL: http://localhost:3000/api/farms
Method: POST
Headers: Authorization: Bearer {token}
Body: { name, location, size }
Creates: New farm
```

### Crop Planning
```
URL: http://localhost:3000/api/crops/plan
Method: POST
Headers: Authorization: Bearer {token}
Body: { cropType, area, soilType }

Returns: Yield predictions, planting dates, fertilizer schedule
Example yield: 4.5 tons
```

### Business Planning
```
URL: http://localhost:3000/api/business/plan
Method: POST
Headers: Authorization: Bearer {token}
Body: { investmentAmount, currentRevenue }

Returns: Year 1-3 ROI projections
Example: 80% → 93% → 103%
```

### Water Schedule
```
URL: http://localhost:3000/api/water/schedule
Method: POST
Headers: Authorization: Bearer {token}
Body: { cropType, area, season }

Returns: 4-week irrigation schedule with costs
Total example: $510
```

### Fertilizer Recommendations
```
URL: http://localhost:3000/api/fertilizer/recommendations
Method: POST
Headers: Authorization: Bearer {token}
Body: { soilType, cropType, area }

Returns: 4 fertilizer options with NPK values and costs
```

### Marketplace
```
URL: http://localhost:3000/api/marketplace
Method: GET
No auth required
Returns: Product listings (3 sample products)

URL: http://localhost:3000/api/marketplace
Method: POST
Headers: Authorization: Bearer {token}
Body: { name, price, description, quantity }
Creates: New product listing
```

### User Profile
```
URL: http://localhost:3000/api/users/profile
Method: GET
Headers: Authorization: Bearer {token}
Returns: User profile data

URL: http://localhost:3000/api/users/profile
Method: PUT
Headers: Authorization: Bearer {token}
Body: { name, phone, location, profilePicture }
Updates: User profile
```

### Chat/Messaging
```
URL: http://localhost:3000/api/chat/messages
Method: GET
Headers: Authorization: Bearer {token}
Returns: Message history

URL: http://localhost:3000/api/chat/messages
Method: POST
Headers: Authorization: Bearer {token}
Body: { to, message }
Creates: New message
```

---

## 🔗 Feature Navigation URLs

After login, feature pages are accessible at:

```
/page/crop-planning       → Crop Planning feature page
/page/business-plan       → Business Planning feature page
/page/water-schedule      → Water Management feature page
/page/fertilizer          → Fertilizer Recommendations feature page
/page/marketplace         → Marketplace feature page
/page/farms               → Farm Management feature page
```

---

## 📱 Browser Testing Flow

### Step 1: Open Landing Page
```
1. Open http://localhost:3000
2. See landing page with 10 feature cards
3. See "Login Now" button
```

### Step 2: Click Login Button
```
1. Click "Login Now"
2. Modal pops up with login form
3. See test credentials in blue box
```

### Step 3: Enter Credentials
```
Email: ahmed@example.com
Password: password123
```

### Step 4: Click Sign In
```
1. Button shows "Loading..."
2. Wait 1-2 seconds
3. Redirected to dashboard
```

### Step 5: View Dashboard
```
1. See "Welcome back, Ahmed Farmer!"
2. See 4 KPI cards with data
3. See 6 feature cards
4. See recent activities
```

### Step 6: Navigate Features
```
1. Click any feature card
2. Generic feature page loads
3. Sidebar or back button to return
4. Click "Logout" to sign out
```

---

## 🧪 Testing Credentials

### Main Test User
```
Email: ahmed@example.com
Password: password123

Name: Ahmed Farmer
Location: Cairo, Egypt
Experience: 15 years
Farm Size: 50 acres
Crops: Wheat, Corn
Phone: 0123456789
```

---

## 💻 Direct API Testing with cURL

### Test 1: Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"ahmed@example.com","password":"password123"}' | jq
```

### Test 2: Get Dashboard (replace TOKEN)
```bash
curl http://localhost:3000/api/dashboard \
  -H "Authorization: Bearer TOKEN" | jq
```

### Test 3: Get Farms
```bash
curl http://localhost:3000/api/farms \
  -H "Authorization: Bearer TOKEN" | jq
```

### Test 4: Get Marketplace
```bash
curl http://localhost:3000/api/marketplace | jq
```

### Test 5: Test All at Once
```bash
bash /home/m_a/Agri360/test.sh
```

---

## 📋 Port Reference

```
Port 3000: Frontend HTTP Server (simple-server.js)
  - Landing page
  - Dashboard
  - API proxy
  
Port 5000: Backend API Server (mock-server.js)
  - 12 API endpoints
  - Mock database
  - Token validation
```

---

## ✅ System Status Commands

### Check if servers are running
```bash
ps aux | grep -E "simple-server|mock-server" | grep -v grep
```

### View frontend logs
```bash
tail -f /tmp/frontend.log
```

### Restart frontend
```bash
pkill -f simple-server
cd "/home/m_a/Agri360/Agri 360 Frontend"
node simple-server.js &
```

### Restart backend
```bash
pkill -f mock-server
cd "/home/m_a/Agri360/Agri360 backend"
node mock-server.js &
```

---

## 🎯 Ready to Use!

Everything is set up and running. Just:

1. **Open your browser to:** http://localhost:3000
2. **Click "Login Now"**
3. **Enter:** ahmed@example.com / password123
4. **Explore all features!**

All endpoints are working and returning mock data suitable for testing the UI.

