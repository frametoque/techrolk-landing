import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DroneHero from "../Components/DroneHero";
import { ArrowRight, ShoppingBag, Printer, ChevronRight, Star, CheckCircle, Zap, Shield, Award, Users, MessageCircle, Cpu, Plane, Pen, Hammer } from "lucide-react";

const serviceIconMap = {
  Plane: Plane,
  Cpu: Cpu,
  Printer: Printer,
  Pen: Pen,
  Hammer: Hammer,
  Zap: Zap,
  Shield: Shield,
};
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  staggerContainerSlow,
  viewportOnce,
} from "../Components/AnimationUtils";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
];

const printingStats = [
  { label: "Materials", value: "10+" },
  { label: "Color Options", value: "50+" },
  { label: "Max Resolution", value: "0.1mm" },
  { label: "Prints Done", value: "1000+" },
];

const printingFeatures = [
  "PLA, ABS, PETG, TPU, and more",
  "Layer resolution from 0.1mm",
  "Large build volumes available",
  "Post-processing & finishing services",
];

const features = [
  { icon: Zap, title: "Fast Turnaround", desc: "Quick project completion without compromising quality" },
  { icon: Shield, title: "Quality Assured", desc: "Every output meets our strict engineering standards" },
  { icon: Award, title: "Expert Team", desc: "Skilled engineers with multi-disciplinary expertise" },
  { icon: Users, title: "Client First", desc: "Your vision drives every decision we make" },
];

const highlights = [
  "Discounts available",
  "Nationwide delivery across Sri Lanka",
  "Worldwide shipping on components",
];

export default function HomePage({ servicesData = [], testimonialsData = [] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayServices = servicesData.length > 0 ? servicesData : [
    { name: "Drone Solutions", description: "Custom UAV and FPV drone design, manufacturing, and assembly.", tagline: "Custom UAV systems" },
    { name: "Computer Aided Designing", description: "Precision 3D CAD modeling for product design, prototyping, and tooling.", tagline: "Precision 3D modeling" },
    { name: "3D Printing", description: "Premium quality 3D prints with a wide range of materials and colors.", tagline: "FDM & SLA printing" },
    { name: "Prototyping", description: "Successfully prototyped a wide range of devices including robotic arms.", tagline: "Functional prototypes" },
    { name: "FPV Drone Assembling & Tuning", description: "Free assembly service when buying main components from us.", tagline: "Expert tuning" },
  ];

  const displayTestimonials = testimonialsData.length > 0 ? testimonialsData : [
    { name: "Prabath Anuradha", role: "Client", text: "Excellent service and timely response", stars: 5 },
    { name: "Ravindu Gunarathna", role: "Client", text: "Highly recommend buying from Techro lk. professional and respectfully friendly service. Quality products", stars: 5 },
    { name: "Tinura Andaraweera", role: "Client", text: "Superb customer service I ever seen in my Life and 3d printing is soo neat and clean", stars: 5 },
    { name: "Dinal Samarasinha", role: "Client", text: "Best coustomer service and super fast delivery, Highly recommend for anyone to purchase ,all original and high quality products. Thank you very much!", stars: 5 },
  ];

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Navbar currentPath="/" />

      {/* Hero Section */}
      <section
        className="section-padding-hero"
        style={{
          minHeight: "100vh",
          background: "#FAFAFA",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 68,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(204,31,42,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 0 : 48,
              alignItems: "center",
              minHeight: isMobile ? "auto" : "calc(100vh - 68px)",
            }}
          >
            {/* Left text */}
            <motion.div
              style={{
                padding: isMobile ? "40px 0 30px 0" : "60px 0",
                width: "100%",
                boxSizing: "border-box",
              }}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUp}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(204,31,42,0.08)",
                  border: "1px solid rgba(204,31,42,0.2)",
                  borderRadius: 100,
                  padding: "6px 16px",
                  marginBottom: isMobile ? 18 : 24,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#CC1F2A",
                  }}
                />
                <span
                  style={{
                    fontSize: isMobile ? 12 : 13,
                    fontWeight: 600,
                    color: "#CC1F2A",
                    letterSpacing: "0.04em",
                  }}
                >
                  TechRoLK - Engineering Solutions
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{
                  fontSize: isMobile ? "32px" : "clamp(38px, 5vw, 60px)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: "#0A0A0A",
                  letterSpacing: "-0.03em",
                  marginBottom: isMobile ? 14 : 20,
                }}
              >
                Build Your{" "}
                <span style={{ color: "#CC1F2A", position: "relative" }}>
                  Imagination
                </span>
                <br />
                Into Reality
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: isMobile ? 15 : 17,
                  lineHeight: 1.65,
                  color: "#6B6B6B",
                  marginBottom: isMobile ? 28 : 36,
                  maxWidth: 440,
                }}
              >
                From precision CAD design and premium 3D printing to custom drone
                solutions and functional prototyping, we transform your concepts into
                working physical products.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="btn-row"
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: 12,
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{ width: isMobile ? "100%" : "auto", boxSizing: "border-box" }}
                >
                  <a
                    href="/services"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: "#CC1F2A",
                      color: "white",
                      padding: "14px 28px",
                      borderRadius: 10,
                      fontWeight: 700,
                      fontSize: 15,
                      textDecoration: "none",
                      boxShadow: "0 4px 20px rgba(204,31,42,0.3)",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    Explore Services
                    <ArrowRight size={16} />
                  </a>
                </motion.div>

                <motion.a
                  href="https://techrolk.com/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "white",
                    color: "#0A0A0A",
                    padding: "14px 28px",
                    borderRadius: 10,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    border: "2px solid #E8E8E8",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <ShoppingBag size={16} />
                  Shop Components
                </motion.a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={staggerContainer}
                className="stats-row"
                style={{
                  display: "flex",
                  gap: isMobile ? 16 : 28,
                  marginTop: isMobile ? 32 : 48,
                  justifyContent: isMobile ? "space-between" : "flex-start",
                  flexWrap: "nowrap",
                }}
              >
                {stats.map((s) => (
                  <motion.div key={s.label} variants={fadeUp} style={{ flex: isMobile ? "1 1 0px" : "initial" }}>
                    <div
                      style={{
                        fontSize: isMobile ? 22 : 24,
                        fontWeight: 900,
                        color: "#CC1F2A",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? 11 : 12,
                        color: "#9B9B9B",
                        fontWeight: 500,
                        marginTop: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* 3D Drone component - ONLY mounted on desktop to reduce main-thread work on mobile */}
            {!isMobile && (
              <motion.div
                className="hero-canvas-wrap"
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                style={{
                  height: "calc(100vh - 68px)",
                  position: "relative",
                  overflow: "visible",
                  width: "100%",
                }}
              >
                <DroneHero />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{ padding: "clamp(60px, 10vw, 100px) 0", background: "#FAFAFA" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 5vw, 24px)" }}>
          <motion.div
            style={{ textAlign: "center", marginBottom: 48 }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "#CC1F2A",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
              What We Do
              <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(24px, 5vw, 44px)",
                fontWeight: 900,
                color: "#0A0A0A",
                letterSpacing: "-0.025em",
              }}
            >
              Our Core Services
            </motion.h2>
          </motion.div>

          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
              alignItems: "stretch",
            }}
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {displayServices.map((service, idx) => {
              const IconComponent = serviceIconMap[service.icon] || (service.name && service.name.includes("Drone") ? Plane : service.name && service.name.includes("CAD") ? Cpu : service.name && service.name.includes("Printing") ? Printer : service.name && service.name.includes("Prototyping") ? Pen : service.name && service.name.includes("Tuning") ? Hammer : Cpu);

              return (
                <motion.div key={service.name || idx} variants={fadeUp} style={{ display: "flex", flex: 1 }}>
                  <a
                    href="/services"
                    style={{
                      background: "white",
                      border: "1px solid #E8E8E8",
                      borderRadius: 18,
                      padding: 28,
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: "100%",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#CC1F2A";
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(204,31,42,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E8E8E8";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          background: "rgba(204,31,42,0.08)",
                          borderRadius: 12,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 20,
                        }}
                      >
                        <IconComponent size={22} color="#CC1F2A" strokeWidth={2.2} />
                      </div>
                      <h3 style={{ fontWeight: 800, fontSize: 18, color: "#0A0A0A", marginBottom: 10, lineHeight: 1.3 }}>
                        {service.name}
                      </h3>
                      <p
                        style={{
                          fontSize: 14,
                          color: "#6B6B6B",
                          lineHeight: 1.6,
                          marginBottom: 20,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#CC1F2A", fontWeight: 700, fontSize: 14, marginTop: "auto" }}>
                      Learn more <ChevronRight size={15} />
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div
                variants={fadeLeft}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#CC1F2A",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
                Who Are We
              </motion.div>
              <motion.h2
                variants={fadeLeft}
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: "#0A0A0A",
                  letterSpacing: "-0.025em",
                  marginBottom: 20,
                }}
              >
                Sri Lanka's Premium<br />Engineering Solutions
              </motion.h2>
              <motion.p
                variants={fadeLeft}
                style={{
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "#6B6B6B",
                  marginBottom: 20,
                }}
              >
                TechRoLK Engineering Solutions is a team of creative engineers and
                designers based in Maharagama, Colombo. We specialize in bringing
                ambitious ideas to life through cutting-edge technology, precision
                engineering, and creative design.
              </motion.p>
              <motion.div variants={staggerContainer}>
                {highlights.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeLeft}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      marginBottom: 12,
                    }}
                  >
                    <CheckCircle size={16} color="#CC1F2A" strokeWidth={2.5} />
                    <span style={{ fontSize: 15, color: "#3A3A3A", fontWeight: 500 }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeLeft}>
                <a
                  href="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 32,
                    color: "#CC1F2A",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Our Full Story <ChevronRight size={18} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {features.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeRight}
                  style={{
                    background: "#FAFAFA",
                    border: "1px solid #E8E8E8",
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      background: "rgba(204,31,42,0.08)",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <Icon size={20} color="#CC1F2A" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0A0A0A", marginBottom: 6 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.6 }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Printing Section */}
      <section style={{ padding: "clamp(60px, 10vw, 100px) 0", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 5vw, 24px)" }}>
          <motion.div
            style={{
              background: "white",
              border: "1px solid #E8E8E8",
              borderRadius: "clamp(16px, 3vw, 24px)",
              padding: "clamp(24px, 5vw, 60px)",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "clamp(24px, 5vw, 48px)",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#CC1F2A",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
                Premium Quality
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px, 5vw, 40px)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: "#0A0A0A",
                  marginBottom: 20,
                }}
              >
                3D Printing<br />That Exceeds Expectations
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6B6B6B", marginBottom: 28 }}>
                We offer the widest range of materials and colors in Sri Lanka for 3D printing.
              </p>
              {printingFeatures.map((f) => (
                <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#CC1F2A" }} />
                  <span style={{ fontSize: 14, color: "#3A3A3A" }}>{f}</span>
                </div>
              ))}
              <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
                <a
                  href="/contact"
                  style={{
                    background: "#CC1F2A",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Get a Quote <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div style={{ background: "#FAFAFA", borderRadius: 16, padding: 32, border: "1px solid #E8E8E8" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {printingStats.map(({ label, value }) => (
                  <div key={label} style={{ background: "white", border: "1px solid #E8E8E8", borderRadius: 12, padding: 20, textAlign: "center" }}>
                    <div style={{ fontSize: 28, fontWeight: 900, color: "#CC1F2A" }}>{value}</div>
                    <div style={{ fontSize: 13, color: "#9B9B9B", marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, background: "#0A0A0A", borderRadius: 12, padding: 20, textAlign: "center", color: "white" }}>
                <Printer size={32} color="#CC1F2A" style={{ display: "block", margin: "0 auto 10px" }} />
                <div style={{ fontWeight: 700, fontSize: 15 }}>Ready to Print</div>
                <div style={{ color: "#9B9B9B", fontSize: 13, marginTop: 4 }}>Ship to your doorstep anywhere in Sri Lanka</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#CC1F2A", fontSize: 13, fontWeight: 600, textTransform: "uppercase", marginBottom: 16 }}>
              <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
              Happy Clients
              <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, color: "#0A0A0A" }}>
              Trusted By Many
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {displayTestimonials.map((t, idx) => (
              <div key={idx} style={{ background: "#FAFAFA", border: "1px solid #E8E8E8", borderRadius: 16, padding: 28 }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                  {Array.from({ length: t.stars || 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="#CC1F2A" color="#CC1F2A" />
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "#3A3A3A", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#0A0A0A" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "#9B9B9B", marginTop: 2 }}>{t.role || "Client"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "100px 0", background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(204,31,42,0.15)", border: "1px solid rgba(204,31,42,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
            <MessageCircle size={14} color="#CC1F2A" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#CC1F2A" }}>Got an Idea?</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: "white", marginBottom: 20 }}>
            Let's Build It Together
          </h2>
          <p style={{ fontSize: 17, color: "#9B9B9B", lineHeight: 1.7, marginBottom: 40 }}>
            Bring us your idea and we'll help you figure out the best path from concept to creation.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#CC1F2A",
                color: "white",
                padding: "15px 32px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(204,31,42,0.4)",
              }}
            >
              Start a Project <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
