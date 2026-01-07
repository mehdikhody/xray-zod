import { z } from 'zod/v4';
import { PeerObject } from './PeerObject';

export const InboundConfigurationObject = z.object({
    secretKey: z.string(),
    peers: z.array(PeerObject),
    kernelMode: z.boolean().optional(),
    mtu: z.number().optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
