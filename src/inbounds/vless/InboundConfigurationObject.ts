import { z } from 'zod/v4';
import { ClientObject } from './ClientObject.js';
import { FallbackObject } from '../../features/index.js';

export const InboundConfigurationObject = z.object({
    clients: z.array(ClientObject),
    decryption: z.literal('none'),
    fallbacks: z.array(FallbackObject).optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
