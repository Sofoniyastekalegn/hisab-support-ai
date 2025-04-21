import "dotenv/config";

import { Langbase } from "langbase";


const langbase = new Langbase({
    apiKey: pocess.env.LANGBASE_API_KEY!,
    
});

async function main() {
    const supportAgent = await langbase.pipes.create({
        name: `ai-support-agent`,
        description: `An AI agent to support users with thier queries`,
        messages: [
            {
                role: `system`,
                content: `you are helpful AI assistant`.
                you will assist users with their queries.
                Always enuse that you provide accurate and to the point clientInformation
            },
        ],
    });
    console.log("support agent:", supportAgent);

}
} 
main();