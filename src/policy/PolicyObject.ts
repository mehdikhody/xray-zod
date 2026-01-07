import { z } from 'zod/v4';
import { LevelPolicyObject } from './LevelPolicyObject';
import { SystemPolicyObject } from './SystemPolicyObject';

export const PolicyObject = z.object({
    levels: z.record(z.string(), LevelPolicyObject).optional(),
    system: SystemPolicyObject.optional(),
});

export type PolicyObject = z.infer<typeof PolicyObject>;
