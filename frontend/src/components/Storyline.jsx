import Portal from "./design/Portal";
import houndvid1 from "../assets/site/storyline/houndvid1.mp4";
import thronevid3 from "../assets/site/storyline/thronevid3.mp4";
import warriorvid1 from "../assets/site/storyline/warriorvid1.mp4";
import Section from "./Section";
import TypeWrite from "./design/TypeWrite";

const Storyline = () => {
  return (
    <Section
      id="storyline"
      className="relative w-full h-[600px] flex items-center text-white"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={thronevid3} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black"></div>
      <div className="relative z-10 container mx-auto px-8 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
      {/* <div className="lg:w-1/2 hidden lg:block"></div> */}
      <div className="lg:w-1/2 p-6">
      <h2 className="text-4xl font-bold mb-4">THE RISE OF THE SHADOW KING</h2>
      <TypeWrite
            sentences={[
              "In the age of darkness, the Shadow King rose from the depths...",
              "Seated upon his throne, his presence alone corrupts the land...",
              "Hope is fading. But one warrior still stands against the darkness.",
            ]}
          />

      </div>

      </div>
    </Section>
  );
};

export default Storyline;
