import heroImg from '../assets/heroImg1.jpg';
const HeroSection = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4 md:mr-16 md:mt-4">
          <p className="py-2 text-2xl text-[#64CCC5] font-medium">
            Glimpse the Marvels of Your Future!{' '}
          </p>
          <h4 className="md:leading-[72px] py-2 text-5xl font-semibold">
            <span className="text-[#20B486]">
              Your Passion&apos;s Hidden Path
              <br />
            </span>
            We Assist in making better future choices.
            <br />
            <span className="text-[#20B486]">Embrace the AI Revolution!</span>
          </h4>
        </div>
        <img src={heroImg} className="md:order-last order-first" />
      </div>
    </div>
  );
};

export default HeroSection;
