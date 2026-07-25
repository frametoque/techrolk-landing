import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "../Components/AnimationUtils";

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const whatsappNumber = "94761943645"; 
  const whatsappMessage = encodeURIComponent("Hello Techrolk!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Navbar currentPath="/contact" />

      {/* Hero Section */}
      <section className="section-padding-hero" style={{
        paddingTop: isMobile ? 100 : 140,
        paddingBottom: isMobile ? 50 : 80,
        background: "#0A0A0A", position: "relative", overflow: "hidden",
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 50% 70% at 70% 50%, rgba(204,31,42,0.12) 0%, transparent 70%)",
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
              <span style={{ fontSize: isMobile ? 12 : 13, fontWeight: 600, color: "#CC1F2A" }}>Contact Us</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: isMobile ? "32px" : "clamp(36px, 5vw, 60px)",
                fontWeight: 900, lineHeight: 1.15,
                color: "white", letterSpacing: "-0.03em", maxWidth: 600, marginBottom: isMobile ? 14 : 20,
              }}
            >
              Let's Talk About Your Project
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: isMobile ? 15 : 17, color: "#9B9B9B", maxWidth: 480, lineHeight: 1.65 }}>
              Reach out via WhatsApp or email.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding" style={{ padding: isMobile ? "50px 0" : "80px 0", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 16px" : "0 24px" }}>
          <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr", gap: isMobile ? 32 : 48, alignItems: "start" }}>
            
            {/* Left Column: Info panel */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div
                variants={fadeLeft}
                style={{
                  background: "white", border: "1px solid #E8E8E8",
                  borderRadius: 20, padding: isMobile ? 24 : 36, marginBottom: 24,
                }}
              >
                <h2 style={{ fontWeight: 800, fontSize: isMobile ? 18 : 20, color: "#0A0A0A", marginBottom: 24 }}>
                  Contact Information
                </h2>
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "159/48C, Temple Road, Maharagama, Colombo, Sri Lanka",
                    href: "https://maps.app.goo.gl/jDtEzntX6eKsTJ416",
                  },
                  { icon: Phone, label: "Phone", value: "+94 76 194 3645", href: "tel:+94761943645" },
                  { icon: Mail, label: "Email", value: "info@techrolk.com", href: "mailto:info@techrolk.com" },
                  { icon: Clock, label: "Hours", value: "Mon–Sat: 9am – 6pm", href: null },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <div
                    key={label}
                    style={{ display: "flex", gap: 14, marginBottom: 20 }}
                  >
                    <div style={{
                      width: 40, height: 40, background: "rgba(204,31,42,0.08)",
                      borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={17} color="#CC1F2A" />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#9B9B9B", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3 }}>
                        {label}
                      </div>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          style={{ fontSize: 14, color: "#0A0A0A", textDecoration: "none", lineHeight: 1.5, fontWeight: 500 }}>
                          {value}
                        </a>
                      ) : (
                        <span style={{ fontSize: 14, color: "#0A0A0A", fontWeight: 500 }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Socials */}
                <div style={{ borderTop: "1px solid #F5F5F5", paddingTop: 20, marginTop: 8 }}>
                  <div style={{ fontSize: 12, color: "#9B9B9B", marginBottom: 14, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Follow Us
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    {[
                      { icon: FaFacebookF, href: "https://facebook.com/techrolk" },
                      { icon: FaInstagram, href: "https://instagram.com/techrolk" },
                      { icon: FaYoutube, href: "https://youtube.com/techrolk" },
                    ].map(({ icon: Icon, href }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: 36, height: 36, background: "#FAFAFA",
                          border: "1px solid #E8E8E8",
                          borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#6B6B6B", textDecoration: "none",
                        }}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Shop CTA */}
              <motion.div
                variants={fadeLeft}
                style={{
                  background: "#CC1F2A", borderRadius: 20, padding: isMobile ? 24 : 28,
                  position: "relative", overflow: "hidden",
                }}
              >
                <h3 style={{ fontWeight: 800, fontSize: 17, color: "white", marginBottom: 8 }}>
                  Need Components?
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginBottom: 18, lineHeight: 1.6 }}>
                  Browse our online store for FPV drones, electronics, 3D printing materials, and more.
                </p>
                <a
                  href="https://techrolk.com/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "white", color: "#CC1F2A",
                    padding: "10px 20px", borderRadius: 8,
                    fontWeight: 700, fontSize: 14, textDecoration: "none",
                    width: isMobile ? "100%" : "auto",
                    boxSizing: "border-box",
                  }}
                >
                  Visit Shop
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Google Maps & WhatsApp Button */}
            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {/* Google Map Embed Card */}
              <motion.div
                variants={fadeRight}
                style={{
                  background: "white", border: "1px solid #E8E8E8",
                  borderRadius: 20, padding: 12, overflow: "hidden",
                  height: isMobile ? 280 : 380, width: "100%", boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                }}
              >
                <iframe
                  title="Techrolk Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3286328702525!2d79.93390797577948!3d6.851153193147187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245b23ce15407%3A0x2879ad950f962e52!2sTechRoLK!5e0!3m2!1sen!2slk!4v1782227988445!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: 12 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              {/* WhatsApp Action Card */}
              <motion.div
                variants={scaleIn}
                style={{
                  background: "white", border: "1px solid #E8E8E8",
                  borderRadius: 20, padding: isMobile ? 24 : 32, textAlign: "center"
                }}
              >
                <div
                  style={{
                    width: 54, height: 54, background: "rgba(211, 37, 37, 0.1)",
                    borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px", color: "#CC1F2A"
                  }}
                >
                  <MessageSquare size={24} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: isMobile ? 18 : 20, color: "#0A0A0A", marginBottom: 8 }}>
                  Chat with us on WhatsApp
                </h3>
                <p style={{ fontSize: 14, color: "#6B6B6B", maxWidth: 400, margin: "0 auto 24px", lineHeight: 1.6 }}>
                  Skip the emails! Click below to open a direct chat with our team. We're ready to discuss your project.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                    background: "#CC1F2A", color: "white",
                    padding: "16px 32px", borderRadius: 12,
                    fontWeight: 700, fontSize: 16, textDecoration: "none",
                    width: "100%", maxWidth: 320, boxSizing: "border-box",
                    boxShadow: "0 4px 14px rgba(211, 37, 37, 0.3)"
                  }}
                >
                  <FaWhatsapp size={20} />
                  Send Message
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
