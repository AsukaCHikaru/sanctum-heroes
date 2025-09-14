import { MERCENARIES, type Mercenary } from '../data/mercenary';
import { Layout } from '../components/Layout';
import { createMemo, For, Show } from 'solid-js';
import { useParams } from '@solidjs/router';

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
  const params = useParams();

  const mercenary = createMemo(() => {
    const id = params.id;
    const mercenary = MERCENARIES.find((m) => m.id === id);
    return mercenary;
  });

  return (
    <Layout>
      <Show when={mercenary()}>
        {(mercenaryData) => (
          <div>
            <div class="flex items-center gap-2">
              <img src={`/assets/mercenaries/${mercenaryData().icon}`} alt="" />
              <h1 class="text-stone-100">{mercenaryData().name}</h1>
            </div>
            <p class="text-stone-300">{mercenaryData().description}</p>
            <ul>
              <For each={mercenaryData().abilities}>
                {(ability) => (
                  <li class="flex items-center gap-2">
                    <img src={`/assets/mercenaries/${ability.icon}`} alt="" />
                    <div>
                      <h3 class="text-stone-100">{ability.name}</h3>
                      <p class="text-stone-200">{ability.effect}</p>
                    </div>
                  </li>
                )}
              </For>
            </ul>
          </div>
        )}
      </Show>
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
            <a href={`/mercenary/${m.id}`}>
              <img class="w-[64px] h-[64px]" src={`/assets/mercenaries/${m.icon}`} alt="" />
            </a>
          </div>
        )}
      </For>
    </div>
  </>
);
