import { z } from 'zod/v4';
import { InboundConfigurationObject } from './InboundConfigurationObject';

export const InboundVmessObject = z.object({
    protocol: z.literal('vmess'),
    settings: InboundConfigurationObject,
});

export type InboundVmessObject = z.infer<typeof InboundVmessObject>;
