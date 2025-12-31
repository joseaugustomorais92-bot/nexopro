import React from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Icons } from '../../components/ui/Icons';

export default function SegurancaPage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', color: '#1a1a1a', backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header activePath="/seguranca" />
      <main style={{ flex: 1, padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>Segurança Zero Trust</h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#475569', marginBottom: '4rem' }}>
          Sua empresa é seu castelo. Nós construímos as muralhas. No NEXOPRO, a segurança não é uma funcionalidade; é a base de tudo.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
            <div style={{ color: '#0f172a' }}><Icons.Lock /></div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Isolamento Total de Dados</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                Utilizamos arquitetura multi-tenant com isolamento lógico rigoroso. Os dados da sua empresa nunca se misturam com os de outras. É como ter um servidor dedicado, com a escalabilidade da nuvem.
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
             <div style={{ color: '#0f172a' }}><Icons.Shield /></div>
             <div>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Criptografia e Conformidade</h3>
               <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                 Todos os dados são criptografados em repouso e em trânsito. Estamos em conformidade com LGPD e GDPR, garantindo que você tenha controle total sobre a privacidade.
               </p>
             </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}