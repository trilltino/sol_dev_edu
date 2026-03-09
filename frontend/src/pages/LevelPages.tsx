import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const levelQuote = "Every expert was once a beginner.";

const beginnerItems = [
  {
    title: 'Start Here',
    description: "Install Rust. Install the Solana CLI. Set up Anchor. Three steps, then you're ready to build. Full walkthrough on this site."
  },
  {
    title: 'Rust Fundamentals for Solana',
    description: "You don't need to master Rust before touching Solana — but ownership, borrowing, and structs will appear immediately. Short focused guides covering exactly what you need, nothing more."
  },
  {
    title: 'What is Solana?',
    description: "Accounts, programs, transactions, PDAs. The mental model explained once, clearly, in Rust terms. No JavaScript analogies."
  },
  {
    title: 'Your First Anchor Program',
    description: "Write, deploy, and test a vault program on devnet. Step by step. The same program is in the repo — read the code alongside the walkthrough."
  },
  {
    title: 'Blueshift Challenges',
    description: "Blueshift is where learning becomes proof. Complete a challenge, submit on-chain, earn your first badge. Start with the SPL token challenge — hardest concept earliest, everything else gets easier."
  },
  {
    title: 'Connect Your Wallet',
    description: "Connect Phantom or Solflare to the platform. Your wallet is your identity here. Everything you complete gets recorded to your PDA from day one."
  },
  {
    title: 'Join the Network',
    description: "Install the IDE extension. Join the UK developer P2P network. Find a study group. Friday sessions run weekly across six UK cities — show up, build with people."
  }
];

const intermediateItems = [
  {
    title: 'Building with AI',
    description: "Use AI as a coding partner, not a crutch. Prompting strategies for Rust and Anchor specifically — getting useful output from a language most models underperform in. Build faster without losing understanding of what you're shipping."
  },
  {
    title: 'AI Frontends',
    description: "Integrate AI into your DApp UI. Streaming responses, tool use, embeddings for semantic search over on-chain data. Build interfaces that feel intelligent without centralised AI infrastructure owning your users."
  },
  {
    title: 'Your Own Startup',
    description: "Take an idea from concept to deployed product. Token economics, program architecture, frontend, and distribution. Walkthroughs built around real projects — not toy examples but the kind of thing you'd put in front of a funder."
  },
  {
    title: 'Deeper Solana Concepts',
    description: "Cross-Program Invocation patterns, account validation, compute unit optimisation, transaction simulation, and error handling at the program level. The gap between a working program and a production program."
  },
  {
    title: 'Token 2022 in Depth',
    description: "Transfer hooks, metadata extensions, non-transferable tokens, confidential transfers. Build the full learn-to-earn mechanic from scratch — the same system powering this platform."
  },
  {
    title: 'APIs and Data',
    description: "Yellowstone gRPC for real-time on-chain data. Pyth for price feeds. Jupiter for swap routing. Build programs that react to market conditions rather than waiting for user input."
  },
  {
    title: 'Contributing to Superteam Infrastructure',
    description: "The platform is open source. Pick an issue, submit a PR, get your contribution verified on-chain. Real open source work on live infrastructure — not a practice repo, not a tutorial project. Counts toward your Blueshift track record and your on-chain proof of work."
  }
];

const advancedItems = [
  {
    title: 'Pinocchio — No Std Solana',
    description: "Drop below Anchor. Custom entrypoints, zero-copy account deserialization, manual signer and ownership validation, instruction discriminator handling. Write programs that consume a fraction of the compute units of equivalent Anchor code. The same conversion pattern used in XForce Terminal — walkthrough included."
  },
  {
    title: 'Program Architecture',
    description: "Think in systems not functions. Multi-PDA account structures, separation of state and logic, CPI security patterns, signer privilege escalation prevention. The difference between a program that works and a program that holds value safely under adversarial conditions."
  },
  {
    title: 'MEV and Execution',
    description: "Jito bundle integration, atomic execution, front-running prevention. How professional trading infrastructure is built on Solana and how to apply the same patterns to any time-sensitive program."
  },
  {
    title: 'Algorithms in Rust',
    description: "DSA implemented in Rust — not for interviews, for thinking. Ownership-aware data structures, lock-free concurrency, memory layout optimisation. Solving hard problems in the language Solana is built in sharpens both skills simultaneously."
  },
  {
    title: 'Thinking Like a Senior Architect',
    description: "System design for on-chain applications. When to use the chain, when not to. How to scope a program before writing a line of code. Trade-off analysis, failure mode planning, and the mental models that separate engineers who build once from engineers who build right."
  },
  {
    title: 'CV Optimisation',
    description: "Your GitHub is your CV. How to present Rust and Solana work to technical and non-technical audiences. What to lead with, what to cut, how to frame on-chain proof of work for Web2 employers and Web3 funders alike."
  },
  {
    title: 'Pitch Guides',
    description: "How to present a technical project to a non-technical funder. Structuring the ask, leading with metrics, handling pushback. The same framework used to secure Superteam UK funding — documented and replicable."
  },
  {
    title: 'Speaking and Communication',
    description: "Present technical work with authority. Workshop facilitation, conference talks, one-on-one mentorship. How to explain Pinocchio to a junior developer and a VC in the same day without losing either of them."
  }
];

export const BeginnerPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">Learning Path</div>
      <h2>Beginner <span className="accent">Level</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>"{levelQuote}"</div>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>Starting your journey? This section covers the fundamentals you need to get started. Learn the basic concepts, tools, and workflows to build a solid foundation.</p>

      <div style={{ maxWidth: '900px', marginTop: '3rem', display: 'grid', gap: '2rem' }}>
        {beginnerItems.map((item: { title: string; description: string }, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '1.25rem' }}>{item.title}</h3>
            <p style={{ color: '#a0a0a0', lineHeight: 1.6, fontSize: '1rem' }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </motion.div>
);

export const IntermediatePage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">Learning Path</div>
      <h2>Intermediate <span className="accent">Level</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>"{levelQuote}"</div>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>Ready to level up? This section dives deeper into advanced topics, best practices, and real-world applications to expand your skills.</p>

      <div style={{ maxWidth: '900px', marginTop: '3rem', display: 'grid', gap: '2rem' }}>
        {intermediateItems.map((item: { title: string; description: string }, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '1.25rem' }}>{item.title}</h3>
            <p style={{ color: '#a0a0a0', lineHeight: 1.6, fontSize: '1rem' }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </motion.div>
);

export const AdvancedPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">Learning Path</div>
      <h2>Advanced <span className="accent">Level</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>"{levelQuote}"</div>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>For experienced developers seeking mastery. This section covers expert-level concepts, architecture patterns, and contributions to open-source projects.</p>

      <div style={{ maxWidth: '900px', marginTop: '3rem', display: 'grid', gap: '2rem' }}>
        {advancedItems.map((item: { title: string; description: string }, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '1.25rem' }}>{item.title}</h3>
            <p style={{ color: '#a0a0a0', lineHeight: 1.6, fontSize: '1rem' }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </motion.div>
);

export const WalkthroughPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">Content Plans</div>
      <h2>Written Walkthroughs — <span className="accent">Deep Dives</span></h2>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>
        Regular written walkthroughs published on this site. Not surface-level tutorials — deep dives into the programming concepts underneath the code.
      </p>

      <div style={{ maxWidth: '850px', marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <p style={{ color: '#a0a0a0', fontSize: '1.1rem', lineHeight: 1.8 }}>
          Every walkthrough takes a real challenge and uses it as a lens. The goal is never just to complete the exercise — it is to understand what Solana is actually doing at the instruction level. Why the account model works the way it does. What the framework is hiding. What happens when you remove the abstraction and write it yourself.
        </p>

        <p style={{ color: '#a0a0a0', fontSize: '1.1rem', lineHeight: 1.8 }}>
          Pinocchio challenges are the primary vehicle. Anchor teaches you to build. Pinocchio teaches you what you built. The gap between the two is where real understanding lives — and every walkthrough is written to close that gap permanently, not just for the challenge in front of you but for every program you write after it.
        </p>

        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderLeft: '4px solid #9945FF',
          padding: '1.5rem',
          borderRadius: '0 12px 12px 0',
          fontStyle: 'italic',
          color: '#d0d0d0',
          fontSize: '1.1rem',
          lineHeight: 1.6
        }}>
          Read it once to follow along. Read it again to understand. Come back six months later when you're deeper in the stack and it will mean something different.
        </div>
      </div>
    </section>
  </motion.div>
);

export const VideoContentPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">Content Plans</div>
      <h2>Video Content</h2>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>Video tutorials and walkthroughs covering Solana development topics. Watch and learn as we build real applications from scratch.</p>
    </section>
  </motion.div>
);

export const LevelsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const level = searchParams.get('level');

  if (level === 'beginners') {
    return <BeginnerPage />;
  }

  if (level === 'intermediate') {
    return <IntermediatePage />;
  }

  if (level === 'advanced') {
    return <AdvancedPage />;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
      <section className="section">
        <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
        <div className="section-label">Learning Path</div>
        <h2>Select a <span className="accent">Level</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
          <Link to="/levels?level=beginners" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Beginners</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>Start your Solana journey</p>
            </div>
          </Link>
          <Link to="/levels?level=intermediate" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Intermediate</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>Level up your skills</p>
            </div>
          </Link>
          <Link to="/levels?level=advanced" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Advanced</h3>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>Master Solana development</p>
            </div>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default BeginnerPage;
