import { z } from 'zod/v4';

export const NoiseObject = z.union([
    z.object({
        type: z.literal('base64'),
        packet: z.string().base64(),
        delay: z.union([z.string().regex(/^\d+-\d+$/), z.number()]).optional(),
    }),
    z.object({
        type: z.literal('rand'),
        packet: z.union([z.string().regex(/^\d+-\d+$/), z.string().regex(/^\d+$/)]),
        delay: z.union([z.string().regex(/^\d+-\d+$/), z.number()]).optional(),
    }),
    z.object({
        type: z.literal('str'),
        packet: z.string(),
        delay: z.union([z.string().regex(/^\d+-\d+$/), z.number()]).optional(),
    }),
]);

export type NoiseObject = z.infer<typeof NoiseObject>;
