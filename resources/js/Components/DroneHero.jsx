import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DroneHero() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    let W = container.clientWidth || window.innerWidth / 2;
    let H = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);

    const isMobile = W < 768;
    camera.position.set(0, 0.5, isMobile ? 6.0 : 8.0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight.position.set(5, 10, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const redLight = new THREE.PointLight(0xcc1f2a, 2.5, 12);
    redLight.position.set(-3, 2, 3);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x4488ff, 1.2, 10);
    blueLight.position.set(3, -2, 2);
    scene.add(blueLight);

    const rimLight = new THREE.PointLight(0xffffff, 0.6, 15);
    rimLight.position.set(0, 3, -5);
    scene.add(rimLight);

    // Materials
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.85,
      roughness: 0.15,
    });
    const darkBodyMat = new THREE.MeshStandardMaterial({
      color: 0x0d0d0d,
      metalness: 0.9,
      roughness: 0.1,
    });
    const redMat = new THREE.MeshStandardMaterial({
      color: 0xcc1f2a,
      metalness: 0.6,
      roughness: 0.25,
      emissive: 0x440000,
      emissiveIntensity: 0.4,
    });
    const propMat = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.1,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    const motorMat = new THREE.MeshStandardMaterial({
      color: 0xcc1f2a,
      metalness: 0.7,
      roughness: 0.2,
    });
    const ledMat = new THREE.MeshStandardMaterial({
      color: 0xff3333,
      emissive: 0xff1111,
      emissiveIntensity: 2.0,
    });
    const greenLedMat = new THREE.MeshStandardMaterial({
      color: 0x33ff33,
      emissive: 0x11ff11,
      emissiveIntensity: 1.5,
    });
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x6699ff,
      metalness: 0.95,
      roughness: 0.05,
      emissive: 0x223366,
      emissiveIntensity: 0.3,
    });
    const guardMat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      metalness: 0.6,
      roughness: 0.3,
      transparent: true,
      opacity: 0.7,
    });

    // Drone Group
    const drone = new THREE.Group();

    // Central Body
    const bodyGeo = new THREE.BoxGeometry(0.85, 0.1, 0.85);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    drone.add(body);

    const topPlateGeo = new THREE.BoxGeometry(0.65, 0.08, 0.65);
    const topPlate = new THREE.Mesh(topPlateGeo, redMat);
    topPlate.position.y = 0.09;
    drone.add(topPlate);

    const canopyGeo = new THREE.SphereGeometry(0.3, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    const canopy = new THREE.Mesh(canopyGeo, darkBodyMat);
    canopy.position.y = 0.12;
    canopy.scale.set(1, 0.5, 1);
    drone.add(canopy);

    const batteryGeo = new THREE.BoxGeometry(0.3, 0.1, 0.55);
    const battery = new THREE.Mesh(batteryGeo, new THREE.MeshStandardMaterial({
      color: 0x222222,
      metalness: 0.5,
      roughness: 0.4,
    }));
    battery.position.set(0, -0.1, 0);
    drone.add(battery);

    const battStripeGeo = new THREE.BoxGeometry(0.31, 0.03, 0.1);
    const battStripe = new THREE.Mesh(battStripeGeo, redMat);
    battStripe.position.set(0, -0.07, 0);
    drone.add(battStripe);

    // Antenna
    const antennaPoleGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.22, 8);
    const antennaPole = new THREE.Mesh(antennaPoleGeo, bodyMat);
    antennaPole.position.set(0, 0.35, -0.15);
    drone.add(antennaPole);

    const antennaTopGeo = new THREE.SphereGeometry(0.03, 8, 8);
    const antennaTop = new THREE.Mesh(antennaTopGeo, redMat);
    antennaTop.position.set(0, 0.47, -0.15);
    drone.add(antennaTop);

    // Camera
    const gimbalArmGeo = new THREE.BoxGeometry(0.06, 0.15, 0.06);
    const gimbalArm = new THREE.Mesh(gimbalArmGeo, bodyMat);
    gimbalArm.position.set(0, -0.16, 0.32);
    drone.add(gimbalArm);

    const camHousingGeo = new THREE.BoxGeometry(0.2, 0.14, 0.16);
    const camHousing = new THREE.Mesh(camHousingGeo, darkBodyMat);
    camHousing.position.set(0, -0.22, 0.38);
    drone.add(camHousing);

    const lensGeo = new THREE.CylinderGeometry(0.045, 0.055, 0.1, 16);
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.rotation.x = Math.PI / 2;
    lens.position.set(0, -0.22, 0.48);
    drone.add(lens);

    const lensRingGeo = new THREE.TorusGeometry(0.055, 0.008, 8, 24);
    const lensRing = new THREE.Mesh(lensRingGeo, redMat);
    lensRing.position.set(0, -0.22, 0.53);
    drone.add(lensRing);

    // Arms, Motors, Props
    const armConfigs = [
      { x: 1, z: 1, angle: Math.PI / 4 },
      { x: -1, z: 1, angle: -Math.PI / 4 },
      { x: 1, z: -1, angle: -Math.PI * 3 / 4 },
      { x: -1, z: -1, angle: Math.PI * 3 / 4 },
    ];

    const propGroups = [];

    armConfigs.forEach((cfg, i) => {
      const armLen = 1.2;
      const endX = cfg.x * 1.05;
      const endZ = cfg.z * 1.05;

      const armGeo = new THREE.CylinderGeometry(0.035, 0.028, armLen, 8);
      const arm = new THREE.Mesh(armGeo, bodyMat);
      arm.rotation.z = Math.PI / 2;
      arm.rotation.y = cfg.angle;
      arm.position.set(cfg.x * 0.52, 0.02, cfg.z * 0.52);
      drone.add(arm);

      const stripGeo = new THREE.BoxGeometry(0.02, 0.01, armLen * 0.5);
      const strip = new THREE.Mesh(stripGeo, i < 2 ? redMat : motorMat);
      strip.rotation.y = cfg.angle;
      strip.position.set(cfg.x * 0.52, 0.06, cfg.z * 0.52);
      drone.add(strip);

      const motorBaseGeo = new THREE.CylinderGeometry(0.11, 0.11, 0.05, 16);
      const motorBase = new THREE.Mesh(motorBaseGeo, bodyMat);
      motorBase.position.set(endX, -0.01, endZ);
      drone.add(motorBase);

      const motorBellGeo = new THREE.CylinderGeometry(0.13, 0.11, 0.1, 16);
      const motorBell = new THREE.Mesh(motorBellGeo, motorMat);
      motorBell.position.set(endX, 0.07, endZ);
      drone.add(motorBell);

      const motorCapGeo = new THREE.CylinderGeometry(0.04, 0.13, 0.04, 16);
      const motorCap = new THREE.Mesh(motorCapGeo, darkBodyMat);
      motorCap.position.set(endX, 0.13, endZ);
      drone.add(motorCap);

      const ledGeo = new THREE.SphereGeometry(0.022, 8, 8);
      const led = new THREE.Mesh(ledGeo, cfg.z > 0 ? ledMat : greenLedMat);
      led.position.set(endX + cfg.x * 0.08, 0.08, endZ + cfg.z * 0.08);
      drone.add(led);

      const guardGeo = new THREE.TorusGeometry(0.52, 0.015, 8, 32);
      const guard = new THREE.Mesh(guardGeo, guardMat);
      guard.rotation.x = Math.PI / 2;
      guard.position.set(endX, 0.15, endZ);
      drone.add(guard);

      for (let s = 0; s < 2; s++) {
        const strutAngle = cfg.angle + (s === 0 ? 0.5 : -0.5);
        const strutGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.42, 6);
        const strut = new THREE.Mesh(strutGeo, bodyMat);
        strut.rotation.z = Math.PI / 2;
        strut.rotation.y = strutAngle;
        strut.position.set(
          endX + Math.cos(strutAngle) * 0.2,
          0.15,
          endZ + Math.sin(strutAngle) * 0.2
        );
        drone.add(strut);
      }

      const propGroup = new THREE.Group();
      propGroup.position.set(endX, 0.17, endZ);

      for (let b = 0; b < 2; b++) {
        const bladeShape = new THREE.Shape();
        bladeShape.moveTo(0, 0);
        bladeShape.quadraticCurveTo(0.06, 0.05, 0.45, 0.035);
        bladeShape.lineTo(0.45, 0.01);
        bladeShape.quadraticCurveTo(0.06, -0.02, 0, 0);
        bladeShape.closePath();

        const bladeGeo = new THREE.ShapeGeometry(bladeShape);
        const blade = new THREE.Mesh(bladeGeo, propMat);
        blade.rotation.z = b * Math.PI;
        blade.rotation.x = 0.12;
        propGroup.add(blade);
      }

      const hubGeo = new THREE.CylinderGeometry(0.028, 0.028, 0.035, 8);
      const hub = new THREE.Mesh(hubGeo, motorMat);
      propGroup.add(hub);

      drone.add(propGroup);
      propGroups.push(propGroup);
    });

    // Landing Gear
    const gearPositions = [
      { x: 0.35, z: 0.3 }, { x: -0.35, z: 0.3 },
      { x: 0.35, z: -0.3 }, { x: -0.35, z: -0.3 },
    ];
    gearPositions.forEach(pos => {
      const legGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.28, 8);
      const leg = new THREE.Mesh(legGeo, darkBodyMat);
      leg.position.set(pos.x, -0.27, pos.z);
      leg.rotation.x = pos.z > 0 ? -0.25 : 0.25;
      leg.rotation.z = pos.x > 0 ? 0.1 : -0.1;
      drone.add(leg);

      const footGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.35, 8);
      const foot = new THREE.Mesh(footGeo, darkBodyMat);
      foot.rotation.z = Math.PI / 2;
      foot.position.set(pos.x, -0.4, pos.z);
      drone.add(foot);

      const capGeo = new THREE.SphereGeometry(0.018, 6, 6);
      const capMat = new THREE.MeshStandardMaterial({ color: 0xcc1f2a, metalness: 0.5, roughness: 0.3 });
      const cap1 = new THREE.Mesh(capGeo, capMat);
      cap1.position.set(pos.x + 0.17, -0.4, pos.z);
      drone.add(cap1);
      const cap2 = new THREE.Mesh(capGeo, capMat);
      cap2.position.set(pos.x - 0.17, -0.4, pos.z);
      drone.add(cap2);
    });

    const statusLedGeo = new THREE.SphereGeometry(0.02, 8, 8);
    const statusLed = new THREE.Mesh(statusLedGeo, greenLedMat);
    statusLed.position.set(0, 0.14, 0.25);
    drone.add(statusLed);

    drone.scale.setScalar(0.85);
    drone.rotation.x = 0.1;
    drone.rotation.y = -0.3;

    scene.add(drone);

    const droneTargetPos = new THREE.Vector3(0, 0, 0);
    const droneCurrentPos = new THREE.Vector3(0, 0, 0);
    let isHovering = false;
    const flyAwayRadius = 2.2;
    const returnSpeed = 0.03;
    const fleeSpeed = 0.08;

    const clock = new THREE.Clock();
    let targetRotX = 0, targetRotY = 0;
    let currentRotX = 0, currentRotY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / W - 0.5) * 2;
      const ny = -((e.clientY - rect.top) / H - 0.5) * 2;
      mouseRef.current = { x: nx, y: ny };
      targetRotY = nx * 0.3;
      targetRotX = ny * 0.15;
      isHovering = true;

      const mouseWorldX = nx * 3.5;
      const mouseWorldY = ny * 2.5;
      const dx = droneCurrentPos.x - mouseWorldX;
      const dy = droneCurrentPos.y - mouseWorldY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 4.0) {
        const fleeFactor = Math.max(0, 1 - dist / 4.0);
        const normX = dist > 0.01 ? dx / dist : 0;
        const normY = dist > 0.01 ? dy / dist : 0;
        droneTargetPos.x = normX * flyAwayRadius * fleeFactor;
        droneTargetPos.y = normY * flyAwayRadius * fleeFactor;
      }
    };

    const onMouseLeave = () => {
      isHovering = false;
      droneTargetPos.set(0, 0, 0);
      targetRotY = 0;
      targetRotX = 0;
    };

    const onTouchMove = (e) => {
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const nx = ((touch.clientX - rect.left) / W - 0.5) * 2;
      const ny = -((touch.clientY - rect.top) / H - 0.5) * 2;
      mouseRef.current = { x: nx, y: ny };
      targetRotY = nx * 0.3;
      targetRotX = ny * 0.15;

      const mouseWorldX = nx * 3.5;
      const mouseWorldY = ny * 2.5;
      const dx = droneCurrentPos.x - mouseWorldX;
      const dy = droneCurrentPos.y - mouseWorldY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 4.0) {
        const fleeFactor = Math.max(0, 1 - dist / 4.0);
        const normX = dist > 0.01 ? dx / dist : 0;
        const normY = dist > 0.01 ? dy / dist : 0;
        droneTargetPos.x = normX * flyAwayRadius * fleeFactor;
        droneTargetPos.y = normY * flyAwayRadius * fleeFactor;
      }
    };

    const onTouchEnd = () => {
      droneTargetPos.set(0, 0, 0);
      targetRotY = 0;
      targetRotX = 0;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      const lerpFactor = isHovering ? fleeSpeed : returnSpeed;
      droneCurrentPos.x += (droneTargetPos.x - droneCurrentPos.x) * lerpFactor;
      droneCurrentPos.y += (droneTargetPos.y - droneCurrentPos.y) * lerpFactor;

      const hoverY = Math.sin(elapsed * 1.2) * 0.1;

      drone.position.x = droneCurrentPos.x;
      drone.position.y = droneCurrentPos.y + hoverY;
      drone.position.z = droneCurrentPos.z;

      const velX = droneTargetPos.x - droneCurrentPos.x;
      const velY = droneTargetPos.y - droneCurrentPos.y;
      drone.rotation.x = currentRotX + Math.sin(elapsed * 0.8) * 0.015 + velY * 0.15;
      drone.rotation.y = currentRotY + elapsed * 0.08;
      drone.rotation.z = Math.sin(elapsed * 1.5) * 0.025 - velX * 0.12;

      propGroups.forEach((pg, i) => {
        pg.rotation.y += i % 2 === 0 ? 0.5 : -0.5;
      });

      ledMat.emissiveIntensity = 1.5 + Math.sin(elapsed * 8) * 0.5;
      greenLedMat.emissiveIntensity = 1.2 + Math.sin(elapsed * 6 + 1) * 0.3;

      camera.position.x = mouseRef.current.x * 0.25;
      camera.position.y = 0.5 + mouseRef.current.y * 0.15;
      camera.lookAt(droneCurrentPos.x * 0.3, droneCurrentPos.y * 0.3, 0);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      W = container.clientWidth;
      H = container.clientHeight;
      camera.aspect = W / H;
      const nowMobile = W < 768;
      camera.position.z = nowMobile ? 6.0 : 8.0;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", cursor: "crosshair" }}
    />
  );
}
