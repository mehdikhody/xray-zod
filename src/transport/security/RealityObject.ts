import { z } from 'zod/v4';

export const RealityObject = z.object({
    show: z.boolean().optional(),
    dest: z.string(),
    xver: z.string().optional(),
    serverNames: z.array(z.string()),
    privateKey: z.string(),
    minClientVer: z.string().optional(),
    maxClientVer: z.string().optional(),
    maxTimeDiff: z.number().optional(),
    shortIds: z.array(z.string()),
    serverName: z.string().optional(),
    fingerprint: z.string(),
    shortId: z.string().optional(),
    publicKey: z.string(),
    spiderX: z.string().optional(),
});

export type RealityObject = z.infer<typeof RealityObject>;
