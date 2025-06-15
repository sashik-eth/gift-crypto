import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto Gift',
  description: 'Send crypto gifts to your loved ones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full min-h-screen`}>
        <Providers>
          <main className="h-full min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
} 