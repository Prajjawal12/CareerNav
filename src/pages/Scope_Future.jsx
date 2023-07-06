import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

function Scope_Future() {
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
        prompt: `For an entered name of a career course/career field,write a paragraph describing the scope ,future and salary(i.e whether their is a good pay or not)  of the mentioned course/field : ${formDataObj.productName}\n`,
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
    <div className="px-4 py-8 bg-gradient-to-br from-rose-400 to-rose-600 h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-slate-600 text-center underline underline-offset-4">
          The Future Scope of the Profession
        </h1>
        <p className="mb-4 text-center text-white font-thin">
          Simply write the name of the course you want to get insights about.
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

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">{heading}</h1>
          <p className="text-lg whitespace-pre-line">{response}</p>
        </div>
      </div>
    </div>
  );
}

export default Scope_Future;
