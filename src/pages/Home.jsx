import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import { translateText } from '../services/openai'
import parrotImg from '../assets/images/parrot.png'
import worldMapImg from '../assets/images/world-map.svg'
import frFlagImg from '../assets/images/fr-flag.png'
import spFlagImg from '../assets/images/sp-flag.png'
import jpnFlagImg from '../assets/images/jpn-flag.png'

function Home() {
  const [textToTranslate, setTextToTranslate] = useState('How are you?')
  const [selectedLanguage, setSelectedLanguage] = useState('french')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleTranslate = async (e) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const translatedText = await translateText(textToTranslate, selectedLanguage)
      navigate('/translation', {
        state: {
          originalText: textToTranslate,
          translatedText,
          language: selectedLanguage
        }
      })
    } catch (err) {
      setError(err.message || 'Translation failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="home-container">
      {/* Header Section */}
      <div className="home-header">
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

      {/* Main Card */}
      <div className="main-card">
        <form onSubmit={handleTranslate}>
          {/* Text to Translate Section */}
          <div className="text-area-container">
            <h2 className="section-title">Text to translate 👇</h2>
            <textarea
              className="text-area"
              value={textToTranslate}
              onChange={(e) => setTextToTranslate(e.target.value)}
              placeholder="Enter text to translate..."
              aria-label="Text to translate"
            />
          </div>

          {/* Language Selection Section */}
          <div className="language-selection">
            <h2 className="section-title">Select language 👇</h2>
            <div className="language-options">
              {/* French Option */}
              <div className="language-option">
                <input
                  type="radio"
                  id="french"
                  name="language"
                  value="french"
                  checked={selectedLanguage === 'french'}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                />
                <label htmlFor="french" className="language-label">
                  <span>French</span>
                  <img
                    src={frFlagImg}
                    alt="French flag"
                    className="language-flag"
                  />
                </label>
              </div>

              {/* Spanish Option */}
              <div className="language-option">
                <input
                  type="radio"
                  id="spanish"
                  name="language"
                  value="spanish"
                  checked={selectedLanguage === 'spanish'}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                />
                <label htmlFor="spanish" className="language-label">
                  <span>Spanish</span>
                  <img
                    src={spFlagImg}
                    alt="Spanish flag"
                    className="language-flag"
                  />
                </label>
              </div>

              {/* Japanese Option */}
              <div className="language-option">
                <input
                  type="radio"
                  id="japanese"
                  name="language"
                  value="japanese"
                  checked={selectedLanguage === 'japanese'}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                />
                <label htmlFor="japanese" className="language-label">
                  <span>Japanese</span>
                  <img
                    src={jpnFlagImg}
                    alt="Japanese flag"
                    className="language-flag"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="error-message">{error}</p>}

          {/* Translate Button */}
          <button type="submit" className="translate-button" disabled={isLoading}>
            {isLoading ? 'Translating...' : 'Translate'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
