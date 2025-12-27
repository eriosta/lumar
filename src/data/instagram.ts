// Instagram post data
// Using local images from src/assets folder

import instagramImage1 from '../assets/1.avif';
import instagramImage2 from '../assets/2.jpg';
import instagramImage3 from '../assets/3.avif';
import instagramImage4 from '../assets/4.avif';
import instagramImage5 from '../assets/5.avif';
import instagramImage6 from '../assets/6.jpg';

export interface InstagramPost {
  id: string;
  imageUrl: string | any; // Can be a URL string or imported image module
  postUrl: string; // Link to the Instagram post
  alt: string; // Description for accessibility
  timestamp?: string; // Optional: when the post was created
}

// Instagram images from local assets
export const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: instagramImage1,
    postUrl: 'https://www.instagram.com/lumar.adventures',
    alt: 'Camping adventure at Texas State Park',
  },
  {
    id: '2',
    imageUrl: instagramImage2,
    postUrl: 'https://www.instagram.com/lumar.adventures',
    alt: 'Outdoor camping experience',
  },
  {
    id: '3',
    imageUrl: instagramImage3,
    postUrl: 'https://www.instagram.com/lumar.adventures',
    alt: 'Camping under the stars',
  },
  {
    id: '4',
    imageUrl: instagramImage4,
    postUrl: 'https://www.instagram.com/lumar.adventures',
    alt: 'Nature camping adventure',
  },
  {
    id: '5',
    imageUrl: instagramImage5,
    postUrl: 'https://www.instagram.com/lumar.adventures',
    alt: 'Texas State Park camping',
  },
  {
    id: '6',
    imageUrl: instagramImage6,
    postUrl: 'https://www.instagram.com/lumar.adventures',
    alt: 'Camping experience',
  },
];

// Instagram profile URL
export const instagramProfileUrl = 'https://www.instagram.com/lumar.adventures';

// Hashtag
export const instagramHashtag = '#LumarAdventures';

// To update images:
// 1. Replace the image files in src/assets/ (keep the same names: 1, 2, 3, 4, 5, 6)
// 2. Update the alt text descriptions above to match your new images
// 3. If you have specific Instagram post URLs, update the postUrl fields above
//
// To add more images:
// 1. Add new image files to src/assets/
// 2. Import them at the top of this file
// 3. Add new entries to the instagramPosts array

