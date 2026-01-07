import { z } from 'zod/v4';

export const LogObject = z.object({
    access: z.string().optional(),
    error: z.string().optional(),
    loglevel: z.enum(['debug', 'info', 'warning', 'error', 'none']).optional(),
    dnsLog: z.boolean().optional(),
    maskAddress: z.enum(['quarter', 'half', 'full']).optional(),
});

export type LogObject = z.infer<typeof LogObject>;
