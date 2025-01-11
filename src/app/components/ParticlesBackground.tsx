"use client";

import {useEffect, useMemo, useState} from "react";
import Particles from "@tsparticles/react";
import {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim"; // Załaduj odpowiednią konfigurację
import {
  Container,
  ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine"; // Typowanie

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Załaduj slim
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {enable: false},
          onHover: {enable: false},
        },
        modes: {
          push: {quantity: 4},
          repulse: {distance: 200, duration: 0.4},
        },
      },
      particles: {
        color: {value: "#ffffff"},

        move: {
          direction: MoveDirection.none,
          enable: true,
          speed: 0.1,
          outModes: {default: OutMode.out},
        },
        number: {
          value: 100,
          density: {enable: true, area: 800},
        },
        opacity: {
          value: 0.5,
          animation: {enable: true, speed: 1, minimumValue: 0.1},
        },
        shape: {
          type: "star",
        },
        size: {
          value: {min: 0.3, max: 2},
          animation: {enable: true, speed: 3, minimumValue: 0.1},
        },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? <Particles id="tsparticles" options={options} /> : <></>;
};

export default ParticlesComponent;
