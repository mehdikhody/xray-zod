import { z } from 'zod/v4';
import { ClientObject } from '../shadowsocks/index.js';
import { DetourObject } from './DetourObject.js';
import { DefaultObject } from './DefaultObject.js';

export const InboundConfigurationObject = z.object({
    clients: z.array(ClientObject),
    detour: DetourObject.optional(),
    default: DefaultObject.optional(),
});

export type InboundConfigurationObject = z.infer<typeof InboundConfigurationObject>;
