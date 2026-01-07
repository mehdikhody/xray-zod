import { z } from 'zod/v4';

export const FragmentObject = z.object({
    packets: z.enum(['1-3', 'tlshello']),
    length: z.string().regex(/^\d+-\d+$/),
    interval: z.string().regex(/^\d+-\d+$/),
});

export type FragmentObject = z.infer<typeof FragmentObject>;
