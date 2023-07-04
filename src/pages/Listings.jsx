import CategoryCard from '../components/CategoryCard';
import { BsVectorPen } from 'react-icons/bs';
import { TiHtml5 } from 'react-icons/ti';
import { TbMicrophone2, TbMusic } from 'react-icons/tb';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { WiSunrise } from 'react-icons/wi';
import { AiOutlineCamera } from 'react-icons/ai';
import { BiData } from 'react-icons/bi';
import { MdAttachMoney } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
const Listings = () => {
  return (
    <div className="bg-[#F0FBF7] p-8 ">
      <div>
        <h1 className="text-center text-2xl text-emerald-700 underline underline-offset-8 font-extralight  ">
          Course Listings
        </h1>
        <p className="text-center mt-5 font-extralight text-gray-900">
          Here is a list of some of the most in demand career fields in India!!
          <>
            <br />
          </>
          <p>
            Click on them below to browse some courses and get started on your
            journey on preparing them
          </p>
          <p className="text-2xl text-center text-cyan-500 mt-10">
            We have curated a select list of courses for you on{' '}
            <span className="underline underline-offset-4  ">
              <a href="https://www.classcentral.com/ ">Class Central</a>
            </span>
          </p>
        </p>
      </div>
      {/**Category Card  */}
      <div className="w-full  py-24">
        <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
          <div className="grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1">
            <a
              href="https://www.classcentral.com/search?q=design&certificate=true&level=beginner&free=true&duration=1-5&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard
                icons={<BsVectorPen size={30} />}
                title={'Design'}
              />
            </a>
            <a
              href="https://www.classcentral.com/search?q=development&free=true&level=beginner&duration=1-5&subject=cs%2Cprogramming-and-software-development&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard
                icons={<TiHtml5 size={30} />}
                title={'Development'}
              />
            </a>
            <a
              href="https://www.classcentral.com/search?q=marketing&level=beginner&duration=1-5&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard
                icons={<TbMicrophone2 size={30} />}
                title={'Marketing'}
              />
            </a>
            <a
              href="https://www.classcentral.com/search?q=business&certificate=true&free=true&level=beginner&duration=1-5&subject=business&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard
                icons={<HiOutlineBriefcase size={30} />}
                title={'Business'}
              />
            </a>
            <a
              href="https://www.classcentral.com/search?q=lifestyle&level=beginner&duration=1-5&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard
                icons={<WiSunrise size={30} />}
                title={'Lifestyle'}
              />
            </a>
            <a
              href="https://www.classcentral.com/search?q=photography&level=beginner&duration=1-5&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard
                icons={<AiOutlineCamera size={30} />}
                title={'Photography'}
              />
            </a>
            <a
              href="https://www.classcentral.com/search?q=music&level=beginner&duration=1-5&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard icons={<TbMusic size={30} />} title={'Music'} />
            </a>
            <a
              href="https://www.classcentral.com/search?q=data+science&free=true&duration=1-5&level=beginner&subject=cs%2Cdata-science%2Cprogramming-and-software-development&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard
                icons={<BiData size={30} />}
                title={'Data Science'}
              />
            </a>
            <a
              href="https://www.classcentral.com/search?q=yoga&free=true&level=beginner&duration=1-5&subject=health&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard icons={<CgGym size={30} />} title={'Yoga'} />
            </a>
            <a
              href="https://www.classcentral.com/search?q=medical+science&certificate=true&free=true&level=beginner&duration=1-5&subject=health&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard
                icons={<MdHealthAndSafety size={30} />}
                title={'Medicinal'}
              />
            </a>
            <a
              href="https://www.classcentral.com/search?q=finance&level=beginner&duration=1-5&subject=business&lang=english"
              rel="noreferrer"
              target="_blank"
            >
              <CategoryCard
                icons={<MdAttachMoney size={30} />}
                title={'Finance'}
              />
            </a>
            <a
              href="https://www.classcentral.com/search?q=teaching&level=beginner&duration=1-5&subject=education&lang=english"
              rel="noreferrer"
              target="blank"
            >
              <CategoryCard
                icons={<FaUniversity size={30} />}
                title={'Teaching'}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
