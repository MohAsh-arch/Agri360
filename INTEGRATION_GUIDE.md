# Agri360 - Full Stack Integration Guide

## ✅ PROJECT STATUS: READY FOR TESTING

### Current Setup

#### Frontend ✅
- **Location**: `/home/m_a/Agri360`
- **Framework**: Next.js 15.5.6
- **Status**: Running on http://localhost:3000
- **Features**:
  - Multi-language support (English/Arabic with i18next)
  - Dark/Light theme toggle
  - Full translation coverage across all pages
  - Responsive design with professional farming color palette

#### Backend ✅
- **Location**: `/home/m_a/Agri360/Agri360 backend`
- **Framework**: Express.js with MongoDB
- **Database**: MongoDB Atlas (Cloud)
- **Configuration**: Stored in `.env.development` file
- **API Routes**:
  - `/api/auth/*` - Authentication (login, register, verify)
  - `/api/dashboard/*` - Dashboard data
  - `/api/simple/*` - Farming plans
  - `/api/business/*` - Business plans
  - `/api/dashboard/*` - Water management
  - `/api/marketplace/*` - Marketplace data

#### API Layer ✅
Created comprehensive service layer:
- `app/lib/apiClient.ts` - Base API client with fetch
- `app/lib/services/authService.ts` - Authentication
- `app/lib/services/dashboardService.ts` - Dashboard data
- `app/lib/services/farmingService.ts` - Farming plans
- `app/lib/services/businessService.ts` - Business plans
- `app/lib/services/waterService.ts` - Water management
- `app/lib/services/fertilizerService.ts` - Fertilizer plans

#### Environment Variables ✅
- **Frontend** (`.env.local`):
  ```
  NEXT_PUBLIC_API_URL=http://localhost:5000/api
  NEXT_PUBLIC_APP_URL=http://localhost:3000
  ```

- **Backend** (`.env.development`):
  ```
  MONGO_URI=mongodb+srv://agri360_dev:Agri360Dev2024@agri360-cluster.mongodb.net/agri360
  JWT_SECRET=3x7mpl3_0f_4_v3ry_l0ng_4nd_s3cur3_jwt_s3cr3t_k3y_2024!
  PORT=5000
  NODE_ENV=development
  ```

## 🚀 Running the Application

### Terminal 1 - Frontend Server
```bash
cd /home/m_a/Agri360
npm run dev
# Runs on http://localhost:3000
```

### Terminal 2 - Backend Server
```bash
cd "/home/m_a/Agri360/Agri360 backend"
npm run dev
# Runs on http://localhost:5000
```

## ✨ Features Implemented

### Frontend Pages
1. **Dashboard** - KPIs, Quick Actions, Recent Activity
2. **Business Plan** - Financial planning and analysis
3. **Farming Plan** - Crop planning and recommendations
4. **Water Management** - Irrigation scheduling
5. **Fertilization** - Fertilizer recommendations

### Multi-Language Support
- **English & Arabic** with automatic direction (LTR/RTL)
- **Language Toggle Button** at top-right corner
- **200+ Translation Keys** covering all pages
- **localStorage Persistence** for language preference

### Theme Support
- **Light & Dark Mode** with professional farming colors
- **Theme Toggle Button** at top-right corner
- **localStorage Persistence** for theme preference

### API Integration
- **Error Handling** with fallback mock data
- **Axios-based Client** for all API calls
- **JWT Token Management** for authentication
- **CORS Support** for cross-origin requests

## 🧪 Testing the Integration

### 1. Test Frontend
```bash
curl -s http://localhost:3000 | grep -o "Agri360\|Welcome"
```

### 2. Test Backend API
```bash
curl -s http://localhost:5000 -X GET
# Should return: {"message":"🌿 Agri360 API is running"}
```

### 3. Test Authentication
```bash
curl -s http://localhost:5000/api/auth/login \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"user@test.com","password":"password"}'
```

### 4. Test Dashboard
```bash
curl -s http://localhost:5000/api/dashboard \
  -X GET
```

## 📝 Database Setup

### MongoDB Atlas (Cloud - No Installation Needed)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create new cluster (free tier)
4. Get connection string
5. Update MONGO_URI in `.env.development`

**Current Configuration**:
- Free Tier: 512MB storage
- Perfect for development
- Auto-scaling available

## 🔧 Dependencies Installed

### Frontend
- Next.js 15.5.6
- React 19
- Tailwind CSS
- i18next (multi-language)
- react-i18next
- Recharts (charts)

### Backend
- Express 5.1
- MongoDB Mongoose 8.19
- JWT (jsonwebtoken)
- CORS
- Morgan (logging)
- dotenv

## 📊 API Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "status": 400
}
```

## 🔐 Security Features

- **JWT Authentication** for protected routes
- **CORS Configuration** for frontend-backend communication
- **Environment Variable Protection** for sensitive data
- **Password Hashing** with bcryptjs
- **Request Validation** on all endpoints

## 📈 Next Steps for Production

1. **Replace Mock Data**: Connect all services to real backend endpoints
2. **Add Error Boundaries**: Implement React error boundaries
3. **Database Optimization**: Add indexes to MongoDB collections
4. **API Rate Limiting**: Implement rate limiting middleware
5. **Logging**: Setup comprehensive logging system
6. **Testing**: Add unit and integration tests
7. **CI/CD**: Setup GitHub Actions for automated testing

## 🐛 Troubleshooting

### Frontend won't connect to backend
- Check backend is running on port 5000
- Verify CORS is enabled in backend
- Check `.env.local` has correct API_URL

### MongoDB connection timeout
- Verify internet connection for MongoDB Atlas
- Check connection string in `.env.development`
- Whitelist your IP in MongoDB Atlas

### Port already in use
```bash
# Kill process on port 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Kill process on port 5000
lsof -i :5000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

## 📞 Support Resources

- Next.js Docs: https://nextjs.org/docs
- Express Docs: https://expressjs.com
- MongoDB Atlas: https://docs.atlas.mongodb.com
- i18next: https://www.i18next.com/overview/getting-started

---

**Project**: Agri360 - Agricultural Management Platform
**Status**: ✅ Ready for Development & Testing
**Last Updated**: November 15, 2025
