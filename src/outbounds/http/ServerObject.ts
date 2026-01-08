import { z } from 'zod/v4';
import { AccountObject } from './AccountObject.js';

export const ServerObject = z.object({
    address: z.string(),
    port: z.number(),
    users: z.array(AccountObject).optional(),
});

export type ServerObject = z.infer<typeof ServerObject>;
