import { z } from 'zod/v4';

export const MuxObject = z.object({
    enabled: z.boolean().optional(),
    concurrency: z.union([z.literal(-1), z.number().min(1).max(1024)]),
    xudpConcurrency: z.number().min(-1).max(1024).optional(),
    xudpProxyUDP443: z.enum(['reject', 'allow', 'skip']).optional(),
});

export type MuxObject = z.infer<typeof MuxObject>;
