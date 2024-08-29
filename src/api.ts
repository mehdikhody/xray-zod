import { z } from 'zod';

export const ApiObject = z.object({
    tag: z.string(),
    listen: z.string().optional(),
    services: z.array(
        z.enum([
            'HandlerService',
            'RoutingService',
            'LoggerService',
            'StatsService',
            'ReflectionService',
        ]),
    ),
});

export type ApiObject = z.infer<typeof ApiObject>;
