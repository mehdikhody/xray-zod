import { z } from 'zod/v4';
import { TcpObject } from './tcp';
import { KcpObject } from './kcp';
import { WebSocketObject } from './ws';
import { HttpObject } from './http';
import { GRPCObject } from './grpc';
import { HttpUpgradeObject } from './httpupgrade';
import { SplitHttpObject } from './splithttp';

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
