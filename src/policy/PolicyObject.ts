import { z } from 'zod/v4';
import { LevelPolicyObject } from './LevelPolicyObject.js';
import { SystemPolicyObject } from './SystemPolicyObject.js';

export const PolicyObject = z.object({
    levels: z.record(z.string(), LevelPolicyObject).optional(),
    system: SystemPolicyObject.optional(),
});

export type PolicyObject = z.infer<typeof PolicyObject>;
