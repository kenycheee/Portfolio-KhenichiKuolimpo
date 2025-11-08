'use client';
import Particles from "../../components/Particles";

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <Particles
        particleColors={['#000000', '#000000']}
        particleCount={200}
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
