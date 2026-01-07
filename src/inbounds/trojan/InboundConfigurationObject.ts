import { z } from 'zod/v4';
import { ClientObject } from '../shadowsocks';
import { FallbackObject } from '../../features';

export const InboundConfigurationObject = z.object({
    clients: z.array(ClientObject),
    fallbacks: z.array(FallbackObject).optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
