import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Home from "@/pages/Home"
import Topic from "@/pages/Topic"

export default function App() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => setShowButton(window.scrollY > 300)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Navigation />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/topic/:id" element={<Topic />} />
                </Routes>
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
        </div>
    )
}
