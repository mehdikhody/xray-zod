import { z } from 'zod/v4';
import { InboundConfigurationObject } from './InboundConfigurationObject';

export const InboundDokodemoObject = z.object({
    protocol: z.literal('dokodemo-door'),
    settings: InboundConfigurationObject,
});

export type InboundDokodemoObject = z.infer<typeof InboundDokodemoObject>;
