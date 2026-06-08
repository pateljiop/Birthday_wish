# 📤 GitHub Upload Instructions

Follow these steps to upload your birthday website to GitHub:

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `birthday-wish-komal` (or any name you like)
3. Description: `Special birthday website for Komal 💖`
4. Choose: **Public** or **Private**
5. **Do NOT** initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Upload Files to GitHub

### Essential Files & Folders to Upload:

```
birthday-wish-komal/
├── src/                         # All source files
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/          # All component files
│   ├── styles/
│   │   ├── theme.css
│   │   └── fonts.css
│   └── imports/                 # If any
├── public/                      # Static assets
├── package.json
├── pnpm-lock.yaml              # Or package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── index.html
├── README.md
├── .gitignore
└── LICENSE (optional)
```

### Option A: Upload via GitHub Web Interface

1. On your new repository page, click "uploading an existing file"
2. Drag and drop all files/folders listed above
3. Scroll down and click "Commit changes"

### Option B: Upload via Git Commands

```bash
# Navigate to your project folder
cd /path/to/your/project

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "🎂 Initial commit - Birthday website for Komal 💖"

# Add remote (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/birthday-wish-komal.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select **GitHub Actions**
4. Create a new file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Commit this file
6. Your site will be live at: `https://USERNAME.github.io/birthday-wish-komal/`

## Step 4: Custom Domain (Optional)

If you want a custom domain like `komalbirthday.com`:

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In repository **Settings** > **Pages** > **Custom domain**
3. Enter your domain and save
4. In your domain registrar, add these DNS records:
   - Type: A, Host: @, Value: 185.199.108.153
   - Type: A, Host: @, Value: 185.199.109.153
   - Type: A, Host: @, Value: 185.199.110.153
   - Type: A, Host: @, Value: 185.199.111.153
   - Type: CNAME, Host: www, Value: USERNAME.github.io

## Alternative Deployment Options

### Vercel (Recommended - Faster)
1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy (automatic builds on every push)
4. Free custom domain: `your-project.vercel.app`

### Netlify
1. Go to https://netlify.com
2. Drag & drop your `dist` folder
3. Or connect GitHub repository
4. Free custom domain: `your-project.netlify.app`

## Troubleshooting

### Build fails?
- Make sure all dependencies are in `package.json`
- Check Node version is 18 or higher
- Run `pnpm install` and `pnpm build` locally first

### Site not loading?
- Check GitHub Actions tab for build status
- Ensure GitHub Pages is enabled in Settings
- Wait 5-10 minutes for DNS propagation

### Need help?
- Check GitHub Actions logs
- Read error messages carefully
- Search error on Google/StackOverflow

## 🎉 You're Done!

Your romantic birthday website is now live on the internet! 💖

Share the link with Komal: `https://USERNAME.github.io/birthday-wish-komal/`
