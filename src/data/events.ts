import { CampingEvent, Package, WhatsAppContact } from '../types';
import goliadJanImage from '../assets/goliad-jan.jpg';
import buescherFebImage from '../assets/buescher-feb.jpg';
import coloradoBendMarImage from '../assets/colorado-bend-mar.jpg';
import caddoLakeAprImage from '../assets/caddo-lake-apr.jpg';
import pedernalesMayImage from '../assets/pedernales-may.jpg';

export const events: CampingEvent[] = [
  {
    id: 'goliad-jan',
    parkName: 'Goliad State Park',
    location: 'Goliad, Texas',
    month: 'January',
    dates: '2-4',
    imageUrl: goliadJanImage,
    features: ['Mission Espíritu Santo', 'Texas Revolution Site', 'River Paddling Trail', 'CCC Architecture'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/goliad',
    googleMapsUrl: 'https://maps.google.com/?q=Goliad+State+Park,+Goliad,+TX'
  },
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
    dates: '20-23',
    imageUrl: coloradoBendMarImage,
    features: ['70-Foot Waterfall', '250+ Wild Caves', 'Spicewood Springs', '35+ Miles of Trails'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/colorado-bend',
    googleMapsUrl: 'https://maps.google.com/?q=Colorado+Bend+State+Park,+Bend,+TX'
  },
  {
    id: 'caddo-lake-apr',
    parkName: 'Caddo Lake State Park',
    location: 'Karnack, Texas',
    month: 'April',
    dates: '24-27',
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
      'Solo Stove fire pit with wood and color flames',
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
