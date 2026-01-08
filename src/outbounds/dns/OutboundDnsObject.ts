import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject.js';

export const OutboundDnsObject = z.object({
    protocol: z.literal('dns'),
    settings: OutboundConfigurationObject,
});

export type OutboundDnsObject = z.infer<typeof OutboundDnsObject>;
