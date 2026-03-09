import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const contentCards = [
  {
    id: 1,
    title: "Tinos Rust Lab #1: Account Models & The Instruction Pipeline",
    description: "Deep-dive into the Solana Runtime (Sealevel). Manual dissection of how instructions flow from the RPC to the BPF Loader.",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Tinos Rust Lab #2: No-Std Development & Pinocchio",
    description: "High-efficiency, zero-dependency Rust programs. Using Pinocchio to build sub-1KB binaries.",
    level: "Advanced"
  },
  {
    id: 3,
    title: "Tinos Rust Lab #3: Anchor Macros & IDL Generation",
    description: "Structural analysis of the Anchor Framework. Examining how Anchor enforces account security checks.",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Tinos Rust Lab #4: Memory Management: Ownership & Borrowing",
    description: "Memory safety within the Solana Account Model. Applying Rust's ownership rules to on-chain state.",
    level: "Beginner - Intermediate"
  },
  {
    id: 5,
    title: "Tinos Rust Lab #5: Protocol Internals: Liquidity & State Transitions",
    description: "Mechanical audit of a DeFi Protocol. Tracing how liquidity moves through vaults.",
    level: "Advanced"
  }
];

export const TinosRustLabPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="content-wrap page-overlay"
    >
      <section className="section">
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
        <div className="section-label">Content Plans</div>
        <h2>Tino Rust <span className="accent">Lab</span></h2>
        
        <div style={{ maxWidth: '800px', marginTop: '2rem' }}>
          <p className="b2">
            Master systems programming with hands-on exercises designed for blockchain development.
          </p>
          
          <div style={{ 
            marginTop: '2rem', 
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '700px',
            padding: '1.5rem', 
            background: 'rgba(245, 158, 11, 0.08)', 
            border: '1px solid rgba(245, 158, 11, 0.2)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>
              Inspiration
            </h3>
            <p className="b2" style={{ opacity: 0.9, textAlign: 'center' }}>
              This series is heavily inspired by <a href="https://www.youtube.com/watch?v=rAl-9HwD858&list=PLqbS7AVVErFiWDOAVrPt7aYmnuuOLYvOa" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color, #f59e0b)', textDecoration: 'underline' }}>Jon Gjengst's legendary "Crust of Rust" series on YouTube</a>—
              the gold standard for in-depth Rust tutorials.
            </p>
            <p className="b2" style={{ marginTop: '1rem', opacity: 0.9, textAlign: 'center' }}>
              I met Jon at <strong>RustNationUK</strong>— huge thanks to <strong>Cap</strong> for supplying me the ticket. 
              That experience gave me the green light to start making my own in-depth Rust streams.
            </p>
            <div style={{ 
              marginTop: '1rem', 
              padding: '0.75rem', 
              background: 'rgba(0,0,0,0.2)', 
              borderRadius: '6px',
              fontStyle: 'italic',
              opacity: 0.7
            }}>
            </div>
          </div>
            
          <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1.5rem' }}>
            Proposed <span className="accent">Content</span>
          </h3>
         
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '1rem'
          }}>
            {contentCards.map((card) => (
              <div
                key={card.id}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <h4 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 600, 
                  marginBottom: '0.75rem',
                  color: 'var(--accent-color, #f59e0b)'
                }}>
                  {card.title}
                </h4>
                <p style={{ 
                  fontSize: '0.9rem', 
                  opacity: 0.75, 
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {card.description}
                </p>
                <span style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: 'var(--accent-color, #f59e0b)',
                  borderRadius: '20px',
                  fontWeight: 500
                }}>
                  {card.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TinosRustLabPage;
