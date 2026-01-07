import { z } from 'zod/v4';

export const UserObject = z.object({
    id: z.string().uuid(),
    security: z.enum(['aes-128-gcm', 'chacha20-poly1305', 'auto', 'none', 'zero']).optional(),
    level: z.number().optional(),
});

export type UserObject = z.infer<typeof UserObject>;
