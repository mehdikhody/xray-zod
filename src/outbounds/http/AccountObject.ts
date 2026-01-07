import { z } from 'zod/v4';

export const AccountObject = z.object({ user: z.string(), pass: z.string() });

export type AccountObject = z.infer<typeof AccountObject>;
