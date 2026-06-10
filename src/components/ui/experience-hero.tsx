import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

export interface CommandCell {
  id: string;
  title: string;
  type: 'progress' | 'data' | 'text';
  val?: string;
  progress?: number;
  textContent?: React.ReactNode;
  dataRows?: { label: string; value: string }[];
}

export interface ExperienceHeroProps {
  brandLabel: string;
  title: string;
  titleOutline: string;
  description: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  commandCells: CommandCell[];
  headerAction?: React.ReactNode;
}

const LiquidBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  );

  useFrame((state) => {
    const { clock, mouse } = state;
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uMouse.value.lerp(mouse, 0.05);
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }"
        fragmentShader={`
          uniform float uTime; uniform vec2 uMouse; varying vec2 vUv;
          void main() {
            vec2 uv = vUv; float t = uTime * 0.15;
            vec2 m = uMouse * 0.1;
            float color = smoothstep(0.0, 1.0, (sin(uv.x * 8.0 + t + m.x * 12.0) + sin(uv.y * 6.0 - t + m.y * 12.0)) * 0.5 + 0.5);
            gl_FragColor = vec4(mix(vec3(0.005), vec3(0.05), color), 1.0);
          }
        `}
      />
    </mesh>
  );
};

const Monolith = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[13, 1]} />
        <MeshDistortMaterial
          color="#0a0a0a"
          speed={4}
          distort={0.4}
          roughness={0.05}
          metalness={1.0}
        />
      </mesh>
    </Float>
  );
};

export function ExperienceHero({
  brandLabel,
  title,
  titleOutline,
  description,
  ctaLabel = 'Explore Role',
  onCtaClick,
  commandCells,
  headerAction,
}: ExperienceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ctaRef.current) return;
      const rect = ctaRef.current.getBoundingClientRect();
      const dist = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2),
      );
      if (dist < 150) {
        gsap.to(ctaRef.current, {
          x: (e.clientX - (rect.left + rect.width / 2)) * 0.4,
          y: (e.clientY - (rect.top + rect.height / 2)) * 0.4,
          duration: 0.6,
        });
      } else {
        gsap.to(ctaRef.current, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        revealRef.current,
        { filter: 'blur(30px)', opacity: 0, scale: 1.02 },
        { filter: 'blur(0px)', opacity: 1, scale: 1, duration: 2.2, ease: 'expo.out' },
      );

      gsap.from('.command-cell', {
        x: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: 'power4.out',
        delay: 1,
        clearProps: 'all',
      });
    }, containerRef);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full bg-[#020202] flex flex-col selection:bg-white selection:text-black overflow-hidden"
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 60], fov: 35 }}>
          <ambientLight intensity={0.4} />
          <spotLight position={[50, 50, 50]} intensity={3} />
          <LiquidBackground />
          <Monolith />
        </Canvas>
      </div>

      <div
        ref={revealRef}
        className="relative z-10 w-full flex flex-col md:flex-row px-4 sm:px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-10 md:pb-14 lg:pb-20 min-h-[100dvh] items-stretch gap-8 md:gap-10 lg:gap-14"
      >
        <div className="flex-1 min-w-0 flex flex-col gap-8 md:gap-10 lg:justify-between w-full">
          <div className="space-y-5 md:space-y-6">
            {headerAction && <div>{headerAction}</div>}

            <div className="flex items-center gap-3">
              <div className="relative w-2.5 h-2.5 bg-white rounded-full shrink-0">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30" />
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white tracking-[0.15em] sm:tracking-[0.2em] uppercase break-words">
                {brandLabel}
              </span>
            </div>
          </div>

          <div className="max-w-4xl lg:-translate-y-6">
            <h1 className="text-[clamp(2.5rem,11vw,11.5rem)] font-black leading-[0.9] sm:leading-[0.87] tracking-tighter text-white uppercase">
              {title} <br /> <span className="text-outline">{titleOutline}</span>
            </h1>
            <p className="mt-5 sm:mt-8 font-mono text-[10px] sm:text-[11px] text-white/40 uppercase tracking-[0.2em] sm:tracking-[0.35em] max-w-md leading-relaxed">
              {description}
            </p>
          </div>

          <button
            ref={ctaRef}
            type="button"
            onClick={onCtaClick}
            className="w-fit flex items-center gap-4 sm:gap-6 group mt-2 lg:-translate-y-12"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white transition-all duration-500 overflow-hidden shrink-0">
              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
                className="group-hover:stroke-black stroke-white transition-colors duration-500"
              />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em]">
              {ctaLabel}
            </span>
          </button>
        </div>

        <div className="w-full md:w-72 lg:w-96 flex-shrink-0 flex flex-col gap-3 sm:gap-4 justify-start md:justify-center z-20">
          {commandCells.map((item) => (
            <div key={item.id} className="command-cell glass-panel p-5 sm:p-6 md:p-7 block">
              <span className="font-mono text-[9px] text-white/25 uppercase tracking-widest block mb-3">
                {item.id} // {item.title}
              </span>
              {item.type === 'progress' ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-end mt-2">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tighter break-words">
                    {item.val}
                  </h4>
                  <div className="h-[2px] w-full sm:w-20 bg-white/5 rounded-full overflow-hidden shrink-0">
                    <div
                      className="h-full bg-white animate-loading"
                      style={{ width: `${item.progress ?? 60}%` }}
                    />
                  </div>
                </div>
              ) : item.type === 'data' ? (
                <div className="mt-3 sm:mt-4 flex flex-col gap-3">
                  {item.dataRows?.map((row, rowIndex) => (
                    <React.Fragment key={row.label}>
                      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-start text-[10px] font-mono text-white/50">
                        <span className="shrink-0">{row.label}</span>
                        <span className="sm:text-right break-words">{row.value}</span>
                      </div>
                      {rowIndex < (item.dataRows?.length ?? 0) - 1 && (
                        <div className="h-px w-full bg-white/5" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <h3 className="text-sm font-medium text-white/70 mt-2 sm:mt-3 leading-snug">
                  {item.textContent}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
