import { z } from 'zod/v4';

export const DnsServerObject = z.object({
    address: z.string(),
    port: z.number().optional(),
    domains: z.array(z.string()).optional(),
    expectIPs: z.array(z.string()).optional(),
    skipFallback: z.boolean().optional(),
    clientIP: z.string().optional(),
});

export type DnsServer = z.infer<typeof DnsServerObject>;
