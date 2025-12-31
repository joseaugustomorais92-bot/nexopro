import React from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';

export default function EcossistemaPage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', color: '#1a1a1a', backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header activePath="/ecossistema" />
      <main style={{ flex: 1, padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>O Ecossistema NEXOPRO</h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#475569', marginBottom: '4rem' }}>
          Imagine uma empresa onde cada departamento é um órgão vital, funcionando de forma autônoma, mas contribuindo para o todo. 
          O NEXOPRO replica essa biologia corporativa digitalmente.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Modularidade Real</h2>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Diferente de sistemas monolíticos, aqui você ativa apenas o que precisa. Comece com o Financeiro, adicione o RH depois. O sistema cresce com você.
            </p>
          </div>
          <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Inteligência Central</h2>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Nossa IA não é um chatbot. É um cérebro que analisa dados de todos os módulos para sugerir otimizações de processos e reduções de custos.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}