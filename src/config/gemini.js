import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });
  
      const result = await chatSession.sendMessage(prompt);
      console.log(result.response.text());
      return result.response.text();
    } catch (error) {
      console.error("Error in run function:", error);
      throw error; // Rethrow to handle it in the caller
    }
  }
  
  export default run;
  

















// // node --version # Should be >= 18
// // npm install @google/generative-ai


// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";
  
//   const apiKey = import.meta.env.VITE_GEMINI_API_KEY;  // console.log(import.meta.env.VITE_GEMINI_API_KEY)
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     console.log(result.response.text());
//   }
  
//   export default run;