import { z } from 'zod/v4';

export const BalancerObject = z.object({
    tag: z.string(),
    selector: z.array(z.string()).optional(),
});

export type BalancerObject = z.infer<typeof BalancerObject>;
