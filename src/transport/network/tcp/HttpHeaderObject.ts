import { z } from 'zod/v4';
import { HTTPRequestObject } from './HTTPRequestObject';
import { HTTPResponseObject } from './HTTPResponseObject';

export const HttpHeaderObject = z.object({
    type: z.literal('http').optional(),
    request: HTTPRequestObject.optional(),
    response: HTTPResponseObject.optional(),
});

export type HttpHeaderObject = z.infer<typeof HttpHeaderObject>;
