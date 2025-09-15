import { createMemo, createSignal, For, Match, Show, Switch } from 'solid-js';
import { HeroList } from '../components/HeroList';
import { IconImage } from '../components/IconImage';
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
          <div class="py-8 sm:py-12">
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-stone-100 mb-6">
              <IconImage src={`/assets/hero/${heroData().icon}`} alt={heroData().title.en} />
              <div>
                <h1 class="text-2xl font-serif text-amber-300">
                  {heroData().name.zh} {heroData().name.en}
                </h1>
                <h2 class="text-stone-100">
                  {heroData().title.zh} {heroData().title.en}
                </h2>
              </div>
            </div>
            <p class="text-stone-300">{heroData().description}</p>
            <h3 class="text-amber-200 my-2">Project by {heroData().author}</h3>
            <div class="flex flex-wrap gap-2 sm:gap-4 py-2">
              <For each={heroData().abilities}>
                {(ability, i) => (
                  <button
                    onClick={() => setSelectedAbility(i() + 1)}
                    class={`cursor-pointer transition-all ${
                      selectedAbility() === i() + 1 ? 'bg-amber-300/70 p-2' : ' p-2'
                    }`}
                  >
                    <IconImage src={`/assets/abilities/${ability.icon}`} alt={ability.name} />
                  </button>
                )}
              </For>
            </div>
            <Switch>
              <For each={heroData().abilities}>
                {(ability, i) => (
                  <Match when={selectedAbility() === i() + 1}>
                    <div>
                      <h2 class="text-stone-100 text-xl font-serif my-2">{ability.name}</h2>
                      <p class="text-stone-200">說明：{ability.description}</p>
                      <p class="text-stone-200">效果：{ability.effect}</p>
                      {ability.type === 'passive' ? <p class="text-stone-400">被動技能</p> : null}
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
