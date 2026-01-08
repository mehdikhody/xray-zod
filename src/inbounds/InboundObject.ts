import { z } from 'zod/v4';
import { SniffingObject } from './SniffingObject.js';
import { AllocateObject } from './AllocateObject.js';
import { StreamSettingsObject } from '../transport/index.js';
import { InboundDokodemoObject } from './dokodemo/index.js';
import { InboundHttpObject } from './http/index.js';
import { InboundShadowsocksObject } from './shadowsocks/index.js';
import { InboundVlessObject } from './vless/index.js';
import { InboundVmessObject } from './vmess/index.js';
import { InboundTrojanObject } from './trojan/index.js';
import { InboundWireguardObject } from './wireguard/index.js';

export const InboundObject = z
    .object({
        listen: z.string().optional(),
        port: z.union([z.number(), z.string()]),
        streamSettings: StreamSettingsObject.optional(),
        tag: z.string().optional(),
        sniffing: SniffingObject.optional(),
        allocate: AllocateObject.optional(),
    })
    .and(
        z.union([
            InboundDokodemoObject,
            InboundHttpObject,
            InboundShadowsocksObject,
            InboundVlessObject,
            InboundVmessObject,
            InboundTrojanObject,
            InboundWireguardObject,
        ]),
    );

export type InboundObject = z.infer<typeof InboundObject>;
