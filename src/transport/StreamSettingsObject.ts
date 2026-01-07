import { z } from 'zod/v4';
import { SockoptObject } from './SockoptObject';
import { NetworkObject } from './network';
import { SecurityObject } from './security';

export const StreamSettingsObject = z
    .object({ sockopt: SockoptObject.optional() })
    .and(NetworkObject.optional())
    .and(SecurityObject.optional());

export type StreamSettingsObject = z.infer<typeof StreamSettingsObject>;
