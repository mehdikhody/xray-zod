import { z } from 'zod/v4';
import { TLSObject } from './TLSObject.js';
import { RealityObject } from './RealityObject.js';

export const SecurityObject = z.union([
    z.object({ security: z.literal('none').optional() }),
    z.object({ security: z.literal('tls'), tlsSettings: TLSObject.optional() }),
    z.object({ security: z.literal('reality'), realitySettings: RealityObject.optional() }),
]);

export type SecurityObject = z.infer<typeof SecurityObject>;
