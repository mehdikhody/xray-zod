import { z } from 'zod/v4';

export const OutboundConfigurationObject = z.object({
    network: z.enum(['tcp', 'udp']).optional(),
    address: z.string().optional(),
    port: z.number().min(1).max(65535).optional(),
    nonIPQuery: z.enum(['drop', 'skip']).optional(),
});

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
