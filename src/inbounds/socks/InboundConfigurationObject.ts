import { z } from 'zod/v4';
import { AccountObject } from '../http';

export const InboundConfigurationObject = z.object({
    auth: z.enum(['noauth', 'password']).optional(),
    accounts: z.array(AccountObject).optional(),
    udp: z.boolean().optional(),
    ip: z.string().optional(),
    userLevel: z.number().optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
