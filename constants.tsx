
import React from 'react';
import { Leaf, ShoppingCart, Bell, LayoutDashboard, Target, Users, CreditCard } from 'lucide-react';
import { NavItem, PricingTier } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Mission', path: '/mission' },
  { label: 'Product', path: '/product' },
  { label: 'How it Works', path: '/how-it-works' },
  { label: 'Our Story', path: '/story' },
  { label: 'Pricing', path: '/pricing' }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Individual',
    price: '$1.99/yr',
    description: 'The ultimate tool for waste-conscious households. Includes a 1-month free trial.',
    features: [
      '1 Month Free Trial included',
      'Unlimited grocery accounts',
      'Duplicate purchase alerts',
      'Smart recipe suggestions',
      'Web integration',
      'Household sharing'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Solutions for retailers and organizations.',
    features: [
      'Bulk licensing',
      'Impact reporting',
      'Custom integrations',
      'Dedicated support',
      'API access'
    ],
    cta: 'Contact Sales'
  }
];

export const COLORS = {
  primary: '#15803d', // emerald-700
  secondary: '#16a34a', // green-600
  accent: '#facc15', // yellow-400
  background: '#f8fafc', // slate-50
};
