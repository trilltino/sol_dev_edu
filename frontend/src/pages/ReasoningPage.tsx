import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ReasoningPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="content-wrap page-overlay"
    >
      <section className="section">
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
        
        <div className="section-label">Products</div>
        <h2>Why We <span className="accent">Build This Way</span></h2>
        
        <p style={{ marginTop: '1.5rem', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.7, color: '#a0a0a0', maxWidth: '900px' }}>
          The IDE extension puts Superteam UK infrastructure where senior developers already live — inside their editor. No new tool to learn, no platform to sign up for. They open VS Code, install the extension, and they're inside a P2P network of UK Solana builders. Group chats, peer code review, signed contributions, on-chain progress — all without leaving the environment they work in.
          <br /><br />
          The Tauri app extends that same network to mobile. Built in Rust, same P2P core, same on-chain identity. A developer on the tube can run through a Solana tutorial, join a study group, or review a peer's submission. When they get back to their desk, their progress is already there — synced via Braid, verified on-chain.
          <br /><br />
          Together they form one continuous environment. Learn on mobile. Build in the editor. Both tied to the same wallet, the same PDA, the same token balance.
          <br /><br />
          For Superteam UK this matters because the bottleneck isn't talent — it's activation. Senior Web2 developers in the UK exist in large numbers. What they lack is a low-friction entry point that meets them where they are and keeps them connected to a community as they progress.
        </p>
        
        <div style={{ maxWidth: '900px', marginTop: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ReasoningPage;
