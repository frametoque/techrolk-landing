import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ currentPath = "" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = currentPath || (typeof window !== "undefined" ? window.location.pathname : "");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActiveRoute = (href) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid #E8E8E8"
          : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <img
                src="/logo-with-name.png"
                alt="TechRoLK Logo"
                style={{ width: 160, height: "auto" }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling && (e.currentTarget.nextSibling.style.display = 'block');
                }}
              />
              <span style={{ display: 'none', fontSize: 20, fontWeight: 900, color: '#0A0A0A' }}>
                Tech<span style={{ color: '#CC1F2A' }}>RoLK</span>
              </span>
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div
            className="hidden-mobile"
            style={{ display: "flex", alignItems: "center", gap: 32 }}
          >
            {navLinks.map((link, i) => {
              const isActive = isActiveRoute(link.href);
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    className={`nav-link${isActive ? " nav-link--active" : ""}`}
                    style={{
                      textDecoration: "none",
                      color: isActive ? "#CC1F2A" : "#3A3A3A",
                      fontSize: 14,
                      fontWeight: isActive ? 600 : 500,
                      position: "relative",
                    }}
                  >
                    {link.label}
                  </a>
                </motion.div>
              );
            })}

            <motion.a
              href="https://techrolk.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="shop-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#CC1F2A",
                color: "white",
                padding: "9px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <ShoppingBag size={15} />
              Shop Now
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "none",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} color="#0A0A0A" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} color="#0A0A0A" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderTop: "1px solid #E8E8E8",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "16px 0 24px" }}>
                {navLinks.map((link, i) => {
                  const isActive = isActiveRoute(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        style={{
                          display: "block",
                          padding: "12px 0",
                          color: isActive ? "#CC1F2A" : "#0A0A0A",
                          textDecoration: "none",
                          fontSize: 16,
                          fontWeight: isActive ? 600 : 500,
                          borderBottom: "1px solid #F5F5F5",
                          borderLeft: isActive ? "3px solid #CC1F2A" : "3px solid transparent",
                          paddingLeft: isActive ? 12 : 0,
                          transition: "all 0.2s ease",
                        }}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  );
                })}

                <motion.a
                  href="https://techrolk.com/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.3 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#CC1F2A",
                    color: "white",
                    padding: "12px 20px",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    marginTop: 16,
                    width: "fit-content",
                  }}
                >
                  <ShoppingBag size={16} />
                  Shop Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .nav-link {
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #CC1F2A !important;
        }

        .nav-link--active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #CC1F2A;
          border-radius: 2px;
        }

        .shop-btn {
          transition: background 0.2s ease;
        }

        .shop-btn:hover {
          background: #A8141E !important;
        }

        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }

        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
