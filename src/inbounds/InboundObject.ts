import { z } from 'zod/v4';
import { SniffingObject } from './SniffingObject';
import { AllocateObject } from './AllocateObject';
import { StreamSettingsObject } from '../transport';
import { InboundDokodemoObject } from './dokodemo';
import { InboundHttpObject } from './http';
import { InboundShadowsocksObject } from './shadowsocks';
import { InboundVlessObject } from './vless';
import { InboundVmessObject } from './vmess';
import { InboundTrojanObject } from './trojan';
import { InboundWireguardObject } from './wireguard';

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
