# AWS Amplify Deployment Guide

## ✅ Completed Steps

1. ✅ Git repository initialized
2. ✅ GitHub repository created: https://github.com/Vishal2941504/spaceoptix
3. ✅ Code pushed to GitHub (main branch)
4. ✅ `amplify.yml` build configuration file created

## 🚀 Deploy via AWS Amplify Console (Recommended)

Since AWS CLI credentials need to be configured, the easiest way to deploy is through the AWS Amplify Console:

### Step 1: Access AWS Amplify Console
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Sign in with your AWS account (or create one if needed - Free Tier eligible)

### Step 2: Create New App
1. Click **"New app"** → **"Host web app"**
2. Select **"GitHub"** as your source
3. Authorize AWS Amplify to access your GitHub account
4. Select repository: **`Vishal2941504/spaceoptix`**
5. Select branch: **`main`**

### Step 3: Configure Build Settings
The `amplify.yml` file is already configured, but verify these settings:

**Build settings:**
- **Build command:** `npm install && npm run build`
- **Output directory:** `build`
- **Base directory:** (leave empty)

The console should auto-detect the `amplify.yml` file. If not, use these settings:
```
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
```

### Step 4: Review and Deploy
1. Review the settings
2. Click **"Save and deploy"**
3. Wait for the build to complete (5-10 minutes)

### Step 5: Get Your Live URL
Once deployment completes, you'll get a URL like:
- `https://main.xxxxxxxxxxxx.amplifyapp.com`
- Or a custom domain if configured

## 🔧 Alternative: Using AWS CLI (If Credentials Configured)

If you have AWS credentials configured, you can use:

```bash
# Create Amplify app
aws amplify create-app \
  --name spaceoptix \
  --repository https://github.com/Vishal2941504/spaceoptix \
  --platform WEB \
  --environment-variables BUILD_COMMAND="npm install && npm run build",OUTPUT_DIR="build"

# Create branch
aws amplify create-branch \
  --app-id <app-id> \
  --branch-name main

# Start deployment
aws amplify start-deployment \
  --app-id <app-id> \
  --branch-name main
```

## 📋 Pre-Deployment Checklist

- [x] Git repository initialized
- [x] GitHub repository created
- [x] Code pushed to main branch
- [x] `amplify.yml` build configuration created
- [x] `package.json` has build script
- [x] `.gitignore` properly configured
- [ ] AWS account created/accessed
- [ ] AWS Amplify app created
- [ ] Build completed successfully
- [ ] Live URL obtained

## 🆓 AWS Free Tier

AWS Amplify Hosting is eligible for the AWS Free Tier:
- **Free Tier:** 15 GB storage and 5 GB served per month
- **Build minutes:** 1,000 minutes per month
- Perfect for small to medium React applications

## 🔗 Repository Information

- **GitHub URL:** https://github.com/Vishal2941504/spaceoptix
- **Branch:** main
- **Build Config:** `amplify.yml`

## 📝 Notes

- The app will automatically redeploy on every push to the main branch
- Build logs are available in the Amplify Console
- Custom domains can be configured after initial deployment
- Environment variables can be added in the Amplify Console if needed

