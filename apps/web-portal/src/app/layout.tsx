'use client';

import React from 'react';
import { ToastProvider } from '../components/ui/Toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>NEXOPRO Ecosystem</title>
        <meta name="description" content="Enterprise Management System" />
      </head>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
