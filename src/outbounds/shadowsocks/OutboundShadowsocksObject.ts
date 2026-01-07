import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject';

export const OutboundShadowsocksObject = z.object({
    protocol: z.literal('shadowsocks'),
    settings: OutboundConfigurationObject,
});

export type OutboundShadowsocksObject = z.infer<typeof OutboundShadowsocksObject>;
