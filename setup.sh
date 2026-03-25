#!/bin/bash

# Portfolio Project Setup Script
# This script automates the setup process

echo "🚀 Portfolio Setup Script"
echo "========================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm found: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Setup environment file
if [ ! -f ".env.local" ]; then
    echo ""
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local
    echo "✅ .env.local created. Please update it with your credentials."
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "================================"
echo "✨ Setup Complete!"
echo "================================"
echo ""
echo "📝 Next steps:"
echo "1. Update .env.local with your EmailJS credentials"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:5173 in your browser"
echo ""
echo "📚 Documentation:"
echo "• Setup Guide: SETUP_GUIDE.md"
echo "• Deployment: DEPLOYMENT_CHECKLIST.md"
echo "• README: README.md"
echo ""
echo "🎉 Ready to build your portfolio!"
