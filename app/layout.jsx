import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi primer proyecto de Next.js',
  description: 'Es es mi primer proyecto de Next.js',
}



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <Navigation></Navigation>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
