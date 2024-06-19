import Link from "next/link";
import JavaContent from "../app/java_tutorial.json";
import {JSX, SVGProps} from "react";
export default function Navigation() {
    return (
        <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2 font-bold text-xl" prefetch={false}>
                    <CodeIcon className="w-6 h-6"/>
                    Dot Java
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    {JavaContent.sections.map((section, index) => (
                        <Link key={index} href={`#${section.id}`} className="hover:underline" prefetch={false}>
                            {section.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}