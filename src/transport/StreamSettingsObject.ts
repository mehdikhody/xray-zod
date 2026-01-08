import { z } from 'zod/v4';
import { SockoptObject } from './SockoptObject.js';
import { NetworkObject } from './network/index.js';
import { SecurityObject } from './security/index.js';

export const StreamSettingsObject = z
    .object({ sockopt: SockoptObject.optional() })
    .and(NetworkObject.optional())
    .and(SecurityObject.optional());

export type StreamSettingsObject = z.infer<typeof StreamSettingsObject>;
