import card1 from '../assets/card-1.jpg';
import card2 from '../assets/card-2.jpg';
import card3 from '../assets/card-3.jpg';
import card4 from '../assets/card-4.jpg';
import card5 from '../assets/card-5.jpg';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="w-full border-2 border-green-700 bg-transparent bg-gradient-to-br from-green-300 to-green-700">
      <div>
        <h1 className="text-center font-extrabold text-3xl underline underline-offset-8 text-white mt-10">
          Welcome to our AI playground
        </h1>
      </div>
      <p className="text-white mt-6 text-center font-thin">
        Start using our AI tools
      </p>
      <div className="border-2 mt-4 mb-5 border-white h-auto w-full font-mono text-center">
        <ul className="list-disc">
          <li className="text-white">
            <span className="text-7xl">.</span>
            Click on the{' '}
            <span className="font-semibold underline underline-offset-4">
              College Recommendations
            </span>{' '}
            button to know about the top colleges in India and the relevant
            related courses
          </li>
          <li className="text-white">
            <span className="text-7xl">.</span>
            Click on the{' '}
            <span className="font-semibold underline underline-offset-4">
              Skills Recommendation
            </span>{' '}
            to learn about the top in-demand industry skills for a field.
          </li>
          <li className="text-white">
            <span className="text-7xl">.</span>
            Click on the{' '}
            <span className="font-semibold underline underline-offset-4">
              Scope and Future
            </span>{' '}
            to learn about the relevant details about a specific field
          </li>
        </ul>
      </div>
      {/* Card Section */}
      <div className="mb-10">
        <div className="flex flex-col items-center">
          <div className="ml-6 mr-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <Link to="/college-courses">
                <img
                  className="h-48 w-full object-cover"
                  src={card1}
                  alt="college-recommendations"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 underline text-emerald-700 underline-offset-4">
                    College Recommendations
                  </div>
                  <p>
                    Click to learn more about the top colleges of India and the
                    relevant courses they offer
                  </p>
                </div>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white">
              <Link to="/skills">
                <img
                  className="h-48 w-full object-cover"
                  src={card2}
                  alt="skills-recommendations"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 underline text-emerald-700 underline-offset-4">
                    Skills Recommendations
                  </div>
                  <p>
                    Click to learn more about the top in-demand skills in a
                    particular field
                  </p>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <Link to="/scope-future">
                <img
                  className="h-48 w-full object-cover"
                  src={card3}
                  alt="future-and-scope"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 underline text-emerald-700 underline-offset-4">
                    Scope and Future
                  </div>
                  <p>
                    What does a field offer and what are the future scopes?
                    Click to know!
                  </p>
                </div>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <Link to="/top-companies">
                <img
                  className="h-48 w-full object-cover"
                  src={card4}
                  alt="top-companies"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 underline text-emerald-700 underline-offset-4">
                    Top Companies
                  </div>
                  <p>
                    Click to know about major companies in a particular field
                  </p>
                </div>
              </Link>
            </div>

            {/* Card 5 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <Link to="/expectations">
                <img
                  className="h-48 w-full object-cover"
                  src={card5}
                  alt="insights"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 underline text-emerald-700 underline-offset-4">
                    Insights
                  </div>
                  <p>
                    Click to gain more knowledge and insights on what kind of
                    work is being done in a career field
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
