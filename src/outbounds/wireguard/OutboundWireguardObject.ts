import { z } from 'zod/v4';
import { OutboundConfigurationObject } from './OutboundConfigurationObject.js';

export const OutboundWireguardObject = z.object({
    protocol: z.literal('wireguard'),
    settings: OutboundConfigurationObject,
});

export type OutboundWireguardObject = z.infer<typeof OutboundWireguardObject>;
