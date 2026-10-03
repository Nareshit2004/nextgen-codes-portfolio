import React, { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";
import "./Particles.css";

const defaultVertexShader = `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 pos = position * uSpread;
    pos.z += sin(uTime * random.x * 0.5 + random.y * 6.28) * 0.5;

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    vec4 mvPos = viewMatrix * mPos;
    gl_Position = projectionMatrix * mvPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / -mvPos.z;
  }
`;

const defaultFragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform float uAlphaParticles;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.1, dist);
    if (uAlphaParticles > 0.5) {
      alpha *= 0.5 + 0.5 * sin(uTime * vRandom.w * 2.0);
    }

    gl_FragColor = vec4(vColor, alpha * 0.85);
  }
`;

function hexToRgb(hex) {
  let cleaned = hex.replace("#", "");
  if (cleaned.length === 3) {
    cleaned = cleaned
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const intVal = parseInt(cleaned, 16);
  return [
    ((intVal >> 16) & 255) / 255,
    ((intVal >> 8) & 255) / 255,
    (intVal & 255) / 255,
  ];
}

export default function Particles({
  particleColors = ["#98c3fd"],
  particleCount = 300,
  particleSpread = 10,
  speed = 0.2,
  particleBaseSize = 100,
  moveParticlesOnHover = false,
  alphaParticles = false,
  disableRotation = false,
  sizeRandomness = 1,
  cameraDistance = 20,
  pixelRatio = 1,
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      depth: false,
      alpha: true,
      dpr: pixelRatio || window.devicePixelRatio || 1,
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, cameraDistance);

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
    }
    window.addEventListener("resize", resize);
    resize();

    // Prepare Geometry data
    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);

    const rgbPalette = particleColors.map(hexToRgb);

    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);

      const r = Math.cbrt(Math.random());
      positions[i * 3] = (x / Math.sqrt(len)) * r;
      positions[i * 3 + 1] = (y / Math.sqrt(len)) * r;
      positions[i * 3 + 2] = (z / Math.sqrt(len)) * r;

      randoms[i * 4] = Math.random();
      randoms[i * 4 + 1] = Math.random();
      randoms[i * 4 + 2] = Math.random();
      randoms[i * 4 + 3] = Math.random();

      const col = rgbPalette[Math.floor(Math.random() * rgbPalette.length)];
      colors[i * 3] = col[0];
      colors[i * 3 + 1] = col[1];
      colors[i * 3 + 2] = col[2];
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex: defaultVertexShader,
      fragment: defaultFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1.0 : 0.0 },
      },
      transparent: true,
      depthTest: false,
    });

    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let animationFrameId;
    let lastTime = performance.now();
    let elapsed = 0;

    function update(t) {
      animationFrameId = requestAnimationFrame(update);
      const delta = (t - lastTime) * 0.001;
      lastTime = t;
      elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed;

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.2) * 0.1;
        particles.rotation.y = elapsed * 0.1;
      }

      renderer.render({ scene: particles, camera });
    }

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      if (gl.canvas && gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    particleColors,
    particleCount,
    particleSpread,
    speed,
    particleBaseSize,
    moveParticlesOnHover,
    alphaParticles,
    disableRotation,
    sizeRandomness,
    cameraDistance,
    pixelRatio,
  ]);

  return (
    <div
      ref={containerRef}
      className={`particles-container ${className}`}
    />
  );
}
