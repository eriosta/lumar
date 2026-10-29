import { CampingEvent, Package, WhatsAppContact } from '../types';
import caddoLakeNovImage from '../assets/caddo-lake-apr.jpg';
import daingerfieldNovImage from '../assets/daingerfield-nov.jpg';
import bastropDecImage from '../assets/bastrop-nov.jpg';

export const events: CampingEvent[] = [
  {
    id: 'caddo-lake-nov',
    parkName: 'Caddo Lake State Park',
    location: 'Karnack, Texas',
    month: 'November',
    dates: '6-8',
    imageUrl: caddoLakeNovImage,
    features: ['Bald Cypress Forest', 'Spanish Moss', 'Bayou Paddling', 'Historic CCC Cabins'],
    availableSpots: 2,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/caddo-lake',
    googleMapsUrl: 'https://maps.google.com/?q=Caddo+Lake+State+Park,+Karnack,+TX',
    coordinates: { latitude: 32.68, longitude: -94.17 },
    campsiteType: 'Campsite with Water'
  },
  {
    id: 'daingerfield-nov',
    parkName: 'Daingerfield State Park',
    location: 'Daingerfield, Texas',
    month: 'November',
    dates: '27-29',
    imageUrl: daingerfieldNovImage,
    features: ['80-Acre Spring-Fed Lake', 'Fall Foliage', 'Kayak & Paddleboat Rentals', 'Rustling Leaves Nature Trail'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/daingerfield',
    googleMapsUrl: 'https://maps.google.com/?q=Daingerfield+State+Park,+Daingerfield,+TX',
    coordinates: { latitude: 33.00, longitude: -94.69 },
    campsiteType: 'Campsite with Water and Electricity'
  },
  {
    id: 'bastrop-dec',
    parkName: 'Bastrop State Park',
    location: 'Bastrop, Texas',
    month: 'December',
    dates: '4-6',
    imageUrl: bastropDecImage,
    features: ['Lost Pines Forest', '9+ Miles of Trails', 'Historic CCC Cabins', 'Fishing & Paddling'],
    availableSpots: 0,
    totalSpots: 4,
    isSoldOut: true,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/bastrop',
    googleMapsUrl: 'https://maps.google.com/?q=Bastrop+State+Park,+Bastrop,+TX',
    coordinates: { latitude: 30.11, longitude: -97.29 },
    campsiteType: 'Campsite with Water and Electricity'
  }
];

export const packages: Package[] = [
  {
    id: 'equipment-rental',
    name: 'Camping Equipment Rental',
    price: 150,
    duration: '2 Nights / 3 Days',
    features: [
      '3-season tent for 2/3 persons (stakes & tarp included)',
      '1 Queen or 2 twin air mattress (double height)',
      '1 Tent lantern, 2 headlights or flashlights',
      '2-burner propane stove, cooking gear, utensils, coffee pot'
    ],
    isFeatured: false
  },
  {
    id: 'full-experience',
    name: 'Full Camping Experience',
    price: 250,
    originalPrice: 285,
    duration: '2 Nights / 3 Days',
    features: [
      'Camping Equipment Rental PLUS:',
      'Full campsite setup by host',
      'Portable fire pit with wood and color flames',
      'Grill, charcoal, and utensils',
      'Coolers, canopy, extra tables, extra camping chairs',
      'Dishwasher station',
      'Outdoor games (Cornhole, Bocce Balls/Bolas Criollas, etc.)',
      'Movie projector and speakers',
      'Guided hiking trip',
      'State Park entrance and use fees'
    ],
    isFeatured: true
  }
];

export const contacts: WhatsAppContact[] = [
  {
    name: 'Heriana',
    phone: '18325209075',
    displayPhone: '(832) 520-9075'
  },
  {
    name: 'Eduardo',
    phone: '17134477616',
    displayPhone: '(713) 447-7616'
  }
];
