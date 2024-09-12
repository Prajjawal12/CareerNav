import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function Top_Companies() {
  const [heading, setHeading] = useState(
    'The Response from the AI will be shown here'
  );
  const [response, setResponse] = useState('...... awaiting response');

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 512,
    responseMimeType: 'text/plain',
  };

  const formatResponse = (response) => {
    return (
      response
        // Replace company names with <strong> tags for bold
        .replace(
          /(\d+\. [^\n]+)/g,
          '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>'
        )
        // Format details and make headings bold
        .replace(
          /Headquarters:\n/g,
          '<div class="font-semibold mt-2">Headquarters:</div>'
        )
        .replace(
          /Founder:\n/g,
          '<div class="font-semibold mt-2">Founder:</div>'
        )
        .replace(
          /Why they are the best:\n/g,
          '<div class="font-semibold mt-2">Why they are the best:</div>'
        )
        .replace(/Pay:\n/g, '<div class="font-semibold mt-2">Pay:</div>')
        // Replace asterisks with <strong> tags for bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />')
    ); // Ensure proper line breaks
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.productName);

    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: 'user',
            parts: [
              {
                text: `For an entered name of a career course/career field, write the name of top companies, their headquarters in which city/country and their founder, why they are the best and whether the pay there is high or not. If possible, try to keep it in an Indian context. Use international companies if such companies are not in India: ${formDataObj.productName}`,
              },
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage('INSERT_INPUT_HERE');
      const aiResponse = await result.response.text();

      // Format the response using the provided formatResponse function
      const formattedResponse = formatResponse(aiResponse);

      setHeading(`AI suggestions are here: ${formDataObj.productName}`);
      setResponse(formattedResponse);
    } catch (error) {
      console.log(error);
      setHeading('Error');
      setResponse('An error occurred while fetching the AI suggestions.');
    }
  };

  return (
    <div className="px-4 py-8 bg-gradient-to-br from-rose-400 to-rose-600 min-h-screen">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-600 text-center underline underline-offset-4">
          Top Companies
        </h1>
        <p className="mb-4 text-center text-white font-thin">
          Simply write the name of the course/field.
        </p>

        <form onSubmit={onFormSubmit} className="mb-4">
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block font-medium mb-1 text-white text-center"
            >
              Write Below
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Type Here Please"
            />
            <small className="text-gray-500">
              Please wait for a few seconds while the AI prepares an answer for
              you.
            </small>
          </div>
          <button
            type="submit"
            className="bg-emerald-600 left-[38%] relative text-white px-6 py-3 rounded-lg text-lg font-medium"
          >
            Get Suggestions
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">{heading}</h1>
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: response }}
          />
        </div>
      </div>
    </div>
  );
}

export default Top_Companies;
