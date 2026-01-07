import { z } from 'zod/v4';
import { ClientObject } from '../shadowsocks';
import { DetourObject } from './DetourObject';
import { DefaultObject } from './DefaultObject';

export const InboundConfigurationObject = z.object({
    clients: z.array(ClientObject),
    detour: DetourObject.optional(),
    default: DefaultObject.optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
