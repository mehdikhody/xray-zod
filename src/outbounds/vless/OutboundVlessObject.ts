import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject';

export const OutboundVlessObject = z.object({
    protocol: z.literal('vless'),
    settings: OutboundConfigurationObject,
});

export type OutboundVlessObject = z.infer<typeof OutboundVlessObject>;
