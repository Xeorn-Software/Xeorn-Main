import "./globals.css"
import { Inter } from 'next/font/google'
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Xeorn - Empowering Data Science",
  description: "Xeorn is a cutting-edge data science platform that helps businesses unlock the power of their data.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
