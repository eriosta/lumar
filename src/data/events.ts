import { CampingEvent, Package, WhatsAppContact } from '../types';
import buescherFebImage from '../assets/buescher-feb.jpg';
import coloradoBendMarImage from '../assets/colorado-bend-mar.jpg';
import caddoLakeAprImage from '../assets/caddo-lake-apr.jpg';
import pedernalesMayImage from '../assets/pedernales-may.jpg';

export const events: CampingEvent[] = [
  {
    id: 'buescher-feb',
    parkName: 'Buescher State Park',
    location: 'Smithville, Texas',
    month: 'February',
    dates: '20-22',
    imageUrl: buescherFebImage,
    features: ['Lost Pines Ecosystem', '30-Acre Lake', 'Scenic Park Road', 'CCC History'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/buescher',
    googleMapsUrl: 'https://maps.google.com/?q=Buescher+State+Park,+Smithville,+TX'
  },
  {
    id: 'colorado-bend-mar',
    parkName: 'Colorado Bend State Park',
    location: 'Bend, Texas',
    month: 'March',
    dates: '20-22',
    imageUrl: coloradoBendMarImage,
    features: ['70-Foot Waterfall', '250+ Wild Caves', 'Spicewood Springs', '35+ Miles of Trails'],
    availableSpots: 0,
    totalSpots: 4,
    isSoldOut: true,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/colorado-bend',
    googleMapsUrl: 'https://maps.google.com/?q=Colorado+Bend+State+Park,+Bend,+TX'
  },
  {
    id: 'caddo-lake-apr',
    parkName: 'Caddo Lake State Park',
    location: 'Karnack, Texas',
    month: 'April',
    dates: '24-26',
    imageUrl: caddoLakeAprImage,
    features: ['Bald Cypress Forest', 'Spanish Moss', 'Bayou Paddling', 'Only Natural Lake'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/caddo-lake',
    googleMapsUrl: 'https://maps.google.com/?q=Caddo+Lake+State+Park,+Karnack,+TX'
  },
  {
    id: 'pedernales-may',
    parkName: 'Pedernales Falls State Park',
    location: 'Johnson City, Texas',
    month: 'May',
    dates: '15-17',
    imageUrl: pedernalesMayImage,
    features: ['50-Foot Cascade', 'River Swimming & Tubing', '40+ Miles of Trails', 'Hill Country Views'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/pedernales-falls',
    googleMapsUrl: 'https://maps.google.com/?q=Pedernales+Falls+State+Park,+Johnson+City,+TX'
  },
  {
    id: 'coming-soon-jun',
    parkName: 'Coming Soon',
    location: 'Texas',
    month: 'June',
    dates: '',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop',
    features: ['Details Coming Soon'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: '',
    googleMapsUrl: ''
  },
  {
    id: 'coming-soon-jul',
    parkName: 'Coming Soon',
    location: 'Texas',
    month: 'July',
    dates: '',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop',
    features: ['Details Coming Soon'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: '',
    googleMapsUrl: ''
  },
  {
    id: 'coming-soon-aug',
    parkName: 'Coming Soon',
    location: 'Texas',
    month: 'August',
    dates: '',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop',
    features: ['Details Coming Soon'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: '',
    googleMapsUrl: ''
  },
  {
    id: 'coming-soon-sep',
    parkName: 'Coming Soon',
    location: 'Texas',
    month: 'September',
    dates: '',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop',
    features: ['Details Coming Soon'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: '',
    googleMapsUrl: ''
  },
  {
    id: 'coming-soon-oct',
    parkName: 'Coming Soon',
    location: 'Texas',
    month: 'October',
    dates: '',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop',
    features: ['Details Coming Soon'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: '',
    googleMapsUrl: ''
  },
  {
    id: 'coming-soon-nov',
    parkName: 'Coming Soon',
    location: 'Texas',
    month: 'November',
    dates: '',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop',
    features: ['Details Coming Soon'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: '',
    googleMapsUrl: ''
  },
  {
    id: 'coming-soon-dec',
    parkName: 'Coming Soon',
    location: 'Texas',
    month: 'December',
    dates: '',
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop',
    features: ['Details Coming Soon'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: '',
    googleMapsUrl: ''
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
    price: 285,
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
      'State Park entrance and use fees',
      'Breakfast included!'
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
