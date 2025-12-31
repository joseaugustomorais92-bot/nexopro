import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '4rem 5%', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>NEXOPRO</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/privacidade" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Política de privacidade</Link>
          <Link href="/termos" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem' }}>Termos de uso</Link>
        </div>
        <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>© 2024 NEXOPRO. Direitos reservados.</div>
      </div>
    </footer>
  );
};