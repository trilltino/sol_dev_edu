import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const WsAndHPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="content-wrap page-overlay"
    >
      <section className="section">
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
        <div className="section-label">5 Ws and H</div>
        <h2>5Ws and <span className="accent">H</span></h2>
        
        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem 1.5rem', 
          background: 'rgba(245, 158, 11, 0.08)', 
          border: '1px solid rgba(245, 158, 11, 0.2)',
          borderRadius: '8px',
          fontStyle: 'italic',
          opacity: 0.8
        }}>
          "The important thing is not to stop questioning." — Albert Einstein
        </div>
        
        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ color: 'var(--accent-color, #f59e0b)', marginBottom: '0.5rem' }}>Who?</h3>
            <p className="b2">Systems engineers and Rust developers from universities like Imperial and Oxford, ready to transition to Solana protocol engineering through high-signal content and chapter support.</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ color: 'var(--accent-color, #f59e0b)', marginBottom: '0.5rem' }}>What?</h3>
            <p className="b2">What are we building? What problems are we solving? What technologies do we use?</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ color: 'var(--accent-color, #f59e0b)', marginBottom: '0.5rem' }}>When?</h3>
            <p className="b2">When did this project start? When can you get involved? When are key milestones?</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ color: 'var(--accent-color, #f59e0b)', marginBottom: '0.5rem' }}>Where?</h3>
            <p className="b2">Where is this project based? Where do we operate? Where can you find our community?</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ color: 'var(--accent-color, #f59e0b)', marginBottom: '0.5rem' }}>Why?</h3>
            <p className="b2">Why does this project exist? Why should you care? Why are we passionate about this?</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 style={{ color: 'var(--accent-color, #f59e0b)', marginBottom: '0.5rem' }}>How?</h3>
            <p className="b2">How do we achieve our goals? How can you contribute? How does our process work?</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WsAndHPage;
