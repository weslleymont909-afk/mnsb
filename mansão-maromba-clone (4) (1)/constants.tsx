import { Product, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#' },
  { label: 'Produtos', href: '#' },
  { label: 'Contato', href: '#' },
];

export const BEST_SELLERS: Product[] = [
  {
    id: 'bs-1',
    name: 'Gin Go Bells 1L (6 unidades)',
    price: 59.90,
    oldPrice: 99.90,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/3ds-d6b0cce6f6a5143a0317658982664001-480-0.webp',
    tag: '40% OFF'
  },
  {
    id: 'bs-2',
    name: 'Whisky + Combo 1L (6 unidades)',
    price: 59.90,
    oldPrice: 99.90,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/img-20250113-wa0055-b81be437b87f0596c317367908684473-480-0.webp',
    tag: '40% OFF'
  },
  {
    id: 'bs-3',
    name: 'Whisky + Combo Job 1L (6 unidades)',
    price: 59.90,
    oldPrice: 99.90,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/whisky-combo-job-1l-b479a979fd3eb2d80b17654683945967-480-0.webp',
    tag: '40% OFF'
  },
  {
    id: 'bs-4',
    name: 'Gin + Combo Melancia 1L (6 unidades)',
    price: 59.90,
    oldPrice: 99.90,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/img-20250113-wa0056-2aa5040058fbde1f4a17367909276814-480-0.webp',
    tag: '40% OFF'
  },
  {
    id: 'bs-5',
    name: 'Vodka + Combo 1L (6 unidades)',
    price: 59.90,
    oldPrice: 99.90,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/img-20250113-wa0057-9481b9342d5d4a5dac17367908987407-480-0.webp',
    tag: '40% OFF'
  },
  {
    id: 'bs-6',
    name: 'Gin + Combo Maçã Verde 1L (6 unidades)',
    price: 59.90,
    oldPrice: 99.90,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/mansao-maromba-site-a54399d79c33c1893f17296175357834-480-0.webp',
    tag: '40% OFF'
  },
  {
    id: 'bs-7',
    name: 'Gin + Combo Tropical 1L (6 unidades)',
    price: 59.90,
    oldPrice: 99.90,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-combo-tigrinho-tropical-1l-d2b13bd2d9a3deb15617480146186080-480-0.webp',
    tag: '40% OFF'
  },
  {
    id: 'bs-8',
    name: 'Whisky + Combo Double Darkness 1L (6 unidades)',
    price: 59.90,
    oldPrice: 99.90,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/whisky-combo-double-darkness-50c0b27f9d998c5fad17545763653107-1024-1024.webp',
    tag: '40% OFF'
  }
];

export const NEW_ARRIVALS: Product[] = [
  {
    id: 'na-melancia',
    name: 'Gin Melancia 750mL (6 unidades)',
    price: 139.99,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-melancia-750ml-29479e303b9e177d8117694693220754-480-0.webp'
  },
  {
    id: 'na-tropical',
    name: 'Gin Tropical 750mL (6 unidades)',
    price: 139.99,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-tropical-750ml-545e8e95c0f59514ff17654865515336-480-0.webp'
  },
  {
    id: 'na-maca-verde',
    name: 'Gin Maçã Verde 750mL (6 unidades)',
    price: 139.99,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-maca-verde-750ml-8979de87850547398117694692931476-480-0.webp'
  },
  {
    id: 'na-pitaya',
    name: 'Gin Pitaya 750mL (6 unidades)',
    price: 139.99,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-pitaya-750ml-69c003c097fcfd460f17654865884283-480-0.webp'
  },
  {
    id: 'na-frutas-vermelhas',
    name: 'Gin Frutas Vermelhas 750mL (6 unidades)',
    price: 139.99,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-frutas-vermelhas-750ml-af35558b4451ae0ac417654865633559-480-0.webp'
  },
  {
    id: 'na-limao',
    name: 'Gin Limão Siciliano Cravo e Canela 750mL (6 unidades)',
    price: 139.99,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-limao-siciliano-cravo-e-canela-750ml-a9e3ac0141d636a24d17654864466481-480-0.webp'
  },
  {
    id: 'na-morango',
    name: 'Gin Morango com Hibisco 750mL (6 unidades)',
    price: 139.99,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-morango-com-hibisco-750ml-2008e7267da592f0d317655475591106-480-0.webp'
  },
  {
    id: 'na-laranja',
    name: 'Gin Laranja com Maracujá 750mL (6 unidades)',
    price: 139.99,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-laranja-com-maracuja-750ml-7884a00eb7072dca5c17655475884124-480-0.webp'
  },
  {
    id: 'na-blueberry',
    name: 'Gin Blueberry 750mL (6 unidades)',
    price: 139.99,
    imageUrl: 'https://acdn-us.mitiendanube.com/stores/004/048/852/products/gin-saborizado-blueberry-750ml-40183748cf5c7ef6d217654865759898-480-0.webp'
  }
];