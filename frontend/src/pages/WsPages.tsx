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
      <div style={{ maxWidth: '800px', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p className="b2" style={{ lineHeight: 1.8 }}>
          UK universities are producing systems engineers, CS graduates, and Rust developers who are technically ready for Solana but have no clear path in. Blockchain societies at Imperial, UCL, King's, Oxford, Manchester, and beyond are active and looking for serious technical content — not introductory crypto pitches but real protocol engineering and hands-on build sessions.
        </p>
        <p className="b2" style={{ lineHeight: 1.8 }}>
          The Rust community in the UK is growing independently of Web3. Developers who already understand ownership, concurrency, and memory safety are a natural fit for Solana's programming model. They exist in every chapter city. They show up to meetups. They star repos. They just haven't been given the right on-ramp yet.
        </p>
        <p className="b2" style={{ lineHeight: 1.8 }}>
          This project is built for them — the developer who is already serious, already building, and ready to go deeper. The chapters provide the venues. The universities provide the pipeline. The platform provides the proof of work.
        </p>
      </div>
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

      <div style={{ marginTop: '2rem', maxWidth: '900px' }}>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          The first release is a <strong>web platform</strong> where learning is on-chain from day one. Connect your Solana wallet and your identity is established — no account, no email, no password. Your wallet is your record.
        </p>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>On-Chain Infrastructure</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>Every interaction with the platform writes state. Complete a walkthrough, a PDA updates. Submit a Blueshift challenge, a token mints. Attend a workshop, a compressed NFT badge lands in your wallet. Nothing lives in a database that can be deleted or manipulated. Your progress is yours, permanently, regardless of what happens to the platform.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>The Smart Contract Layer</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>The smart contract layer tracks three things precisely — <strong>what you've learned</strong>, <strong>what you've built</strong>, and <strong>what you've contributed to other developers</strong>. Learning without building is passive. Building without contributing is isolated. The platform rewards all three because all three produce better developers.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Token 2022 Learn-to-Earn</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>Token 2022 handles the learn-to-earn mechanism with metadata that points directly to the content you completed. The badge is not decorative — it is a cryptographic receipt of work done. Employers, hackathon organisers, and grant committees can verify it on-chain without asking you to prove anything.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Token Gating</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>Token gating unlocks progressively harder material. Not paywalled — earned. Hold the tokens from completing foundational tracks and the advanced content opens. The access control system is the chain itself.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Cross-Platform State</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>The web platform feeds directly into the IDE extension and the mobile app. Same wallet, same PDA, same token balance across every surface. Start a tutorial on the site, continue it in the editor, review it on mobile. The state follows you because it lives on-chain, not in a session cookie.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.08)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>The Infrastructure Layer</h3>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>The workshops, the walkthroughs, the challenges — they all feed into it. The platform is what makes every piece of activity in the UK Solana ecosystem visible, verifiable, and permanent.</p>
        </div>
      </div>
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

      <div style={{ marginTop: '2rem', maxWidth: '900px' }}>
        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Live from Day One</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>The site, walkthroughs, and developer network are live from day one. Connect your wallet, start building.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>In-Person Workshops</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>In-person workshops run on Fridays — the existing Superteam UK chapter cadence. As the network grows, local leads activate each city.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.08)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>University Sessions</h3>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>University blockchain societies run their own sessions during term time, feeding directly into the same on-chain pipeline.</p>
        </div>
      </div>
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

      <div style={{ marginTop: '2rem', maxWidth: '900px' }}>
        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Solana is built in Rust</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>The UK has one of Europe's strongest Rust developer communities.</p>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>That overlap is a major opportunity — but right now it's largely untapped.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Existing Talent</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>The talent already exists: Rust developers, university blockchain societies, and active meetup communities across the UK.</p>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>What's missing is the infrastructure that connects them and turns interest into real Solana builders.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.08)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Building the Pipeline</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>This funding builds that pipeline. A web platform, IDE extension, and mobile app — combined with weekly in-person sessions across six UK cities — will give developers the tools, guidance, and community they need to start shipping on Solana.</p>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>Walkthroughs, challenges, games, and DApp builds will all be tied to on-chain identity and verifiable proof of work.</p>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}><strong>The goal is simple: convert existing talent into active Solana developers.</strong></p>
        </div>
      </div>
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

      <div style={{ marginTop: '2rem', maxWidth: '900px' }}>
        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Getting Started</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>The program starts with a simple goal: make it easy for UK developers to start building on Solana.</p>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>A web platform launches first, providing wallet connection, progress tracking, and a structured path through Blueshift challenges and guided walkthroughs.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Mobile App</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>A Tauri-based mobile app follows, sharing the same Rust codebase and developer identity system.</p>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>Everything is built in public, open source, and designed to be forkable.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Weekly Workshops</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>Weekly in-person workshops run through Superteam UK chapters, with university blockchain societies joining during term time.</p>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>Each session feeds into the same pipeline - developers learn, build, and publish their work.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Continuous Content</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>Content ships continuously: walkthroughs, challenge solutions, game templates, and DApp reference architectures.</p>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>Everything is written in Rust and tested on devnet before progressing further.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Community Growth</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '1rem', opacity: 0.85 }}>As more developers move through the pipeline, contributors begin helping run sessions, improve tooling, and support new builders.</p>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>The goal is a self-sustaining UK Solana developer community - one that regularly produces hackathon teams, deployed programs, and new contributors to the ecosystem.</p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.08)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Summary</h3>
          <p style={{ lineHeight: 1.7, marginBottom: '0.75rem', opacity: 0.85 }}>The infrastructure enables it.</p>
          <p style={{ lineHeight: 1.7, marginBottom: '0.75rem', opacity: 0.85 }}>The content sustains it.</p>
          <p style={{ lineHeight: 1.7, opacity: 0.85 }}>The community grows it.</p>
        </div>
      </div>
    </section>
  </motion.div>
);

export const WhereAndWhoPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">5 Ws and How</div>
      <h2>Where & Who <span className="accent">?</span></h2>
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

        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(245, 158, 11, 0.08)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color, #f59e0b)' }}>Who is Involved?</h3>
          <p className="b2" style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
            UK universities are producing systems engineers and Rust developers who are technically ready for Solana but have no clear path in.
          </p>
          <p className="b2" style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
            This project is built for the serious developer — already building, ready to go deeper.
          </p>
          <p className="b2" style={{ lineHeight: 1.7 }}>
            Chapters provide the venues, universities provide the pipeline, and this platform provides the on-chain proof of work.
          </p>
        </div>
      </div>
    </section>
  </motion.div>
);

export default WhoPage;
