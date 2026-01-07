import { z } from 'zod/v4';
import { ProxySettingsObject } from './ProxySettingsObject';
import { MuxObject } from './MuxObject';
import { StreamSettingsObject } from '../transport';
import { OutboundBlackholeObject } from './blackhole';
import { OutboundDnsObject } from './dns';
import { OutboundFreedomObject } from './freedom';
import { OutboundHttpObject } from './http';
import { OutboundLoopbackObject } from './loopback';
import { OutboundShadowsocksObject } from './shadowsocks';
import { OutboundSocksObject } from './socks';
import { OutboundTrojanObject } from './trojan';
import { OutboundVlessObject } from './vless';
import { OutboundVmessObject } from './vmess';
import { OutboundWireguardObject } from './wireguard';

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
