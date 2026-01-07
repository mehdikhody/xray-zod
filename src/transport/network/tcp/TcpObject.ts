import { z } from 'zod/v4';
import { NoneHeaderObject } from './NoneHeaderObject';
import { HttpHeaderObject } from './HttpHeaderObject';

export const TcpObject = z.object({
    acceptProxyProtocol: z.boolean().optional(),
    header: z.union([NoneHeaderObject, HttpHeaderObject]).optional(),
});

export type TcpObject = z.infer<typeof TcpObject>;
