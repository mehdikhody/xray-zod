import { z } from 'zod/v4';
import { InboundConfigurationObject } from './InboundConfigurationObject.js';

export const InboundSocksObject = z.object({
    protocol: z.literal('socks'),
    settings: InboundConfigurationObject,
});

export type InboundSocksObject = z.infer<typeof InboundSocksObject>;
