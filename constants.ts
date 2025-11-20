import { VideoData, Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '3CE Velvet Lip Tint',
    price: 14.90,
    originalPrice: 18.00,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/id/40/200/200', // Using placeholder as requested
    currency: '$'
  },
  {
    id: 'p2',
    name: 'Laneige Water Bank',
    price: 29.00,
    rating: 4.9,
    imageUrl: 'https://picsum.photos/id/100/200/200',
    currency: '$'
  },
  {
    id: 'p3',
    name: 'Innisfree Mineral Powder',
    price: 8.50,
    originalPrice: 10.00,
    rating: 4.5,
    imageUrl: 'https://picsum.photos/id/21/200/200',
    currency: '$'
  },
  {
    id: 'p4',
    name: 'Etude House Lash Perm',
    price: 12.00,
    rating: 4.7,
    imageUrl: 'https://picsum.photos/id/64/200/200',
    currency: '$'
  }
];

export const VIDEO_FEED_DATA: VideoData[] = [
  {
    id: 'v1',
    videoUrl: 'https://www.3cecosmetics.com/-/media/project/loreal/brand-sites/tce/apac/int/en-image-assets/tutorial-slider/homepage/video/tutorial-slider_velvet.mp4?rev=a31c2afaf6fc400a94d14666186c8bcb',
    user: '@3CE_Official',
    description: 'Velvet Lip Tint - Soft and matte finish 💄',
    likes: '12.4K',
    avatarUrl: 'https://picsum.photos/id/64/100/100',
    products: [MOCK_PRODUCTS[0], MOCK_PRODUCTS[2]]
  },
  {
    id: 'v2',
    videoUrl: 'https://www.3cecosmetics.com/-/media/project/loreal/brand-sites/tce/apac/int/en-image-assets/tutorial-slider/scarf-edition/video/scarf_look_eye_minji.mp4?rev=ef2b4b24d2fd4c9796bb5dbe679e606c',
    user: '@3CE_Official',
    description: 'New Scarf Edition Eye Look ✨ Warm tones.',
    likes: '8.9K',
    avatarUrl: 'https://picsum.photos/id/64/100/100',
    products: [MOCK_PRODUCTS[1], MOCK_PRODUCTS[3]]
  },
  {
    id: 'v3',
    videoUrl: 'https://www.3cecosmetics.com/-/media/project/loreal/brand-sites/tce/apac/int/en-image-assets/tutorial-slider/scarf-edition/video/scarf_look_lip_jayne.mp4?rev=80c254e638704c11b513b48c5aead1c6',
    user: '@3CE_Official',
    description: 'Scarf Edition Lip Look - Blur Water Tint 🧣💋',
    likes: '5.2K',
    avatarUrl: 'https://picsum.photos/id/64/100/100',
    products: [MOCK_PRODUCTS[0], MOCK_PRODUCTS[3]]
  }
];