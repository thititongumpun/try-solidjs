import { For, createSignal, onMount, createEffect, Component } from "solid-js";
import axios from "axios";
import StatsBox from "./components/StatsBox";

const fetchStats = async () =>
  await axios.get("https://tame-erin-sea-lion-tie.cyclic.app/stats"); // The API

const App: Component = () => {
  const [stats, setStats] = createSignal(null);

  onMount(async () => {
    setStats((await fetchStats()).data);
    console.log(stats());
  });

  return (
    <div class="flex flex-col justify-center items-center p-10">
      <h2 class="font-medium text-4xl my-5">Dota2 Stats</h2>
      <div class="w-fit">
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
