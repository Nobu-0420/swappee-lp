import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export const metadata = {
  title: '次世代AI診断ツール Urban Pass (by Swappee) — 都市生活の最適解へ',
  description: 'Urban Pass — 都市生活の最適解へ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={notoSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
