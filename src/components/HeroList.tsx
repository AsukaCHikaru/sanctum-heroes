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
        <div>
          <h3>同盟軍將軍</h3>
          <List heroes={allianceGenerals} />
        </div>
        <div>
          <h3>同盟軍刺客</h3>
          <List heroes={allianceAssassins} />
        </div>
        <div>
          <h3>同盟軍指揮官</h3>
          <List heroes={allianceCommanders} />
        </div>
      </div>
      <div class="grid grid-cols-3 w-full gap-4 mt-4">
        <div>
          <h3>天譴軍將軍</h3>
          <List heroes={undeadGenerals} />
        </div>
        <div>
          <h3>天譴軍刺客</h3>
          <List heroes={undeadAssassins} />
        </div>
        <div>
          <h3>天譴軍指揮官</h3>
          <List heroes={undeadCommanders} />
        </div>
      </div>
      <div class="grid grid-cols-3 w-full gap-4 mt-4">
        <div>
          <h3>中立將軍</h3>
          <List heroes={neutralGenerals} />
        </div>
        <div>
          <h3>中立刺客</h3>
          <List heroes={neutralAssassins} />
        </div>
        <div>
          <h3>中立指揮官</h3>
          <List heroes={neutralCommanders} />
        </div>
      </div>
    </div>
  );
};

const List = ({ heroes }: { heroes: HeroData[] }) => {
  return (
    <div class="flex flex-wrap">
      <For each={heroes}>
        {(hero) => (
          <A href={`/hero/${hero.title.en.toLowerCase().replace(/\s+/g, '-')}`}>
            <img src={`/src/assets/hero/${hero.icon}`} alt={hero.name.en} />
          </A>
        )}
      </For>
    </div>
  );
};
