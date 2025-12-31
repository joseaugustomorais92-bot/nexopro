import Link from 'next/link';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Icons } from '../components/ui/Icons';

export default function Home() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', color: '#1a1a1a', backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <Header />

      {/* 🔷 BLOCO PRINCIPAL (HERO SECTION) */}
      <section style={{ 
        padding: '8rem 5% 10rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        maxWidth: '1400px', 
        margin: '0 auto',
        background: 'radial-gradient(circle at top right, #f8fafc 0%, #ffffff 50%)' 
      }}>
        {/* LADO ESQUERDO: TEXTO */}
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{ 
            fontSize: '3.75rem', 
            lineHeight: '1.1', 
            fontWeight: 800, 
            marginBottom: '1.5rem',
            letterSpacing: '-1.5px',
            color: '#0f172a'
          }}>
            Um ecossistema empresarial completo.
          </h1>
          <h2 style={{ 
            fontSize: '1.5rem', 
            color: '#475569', 
            fontWeight: 500, 
            marginBottom: '2rem',
            lineHeight: '1.4'
          }}>
            Onde cada empresa funciona de forma independente — e tudo se conecta.
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            marginBottom: '3rem', 
            lineHeight: '1.6',
            maxWidth: '540px'
          }}>
            O NEXOPRO integra todos os departamentos da sua empresa em uma única plataforma inteligente, organizada e segura.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/cadastro" style={{ 
              textDecoration: 'none', 
              backgroundColor: '#0f172a', 
              color: 'white', 
              padding: '1rem 2rem', 
              borderRadius: '6px',
              fontSize: '1.05rem',
              fontWeight: 600,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              Iniciar experiência gratuita
            </Link>
            <Link href="/ecossistema" style={{ 
              textDecoration: 'none', 
              backgroundColor: 'transparent', 
              color: '#0f172a', 
              border: '1px solid #e2e8f0',
              padding: '1rem 2rem', 
              borderRadius: '6px',
              fontSize: '1.05rem',
              fontWeight: 500
            }}>
              Conhecer o ecossistema
            </Link>
          </div>
        </div>

        {/* LADO DIREITO: ILUSTRAÇÃO ABSTRATA */}
        <div style={{ position: 'relative', width: '500px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           {/* Center Core */}
           <div style={{ 
             width: '120px', height: '120px', backgroundColor: '#0f172a', borderRadius: '50%', 
             display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', zIndex: 10,
             boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
           }}>Empresa</div>
           
           {/* Orbiting Modules */}
           {[
             { label: 'Contábil', top: '0', left: '50%', transform: 'translate(-50%, -150%)' },
             { label: 'Financeiro', top: '50%', right: '0', transform: 'translate(150%, -50%)' },
             { label: 'RH', bottom: '0', left: '50%', transform: 'translate(-50%, 150%)' },
             { label: 'Operações', top: '50%', left: '0', transform: 'translate(-150%, -50%)' },
             { label: 'Estoque', top: '20%', left: '20%', transform: 'translate(-100%, -100%)' },
           ].map((item, index) => (
             <div key={index} style={{
               position: 'absolute',
               top: item.top,
               left: item.left,
               right: item.right,
               bottom: item.bottom,
               transform: item.transform,
               backgroundColor: 'white',
               border: '1px solid #e2e8f0',
               padding: '1rem 1.5rem',
               borderRadius: '12px',
               fontWeight: 600,
               color: '#334155',
               boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
               zIndex: 5
             }}>
               {item.label}
             </div>
           ))}

           {/* Connecting Lines */}
           <div style={{ position: 'absolute', width: '300px', height: '300px', border: '1px dashed #cbd5e1', borderRadius: '50%', zIndex: 1 }}></div>
           <div style={{ position: 'absolute', width: '450px', height: '450px', border: '1px dashed #e2e8f0', borderRadius: '50%', zIndex: 1 }}></div>
        </div>
      </section>

      {/* 🔷 BLOCO: “O QUE É O NEXOPRO” */}
      <section style={{ padding: '8rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '6rem', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', color: '#0f172a' }}>O que é o NEXOPRO</h3>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#475569' }}>
              O NEXOPRO não é apenas um sistema. <br/>
              Ele é um ecossistema onde empresas, departamentos e pessoas trabalham de forma integrada, cada um com seu espaço, sua função e sua visão.
            </p>
          </div>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
              <div style={{ marginBottom: '1rem', color: '#0f172a' }}><Icons.Building /></div>
              <div style={{ fontWeight: 600 }}>Multi-empresa</div>
            </div>
            <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
              <div style={{ marginBottom: '1rem', color: '#0f172a' }}><Icons.Activity /></div>
              <div style={{ fontWeight: 600 }}>Alta Performance</div>
            </div>
            <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
              <div style={{ marginBottom: '1rem', color: '#0f172a' }}><Icons.Shield /></div>
              <div style={{ fontWeight: 600 }}>Segurança Total</div>
            </div>
            <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
              <div style={{ marginBottom: '1rem', color: '#0f172a' }}><Icons.Check /></div>
              <div style={{ fontWeight: 600 }}>Simplicidade</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 BLOCO: TIPOS DE EMPRESAS */}
      <section style={{ padding: '6rem 5%', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '4rem', color: '#0f172a' }}>Criado para todos os tipos de empresas</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { icon: <Icons.Factory />, name: 'Industrial' },
              { icon: <Icons.ShoppingCart />, name: 'Comercial' },
              { icon: <Icons.Briefcase />, name: 'Serviços' },
              { icon: <Icons.Sprout />, name: 'Agropecuária' },
              { icon: <Icons.Hammer />, name: 'Extrativista' },
            ].map((type, i) => (
              <div key={i} style={{ 
                backgroundColor: 'white', 
                padding: '2rem 1.5rem', 
                borderRadius: '12px', 
                width: '180px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{ color: '#475569' }}>{type.icon}</div>
                <div style={{ fontWeight: 600, color: '#334155' }}>{type.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 BLOCO: DEPARTAMENTOS COMO SISTEMAS */}
      <section style={{ padding: '8rem 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Cada departamento funciona como um sistema próprio</h3>
          <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
            No NEXOPRO, cada setor tem seu próprio painel, suas próprias informações e sua própria rotina — tudo conectado com segurança.
          </p>
          <div style={{ 
            height: '300px', 
            background: 'linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%)', 
            borderRadius: '16px', 
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            fontWeight: 500
          }}>
            [Visualização Abstrata dos Dashboards Conectados]
          </div>
        </div>
      </section>

      {/* 🔷 BLOCO: SEGURANÇA E CONTROLE */}
      <section style={{ padding: '8rem 5%', backgroundColor: '#1e293b', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '4rem' }}>Segurança, controle e confiança</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { icon: <Icons.Lock />, text: 'Acesso por permissão' },
              { icon: <Icons.Activity />, text: 'Auditoria completa' },
              { icon: <Icons.Building />, text: 'Empresas isoladas' },
              { icon: <Icons.Shield />, text: 'Criptografia ponta a ponta' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ 
                  width: '64px', height: '64px', backgroundColor: 'rgba(255,255,255,0.1)', 
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 500, color: '#e2e8f0' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 BLOCO: COMO FUNCIONA A EXPERIÊNCIA */}
      <section style={{ padding: '8rem 5%', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a' }}>Comece sem compromisso</h3>
          <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '4rem' }}>
            Você tem 30 dias para conhecer o NEXOPRO por dentro.<br/>
            Sem cartão. Sem pressão. Sem surpresas.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '1rem' }}>1</div>
              <div style={{ fontWeight: 600, color: '#334155' }}>Crie sua conta</div>
            </div>
            <div style={{ color: '#cbd5e1' }}><Icons.ArrowRight /></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '1rem' }}>2</div>
              <div style={{ fontWeight: 600, color: '#334155' }}>Cadastre sua empresa</div>
            </div>
            <div style={{ color: '#cbd5e1' }}><Icons.ArrowRight /></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '1rem' }}>3</div>
              <div style={{ fontWeight: 600, color: '#334155' }}>Entre no ecossistema</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 BLOCO FINAL (CALL TO ACTION) */}
      <section style={{ padding: '8rem 5%', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '3rem', letterSpacing: '-1px' }}>
          A NEXOPRO não cresce. Ela faz você crescer.
        </h2>
        <Link href="/cadastro" style={{ 
          textDecoration: 'none', 
          backgroundColor: '#0f172a', 
          color: 'white', 
          padding: '1.2rem 3rem', 
          borderRadius: '8px',
          fontSize: '1.25rem',
          fontWeight: 600,
          display: 'inline-block',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}>
          Iniciar experiência gratuita
        </Link>
      </section>

      <Footer />
    </div>
  );
}