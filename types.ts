export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  imageUrl: string;
  currency: string;
}

export interface VideoData {
  id: string;
  videoUrl: string;
  user: string;
  description: string;
  likes: string;
  avatarUrl: string;
  products: Product[];
}