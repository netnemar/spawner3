"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function SpawnPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-2 py-8">
      <button
        className="mb-8 text-white/80 hover:text-spawner-green underline text-lg"
        onClick={() => router.back()}
      >
        [go back]
      </button>
      <form className="w-full max-w-md bg-white/5 rounded-xl p-6 flex flex-col gap-4 shadow-lg">
        <label className="text-white/80 text-sm">name
          <input className="mt-1 w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-white focus:border-spawner-green outline-none" type="text" placeholder="" required />
        </label>
        <label className="text-white/80 text-sm">ticker
          <div className="flex mt-1">
            <span className="inline-flex items-center px-3 rounded-l-md bg-black/60 border border-r-0 border-white/20 text-white/50">$</span>
            <input className="w-full rounded-r-md bg-black/60 border border-white/20 px-3 py-2 text-white focus:border-spawner-green outline-none" type="text" placeholder="" required />
          </div>
        </label>
        <label className="text-white/80 text-sm">description
          <textarea className="mt-1 w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-white focus:border-spawner-green outline-none resize-none" rows={3} />
        </label>
        <label className="text-white/80 text-sm">image or video
          <div className="mt-1 flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-md bg-black/60 py-6 cursor-pointer hover:border-spawner-green transition" onClick={() => fileInputRef.current?.click()}>
            <svg className="w-8 h-8 mb-2 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0l-4 4m4-4l4 4" /></svg>
            <span className="text-white/40 mb-2">drag and drop an image or video</span>
            <button type="button" className="px-3 py-1 border border-white/40 rounded text-white/90 text-sm bg-black/40">select file</button>
            <input ref={fileInputRef} type="file" accept="image/*,video/*" className="hidden" />
          </div>
        </label>
        <details className="text-white/80 text-sm">
          <summary className="cursor-pointer select-none">hide more options ↑</summary>
          <div className="mt-2 flex flex-col gap-2">
            <input className="w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-white focus:border-spawner-green outline-none" type="text" placeholder="Telegram link (optional)" />
            <input className="w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-white focus:border-spawner-green outline-none" type="text" placeholder="Website link (optional)" />
            <input className="w-full rounded-md bg-black/60 border border-white/20 px-3 py-2 text-white focus:border-spawner-green outline-none" type="text" placeholder="Twitter or X link (optional)" />
          </div>
        </details>
        <div className="text-xs text-white/40 mt-2">tip: coin data cannot be changed after creation</div>
        <button type="submit" className="mt-2 btn-primary w-full">create coin</button>
      </form>
    </div>
  )
} 