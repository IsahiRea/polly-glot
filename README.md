# PollyGlot

A modern, responsive translation application built with React and Vite, powered by OpenAI.

## Features

- Clean, intuitive translation interface
- AI-powered translations using OpenAI GPT-4o-mini
- Support for multiple languages (French, Spanish, Japanese)
- Fully responsive design (mobile, tablet, desktop)
- Mobile-first approach with progressive enhancement
- Fast development with Vite HMR

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **OpenAI SDK** - AI-powered translations
- **Vanilla CSS** - Custom responsive design without frameworks

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

```bash
# Clone the repository
git clone https://github.com/IsahiRea/polly-glot.git

# Navigate to project directory
cd polly-glot

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Configuration

1. Copy `.env.example` to `.env`
2. Add your OpenAI API key to the `.env` file:

```
VITE_OPENAI_API_KEY=your_api_key_here
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
│   ├── services/       # API services (OpenAI integration)
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Application entry point
├── .env.example        # Environment variables template
├── index.html          # HTML template
└── vite.config.js      # Vite configuration
```

## API Usage

The app uses OpenAI's GPT-4o-mini model for translations. The translation service is located in `src/services/openai.js`:

```javascript
import { translateText } from './services/openai'

// Translate text to a target language
const translation = await translateText('Hello, world!', 'french')
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