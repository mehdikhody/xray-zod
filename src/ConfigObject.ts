import { z } from 'zod/v4';
import { LogObject } from './log/index.js';
import { ApiObject } from './api/index.js';
import { DnsObject } from './dns/index.js';
import { RoutingObject } from './routing/index.js';
import { PolicyObject } from './policy/index.js';
import { InboundObject } from './inbounds/index.js';
import { OutboundObject } from './outbounds/index.js';
import { StatsObject } from './stats/index.js';
import { ReverseObject } from './reverse/index.js';
import { FakeDNSObject } from './fakedns/index.js';
import { MetricsObject } from './metrics/index.js';
import { ObservatoryObject } from './observatory/index.js';
import { BurstObservatoryObject } from './burstObservatory/index.js';
import { TransportObject } from './transport/index.js';

export const ConfigObject = z.object({
    log: LogObject.optional(),
    api: ApiObject.optional(),
    dns: DnsObject.optional(),
    routing: RoutingObject.optional(),
    policy: PolicyObject.optional(),
    inbounds: z.array(InboundObject).optional(),
    outbounds: z.array(OutboundObject).optional(),
    transport: TransportObject.optional(),
    stats: StatsObject.optional(),
    reverse: ReverseObject.optional(),
    fakedns: FakeDNSObject.optional(),
    metrics: MetricsObject.optional(),
    observatory: ObservatoryObject.optional(),
    burstObservatory: BurstObservatoryObject.optional(),
});

export type ConfigObject = z.infer<typeof ConfigObject>;
