@echo off
REM Portfolio Project Setup Script for Windows

echo.
echo 🚀 Portfolio Setup Script
echo ========================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js found: %NODE_VERSION%

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ npm found: %NPM_VERSION%

REM Install dependencies
echo.
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Setup environment file
if not exist ".env.local" (
    echo.
    echo 📝 Creating .env.local file...
    copy .env.example .env.local
    echo ✅ .env.local created. Please update it with your credentials.
) else (
    echo ✅ .env.local already exists
)

echo.
echo ================================
echo ✨ Setup Complete!
echo ================================
echo.
echo 📝 Next steps:
echo 1. Update .env.local with your EmailJS credentials
echo 2. Run 'npm run dev' to start the development server
echo 3. Open http://localhost:5173 in your browser
echo.
echo 📚 Documentation:
echo • Setup Guide: SETUP_GUIDE.md
echo • Deployment: DEPLOYMENT_CHECKLIST.md
echo • README: README.md
echo.
echo 🎉 Ready to build your portfolio!
echo.
pause
