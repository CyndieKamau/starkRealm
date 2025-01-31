import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 40 },
          color: { value: ["#ff4500", "#ffae00"] }, // Ember colors
          opacity: { value: 0.7, random: true },
          size: { value: 2, random: true },
          move: {
            direction: "top",
            speed: 0.5,
            outMode: "out",
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;