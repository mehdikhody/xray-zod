import { z } from 'zod/v4';
import { HTTPRequestObject } from './HTTPRequestObject.js';
import { HTTPResponseObject } from './HTTPResponseObject.js';

export const HttpHeaderObject = z.object({
    type: z.literal('http').optional(),
    request: HTTPRequestObject.optional(),
    response: HTTPResponseObject.optional(),
});

export type HttpHeaderObject = z.infer<typeof HttpHeaderObject>;
