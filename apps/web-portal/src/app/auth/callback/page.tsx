'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function CallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const user = searchParams.get('user');

    if (token && user) {
      try {
        localStorage.setItem('token', token);
        localStorage.setItem('user', decodeURIComponent(user));
        // Force a small delay to ensure storage is set before redirect
        setTimeout(() => {
          router.push('/dashboard');
        }, 100);
      } catch (e) {
        console.error('Error saving auth data:', e);
        router.push('/login?error=auth_failed');
      }
    } else {
      router.push('/login?error=invalid_callback');
    }
  }, [router, searchParams]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f2f5' 
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid #e2e8f0',
        borderTop: '5px solid #0ea5e9',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <h2 style={{ marginTop: '1.5rem', color: '#475569' }}>Autenticando...</h2>
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CallbackContent />
    </Suspense>
  );
}
