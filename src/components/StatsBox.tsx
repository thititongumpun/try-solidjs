import { Component, createSignal, For } from "solid-js";
import { Stats } from "../types/stats";

type StatsBoxProps = {
  stats: Stats;
};

const StatsBox: Component<StatsBoxProps> = ({ stats }) => {
  return (
    <div class="rounded-md border-solid border p-5 border-black mt-5">
      <p class="text-3xl">
        #{stats.playerId}-{stats.playerName}
      </p>
      <p class="text-xl my-2">Win: {stats.wl.win}</p>
      <p class="text-xl my-2">Lose: {stats.wl.lose}</p>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
        <img
          class="rounded-lg w-20 h-20 md:w-44 md:h-36"
          src={stats.avatar}
          alt={stats.playerName}
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default StatsBox;
