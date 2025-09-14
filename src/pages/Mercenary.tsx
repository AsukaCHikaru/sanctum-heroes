import { MERCENARIES, type Mercenary } from '../data/mercenary';
import { Layout } from '../components/Layout';
import { For } from 'solid-js';

const allianceHeavyInfantry = MERCENARIES.filter(
  (m) => m.faction === 'alliance' && m.class === '重步兵'
);
const undeadHeavyInfantry = MERCENARIES.filter(
  (m) => m.faction === 'undead' && m.class === '重步兵'
);
const allianceLightInfantry = MERCENARIES.filter(
  (m) => m.faction === 'alliance' && m.class === '輕步兵'
);
const undeadLightInfantry = MERCENARIES.filter(
  (m) => m.faction === 'undead' && m.class === '輕步兵'
);
const allianceCavalry = MERCENARIES.filter((m) => m.faction === 'alliance' && m.class === '騎兵');
const undeadCavalry = MERCENARIES.filter((m) => m.faction === 'undead' && m.class === '騎兵');
const allianceArcher = MERCENARIES.filter((m) => m.faction === 'alliance' && m.class === '弓兵');
const undeadArchers = MERCENARIES.filter((m) => m.faction === 'undead' && m.class === '弓兵');
const allianceMage = MERCENARIES.filter((m) => m.faction === 'alliance' && m.class === '法師');
const undeadMage = MERCENARIES.filter((m) => m.faction === 'undead' && m.class === '法師');

export const MercenaryPage = () => {
  return (
    <Layout>
      123
      <MercenaryList />
    </Layout>
  );
};

const MercenaryList = () => (
  <div class="flex justify-center gap-4">
    <div>
      <Mercenaries title="同盟軍重步兵" list={allianceHeavyInfantry} />
      <Mercenaries title="同盟軍輕步兵" list={allianceLightInfantry} />
      <Mercenaries title="同盟軍騎兵" list={allianceCavalry} />
      <Mercenaries title="同盟軍弓兵" list={allianceArcher} />
      <Mercenaries title="同盟軍法師" list={allianceMage} />
    </div>
    <div>
      <Mercenaries title="灼炎軍重步兵" list={undeadHeavyInfantry} />
      <Mercenaries title="灼炎軍輕步兵" list={undeadLightInfantry} />
      <Mercenaries title="灼炎軍騎兵" list={undeadCavalry} />
      <Mercenaries title="灼炎軍弓兵" list={undeadArchers} />
      <Mercenaries title="灼炎軍法師" list={undeadMage} />
    </div>
  </div>
);

const Mercenaries = ({ title, list }: { title: string; list: Mercenary[] }) => (
  <>
    <h3 class="text-amber-300 text-center">{title}</h3>
    <div class="flex justify-center">
      <For each={list}>
        {(m) => (
          <div>
            <a href={`/mercenary/`}>
              <img class="w-[64px] h-[64px]" src={`/assets/mercenaries/${m.icon}`} alt="" />
            </a>
          </div>
        )}
      </For>
    </div>
  </>
);
