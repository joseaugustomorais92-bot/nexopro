import React from 'react';
import { Icons } from '../ui/Icons';

export function Sidebar() {
  const menuGroups = [
    {
      title: 'Principal',
      items: [
        { label: 'Dashboard', icon: Icons.Chart, active: true },
        { label: 'Empresas', icon: Icons.Building },
        { label: 'Usuários', icon: Icons.User },
      ]
    },
    {
      title: 'Financeiro',
      items: [
        { label: 'Receitas', icon: Icons.Chart },
        { label: 'Despesas', icon: Icons.Shield },
      ]
    },
    {
      title: 'Configurações',
      items: [
        { label: 'Sistema', icon: Icons.Check },
        { label: 'Segurança', icon: Icons.Shield },
      ]
    }
  ];

  return (
    <aside style={{
      width: '280px',
      backgroundColor: '#272c33', // Sufee-like dark sidebar
      color: '#c8c9ce',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      overflowY: 'auto',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Logo Area */}
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#272c33',
        borderBottom: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem'
      }}>
        <img 
          src="https://avatars.githubusercontent.com/u/252062966?v=4" 
          alt="NEXOPRO Logo"
          style={{ width: '32px', height: '32px', borderRadius: '6px' }} 
        />
        <span style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#fff',
          letterSpacing: '1px'
        }}>
          NEXO<span style={{ color: '#0ea5e9' }}>PRO</span>
        </span>
      </div>

      {/* Menu Items */}
      <div style={{ padding: '1rem 0' }}>
        {menuGroups.map((group, index) => (
          <div key={index} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              color: '#607d8b',
              padding: '0 1.5rem',
              marginBottom: '0.5rem',
              fontWeight: 600
            }}>
              {group.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {group.items.map((item, idx) => (
                <li key={idx}>
                  <a href="#" style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.75rem 1.5rem',
                    color: item.active ? '#fff' : '#c8c9ce',
                    textDecoration: 'none',
                    borderLeft: item.active ? '3px solid #0ea5e9' : '3px solid transparent',
                    backgroundColor: item.active ? 'rgba(255,255,255,0.05)' : 'transparent',
                    transition: 'all 0.2s'
                  }}>
                    <span style={{ marginRight: '1rem', width: '20px', display: 'flex', justifyContent: 'center' }}>
                      <item.icon />
                    </span>
                    <span style={{ fontSize: '0.95rem' }}>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}