import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Sparkles, Users, Coins, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "What is an IDE?",
    icon: Code,
    color: "#818cf8",
    content: (
      <>
        <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
          An <strong>Integrated Development Environment (IDE)</strong> is a software application that provides comprehensive facilities to programmers for software development. It typically includes:
        </p>
        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', opacity: 0.85, lineHeight: 1.8, marginBottom: '0.75rem' }}>
          <li>A source code editor</li>
          <li>Build automation tools</li>
          <li>A debugger</li>
          <li>Intelligent code completion</li>
          <li>Syntax highlighting and formatting</li>
        </ul>
        <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, fontSize: '0.85rem' }}>
          <strong>VS Code</strong> (Visual Studio Code) is one of the most popular IDEs, especially for web and blockchain development. It supports extensions that add extra functionality.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: "What is a VS Code Extension?",
    icon: Sparkles,
    color: "#f59e0b",
    content: (
      <>
        <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
          A <strong>VS Code extension</strong> is a package that extends VS Code's capabilities. Extensions can:
        </p>
        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', opacity: 0.85, lineHeight: 1.8 }}>
          <li>Add new languages and themes</li>
          <li>Provide intelligent code snippets</li>
          <li>Integrate with external tools and services</li>
          <li>Add new commands and features</li>
          <li>Enable real-time collaboration</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    title: "Critical for P2P Solana Learning",
    icon: Users,
    color: "#10b981",
    content: (
      <>
        <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
          The SuperteamLearnUK IDE Extension transforms solo learning into a collaborative experience:
        </p>
        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', opacity: 0.85, lineHeight: 1.8 }}>
          <li><strong>Real-time Code Collaboration</strong> - Pair program with mentors and peers</li>
          <li><strong>Instant Solana Templates</strong> - Generate Anchor programs with one click</li>
          <li><strong>Smart Contract Validation</strong> - Built-in security checks for Solana programs</li>
          <li><strong>Learning Path Integration</strong> - Follow structured curricula directly in your editor</li>
          <li><strong>Community Debugging</strong> - Share error states and get help instantly</li>
          <li><strong>Live Code Reviews</strong> - Get feedback from experienced developers in real-time</li>
        </ul>
      </>
    )
  },
  {
    id: 4,
    title: "Tokenized Collaboration Rewards",
    icon: Coins,
    color: "#ec4899",
    content: (
      <>
        <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
          Our extension integrates with Solana to create a gamified learning economy:
        </p>
        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', opacity: 0.85, lineHeight: 1.8, marginBottom: '0.75rem' }}>
          <li><strong>Learn-to-Earn</strong> - Earn tokens for completing learning milestones</li>
          <li><strong>Peer Teaching Rewards</strong> - Get compensated for helping others debug and learn</li>
          <li><strong>Code Review Incentives</strong> - Token rewards for providing quality code reviews</li>
          <li><strong>Contribution Badges</strong> - NFT badges for significant community contributions</li>
          <li><strong>Governance Rights</strong> - Token holders shape the future of the learning platform</li>
          <li><strong>Staking for Mentorship</strong> - Stake tokens to become a verified mentor</li>
        </ul>
        <p className="b2" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ec4899' }}>
          The more you collaborate, the more you earn
        </p>
      </>
    )
  },
  {
    id: 5,
    title: "SocialFi - The Future of Learning",
    icon: Share2,
    color: "#8b5cf6",
    content: (
      <>
        <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
          <strong>SocialFi</strong> combines social networking with finance. Our extension brings this to developer education:
        </p>
        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', opacity: 0.85, lineHeight: 1.8, marginBottom: '0.75rem' }}>
          <li><strong>Learn with Friends</strong> - Form study groups, earn together</li>
          <li><strong>Share Knowledge</strong> - Tutorials and tips rewarded in real-time</li>
          <li><strong>Build Reputation</strong> - On-chain proof of your teaching</li>
          <li><strong>Network Value</strong> - Connections become assets</li>
          <li><strong>Peer-to-Peer Economy</strong> - No middleman, direct value exchange</li>
        </ul>
        <p className="b2" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#8b5cf6' }}>
          Your network is your net worth - in tokens
        </p>
      </>
    )
  }
];

export const SuperteamLearnIDEExtensionPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];
  const Icon = current.icon;

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
        <h2>SuperteamLearnUK <span className="accent">IDE Extension</span> - SocialFi Layer</h2>
        
        <div style={{ maxWidth: '1100px', marginTop: '2rem' }}>
          <p className="b2" style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            A VS Code extension designed to accelerate your Solana development journey through 
            real-time collaboration, intelligent code assistance, and tokenized learning rewards.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '1.5rem' }}>
            {/* Left Column - Slideshow */}
            <div style={{ position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    background: `rgba(${current.color === '#818cf8' ? '99, 102, 241' : current.color === '#f59e0b' ? '245, 158, 11' : current.color === '#10b981' ? '16, 185, 129' : current.color === '#8b5cf6' ? '139, 92, 246' : '236, 72, 153'}, 0.08)`, 
                    border: `1px solid rgba(${current.color === '#818cf8' ? '99, 102, 241' : current.color === '#f59e0b' ? '245, 158, 11' : current.color === '#10b981' ? '16, 185, 129' : current.color === '#8b5cf6' ? '139, 92, 246' : '236, 72, 153'}, 0.2)`,
                    borderRadius: '12px',
                    padding: '1.5rem',
                    minHeight: '280px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <Icon size={24} color={current.color} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{current.title}</h3>
                  </div>
                  {current.content}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '1rem', 
                marginTop: '1.5rem' 
              }}>
                <button 
                  onClick={prevSlide}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      style={{
                        width: idx === currentSlide ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        border: 'none',
                        background: idx === currentSlide ? '#818cf8' : 'rgba(255,255,255,0.3)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <p className="b2" style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.8rem', opacity: 0.6 }}>
                {currentSlide + 1} / {slides.length}
              </p>
            </div>

            {/* Right Column - Proof of Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ 
                background: 'rgba(59, 130, 246, 0.08)', 
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '12px',
                padding: '1.25rem',
                height: 'fit-content'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Proof of Work - Solana Native</h3>
              
              <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <strong>Identity:</strong> Ed25519 keypairs map directly to Solana wallets. Your P2P identity is your wallet.
              </p>
              
              <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <strong>On-chain Verification:</strong> File transfers, code reviews, sessions - all signed and verifiable. Braid-HTTP CRDT patches are tamper-proof receipts before they touch the chain.
              </p>
              
              <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <strong>Group Collaboration:</strong> Iroh gossip - no Discord, no Telegram. The group is the network.
              </p>
              
              <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <strong>Learn-to-earn:</strong> Token 2022 - complete a track, mint a token. Custom metadata holds what you built, when, and who verified it.
              </p>
              
              <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <strong>Achievement Badges:</strong> Compressed NFTs via Bubblegum - mint 10,000 badges for the cost of one standard NFT. Permanently on-chain.
              </p>
              
              <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <strong>Progress Accounts:</strong> One PDA per learner derived from their wallet. Tracks syllabus completion, submissions, hackathon entries. Cap reads chapter metrics straight from the chain.
              </p>
              
              <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <strong>Actions and Blinks:</strong> One-click wallet transactions - submit a challenge, claim a reward, join a cohort. No context switching.
              </p>
              
              <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                <strong>Token Gating:</strong> Hold earned tokens - unlock senior mentorship tracks. Earned by work, not purchase.
              </p>
              
              <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '1rem', fontSize: '0.85rem' }}>
                <strong>The Contract Layer:</strong> Anchor for platform logic - readable, standard, exactly what you're teaching. Pinocchio for performance-critical paths - batch minting, high-frequency badge issuance.
              </p>
              
              <p className="b2" style={{ fontSize: '0.85rem', opacity: 0.7, fontWeight: 600, color: '#3b82f6', marginBottom: '1rem' }}>
                No Discord. No Telegram. No Zoom. One tool - your editor, your wallet, your proof.
              </p>
              
              <a 
                href="https://github.com/trilltino/link-ide-extension" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: '#3b82f6',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
              >
                View on GitHub
              </a>
            </motion.div>
          </div>

          {/* Scalability Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ 
              background: 'rgba(34, 197, 94, 0.08)', 
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '12px',
              padding: '1.25rem',
              marginTop: '1.5rem'
            }}
          >
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#22c55e' }}>Scales Directly with Devs - Zero Server Costs</h3>
            <p className="b2" style={{ opacity: 0.85, lineHeight: 1.6, fontSize: '0.9rem' }}>
              The more developers join, the more powerful the network becomes. No server infrastructure to maintain, no scaling headaches. 
              P2P networking means your community grows without proportional costs. It's cheap, it's expandable, it's built to last.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SuperteamLearnIDEExtensionPage;
