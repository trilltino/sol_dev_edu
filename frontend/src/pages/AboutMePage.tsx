import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Linkedin, Boxes, Network } from 'lucide-react';
import tinoPhoto from '../assets/tino.webp';

export const AboutMePage = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('defi');

  const projects = {
    defi: {
      title: 'DeFi & Solana',
      icon: <Boxes size={20} />,
      repos: [
        {
          name: 'xforce-terminal-contracts',
          desc: 'Production-grade FOSS Solana smart contracts for atomic batch token swaps with Jupiter integration. Batch up to 10 swaps, slippage protection, protocol fee management.',
          tech: ['Rust', 'Anchor', 'Solana'],
          link: 'https://github.com/trilltino/xforce-terminal-contracts'
        },
        {
          name: 'anchor-vault',
          desc: 'Solana DeFi program for secure lamport storage with PDAs and CPI. Features Program Derived Addresses and Cross-Program Invocation.',
          tech: ['Rust', 'Anchor', 'Solana'],
          link: 'https://github.com/trilltino/anchor-vault'
        },
        {
          name: 'xforce-monorepo',
          desc: 'Comprehensive Solana DeFi ecosystem: XForce Terminal (desktop trading), XForce Terminal Contracts, XForce Crypto Info (sentiment analysis).',
          tech: ['Rust', 'Tauri', 'React', 'TypeScript', 'PostgreSQL'],
          link: 'https://github.com/trilltino/xforce-monorepo'
        },
        {
          name: 'xforce-terminal',
          desc: 'Desktop trading terminal & web wallet. Real-time charts (lightweight-charts), multi-wallet support (Phantom, Solflare, Backpack), Jupiter integration, WebSocket feeds.',
          tech: ['Rust', 'Tauri', 'React', 'PostgreSQL'],
          link: 'https://github.com/trilltino/xforce-terminal'
        },
        {
          name: 'xforce-crypto-info',
          desc: 'Crypto news aggregation and analysis service. RSS feed aggregation from 10+ sources, sentiment analysis using NLTK/VADER, PostgreSQL storage.',
          tech: ['Python', 'React', 'PostgreSQL'],
          link: 'https://github.com/trilltino/xforce-crypto-info'
        },
        {
          name: 'XFChess',
          desc: 'Chess implementation.',
          tech: ['Rust', 'Web'],
          link: 'https://github.com/trilltino/XFChess'
        },
        {
          name: 'pinocchio_vault_challenge',
          desc: 'Solana vault challenge using Pinocchio.',
          tech: ['Rust', 'Solana'],
          link: 'https://github.com/trilltino/pinocchio_vault_challenge'
        },
        {
          name: 'anchor_escrow_challenge',
          desc: 'Anchor escrow implementation challenge.',
          tech: ['Rust', 'Anchor'],
          link: 'https://github.com/trilltino/anchor_escrow_challenge'
        },
        {
          name: 'solana-spl-token-challenges',
          desc: 'Solana SPL token challenges.',
          tech: ['Rust', 'Solana', 'SPL'],
          link: 'https://github.com/trilltino/solana-spl-token-challenges'
        }
      ]
    },
    p2p: {
      title: 'P2P & Decentralized Systems',
      icon: <Network size={20} />,
      repos: [
        {
          name: 'braid-reborn',
          desc: 'Full-stack Rust implementation of Braid protocol. CRDT sync, P2P transport, filesystem replication, NFS bridge, and relay server. Workspace crates for HTTP, Core, Blob, Iroh, and more.',
          tech: ['Rust', 'Tokio', 'Iroh', 'QUIC', 'Axum', 'CRDT'],
          link: 'https://github.com/trilltino/braid-reborn'
        },
        {
          name: 'xf_braid',
          desc: 'XFMail: P2P real-time chat using BraidFS protocol with custom Braid-HTTP client. Hybrid storage, Myers diff, CRDT conflict resolution. XF Braid Website: SSR marketing site.',
          tech: ['Rust', 'Leptos', 'Axum', 'Tailwind', 'WASM'],
          link: 'https://github.com/trilltino/xf_braid'
        },
        {
          name: 'link-ide-extension',
          desc: 'VS Code extension for P2P collaborative development. P2P Chat, File Sharing (bitswap), Content-addressed transfer (FastCDC, Blake3, Merkle trees), Audio calls infrastructure.',
          tech: ['TypeScript', 'Rust', 'Iroh', 'VS Code API'],
          link: 'https://github.com/trilltino/link-ide-extension'
        },
        {
          name: 'braid_iroh',
          desc: 'Work-in-progress Braid over Iroh implementation.',
          tech: ['Rust', 'Iroh', 'QUIC'],
          link: 'https://github.com/trilltino/braid_iroh'
        },
        {
          name: 'braid_tauri',
          desc: 'WIP Tauri-based Braid client.',
          tech: ['Rust', 'Tauri', 'WASM'],
          link: 'https://github.com/trilltino/braid_tauri'
        },
        {
          name: 'monorepo',
          desc: 'Git-based version control system for AI agents.',
          tech: ['Rust'],
          link: 'https://github.com/trilltino/monorepo'
        },
        {
          name: 'braidfs-nfs',
          desc: 'NFS bridge for Braid filesystem.',
          tech: ['Rust'],
          link: 'https://github.com/trilltino/braidfs-nfs'
        },
        {
          name: 'braid-http',
          desc: 'Braid-HTTP protocol types and client.',
          tech: ['Rust', 'WASM'],
          link: 'https://github.com/trilltino/braid-http'
        },
        {
          name: 'braid-blob',
          desc: 'Binary storage engine for Braid.',
          tech: ['Rust'],
          link: 'https://github.com/trilltino/braid-blob'
        },
        {
          name: 'braid-common',
          desc: 'Shared utilities for Braid crates.',
          tech: ['Rust'],
          link: 'https://github.com/trilltino/braid-common'
        }
      ]
    }
  };

  const toggleCategory = (key: string) => {
    setExpandedCategory(expandedCategory === key ? null : key);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="content-wrap page-overlay"
    >
      <section className="section">
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
        <div className="section-label">Open Source Software Engineer</div>
        <h2>About <span className="accent">Me</span></h2>

        <div className="pow-section" style={{ marginTop: '1rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Proof of <span className="accent">Work</span></h3>
          
          {Object.entries(projects).map(([key, category]) => (
            <div key={key} className="pow-category" style={{ marginBottom: '1.5rem' }}>
              <button 
                className="pow-category-header"
                onClick={() => toggleCategory(key)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  color: '#fff',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-color, #f59e0b)' }}>{category.icon}</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{category.title}</span>
                  <span style={{ 
                    opacity: 0.6, 
                    fontSize: '0.85rem',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '20px'
                  }}>
                    {category.repos.length} repos
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="who-profile" style={{ marginTop: '2rem' }}>
          <div className="who-photo-wrap">
            <img src={tinoPhoto} alt="Tino — Open Source Software Engineer" className="who-photo" />
          </div>
          <div className="who-bio">
            <p>I'm an Open Source Software Engineer specializing in Rust for distributed systems and blockchain infrastructure. I build full-stack applications using Leptos, Axum, and Tauri, with focus on P2P protocols and decentralized architecture.</p>
            <p>After graduating in Law from the University of Warwick, I pivoted to software engineering and taught myself Rust through building real systems.</p>
            <div className="who-links">
              <a href="https://github.com/trilltino" className="who-link-btn" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/valentine-i-b0619b2b6/" className="who-link-btn who-link-btn--linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutMePage;
