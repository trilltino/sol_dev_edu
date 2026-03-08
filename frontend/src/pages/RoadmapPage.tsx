import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const RoadmapPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="content-wrap page-overlay"
    >
      <section className="section">
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
        <div className="section-label">Project Overview</div>
        <h2>Roadmap&Metrics</h2>

        <div style={{ marginTop: '2rem' }}>
          <div style={{
            marginBottom: '1rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '12px 12px 0 0',
            color: '#fff'
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Growth Plan</span>
          </div>
          
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0 0 12px 12px', border: '1px solid rgba(245, 158, 11, 0.3)', borderTop: 'none' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color, #f59e0b)', marginBottom: '1rem' }}>Phase 1</h3>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>University Outreach & Community Building</h4>
              <p style={{ opacity: 0.75, marginBottom: '0.5rem' }}><strong>What:</strong> Visit university campuses to teach students about alternative true decentralized technologies.</p>
              <p style={{ opacity: 0.75, marginBottom: '0.5rem' }}><strong>How:</strong> Partner with student societies (AI/Web3 clubs) to reach engaged students.</p>
              <p style={{ opacity: 0.75 }}><strong>Outcomes:</strong> Build a small local group of people interested in collaborative tech.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color, #f59e0b)', marginBottom: '1rem' }}>Phase 2</h3>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Cohort Development & Project Shaping</h4>
              <p style={{ opacity: 0.75, marginBottom: '0.5rem' }}><strong>What:</strong> Focus on selecting committed students and shaping their ideas.</p>
              <p style={{ opacity: 0.75, marginBottom: '0.5rem' }}><strong>How:</strong> Run weekly calls, review plans, guide them through fundamentals.</p>
              <p style={{ opacity: 0.75 }}><strong>Outcomes:</strong> Build a national cohort that submits early ideas.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color, #f59e0b)', marginBottom: '1rem' }}>Phase 3</h3>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Building Real Applications</h4>
              <p style={{ opacity: 0.75, marginBottom: '0.5rem' }}><strong>What:</strong> Focus on turning ideas into real applications and supporting teams.</p>
              <p style={{ opacity: 0.75, marginBottom: '0.5rem' }}><strong>How:</strong> Teach writing services in Rust and implement Solana programs.</p>
              <p style={{ opacity: 0.75 }}><strong>Outcomes:</strong> Get real applications that students can run.</p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color, #f59e0b)', marginBottom: '1rem' }}>Phase 4</h3>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Scaling & Community Growth</h4>
              <p style={{ opacity: 0.75, marginBottom: '0.5rem' }}><strong>What:</strong> Focus on scaling activity and increasing real usage.</p>
              <p style={{ opacity: 0.75, marginBottom: '0.5rem' }}><strong>How:</strong> Expand outreach, refine applications based on feedback.</p>
              <p style={{ opacity: 0.75 }}><strong>Outcomes:</strong> Get multiple applications used by students weekly.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default RoadmapPage;
