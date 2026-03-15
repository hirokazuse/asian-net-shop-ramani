import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP, Noto_Sans_Thai } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans"
});

const notoSansThai = Noto_Sans_Thai({ 
  subsets: ["thai"],
  weight: ["400", "500"],
  variable: "--font-thai"
});

export const metadata: Metadata = {
  title: 'アジアンネットショップラマニ | Asian Net Shop Ramani',
  description: '日本とタイをつなぐ食のマーケット。タイ野菜、熱帯フルーツ、輸入食材を農場から直送。ノンカイ農園から新鮮なマンゴー、ドリアン等をお届けします。',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable} ${notoSansThai.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
