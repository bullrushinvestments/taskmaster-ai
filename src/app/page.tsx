import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TaskMaster AI',
  description: 'TaskMaster AI is an innovative task automation platform powered by AI that helps small businesses streamline their workflows with personalized automation scripts and no-code tools.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">TaskMaster AI</h1>
      <p className="mt-4 text-lg">TaskMaster AI is an innovative task automation platform powered by AI that helps small businesses streamline their workflows with personalized automation scripts and no-code tools.</p>
    </main>
  )
}
