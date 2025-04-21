import { runMemoryAgent } from "./agents";
async function main() {
    const chunks = await runMemoryAgent("what is agent parallelization");
    console.log("Memory chunk:", chunks);
    
}