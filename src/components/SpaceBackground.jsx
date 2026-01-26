import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const SpaceBackground = () => {
  const [init, setInit] = useState(false);

  // Inicializa o motor de partículas uma única vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "linear-gradient(180deg, #000000ff 25%, #1b2a6b 75%)", // Azul bem escuro (cor do espaço)
      },
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 150, // Quantidade de estrelas/partículas
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ffffff", // Cor das estrelas
      },
      shape: {
        type: "star",
        options: {
            star: {
                sides: 4,
            }
        }
      },
      opacity: {
        value: { min: 0.3, max: 0.8 }, // Algumas brilham mais que outras
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 2 }, // Tamanhos variados para profundidade
      },
      move: {
        enable: true,
        speed: 0.5, // Movimento lento e suave
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Estrelas se conectam ao passar o mouse
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.2,
          },
        },
      },
    },
  };

  if (init) {
    return (
        <Particles 
            id="tsparticles"  
            options={particlesOptions} 
            style={{
                background: "linear-gradient(180deg, #000000ff 25%, #1b2a6b 75%)"
            }}
        />
    );
  }

  return null;
};

export default SpaceBackground;