import { z } from 'zod/v4';
import { ServerObject } from './ServerObject';

export const OutboundConfigurationObject = z.object({ vnext: z.array(ServerObject) });

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
