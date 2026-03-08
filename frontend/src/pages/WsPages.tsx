import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const quote = "Every Superteam UK chapter is a venue. Every nearby university is a pipeline. Each workshop has one goal: every attendee leaves more capable than they arrived.";

export const WhoPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">5 Ws and How</div>
      <h2>Who <span className="accent">?</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>{quote}</div>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>This section explores the people behind the project. Who is involved? Who are the key contributors? Who benefits from this work?</p>
    </section>
  </motion.div>
);

export const WhatPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">5 Ws and How</div>
      <h2>What <span className="accent">?</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>{quote}</div>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>What are we building? What problems are we solving? What technologies do we use?</p>
    </section>
  </motion.div>
);

export const WhenPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">5 Ws and How</div>
      <h2>When <span className="accent">?</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>{quote}</div>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>When did this project start? When can you get involved? When are key milestones?</p>
    </section>
  </motion.div>
);

export const WherePage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">5 Ws and How</div>
      <h2>Where <span className="accent">?</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>{quote}</div>
      
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Co-Working Fridays (UK Chapters)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/exeter.webp" alt="Exeter" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <strong>Exeter Chapter</strong>
            <p style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '0.25rem' }}>Exeter, England, UK</p>
            <p style={{ opacity: 0.6, fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Smaller cohorts, deeper work, stronger retention.</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/manch.webp" alt="Manchester" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <strong>Manchester Chapter</strong>
            <p style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '0.25rem' }}>Manchester, England, UK</p>
            <p style={{ opacity: 0.6, fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Growing Rust and Web3 scene. Reliable hackathon conversion.</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/oxf.webp" alt="Oxford" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <strong>Oxford Chapter</strong>
            <p style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '0.25rem' }}>Oxford, England, UK</p>
            <p style={{ opacity: 0.6, fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Rigorous technical thinkers who want to understand the protocol deeply.</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/birm.webp" alt="Birmingham" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <strong>Birmingham Chapter</strong>
            <p style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '0.25rem' }}>Birmingham, England, UK</p>
            <p style={{ opacity: 0.6, fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Research and applied engineering. Untapped by ecosystem.</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/newcas.webp" alt="Newcastle" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <strong>Newcastle Chapter</strong>
            <p style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '0.25rem' }}>Newcastle upon Tyne, England, UK</p>
            <p style={{ opacity: 0.6, fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>Strong systems engineers in an untapped community.</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/London.webp" alt="London" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.5rem' }} />
            <strong>London Chapter</strong>
            <p style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '0.25rem' }}>London, England, UK</p>
            <p style={{ opacity: 0.6, fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>The densest developer pool in the UK. Imperial, UCL, King's, and LSE ready to mobilise.</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Nearby Universities</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong>Exeter</strong>
            <p style={{ opacity: 0.7, fontSize: '0.8rem', marginTop: '0.25rem' }}>University of Exeter</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong>Manchester</strong>
            <p style={{ opacity: 0.7, fontSize: '0.8rem', marginTop: '0.25rem' }}>University of Manchester, MMU</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong>Oxford</strong>
            <p style={{ opacity: 0.7, fontSize: '0.8rem', marginTop: '0.25rem' }}>University of Oxford, Oxford Brookes</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong>Birmingham</strong>
            <p style={{ opacity: 0.7, fontSize: '0.8rem', marginTop: '0.25rem' }}>University of Birmingham, Birmingham City Uni</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong>Newcastle</strong>
            <p style={{ opacity: 0.7, fontSize: '0.8rem', marginTop: '0.25rem' }}>Newcastle University, Northumbria Uni</p>
          </div>
          <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong>London</strong>
            <p style={{ opacity: 0.7, fontSize: '0.8rem', marginTop: '0.25rem' }}>Imperial College, UCL, King's, LSE</p>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

export const WhyPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">5 Ws and How</div>
      <h2>Why <span className="accent">?</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>{quote}</div>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>Why does this project exist? Why should you care? Why are we passionate about this?</p>
    </section>
  </motion.div>
);

export const HowPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">5 Ws and How</div>
      <h2>How <span className="accent">?</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>{quote}</div>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>How do we achieve our goals? How can you contribute? How does our process work?</p>
    </section>
  </motion.div>
);

export default WhoPage;
