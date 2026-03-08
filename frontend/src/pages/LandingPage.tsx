import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ['Build', 'Grow', 'Ship', 'Learn'];

export const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const [showUK, setShowUK] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const cyclingInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev === WORDS.length - 1) {
          clearInterval(cyclingInterval);
          setTimeout(() => setShowUK(true), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(cyclingInterval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="header">
        <h1 className="cycling-title">
          Superteam<span className="cycling-wrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="accent"
              >
                {WORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <AnimatePresence>
            {showUK && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onAnimationComplete={() => setComplete(true)}
              >
                UK
              </motion.span>
            )}
          </AnimatePresence>
        </h1>

        <AnimatePresence>
          {complete && (
            <>
              <motion.div
                className="subheader cycling-subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                unlocking your&nbsp;<span className="accent">potential</span>
              </motion.div>
              <SuperteamLearnUKCards />
            </>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
};

const SuperteamLearnUKCards = () => {
  return (
    <motion.div
      className="learn-uk-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ 
          fontSize: '2rem', 
          fontWeight: 700, 
          marginBottom: '2rem',
          textAlign: 'center'
        }}
      >
        Objectives
      </motion.h2>
      <div className="learn-uk-cards">
        <div className="learn-uk-card">
          <div className="card-icon"></div>
          <h3>Addressing the UK Talent Gap</h3>
          <p>SuperteamLearnUK is specifically designed to cultivate a pipeline of skilled Solana developers within the United Kingdom.</p>
        </div>
        
        <div className="learn-uk-card">
          <div className="card-icon"></div>
          <h3>Production-Grade Curriculum</h3>
          <p>Our structured learning paths transform candidates into job-ready engineers equipped with industry best practices.</p>
        </div>
        
        <div className="learn-uk-card">
          <div className="card-icon"></div>
          <h3>Solana Ecosystem Mastery</h3>
          <p>Comprehensive training in Rust, Anchor, and Solana development—building the technical foundation for Web3.</p>
        </div>
        
        <div className="learn-uk-card">
          <div className="card-icon"></div>
          <h3>Seamless Ecosystem Onboarding</h3>
          <p>Graduates flow directly into <strong>SuperteamEarn</strong> for freelance opportunities and <strong>Talent</strong> for full-time roles.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
