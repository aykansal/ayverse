import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ayverse - The one-stop metaverse',
  description: 'Experience the future of digital interaction with Ayverse, your all-in-one metaverse solution.',
  keywords: ['metaverse', 'virtual reality', 'Ayverse', 'digital world', 'VR'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

