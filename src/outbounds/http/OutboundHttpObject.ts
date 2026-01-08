import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject.js';

export const OutboundHttpObject = z.object({
    protocol: z.literal('http'),
    settings: OutboundConfigurationObject,
});

export type OutboundHttpObject = z.infer<typeof OutboundHttpObject>;
