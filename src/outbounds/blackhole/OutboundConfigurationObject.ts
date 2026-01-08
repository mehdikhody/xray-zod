import { z } from 'zod/v4';
import { ResponseObject } from './ResponseObject.js';

export const OutboundConfigurationObject = z.object({ response: ResponseObject.optional() });

export type OutboundConfigurationObject = z.infer<typeof OutboundConfigurationObject>;
