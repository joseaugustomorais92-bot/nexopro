import React from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export function DashboardLayout({ children, user }: { children: React.ReactNode, user: any }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f1f2f7' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '280px', display: 'flex', flexDirection: 'column' }}>
        <Topbar user={user} />
        <main style={{ padding: '2rem', flex: 1 }}>
          {children}
        </main>
        <footer style={{ 
          textAlign: 'center', 
          padding: '1.5rem', 
          color: '#64748b', 
          fontSize: '0.85rem',
          borderTop: '1px solid #e5e7eb',
          backgroundColor: '#fff'
        }}>
          &copy; {new Date().getFullYear()} NEXOPRO - Sistema de Gestão Integrada
        </footer>
      </div>
    </div>
  );
}