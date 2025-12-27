# 🚀 Quick Start - Lumar Camping React App

Get your site running locally in 2 minutes, deployed in 5 minutes!

## ⚡ Run Locally (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

**That's it!** ✨ The site should open automatically.

---

## 🌐 Deploy to Netlify (5 minutes)

### Step 1: Push to GitHub (2 min)

```bash
git init
git add .
git commit -m "Initial commit - Lumar Camping React app"
git branch -M main
git remote add origin https://github.com/eriosta/lumar-camping.git
git push -u origin main
```

### Step 2: Deploy on Netlify (2 min)

1. Go to **[netlify.com](https://netlify.com)** and sign up (free)
2. Click **"Add new site"** → **"Import from Git"**
3. Select **GitHub** and choose your repo
4. Netlify auto-detects settings ✅
5. Click **"Deploy site"**

### Step 3: Wait 1-2 minutes ⏱️

Netlify will:
- Run `npm install`
- Run `npm run build`
- Deploy your site
- Give you a URL like: `https://random-name.netlify.app`

**Done!** 🎉

---

## 🎯 What to Update Before Launch

### 1. Phone Numbers
In `src/data/events.ts`, update:
```typescript
export const contacts = [
  {
    name: 'Heriana',
    phone: '18325209075',        // ← Change this
    displayPhone: '(832) 520-9075' // ← And this
  }
];
```

**Format:** `phone` must be `1XXXXXXXXXX` (no spaces, dashes, or parentheses)

### 2. Event Dates & Availability
In `src/data/events.ts`:
```typescript
{
  month: 'December',      // ← Update month
  dates: '15-17',        // ← Update dates
  availableSpots: 2,     // ← Update availability
  isSoldOut: false       // ← Update if sold out
}
```

### 3. Package Pricing (if needed)
In `src/data/events.ts`:
```typescript
{
  name: 'Full Experience',
  price: 295,  // ← Change price here
}
```

---

## 📝 Making Updates Later

After making changes to any files:

```bash
git add .
git commit -m "Updated event dates"
git push
```

**Netlify auto-deploys in 1-2 minutes!** No manual rebuild needed. 🚀

---

## 🎨 Quick Customizations

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  sunset: {
    DEFAULT: '#d97642',  // ← Your CTA button color
  }
}
```

### Update Images
Replace URLs in `src/data/events.ts`:
```typescript
imageUrl: 'https://your-new-image-url.jpg',
```

### Add New Events
In `src/data/events.ts`, add to the array:
```typescript
export const events = [
  // ... existing events
  {
    id: 'new-event',
    parkName: 'New Park',
    location: 'City, Texas',
    month: 'December',
    dates: '10-12',
    imageUrl: 'https://...',
    features: ['Feature 1', 'Feature 2'],
    availableSpots: 3,
    totalSpots: 4,
    isSoldOut: false
  }
];
```

---

## 💡 Pro Tips

### View Production Build Locally
```bash
npm run build
npm run preview
```

### Check for Errors
```bash
npm run lint
```

### Clear Cache (if issues)
```bash
rm -rf node_modules package-lock.json dist
npm install
```

---

## 🆘 Common Issues

**Problem:** `npm install` fails
**Solution:** Make sure you have Node.js 16+ installed
```bash
node --version  # Should be v16 or higher
```

**Problem:** Port 3000 in use
**Solution:** Kill the process or change port in `vite.config.ts`
```bash
npx kill-port 3000
```

**Problem:** Changes not showing
**Solution:** Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

**Problem:** Build fails on Netlify
**Solution:** Check the deploy log in Netlify dashboard for error details

---

## 📚 Next Steps

✅ **Launched?** Awesome! Here's what to do next:

1. **Share your link** on social media
2. **Add to Instagram bio**
3. **Create a QR code** at [qr-code-generator.com](https://www.qr-code-generator.com)
4. **Set up custom domain** (optional, ~$12/year)
5. **Add Google Analytics** (see README.md)

---

## 📖 Full Documentation

For detailed info, see **README.md** which covers:
- Full project structure
- Component development
- TypeScript usage
- Adding new features
- SEO optimization
- And much more!

---

## 🎉 You're All Set!

**Local dev:** `npm run dev`
**Deploy:** `git push` (Netlify auto-deploys!)
**Cost:** $0/month on Netlify free tier

**Happy camping! 🏕️**
