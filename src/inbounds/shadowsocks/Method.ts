import { z } from 'zod/v4';

export const Method = z.enum([
    '2022-blake3-aes-128-gcm',
    '2022-blake3-aes-256-gcm',
    '2022-blake3-chacha20-poly1305',
    'aes-256-gcm',
    'aes-128-gcm',
    'chacha20-poly1305',
    'chacha20-ietf-poly1305',
    'xchacha20-poly1305',
    'xchacha20-ietf-poly1305',
    'plain',
    'none',
]);

export type Method = z.infer<typeof Method>;
