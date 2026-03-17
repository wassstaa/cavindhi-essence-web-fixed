import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cavindhi Essence - Premium Perfume',
  description: 'Koleksi parfum premium Extrait de Parfum dengan aroma yang meninggalkan kesan mendalam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
