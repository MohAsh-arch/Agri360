#!/bin/bash

# Agri360 - Quick Startup Script

echo "🌾 Agri360 - Agricultural Management Platform"
echo "=============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"
echo ""

# Kill any existing processes on ports 3000 and 5000
echo "🔍 Cleaning up existing processes..."
lsof -i :3000 2>/dev/null | grep LISTEN | awk '{print $2}' | xargs kill -9 2>/dev/null
lsof -i :5000 2>/dev/null | grep LISTEN | awk '{print $2}' | xargs kill -9 2>/dev/null
sleep 1

# Start Backend
echo "🚀 Starting Backend Server on port 5000..."
cd "$(dirname "$0")/Agri360 backend"
npm install --silent 2>/dev/null
npm run dev > /tmp/backend.log 2>&1 &
BACKEND_PID=$!
echo "   Backend PID: $BACKEND_PID"
sleep 3

# Start Frontend
echo "🚀 Starting Frontend Server on port 3000..."
cd "$(dirname "$0")"
npm install --silent 2>/dev/null
npm run dev > /tmp/frontend.log 2>&1 &
FRONTEND_PID=$!
echo "   Frontend PID: $FRONTEND_PID"
sleep 3

echo ""
echo "=============================================="
echo "✅ Agri360 is starting!"
echo ""
echo "Frontend  : http://localhost:3000"
echo "Backend   : http://localhost:5000"
echo "API Base  : http://localhost:5000/api"
echo ""
echo "📋 Check logs:"
echo "   Frontend: tail -f /tmp/frontend.log"
echo "   Backend:  tail -f /tmp/backend.log"
echo ""
echo "❌ To stop: kill $BACKEND_PID $FRONTEND_PID"
echo "=============================================="

# Keep script running
wait
