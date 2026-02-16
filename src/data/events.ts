import { CampingEvent, Package, WhatsAppContact } from '../types';
import buescherFebImage from '../assets/buescher-feb.jpg';
import coloradoBendMarImage from '../assets/colorado-bend-mar.jpg';
import goliadAprImage from '../assets/goliad-apr.jpg';
import caddoLakeAprImage from '../assets/caddo-lake-apr.jpg';
import lakeCorpusChristiMayImage from '../assets/lake-corpus-christi-may.jpg';
import eisenhowerMayImage from '../assets/eisenhower-may.jpg';
import cleburneJunImage from '../assets/cleburne-jun.jpg';
import galvestonJulImage from '../assets/galveston-jul.jpg';
import mustangIslandAugImage from '../assets/mustang-island-aug.jpg';
import guadalupeRiverSepImage from '../assets/guadalupe-river-sep.jpg';
import garnerSepImage from '../assets/garner-sep.jpg';
import pedernalesOctImage from '../assets/pedernales-oct.jpg';
import bastropNovImage from '../assets/bastrop-nov.jpg';
import lostMaplesNovImage from '../assets/lost-maples-nov.jpg';
import huntsvilleDecImage from '../assets/huntsville-dec.jpg';

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
    googleMapsUrl: 'https://maps.google.com/?q=Buescher+State+Park,+Smithville,+TX',
    coordinates: { latitude: 30.04, longitude: -97.16 }
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
    googleMapsUrl: 'https://maps.google.com/?q=Colorado+Bend+State+Park,+Bend,+TX',
    coordinates: { latitude: 31.02, longitude: -98.44 }
  },
  {
    id: 'goliad-apr',
    parkName: 'Goliad State Park',
    location: 'Goliad, Texas',
    month: 'April',
    dates: '10-12',
    imageUrl: goliadAprImage,
    features: ['Mission Espíritu Santo', 'San Antonio River', 'Historic Trails', 'Bird Watching'],
    availableSpots: 3,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/goliad',
    googleMapsUrl: 'https://maps.google.com/?q=Goliad+State+Park,+Goliad,+TX',
    coordinates: { latitude: 28.66, longitude: -97.39 }
  },
  {
    id: 'caddo-lake-apr',
    parkName: 'Caddo Lake State Park',
    location: 'Karnack, Texas',
    month: 'April',
    dates: '24-26',
    imageUrl: caddoLakeAprImage,
    features: ['Bald Cypress Forest', 'Spanish Moss', 'Bayou Paddling', 'Historic CCC Cabins'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/caddo-lake',
    googleMapsUrl: 'https://maps.google.com/?q=Caddo+Lake+State+Park,+Karnack,+TX',
    coordinates: { latitude: 32.68, longitude: -94.17 }
  },
  {
    id: 'lake-corpus-christi-may',
    parkName: 'Lake Corpus Christi State Park',
    location: 'Mathis, Texas',
    month: 'May',
    dates: '15-17',
    imageUrl: lakeCorpusChristiMayImage,
    features: ['18,256-Acre Lake', '400-Foot Fishing Pier', '200+ Bird Species', 'Historic CCC Structures'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/lake-corpus-christi',
    googleMapsUrl: 'https://maps.google.com/?q=Lake+Corpus+Christi+State+Park,+Mathis,+TX',
    coordinates: { latitude: 28.07, longitude: -97.87 }
  },
  {
    id: 'eisenhower-may',
    parkName: 'Eisenhower State Park',
    location: 'Denison, Texas',
    month: 'May',
    dates: '23-25',
    imageUrl: eisenhowerMayImage,
    features: ['Lake Texoma', 'Sandy Swimming Cove', 'Fossil Hunting', 'Bluff Trails'],
    availableSpots: 1,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/eisenhower',
    googleMapsUrl: 'https://maps.google.com/?q=Eisenhower+State+Park,+Denison,+TX',
    coordinates: { latitude: 33.82, longitude: -96.62 }
  },
  {
    id: 'cleburne-jun',
    parkName: 'Cleburne State Park',
    location: 'Cleburne, Texas',
    month: 'June',
    dates: '19-21',
    imageUrl: cleburneJunImage,
    features: ['Cedar Lake Swimming', 'Limestone Bluffs', '8+ Miles of Trails', 'Wildlife Viewing'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/cleburne',
    googleMapsUrl: 'https://maps.google.com/?q=Cleburne+State+Park,+Cleburne,+TX',
    coordinates: { latitude: 32.26, longitude: -97.56 }
  },
  {
    id: 'galveston-jul',
    parkName: 'Galveston Island State Park',
    location: 'Galveston, Texas',
    month: 'July',
    dates: '3-5',
    imageUrl: galvestonJulImage,
    features: ['5 Miles of Beach', 'Paddling Trails', 'Bay & Beach Camping', 'Nature Center'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/galveston-island',
    googleMapsUrl: 'https://maps.google.com/?q=Galveston+Island+State+Park,+Galveston,+TX',
    coordinates: { latitude: 29.20, longitude: -94.95 }
  },
  {
    id: 'mustang-island-aug',
    parkName: 'Mustang Island State Park',
    location: 'Corpus Christi, Texas',
    month: 'August',
    dates: '7-9',
    imageUrl: mustangIslandAugImage,
    features: ['Gulf Beach Access', '20-Mile Paddling Trail', 'Beach Camping', 'Bird Migration'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/mustang-island',
    googleMapsUrl: 'https://maps.google.com/?q=Mustang+Island+State+Park,+Corpus+Christi,+TX',
    coordinates: { latitude: 27.68, longitude: -97.16 }
  },
  {
    id: 'guadalupe-river-sep',
    parkName: 'Guadalupe River State Park',
    location: 'Spring Branch, Texas',
    month: 'September',
    dates: '5-7',
    imageUrl: guadalupeRiverSepImage,
    features: ['4 Miles of River', 'Tubing & Swimming', '13 Miles of Trails', 'Honey Creek Tours'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/guadalupe-river',
    googleMapsUrl: 'https://maps.google.com/?q=Guadalupe+River+State+Park,+Spring+Branch,+TX',
    coordinates: { latitude: 29.86, longitude: -98.50 }
  },
  {
    id: 'garner-sep',
    parkName: 'Garner State Park',
    location: 'Concan, Texas',
    month: 'September',
    dates: '18-20',
    imageUrl: garnerSepImage,
    features: ['Frio River Swimming', '16 Miles of Trails', 'Summer Dances', 'Hill Country Views'],
    availableSpots: 2,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/garner',
    googleMapsUrl: 'https://maps.google.com/?q=Garner+State+Park,+Concan,+TX',
    coordinates: { latitude: 29.59, longitude: -99.74 }
  },
  {
    id: 'pedernales-oct',
    parkName: 'Pedernales Falls State Park',
    location: 'Johnson City, Texas',
    month: 'October',
    dates: '23-25',
    imageUrl: pedernalesOctImage,
    features: ['Limestone Falls', 'River Swimming', 'Hill Country Trails', 'Equestrian Trails'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/pedernales-falls',
    googleMapsUrl: 'https://maps.google.com/?q=Pedernales+Falls+State+Park,+Johnson+City,+TX',
    coordinates: { latitude: 30.31, longitude: -98.26 }
  },
  {
    id: 'bastrop-nov',
    parkName: 'Bastrop State Park',
    location: 'Bastrop, Texas',
    month: 'November',
    dates: '13-15',
    imageUrl: bastropNovImage,
    features: ['Lost Pines Forest', 'Historic CCC Cabins', 'Scenic Park Road', '7 Miles of Trails'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/bastrop',
    googleMapsUrl: 'https://maps.google.com/?q=Bastrop+State+Park,+Bastrop,+TX',
    coordinates: { latitude: 30.11, longitude: -97.29 }
  },
  {
    id: 'lost-maples-nov',
    parkName: 'Lost Maples State Natural Area',
    location: 'Vanderpool, Texas',
    month: 'November',
    dates: '27-29',
    imageUrl: lostMaplesNovImage,
    features: ['Fall Foliage', 'Bigtooth Maples', '10+ Miles of Trails', 'Canyon Views'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/lost-maples',
    googleMapsUrl: 'https://maps.google.com/?q=Lost+Maples+State+Natural+Area,+Vanderpool,+TX',
    coordinates: { latitude: 29.81, longitude: -99.57 }
  },
  {
    id: 'huntsville-dec',
    parkName: 'Huntsville State Park',
    location: 'Huntsville, Texas',
    month: 'December',
    dates: '4-6',
    imageUrl: huntsvilleDecImage,
    features: ['210-Acre Lake Raven', '21 Miles of Trails', 'Kayak Rentals', 'Nature Center'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/huntsville',
    googleMapsUrl: 'https://maps.google.com/?q=Huntsville+State+Park,+Huntsville,+TX',
    coordinates: { latitude: 30.63, longitude: -95.53 }
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
