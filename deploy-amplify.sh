#!/bin/bash

# AWS Amplify Deployment Script
# This script automates the deployment of SpaceOptix to AWS Amplify Hosting

set -e

REPO_URL="https://github.com/Vishal2941504/spaceoptix"
APP_NAME="spaceoptix"
BRANCH_NAME="main"

echo "🚀 Deploying SpaceOptix to AWS Amplify..."
echo ""

# Check AWS CLI
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI not found. Please install it first."
    exit 1
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS credentials not configured."
    echo "Please run: aws configure"
    echo "Or use the AWS Amplify Console: https://console.aws.amazon.com/amplify"
    exit 1
fi

echo "✅ AWS CLI configured"
echo ""

# Create Amplify app
echo "📦 Creating Amplify app..."
APP_ID=$(aws amplify create-app \
    --name "$APP_NAME" \
    --repository "$REPO_URL" \
    --platform WEB \
    --oauth-token "$(gh auth token)" \
    --query 'app.appId' \
    --output text 2>/dev/null || echo "")

if [ -z "$APP_ID" ]; then
    echo "⚠️  Could not create app via CLI. Using manual method..."
    echo ""
    echo "Please use the AWS Amplify Console:"
    echo "1. Go to: https://console.aws.amazon.com/amplify"
    echo "2. Click 'New app' → 'Host web app'"
    echo "3. Select GitHub and authorize"
    echo "4. Select repository: $REPO_URL"
    echo "5. Branch: $BRANCH_NAME"
    echo "6. Build settings are in amplify.yml (auto-detected)"
    echo "7. Click 'Save and deploy'"
    exit 0
fi

echo "✅ App created with ID: $APP_ID"
echo ""

# Create branch
echo "🌿 Creating branch: $BRANCH_NAME"
aws amplify create-branch \
    --app-id "$APP_ID" \
    --branch-name "$BRANCH_NAME" \
    --enable-auto-build \
    --enable-pull-request-preview

echo "✅ Branch created"
echo ""

# Start deployment
echo "🚀 Starting deployment..."
JOB_ID=$(aws amplify start-job \
    --app-id "$APP_ID" \
    --branch-name "$BRANCH_NAME" \
    --job-type RELEASE \
    --query 'jobSummary.jobId' \
    --output text)

echo "✅ Deployment started. Job ID: $JOB_ID"
echo ""
echo "📊 Monitor deployment at:"
echo "https://console.aws.amazon.com/amplify/home?region=us-east-1#/$APP_ID/$BRANCH_NAME"
echo ""
echo "⏳ Waiting for deployment to complete..."
echo ""

# Wait for deployment (optional - can be interrupted)
aws amplify get-job \
    --app-id "$APP_ID" \
    --branch-name "$BRANCH_NAME" \
    --job-id "$JOB_ID" \
    --query 'job.steps[*].[stepName,status]' \
    --output table

echo ""
echo "✅ Deployment initiated!"
echo "Check the AWS Console for the live URL."

