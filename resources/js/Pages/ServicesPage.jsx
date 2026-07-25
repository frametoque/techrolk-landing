import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Printer, Cpu, Plane, Pen, ArrowRight, ShoppingBag, CheckCircle, ChevronRight, Hammer } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../Components/AnimationUtils";

const iconMap = {
  Cpu: Cpu,
  Printer: Printer,
  Plane: Plane,
  Pen: Pen,
  Hammer: Hammer,
};

export default function ServicesPage({ servicesData = [] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const defaultServices = [
    {
      id: "cad",
      title: "Computer Aided Designing",
      tagline: "Precision engineering for the physical world",
      iconName: "Cpu",
      description: "TechRoLK's CAD team uses industry-leading software to create precise 3D models for any application, from consumer products to industrial components. We work in all major CAD file formats and handle both conceptual design and detailed engineering drawings.",
      features: [
        "3D product modeling & assemblies",
        "Engineering drawings & tolerancing",
        "Reverse engineering from physical parts",
        "Tooling & fixture design",
        "Simulation & stress analysis",
        "DFM (Design for Manufacturing) reviews",
      ],
      deliverables: ["STEP, IGES, STL files", "DWG/DXF drawings", "SolidWorks / Fusion 360 files", "3D printed prototype available"],
    },
    {
      id: "printing",
      title: "3D Printing",
      tagline: "Premium quality from filament to finished part",
      iconName: "Printer",
      description: "We operate multiple FDM and resin 3D printers to deliver the best possible output for your project. With the widest material selection in Sri Lanka and 3 outlets for pickup or nationwide delivery, TechRoLK is your go-to 3D printing partner.",
      features: [
        "FDM printing in PLA, ABS, PETG, TPU, and more",
        "Resin printing for fine detail",
        "Large format prints available",
        "Post-processing, sanding & painting",
        "Batch production capabilities",
        "Same-day service for urgent orders",
      ],
      deliverables: ["Physical printed parts", "Multiple finish options", "Quality inspection report", "Packaging & shipping"],
    },
    {
      id: "drones",
      title: "Drone Solutions",
      tagline: "Custom UAV systems built for your mission",
      iconName: "Plane",
      description: "TechRoLK specializes in designing, building, & tuning custom UAV systems. From racing FPV quads to professional-grade inspection drones, our engineers have prototyped unmanned ground vehicles, 6-DOF robotic arms, and intelligent aerial platforms.",
      features: [
        "Custom FPV & racing drone builds",
        "Professional cinematography rigs",
        "Inspection & survey drone platforms",
        "Drone component sourcing & assembly",
        "Flight controller configuration & tuning",
        "Free assembly with component purchase",
      ],
      deliverables: ["Fully assembled & tested drone", "Flight manual & configuration file", "Tuning session included", "After-sales support"],
    },
    {
      id: "prototyping",
      title: "Prototyping",
      tagline: "Precision prototypes that bring your ideas to life",
      iconName: "Pen",
      description: "TechRoLK's prototyping services combine CAD, 3D printing, and electronics to create functional prototypes for your product ideas. We can help you iterate quickly, test your concepts, and refine your designs before moving to mass production.",
      features: [
        "Tailored prototyping solutions for your product",
        "Rapid iteration and testing of concepts",
        "Integration of electronics and sensors",
        "Functional prototypes for user testing",
        "Design for manufacturability feedback",
      ],
      deliverables: ["Functional prototype units", "Design documentation and CAD files", "Testing and validation reports", "Guidance for mass production"],
    },
    {
      id: "fpv-drone-assembling",
      title: "FPV Drone Assembling & Tuning",
      tagline: "This service is provided free when you are buying main components from us.",
      iconName: "Hammer",
      description: "TechRoLK offers comprehensive FPV drone assembling and tuning services to get your custom-built drones flying at their best.",
      features: [
        "Custom FPV drone builds",
        "Flight controller configuration & tuning",
        "Component sourcing & assembly",
        "Post-assembly testing & validation",
      ],
      deliverables: ["Fully assembled & tested drone", "Flight manual & configuration file", "Tuning session included", "After-sales support"],
    },
  ];

  const services = servicesData.length > 0
    ? servicesData.map(s => ({
        id: s.id || s.name,
        title: s.name || s.title,
        tagline: s.tagline || "",
        iconName: s.icon || "Cpu",
        description: s.description,
        features: Array.isArray(s.features) ? s.features : (typeof s.features === 'string' ? JSON.parse(s.features) : []),
        deliverables: Array.isArray(s.deliverables) ? s.deliverables : (typeof s.deliverables === 'string' ? JSON.parse(s.deliverables) : []),
      }))
    : defaultServices;

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Navbar currentPath="/services" />

     {/* Hero */}
      <section style={{
        paddingTop: isMobile ? 100 : 140,
        paddingBottom: isMobile ? 50 : 80,
        background: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 50% 70% at 30% 50%, rgba(204,31,42,0.12) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 16px" : "0 24px", position: "relative" }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(204,31,42,0.15)", border: "1px solid rgba(204,31,42,0.3)",
                borderRadius: 100, padding: "6px 16px", marginBottom: isMobile ? 16 : 24,
              }}
            >
              <span style={{ fontSize: isMobile ? 12 : 13, fontWeight: 600, color: "#CC1F2A" }}>Our Services</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: isMobile ? "32px" : "clamp(36px, 5vw, 60px)",
                fontWeight: 900, lineHeight: 1.15,
                color: "white", letterSpacing: "-0.03em",
                maxWidth: 600, marginBottom: isMobile ? 14 : 20,
              }}
            >
              Engineering That Delivers Results
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: isMobile ? 15 : 17, color: "#9B9B9B", maxWidth: 500, lineHeight: 1.65 }}>
              Four core disciplines, one goal, turning your ideas into tangible, working products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: isMobile ? "50px 0" : "clamp(40px, 8vw, 80px) 0", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 16px" : "0 clamp(16px, 5vw, 24px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 32 : "clamp(24px, 6vw, 48px)" }}>
            {services.map(({ id, title, tagline, iconName, description, features, deliverables }, idx) => {
              const Icon = iconMap[iconName] || Cpu;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={id || idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.65 }}
                  style={{
                    background: "white",
                    border: "1px solid #E8E8E8",
                    borderRadius: isMobile ? 16 : "clamp(12px, 3vw, 20px)",
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : isEven ? "1fr 1.4fr" : "1.4fr 1fr",
                  }}
                >
                  {/* Visual panel (odd = left) - on mobile desktop order is preserved cleanly */}
                  {!isEven && (
                    <div
                      style={{
                        background: "#0A0A0A",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        padding: isMobile ? "24px 18px" : "clamp(24px, 6vw, 48px)", gap: isMobile ? 16 : 24, minHeight: isMobile ? "auto" : 400,
                        order: isMobile ? 2 : 1,
                      }}
                    >
                      <div
                        style={{
                          width: isMobile ? 60 : 80, height: isMobile ? 60 : 80,
                          background: "rgba(204,31,42,0.15)",
                          borderRadius: isMobile ? 18 : 24,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          border: "1px solid rgba(204,31,42,0.3)",
                        }}
                      >
                        <Icon size={isMobile ? 30 : 40} color="#CC1F2A" />
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 10, width: "100%" }}>
                        {(deliverables || []).map((d, di) => (
                          <div
                            key={di}
                            style={{
                              background: "#1A1A1A",
                              borderRadius: 8, padding: "10px 12px",
                              fontSize: 12, color: "#C4C4C4", lineHeight: 1.4,
                            }}
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Content panel */}
                  <div style={{
                    padding: isMobile ? "24px 18px" : "clamp(24px, 6vw, 48px) clamp(20px, 5vw, 40px)",
                    order: isMobile ? 1 : (isEven ? 1 : 2)
                  }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      background: "rgba(204,31,42,0.04)", borderRadius: 8,
                      padding: "6px 14px", marginBottom: 16,
                    }}>
                      <Icon size={14} color="#CC1F2A" />
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#CC1F2A", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {title}
                      </span>
                    </div>
                    {tagline && <p style={{ fontSize: 13, color: "#9B9B9B", fontWeight: 500, marginBottom: 8 }}>{tagline}</p>}
                    <h2 style={{ fontSize: isMobile ? "22px" : "clamp(18px, 4vw, 32px)", fontWeight: 900, color: "#0A0A0A", marginBottom: 14 }}>
                      {title}
                    </h2>
                    <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 24 }}>{description}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                      {(features || []).map((f, fi) => (
                        <div key={fi} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <CheckCircle size={15} color="#CC1F2A" strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
                          <span style={{ fontSize: 14, color: "#3A3A3A" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 12, flexDirection: isMobile ? "column" : "row" }}>
                      <a href="/contact" style={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                        background: "#CC1F2A", color: "white",
                        padding: "12px 22px", borderRadius: 8,
                        fontWeight: 700, fontSize: 14, textDecoration: "none",
                        width: isMobile ? "100%" : "auto",
                        boxSizing: "border-box",
                      }}>
                        Request Quote <ArrowRight size={14} />
                      </a>
                      <a
                        href="https://techrolk.com/shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                          border: "1.5px solid #E8E8E8", color: "#0A0A0A",
                          padding: "12px 22px", borderRadius: 8,
                          fontWeight: 600, fontSize: 14, textDecoration: "none",
                          width: isMobile ? "100%" : "auto",
                          boxSizing: "border-box",
                        }}
                      >
                        <ShoppingBag size={14} /> Shop Parts
                      </a>
                    </div>
                  </div>

                  {/* Visual panel (even = right) */}
                  {isEven && (
                    <div
                      style={{
                        background: "#0A0A0A",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        padding: isMobile ? "24px 18px" : "clamp(24px, 6vw, 48px)", gap: isMobile ? 16 : 24, minHeight: isMobile ? "auto" : 400,
                        order: isMobile ? 2 : 2,
                      }}
                    >
                      <div
                        style={{
                          width: isMobile ? 60 : 80, height: isMobile ? 60 : 80,
                          background: "rgba(204,31,42,0.15)",
                          borderRadius: isMobile ? 18 : 24,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          border: "1px solid rgba(204,31,42,0.3)",
                        }}
                      >
                        <Icon size={isMobile ? 30 : 40} color="#CC1F2A" />
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 10, width: "100%" }}>
                        {(deliverables || []).map((d, di) => (
                          <div
                            key={di}
                            style={{
                              background: "#1A1A1A",
                              borderRadius: 8, padding: "10px 12px",
                              fontSize: 12, color: "#C4C4C4", lineHeight: 1.4,
                            }}
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? "50px 0" : "80px 0", background: "white" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: isMobile ? "0 16px" : "0 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: isMobile ? "24px" : "clamp(22px, 5vw, 44px)", fontWeight: 900, color: "#0A0A0A", marginBottom: 16 }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 28 }}>
            Tell us your idea and we'll figure out the rest.
          </p>
          <a href="/contact" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: "#CC1F2A", color: "white",
            padding: "15px 32px", borderRadius: 10,
            fontWeight: 700, fontSize: 16, textDecoration: "none",
            width: isMobile ? "100%" : "auto",
            boxSizing: "border-box",
          }}>
            Talk to Us <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
