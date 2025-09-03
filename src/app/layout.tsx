import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'Mayer Frieg - Full-Stack Developer & Software Engineer',
  description: 'Portfolio of Mayer Frieg, a passionate Full-Stack Developer and Software Engineer specializing in modern web technologies, mobile applications, and scalable software solutions.',
  keywords: ['Full-Stack Developer', 'Software Engineer', 'React', 'Next.js', 'Mobile Development', 'Portfolio'],
  authors: [{ name: 'Mayer Frieg' }],
  creator: 'Mayer Frieg',
  publisher: 'Mayer Frieg',
  robots: 'index, follow',
  openGraph: {
    title: 'Mayer Frieg - Full-Stack Developer & Software Engineer',
    description: 'Portfolio of Mayer Frieg, a passionate Full-Stack Developer and Software Engineer.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayer Frieg - Full-Stack Developer & Software Engineer',
    description: 'Portfolio of Mayer Frieg, a passionate Full-Stack Developer and Software Engineer.',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        
        {/* Performance optimizations */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Resource hints */}
        <link rel="preload" href="/images/AutoInsight.png" as="image" />
        <link rel="preload" href="/images/Taskify.png" as="image" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
