import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject.js';

export const OutboundLoopbackObject = z.object({
    protocol: z.literal('loopback'),
    settings: OutboundConfigurationObject,
});

export type OutboundLoopbackObject = z.infer<typeof OutboundLoopbackObject>;
