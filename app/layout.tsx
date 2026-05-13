import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Carlos Informática | Assistência Técnica e Manutenção de Computadores',
  description: 'Assistência técnica especializada em computadores, notebooks e impressoras. Manutenção, upgrade de hardware, formatação e muito mais. Peças à pronta entrega e garantia em todos os serviços.',
  keywords: ['assistência técnica', 'manutenção de computadores', 'reparo de notebooks', 'impressoras', 'upgrade de hardware', 'formatação', 'informática'],
  authors: [{ name: 'Carlos Informática' }],
  openGraph: {
    title: 'Carlos Informática | Assistência Técnica e Manutenção de Computadores',
    description: 'Assistência técnica especializada em computadores, notebooks e impressoras.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#4ade80',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
