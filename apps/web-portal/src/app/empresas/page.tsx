import React from 'react';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Icons } from '../../components/ui/Icons';

export default function EmpresasPage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', color: '#1a1a1a', backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header activePath="/empresas" />
      <main style={{ flex: 1, padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>Para todas as indústrias</h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#475569', marginBottom: '4rem' }}>
          O NEXOPRO se adapta à linguagem e aos processos do seu setor. Não é você que muda para o sistema; o sistema muda para você.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Icons.Factory />, title: 'Indústria', desc: 'Controle de chão de fábrica, PCP, manutenção preditiva e integração com IoT.' },
            { icon: <Icons.ShoppingCart />, title: 'Varejo & Comércio', desc: 'Gestão de estoque em tempo real, PDV integrado e análise de comportamento do consumidor.' },
            { icon: <Icons.Briefcase />, title: 'Serviços', desc: 'Gestão de projetos, horas trabalhadas, contratos recorrentes e SLA.' },
            { icon: <Icons.Sprout />, title: 'Agronegócio', desc: 'Gestão de safra, maquinário, meteorologia integrada e custos por hectare.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '2rem', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ color: '#0f172a', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>{item.title}</h3>
              <p style={{ color: '#64748b', lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}