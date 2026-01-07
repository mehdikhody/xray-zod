import { z } from 'zod/v4';

export const HttpUpgradeObject = z.object({
    acceptProxyProtocol: z.boolean().optional(),
    path: z.string().optional(),
    host: z.string().optional(),
    headers: z.record(z.string(), z.string()).optional(),
});

export type HttpUpgradeObject = z.infer<typeof HttpUpgradeObject>;
