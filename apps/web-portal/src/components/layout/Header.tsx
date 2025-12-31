import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  activePath?: string;
}

export const Header: React.FC<HeaderProps> = ({ activePath }) => {
  const linkStyle = (path: string) => ({
    textDecoration: 'none', 
    color: activePath === path ? '#0f172a' : '#4b5563', 
    fontSize: '0.95rem', 
    fontWeight: activePath === path ? 700 : 500,
    transition: 'color 0.2s ease'
  });

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 5%', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: 0, backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', zIndex: 100 }}>
      <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px', color: '#0f172a' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>NEXOPRO</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <nav>
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            <li><Link href="/ecossistema" style={linkStyle('/ecossistema')}>Ecossistema</Link></li>
            <li><Link href="/empresas" style={linkStyle('/empresas')}>Empresas</Link></li>
            <li><Link href="/seguranca" style={linkStyle('/seguranca')}>Segurança</Link></li>
            <li><Link href="/como-funciona" style={linkStyle('/como-funciona')}>Como Funciona</Link></li>
            <li><Link href="/login" style={linkStyle('/login')}>Entrar</Link></li>
          </ul>
        </nav>
        <Link href="/cadastro" style={{ 
          textDecoration: 'none', 
          backgroundColor: '#0f172a', 
          color: 'white', 
          padding: '0.7rem 1.4rem', 
          borderRadius: '6px',
          fontSize: '0.9rem',
          fontWeight: 600,
          transition: 'background-color 0.2s ease',
          border: '1px solid transparent'
        }}>
          Iniciar experiência gratuita
        </Link>
      </div>
    </header>
  );
};