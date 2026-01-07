import { z } from 'zod/v4';

export const PeerObject = z.object({
    endpoint: z.string(),
    publicKey: z.string(),
    preSharedKey: z.string().optional(),
    keepAlive: z.number().optional(),
    allowedIPs: z.array(z.string()).optional(),
});
