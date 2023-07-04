import express from 'express';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

const app = express();
const port = 3000;

const configuration = new Configuration({
  organization: 'org-b1F9sJDcElLubiZAQerAqn4f',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
  const { message } = req.body;
  try {
    /* const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Pretend that you are Steve Jobs.Answer with motivational content.
      Steve:Hello
      Person:I want import PropTypes from 'prop-types'
      Steve:You are amazing,you will do well
      Person:${message}?
      `,
      max_tokens: 100,
      temperature: 0,
    }); */
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `I will give you a name of a career field,You have to give me the names of top 10 colleges in India as per ranking(but don't mention it in response) for that field in India,also you have to mention the degrees and courses and branches they offer in that relevant field: ${message}\n\n\n\n\n\n1. Indian Institute of Technology Madras - B.Tech, M.Tech, Dual Degree and Integrated MS programmes across all branches of engineering.\n\n2. Indian Institute of Technology Bombay - B.Tech, M.Tech and PhD in all areas of engineering. \n3. Indian Institute of Technology Delhi - B.Tech, M.Tech, Dual Degree Programmes and Integrated MS programmes catering to all fields of engineering. \n4. Indian Institute of Technology Kanpur - B.Tech, M.Tech and PhD programmes in fields of engineering and applied sciences.\n5. Indian Institute of Technology Kharagpur - B.Tech, M.Tech, Dual and Integrated degrees along with research degrees in areas of engineering and technology. \n6. Indian Institute of Technology Roorkee - B.Tech, M.Tech, PG Diploma, MBA, and PhD in disciplines spanning engineering and technology.\n7. Indian Institute of Technology Guwahati - B.Tech, M.Tech, Dual Degree and Integrated MS programmes across all branches of engineering.\n8. Institute of Chemical Technology, Mumbai - B.Tech, M.Tech, Dual Degree, Doctoral and Post-Doctoral Research Programs in engineering and applied sciences.\n9. Vellore Institute of Technology, Vellore - B.Tech, M.Tech, and MBA in all disciplines of engineering and management.\n10. Anna University, Chennai - B.Tech, M.Tech, Dual Degree, Doctoral and Post-Doctoral research programs in engineering, applied sciences and technology.`,
      temperature: 1,
      max_tokens: 512,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (response.data.choices[0].text) {
      res.json({ message: response.data.choices[0].text });
    } else {
      res.json({ message: 'No response received from OpenAI.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});
