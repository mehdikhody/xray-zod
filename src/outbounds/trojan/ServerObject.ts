import { z } from 'zod/v4';

export const ServerObject = z.object({
    address: z.string(),
    port: z.number(),
    password: z.string(),
    email: z.string().optional(),
    level: z.number().optional(),
});

export type ServerObject = z.infer<typeof ServerObject>;
