import { z } from 'zod/v4';
import { ServerObject } from '../http/index.js';

export const OutboundConfigurationObject = z.object({ servers: z.array(ServerObject) });

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
