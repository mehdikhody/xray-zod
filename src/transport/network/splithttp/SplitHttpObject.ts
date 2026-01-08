import { z } from 'zod/v4';
import { XmuxObject } from './XmuxObject.js';

export const SplitHttpObject = z.object({
    path: z.string().optional(),
    host: z.string().optional(),
    headers: z.record(z.string(), z.string()).optional(),
    scMaxEachPostBytes: z.union([z.number(), z.string()]).optional(),
    scMaxConcurrentPosts: z.union([z.number(), z.string()]).optional(),
    scMinPostsIntervalMs: z.union([z.number(), z.string()]).optional(),
    noSSEHeader: z.boolean().optional(),
    xPaddingBytes: z.union([z.number(), z.string()]).optional(),
    xmux: XmuxObject.optional(),
});

export type SplitHttpObject = z.infer<typeof SplitHttpObject>;
