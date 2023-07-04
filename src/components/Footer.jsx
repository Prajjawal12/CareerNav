import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span-2">
          <span className="font-extrabold text-green-500 text-xl ">
            Career<span className="text-green-900">Nav</span>
          </span>
          <h3 className="text-2xl font-bold mt-10 text-teal-500">Contact Us</h3>
          <h3 className="py-2 text-[#6D737A]">
            Call :{' '}
            <a
              href="tel:+919368430736"
              className="underline text-emerald-900 underline-offset-4"
            >
              +91 93684 30736
            </a>
          </h3>
          <h3 className="py-2 text-[#363A3D]">
            Email:{' '}
            <a
              href="mailto:deepyadavprajjawal@gmail.com"
              className="underline text-emerald-900 underline-offset-4"
            >
              deepyadavprajjawal@gmail.com
            </a>
          </h3>
          <h3 className="py-2 text-[#6D737A]">
            This application has been made by Prajjawal Deep Yadav, a Third Year
            Computer Engineering Undergraduate from ZHCET, AMU. This application
            was made under the OIP - 2023 at IIIT Naya Raipur under the guidance
            of{' '}
            <a
              href="https://www.linkedin.com/in/srinivasa-k-g-82aa7b83/"
              className="underline text-emerald-900 underline-offset-4"
            >
              Professor Srinivasa K G
            </a>
          </h3>

          <div className="flex gap-4 py-4">
            <a
              href="https://www.linkedin.com/in/prajjawal-deep-yadav/"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              <div className="p-4 bg-[#E9F8F3] rounded-xl">
                <FaLinkedinIn size={25} style={{ color: '#4DC39E' }} />
              </div>
            </a>

            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaGithub size={25} style={{ color: '#4DC39E' }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-teal-400">Services</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">
              <Link to="/listings">Course Listings</Link>
            </li>
            <li className="py-2">
              <Link to="/other-tools">Other AI Tools</Link>
            </li>
            <li className="py-2">
              <Link to="/content">AI Playground</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-teal-400">Playground Tools</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">
              <Link to="/college-courses">College Recommender</Link>
            </li>
            <li className="py-2">
              <Link to="/skills">Skills Recommender</Link>
            </li>
            <li className="py-2">
              <Link to="/scope-future">Scope and Future</Link>
            </li>
            <li className="py-2">
              <Link to="/top-companies">Top Companies</Link>
            </li>
            <li className="py-2">
              <Link to="/expectations">Insights</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
