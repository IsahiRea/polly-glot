import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

/**
 * Translates text to the specified language using OpenAI
 * @param {string} text - The text to translate
 * @param {string} targetLanguage - The target language (e.g., 'french', 'spanish', 'japanese')
 * @returns {Promise<string>} - The translated text
 */
export async function translateText(text, targetLanguage) {
  if (!text.trim()) {
    throw new Error('Text to translate cannot be empty')
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are a professional translator. Translate the given text to ${targetLanguage}. Only respond with the translation, nothing else.`
      },
      {
        role: 'user',
        content: text
      }
    ],
    temperature: 0.3
  })

  return response.choices[0].message.content
}

export default openai
