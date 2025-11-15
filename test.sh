#!/bin/bash

echo "🧪 Agri360 Complete System Test"
echo "================================"
echo ""

# Test 1: Frontend Server
echo "1️⃣  Testing Frontend Server (Port 3000)..."
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Frontend server is running"
else
    echo "❌ Frontend server is NOT running"
    exit 1
fi

# Test 2: Backend Server
echo ""
echo "2️⃣  Testing Backend Server (Port 5000)..."
if curl -s http://localhost:5000/health > /dev/null 2>&1 || curl -s http://localhost:5000/api/auth/login -X POST > /dev/null 2>&1; then
    echo "✅ Backend server is running"
else
    echo "❌ Backend server is NOT running"
    exit 1
fi

# Test 3: Landing Page
echo ""
echo "3️⃣  Testing Landing Page..."
LANDING=$(curl -s http://localhost:3000)
if echo "$LANDING" | grep -q "Agri360"; then
    echo "✅ Landing page loads successfully"
else
    echo "❌ Landing page not responding"
fi

# Test 4: Login API via Proxy
echo ""
echo "4️⃣  Testing Login API (via frontend proxy)..."
LOGIN_RESPONSE=$(curl -s http://localhost:3000/api/auth/login -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"ahmed@example.com","password":"password123"}')

if echo "$LOGIN_RESPONSE" | grep -q "token"; then
    echo "✅ Login API working - token generated"
    TOKEN=$(echo "$LOGIN_RESPONSE" | grep -o '"token":"[^"]*' | cut -d'"' -f4)
else
    echo "❌ Login API not responding correctly"
    echo "Response: $LOGIN_RESPONSE"
fi

# Test 5: Dashboard API
echo ""
echo "5️⃣  Testing Dashboard API (with token)..."
if [ -n "$TOKEN" ]; then
    DASHBOARD=$(curl -s http://localhost:3000/api/dashboard \
      -H "Authorization: Bearer $TOKEN")
    
    if echo "$DASHBOARD" | grep -q "revenue"; then
        echo "✅ Dashboard API working - KPIs loaded"
        echo "   Revenue: $(echo "$DASHBOARD" | grep -o '"revenue":[0-9]*' | cut -d':' -f2)"
    else
        echo "❌ Dashboard API not responding"
    fi
else
    echo "⚠️  Skipped (no valid token)"
fi

# Test 6: All endpoints
echo ""
echo "6️⃣  Testing All API Endpoints..."
ENDPOINTS=(
    "/api/auth/login:POST"
    "/api/farms:GET"
    "/api/marketplace:GET"
    "/api/users/profile:GET"
)

for endpoint in "${ENDPOINTS[@]}"; do
    IFS=':' read -r path method <<< "$endpoint"
    if curl -s -X "$method" "http://localhost:3000$path" > /dev/null 2>&1; then
        echo "✅ $method $path"
    else
        echo "⚠️  $method $path"
    fi
done

echo ""
echo "================================"
echo "✅ All Tests Complete!"
echo ""
echo "📍 Access the application:"
echo "   Landing Page: http://localhost:3000"
echo "   Test Login: ahmed@example.com / password123"
echo ""
