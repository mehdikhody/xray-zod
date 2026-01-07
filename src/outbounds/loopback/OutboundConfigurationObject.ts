import { z } from 'zod/v4';

export const OutboundConfigurationObject = z.object({ inboundTag: z.string() });

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
