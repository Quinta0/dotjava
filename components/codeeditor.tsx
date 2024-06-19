"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
    const [code, setCode] = useState("// Write your Java code here");
    const [output, setOutput] = useState("");

    const handleRunCode = async () => {
        try {
            const response = await fetch("/api/run-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setOutput(result.output || result.error);
        } catch (error) {
            console.error("Error running code:", error);
            setOutput(error.message);
        }
    };

    return (
        <div className="flex h-screen w-full">
            <div className="flex-1 bg-background p-6">
                <div className="flex h-full flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Java Code Editor</h1>
                        <Button onClick={handleRunCode}>Run</Button>
                    </div>
                    <div className="flex-1 rounded-md border border-input">
                        <Editor
                            height="100%"
                            defaultLanguage="java"
                            defaultValue="// Write your Java code here"
                            value={code}
                            onChange={(value) => setCode(value || "")}
                            className="h-full w-full p-4 text-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-1/2 flex-col bg-muted p-6">
                <h2 className="text-xl font-bold">Output</h2>
                <div className="flex-1 rounded-md border border-input p-4 text-sm">
                    <pre className="whitespace-pre-wrap">{output}</pre>
                </div>
            </div>
        </div>
    );
}
