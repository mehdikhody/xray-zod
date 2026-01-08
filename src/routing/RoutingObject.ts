import { z } from 'zod/v4';
import { RuleObject } from './RuleObject.js';
import { BalancerObject } from './BalancerObject.js';

export const RoutingObject = z.object({
    domainStrategy: z.enum(['AsIs', 'IPIfNonMatch', 'IPOnDemand']).optional(),
    domainMatcher: z.enum(['hybrid', 'linear']).optional(),
    rules: z.array(RuleObject).optional(),
    balancers: z.array(BalancerObject).optional(),
});

export type RoutingObject = z.infer<typeof RoutingObject>;
