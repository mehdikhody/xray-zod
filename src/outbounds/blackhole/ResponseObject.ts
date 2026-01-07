import { z } from 'zod/v4';

export const ResponseObject = z.object({ type: z.enum(['http', 'none']).optional() });

export type ResponseObject = z.infer<typeof ResponseObject>;
