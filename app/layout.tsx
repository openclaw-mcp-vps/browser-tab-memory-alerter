import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tab Memory Alerter — Alert When Browser Tabs Exceed Memory Limit',
  description: 'Browser extension that monitors tab memory usage and alerts when approaching system limits. Perfect for developers, researchers, and power users with tab addiction.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="02c8dbd7-3588-49bf-bd4b-308e443fbe16"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
