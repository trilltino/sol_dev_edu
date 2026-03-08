import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const levelQuote = "Every expert was once a beginner.";

export const BeginnerPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">Learning Path</div>
      <h2>Beginner <span className="accent">Level</span></h2>
      <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.06)', borderRadius: '6px', fontStyle: 'italic', opacity: 0.7 }}>"{levelQuote}"</div>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>Starting your journey? This section covers the fundamentals you need to get started. Learn the basic concepts, tools, and workflows to build a solid foundation.</p>
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
    </section>
  </motion.div>
);

export const WalkthroughPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="content-wrap page-overlay">
    <section className="section">
      <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back</Link>
      <div className="section-label">Content Plans</div>
      <h2>Walkthrough</h2>
      <p className="b2" style={{ maxWidth: '800px', marginTop: '2rem' }}>Regular written walkthroughs of challenges, games, and DApps — give developers something to return to. Step-by-step guides that take a project from concept to deployed, built in Rust, tested on devnet. Read it, build it, ship it — at your own pace, as many times as you need.</p>

      <div style={{ maxWidth: '900px', marginTop: '3rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.5rem' }}>The Vault <span style={{ color: '#9945FF', fontSize: '0.9rem' }}>— Blueshift Challenge</span></h3>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          A written walkthrough for the <a href="https://github.com/trilltino/anchor-vault" target="_blank" rel="noopener noreferrer" style={{ color: '#9945FF', textDecoration: 'underline' }}>Blueshift Anchor Vault challenge</a>. View the <a href="https://github.com/trilltino/anchor-vault/tree/master/programs/vault" target="_blank" rel="noopener noreferrer" style={{ color: '#9945FF', textDecoration: 'underline' }}>challenge MDX</a> for the full specification. A vault allows users to securely store their assets. A vault is a fundamental building block in DeFi that, at its core, allows users to securely store their assets (lamports in this case) that only that same user can withdraw later.
        </p>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          In this challenge, we'll build a simple lamport vault that demonstrates how to work with basic accounts, Program Derived Addresses (PDAs), and Cross-Program Invocation (CPI). If you're not familiar with Anchor, you should start by reading the Introduction to Anchor to familiarize with the core concept that we're going to use in this program.
        </p>

        <h4 style={{ color: '#9945FF', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Prerequisites</h4>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Before you begin, be sure Rust and Anchor are installed. Then in your terminal run:
        </p>
        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', overflow: 'auto', marginBottom: '1.5rem' }}>
          <code style={{ color: '#7dd3fc' }}>anchor init blueshift_anchor_vault</code>
        </pre>

        <h4 style={{ color: '#9945FF', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Program Structure</h4>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Let's start with the basic program structure. We'll implement everything in lib.rs since this is a straightforward program:
        </p>
        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', overflow: 'auto', marginBottom: '1rem' }}>
          <code style={{ color: '#a0a0a0' }}>{`declare_id!("22222222222222222222222222222222222222222222");

#[program]
pub mod blueshift_anchor_vault {
    use super::*;

    pub fn deposit(ctx: Context<VaultAction>, amount: u64) -> Result<()> {
        // deposit logic
        Ok(())
    }

    pub fn withdraw(ctx: Context<VaultAction>) -> Result<()> {
        // withdraw logic
        Ok(())
    }
}

#[derive(Accounts)]
pub struct VaultAction<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        mut,
        seeds = [b"vault", signer.key().as_ref()],
        bump,
    )]
    pub vault: SystemAccount<'info>,
    pub system_program: Program<'info, System>,
}

#[error_code]
pub enum VaultError {
    // error enum
}`}</code>
        </pre>

        <h4 style={{ color: '#9945FF', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Account Constraints Explained</h4>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          The VaultAction account struct contains:
        </p>
        <ul style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.8, marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong style={{ color: '#fff' }}>signer:</strong> The owner of the vault, and the only person that can withdraw the lamports after creating the vault.</li>
          <li><strong style={{ color: '#fff' }}>vault:</strong> A PDA derived from seeds [b"vault", signer.key().as_ref()] that holds the lamports for the signer.</li>
          <li><strong style={{ color: '#fff' }}>system_program:</strong> The system program account needed for the transfer CPI.</li>
        </ul>

        <h4 style={{ color: '#9945FF', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Error Handling</h4>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          We need two error types:
        </p>
        <ul style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.8, marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong style={{ color: '#fff' }}>VaultAlreadyExists:</strong> Let us know if there are already some lamports in the account (vault exists).</li>
          <li><strong style={{ color: '#fff' }}>InvalidAmount:</strong> We can't deposit an amount less than the minimum rent for a basic account.</li>
        </ul>
        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', overflow: 'auto', marginBottom: '1rem' }}>
          <code style={{ color: '#a0a0a0' }}>{`#[error_code]
pub enum VaultError {
    #[msg("Vault already exists")]
    VaultAlreadyExists,
    #[msg("Invalid amount")]
    InvalidAmount,
}`}</code>
        </pre>

        <h4 style={{ color: '#9945FF', marginTop: '1.5rem', marginBottom: '0.75rem' }}>The Deposit Instruction</h4>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          The deposit instruction performs these steps:
        </p>
        <ol style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.8, marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Verifies the vault is empty (has zero lamports) to prevent double deposits</li>
          <li>Ensures the deposit amount exceeds the rent-exempt minimum for a SystemAccount</li>
          <li>Transfers lamports from the signer to the vault using CPI to the System Program</li>
        </ol>
        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', overflow: 'auto', marginBottom: '1rem' }}>
          <code style={{ color: '#a0a0a0' }}>{`pub fn deposit(ctx: Context<VaultAction>, amount: u64) -> Result<()> {
    // Check if vault is empty
    require_eq!(ctx.accounts.vault.lamports(), 0, VaultError::VaultAlreadyExists);

    // Ensure amount exceeds rent-exempt minimum
    require_gt!(amount, Rent::get()?.minimum_balance(0), VaultError::InvalidAmount);

    // Transfer lamports from signer to vault
    transfer(
        CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            Transfer {
                from: ctx.accounts.signer.to_account_info(),
                to: ctx.accounts.vault.to_account_info(),
            },
        ),
        amount,
    )?;

    Ok(())
}`}</code>
        </pre>

        <h4 style={{ color: '#9945FF', marginTop: '1.5rem', marginBottom: '0.75rem' }}>The Withdraw Instruction</h4>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          The withdraw instruction:
        </p>
        <ol style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.8, marginLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Verifies the vault contains lamports (is not empty)</li>
          <li>Uses the vault's PDA to sign the transfer on its own behalf</li>
          <li>Transfers all lamports from the vault back to the signer</li>
        </ol>
        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', overflow: 'auto', marginBottom: '1rem' }}>
          <code style={{ color: '#a0a0a0' }}>{`pub fn withdraw(ctx: Context<VaultAction>) -> Result<()> {
    // Check if vault has any lamports
    require_neq!(ctx.accounts.vault.lamports(), 0, VaultError::InvalidAmount);

    // Create PDA signer seeds
    let signer_key = ctx.accounts.signer.key();
    let signer_seeds = &[b"vault", signer_key.as_ref(), &[ctx.bumps.vault]];

    // Transfer all lamports from vault to signer
    transfer(
        CpiContext::new_with_signer(
            ctx.accounts.system_program.to_account_info(),
            Transfer {
                from: ctx.accounts.vault.to_account_info(),
                to: ctx.accounts.signer.to_account_info(),
            },
            &[&signer_seeds[..]]
        ),
        ctx.accounts.vault.lamports()
    )?;

    Ok(())
}`}</code>
        </pre>

        <h4 style={{ color: '#9945FF', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Security Model</h4>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          The security of this withdrawal is guaranteed by two factors:
        </p>
        <ol style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: 1.8, marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong style={{ color: '#fff' }}>PDA Derivation:</strong> The vault's PDA is derived using the signer's public key, ensuring only the original depositor can withdraw.</li>
          <li><strong style={{ color: '#fff' }}>PDA Signing:</strong> The PDA's ability to sign the transfer is verified through the seeds we provide to CpiContext::new_with_signer.</li>
        </ol>

        <h4 style={{ color: '#9945FF', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Building and Testing</h4>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Build your program using:
        </p>
        <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', overflow: 'auto', marginBottom: '1rem' }}>
          <code style={{ color: '#7dd3fc' }}>anchor build</code>
        </pre>
        <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          This generates a .so file in your target/deploy folder that you can use to test against the challenge and claim your NFTs!
        </p>
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

export default BeginnerPage;
