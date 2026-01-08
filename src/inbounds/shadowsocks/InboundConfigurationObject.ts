import { z } from 'zod/v4';
import { ClientObject } from './ClientObject.js';
import { Method } from './Method.js';

export const InboundConfigurationObject = z.object({
    clients: z.array(ClientObject).optional(),
    password: z.string(),
    method: Method,
    level: z.number().optional(),
    email: z.string().optional(),
    network: z.enum(['tcp', 'udp', 'tcp,udp']).optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
