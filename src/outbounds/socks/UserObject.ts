import { z } from 'zod/v4';

export const UserObject = z.object({
    user: z.string(),
    pass: z.string(),
    level: z.number().optional(),
});

export type UserObject = z.infer<typeof UserObject>;
