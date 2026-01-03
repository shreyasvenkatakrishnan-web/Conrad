
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getSmartSaverAdvice = async (inventory: string): Promise<string> => {
  if (!API_KEY) {
    return "The WasteLess AI Assistant is currently in demo mode. (API Key not configured)";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the WasteLess Assistant. A user is asking for advice on their grocery inventory to reduce waste. 
      Help them with recipe ideas, storage tips, or urgency warnings based on this list: ${inventory}. 
      Keep it professional, encouraging, and environmentally focused.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "I couldn't generate advice right now. Try being more specific about your ingredients!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my AI brain. Please try again later!";
  }
};
