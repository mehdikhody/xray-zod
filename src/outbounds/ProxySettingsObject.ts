import { z } from 'zod/v4';

export const ProxySettingsObject = z.object({ tag: z.string() });

export type ProxySettingsObject = z.infer<typeof ProxySettingsObject>;
