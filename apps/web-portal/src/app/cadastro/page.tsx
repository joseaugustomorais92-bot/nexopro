"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Icons } from '../../components/ui/Icons';

// Enum must match shared-types (redefining here for client simplicity or import if possible)
// Importing from shared-types in Next.js client component can be tricky if not transpiled. 
// Hardcoding for safety in this demo.
enum CompanyType {
  INDUSTRIAL = 'industrial',
  COMERCIAL = 'comercial',
  SERVICOS = 'servicos',
  AGROPECUARIA = 'agropecuaria',
  EXTRATIVISTA = 'extrativista'
}

export default function CadastroPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    adminName: '',
    adminEmail: '',
    adminPassword: '',
    companyName: '',
    companyType: CompanyType.INDUSTRIAL,
    companyRegion: 'BR-SP'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    
    // Validate fields before submitting
    if (!formData.adminName || !formData.adminEmail || !formData.adminPassword || !formData.companyName) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      setLoading(false);
      return;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      // API Call to API Gateway which proxies to Identity Service
      const response = await fetch(`${apiUrl}/api/identity/auth/register-tenant`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao criar conta');
      }

      // Success - Save token and user info
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user)); // Optional but good for backup

      // Redirect to Dashboard
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  // --- Components for Steps ---

  const Step1Identity = () => (
    <div style={{ animation: 'fadeIn 0.5s' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Identidade do Administrador</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#475569' }}>Nome Completo</label>
          <input 
            type="text" name="adminName" value={formData.adminName} onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            placeholder="Ex: João Silva"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#475569' }}>E-mail Corporativo</label>
          <input 
            type="email" name="adminEmail" value={formData.adminEmail} onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            placeholder="joao@empresa.com"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#475569' }}>Senha Segura</label>
          <input 
            type="password" name="adminPassword" value={formData.adminPassword} onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            placeholder="••••••••"
          />
        </div>
      </div>
    </div>
  );

  const Step2Company = () => (
    <div style={{ animation: 'fadeIn 0.5s' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Dados da Empresa</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#475569' }}>Nome da Empresa</label>
          <input 
            type="text" name="companyName" value={formData.companyName} onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            placeholder="Ex: Indústrias ACME Ltda"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#475569' }}>Segmento de Atuação</label>
          <select 
            name="companyType" value={formData.companyType} onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: 'white' }}
          >
            <option value={CompanyType.INDUSTRIAL}>Industrial</option>
            <option value={CompanyType.COMERCIAL}>Comercial</option>
            <option value={CompanyType.SERVICOS}>Serviços</option>
            <option value={CompanyType.AGROPECUARIA}>Agropecuária</option>
            <option value={CompanyType.EXTRATIVISTA}>Extrativista</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#475569' }}>Região Principal</label>
          <input 
            type="text" name="companyRegion" value={formData.companyRegion} onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
            placeholder="Ex: São Paulo, SP"
          />
        </div>
      </div>
    </div>
  );

  const Step3Structure = () => {
    // Mock logic to suggest modules
    const suggestions = {
      [CompanyType.INDUSTRIAL]: ['PCP', 'Manutenção', 'Estoque', 'RH'],
      [CompanyType.COMERCIAL]: ['Vendas', 'Estoque', 'Financeiro', 'CRM'],
      [CompanyType.SERVICOS]: ['Projetos', 'Contratos', 'Financeiro', 'RH'],
      [CompanyType.AGROPECUARIA]: ['Safra', 'Maquinário', 'Estoque', 'Financeiro'],
      [CompanyType.EXTRATIVISTA]: ['Frota', 'Segurança', 'RH', 'Logística']
    };
    
    const modules = suggestions[formData.companyType as CompanyType] || [];

    return (
      <div style={{ animation: 'fadeIn 0.5s' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Estrutura Sugerida</h2>
        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
          Com base no perfil <strong>{formData.companyType}</strong>, preparamos esta estrutura inicial para a <strong>{formData.companyName}</strong>:
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          {modules.map((mod, i) => (
            <div key={i} style={{ padding: '1rem', backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '8px', color: '#0369a1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Icons.Check /> {mod}
            </div>
          ))}
        </div>
        
        <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', fontSize: '0.9rem', color: '#64748b' }}>
          * Você poderá adicionar ou remover módulos a qualquer momento no painel de controle.
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', color: '#1a1a1a', backgroundColor: '#f1f5f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem' }}>
        <div style={{ width: '100%', maxWidth: '600px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>
          
          {/* Progress Bar */}
          <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0' }}>
            {[1, 2, 3].map((s) => (
              <div key={s} style={{ 
                flex: 1, 
                padding: '1rem', 
                textAlign: 'center', 
                backgroundColor: step === s ? '#fff' : '#f8fafc',
                color: step === s ? '#0f172a' : '#94a3b8',
                fontWeight: step === s ? 700 : 500,
                borderBottom: step === s ? '2px solid #0f172a' : 'none'
              }}>
                Etapa {s}
              </div>
            ))}
          </div>

          <div style={{ padding: '3rem' }}>
            {error && (
              <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontSize: '0.9rem' }}>
                {error}
              </div>
            )}

            {step === 1 && <Step1Identity />}
            {step === 2 && <Step2Company />}
            {step === 3 && <Step3Structure />}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
              {step > 1 ? (
                <button onClick={prevStep} style={{ padding: '0.8rem 1.5rem', border: '1px solid #e2e8f0', backgroundColor: 'white', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
                  Voltar
                </button>
              ) : <div></div>}

              {step < 3 ? (
                <button onClick={nextStep} style={{ padding: '0.8rem 1.5rem', backgroundColor: '#0f172a', color: 'white', borderRadius: '6px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                  Próximo
                </button>
              ) : (
                <button 
                  onClick={handleSubmit} 
                  disabled={loading}
                  style={{ 
                    padding: '0.8rem 2rem', 
                    backgroundColor: '#16a34a', 
                    color: 'white', 
                    borderRadius: '6px', 
                    fontWeight: 600, 
                    border: 'none', 
                    cursor: loading ? 'wait' : 'pointer',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? 'Criando Ecossistema...' : 'Finalizar Cadastro'}
                </button>
              )}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}