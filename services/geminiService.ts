import { GoogleGenAI, Type } from "@google/genai";
import { DeconstructionResult } from '../types';

let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
        genAI = new GoogleGenAI({ apiKey });
    } else {
        console.warn("API_KEY is missing. AI features will be disabled or mocked.");
    }
  }
  return genAI;
};

export const deconstructCode = async (code: string): Promise<DeconstructionResult> => {
  const ai = getGenAI();
  
  if (!ai) {
    // Fallback if no API key is present
    return new Promise(resolve => setTimeout(() => resolve({
      explanation: "SYSTEM OFFLINE: API_KEY_MISSING. PLEASE CONFIGURE ENVIRONMENT. (This is a mock response). This code appears to be a construct of logic...",
      difficulty: 'NOOB',
      concepts: ['MISSING_KEY', 'MOCK_DATA']
    }), 1000));
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Act as a "Cyberpunk Code Deconstructor" for a youth programming platform.
      Analyze the following code snippet. 
      Explain it simply but with a cool, slightly "hacker" tone.
      Identify the difficulty level (NOOB, HACKER, or ELITE).
      List 3 key concepts used in the code.
      
      Code Snippet:
      \`\`\`
      ${code}
      \`\`\`
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                explanation: { type: Type.STRING },
                difficulty: { type: Type.STRING, enum: ['NOOB', 'HACKER', 'ELITE'] },
                concepts: { 
                    type: Type.ARRAY, 
                    items: { type: Type.STRING } 
                }
            },
            required: ["explanation", "difficulty", "concepts"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as DeconstructionResult;

  } catch (error) {
    console.error("AI Deconstruction Failed:", error);
    return {
      explanation: "ERROR: SIGNAL LOST. THE MAINFRAME REJECTED THE REQUEST.",
      difficulty: 'NOOB',
      concepts: ['ERROR', 'RETRY', 'DEBUG']
    };
  }
};
