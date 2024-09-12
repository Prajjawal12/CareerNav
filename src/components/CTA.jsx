import cta from '../assets/cta.png';
import { Link } from 'react-router-dom';
const CTA = () => {
  return (
    <div className="w-full bg-[#E9F8F3] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0">
        <img src={cta} className="w-[650px] mx-auto" />

        <div>
          <h1 className="py-2  text-3xl font-semibold">
            Join <span className="text-[#20B486]">An Initiative</span> Like
            Never Before{' '}
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Get started with using our services now
            <span className="text-green-900 text-2xl  underline-offset-4 font-thin">
              |Click Below
            </span>
          </p>
          <Link to="/services">
            <button className="bg-emerald-500 p-4 rounded-full w-[30%] mt-5 text-white">
              Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
