import React from 'react';
import { Icons } from '../ui/Icons';

export function Topbar({ user }: { user: any }) {
  return (
    <header style={{
      backgroundColor: '#fff',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 900
    }}>
      {/* Search / Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0ea5e9' }}>
          <Icons.Menu />
        </button>
        <div style={{ position: 'relative' }}>
          <input 
            type="text" 
            placeholder="Pesquisar..." 
            style={{
              padding: '0.5rem 1rem 0.5rem 2.5rem',
              borderRadius: '20px',
              border: '1px solid #e5e7eb',
              fontSize: '0.9rem',
              outline: 'none',
              width: '250px'
            }}
          />
          <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
            <Icons.Check /> {/* Using Check as generic search icon placeholder if search icon missing */}
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {/* Notifications */}
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <div style={{ color: '#64748b' }}>
            <Icons.Shield /> {/* Notification placeholder */}
          </div>
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: '#ef4444',
            color: 'white',
            fontSize: '0.7rem',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>3</span>
        </div>

        {/* User Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
          <div style={{ textAlign: 'right', display: 'none', md: 'block' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1e293b' }}>{user?.name || 'Usuário'}</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{user?.role || 'Admin'}</div>
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#0ea5e9',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
        </div>
      </div>
    </header>
  );
}