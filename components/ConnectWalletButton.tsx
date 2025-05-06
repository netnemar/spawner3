'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import dynamic from 'next/dynamic'
import { useSpawnGem } from '@/hooks/useSpawnGem'
import { useRouter } from 'next/navigation'

const WalletMultiButton = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
)

export function ConnectWalletButton() {
  const { connected, publicKey } = useWallet()
  const { handleSpawnGem } = useSpawnGem()
  const router = useRouter()

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  if (connected && publicKey) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-white/70 text-sm">
          {formatAddress(publicKey.toString())}
        </span>
        <button
          onClick={() => router.push('/spawn')}
          className="btn-primary"
        >
          Spawn Gem
        </button>
        <WalletMultiButton className="btn-outline" />
      </div>
    )
  }

  return <WalletMultiButton className="btn-outline" />
} 