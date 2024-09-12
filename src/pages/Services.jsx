import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="h-screen bg-gradient-to-tl from-teal-300 to-teal-600 flex justify-center items-center">
      <div className="max-w-3xl w-full px-4 border-white border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg rounded-lg p-4">
            <Link to="/content" className="flex flex-col h-full">
              <h2 className="text-white text-3xl font-semibold mb-4 text-center">
                AI Playground
              </h2>
              <p className="text-white">
                We have included 5 tools powered on top of AI to help you get
                started with your future career decisions . Click to get
                started.
              </p>
            </Link>
          </div>

          <Link to="/Listings">
            <div className="bg-gradient-to-r from-red-400 to-yellow-500 shadow-lg rounded-lg p-4">
              <div className="flex flex-col h-full">
                <h2 className="text-white text-3xl font-semibold mb-4 text-center">
                  Course Listings
                </h2>
                <p className="text-white">
                  We have curated a list of courses for select number of fields.
                  Click here to get started and begin your journey.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/other-tools">
            <div className="bg-gradient-to-r from-green-400 to-teal-500 shadow-lg rounded-lg p-4">
              <div className="flex flex-col h-full">
                <h2 className="text-white text-3xl font-semibold mb-4 text-center">
                  Other AI Tools
                </h2>
                <p className="text-white">
                  We have prepared a list of select AI-powered tools to help you
                  with other aspects of education. Click here and check them
                  out.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
