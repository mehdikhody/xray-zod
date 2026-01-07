import { z } from 'zod/v4';

export const DefaultObject = z.object({ level: z.number().optional() });

export type DefaultObject = z.infer<typeof DefaultObject>;
