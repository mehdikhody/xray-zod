import { z } from 'zod/v4';
import { DnsServerObject } from './DnsServerObject';

export const DnsObject = z.object({
    hosts: z.record(z.string(), z.union([z.string(), z.array(z.string())])).optional(),
    servers: z.array(z.union([z.string(), DnsServerObject])),
    clientIp: z.string().optional(),
    queryStrategy: z.enum(['UseIP', 'UseIPv4', 'UseIPv6']).optional(),
    disableCache: z.boolean().optional(),
    disableFallback: z.boolean().optional(),
    disableFallbackIfMatch: z.boolean().optional(),
    tag: z.string().optional(),
});

export type DnsObject = z.infer<typeof DnsObject>;
