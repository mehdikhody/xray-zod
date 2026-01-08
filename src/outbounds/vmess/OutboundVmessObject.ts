import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject.js';

export const OutboundVmessObject = z.object({
    protocol: z.literal('vmess'),
    settings: OutboundConfigurationObject,
});

export type OutboundVmessObject = z.infer<typeof OutboundVmessObject>;
