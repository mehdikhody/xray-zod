import { z } from 'zod/v4';

export const BridgeObject = z.object({ tag: z.string(), domain: z.string().optional() });

export type BridgeObject = z.infer<typeof BridgeObject>;
