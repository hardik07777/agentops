import { scoutGreenhouse } from "./scout/greenhouse";
import { scoutLever } from "./scout/lever";
import { scoutYC } from "./scout/yc";

import { matchJobs } from "./matcher/matcher";
import { rankJobs } from "./ranker/ranker";

export async function runAgents(
  skills: string[]
) {
  const greenhouseJobs =
    await scoutGreenhouse();

  const leverJobs =
    await scoutLever();

  const ycJobs =
    await scoutYC();

  const allJobs = [
    ...greenhouseJobs,
    ...leverJobs,
    ...ycJobs,
  ];

  const matchedJobs =
    await matchJobs(
      allJobs,
      skills
    );

  const rankedJobs =
    rankJobs(matchedJobs);

  return rankedJobs;
}