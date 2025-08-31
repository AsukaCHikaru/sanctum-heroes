import { For } from 'solid-js';
import { HERO, type HeroData } from '../data/hero';

const allianceGenerals = HERO.filter((hero) => hero.faction === 'alliance' && hero.type === 'str');
const allianceAssassins = HERO.filter((hero) => hero.faction === 'alliance' && hero.type === 'agi');
const allianceCommanders = HERO.filter(
  (hero) => hero.faction === 'alliance' && hero.type === 'int'
);
const undeadGenerals = HERO.filter((hero) => hero.faction === 'undead' && hero.type === 'str');
const undeadAssassins = HERO.filter((hero) => hero.faction === 'undead' && hero.type === 'agi');
const undeadCommanders = HERO.filter((hero) => hero.faction === 'undead' && hero.type === 'int');

export const HeroList = () => {
  return (
    <div class="w-full">
      <div class="grid grid-cols-3 w-full text-center">
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
      <div class="grid grid-cols-3 w-full">
        <div>
          <h3>不死軍將軍</h3>
          <List heroes={undeadGenerals} />
        </div>
        <div>
          <h3>不死軍刺客</h3>
          <List heroes={undeadAssassins} />
        </div>
        <div>
          <h3>不死軍指揮官</h3>
          <List heroes={undeadCommanders} />
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
          <div>
            {hero.name.en}
            {hero.title.en}
          </div>
        )}
      </For>
    </div>
  );
};
