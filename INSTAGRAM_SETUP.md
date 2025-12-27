# 📸 Instagram Integration Setup Guide

This guide will help you add your actual Instagram images to the website.

## 🎯 Quick Setup (Manual Method - Recommended)

### Step 1: Get Instagram Image URLs

1. **Open your Instagram post** in a web browser (not the app)
   - Go to `https://www.instagram.com/lumar.adventures`
   - Click on a post you want to display

2. **Get the image URL:**
   - **Method A (Easiest):**
     - Right-click on the image
     - Select "Inspect" or "Inspect Element"
     - Look for an `<img>` tag
     - Copy the `src` URL (it will look like: `https://scontent.cdninstagram.com/v/...`)
   
   - **Method B:**
     - Right-click on the image → "Copy image address"
     - This copies the direct image URL

3. **Get the post URL:**
   - Copy the URL from your browser's address bar
   - It will look like: `https://www.instagram.com/p/ABC123XYZ/`

### Step 2: Update the Data File

Open `src/data/instagram.ts` and replace the placeholder entries:

```typescript
export const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: 'https://scontent.cdninstagram.com/v/t51.2885-15/...', // ← Paste your image URL here
    postUrl: 'https://www.instagram.com/p/ABC123XYZ/', // ← Paste your post URL here
    alt: 'Camping under the stars at Goliad State Park', // ← Describe the image
  },
  {
    id: '2',
    imageUrl: 'https://scontent.cdninstagram.com/v/t51.2885-15/...',
    postUrl: 'https://www.instagram.com/p/DEF456UVW/',
    alt: 'Sunset campfire at Buescher State Park',
  },
  // Add up to 6-9 images
];
```

### Step 3: Save and Test

1. Save the file
2. The website will automatically update
3. Check that images load correctly

---

## 🔄 Automatic Updates (Advanced - Optional)

If you want images to update automatically from Instagram, you have several options:

### Option 1: Instagram Basic Display API

**Pros:** Free, official Instagram API  
**Cons:** Requires backend server, OAuth setup

1. Create a Facebook App at [developers.facebook.com](https://developers.facebook.com)
2. Add Instagram Basic Display product
3. Set up OAuth flow
4. Create backend endpoint to fetch posts
5. Update `InstagramSection.tsx` to fetch from API

### Option 2: Third-Party Services (Easiest)

**Recommended Services:**
- **Curator.io** - Free tier, easy setup
- **SnapWidget** - Simple embed code
- **EmbedSocial** - Hashtag aggregation

**Setup with Curator.io:**
1. Sign up at [curator.io](https://curator.io)
2. Connect your Instagram account
3. Get embed code or API key
4. Update component to use their widget

### Option 3: Instagram Graph API (For Business Accounts)

If you have an Instagram Business account:
1. Connect to Facebook Page
2. Use Instagram Graph API
3. Requires Facebook Developer account

---

## 📝 Tips

1. **Image Quality:** Use high-resolution images (at least 400x400px)
2. **Alt Text:** Write descriptive alt text for accessibility
3. **Number of Images:** Display 6-9 images for best visual impact
4. **Update Regularly:** Refresh images monthly to keep content fresh
5. **Post URLs:** Always link to actual Instagram posts for engagement

---

## 🐛 Troubleshooting

**Images not loading?**
- Check that URLs are complete and valid
- Make sure URLs start with `https://`
- Try opening the image URL directly in a browser

**Images look blurry?**
- Instagram CDN URLs may have size parameters
- Try removing size parameters from URL
- Or use a higher resolution version

**Want to add more than 6 images?**
- Update the `.slice(0, 6)` in `InstagramSection.tsx` to `.slice(0, 9)`
- Adjust grid layout if needed

---

## ✅ Checklist

- [ ] Collected 6-9 Instagram post image URLs
- [ ] Collected corresponding post URLs
- [ ] Updated `src/data/instagram.ts` with real data
- [ ] Tested images load correctly
- [ ] Verified links open correct Instagram posts
- [ ] Checked mobile responsiveness

---

**Need help?** Check the comments in `src/data/instagram.ts` for more detailed instructions.

