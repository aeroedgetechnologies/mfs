# Energy World - Energy Solutions Platform

A comprehensive energy solutions platform with frontend (Next.js) and backend (Node.js/Express) applications.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB (for backend)

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at: http://localhost:3000

### Backend (Node.js/Express)

```bash
cd backend
npm install
npm run dev
```

Backend API will be available at: http://localhost:3001

## 📦 Deployment Options

### Option 1: Vercel (Frontend) + Railway/Render (Backend)

#### Frontend Deployment (Vercel)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.com
   NEXT_PUBLIC_SITE_URL=https://your-frontend-url.com
   ```
4. Deploy

#### Backend Deployment (Railway/Render)
1. Push your code to GitHub
2. Connect your repository to Railway or Render
3. Set environment variables:
   ```
   PORT=3001
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=production
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=energyworld.uae@gmail.com
   EMAIL_PASS=your_gmail_app_password
   EMAIL_FROM=energyworld.uae@gmail.com
   ```
4. Deploy

### Option 2: DigitalOcean App Platform

1. Create a new app in DigitalOcean
2. Connect your GitHub repository
3. Configure both frontend and backend services
4. Set environment variables for each service
5. Deploy

### Option 3: AWS/Google Cloud/Azure

#### Frontend (Static Hosting)
- AWS S3 + CloudFront
- Google Cloud Storage + Cloud CDN
- Azure Blob Storage + CDN

#### Backend (Server/Container)
- AWS EC2/ECS
- Google Cloud Compute Engine/Cloud Run
- Azure Virtual Machines/Container Instances

## 🔧 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Energy World
```

### Backend (.env)
```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/energyworld
NODE_ENV=development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=energyworld.uae@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM=energyworld.uae@gmail.com
```

## 🏗️ Build Commands

### Frontend
```bash
npm run build  # Build for production
npm start      # Start production server
```

### Backend
```bash
npm start      # Start production server
```

## 📁 Project Structure

```
├── frontend/          # Next.js frontend application
│   ├── app/          # App router pages
│   ├── public/       # Static assets
│   └── package.json
├── backend/          # Node.js backend API
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   └── package.json
└── README.md
```

## 🔒 Security Notes

- Update email credentials in production
- Use environment variables for sensitive data
- Enable HTTPS in production
- Set up proper CORS configuration
- Use MongoDB Atlas for production database

## 📞 Contact

- Email: energyworld.uae@gmail.com
- Phone: +971 589120710

## 🚀 Ready to Deploy!

Your application is now ready for deployment. Choose your preferred platform and follow the deployment instructions above.
