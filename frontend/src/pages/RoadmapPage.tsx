import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const RoadmapPage = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Infrastructure & Outreach",
      content: "The web platform goes live. Wallet connection, on-chain progress tracking, first walkthroughs published. University outreach begins across six chapter cities — blockchain societies, Rust meetups, CS departments. Friday sessions start running through existing Superteam UK chapter infrastructure.",
      targets: [
        "3 university partnerships",
        "25 wallets connected",
        "5 walkthroughs published",
        "20 workshop attendees in first 4 weeks"
      ]
    },
    {
      phase: "Phase 2",
      title: "Cohort Development",
      content: "Weekly Friday sessions running. Developers moving through Blueshift challenges, submitting on-chain. IDE extension deployed to early cohort. First compressed NFT badges issued. University blockchain societies running their own sessions during term time.",
      targets: [
        "50 active wallets",
        "25 monthly challenge submissions",
        "100 IDE extension installs",
        "30 workshop attendees per month"
      ]
    },
    {
      phase: "Phase 3",
      title: "Building Real Applications",
      content: "Cohort members shipping real programs — games, DApps, on-chain tools. Walkthroughs generated from real builds. Hackathon entries submitted from within the pipeline. Engineers onboarded from within the cohort itself.",
      targets: [
        "Increased devnet deployments",
        "Consistent hackathon participation",
        "Growing monthly challenge submissions",
        "Strong active wallet growth"
      ]
    },
    {
      phase: "Phase 4",
      title: "Scaling & Autonomy",
      content: "Tauri mobile app live. Local chapter leads active. The network self-sustaining — the infrastructure pulls without needing to push.",
      targets: [
        "Sustained submission growth",
        "Expanding active wallet base",
        "Mainnet program proliferation",
        "Chapter leadership autonomy",
        "Maximised hackathon throughput"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="content-wrap page-overlay"
    >
      <section className="section">
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
        <div className="section-label">Strategic Roadmap</div>
        <h2 style={{ marginBottom: '3rem' }}>Growth <span className="accent">Plan</span></h2>

        <div style={{ display: 'grid', gap: '2.5rem', maxWidth: '1000px' }}>
          {phases.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '240px 1fr',
                gap: '2rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '2rem'
              }}
            >
              <div>
                <span style={{
                  color: 'var(--accent-color, #f59e0b)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {p.phase}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: '#fff' }}>{p.title}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: '#a0a0a0', lineHeight: 1.7, fontSize: '1.05rem' }}>{p.content}</p>

                <div style={{
                  background: 'rgba(245, 158, 11, 0.04)',
                  border: '1px solid rgba(245, 158, 11, 0.1)',
                  borderRadius: '12px',
                  padding: '1.25rem'
                }}>
                  <div style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase' }}>Targets & Metrics</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {p.targets.map((t, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d0d0d0', fontSize: '0.9rem' }}>
                        <div style={{ width: '4px', height: '4px', background: '#f59e0b', borderRadius: '50%' }} />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '4rem',
            maxWidth: '1000px',
            background: 'linear-gradient(135deg, rgba(153, 69, 255, 0.1) 0%, rgba(20, 241, 149, 0.05) 100%)',
            border: '1px solid rgba(153, 69, 255, 0.2)',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center'
          }}
        >
          <div className="section-label" style={{ color: '#9945FF' }}>Financials</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The <span className="accent">Ask</span></h2>
          <p style={{ color: '#a0a0a0', fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto 3rem' }}>
            This is an investment in activating what is already built — not funding a concept, but backing a developer who is ready to ship.
          </p>

          <div style={{
            display: 'inline-block',
            padding: '2rem 4rem',
            background: 'rgba(0, 0, 0, 0.4)',
            border: '2px solid #9945FF',
            borderRadius: '100px',
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#fff',
            boxShadow: '0 0 40px rgba(153, 69, 255, 0.3)',
            letterSpacing: '-0.02em'
          }}>
            $3,000 <span style={{ color: '#9945FF', fontSize: '1.1rem', fontWeight: 600 }}>USDC investment</span>
          </div>
          <p style={{ marginTop: '2rem', color: '#a0a0a0', fontSize: '1.1rem', fontStyle: 'italic', opacity: 0.8 }}>to get this moving immediately</p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default RoadmapPage;
