import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
  staggerContainerSlow,
  viewportOnce,
} from "../Components/AnimationUtils";

export default function ProjectDetailsPage({ project }) {
  if (!project) {
    return (
      <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
        <Navbar currentPath="/portfolio" />
        <div style={{ paddingTop: 140, textAlign: "center", padding: "140px 24px" }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "#0A0A0A", marginBottom: 16 }}>
            Project Not Found
          </h1>
          <a href="/portfolio" style={{ color: "#CC1F2A", textDecoration: "none", fontWeight: 600 }}>
            Back to Portfolio
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const name = project.title || project.name || "Project Showcase";
  const category = project.category || "Engineering";
  const collageImages = Array.isArray(project.collage_images)
    ? project.collage_images
    : (project.collageImages || [project.mainImage || project.image1, project.image2, project.image3].filter(Boolean));
  const youtubeEmbedId = project.youtube_video_url || project.youtubeEmbedId || "";
  const description = project.description || project.Short_description || "";
  const tags = Array.isArray(project.tags) ? project.tags : (typeof project.tags === 'string' ? JSON.parse(project.tags) : []);
  const challenge = project.challenge || "Heavy lifting and custom engineering payload restrictions.";
  const solution = project.solution || "Custom design and propulsion mechanism integration.";
  const outcome = project.outcome || "Extended flight times and reliable mission performance.";

  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Navbar currentPath="/portfolio" />

      {/* Hero */}
      <section
        style={{
          paddingTop: 130,
          paddingBottom: 60,
          background: "#0A0A0A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(204,31,42,0.1) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
          }}
        >
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <a
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#9B9B9B",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                marginBottom: 32,
              }}
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </a>
          </motion.div>

          {/* Title & tags */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.025em",
                marginBottom: 20,
              }}
            >
              {name}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
            >
              {tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 6,
                    padding: "5px 12px",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "60px 0 80px", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>

          {/* Image collage */}
          {collageImages.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: collageImages.length > 1 ? "2fr 1fr" : "1fr",
                gap: 16,
                marginBottom: 48,
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 340,
                  background: "#1A1A1A",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <img
                  src={collageImages[0]}
                  alt="Primary View"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {collageImages.length > 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {collageImages.slice(1, 3).map((img, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: "relative",
                        height: 162,
                        background: "#1A1A1A",
                        borderRadius: 14,
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={img}
                        alt={`Detail View ${idx + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Challenge / Solution / Outcome cards */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 48,
            }}
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              { label: "The Challenge", text: challenge },
              { label: "Our Solution", text: solution },
              { label: "The Outcome", text: outcome },
            ].map(({ label, text }) => (
              <div
                key={label}
                style={{
                  background: "white",
                  border: "1px solid #E8E8E8",
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 3,
                    background: "#CC1F2A",
                    borderRadius: 2,
                    marginBottom: 14,
                  }}
                />
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: 15,
                    color: "#0A0A0A",
                    marginBottom: 10,
                  }}
                >
                  {label}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#6B6B6B",
                    lineHeight: 1.7,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <p
            style={{
              fontSize: 16,
              color: "#6B6B6B",
              lineHeight: 1.8,
              maxWidth: 700,
              marginBottom: 48,
            }}
          >
            {description}
          </p>

          {/* YouTube Video */}
          {youtubeEmbedId && (
            <div style={{ marginBottom: 48 }}>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 20,
                  color: "#0A0A0A",
                  marginBottom: 18,
                }}
              >
                Project Demonstration
              </h3>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: 16,
                  background: "#0A0A0A",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  src={`https://www.youtube.com/embed/${youtubeEmbedId.includes('youtube.com') || youtubeEmbedId.includes('youtu.be') ? youtubeEmbedId.split('/').pop() : youtubeEmbedId}`}
                  title={`${name} Video Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#CC1F2A",
                color: "white",
                padding: "13px 26px",
                borderRadius: 9,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(204,31,42,0.3)",
              }}
            >
              Start a Similar Project <ArrowRight size={15} />
            </a>

            <a
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1.5px solid #E8E8E8",
                color: "#0A0A0A",
                padding: "13px 26px",
                borderRadius: 9,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={15} /> More Projects
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
