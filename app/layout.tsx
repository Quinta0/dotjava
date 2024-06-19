import { Work_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const work_sans = Work_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-work_sans',
})

// @ts-ignore
export default function Layout({ children }) {
    return (
        <html lang="en">

            <body className={work_sans.variable}>
            <Navigation/>
            {children}
            <Footer/>
            </body>

        </html>
    )
}
