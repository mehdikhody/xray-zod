import { z } from 'zod/v4';
import { NoneHeaderObject } from './NoneHeaderObject.js';
import { HttpHeaderObject } from './HttpHeaderObject.js';

export const TcpObject = z.object({
    acceptProxyProtocol: z.boolean().optional(),
    header: z.union([NoneHeaderObject, HttpHeaderObject]).optional(),
});

export type TcpObject = z.infer<typeof TcpObject>;
