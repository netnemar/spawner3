import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WalletProvider } from '@/components/WalletProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spawner - Solana Launchpad',
  description: 'Launch your Solana project with Spawner',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Spawner - Solana Launchpad',
    description: 'Launch your Solana project with Spawner',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen`}>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  )
} 