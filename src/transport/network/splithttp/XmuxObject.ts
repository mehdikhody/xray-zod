import { z } from 'zod/v4';

export const XmuxObject = z.object({
    maxConcurrency: z.union([z.number(), z.string()]).optional(),
    maxConnections: z.union([z.number(), z.string()]).optional(),
    cMaxReuseTimes: z.union([z.number(), z.string()]).optional(),
    cMaxLifetimeMs: z.union([z.number(), z.string()]).optional(),
});

export type XmuxObject = z.infer<typeof XmuxObject>;
