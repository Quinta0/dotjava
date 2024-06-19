import { JSX, SVGProps } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground py-6">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <p className="text-sm">&copy; 2024 Java Tutorials. All rights reserved.</p>
                <nav className="flex items-center gap-4">
                    <Dialog>
                        <DialogTrigger>Licence</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>MIT License</DialogTitle>
                                <DialogDescription>
                                    <p className="font-bold">Copyright (c) 2024 Quintavalle Pietro</p>
                                    <p className="mt-2">
                                        Permission is hereby granted, free of charge, to any person obtaining a copy
                                        of this software and associated documentation files (the &quot;Software&quot;), to deal
                                        in the Software without restriction, including without limitation the rights
                                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                        copies of the Software, and to permit persons to whom the Software is
                                        furnished to do so, subject to the following conditions:
                                    </p>
                                    <p>
                                        The above copyright notice and this permission notice shall be included in all
                                        copies or substantial portions of the Software.
                                    </p>
                                    <p className="mt-2">
                                        THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                        SOFTWARE.
                                    </p>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                    <a href="https://github.com/Quinta0" target="_blank" rel="noopener noreferrer"
                       className="hover:underline">
                        <GitHubIcon className="w-6 h-6"/>
                    </a>
                    <a href="mailto:0pietroquintavalle0@gmail.com" className="hover:underline">
                        <GmailIcon className="w-6 h-6"/>
                    </a>
                    <a href="https://www.linkedin.com/in/pietro-quintavalle-996b96267/" target="_blank"
                       rel="noopener noreferrer" className="hover:underline">
                        <LinkedInIcon className="w-6 h-6"/>
                    </a>
                </nav>
            </div>
        </footer>
    )
}

function GitHubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
        >
            <path d="M12 .5C5.48.5.5 5.48.5 12c0 5.08 3.29 9.35 7.85 10.86.58.1.79-.24.79-.54 0-.27-.01-.99-.01-1.94-3.19.69-3.86-1.54-3.86-1.54-.53-1.36-1.29-1.72-1.29-1.72-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.69 1.26 3.34.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.12-3.02 0 0 .97-.31 3.17 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.57.24 2.73.12 3.02.75.81 1.2 1.84 1.2 3.1 0 4.46-2.69 5.43-5.25 5.71.41.35.78 1.03.78 2.08 0 1.5-.01 2.72-.01 3.08 0 .3.21.65.8.54C20.71 21.35 24 17.08 24 12c0-6.52-4.98-11.5-12-11.5z"/>
        </svg>
    )
}

function GmailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
        >
            <path d="M12 12.713l11.985-8.677a.868.868 0 0 0-.491-.148H.506c-.177 0-.344.055-.491.148L12 12.713zm0 1.431L.035 5.596A.875.875 0 0 0 0 6.125v11.75c0 .478.387.875.875.875h22.25c.478 0 .875-.387.875-.875V6.125a.875.875 0 0 0-.035-.529L12 14.144z"/>
        </svg>
    )
}

function LinkedInIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
        >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-11h3v1.474c.809-1.161 2.201-1.974 3.5-1.974 2.481 0 4.5 2.019 4.5 4.5v7z"/>
        </svg>
    )
}
