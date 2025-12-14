import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/Translation.css'
import parrotImg from '../assets/images/parrot.png'
import worldMapImg from '../assets/images/world-map.svg'
import frFlagImg from '../assets/images/fr-flag.png'
import spFlagImg from '../assets/images/sp-flag.png'
import jpnFlagImg from '../assets/images/jpn-flag.png'

const languageFlags = {
  french: frFlagImg,
  spanish: spFlagImg,
  japanese: jpnFlagImg
}

const languageNames = {
  french: 'French',
  spanish: 'Spanish',
  japanese: 'Japanese'
}

function Translation() {
  const location = useLocation()
  const navigate = useNavigate()
  const { originalText, translatedText, language } = location.state || {}

  if (!translatedText) {
    return (
      <div className="translation-container">
        <div className="translation-header">
          <img
            src={worldMapImg}
            alt=""
            className="world-map"
            aria-hidden="true"
          />
          <img
            src={parrotImg}
            alt="Parrot Logo"
            className="parrot-logo"
          />
          <div className="brand-text">
            <h1 className="brand-name">PollyGlot</h1>
            <p className="brand-tagline">Perfect Translation Every Time</p>
          </div>
        </div>
        <div className="translation-card">
          <p className="no-translation">No translation available.</p>
          <button className="back-button" onClick={() => navigate('/')}>
            Start New Translation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="translation-container">
      <div className="translation-header">
        <img
          src={worldMapImg}
          alt=""
          className="world-map"
          aria-hidden="true"
        />
        <img
          src={parrotImg}
          alt="Parrot Logo"
          className="parrot-logo"
        />
        <div className="brand-text">
          <h1 className="brand-name">PollyGlot</h1>
          <p className="brand-tagline">Perfect Translation Every Time</p>
        </div>
      </div>

      <div className="translation-card">
        <div className="translation-section">
          <div className="section-header">
            <h2 className="section-title">Original</h2>
          </div>
          <p className="translation-text">{originalText}</p>
        </div>

        <div className="translation-section">
          <div className="section-header">
            <h2 className="section-title">{languageNames[language]}</h2>
            <img
              src={languageFlags[language]}
              alt={`${languageNames[language]} flag`}
              className="language-flag"
            />
          </div>
          <p className="translation-text">{translatedText}</p>
        </div>

        <button className="back-button" onClick={() => navigate('/')}>
          Start New Translation
        </button>
      </div>
    </div>
  )
}

export default Translation
