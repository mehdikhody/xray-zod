import { z } from 'zod/v4';

export const SystemPolicyObject = z.object({
    statsInboundUplink: z.boolean().optional(),
    statsInboundDownlink: z.boolean().optional(),
    statsOutboundUplink: z.boolean().optional(),
    statsOutboundDownlink: z.boolean().optional(),
});

export type SystemPolicyObject = z.infer<typeof SystemPolicyObject>;
