# Elementum Landing Page

A responsive React landing page built from a Figma design as part of an internship assignment.

## Assignment Objective

The goal of this project was to convert a Figma design into a fully responsive React application while maintaining visual accuracy, clean code structure, and reusable components.

## Tech Stack

- React
- Tailwind CSS
- Vite

## Features

- Responsive design for mobile, tablet, and desktop
- Pixel-close implementation of the provided Figma design
- Reusable React components
- Clean and organized project structure
- Hover interactions on buttons, links, and clickable elements
- Decorative assets and layout elements matching the original design

## Sections Implemented

- Navbar
- Hero Section
- Features Section
- Services Section
- Testimonial Section
- Newsletter CTA
- Footer

## Project Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── FeaturesSection.jsx
│   ├── ServicesSection.jsx
│   ├── TestimonialSection.jsx
│   └── FooterAndCTASection.jsx
│
├── assets/
│   ├── images
│   ├── vectors
│   └── icons
│
├── App.jsx
└── main.jsx
```

## Development Process

### 1. Analyzing the Figma Design

The design was first broken down into individual sections:

- Navigation
- Hero
- Feature Blocks
- Services
- Testimonials
- Newsletter CTA
- Footer

This made the implementation more manageable and improved component reusability.

### 2. Component-Based Architecture

Each major section was developed as an independent React component.

Benefits:

- Better code organization
- Easier maintenance
- Improved readability
- Reusability

### 3. Responsive Implementation

Tailwind CSS responsive utilities were used extensively:

```jsx
text-[42px] md:text-[70px] lg:text-[100px]
mt-20 lg:mt-80
hidden lg:block
```

Responsive breakpoints were applied to:

- Typography
- Layouts
- Images
- Decorative elements
- Spacing

### 4. Matching the Design

The following aspects were carefully recreated from Figma:

- Typography hierarchy
- Colors
- Layout spacing
- Decorative vector elements
- Image positioning
- Section alignment
- CTA styling

### 5. Mobile Optimization

Desktop-only decorative assets were hidden on smaller screens using:

```jsx
hidden lg:block
```

Layouts were converted from:

```jsx
flex-row
```

to

```jsx
flex-col
```

on smaller devices to maintain usability and readability.

### 6. Interactions

Subtle hover effects were added:

```jsx
hover:opacity-70 transition
```

for:

- Navigation links
- Buttons
- Read More links
- Service arrows

## Challenges Faced

- Recreating complex decorative layouts from Figma
- Maintaining visual consistency across screen sizes
- Managing large typography without breaking responsiveness
- Positioning multiple absolute elements while keeping the layout clean

## Learning Outcomes

Through this project I improved my understanding of:

- Translating Figma designs into React applications
- Responsive design principles
- Tailwind CSS utility-first workflow
- Component-based architecture
- Layout management with Flexbox and CSS positioning

## Live Demo

Add your deployed Vercel link here:

```txt
https://trams-company-internship-assessment.vercel.app/
```

## Design Reference

Figma Design:

```txt
https://www.figma.com/design/0K35IOZ4Qwqur0b9o2PXlN/Assignment
```
or in public/FigmaDesign.jpg

## Author

Ranjan Singh
