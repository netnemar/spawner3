import { NavBar } from '@/components/NavBar'
import { LaunchCard } from '@/components/LaunchCard'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 grid-pattern" />
      
      <NavBar />
      
      <div className="container mx-auto px-4 pt-32 pb-8">
        <LaunchCard />
      </div>

      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Spawner
      </footer>
    </main>
  )
} 