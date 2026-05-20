# Deployment Guide

## Target Platform

The recommended deployment target is Vercel because the application is a Vite React frontend with no required backend service.

Netlify is also compatible with the same build output:

- build command: `npm run build`
- publish directory: `dist`

## Vercel Configuration

The repository includes `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Deployment Steps

1. Push the repository to GitHub.
2. Open Vercel and import the GitHub repository.
3. Keep the detected framework as Vite.
4. Confirm the build command is `npm run build`.
5. Confirm the output directory is `dist`.
6. Deploy from the `main` branch.

## Runtime Notes

- The MVP stores tasks in browser localStorage.
- No backend environment variables are required.
- No secrets are required.
- The deployed app is static and can be hosted by any static frontend platform.

## Future Backend Deployment

If the project later adds a backend API, the repository should introduce a new `TaskRepository` adapter that talks to the API. Domain functions, strategy classes, and React components should not need to change.
