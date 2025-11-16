# Health Tracker

A comprehensive wellness and health tracking website with features for diet planning, health calculators, wellness tips, and more.

## Repository

**GitHub**: https://github.com/bhumika121121/Health-Tracker.git

## Deployment

### Quick Deploy from Cursor

1. **Using the PowerShell Script** (Recommended):
   ```powershell
   .\push-to-github.ps1
   ```

2. **Manual Git Commands**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

### Automated Deployment

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the `main` branch.

**To enable GitHub Pages:**
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your site

## Project Structure

```
wellness/
├── index.html          # Main homepage
├── about.html          # About page
├── calculator.html     # Health calculator
├── contact.html        # Contact page
├── diet-plans.html     # Diet plans page
├── leftover-recipes.html # Recipes page
├── wellness-tips.html  # Wellness tips page
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript
└── chatbot.js          # Chatbot functionality
```

## Features

- Health calculators
- Personalized diet plans
- Wellness tips and advice
- Recipe suggestions
- Interactive chatbot

## Development

This is a static website built with HTML, CSS, and JavaScript. No build process required - just open `wellness/index.html` in a browser.

## License

This project is open source and available for personal use.

