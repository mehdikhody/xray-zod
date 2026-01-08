import { z } from 'zod/v4';
import { TcpObject } from './tcp/index.js';
import { KcpObject } from './kcp/index.js';
import { WebSocketObject } from './ws/index.js';
import { HttpObject } from './http/index.js';
import { GRPCObject } from './grpc/index.js';
import { HttpUpgradeObject } from './httpupgrade/index.js';
import { SplitHttpObject } from './splithttp/index.js';

export const NetworkObject = z.union([
    z.object({ network: z.literal('tcp').optional(), tcpSettings: TcpObject }),
    z.object({ network: z.literal('kcp'), kcpSettings: KcpObject }),
    z.object({ network: z.literal('ws'), wsSettings: WebSocketObject }),
    z.object({ network: z.literal('http'), httpSettings: HttpObject }),
    z.object({ network: z.literal('grpc'), grpcSettings: GRPCObject }),
    z.object({ network: z.literal('httpupgrade'), httpupgradeSettings: HttpUpgradeObject }),
    z.object({ network: z.literal('splithttp'), splithttpSettings: SplitHttpObject }),
]);

export type NetworkObject = z.infer<typeof NetworkObject>;
