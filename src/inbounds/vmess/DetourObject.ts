import { z } from 'zod/v4';

export const DetourObject = z.object({ to: z.string() });

export type DetourObject = z.infer<typeof DetourObject>;
