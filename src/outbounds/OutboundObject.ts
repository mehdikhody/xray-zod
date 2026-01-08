import { z } from 'zod/v4';
import { ProxySettingsObject } from './ProxySettingsObject.js';
import { MuxObject } from './MuxObject.js';
import { StreamSettingsObject } from '../transport/index.js';
import { OutboundBlackholeObject } from './blackhole/index.js';
import { OutboundDnsObject } from './dns/index.js';
import { OutboundFreedomObject } from './freedom/index.js';
import { OutboundHttpObject } from './http/index.js';
import { OutboundLoopbackObject } from './loopback/index.js';
import { OutboundShadowsocksObject } from './shadowsocks/index.js';
import { OutboundSocksObject } from './socks/index.js';
import { OutboundTrojanObject } from './trojan/index.js';
import { OutboundVlessObject } from './vless/index.js';
import { OutboundVmessObject } from './vmess/index.js';
import { OutboundWireguardObject } from './wireguard/index.js';

export const OutboundObject = z
    .object({
        sendThrough: z.string().optional(),
        tag: z.string(),
        streamSettings: StreamSettingsObject.optional(),
        proxySettings: ProxySettingsObject.optional(),
        mux: MuxObject.optional(),
    })
    .and(
        z.union([
            OutboundBlackholeObject,
            OutboundDnsObject,
            OutboundFreedomObject,
            OutboundHttpObject,
            OutboundLoopbackObject,
            OutboundShadowsocksObject,
            OutboundSocksObject,
            OutboundTrojanObject,
            OutboundVlessObject,
            OutboundVmessObject,
            OutboundWireguardObject,
        ]),
    );

export type OutboundObject = z.infer<typeof OutboundObject>;
