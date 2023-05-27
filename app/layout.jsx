import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi primer proyecto de Next.js',
  description: 'Es es mi primer proyecto de Next.js',
}

const links = [{
  label: "Home",
  route: "/"
}, {
  label: "Acerca de...",
  route: "/about"
}]

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              {links.map(({label, route}) => (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
