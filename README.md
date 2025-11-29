# PollyGlot

A modern, responsive translation application built with React and Vite.

## Features

- Clean, intuitive translation interface
- Support for multiple languages (French, Spanish, Japanese)
- Fully responsive design (mobile, tablet, desktop)
- Mobile-first approach with progressive enhancement
- Fast development with Vite HMR

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Vanilla CSS** - Custom responsive design without frameworks

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/IsahiRea/polly-glot.git

# Navigate to project directory
cd polly-glot

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
polly-glot/
├── src/
│   ├── assets/         # Images, icons, and static assets
│   ├── pages/          # Page components
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
└── vite.config.js      # Vite configuration
```

## Responsive Design

The application uses a mobile-first approach with the following breakpoints:

- **Mobile**: < 768px (base styles)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly across different screen sizes
4. Submit a pull request

## License

This project is private and not licensed for public use.
