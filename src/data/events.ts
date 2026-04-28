import { CampingEvent, Package, WhatsAppContact } from '../types';
import lakeCorpusChristiMayImage from '../assets/lake-corpus-christi-may.jpg';
import eisenhowerMayImage from '../assets/eisenhower-may.jpg';
import cleburneJunImage from '../assets/cleburne-jun.jpg';
import mckinneyFallsJulImage from '../assets/mckinney-falls-jul.jpg';
import garnerSepImage from '../assets/garner-sep.jpg';
import inksLakeOctImage from '../assets/inks-lake-oct.jpg';
import pedernalesOctImage from '../assets/pedernales-oct.jpg';
import bastropNovImage from '../assets/bastrop-nov.jpg';
import lostMaplesNovImage from '../assets/lost-maples-nov.jpg';
import huntsvilleDecImage from '../assets/huntsville-dec.jpg';

export const events: CampingEvent[] = [
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
    coordinates: { latitude: 28.07, longitude: -97.87 },
    campsiteType: 'Campsite with Water and Electricity'
  },
  {
    id: 'eisenhower-may',
    parkName: 'Eisenhower State Park',
    location: 'Denison, Texas',
    month: 'May',
    dates: '29-31',
    imageUrl: eisenhowerMayImage,
    features: ['Lake Texoma', 'Sandy Swimming Cove', 'Fossil Hunting', 'Bluff Trails'],
    availableSpots: 0,
    totalSpots: 4,
    isSoldOut: true,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/eisenhower',
    googleMapsUrl: 'https://maps.google.com/?q=Eisenhower+State+Park,+Denison,+TX',
    coordinates: { latitude: 33.82, longitude: -96.62 },
    campsiteType: 'Campsite with Water and Electricity'
  },
  {
    id: 'cleburne-jun',
    parkName: 'Cleburne State Park',
    location: 'Cleburne, Texas',
    month: 'June',
    dates: '19-21',
    imageUrl: cleburneJunImage,
    features: ['Cedar Lake Swimming', 'Limestone Bluffs', '8+ Miles of Trails', 'Wildlife Viewing'],
    availableSpots: 0,
    totalSpots: 4,
    isSoldOut: true,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/cleburne',
    googleMapsUrl: 'https://maps.google.com/?q=Cleburne+State+Park,+Cleburne,+TX',
    coordinates: { latitude: 32.26, longitude: -97.56 },
    campsiteType: 'Campsite with Water and Electricity'
  },
  {
    id: 'mckinney-falls-jul',
    parkName: 'McKinney Falls State Park',
    location: 'Austin, Texas',
    month: 'July',
    dates: '24-26',
    imageUrl: mckinneyFallsJulImage,
    features: ['Upper & Lower Falls', 'Onion Creek', '9 Miles of Trails', 'Historic Smith Visitor Center'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/mckinney-falls',
    googleMapsUrl: 'https://maps.google.com/?q=McKinney+Falls+State+Park,+Austin,+TX',
    coordinates: { latitude: 30.18, longitude: -97.72 },
    campsiteType: 'Campsite with Water and Electricity'
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
    coordinates: { latitude: 29.59, longitude: -99.74 },
    campsiteType: 'Campsite with Water and Electricity'
  },
  {
    id: 'inks-lake-oct',
    parkName: 'Inks Lake State Park',
    location: 'Burnet, Texas',
    month: 'October',
    dates: '9-11',
    imageUrl: inksLakeOctImage,
    features: ['Clear Blue Lake', 'Devil\'s Waterhole', 'Granite Outcrops', '9 Miles of Trails'],
    availableSpots: 0,
    totalSpots: 4,
    isSoldOut: true,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/inks-lake',
    googleMapsUrl: 'https://maps.google.com/?q=Inks+Lake+State+Park,+Burnet,+TX',
    coordinates: { latitude: 30.74, longitude: -98.38 },
    campsiteType: 'Campsite with Water and Electricity'
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
    coordinates: { latitude: 30.31, longitude: -98.26 },
    campsiteType: 'Campsite with Water and Electricity'
  },
  {
    id: 'bastrop-nov',
    parkName: 'Bastrop State Park',
    location: 'Bastrop, Texas',
    month: 'November',
    dates: '7-9',
    imageUrl: bastropNovImage,
    features: ['Lost Pines Forest', 'Historic CCC Cabins', 'Scenic Park Road', '7 Miles of Trails'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/bastrop',
    googleMapsUrl: 'https://maps.google.com/?q=Bastrop+State+Park,+Bastrop,+TX',
    coordinates: { latitude: 30.11, longitude: -97.29 },
    campsiteType: 'Campsite with Water and Electricity'
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
    coordinates: { latitude: 29.81, longitude: -99.57 },
    campsiteType: 'Campsite with Water and Electricity'
  },
  {
    id: 'huntsville-dec',
    parkName: 'Huntsville State Park',
    location: 'Huntsville, Texas',
    month: 'December',
    dates: '5-7',
    imageUrl: huntsvilleDecImage,
    features: ['210-Acre Lake Raven', '21 Miles of Trails', 'Kayak Rentals', 'Nature Center'],
    availableSpots: 4,
    totalSpots: 4,
    isSoldOut: false,
    parkWebsite: 'https://tpwd.texas.gov/state-parks/huntsville',
    googleMapsUrl: 'https://maps.google.com/?q=Huntsville+State+Park,+Huntsville,+TX',
    coordinates: { latitude: 30.63, longitude: -95.53 },
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
