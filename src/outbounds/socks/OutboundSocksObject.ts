import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject.js';

export const OutboundSocksObject = z.object({
    protocol: z.literal('socks'),
    settings: OutboundConfigurationObject,
});

export type OutboundSocksObject = z.infer<typeof OutboundSocksObject>;
