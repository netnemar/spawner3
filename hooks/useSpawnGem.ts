'use client'

import { useCallback } from 'react'

export function useSpawnGem() {
  const handleSpawnGem = useCallback(async () => {
    // TODO: Implement gem spawning logic
    console.log('Spawning gem...')
  }, [])

  return {
    handleSpawnGem
  }
} 