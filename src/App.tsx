import React, { useMemo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { tracks, TrackData } from './data/tracks';
import tracksGlbUrl from './assets/tracks.glb?url';

gsap.registerPlugin(ScrollTrigger);

const getCountryCode = (country: string) => {
  const map: Record<string, string> = {
    "Bahrain": "bh",
    "Saudi Arabia": "sa",
    "Australia": "au",
    "Japan": "jp",
    "China": "cn",
    "USA": "us",
    "Italy": "it",
    "Monaco": "mc",
    "Canada": "ca",
    "Spain": "es",
    "Austria": "at",
    "Great Britain": "gb",
    "Hungary": "hu",
    "Belgium": "be",
    "Netherlands": "nl",
    "Azerbaijan": "az",
    "Singapore": "sg",
    "Mexico": "mx",
    "Brazil": "br",
    "Qatar": "qa",
    "UAE": "ae"
  };
  return map[country] || "un";
};

const Sidebar = ({ track }: { track: TrackData }) => {
  return (
    <div className="w-full md:w-[100px] h-[64px] md:h-auto shrink-0 bg-[#181A1B] border-b-2 md:border-b-0 md:border-r-2 border-[#ff2800] flex flex-row md:flex-col items-center justify-between px-8 md:px-0 py-0 md:py-8 z-20">
      <div className="flex-1 flex items-center justify-start md:justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1 
            key={track.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#ff2800] font-montserrat font-bold text-[24px] md:text-[48px] uppercase tracking-[0.2em] md:rotate-180 md:[writing-mode:vertical-rl] whitespace-nowrap" 
          >
            {track.name}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div className="w-8 h-5 flex items-center justify-center rounded-sm shrink-0 overflow-hidden bg-white/10">
        <img 
          src={`https://flagcdn.com/w40/${getCountryCode(track.country)}.png`} 
          alt={track.country}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

const DateBlock = ({ track }: { track: TrackData }) => (
  <div className="flex flex-col">
    <span className="text-white font-montserrat font-medium text-[clamp(10px,2vw,14px)] uppercase tracking-[0.1em] mb-1 md:mb-2">When</span>
    <AnimatePresence mode="wait">
      <motion.div 
        key={track.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-[#ff2800] font-montserrat font-bold text-[clamp(18px,4.5vw,28px)] lg:text-[32px] leading-none">{track.date.start}-{track.date.end}</div>
        <div className="text-white font-montserrat font-bold text-[clamp(18px,4.5vw,28px)] lg:text-[32px] leading-none uppercase mt-1">{track.date.month}</div>
      </motion.div>
    </AnimatePresence>
  </div>
);

const StatsBlock = ({ track }: { track: TrackData }) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-y-4 md:gap-y-12 gap-x-4 md:gap-x-8 flex-1">
    <div className="flex flex-col">
      <span className="text-white font-montserrat font-medium text-[clamp(10px,2vw,14px)] uppercase tracking-[0.1em] mb-1 md:mb-2">Length</span>
      <AnimatePresence mode="wait">
        <motion.div 
          key={track.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-[#ff2800] font-montserrat font-bold text-[clamp(18px,4.5vw,28px)] lg:text-[32px] leading-none flex flex-wrap items-baseline gap-1 md:gap-2"
        >
          {track.length} <span className="text-white text-[clamp(12px,2.5vw,16px)] lg:text-[18px]">KM</span>
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="flex flex-col">
      <span className="text-white font-montserrat font-medium text-[clamp(10px,2vw,14px)] uppercase tracking-[0.1em] mb-1 md:mb-2">Distance</span>
      <AnimatePresence mode="wait">
        <motion.div 
          key={track.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-[#ff2800] font-montserrat font-bold text-[clamp(18px,4.5vw,28px)] lg:text-[32px] leading-none flex flex-wrap items-baseline gap-1 md:gap-2"
        >
          {track.distance} <span className="text-white text-[clamp(12px,2.5vw,16px)] lg:text-[18px]">KM</span>
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="flex flex-col">
      <span className="text-white font-montserrat font-medium text-[clamp(10px,2vw,14px)] uppercase tracking-[0.1em] mb-1 md:mb-2">Laps</span>
      <AnimatePresence mode="wait">
        <motion.div 
          key={track.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-[#ff2800] font-montserrat font-bold text-[clamp(18px,4.5vw,28px)] lg:text-[32px] leading-none break-words"
        >
          {track.laps}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
);

const ScheduleRow = ({ name, date, time, isRace = false }: { name: string, date: string, time: string, isRace?: boolean }) => {
  const colorClass = isRace ? "text-[#ff2800]" : "text-white";
  return (
    <div className="flex justify-between items-center py-1.5">
      <div className={`${colorClass} font-montserrat font-medium text-[12px] md:text-[14px] uppercase w-[100px] md:w-[120px]`}>{name}</div>
      <div className="flex gap-3 md:gap-6 flex-1 justify-end">
        <div className={`${colorClass} font-sans text-[12px] md:text-[14px] opacity-80`}>{date}</div>
        <div className={`${colorClass} font-sans text-[12px] md:text-[14px] w-[35px] md:w-[45px] text-right font-medium`}>{time}</div>
      </div>
    </div>
  );
};

const ScheduleBlock = ({ track }: { track: TrackData }) => (
  <div className="flex flex-col">
    <span className="text-white/60 font-montserrat font-medium text-[10px] md:text-[12px] uppercase tracking-[0.1em] mb-2">Schedule</span>
    <AnimatePresence mode="wait">
      <motion.div 
        key={track.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col max-w-sm"
      >
        {track.schedule.map((item, idx) => (
          <ScheduleRow key={idx} name={item.name} date={item.date} time={item.time} isRace={item.isRace} />
        ))}
      </motion.div>
    </AnimatePresence>
    <div className="text-right text-white/40 text-[10px] mt-2 font-sans max-w-sm uppercase font-bold tracking-wider">*UK Time</div>
  </div>
);

const TopWinners = ({ track }: { track: TrackData }) => {
  return (
    <div className="mt-2 pt-2 md:mt-6 md:pt-6 border-t border-white/10">
      <span className="text-white/60 font-montserrat font-medium text-[10px] md:text-[12px] uppercase tracking-[0.1em] mb-2 md:mb-3 block">Top Winners</span>
      <AnimatePresence mode="wait">
        <motion.div 
          key={track.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4"
        >
          {track.winners.map((winner, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-white font-montserrat font-bold text-[12px] md:text-[14px] leading-tight">{winner.name}</span>
              <span className="text-[#ff2800] font-montserrat font-bold text-[16px] md:text-[24px] my-0.5 md:my-1">{winner.wins} Wins</span>
              <span className="text-white/50 font-sans text-[9px] md:text-[10px] leading-snug truncate">{winner.desc}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const TopGrid = ({ track }: { track: TrackData }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-12 w-full z-10 relative">
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 lg:gap-24 flex-1">
        <DateBlock track={track} />
        <StatsBlock track={track} />
      </div>
      <div className="w-full md:w-auto">
        <ScheduleBlock track={track} />
      </div>
    </div>
  );
};

useGLTF.preload(tracksGlbUrl);

const Track3D = ({ shape, position, glbNodeName }: { shape: number[][], position: [number, number, number], glbNodeName?: string }) => {
  const trackRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(tracksGlbUrl);

  const { core, glow1, glow2, isGLB } = useMemo(() => {
    if (glbNodeName) {
      const trackNode = scene.getObjectByName(glbNodeName);
      if (trackNode) {
        const coreModel = trackNode.clone();
        const glow1Model = trackNode.clone();
        const glow2Model = trackNode.clone();

        const box = new THREE.Box3().setFromObject(coreModel);
        const center = box.getCenter(new THREE.Vector3());

        const setup = (model: THREE.Object3D, isGlow: boolean, opacity: number) => {
          model.position.set(-center.x, -center.y, -center.z);
          
          const meshesToReplace: { parent: THREE.Object3D, oldMesh: THREE.Mesh, newLines: THREE.LineSegments }[] = [];

          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              const edges = new THREE.EdgesGeometry(child.geometry, 15);
              const material = new THREE.LineBasicMaterial({
                color: isGlow ? new THREE.Color("#ff2800").multiplyScalar(4) : new THREE.Color("#ffffff"),
                transparent: isGlow,
                opacity: opacity,
                blending: isGlow ? THREE.AdditiveBlending : THREE.NormalBlending,
                depthWrite: !isGlow
              });
              const line = new THREE.LineSegments(edges, material);
              line.position.copy(child.position);
              line.rotation.copy(child.rotation);
              line.scale.copy(child.scale);
              
              if (child.parent) {
                meshesToReplace.push({ parent: child.parent, oldMesh: child, newLines: line });
              }
            } else if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
              child.material = new THREE.LineBasicMaterial({
                color: isGlow ? new THREE.Color("#ff2800").multiplyScalar(4) : new THREE.Color("#ffffff"),
                transparent: isGlow,
                opacity: opacity,
                blending: isGlow ? THREE.AdditiveBlending : THREE.NormalBlending,
                depthWrite: !isGlow
              });
            }
          });

          meshesToReplace.forEach(({ parent, oldMesh, newLines }) => {
            parent.remove(oldMesh);
            parent.add(newLines);
          });

          return model;
        };

        return {
          core: setup(coreModel, false, 1),
          glow1: setup(glow1Model, true, 0.3),
          glow2: setup(glow2Model, true, 0.1),
          isGLB: true
        };
      }
    }

    const points = shape.map(p => new THREE.Vector3(p[0], p[1], p[2]));
    const curve = new THREE.CatmullRomCurve3(points, true);
    const geometry = new THREE.TubeGeometry(curve, 150, 0.1, 8, true);
    
    const createMesh = (isGlow: boolean, opacity: number, scale: number) => {
      const material = new THREE.MeshBasicMaterial({
        color: isGlow ? new THREE.Color("#ff2800").multiplyScalar(4) : new THREE.Color("#ffffff"),
        transparent: isGlow,
        opacity: opacity,
        blending: isGlow ? THREE.AdditiveBlending : THREE.NormalBlending,
        depthWrite: !isGlow,
        wireframe: true
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(scale, scale, scale);
      return mesh;
    };

    return {
      core: createMesh(false, 1, 1),
      glow1: createMesh(true, 0.3, 1.05),
      glow2: createMesh(true, 0.1, 1.15),
      isGLB: false
    };
  }, [shape, scene, glbNodeName]);

  useFrame((state, delta) => {
    if (trackRef.current) {
      trackRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <group position={position}>
      <group rotation={[0.05, 0, 0]}>
        <group ref={trackRef}>
          <group scale={isGLB ? 18 : 2.0}>
            <primitive object={core} />
          </group>
          <group scale={isGLB ? 19 : 2.0} position={[0, -0.5, 0]}>
            <primitive object={glow1} />
          </group>
          <group scale={isGLB ? 21 : 2.0} position={[0, -1.0, 0]}>
            <primitive object={glow2} />
          </group>
        </group>
      </group>
    </group>
  );
};

const TrackGroup = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const trackSpacing = 80; // Distance between tracks

  useFrame(() => {
    if (groupRef.current) {
      // Move the entire group left based on scroll progress
      // progress goes from 0 to 1. Total width is (tracks.length - 1) * trackSpacing
      const targetX = -scrollProgress * (tracks.length - 1) * trackSpacing;
      // Smooth interpolation
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {tracks.map((track, index) => (
        <Track3D 
          key={track.id} 
          shape={track.shape} 
          position={[index * trackSpacing, 0, 0]} 
          glbNodeName={track.glbNodeName}
        />
      ))}
    </group>
  );
};

const TrackMap = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div className="relative flex-1 w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -ml-6 md:-ml-10 min-h-[200px] md:min-h-[250px] mt-2 md:mt-8 z-0">
      <Canvas camera={{ position: [0, 8, 30], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 20, 10]} intensity={1} />
        <TrackGroup scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

const MainContent = ({ track, scrollProgress }: { track: TrackData, scrollProgress: number }) => {
  return (
    <div className="flex-1 bg-[#111212] p-6 md:p-10 relative overflow-hidden flex flex-col z-10">
      <TopGrid track={track} />
      <TrackMap scrollProgress={scrollProgress} />
      <TopWinners track={track} />
    </div>
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${tracks.length * 40}%`, // Reduced scroll length per track
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / Math.max(1, tracks.length - 1),
          duration: { min: 0.1, max: 0.3 },
          delay: 0.05,
          ease: "power1.inOut",
          directional: true
        },
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          // Calculate which track should be active based on progress
          const index = Math.min(
            tracks.length - 1,
            Math.max(0, Math.round(self.progress * (tracks.length - 1)))
          );
          setCurrentTrackIndex(prev => prev !== index ? index : prev);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full bg-[#111212] flex items-center justify-center font-sans">
      <div className="flex flex-col md:flex-row w-full h-screen min-h-[600px] mx-auto">
        <Sidebar track={tracks[currentTrackIndex]} />
        <MainContent track={tracks[currentTrackIndex]} scrollProgress={scrollProgress} />
      </div>
    </div>
  );
}