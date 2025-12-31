'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Icons } from '../../components/ui/Icons';
import { useToast } from '../../components/ui/Toast';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const { showToast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token) {
      router.push('/login');
    } else {
      try {
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          showToast(`Bem-vindo de volta, ${parsedUser.name || 'Usuário'}!`, 'success');
        } else {
           // Fallback decode token (simple version)
          const payload = JSON.parse(atob(token.split('.')[1]));
          setUser(payload);
        }
      } catch (e) {
        localStorage.removeItem('token');
        router.push('/login');
      }
    }
  }, [router, showToast]);

  if (!user) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      <div style={{ color: '#666', fontWeight: 500 }}>Carregando ecossistema...</div>
      <style jsx>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );

  const stats = [
    { title: 'Receita Total', value: 'R$ 0,00', icon: Icons.Chart, color: '#28a745', bg: '#e8f5e9' },
    { title: 'Usuários Ativos', value: '1', icon: Icons.User, color: '#17a2b8', bg: '#e0f7fa' },
    { title: 'Módulos Ativos', value: '3', icon: Icons.Building, color: '#ffc107', bg: '#fff3cd' },
    { title: 'Segurança', value: '100%', icon: Icons.Shield, color: '#0ea5e9', bg: '#e0f2fe' },
  ];

  return (
    <DashboardLayout user={user}>
      {/* Page Header */}
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#272c33', margin: 0 }}>Visão Geral</h1>
          <p style={{ color: '#64748b', margin: '0.5rem 0 0 0' }}>Bem-vindo ao painel de controle do NEXOPRO.</p>
        </div>
        <button style={{
          backgroundColor: '#0ea5e9',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          boxShadow: '0 2px 4px rgba(14, 165, 233, 0.3)'
        }}>
          <Icons.Check /> Novo Relatório
        </button>
      </div>

      {/* Stats Cards - Sufee Style */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '4px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderLeft: `4px solid ${stat.color}`
          }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#272c33', marginBottom: '0.25rem' }}>{stat.value}</div>
              <div style={{ color: '#878787', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.title}</div>
            </div>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: stat.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: stat.color
            }}>
              <stat.icon />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div style={{ backgroundColor: 'white', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#272c33', fontSize: '1.1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
          Atividades Recentes
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#64748b', fontSize: '0.9rem' }}>
              <th style={{ padding: '0.75rem 0', fontWeight: 600 }}>USUÁRIO</th>
              <th style={{ padding: '0.75rem 0', fontWeight: 600 }}>AÇÃO</th>
              <th style={{ padding: '0.75rem 0', fontWeight: 600 }}>DATA</th>
              <th style={{ padding: '0.75rem 0', fontWeight: 600 }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((i) => (
              <tr key={i} style={{ borderTop: '1px solid #f1f2f7' }}>
                <td style={{ padding: '1rem 0', color: '#272c33' }}>Ana Silva</td>
                <td style={{ padding: '1rem 0', color: '#64748b' }}>Atualizou perfil da empresa</td>
                <td style={{ padding: '1rem 0', color: '#64748b' }}>Hoje, 14:30</td>
                <td style={{ padding: '1rem 0' }}>
                  <span style={{ 
                    backgroundColor: '#e8f5e9', 
                    color: '#28a745', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    fontWeight: 600 
                  }}>Completo</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}