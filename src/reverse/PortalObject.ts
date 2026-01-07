import { z } from 'zod/v4';

export const PortalObject = z.object({ tag: z.string(), domain: z.string().optional() });

export type PortalObject = z.infer<typeof PortalObject>;
