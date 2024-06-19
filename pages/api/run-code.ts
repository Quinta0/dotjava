import type { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";
import fs from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { code } = req.body;

            console.log("Received code:", code);

            const tempFilePath = path.join(process.cwd(), "temp.java");
            console.log("Temporary file path:", tempFilePath);

            fs.writeFileSync(tempFilePath, code);

            const compileCommand = `javac ${tempFilePath}`;
            const runCommand = `java -cp ${path.dirname(tempFilePath)} Temp`;

            console.log("Compile command:", compileCommand);
            console.log("Run command:", runCommand);

            exec(compileCommand, (compileError, compileStdout, compileStderr) => {
                if (compileError) {
                    console.error("Compilation error:", compileStderr);
                    res.status(500).json({ error: compileStderr });
                    return;
                }

                exec(runCommand, (runError, runStdout, runStderr) => {
                    if (runError) {
                        console.error("Execution error:", runStderr);
                        res.status(500).json({ error: runStderr });
                    } else {
                        console.log("Execution output:", runStdout);
                        res.status(200).json({ output: runStdout });
                    }
                });
            });
        } catch (error) {
            console.error("Handler error:", error);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
