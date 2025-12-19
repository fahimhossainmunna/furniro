import RoomSlider from "./RoomSlider";

const Room = () => {
  return (
    <section className="bg-[#fcf8f3] py-12 sm:py-16 lg:py-[60px]">
      <div className="max-w-[1320px] mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="max-w-[420px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#3A3A3A] leading-[120%]">
            50+ Beautiful rooms inspiration
          </h2>

          <p className="text-[#616161] mt-3 leading-[150%] max-w-[370px]">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>

          <button
            className="bg-[#B88E2F] text-white px-8 sm:px-9 py-3 mt-6 font-semibold hover:bg-[#e1b348] transition-all duration-300">
            Explore More
          </button>
        </div>

        {/* Right Slider */}
        <div className="w-full lg:w-auto">
          <RoomSlider />
        </div>
      </div>
    </section>
  );
};

export default Room;
