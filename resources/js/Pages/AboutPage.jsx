import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ArrowRight, Target, Eye, ShoppingBag } from "lucide-react";
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

export default function AboutPage({ teamData = [], partnersData = [], dealershipsData = [] }) {
  const team = teamData.length > 0 ? teamData : [
    { name: "Ruvindu Bamunuge", role: "UAS Design Engineer", bio: "Specializes in unmanned aerial systems layout, structural design, and aerodynamics optimization.", image: "/team/ruvindu.jpg" },
    { name: "Rishan Sachinthana", role: "Mechatronic Engineer", bio: "Expert in robotics, control systems, and integrating hardware with smart automation software.", image: "/team/rishan.jpg" },
    { name: "Shanuka Kamesh", role: "Mechatronic Engineer", bio: "Focuses on electronic circuits, microcontroller firmware, and embedded system design.", image: "/team/shanuka.jpg" },
    { name: "Miraj Madurawala", role: "Mechatronic Engineer", bio: "Specializes in precision mechanical setups, sensor fusion, and automated prototyping workflows.", image: "/team/miraj.jpg" },
    { name: "Pasindu Nanayakkara", role: "Mechanical Engineer", bio: "Expert in CAD modeling, stress analysis, mechanical assemblies, and production design.", image: "/team/pasindu.jpeg" },
  ];

  const partners = partnersData.length > 0 ? partnersData : [
    { name: "Western Aluminiums", logo: "/partners/western-aluminiums.png" },
  ];

  const dealerships = dealershipsData.length > 0 ? dealershipsData : [
    { name: "BetaFPV", logo: "/partners/betafpv.jpg" },
    { name: "CNHL", logo: "/partners/cnhl-1.jpg" },
    { name: "GEPRC", logo: "/partners/geprc.png" },
    { name: "iFlight", logo: "/partners/iflight.png" },
    { name: "Master Airscrew", logo: "/partners/masterairscrew.png" },
    { name: "Radio Master", logo: "/partners/radiomaster.jpg" },
    { name: "Ready To Sky", logo: "/partners/readytosky.png" },
    { name: "T-Motor", logo: "/partners/tmotor.png" },
  ];

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Navbar currentPath="/about" />

      {/* Hero */}
      <section className="section-padding-hero" style={{
        paddingTop: 140, paddingBottom: 80,
        background: "#0A0A0A", position: "relative", overflow: "hidden",
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 50% 70% at 20% 50%, rgba(204,31,42,0.12) 0%, transparent 70%)",
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
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
                borderRadius: 100, padding: "6px 16px", marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 600, color: "#CC1F2A" }}>About TechRoLK</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 900, lineHeight: 1.1,
                color: "white", letterSpacing: "-0.03em", maxWidth: 700, marginBottom: 20,
              }}
            >
              Empowering Imaginations with Engineering
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: 17, color: "#9B9B9B", maxWidth: 540, lineHeight: 1.7 }}>
              We are a team of passionate engineers and designers from Sri Lanka, dedicated to transforming ideas into real, working products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding" style={{ padding: "80px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div
                variants={fadeLeft}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  color: "#CC1F2A", fontSize: 12, fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16,
                }}
              >
                <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
                Our Story
              </motion.div>
              <motion.h2 variants={fadeLeft} style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 900, color: "#0A0A0A", letterSpacing: "-0.02em", marginBottom: 20 }}>
                Founded on a Belief That Ideas Should Become Real
              </motion.h2>
              <motion.p variants={fadeLeft} style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.8, marginBottom: 16 }}>
                TechRoLK Engineering Solutions was founded with one simple belief: that great ideas shouldn't stay on paper. We set up shop in Maharagama, Colombo with a handful of 3D printers, a drone workbench, and a determination to help anyone who walked through our door bring their project to life.
              </motion.p>
              <motion.p variants={fadeLeft} style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.8, marginBottom: 16 }}>
                Today, we serve students, startups, industrial clients, and hobbyists across Sri Lanka. Our team has grown to include mechanical engineers, drone specialists, graphic designers, and CAD experts, all under one roof.
              </motion.p>
              <motion.p variants={fadeLeft} style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.8 }}>
                With one physical outlet and a growing online store that ships worldwide, we are becoming the engineering backbone of Sri Lanka's maker community.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid-2x2"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {[
                { value: "2019", label: "Founded" },
                { value: "500+", label: "Projects" },
                { value: "1000+", label: "3D Prints" },
                { value: "100+", label: "Clients" },
              ].map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  style={{
                    background: "#0A0A0A", borderRadius: 16,
                    padding: 28, textAlign: "center",
                    border: "1px solid #1A1A1A",
                    cursor: "default",
                  }}
                >
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#CC1F2A", letterSpacing: "-0.04em", marginBottom: 6 }}>
                    {value}
                  </div>
                  <div style={{ fontSize: 13, color: "#9B9B9B", fontWeight: 500 }}>{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding" style={{ padding: "80px 0", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="vision-mission-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              style={{
                background: "#CC1F2A", borderRadius: 20, padding: 44, position: "relative", overflow: "hidden",
              }}
            >
              <Eye size={36} color="rgba(255,255,255,0.8)" style={{ marginBottom: 24 }} />
              <h3 style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                Our Vision
              </h3>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: "white", lineHeight: 1.3, marginBottom: 16 }}>
                Empowering your imaginations with engineering solutions
              </h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.8 }}>
                To empower individuals and organizations with innovative engineering solutions that drive creativity and foster technological advancement in Sri Lanka.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              style={{
                background: "#0A0A0A", borderRadius: 20, padding: 44, position: "relative", overflow: "hidden",
              }}
            >
              <Target size={36} color="#CC1F2A" style={{ marginBottom: 24 }} />
              <h3 style={{ fontSize: 12, fontWeight: 700, color: "#CC1F2A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                Our Mission
              </h3>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: "white", lineHeight: 1.3, marginBottom: 16 }}>
                Become the branded engineering symbol in Sri Lankan Entrepreneurial context.
              </h2>
              <p style={{ fontSize: 14, color: "#9B9B9B", lineHeight: 1.8 }}>
                To become the recognized branded engineering symbol in the Sri Lankan entrepreneurial context, providing innovative solutions that drive creativity and foster technological advancement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ padding: "80px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <motion.div
            style={{ textAlign: "center", marginBottom: 56 }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                color: "#CC1F2A", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14,
              }}
            >
              <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
              The Team
              <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
            </motion.div>
            <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 900, color: "#0A0A0A", letterSpacing: "-0.025em" }}>
              The People Behind the Work
            </motion.h2>
          </motion.div>

          <motion.div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {team.map(member => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                style={{
                  background: "#FAFAFA", border: "1px solid #E8E8E8",
                  borderRadius: 16, padding: 24,
                  display: "flex", flexDirection: "column",
                  cursor: "default",
                }}
              >
               <div style={{
                width: "100%", height: 260,
                background: "#1A1A1A", borderRadius: 12,
                overflow: "hidden", marginBottom: 18,
                position: "relative"
              }}>
                {member.image ? (
                  <img
                    src={member.image} 
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ) : null}
              </div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#0A0A0A", marginBottom: 4 }}>{member.name}</h3>
                <div style={{ fontSize: 12, color: "#CC1F2A", fontWeight: 700, letterSpacing: "0.04em", marginBottom: 12 }}>{member.role}</div>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7 }}>{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding" style={{ padding: "80px 0", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
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
                display: "inline-flex", alignItems: "center", gap: 6,
                color: "#CC1F2A", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14,
              }}
            >
              <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
              Our Partners
            </motion.div>
            <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#0A0A0A", letterSpacing: "-0.02em" }}>
              Strategic Partners
            </motion.h2>
          </motion.div>
          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {partners.map(p => (
              <motion.div
                key={p.name}
                variants={scaleIn}
                whileHover={{ scale: 1.06, y: -4 }}
                style={{
                  background: "white", border: "1px solid #E8E8E8",
                  borderRadius: 16, padding: "24px 32px",
                  width: 160,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14,
                  cursor: "default",
                }}
              >
                <div style={{ position: "relative", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                  />
                </div>
                <span style={{ fontWeight: 700, fontSize: 14, textAlign: "center" }}>{p.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

       {/* Dealerships */}
      <section className="section-padding" style={{ padding: "80px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
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
                display: "inline-flex", alignItems: "center", gap: 6,
                color: "#CC1F2A", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14,
              }}
            >
              <div style={{ width: 24, height: 2, background: "#CC1F2A", borderRadius: 2 }} />
              Official
            </motion.div>
            <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#0A0A0A", letterSpacing: "-0.02em" }}>
              Dealerships
            </motion.h2>
          </motion.div>
          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {dealerships.map(d => (
              <motion.div
                key={d.name}
                variants={scaleIn}
                whileHover={{ scale: 1.07, y: -5 }}
                style={{
                  background: "#FAFAFA", border: "1px solid #E8E8E8",
                  borderRadius: 16, padding: "24px 32px",
                  width: 160,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14,
                  cursor: "default",
                }}
              >
                <div style={{ position: "relative", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <img 
                    src={d.logo} 
                    alt={d.name} 
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                  />
                </div>
                <span style={{ fontWeight: 700, fontSize: 14, textAlign: "center" }}>{d.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ padding: "80px 0", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "white", letterSpacing: "-0.025em", marginBottom: 16 }}
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: 16, color: "#9B9B9B", lineHeight: 1.7, marginBottom: 36 }}>
              Whether you have a clear project brief or just a rough idea, we are here to help you take the next step.
            </motion.p>
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
            >
              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#CC1F2A", color: "white",
                padding: "15px 32px", borderRadius: 10,
                fontWeight: 700, fontSize: 15, textDecoration: "none",
                boxShadow: "0 4px 24px rgba(204,31,42,0.4)",
              }}>
                Get in Touch <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
