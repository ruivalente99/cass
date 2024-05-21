import React from "react";
import {
  SiGithub,
  SiGithubcopilot,
  SiGooglebard,
  SiMicrosoftbing,
  SiOpenai,
  SiPlanetscale,
  SiPrisma,
  SiServerfault,
  SiSupabase,
  SiZapier,
} from "react-icons/si";
import { Block } from "./Block";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const IntegrationsBlock = () => (
  <Block className="col-span-3 overflow-hidden md:col-span-2">
    <CardTitle>Integrate with everything</CardTitle>
    <CardSubtitle>
      Self-host your data, connect to your favorite tools, and build with the best-in-class technologies.
    </CardSubtitle>

    <div className="relative -mx-6 -mb-6 mt-6 grid grid-cols-3 place-content-center rounded-t-none border-t-2 border-zinc-900">
      <div className="grid w-full place-content-center border-r-2 border-zinc-900 bg-zinc-900 py-8 text-white">
        <SiServerfault className="text-4xl" />
      </div>
      <div className="grid w-full place-content-center border-r-2 border-zinc-900 bg-emerald-500 py-8 text-white">
        <SiOpenai className="text-4xl" />
      </div>
      <div className="grid w-full place-content-center bg-pink-500 py-8 text-white">
        <SiGooglebard className="text-4xl" />
      </div>

      <div className="grid w-full place-content-center border-r-2 border-t-2 border-zinc-900 bg-blue-500 py-8 text-white">
        <SiGithubcopilot className="text-4xl" />
      </div>
      <div className="grid w-full place-content-center border-r-2 border-t-2 border-zinc-900 bg-orange-500 py-8 text-white">
        <SiMicrosoftbing className="text-4xl" />
      </div>
      <div className="grid w-full place-content-center border-t-2 border-zinc-900 bg-white py-8">
        <span className="text-black">Any Opensource</span>
      </div>
    </div>
  </Block>
);
