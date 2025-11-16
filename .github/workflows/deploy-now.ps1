# Quick Deployment Script - Run this once Git is installed
# This script will push your project and trigger the GitHub Actions workflow

Write-Host "=== Deploying Health Tracker to GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Refresh PATH to include Git if just installed
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Try to find Git
$gitPath = $null
if (Get-Command git -ErrorAction SilentlyContinue) {
    $gitPath = "git"
} elseif (Test-Path "C:\Program Files\Git\bin\git.exe") {
    $gitPath = "C:\Program Files\Git\bin\git.exe"
} elseif (Test-Path "C:\Program Files (x86)\Git\bin\git.exe") {
    $gitPath = "C:\Program Files (x86)\Git\bin\git.exe"
}

if (-not $gitPath) {
    Write-Host "ERROR: Git not found. Please:" -ForegroundColor Red
    Write-Host "1. Install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "2. Restart your terminal" -ForegroundColor Yellow
    Write-Host "3. Run this script again" -ForegroundColor Yellow
    exit 1
}

Write-Host "Git found! Proceeding with deployment..." -ForegroundColor Green
Write-Host ""

# Initialize repository if needed
if (-not (Test-Path .git)) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    & $gitPath init
}

# Check/Set remote
$remoteUrl = & $gitPath remote get-url origin 2>$null
if (-not $remoteUrl) {
    Write-Host "Adding remote repository..." -ForegroundColor Yellow
    & $gitPath remote add origin https://github.com/bhumika121121/Health-Tracker.git
} elseif ($remoteUrl -ne "https://github.com/bhumika121121/Health-Tracker.git") {
    Write-Host "Updating remote URL..." -ForegroundColor Yellow
    & $gitPath remote set-url origin https://github.com/bhumika121121/Health-Tracker.git
}

# Set branch to main
& $gitPath branch -M main

# Add all files
Write-Host "Staging all files..." -ForegroundColor Yellow
& $gitPath add .

# Commit
Write-Host "Creating commit..." -ForegroundColor Yellow
$commitMsg = "Initial commit: Health Tracker project with GitHub Actions deployment"
& $gitPath commit -m $commitMsg

# Push
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Note: You may be prompted for GitHub credentials" -ForegroundColor Cyan
& $gitPath push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/bhumika121121/Health-Tracker/settings/pages" -ForegroundColor Yellow
    Write-Host "2. Under 'Source', select 'GitHub Actions'" -ForegroundColor Yellow
    Write-Host "3. The deploy.yml workflow will automatically deploy your site!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Your site will be available at:" -ForegroundColor Cyan
    Write-Host "https://bhumika121121.github.io/Health-Tracker/" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Push failed. You may need to:" -ForegroundColor Red
    Write-Host "1. Authenticate with GitHub (use Personal Access Token)" -ForegroundColor Yellow
    Write-Host "2. Check your internet connection" -ForegroundColor Yellow
}

