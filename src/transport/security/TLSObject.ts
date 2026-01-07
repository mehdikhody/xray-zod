import { z } from 'zod/v4';
import { CertificateObject } from '../CertificateObject';

export const TLSObject = z.object({
    serverName: z.string().optional(),
    rejectUnknownSni: z.boolean().optional(),
    alpn: z.array(z.string()).optional(),
    minVersion: z.array(z.string()).optional(),
    maxVersion: z.array(z.string()).optional(),
    cipherSuites: z.array(z.string()).optional(),
    allowInsecure: z.boolean().optional(),
    disableSystemRoot: z.boolean().optional(),
    enableSessionResumption: z.boolean().optional(),
    fingerprint: z.string().optional(),
    pinnedPeerCertificateChainSha256: z.array(z.string()).optional(),
    certificates: z.array(CertificateObject).optional(),
    masterKeyLog: z.string().optional(),
});

export type TLSObject = z.infer<typeof TLSObject>;
