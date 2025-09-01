import { createMemo, createSignal, For, Match, Show, Switch } from 'solid-js';
import { HeroList } from '../components/HeroList';
import { useParams } from '@solidjs/router';
import { HERO } from '../data/hero';
import { convertTitleToParam } from '../utils/stringUtil';

export const HeroPage = () => {
  const params = useParams();
  const [selectedAbility, setSelectedAbility] = createSignal(1);

  const hero = createMemo(() => {
    const title = params.title;
    const hero = HERO.find((h) => convertTitleToParam(h.title.en) === title);
    return hero;
  });

  return (
    <div class="">
      <Show when={hero()} fallback={<div>Hero not found</div>}>
        {(heroData) => (
          <>
            <h1 class="">Hero Page</h1>
            <h2 class="">
              {heroData().name.zh} {heroData().name.en}
            </h2>
            <h2 class="">
              {heroData().title.zh} {heroData().title.en}
            </h2>
            <p>{heroData().description}</p>
            <div class="flex">
              <For each={heroData().abilities}>
                {(ability, i) => (
                  <button
                    onClick={() => setSelectedAbility(i() + 1)}
                    class="bg-sky-900 text-gray-200 p-1 rounded-sm border-0 cursor-pointer hover:bg-sky-700"
                  >
                    {ability.name}
                  </button>
                )}
              </For>
            </div>
            <Switch>
              <For each={heroData().abilities}>
                {(ability, i) => (
                  <Match when={selectedAbility() === i() + 1}>
                    <div class="">
                      <h2 class="">{ability.name}</h2>
                      <p class="">{ability.description}</p>
                      <For each={ability.stats}>{(stat) => <AbilityStat stat={stat} />}</For>
                    </div>
                  </Match>
                )}
              </For>
            </Switch>
          </>
        )}
      </Show>
      <HeroList />
    </div>
  );
};

const AbilityStat = ({
  stat,
}: {
  stat: {
    value: number[] | number;
    label: string;
  };
}) => {
  return (
    <div class="">
      <span>{stat.label}</span>: {Array.isArray(stat.value) ? stat.value.join(' / ') : stat.value}
    </div>
  );
};
