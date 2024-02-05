import { z } from 'zod';

export const EnvironmentSchema = z
  .object({
    PORT: z.coerce.number(),
    REDIS_HOST: z.string(),
    REDIS_PORT: z.coerce.number(),
    POSTGRES_DB: z.string(),
    POSTGRES_USER: z.string(),
    POSTGRES_PASSWORD: z.string(),
  })
  .partial({ PORT: true });

export type EnvironmentVariables = z.infer<typeof EnvironmentSchema>;

export const configuration = (): EnvironmentVariables => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: parseInt(process.env.REDIS_PORT, 10),
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
});
