'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ConnectWalletButton } from './ConnectWalletButton'

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Spawner" width={32} height={32} />
        <span className="text-white font-semibold text-xl">Spawner</span>
      </Link>

      <div className="flex items-center space-x-6">
        <Link
          href="https://x.com/spawnerapp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-spawner-green transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Link>
        
        <Link
          href="https://spawnerapp.gitbook.io/spawnerapp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-spawner-green transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </Link>

        <ConnectWalletButton />
      </div>
    </nav>
  )
} 