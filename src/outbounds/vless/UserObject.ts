import { z } from 'zod/v4';

export const UserObject = z.object({
    id: z.string().uuid(),
    encryption: z.literal('none'),
    flow: z.string().optional(),
    level: z.number().optional(),
});

export type UserObject = z.infer<typeof UserObject>;
