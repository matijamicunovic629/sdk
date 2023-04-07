import { z } from 'zod';

const ratingSchema = z.object({
  info: z.object({
      weekly_boost_budget: z.string(),
      weekly_boost_budget_fmt: z.number(),
      time_left_for_the_reward: z.number(),
      time_left_for_the_reward_local: z.string(),
      time_left_for_the_reward_utc: z.string(),
      personal_info: z.any(),
  }),
  list: z.array(z.object({
    rank_id: z.number(),
    wallet: z.string(),
    staked_ve_orn: z.string(),
    staked_ve_orn_fmt: z.number(),
    weighted_volume: z.string(),
    weighted_volume_fmt: z.number(),
    total_weight: z.string(),
    total_weight_fmt: z.number(),
    reward: z.string(),
    reward_fmt: z.number()
  })),
});

export default ratingSchema;
