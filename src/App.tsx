import { For, createSignal, onMount, createEffect, Component } from "solid-js";
import axios from "axios";
import StatsBox from "./components/StatsBox";

const API = import.meta.env.VITE_DOTA2_API as string;

const fetchStats = async () => await axios.get(API);

const App: Component = () => {
  const [stats, setStats] = createSignal(null);

  onMount(async () => {
    setStats((await fetchStats()).data);
  });

  return (
    <div class="flex flex-col justify-center items-center p-10">
      <h2 class="font-medium text-4xl my-5">Dota2 Stats</h2>
      <div class="w-fit h-full grid grid-cols-1 lg:grid-cols-2">
        <For each={stats()} fallback={<p>Loading...</p>}>
          {(stat) => (
            <div>
              <StatsBox stats={stat} />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default App;
