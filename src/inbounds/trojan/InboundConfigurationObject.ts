import { z } from 'zod/v4';
import { ClientObject } from '../shadowsocks/index.js';
import { FallbackObject } from '../../features/index.js';

export const InboundConfigurationObject = z.object({
    clients: z.array(ClientObject),
    fallbacks: z.array(FallbackObject).optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
