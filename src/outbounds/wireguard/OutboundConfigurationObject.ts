import { z } from 'zod/v4';
import { PeerObject } from './PeerObject';

export const OutboundConfigurationObject = z.object({
    secretKey: z.string(),
    address: z.array(z.string()).optional(),
    mtu: z.number().optional(),
    reserved: z.array(z.number()),
    workers: z.number().optional(),
    peers: z.array(PeerObject),
    domainStrategy: z
        .enum(['ForceIPv6v4', 'ForceIPv6', 'ForceIPv4v6', 'ForceIPv4', 'ForceIP'])
        .optional(),
});

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
