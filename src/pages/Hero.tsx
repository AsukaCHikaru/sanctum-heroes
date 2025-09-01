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
            <div class="flex items-center gap-2">
              <img src={heroData().icon} alt={heroData().title.en} class="" />
              <div>
                <h1 class="">
                  {heroData().name.zh} {heroData().name.en}
                </h1>
                <h2 class="">
                  {heroData().title.zh} {heroData().title.en}
                </h2>
              </div>
            </div>
            <p>{heroData().description}</p>
            <h3>Project by {heroData().author}</h3>
            <div class="flex">
              <For each={heroData().abilities}>
                {(ability, i) => (
                  <button onClick={() => setSelectedAbility(i() + 1)} class="">
                    <img src={ability.icon} alt={ability.name} />
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
