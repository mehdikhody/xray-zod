import { z } from 'zod/v4';

export const SockoptObject = z.object({
    mark: z.number().optional(),
    tcpFastOpen: z.union([z.number(), z.boolean()]).optional(),
    tproxy: z.enum(['redirect', 'tproxy', 'off']).optional(),
    domainStrategy: z.enum(['AsIs', 'UseIP', 'UseIPv4', 'UseIPv6']).optional(),
    dialerProxy: z.string().optional(),
    acceptProxyProtocol: z.boolean().optional(),
    tcpKeepAliveInterval: z.number().optional(),
    tcpCongestion: z.string().optional(),
    interface: z.string().optional(),
    tcpMptcp: z.boolean().optional(),
    tcpNoDelay: z.boolean().optional(),
    customSockopt: z.array(
        z.union([
            z.object({
                type: z.literal('str'),
                level: z.string().optional(),
                opt: z.string(),
                value: z.string(),
            }),
            z.object({
                type: z.literal('int'),
                level: z.string().optional(),
                opt: z.string(),
                value: z.number(),
            }),
        ]),
    ),
});

export type SockoptObject = z.infer<typeof SockoptObject>;
