# Deployment Guide

This guide will help you host your **aldora** React application for free using popular hosting providers.

## Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy React applications with free SSL and global CDN.

### Method A: Using Git (Best for updates)
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Sign up at [vercel.com](https://vercel.com).
3. Import your project from your git provider.
4. Vercel will automatically detect `Vite` and run `npm run build`.
5. Click **Deploy**.

### Method B: Vercel CLI (Command Line)
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run deploy command in your project folder:
   ```bash
   vercel
   ```
3. Follow the prompts. Your site will be live in seconds.

## Option 2: Netlify (Drag & Drop)

Netlify allows you to simply drag your build folder to deploy.

1. Run the build command locally:
   ```bash
   npm run build
   ```
2. This creates a `dist` folder in your project directory.
3. Log in to [netlify.com](https://netlify.com).
4. Drag and drop the `dist` folder onto the Netlify dashboard.
5. Your site is live!

## Option 3: Surge.sh (Simple CLI)

Surge is a simple command-line tool for publishing static sites.

1. Build your project:
   ```bash
   npm run build
   ```
2. Install Surge globally:
   ```bash
   npm install --global surge
   ```
3. Deploy the `dist` folder:
   ```bash
   surge dist
   ```
4. Follow the prompts to create an account and choose a domain.

## Next Steps
- Verify your site works on the generated URL.
- Configure a custom domain if you have one.
