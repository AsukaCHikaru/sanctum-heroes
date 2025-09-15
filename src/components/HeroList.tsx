import { For } from 'solid-js';
import { HERO, type HeroData } from '../data/hero';
import { A } from '@solidjs/router';

const allianceGenerals = HERO.filter((hero) => hero.faction === 'alliance' && hero.type === 'str');
const allianceAssassins = HERO.filter((hero) => hero.faction === 'alliance' && hero.type === 'agi');
const allianceCommanders = HERO.filter(
  (hero) => hero.faction === 'alliance' && hero.type === 'int'
);
const undeadGenerals = HERO.filter((hero) => hero.faction === 'undead' && hero.type === 'str');
const undeadAssassins = HERO.filter((hero) => hero.faction === 'undead' && hero.type === 'agi');
const undeadCommanders = HERO.filter((hero) => hero.faction === 'undead' && hero.type === 'int');

const neutralGenerals = HERO.filter((hero) => hero.faction === 'neutral' && hero.type === 'str');
const neutralAssassins = HERO.filter((hero) => hero.faction === 'neutral' && hero.type === 'agi');
const neutralCommanders = HERO.filter((hero) => hero.faction === 'neutral' && hero.type === 'int');

export const HeroList = () => {
  return (
    <div class="w-full text-center text-amber-300">
      <div class="grid grid-cols-3 w-full gap-4">
        <List title="同盟軍將軍" heroes={allianceGenerals} />
        <List title="同盟軍刺客" heroes={allianceAssassins} />
        <List title="同盟軍指揮官" heroes={allianceCommanders} />
      </div>
      <div class="grid grid-cols-3 w-full gap-4">
        <List title="天譴軍將軍" heroes={undeadGenerals} />
        <List title="天譴軍刺客" heroes={undeadAssassins} />
        <List title="天譴軍指揮官" heroes={undeadCommanders} />
      </div>
      <div class="grid grid-cols-3 w-full gap-4 mt-4">
        <List title="中立將軍" heroes={neutralGenerals} />
        <List title="中立刺客" heroes={neutralAssassins} />
        <List title="中立指揮官" heroes={neutralCommanders} />
      </div>
    </div>
  );
};

const List = ({ title, heroes }: { title: string; heroes: HeroData[] }) => {
  return (
    <div>
      <h3 class="text-lg my-2">{title}</h3>
      <div class="flex flex-wrap">
        <For each={heroes}>
          {(hero) => (
            <A href={`/hero/${hero.title.en.toLowerCase().replace(/\s+/g, '-')}`}>
              <img src={`/assets/hero/${hero.icon}`} alt={hero.name.en} />
            </A>
          )}
        </For>
      </div>
    </div>
  );
};
