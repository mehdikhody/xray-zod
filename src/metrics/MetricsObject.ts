import { z } from 'zod/v4';

export const MetricsObject = z.object({ tag: z.string() });

export type MetricsObject = z.infer<typeof MetricsObject>;
