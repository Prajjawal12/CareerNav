import perplexity_logo from '../assets/perplexity.jpeg';
import copilot from '../assets/copilotlogo.png';
import curipod from '../assets/curipodlogo.png';
import quillbot from '../assets/quillbot.png';
import grammarly from '../assets/grammarlylogo.png';
import gotfeedback from '../assets/gotfeedbacklogo.png';
import conker from '../assets/conkerlogo.png';
import nolej from '../assets/nolej.png';
import parlay from '../assets/parlay.jpeg';
import hello_history from '../assets/hellohistory.webp';
import pdf_chatbot from '../assets/pdfchatbot.png';
import question_well from '../assets/questionWell.png';
import knewton from '../assets/knewton.webp';
import eklavya_ai from '../assets/EklavvyaLogo.webp';
import querium from '../assets/queriumteam.webp';

const OtherTools = () => {
  return (
    <div className="bg-gradient-to-tl from-green-500 to-green-300">
      <div>
        <h1 className="text-center text-cyan-800 font-semibold text-3xl underline underline-offset-4 mb-8">
          Do check out some other AI-powered educational tools
        </h1>
        <h3 className="text-center text-white font-light text-xl mb-8">
          Click on the cards below to visit their page
        </h3>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={perplexity_logo}
                  alt="Perplexity Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://www.perplexity.ai/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="blank"
                >
                  Perplexity
                </a>
                <p className="mt-2 text-white">
                  Perplexity is another generative AI chatbot that lets users
                  ask questions and get responses conversationally. What seems
                  to set Perplexity apart is that it cites sources, which are
                  easily clickable to get more context and more information.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={curipod}
                  alt="CuriPod Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://curipod.com/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  CuriPod
                </a>
                <p className="mt-2 text-white">
                  CuriPod helps in turning a text into a podcast-style
                  recording. Once you have a slide deck (which seems to generate
                  90% of all presentations these days), you can record your
                  voice with each slide. It turns into a video that can be
                  downloaded or shared directly.
                </p>
              </div>
            </div>
          </div>
          {/* Add other card elements here */}
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={copilot}
                  alt="Copilot Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://educationcopilot.com/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Copilot
                </a>
                <p className="mt-2 text-white">
                  Copilot is an AI-powered code completion tool developed by
                  GitHub. It provides intelligent suggestions and helps
                  developers write code more efficiently by automating
                  repetitive tasks and offering relevant code snippets.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={quillbot}
                  alt="Quillbot Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://quillbot.com/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Quillbot
                </a>
                <p className="mt-2 text-white">
                  Quillbot is an AI-powered paraphrasing tool that helps in
                  generating alternative suggestions for writing. It can
                  rephrase sentences, improve clarity, and provide synonyms to
                  enhance the overall quality of written content.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={grammarly}
                  alt="Grammarly Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://www.grammarly.com/grammarlygo"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Grammarly
                </a>
                <p className="mt-2 text-white">
                  Grammarly is an AI-powered writing assistant that helps in
                  improving grammar, spelling, punctuation, clarity, and
                  conciseness. It provides suggestions and corrections in real
                  time to enhance the overall quality of written content.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={gotfeedback}
                  alt="Got Feedback Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://www.gotlearning.com/gotfeedback/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Got Feedback
                </a>
                <p className="mt-2 text-white">
                  Got Feedback is a platform that helps in collecting feedback
                  from users on digital products. It offers a seamless way to
                  gather insights, identify usability issues, and make
                  data-driven improvements to enhance the user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={conker}
                  alt="Conker Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://www.conker.ai/create"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Conker
                </a>
                <p className="mt-2 text-white">
                  Conker is an AI-powered research tool that helps in finding
                  and organizing information from various sources. It allows
                  users to search, save, and collaborate on research projects,
                  making the process more efficient and organized.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={nolej}
                  alt="Nolej Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://nolej.io/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Nolej
                </a>
                <p className="mt-2 text-white">
                  Nolej is an AI-powered note-taking tool that helps in
                  capturing, organizing, and retrieving information. It offers
                  features like audio transcription, image recognition, and
                  smart search to enhance the note-taking experience.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={parlay}
                  alt="Parlay Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://new.parlayideas.com/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Parlay
                </a>
                <p className="mt-2 text-white">
                  Parlay is an AI-powered discussion platform that helps in
                  facilitating meaningful conversations. It offers features like
                  topic generation, guided discussions, and sentiment analysis
                  to promote effective communication and collaboration.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={hello_history}
                  alt="Hello History Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://www.hellohistory.ai/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hello History
                </a>
                <p className="mt-2 text-white">
                  Hello History is an AI-powered interactive platform that
                  brings history to life. It offers engaging content, virtual
                  tours, and interactive quizzes to make history education more
                  immersive and enjoyable for students.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={pdf_chatbot}
                  alt="PDF Chatbot Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://askyourpdf.com/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  PDF Chatbot
                </a>
                <p className="mt-2 text-white">
                  PDF Chatbot is an AI-powered tool that helps in extracting
                  text and information from PDF documents. It provides a
                  conversational interface to interact with PDF content and
                  retrieve specific data, making it more accessible and
                  user-friendly.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={question_well}
                  alt="QuestionWell Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://www.questionwell.org/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  QuestionWell
                </a>
                <p className="mt-2 text-white">
                  QuestionWell is an AI-powered platform that helps in
                  generating discussion questions for classroom conversations.
                  It provides a wide range of question prompts to promote
                  critical thinking and engage students in meaningful
                  discussions.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={knewton}
                  alt="Knewton Logo"
                  className="opacity-80 w-full h-48 object-cover object-center"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://www.knewton.com/"
                  className="text-white font-bold text-xl underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Knewton
                </a>
                <p className="mt-2 text-white">
                  Knewton is an AI-powered adaptive learning platform that
                  offers personalized educational content and recommendations.
                  It analyzes student performance and provides customized
                  learning paths to optimize learning outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={eklavya_ai}
                  alt="Eklavya AI Logo"
                  className="opacity-80 w-full h-48 object-cover "
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://www.eklavvya.com/remote-proctoring/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white font-bold text-xl underline"
                >
                  Eklavya AI
                </a>
                <p className="mt-2 text-white">
                  Eklavya AI is an AI-powered education platform that provides
                  personalized tutoring and adaptive learning experiences. It
                  uses AI algorithms to understand students&apos; strengths and
                  weaknesses and offers tailored content and support.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gradient-to-bl from-blue-300 to-blue-700 rounded-lg overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={querium}
                  alt="Querium Logo"
                  className="opacity-80 w-full h-48 object-cover"
                />
              </div>
              <div className="px-6 py-4">
                <a
                  href="https://www.querium.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white font-bold text-xl underline"
                >
                  Querium
                </a>
                <p className="mt-2 text-white">
                  Querium is an AI-powered math tutoring platform that offers
                  personalized coaching and practice sessions. It uses AI
                  algorithms to analyze students&apos; problem-solving
                  strategies and provides targeted feedback to improve
                  mathematical skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherTools;
