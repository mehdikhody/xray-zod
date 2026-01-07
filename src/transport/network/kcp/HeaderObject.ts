import { z } from 'zod/v4';

export const HeaderObject = z.object({
    type: z.enum(['none', 'srtp', 'utp', 'wechat-video', 'dtls', 'wireguard']).optional(),
});

export type HeaderObject = z.infer<typeof HeaderObject>;
