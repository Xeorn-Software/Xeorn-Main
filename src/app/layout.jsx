import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/theme/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Xeorn - Empowering Data Science",
  description: "Xeorn is a cutting-edge data science platform that helps businesses unlock the power of their data.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

