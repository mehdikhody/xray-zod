import { z } from 'zod/v4';
import { LogObject } from './log';
import { ApiObject } from './api';
import { DnsObject } from './dns';
import { RoutingObject } from './routing';
import { PolicyObject } from './policy';
import { InboundObject } from './inbounds';
import { OutboundObject } from './outbounds';
import { StatsObject } from './stats';
import { ReverseObject } from './reverse';
import { FakeDNSObject } from './fakedns';
import { MetricsObject } from './metrics';
import { ObservatoryObject } from './observatory';
import { BurstObservatoryObject } from './burstObservatory';
import { TransportObject } from './transport';

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
