import { z } from 'zod/v4';

export const StatsObject = z.object({});

export type StatsObject = z.infer<typeof StatsObject>;
