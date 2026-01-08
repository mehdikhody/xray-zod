import { z } from 'zod/v4';
import { InboundConfigurationObject } from './InboundConfigurationObject.js';

export const InboundHttpObject = z.object({
    protocol: z.literal('http'),
    settings: InboundConfigurationObject,
});

export type InboundHttpObject = z.infer<typeof InboundHttpObject>;
