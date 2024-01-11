import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';

export const GET = async (request) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator').sort({ createdAt: -1 });

        console.log("fetched all posts");

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("failed to fetch all prompts", { status: 500 })
    }
}