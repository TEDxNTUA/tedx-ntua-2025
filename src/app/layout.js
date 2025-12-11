// src/app/layout.js
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import ClientScrollProvider from './ClientScrollProvider';
// import MarketingModal from '@components/MarketingModal';
import './globals.css';

export const metadata = {
  title: 'TEDxNTUA 2025',
  description:
    'Join TEDxNTUA 2025 in Athens for inspiring talks on innovation and ideas that shape the future. Get tickets and explore speakers now!',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: './favicons/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: './favicons/favicon-16x16.png'
    }
  ]
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        {/* only inside here do we enable client‑side effects */}
        <ClientScrollProvider>
          <main className="max-w-[2000px] mx-auto">{children}</main>
          {/* <MarketingModal /> */}
        </ClientScrollProvider>
        <div id="portal"></div>
        <Footer />
      </body>
    </html>
  );
}
