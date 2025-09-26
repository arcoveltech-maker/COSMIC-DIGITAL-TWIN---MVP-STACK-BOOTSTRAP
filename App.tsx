import React, { useEffect, useRef } from 'react';

import Header from './components/Header';
import Section from './components/Section';
import Card from './components/Card';
import FileTree from './components/FileTree';
import CodeTabs from './components/CodeTabs';
import { CORE_COMPONENTS, REPOSITORY_LAYOUT, CODE_SNIPPETS, STRATEGIC_PAYOFFS } from './constants';

// Make TypeScript aware of the THREE global from the CDN
declare const THREE: any;

function setupCosmicBackground() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cosmic-canvas-bg'), alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const starGeo = new THREE.BufferGeometry();
  const starCount = 6000;
  const positions = new Float32Array(starCount * 3);
  for(let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.05,
    transparent: true,
  });
  const stars = new THREE.Points(starGeo, starMaterial);
  scene.add(stars);
  
  camera.position.z = 5;
  
  function animate() {
    requestAnimationFrame(animate);
    stars.rotation.x += 0.0001;
    stars.rotation.y += 0.0001;
    renderer.render(scene, camera);
  }
  
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}


const App: React.FC = () => {
  const galaxyRef = useRef({ scene: null, camera: null, renderer: null, particles: null, mouseX: 0, mouseY: 0 });

  useEffect(() => {
    setupCosmicBackground();
    
    const gRef = galaxyRef.current;
    const container = document.getElementById('galaxy-container');
    if (!container) return;

    gRef.scene = new THREE.Scene();
    gRef.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    gRef.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    gRef.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(gRef.renderer.domElement);
    
    const geometry = new THREE.BufferGeometry();
    const count = 20000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorInside = new THREE.Color(0x06b6d4);
    const colorOutside = new THREE.Color(0x818cf8);

    for(let i = 0; i < count * 3; i++) {
        const i3 = i * 3;
        const radius = Math.random() * 5;
        const spinAngle = radius * 3;
        const branchAngle = (i % 3) / 3 * Math.PI * 2;
        
        const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.2 * radius;
        const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.2 * radius;
        const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.2 * radius;

        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
        
        const mixedColor = colorInside.clone();
        mixedColor.lerp(colorOutside, radius / 5);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.02,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    });

    gRef.particles = new THREE.Points(geometry, material);
    gRef.scene.add(gRef.particles);
    
    gRef.camera.position.z = 5;

    const clock = new THREE.Clock();

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        if(gRef.particles) gRef.particles.rotation.y = elapsedTime * 0.1;
        
        if(gRef.camera) {
          gRef.camera.position.x += (gRef.mouseX - gRef.camera.position.x) * 0.05;
          gRef.camera.position.y += (-gRef.mouseY - gRef.camera.position.y) * 0.05;
          gRef.camera.lookAt(gRef.scene.position);
        }

        requestAnimationFrame(animate);
        gRef.renderer.render(gRef.scene, gRef.camera);
    };
    animate();
    
    const onMouseMove = (event) => {
        gRef.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        gRef.mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
       if (container && container.clientWidth > 0 && container.clientHeight > 0) {
          gRef.camera.aspect = container.clientWidth / container.clientHeight;
          gRef.camera.updateProjectionMatrix();
          gRef.renderer.setSize(container.clientWidth, container.clientHeight);
       }
    }
    window.addEventListener('resize', onResize);

    const observer = new ResizeObserver(onResize);
    observer.observe(container);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container) {
          observer.unobserve(container);
          if (gRef.renderer && gRef.renderer.domElement) {
              container.removeChild(gRef.renderer.domElement);
          }
      }
    }
  }, []);
  
  const handleGalaxyClick = () => {
    // In a real app, this could trigger a modal, a new view, or an animation.
    console.log("Galaxy interaction triggered.");
  };

  return (
    <div className="min-h-screen text-slate-300">
      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <Header onGalaxyClick={handleGalaxyClick}/>

        <Section title="Core Components">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_COMPONENTS.map((component, i) => (
              <div key={component.title} className="animate-fade-in" style={{animationDelay: `${0.3 + i * 0.1}s`}}>
                <Card 
                  title={component.title} 
                  icon={component.icon}
                >
                  {component.description}
                </Card>
              </div>
            ))}
          </div>
        </Section>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-2 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Section title="Repository Layout">
                <FileTree layout={REPOSITORY_LAYOUT} />
            </Section>
          </div>

          <div className="lg:col-span-3 animate-fade-in" style={{animationDelay: '1s'}}>
            <Section title="Configuration & Quickstart">
              <CodeTabs tabs={CODE_SNIPPETS} />
            </Section>
          </div>
        </div>

        <Section title="Strategic Payoff">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STRATEGIC_PAYOFFS.map((payoff, i) => (
              <div key={payoff.title} className="animate-fade-in" style={{animationDelay: `${1.2 + i * 0.1}s`}}>
               <Card 
                title={payoff.title} 
                icon={payoff.icon}
              >
                {payoff.description}
              </Card>
              </div>
            ))}
          </div>
        </section>

      </main>
       <footer className="text-center py-6 text-slate-500 text-sm relative z-10">
          <p>Cosmic Digital Twin MVP Stack Bootstrap | Mission Control Interface</p>
        </footer>
    </div>
  );
};

export default App;