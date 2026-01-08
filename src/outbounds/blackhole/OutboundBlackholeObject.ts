import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject.js';

export const OutboundBlackholeObject = z.object({
    protocol: z.literal('blackhole'),
    settings: OutboundConfigurationObject,
});

export type OutboundBlackholeObject = z.infer<typeof OutboundBlackholeObject>;
