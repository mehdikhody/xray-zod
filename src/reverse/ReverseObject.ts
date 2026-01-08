import { z } from 'zod/v4';
import { BridgeObject } from './BridgeObject.js';
import { PortalObject } from './PortalObject.js';

export const ReverseObject = z.object({
    bridges: z.array(BridgeObject).optional(),
    portals: z.array(PortalObject).optional(),
});

export type ReverseObject = z.infer<typeof ReverseObject>;
