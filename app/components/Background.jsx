'use client';
import Particles from "../../components/Background/Particles";

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <Particles
        particleColors={['#21214f', '#36295f']}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}
