import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WindowManagerProvider } from '@/components/os/WindowManagerContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Furulie LLC - CyberWorld MMO',
  description: 'Cybersecurity-themed multiplayer MMO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WindowManagerProvider>
          {children}
        </WindowManagerProvider>
      </body>
    </html>
  );
}
