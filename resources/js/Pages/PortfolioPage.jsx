import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerContainerSlow,
  viewportOnce,
} from "../Components/AnimationUtils";

export default function PortfolioPage({ projectsData = [] }) {
  const projects = projectsData.length > 0 ? projectsData : [
    {
      id: "high-endurance-hexacopter",
      slug: "high-endurance-hexacopter",
      name: "High Endurance Hybrid Oil Electric Hexacopter",
      category: "Drone Solutions",
      mainImage: "/portfolio/hexacopter-1.png",
      description: "A professional-grade, heavy-duty hybrid oil-electric hexacopter engineered to support demanding industrial applications.",
      tags: ["Hybrid Propulsion", "Hexacopter", "Heavy Lift"],
    },
  ];

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Navbar currentPath="/portfolio" />

      {/* Hero Header */}
      <section
        className="section-padding-hero"
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          background: "#0A0A0A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 80% at 60% 50%, rgba(204,31,42,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
          }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(204,31,42,0.15)",
                border: "1px solid rgba(204,31,42,0.3)",
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 600, color: "#CC1F2A" }}>
                Our Work
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 900,
                lineHeight: 1.1,
                color: "white",
                letterSpacing: "-0.03em",
                maxWidth: 600,
                marginBottom: 20,
              }}
            >
              Projects We Are Proud Of
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 17,
                color: "#9B9B9B",
                maxWidth: 520,
                lineHeight: 1.7,
              }}
            >
              From startup projects to commercial products, here is a selection of
              the work we have built for clients across Sri Lanka.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        className="section-padding"
        style={{ padding: "80px 0", background: "#FAFAFA" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <motion.div
            className="portfolio-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
              gap: 24,
            }}
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {projects.map(
              (p) => {
                const projectId = p.slug || p.id || p.title;
                const name = p.name || p.title;
                const category = p.category || "Engineering";
                const image = p.mainImage || p.image1 || "/portfolio/hexacopter-1.png";
                const description = p.description || p.Short_description || "";
                const tags = Array.isArray(p.tags) ? p.tags : (typeof p.tags === 'string' ? JSON.parse(p.tags) : []);

                return (
                  <motion.div
                    key={projectId}
                    variants={fadeUp}
                    whileHover={{ y: -6, scale: 1.01 }}
                    style={{
                      background: "white",
                      border: "1px solid #E8E8E8",
                      borderRadius: 16,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "default",
                    }}
                  >
                    <div
                      style={{
                        height: 220,
                        position: "relative",
                        background: "#1A1A1A",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={image}
                        alt={name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>

                    <div
                      style={{
                        padding: 24,
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#CC1F2A",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        {category}
                      </div>
                      <h3
                        style={{
                          fontWeight: 800,
                          fontSize: 17,
                          color: "#0A0A0A",
                          marginBottom: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {name}
                      </h3>
                      <p
                        style={{
                          fontSize: 13,
                          color: "#6B6B6B",
                          lineHeight: 1.7,
                          marginBottom: 16,
                          flex: 1,
                        }}
                      >
                        {description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 6,
                          marginBottom: 20,
                        }}
                      >
                        {tags.map((tag, ti) => (
                          <span
                            key={ti}
                            style={{
                              background: "#F5F5F5",
                              border: "1px solid #E8E8E8",
                              borderRadius: 6,
                              padding: "3px 10px",
                              fontSize: 11,
                              color: "#6B6B6B",
                              fontWeight: 500,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{ alignSelf: "flex-start" }}>
                        <a
                          href={`/portfolio/${projectId}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            background: "#0A0A0A",
                            color: "white",
                            padding: "10px 18px",
                            borderRadius: 8,
                            fontWeight: 700,
                            fontSize: 13,
                            textDecoration: "none",
                          }}
                        >
                          Explore Project <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ padding: "80px 0", background: "#0A0A0A" }}
      >
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.025em",
                marginBottom: 16,
              }}
            >
              Want to See Your Project Here?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 16,
                color: "#9B9B9B",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              We are always looking for exciting new projects to take on. Reach
              out and let us build something great together.
            </motion.p>
            <motion.div
              variants={fadeUp}
              style={{ display: "inline-block" }}
            >
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
                Start Your Project <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
