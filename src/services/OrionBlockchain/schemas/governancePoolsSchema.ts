import { z } from 'zod';

const governancePoolsSchema = z.array(
  z.object({
    identifier: z.string(),
    chain: z.string(),
    platform: z.string(),
    logo: z.string(),
    pair: z.string(),
    lp_address: z.string(),
    farm_address: z.string(),
    pool_tokens: z.tuple([z.string(), z.string()]),
    pool_rewards: z.array(z.string()),
    tvl: z.string(),
    base_apr: z.number(),
    max_apr: z.number(),
    reward_per_period: z.string(),
    weight: z.string(),
    liquidity: z.string(),
  })
);

export default governancePoolsSchema;