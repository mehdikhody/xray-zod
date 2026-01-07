import { z } from 'zod/v4';

export const HttpObject = z.object({
    host: z.array(z.string()).optional(),
    path: z.string().optional(),
    read_idle_timeout: z.number().optional(),
    health_check_timeout: z.number().optional(),
    method: z
        .enum(['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'])
        .optional(),
    headers: z.record(z.string(), z.array(z.string())).optional(),
});

export type HttpObject = z.infer<typeof HttpObject>;
