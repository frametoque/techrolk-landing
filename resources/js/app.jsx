import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';

import SmoothScroll from './Components/SmoothScroll';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage';
import PortfolioPage from './Pages/PortfolioPage';
import ProjectDetailsPage from './Pages/ProjectDetailsPage';

document.addEventListener('DOMContentLoaded', () => {
  // Home Root
  const homeEl = document.getElementById('react-home-root');
  if (homeEl) {
    const props = JSON.parse(homeEl.dataset.props || '{}');
    createRoot(homeEl).render(
      <>
        <SmoothScroll />
        <HomePage {...props} />
      </>
    );
  }

  // About Root
  const aboutEl = document.getElementById('react-about-root');
  if (aboutEl) {
    const props = JSON.parse(aboutEl.dataset.props || '{}');
    createRoot(aboutEl).render(
      <>
        <SmoothScroll />
        <AboutPage {...props} />
      </>
    );
  }

  // Contact Root
  const contactEl = document.getElementById('react-contact-root');
  if (contactEl) {
    const props = JSON.parse(contactEl.dataset.props || '{}');
    createRoot(contactEl).render(
      <>
        <SmoothScroll />
        <ContactPage {...props} />
      </>
    );
  }

  // Services Root
  const servicesEl = document.getElementById('react-services-root');
  if (servicesEl) {
    const props = JSON.parse(servicesEl.dataset.props || '{}');
    createRoot(servicesEl).render(
      <>
        <SmoothScroll />
        <ServicesPage {...props} />
      </>
    );
  }

  // Portfolio Root
  const portfolioEl = document.getElementById('react-portfolio-root');
  if (portfolioEl) {
    const props = JSON.parse(portfolioEl.dataset.props || '{}');
    createRoot(portfolioEl).render(
      <>
        <SmoothScroll />
        <PortfolioPage {...props} />
      </>
    );
  }

  // Project Details Root
  const projectDetailsEl = document.getElementById('react-project-details-root');
  if (projectDetailsEl) {
    const props = JSON.parse(projectDetailsEl.dataset.props || '{}');
    createRoot(projectDetailsEl).render(
      <>
        <SmoothScroll />
        <ProjectDetailsPage {...props} />
      </>
    );
  }
});
