import Button from "./Button";
import Section from "./Section";
// import throne2 from "../assets/site/hero/throne2.png";
// import ParticlesBackground from "./design/ParticlesBackground";
import battlefield1 from "../assets/site/hero/battlefield1.png";
import TypeWrite from "./design/TypeWrite";


const Hero = () => {
  return (
    <Section className="relative h-[90vh] flex items-center justify-center text-center" id="hero">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${battlefield1})` }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="h1 mb-6 font-nosifer bg-gradient-text bg-clip-text text-transparent">
          StarkRealm
        </h1>

        {/* <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Master the arcane, uncover forbidden spells, and forge your legacy in Stark Realm! The mystical battle for supremacy begins.
        </p> */}

        <TypeWrite />

        <Button href="/pre-register">Pre-Register Now</Button>
      </div>
    </Section>
  );
};

export default Hero;