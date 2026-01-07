import { z } from 'zod/v4';

export const NoneHeaderObject = z.object({ type: z.literal('none').optional() });

export type NoneHeaderObject = z.infer<typeof NoneHeaderObject>;
