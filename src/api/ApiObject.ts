import { z } from 'zod/v4';

export const ApiObject = z.object({
    tag: z.string(),
    listen: z.string().optional(),
    services: z.array(
        z.enum([
            'HandlerService',
            'LoggerService',
            'StatsService',
            'RoutingService',
            'ReflectionService',
        ]),
    ),
});

export type ApiObject = z.infer<typeof ApiObject>;
