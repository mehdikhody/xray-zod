import { z } from 'zod/v4';

export const ObservatoryObject = z.object({
    subjectSelector: z.array(z.string()),
    probeUrl: z.string(),
    probeInterval: z.string(),
    enableConcurrency: z.boolean(),
});

export type ObservatoryObject = z.infer<typeof ObservatoryObject>;
