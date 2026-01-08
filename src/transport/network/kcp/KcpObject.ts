import { z } from 'zod/v4';
import { HeaderObject } from './HeaderObject.js';

export const KcpObject = z.object({
    mtu: z.number().optional(),
    tti: z.number().optional(),
    uplinkCapacity: z.number().optional(),
    downlinkCapacity: z.number().optional(),
    congestion: z.boolean().optional(),
    readBufferSize: z.number().optional(),
    writeBufferSize: z.number().optional(),
    header: HeaderObject.optional(),
    seed: z.string().optional(),
});

export type KcpObject = z.infer<typeof KcpObject>;
