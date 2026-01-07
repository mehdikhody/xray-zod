import { z } from 'zod/v4';

export const CertificateObject = z.object({
    ocspStapling: z.number().optional(),
    oneTimeLoading: z.boolean().optional(),
    usage: z.enum(['encipherment', 'verify', 'issue']).optional(),
    buildChain: z.boolean().optional(),
    certificateFile: z.string().optional(),
    certificate: z.array(z.string()).optional(),
    keyFile: z.string().optional(),
    key: z.array(z.string()).optional(),
});

export type CertificateObject = z.infer<typeof CertificateObject>;
