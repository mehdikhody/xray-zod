import { z } from 'zod/v4';
import { BridgeObject } from './BridgeObject';
import { PortalObject } from './PortalObject';

export const ReverseObject = z.object({
    bridges: z.array(BridgeObject).optional(),
    portals: z.array(PortalObject).optional(),
});

export type ReverseObject = z.infer<typeof ReverseObject>;
