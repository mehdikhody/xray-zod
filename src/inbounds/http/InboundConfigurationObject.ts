import { z } from 'zod/v4';
import { AccountObject } from './AccountObject.js';

export const InboundConfigurationObject = z.object({
    accounts: z.array(AccountObject).optional(),
    allowTransparent: z.boolean().optional(),
    userLevel: z.number().optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
