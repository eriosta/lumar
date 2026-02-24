export interface CampingEvent {
  id: string;
  parkName: string;
  location: string;
  month: string;
  dates: string;
  imageUrl: string;
  features: string[];
  availableSpots: number;
  totalSpots: number;
  isSoldOut: boolean;
  parkWebsite: string;
  googleMapsUrl: string;
  coordinates: { latitude: number; longitude: number };
  campsiteType: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  duration: string;
  features: string[];
  isFeatured?: boolean;
}

export interface PreviousTrip {
  id: string;
  parkName: string;
  location: string;
  dates: string;
  month: string;
  year: number;
  images: string[];
}

export interface WhatsAppContact {
  name: string;
  phone: string;
  displayPhone: string;
}
