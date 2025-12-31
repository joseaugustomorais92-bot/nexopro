import React from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';

export default function ComoFuncionaPage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', color: '#1a1a1a', backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header activePath="/como-funciona" />
      <main style={{ flex: 1, padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>Simples, Rápido e Sem Riscos</h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#475569', marginBottom: '4rem' }}>
          Acreditamos tanto no NEXOPRO que eliminamos todas as barreiras de entrada. Você não precisa falar com um vendedor para começar.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ fontSize: '5rem', fontWeight: 800, color: '#e2e8f0' }}>01</div>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Cadastro em 3 Minutos</h3>
              <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Crie sua conta administrativa, defina o perfil da sua empresa e receba acesso imediato ao painel de controle.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ fontSize: '5rem', fontWeight: 800, color: '#e2e8f0' }}>02</div>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>30 Dias de Teste Completo</h3>
              <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Acesso irrestrito a todos os módulos premium. Configure departamentos, convide sua equipe e teste em produção.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ fontSize: '5rem', fontWeight: 800, color: '#e2e8f0' }}>03</div>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Decisão Consciente</h3>
              <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Ao final do teste, você decide se continua. Sem contratos de fidelidade forçada. Você fica porque o sistema funciona.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}