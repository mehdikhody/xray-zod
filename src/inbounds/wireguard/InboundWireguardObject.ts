import { z } from 'zod/v4';
import { InboundConfigurationObject } from './InboundConfigurationObject.js';

export const InboundWireguardObject = z.object({
    protocol: z.literal('wireguard'),
    settings: InboundConfigurationObject,
});

export type InboundWireguardObject = z.infer<typeof InboundWireguardObject>;
