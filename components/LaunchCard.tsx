'use client'

import Image from 'next/image'
import { useWallet } from '@solana/wallet-adapter-react'
import { useSpawnGem } from '@/hooks/useSpawnGem'
import { useEffect, useRef, useState } from 'react'

const MARKET_CAP_MIN = 7000
const MARKET_CAP_MAX = 20000
const HOLDERS_MIN = 8
const HOLDERS_MAX = 16
const AGE_MAX = 60

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function LaunchCard() {
  const { connected } = useWallet()
  const { handleSpawnGem } = useSpawnGem()

  // Animated stats
  const [age, setAge] = useState(0)
  const [holders, setHolders] = useState(HOLDERS_MIN)
  const [marketCap, setMarketCap] = useState(MARKET_CAP_MIN)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAge((prev) => (prev + 1) % (AGE_MAX + 1))
      setHolders((prev) => (prev >= HOLDERS_MAX ? HOLDERS_MIN : prev + 1))
      setMarketCap((prev) => (prev >= MARKET_CAP_MAX ? MARKET_CAP_MIN : prev + getRandomInt(100, 800)))
    }, 1000)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Clamp market cap
  const cap = Math.min(marketCap, MARKET_CAP_MAX)
  const capPercent = ((cap - MARKET_CAP_MIN) / (MARKET_CAP_MAX - MARKET_CAP_MIN)) * 100

  return (
    <div className="max-w-[480px] mx-auto flex space-x-2 mb-4">
      {/* Left: Main tab */}
      <div className="launch-tab flex-1 flex flex-col items-center justify-between min-w-0">
        <h1 className="text-2xl font-bold text-white mb-4 self-start">SPAWNER</h1>
        <div className="relative w-full aspect-square mb-4">
          <Image
            src="/launch.png"
            alt="Launch"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="space-y-2 mb-4 w-full">
          <div className="status-bar">
            <div className="status-bar-fill" style={{ width: `${capPercent}%` }} />
          </div>
          <div className="flex justify-between stats-text">
            <span>Holders: {holders}</span>
            <span>Market Cap: {Math.round(cap / 1000)}k</span>
            <span>Age: {age}s</span>
          </div>
        </div>
        {connected && (
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-lg mt-2"
          >
            Buy
          </a>
        )}
      </div>
      {/* Right: Empty tabs */}
      <div className="flex flex-col space-y-2 w-16">
        <div className="launch-tab flex items-center justify-center h-full min-h-[180px]">
          <span className="text-white/50 text-2xl">?</span>
        </div>
        <div className="launch-tab flex items-center justify-center h-full min-h-[180px]">
          <span className="text-white/50 text-2xl">?</span>
        </div>
      </div>
    </div>
  )
} 