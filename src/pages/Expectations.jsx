import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
function Expectations() {
  const [heading, setHeading] = useState(
    'The Response from the AI will be shown here'
  );
  const [response, setResponse] = useState('...... awaiting response');

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.productName);

    // OpenAI API
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion({
        model: 'text-davinci-003',
        prompt: `For an entered name of a career course/career/working profession field,write a short paragraph on what kind of work is expected to be done and how to prepare to become successful in that field, also give examples of few famous people of that profession, three international and two Indian if possible,If the profession is limited to India like government jobs then just show examples from india only: ${formDataObj.productName}\n`,
        temperature: 1,
        max_tokens: 512,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        const suggestions = response.data.choices[0].text
          .split('\n')
          .filter((suggestion) => suggestion.trim() !== '');
        const formattedResponse = suggestions.join('\n');
        setHeading(`AI suggestions are here: ${formDataObj.productName}`);
        setResponse(formattedResponse);
      })
      .catch((error) => {
        console.log(error);
      });

    setHeading(`AI suggestion for: ${formDataObj.productName}`);
    setResponse(`The response will be shown here`);
  };

  return (
    <div className="px-4 py-8 bg-gradient-to-br from-rose-400 to-rose-600 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-slate-600 text-center underline underline-offset-4">
          What to expect?
        </h1>
        <p className="mb-4 text-center text-white font-thin">
          Simply write the name of the course/field/profession.
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

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">{heading}</h1>
          <p className="text-lg whitespace-pre-line">{response}</p>
        </div>
      </div>
    </div>
  );
}

export default Expectations;
