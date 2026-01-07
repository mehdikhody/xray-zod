import { z } from 'zod/v4';

export const ClientObject = z.object({
    password: z.string(),
    email: z.string().optional(),
    level: z.number().optional(),
});

export type ClientObject = z.infer<typeof ClientObject>;
