import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject.js';

export const OutboundTrojanObject = z.object({
    protocol: z.literal('trojan'),
    settings: OutboundConfigurationObject,
});

export type OutboundTrojanObject = z.infer<typeof OutboundTrojanObject>;
