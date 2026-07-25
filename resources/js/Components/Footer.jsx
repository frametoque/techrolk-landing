import React from "react";
import { MapPin, Phone, Mail, ShoppingBag } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainerSlow,
  viewportOnce,
} from "./AnimationUtils";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn}
      style={{
        background: "#0A0A0A",
        color: "#9B9B9B",
        paddingTop: 64,
        paddingBottom: 32,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <img
                src="/logo-with-name-dark.png"
                alt="TechRoLK Logo"
                style={{ width: 160, height: "auto" }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling && (e.currentTarget.nextSibling.style.display = 'block');
                }}
              />
              <span style={{ display: 'none', fontSize: 22, fontWeight: 900, color: '#FFFFFF' }}>
                Tech<span style={{ color: '#CC1F2A' }}>RoLK</span>
              </span>
            </div>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
            Get in Touch with Us for Quality Prototyping services & Engineering Solutions.
            <br />
            Business Registration No.- W/C21923
            </p>

            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  icon: FaFacebookF,
                  href: "https://facebook.com/techrolk",
                },
                {
                  icon: FaInstagram,
                  href: "https://instagram.com/techrolk",
                },
                {
                  icon: FaYoutube,
                  href: "https://youtube.com/@techrolk",
                },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  aria-label={`Visit our social page`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  style={{
                    width: 36,
                    height: 36,
                    background: "#1A1A1A",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9B9B9B",
                    textDecoration: "none",
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h3
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 20,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h3>

            {[
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
              { href: "https://techrolk.com/shop", label: "Shop" },
            ].map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <a
                  href={link.href}
                  style={{
                    display: "block",
                    color: "#9B9B9B",
                    textDecoration: "none",
                    fontSize: 14,
                    marginBottom: 12,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#CC1F2A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9B9B9B")}
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 20,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Services
            </h4>
            {[
              "Drone Solutions",
              "Computer Aided Design",
              "3D Printing",
              "Prototyping",
              "FPV Drone Assembling & Tuning",
            ].map((service) => (
              <motion.div
                key={service}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <a
                  href="/services"
                  style={{
                    display: "block",
                    color: "#9B9B9B",
                    textDecoration: "none",
                    fontSize: 14,
                    marginBottom: 12,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#CC1F2A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9B9B9B")}
                >
                  {service}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 20,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <a
                href="https://maps.app.goo.gl/5HeD5sFRaH5w1Z5T7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  gap: 10,
                  color: "#9B9B9B",
                  textDecoration: "none",
                  fontSize: 13,
                }}
              >
                <MapPin
                  size={16}
                  style={{ color: "#CC1F2A", flexShrink: 0 }}
                />
                159/48C, Temple Road, Maharagama, Colombo, Sri Lanka
              </a>

              <a
                href="tel:+94761943645"
                style={{
                  display: "flex",
                  gap: 10,
                  color: "#9B9B9B",
                  textDecoration: "none",
                  fontSize: 13,
                }}
              >
                <Phone
                  size={16}
                  style={{ color: "#CC1F2A", flexShrink: 0 }}
                />
                +94 76 194 3645
              </a>

              <a
                href="mailto:info@techrolk.com"
                style={{
                  display: "flex",
                  gap: 10,
                  color: "#9B9B9B",
                  textDecoration: "none",
                  fontSize: 13,
                }}
              >
                <Mail
                  size={16}
                  style={{ color: "#CC1F2A", flexShrink: 0 }}
                />
                info@techrolk.com
              </a>
            </div>

            <motion.a
              href="https://techrolk.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#CC1F2A",
                color: "white",
                padding: "10px 18px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                marginTop: 24,
                width: "fit-content",
              }}
            >
              <ShoppingBag size={15} />
              Visit Our Shop
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            borderTop: "1px solid #1A1A1A",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13 }}>
            © {new Date().getFullYear()} TechRoLK Engineering Solutions. All rights reserved.
          </p>

          <p style={{ fontSize: 13 }}>
            Developed by <a href="https://frametoque.online" target="_blank" rel="noopener noreferrer" style={{ color: "#CC1F2A" }}>FrameToque Digital Media</a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
