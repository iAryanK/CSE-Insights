import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';

export const POST = async (request) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator').sort({ createdAt: -1 });

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("failed to fetch all prompts", { status: 500 })
    }
}