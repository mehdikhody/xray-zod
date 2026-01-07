import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject';

export const OutboundTrojanObject = z.object({
    protocol: z.literal('trojan'),
    settings: OutboundConfigurationObject,
});

export type OutboundTrojanObject = z.infer<typeof OutboundTrojanObject>;
