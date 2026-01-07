import { z } from 'zod/v4';

export const FallbackObject = z.object({
    name: z.string().optional(),
    alpn: z.string().optional(),
    path: z.string().optional(),
    dest: z.union([z.string(), z.number()]),
    xver: z.number().optional(),
});

export type FallbackObject = z.infer<typeof FallbackObject>;
