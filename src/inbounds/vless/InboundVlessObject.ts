import { z } from 'zod/v4';
import { InboundConfigurationObject } from './InboundConfigurationObject.js';

export const InboundVlessObject = z.object({
    protocol: z.literal('vless'),
    settings: InboundConfigurationObject,
});

export type InboundVlessObject = z.infer<typeof InboundVlessObject>;
