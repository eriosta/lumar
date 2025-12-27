# 🌲 Lumar Camping Experience - React + TypeScript

Modern, production-ready React application for premium Texas State Park camping experiences with WhatsApp booking integration.

## 🚀 Tech Stack

- **React 18** - Latest React with hooks and modern patterns
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and interactions
- **Netlify** - Free hosting with auto-deploy

## ✨ Features

### Design
- 🎨 Modern, nature-focused design with custom color palette
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth scroll animations with Framer Motion
- 🎭 Interactive hover effects and transitions
- 🌈 Custom Tailwind theme with brand colors

### Functionality
- 💬 WhatsApp booking integration (no forms!)
- 📅 Dynamic event calendar
- 💰 Package comparison cards
- ⚡ Fast page loads with Vite
- 🔒 Type-safe with TypeScript
- ♻️ Reusable component architecture

## 📦 Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

The `dist` folder contains your production-ready site.

## 🚀 Deploy to Netlify

### Quick Deploy (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lumar-camping.git
git push -u origin main
```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Select your GitHub repository
   - Netlify auto-detects settings ✅
   - Click "Deploy site"

**Done!** Your site is live in 1-2 minutes. 🎉

Netlify automatically:
- Runs `npm install`
- Runs `npm run build`
- Deploys the `dist` folder
- Sets up HTTPS
- Auto-deploys on every `git push`

## 📁 Project Structure

```
lumar-camping/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── EventCard.tsx   # Event display card
│   │   ├── PackageCard.tsx # Package pricing card
│   │   └── WhatsAppButton.tsx # WhatsApp CTA button
│   ├── data/
│   │   └── events.ts       # Event, package, contact data
│   ├── types/
│   │   └── index.ts        # TypeScript type definitions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles + Tailwind
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
├── tailwind.config.js      # Tailwind config
└── netlify.toml            # Netlify config
```

## 🎨 Customization

### Update Events
Edit `src/data/events.ts`:
```typescript
export const events: CampingEvent[] = [
  {
    id: 'your-event',
    parkName: 'Your Park Name',
    location: 'City, Texas',
    month: 'December',
    dates: '15-17',
    imageUrl: 'https://your-image-url.jpg',
    features: ['Feature 1', 'Feature 2'],
    availableSpots: 2,
    totalSpots: 4,
    isSoldOut: false
  }
];
```

### Update Pricing
Edit `src/data/events.ts`:
```typescript
{
  name: 'Full Experience',
  price: 295,  // Change this
  // ...
}
```

### Update Phone Numbers
Edit `src/data/events.ts`:
```typescript
export const contacts: WhatsAppContact[] = [
  {
    name: 'Heriana',
    phone: '18325209075',  // Format: 1 + area code + number
    displayPhone: '(832) 520-9075'
  }
];
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  forest: {
    DEFAULT: '#2d5016',  // Your brand color
    // ...
  }
}
```

### Replace Images
1. Update image URLs in `src/data/events.ts`
2. Or create `src/assets/` folder and import local images:
```typescript
import myImage from './assets/my-image.jpg';
```

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### TypeScript

This project uses TypeScript for type safety. All types are defined in `src/types/index.ts`.

Example:
```typescript
interface CampingEvent {
  id: string;
  parkName: string;
  // ...
}
```

### Component Development

Create new components in `src/components/`:

```typescript
// MyComponent.tsx
import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Hello World!
    </motion.div>
  );
};

export default MyComponent;
```

## 📱 WhatsApp Integration

WhatsApp links are generated in `WhatsAppButton.tsx`:

```typescript
const message = encodeURIComponent("Your message here");
const url = `https://wa.me/${phone}?text=${message}`;
```

Format: `wa.me/COUNTRYCODE+PHONENUMBER`
- US: `wa.me/1XXXXXXXXXX`

## 🎯 Adding Features

### Add a New Section
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to component tree

### Add Routing (Multi-page)
```bash
npm install react-router-dom
```

### Add Forms
```bash
npm install react-hook-form
```

### Add CMS
Consider: Sanity, Contentful, or Strapi

## 🌐 SEO & Meta Tags

Update in `index.html`:
```html
<meta name="description" content="Your description">
<meta property="og:title" content="Your title">
```

## 📊 Analytics

Add Google Analytics in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port in vite.config.ts
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check tsconfig.json
# Run type check
npx tsc --noEmit
```

## 🔄 Updates & Maintenance

### Update Dependencies
```bash
npm update              # Update to latest compatible versions
npm outdated            # Check for newer versions
```

### Making Changes
```bash
git add .
git commit -m "Your changes"
git push
# Netlify auto-deploys! ✨
```

## 💰 Hosting Costs

**Netlify Free Tier:**
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Automatic HTTPS
- ✅ Continuous deployment
- ✅ Custom domains
- ✅ Forms (100 submissions/month)

**Total: $0/month** 🎉

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Contributing

This is a custom project, but feel free to fork and customize for your needs!

---

Built with ❤️ using React + TypeScript + Vite

**Questions?** Check the docs or open an issue.
