import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <div className="flex h-screen w-full">
            <div className="flex-1 bg-background p-6">
                <div className="flex h-full flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Java Code Editor</h1>
                        <Button>Run</Button>
                    </div>
                    <div className="flex-1 rounded-md border border-input">
                        <div className="h-full w-full p-4 text-sm" />
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 flex-col bg-muted p-6">
                <h2 className="text-xl font-bold">Output</h2>
                <div className="flex-1 rounded-md border border-input p-4 text-sm">
                    <pre className="whitespace-pre-wrap">Hello, World!</pre>
                </div>
            </div>
        </div>
    )
}