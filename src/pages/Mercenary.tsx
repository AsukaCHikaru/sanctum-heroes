import { MERCENARIES, type Mercenary } from '../data/mercenary';
import { Layout } from '../components/Layout';
import { IconImage } from '../components/IconImage';
import { createMemo, For, Show } from 'solid-js';
import { A, useParams } from '@solidjs/router';

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
            <div class="flex items-center gap-2 mb-4">
              <IconImage
                src={`/assets/mercenaries/${mercenaryData().icon}`}
                alt={mercenaryData().name}
              />
              <div>
                <h1 class="text-amber-300 font-serif text-2xl">{mercenaryData().name}</h1>
                <div class="text-stone-100">
                  <span class="mr-2 ">🟡 {mercenaryData().goldCost}</span>
                  <span>🌲 {mercenaryData().woodCost}</span>
                </div>
              </div>
            </div>
            <p class="text-stone-300 mb-4">{mercenaryData().description}</p>
            <ul>
              <For each={mercenaryData().abilities}>
                {(ability) => (
                  <li class="flex items-center gap-2 mb-4">
                    <IconImage
                      src={`/assets/mercenaries/${ability.icon}`}
                      alt={ability.name}
                    />
                    <div>
                      <h3 class="text-stone-100 font-serif text-xl">{ability.name}</h3>
                      <p class="text-stone-200">{ability.effect}</p>
                      {ability.type === 'Passive' ? <p class="text-stone-400">被動技能</p> : null}
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
    <h3 class="text-amber-300 text-center text-lg mb-2">{title}</h3>
    <div class="flex justify-center">
      <For each={list}>
        {(m) => (
          <div>
            <A href={`/mercenary/${m.id}`}>
              <IconImage src={`/assets/mercenaries/${m.icon}`} alt={m.name} />
            </A>
          </div>
        )}
      </For>
    </div>
  </>
);
