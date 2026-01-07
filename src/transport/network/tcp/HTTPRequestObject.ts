import { z } from 'zod/v4';

export const HTTPRequestObject = z.object({
    version: z.string().optional(),
    method: z.string().optional(),
    path: z.array(z.string()).optional(),
    headers: z.record(z.string(), z.array(z.string())).optional(),
});

export type HTTPRequestObject = z.infer<typeof HTTPRequestObject>;
