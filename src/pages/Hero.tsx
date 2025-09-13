import { createMemo, createSignal, For, Match, Show, Switch } from 'solid-js';
import { HeroList } from '../components/HeroList';
import { useParams } from '@solidjs/router';
import { HERO } from '../data/hero';
import { convertTitleToParam } from '../utils/stringUtil';
import { Layout } from '../components/Layout';

export const HeroPage = () => {
  const params = useParams();
  const [selectedAbility, setSelectedAbility] = createSignal(1);

  const hero = createMemo(() => {
    const title = params.title;
    const hero = HERO.find((h) => convertTitleToParam(h.title.en) === title);
    return hero;
  });

  return (
    <Layout>
      <Show when={hero()} fallback={null}>
        {(heroData) => (
          <div class="mb-10">
            <div class="flex items-center gap-2 text-stone-100">
              <img src={`/src/assets/hero/${heroData().icon}`} alt={heroData().title.en} class="" />
              <div>
                <h1 class="">
                  {heroData().name.zh} {heroData().name.en}
                </h1>
                <h2 class="">
                  {heroData().title.zh} {heroData().title.en}
                </h2>
              </div>
            </div>
            <p class="text-stone-300">{heroData().description}</p>
            <h3>Project by {heroData().author}</h3>
            <div class="flex">
              <For each={heroData().abilities}>
                {(ability, i) => (
                  <button onClick={() => setSelectedAbility(i() + 1)} class="">
                    <img src={`/src/assets/abilities/${ability.icon}`} alt={ability.name} />
                  </button>
                )}
              </For>
            </div>
            <Switch>
              <For each={heroData().abilities}>
                {(ability, i) => (
                  <Match when={selectedAbility() === i() + 1}>
                    <div>
                      <h2 class="text-stone-100">{ability.name}</h2>
                      <p class="text-stone-200">{ability.description}</p>
                      <For each={ability.stats}>{(stat) => <AbilityStat stat={stat} />}</For>
                    </div>
                  </Match>
                )}
              </For>
            </Switch>
          </div>
        )}
      </Show>
      <HeroList />
    </Layout>
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
    <div class="text-stone-200">
      <span class="text-stone-400">{stat.label}</span>:{' '}
      {Array.isArray(stat.value) ? stat.value.join(' / ') : stat.value}
    </div>
  );
};
