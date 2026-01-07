import { z } from 'zod/v4';

export const GRPCObject = z.object({
    serviceName: z.string(),
    multiMode: z.boolean().optional(),
    idle_timeout: z.number().optional(),
    health_check_timeout: z.number().optional(),
    permit_without_stream: z.boolean().optional(),
    initial_windows_size: z.number().optional(),
});

export type GRPCObject = z.infer<typeof GRPCObject>;
