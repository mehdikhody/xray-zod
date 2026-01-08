import { z } from 'zod/v4';
import { InboundConfigurationObject } from './InboundConfigurationObject.js';

export const InboundShadowsocksObject = z.object({
    protocol: z.literal('shadowsocks'),
    settings: InboundConfigurationObject,
});

export type InboundShadowsocksObject = z.infer<typeof InboundShadowsocksObject>;
