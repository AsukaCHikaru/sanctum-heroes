import { createMemo, For, Match, Show, Switch } from 'solid-js';
import { Layout } from '../components/Layout';
import { isBaseItem, isEliteItem, ITEMS } from '../data/item';
import { A, useParams } from '@solidjs/router';

const consumables = ITEMS.filter((item) => item.type === 'Consumable');
const base = ITEMS.filter((item) => item.type === 'Base');
const elite = ITEMS.filter((item) => item.type === 'Elite');

export const ItemPage = () => {
  const params = useParams();

  const item = createMemo(() => {
    const id = params.id;
    const item = ITEMS.find((i) => `${i.id}` === id);
    return item;
  });

  return (
    <Layout>
      <Show when={item()} fallback={null}>
        {(itemData) => (
          <div class="flex">
            <div class="mb-10">
              <div class="flex items-center gap-2 text-stone-100">
                <img src={`/assets/items/${itemData().icon}`} alt={itemData().name} class="" />
                <div>
                  <h1 class="">{itemData().name}</h1>
                  {/** fixme: cost rendering at here using Cost does not change depending on item() value */}
                  <div>
                    <Show when={itemData().goldCost}>
                      <span class="mr-2">🟡 {itemData().goldCost}</span>
                    </Show>
                    <Show when={itemData().woodCost}>
                      <span>🌲 {itemData().woodCost}</span>
                    </Show>
                  </div>
                </div>
              </div>
              <p class="text-stone-300">{itemData().description}</p>
              <p class="text-stone-300">{itemData().effect}</p>
            </div>
            <div class="text-amber-300">
              <Switch>
                <Match when={isBaseItem(itemData())}>
                  合成對象
                  <ul>
                    <For
                      each={elite.filter((eliteItem) =>
                        isBaseItem(itemData())?.buildsInto.includes(eliteItem.name)
                      )}
                    >
                      {(eliteItem) => (
                        <li class="text-stone-100 ">
                          <A class="flex items-center gap-2" href={`/item/${eliteItem.id}`}>
                            <img src={`/assets/items/${eliteItem.icon}`} alt="" />
                            <div class="flex flex-col">
                              <span>{eliteItem.name}</span>
                              <Cost gold={eliteItem.buildGoldCost} wood={eliteItem.buildWoodCost} />
                            </div>
                          </A>
                        </li>
                      )}
                    </For>
                  </ul>
                </Match>
                <Match when={isEliteItem(itemData())}>
                  合成材料
                  <ul>
                    <For
                      each={base.filter((baseItem) =>
                        isEliteItem(itemData())?.recipe.includes(baseItem.name)
                      )}
                    >
                      {(baseItem) => (
                        <>
                          <li class="text-stone-100  gap-2">
                            <A class="flex items-center gap-2" href={`/item/${baseItem.id}`}>
                              <img src={`/assets/items/${baseItem.icon}`} alt="" />
                              <div class="flex flex-col">
                                <span>{baseItem.name}</span>
                                <Cost gold={baseItem.goldCost} wood={baseItem.woodCost} />
                              </div>
                            </A>
                          </li>
                          <li class="text-4xl text-stone-300">+</li>
                        </>
                      )}
                    </For>
                    <li class="flex items-center">
                      <Cost
                        gold={isEliteItem(itemData())?.buildGoldCost || 0}
                        wood={isEliteItem(itemData())?.buildWoodCost || 0}
                      />
                    </li>
                  </ul>
                </Match>
              </Switch>
            </div>
          </div>
        )}
      </Show>
      <ItemList />
    </Layout>
  );
};

const Cost = ({ gold, wood }: { gold: number; wood: number }) => (
  <div>
    <Show when={gold}>
      <span class="mr-2">🟡 {gold}</span>
    </Show>
    <Show when={wood}>
      <span>🌲 {wood}</span>
    </Show>
  </div>
);

const ItemList = () => (
  <div class="w-full text-center text-amber-300">
    <h2>消耗品</h2>
    <div class="flex flex-wrap">
      <For each={consumables}>
        {(item) => (
          <div>
            <A href={`/item/${item.id}`}>
              <img class="w-[64px] h-[64px]" src={`/assets/items/${item.icon}`} alt="" />
            </A>
          </div>
        )}
      </For>
    </div>
    <h2>基礎裝備</h2>
    <div class="flex flex-wrap">
      <For each={base}>
        {(item) => (
          <div>
            <A href={`/item/${item.id}`}>
              <img class="w-[64px] h-[64px]" src={`/assets/items/${item.icon}`} alt="" />
            </A>
          </div>
        )}
      </For>
    </div>
    <h2>合成裝備</h2>
    <div class="flex flex-wrap">
      <For each={elite}>
        {(item) => (
          <div>
            <A href={`/item/${item.id}`}>
              <img class="w-[64px] h-[64px]" src={`/assets/items/${item.icon}`} alt="" />
            </A>
          </div>
        )}
      </For>
    </div>
  </div>
);
