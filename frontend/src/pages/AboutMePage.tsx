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
          name: 'XFChess',
          desc: 'Fully decentralized on-chain chess engine and game implementation on Solana.',
          tech: ['Rust', 'Solana', 'WASM'],
          link: 'https://github.com/trilltino/XFChess'
        },
        {
          name: 'xforce-terminal-contracts',
          desc: 'Atomic batch token swaps on Solana with Jupiter integration and slippage protection.',
          tech: ['Rust', 'Anchor', 'Solana'],
          link: 'https://github.com/trilltino/xforce-terminal-contracts'
        },
        {
          name: 'anchor-vault',
          desc: 'Secure lamport storage vault using PDAs and Cross-Program Invocation on Solana.',
          tech: ['Rust', 'Anchor', 'Solana'],
          link: 'https://github.com/trilltino/anchor-vault'
        },
        {
          name: 'xforce-monorepo',
          desc: 'Full-stack Solana ecosystem including trading terminal, smart contracts, and sentiment analysis.',
          tech: ['Rust', 'Solana', 'Tauri', 'TypeScript'],
          link: 'https://github.com/trilltino/xforce-monorepo'
        },
        {
          name: 'xforce-terminal',
          desc: 'Desktop trading terminal with real-time charts and multi-wallet Solana support.',
          tech: ['Rust', 'Solana', 'Tauri', 'React'],
          link: 'https://github.com/trilltino/xforce-terminal'
        },
        {
          name: 'pinocchio_vault_challenge',
          desc: 'Ultra-low compute Solana vault implementation using the Pinocchio no-std framework.',
          tech: ['Rust', 'Solana', 'No-Std'],
          link: 'https://github.com/trilltino/pinocchio_vault_challenge'
        },
        {
          name: 'anchor_escrow_challenge',
          desc: 'Secure escrow program implementation using the Anchor framework on Solana.',
          tech: ['Rust', 'Anchor', 'Solana'],
          link: 'https://github.com/trilltino/anchor_escrow_challenge'
        },
        {
          name: 'solana-spl-token-challenges',
          desc: 'Comprehensive suite of SPL token management and integration challenges.',
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
          desc: 'Full-stack Rust implementation of the Braid protocol with CRDT sync and Iroh P2P transport.',
          tech: ['Rust', 'Tokio', 'Iroh', 'CRDT'],
          link: 'https://github.com/trilltino/braid-reborn'
        },
        {
          name: 'xf_braid',
          desc: 'Real-time P2P chat (XFMail) using the BraidFS protocol and custom Braid-HTTP client.',
          tech: ['Rust', 'Leptos', 'Axum', 'WASM'],
          link: 'https://github.com/trilltino/xf_braid'
        },
        {
          name: 'link-ide-extension',
          desc: 'VS Code extension for P2P collaborative development featuring chat and file sharing.',
          tech: ['TypeScript', 'Rust', 'Iroh', 'VS Code API'],
          link: 'https://github.com/trilltino/link-ide-extension'
        },
        {
          name: 'monorepo',
          desc: 'Git-based version control system designed specifically for AI agent coordination.',
          tech: ['Rust', 'Git'],
          link: 'https://github.com/trilltino/monorepo'
        },
        {
          name: 'braid_iroh',
          desc: 'Experimental implementation of the Braid protocol over the Iroh network stack.',
          tech: ['Rust', 'Iroh', 'QUIC'],
          link: 'https://github.com/trilltino/braid_iroh'
        },
        {
          name: 'braidfs-nfs',
          desc: 'NFS bridge enabling legacy filesystem access to the Braid decentralized network.',
          tech: ['Rust', 'NFS'],
          link: 'https://github.com/trilltino/braidfs-nfs'
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
                  padding: '1.25rem 1.75rem',
                  background: expandedCategory === key ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  color: '#fff',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  marginBottom: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ 
                    color: 'var(--accent-color, #f59e0b)',
                    background: 'rgba(245, 158, 11, 0.1)',
                    padding: '0.5rem',
                    borderRadius: '10px',
                    display: 'flex'
                  }}>{category.icon}</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '-0.01em' }}>{category.title}</span>
                  <span style={{
                    opacity: 0.5, 
                    fontSize: '0.85rem',
                    background: 'rgba(255,255,255,0.08)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '20px',
                    fontWeight: 500
                  }}>
                    {category.repos.length} repos
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: expandedCategory === key ? 180 : 0 }}
                  style={{ opacity: 0.5 }}
                >
                  <Network size={16} style={{ rotate: '45deg' }} />
                </motion.span>
              </button>

              {expandedCategory === key && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pow-repos-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1rem',
                    padding: '0.5rem'
                  }}
                >
                  {category.repos.map((repo, idx) => (
                    <motion.a
                      key={idx}
                      href={repo.link}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '1.25rem',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                        e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{repo.name}</h4>
                          <Github size={14} style={{ opacity: 0.4 }} />
                        </div>
                        <p style={{ color: '#a0a0a0', fontSize: '0.85rem', lineHeight: 1.5 }}>{repo.desc}</p>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {repo.tech.map((t, i) => (
                          <span key={i} style={{
                            fontSize: '0.7rem',
                            padding: '0.15rem 0.5rem',
                            background: t === 'Solana' ? 'rgba(153, 69, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                            color: t === 'Solana' ? '#9945FF' : '#888',
                            borderRadius: '4px',
                            fontWeight: 600
                          }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
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
