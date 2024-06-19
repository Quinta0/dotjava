"use client";
import { useState, useEffect } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <html lang="en">
        <head>
            <style jsx global>{`
                    html {
                        scroll-behavior: smooth;
                    }
                `}</style>
        </head>
        <body className="flex flex-col min-h-[100dvh] scroll-smooth">
        <Navigation />
        <main className="flex-1">
            {children}
        </main>
        {showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary-dark transition"
            >
                ↑ Top
            </button>
        )}
        <Footer />
        </body>
        </html>
    )
}
