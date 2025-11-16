# PowerShell script to push project to GitHub
# Make sure Git is installed before running this script
# Repository: https://github.com/bhumika121121/Health-Tracker.git

$ErrorActionPreference = "Stop"

Write-Host "=== Health Tracker - GitHub Deployment Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if git is available
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Check if already a git repository
if (Test-Path .git) {
    Write-Host "Git repository already initialized" -ForegroundColor Green
} else {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
}

# Check remote
$remoteUrl = git remote get-url origin 2>$null
if ($remoteUrl) {
    Write-Host "Remote already configured: $remoteUrl" -ForegroundColor Green
    if ($remoteUrl -ne "https://github.com/bhumika121121/Health-Tracker.git") {
        Write-Host "Updating remote URL..." -ForegroundColor Yellow
        git remote set-url origin https://github.com/bhumika121121/Health-Tracker.git
    }
} else {
    Write-Host "Adding remote repository..." -ForegroundColor Yellow
    git remote add origin https://github.com/bhumika121121/Health-Tracker.git
}

# Check current branch
$currentBranch = git branch --show-current 2>$null
if (-not $currentBranch) {
    Write-Host "Creating main branch..." -ForegroundColor Yellow
    git branch -M main
} elseif ($currentBranch -ne "main") {
    Write-Host "Switching to main branch..." -ForegroundColor Yellow
    git branch -M main
}

# Show status
Write-Host ""
Write-Host "Current status:" -ForegroundColor Cyan
git status --short

# Add all files
Write-Host ""
Write-Host "Adding all files..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "Creating commit..." -ForegroundColor Yellow
    $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Update: Health Tracker project changes"
    }
    git commit -m $commitMessage
} else {
    Write-Host "No changes to commit" -ForegroundColor Yellow
}

# Push to GitHub
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
try {
    git push -u origin main
    Write-Host ""
    Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/bhumika121121/Health-Tracker" -ForegroundColor Cyan
} catch {
    Write-Host ""
    Write-Host "ERROR: Failed to push to GitHub" -ForegroundColor Red
    Write-Host "You may need to authenticate. Options:" -ForegroundColor Yellow
    Write-Host "1. Use a Personal Access Token (PAT) as password" -ForegroundColor Yellow
    Write-Host "2. Set up SSH keys for authentication" -ForegroundColor Yellow
    Write-Host "3. Use GitHub Desktop or GitHub CLI" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "=== Deployment Complete ===" -ForegroundColor Cyan

