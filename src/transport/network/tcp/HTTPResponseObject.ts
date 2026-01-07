import { z } from 'zod/v4';

export const HTTPResponseObject = z.object({
    version: z.string().optional(),
    status: z.string().optional(),
    reason: z.string().optional(),
    headers: z.record(z.string(), z.array(z.string())).optional(),
});

export type HTTPResponseObject = z.infer<typeof HTTPResponseObject>;
