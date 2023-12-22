import { Inter, Montserrat_Alternates } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { MdOutlineDeveloperMode } from "react-icons/md";
const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat_Alternates({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'Gabriel',
  description: 'CV ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;400&display=swap" rel="stylesheet"></link>

      </Head>
      <body className={montserrat.className}>
        {children}
        <footer className='col-span-2 h-60'></footer>
      </body>
    </html>
  )
}
