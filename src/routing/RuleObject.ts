import { z } from 'zod/v4';

export const RuleObject = z.object({
    domainMatcher: z.enum(['hybrid', 'linear']).optional(),
    type: z.literal('field'),
    domain: z.array(z.string()).optional(),
    ip: z.array(z.string()).optional(),
    port: z.union([z.number(), z.string()]).optional(),
    sourcePort: z.union([z.number(), z.string()]).optional(),
    network: z.enum(['tcp', 'udp', 'tcp,udp']).optional(),
    source: z.array(z.string()).optional(),
    user: z.array(z.string()).optional(),
    inboundTag: z.array(z.string()).optional(),
    protocol: z.array(z.enum(['http', 'tls', 'bittorrent'])).optional(),
    attrs: z.record(z.string(), z.string()).optional(),
    outboundTag: z.string().optional(),
    balancerTag: z.string().optional(),
});

export type RuleObject = z.infer<typeof RuleObject>;
