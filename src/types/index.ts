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

export interface WhatsAppContact {
  name: string;
  phone: string;
  displayPhone: string;
}
