import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;