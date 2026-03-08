import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export const SuperteamLearnAppPage = () => {
  const [showSolanaNative, setShowSolanaNative] = useState(false);

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
        <h2>SuperteamLearn <span className="accent">App</span></h2>
        
        <div style={{ maxWidth: '900px', marginTop: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.5rem' }}>Key Architecture</h3>
          <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            The app runs on a single Rust core across iOS, Android, Windows, Mac, and Linux. One codebase, native performance everywhere. A developer on their phone and a developer on their desktop are on the same P2P network, the same session, the same state.
          </p>
          <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Built on <a href="https://github.com/trilltino/braid_tauri" target="_blank" rel="noopener noreferrer" style={{ color: '#9945FF', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>braid_tauri <ExternalLink size={14} /></a> — a Tauri app with Braid P2P sync. Braid handles CRDT-based state synchronization across devices, while Tauri provides the native shell with SQLite, filesystem access, and an embedded Axum server. This architecture enables offline-first operation with automatic peer-to-peer sync when online.
          </p>
          <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Braid handles sync. Learning progress, code files, chat history — all CRDT-based, conflict-free, offline-first. Close the app on mobile, open it on desktop, everything is there. No server, no account, no data loss.
          </p>
          <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Tauri handles the shell. Native filesystem access, local SQLite database via SQLx, an Axum server running inside the app. The performance profile of a native application with the flexibility of a web frontend.
          </p>
          <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Solana handles identity and proof. Your wallet is your ID across every device. Progress is written to your PDA. Tokens are earned and held on-chain. Token gating controls access to advanced tracks and mentorship — not based on who you know, but what you've shipped.
          </p>
          <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            The network is the feature. Beyond the curriculum, the app is where UK Solana developers actually connect. Group chats via Iroh gossip, voice calls via QUIC, peer code review, content from workshop sessions, recorded tutorials. The same P2P infrastructure that powers the IDE extension powers the mobile experience — same identity, same wallet, same on-chain record.
          </p>
          <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Every device is a node. Every node strengthens the network. Every contribution is signed, verifiable, and permanent.
          </p>
          <p style={{ color: '#9945FF', fontSize: '1.1rem', fontWeight: 600, marginTop: '2rem', marginBottom: '2rem' }}>
            It is infrastructure.
          </p>

          {/* Expandable Making It Solana Native Section */}
          <button 
            onClick={() => setShowSolanaNative(!showSolanaNative)}
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '12px',
              padding: '1rem 1.5rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}>Making It Solana Native</span>
            <motion.div
              animate={{ rotate: showSolanaNative ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={20} color="#9945FF" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showSolanaNative && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ padding: '1.5rem', background: 'rgba(153, 69, 255, 0.08)', borderRadius: '12px', border: '1px solid rgba(153, 69, 255, 0.2)' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Identity</h4>
                    <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.6 }}>Iroh NodeIDs and Solana wallets both use Ed25519 keypairs. Connect your wallet once — your P2P identity and on-chain identity are the same key.</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>State</h4>
                    <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.6 }}>Braid CRDT patches are content-addressed via SHA256. Each learning state transition produces a hash that gets written to a PDA — local state and on-chain state stay in sync automatically.</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Progress Program</h4>
                    <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.6 }}>One Anchor PDA per wallet. Tracks completed lessons, submissions, and mentor sessions — Cap reads chapter metrics straight from the chain.</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Rewards Program</h4>
                    <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.6 }}>Token 2022 minting triggered by verified track completion. Metadata points back to the Braid content hash as tamper-proof evidence of what was built.</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Badge Program</h4>
                    <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.6 }}>Bubblegum and SPL Account Compression. Thousands of achievement badges at negligible cost — permanently on-chain.</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Anchor vs Pinocchio</h4>
                    <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.6 }}>Anchor handles platform logic — readable, standard, exactly what the curriculum teaches. Pinocchio handles performance-critical paths where compute units matter.</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Data Layer</h4>
                    <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.6 }}>BraidFS stores code and content locally, synced P2P via Blake3 content addressing. Every file is attributable to its author's wallet before it touches the chain.</p>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Token Gating</h4>
                    <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.6 }}>Token balance checked at the program level via RPC on launch. No backend, no API key — the on-chain state is the access control system.</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>The Loop</h4>
                    <p style={{ color: '#9945FF', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>Connect wallet → join UK P2P network → complete track → PDA updated → token minted → badge issued → next track unlocked. Every step signed, every step verifiable.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default SuperteamLearnAppPage;
