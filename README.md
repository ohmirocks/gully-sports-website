# Gully Sports Website

A modern, responsive homepage for Gully Sports cricket equipment business built with Next.js and Tailwind CSS.

## Features

- **Dynamic Color Palettes**: Switch between 4 different color themes (Red, Green, Teal, Gray)
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Interactive FAQ Section**: Expandable questions and answers
- **Product Showcase**: Current and upcoming products
- **Early Access Signup**: Newsletter subscription form
- **Contact Information**: Complete business details

## Color Palettes

The website includes 4 different color themes based on your design system:

1. **Red Theme** (Default): Primary red (#DC2626) with light red accents
2. **Green Theme**: Primary green (#16A34A) with light green accents  
3. **Teal Theme**: Primary teal (#0D9488) with light teal accents
4. **Gray Theme**: Primary gray (#6B7280) with light gray accents

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Color Palette Switching

- Look for the color palette selector in the top-right corner
- Click on any color circle to switch themes
- The entire website will update with the new color scheme

## Sections Included

- **Hero Section**: Main banner with call-to-action buttons
- **Available Now**: Current product offerings (jerseys)
- **Coming Soon**: Upcoming products (custom bats, lane rentals, training equipment)
- **Why Choose Us**: Differentiators and unique selling points
- **FAQ Section**: Common questions and answers
- **Early Access**: Newsletter signup with interest preferences
- **Footer**: Contact information and quick links

## Business Information

- **Website**: www.gullysports.store
- **Phone**: 408 677 0734
- **Location**: San Jose, CA, USA
- **Specialties**: Custom cricket bats, IPL jerseys, Indian team jerseys

## Key Differentiators

- Try bats before you buy
- Specialized in cricket equipment only
- Custom bat personalization
- Expert cricket knowledge
- Fast shipping across the US

## Technologies Used

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Heroicons
- Responsive design principles

## Customization

To modify colors, update the `colorPalettes` object in `src/app/page.tsx`. Each palette includes:
- `primary`: Main brand color
- `secondary`: Light accent color
- `accent`: Background accent color
- `text`: Text color
- `background`: Background color