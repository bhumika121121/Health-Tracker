# Deployment Guide - Health Tracker

## Current Status
✅ All deployment files are ready:
- `.github/workflows/deploy.yml` - GitHub Actions workflow configured
- `.cursorrules` - Cursor deployment rules set up
- `push-to-github.ps1` - Automated deployment script ready
- `.gitignore` - Git ignore file configured
- `README.md` - Project documentation complete

## To Deploy Your Project

### Step 1: Install Git (Required)
1. Download Git for Windows: https://git-scm.com/download/win
2. Install with default settings
3. **Important**: Restart your terminal/PowerShell after installation

### Step 2: Run Deployment Script
Once Git is installed, run:
```powershell
.\push-to-github.ps1
```

Or manually execute:
```powershell
git init
git add .
git commit -m "Initial commit: Health Tracker project"
git remote add origin https://github.com/bhumika121121/Health-Tracker.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
After pushing:
1. Go to: https://github.com/bhumika121121/Health-Tracker/settings/pages
2. Under "Source", select **"GitHub Actions"**
3. Your site will be automatically deployed!

### Step 4: Automatic Deployment
Every time you push to `main` branch:
- The `.github/workflows/deploy.yml` workflow will automatically run
- Your `wellness/` folder will be deployed to GitHub Pages
- Your site will be live at: `https://bhumika121121.github.io/Health-Tracker/`

## Authentication
When pushing, GitHub will ask for credentials:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (PAT), not your GitHub password
  - Create PAT: https://github.com/settings/tokens
  - Select scope: `repo` (full control of private repositories)

## Troubleshooting
- If Git is not recognized: Restart terminal after installation
- If push fails: Check your GitHub credentials/PAT
- If workflow doesn't run: Ensure GitHub Pages source is set to "GitHub Actions"

