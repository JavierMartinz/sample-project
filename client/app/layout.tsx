import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sample App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <h1>Using APP router</h1>
          
          {children}
      </body>
    </html>
  )
}
