import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Update import for Google Gemini

function Skills() {
  const [heading, setHeading] = useState(
    'The Response from the AI will be shown here'
  );
  const [response, setResponse] = useState('...... awaiting response');

  const formatResponse = (response) => {
    return (
      response
        .replace(/##/g, '<h2 class="text-2xl font-bold mt-4 mb-2">') // ## represents a new section heading
        // Match institutions and make them sub-headings (h3)
        .replace(
          /\*\*(\d+\. )?(.+):\*\*/g,
          '<h3 class="text-xl font-semibold mt-2 mb-1">$2</h3>'
        )
        // Handle the 'Note' section, making it italic
        .replace(
          /\*\*Note:\*\*/g,
          '<p class="italic font-light mt-2">Note:</p>'
        )
        // Match and bold any text surrounded by ** (except for headings)
        .replace(/\*\*(.+)\*\*/g, '<strong>$1</strong>')
        // Replace '*' for bullet points
        .replace(/\*/g, '<li class="ml-4 list-disc">')
        // Ensure proper line breaks for subheadings and text after colons
        .replace(/:\s*$/, ':<br>')
    );
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.productName);

    // Google Gemini API
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    try {
      const prompt = `Generate the name of top skills required in a certain field that are most wanted: ${formDataObj.productName}`;

      const result = await model.generateContent(prompt);
      const aiResponse = await result.response.text();

      // Format the response using the provided formatResponse function
      const formattedResponse = formatResponse(aiResponse);

      setHeading(`AI suggestions are here: ${formDataObj.productName}`);
      setResponse(formattedResponse);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setHeading('Error');
      setResponse('An error occurred while fetching the AI suggestions.');
    }
  };

  return (
    <div className="px-4 py-8 bg-gradient-to-br from-rose-400 to-rose-600 min-h-screen">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4 text-slate-600 text-center underline underline-offset-4">
          Get Skills Recommendations
        </h1>
        <p className="mb-4 text-center text-white font-thin">
          Simply write the name of the field you want to get recommendations
          about.
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
        <div className="bg-white rounded-lg shadow-lg p-6">
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

export default Skills;
