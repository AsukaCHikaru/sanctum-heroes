import { createMemo, For, Match, Show, Switch } from 'solid-js';
import { Layout } from '../components/Layout';
import { IconImage } from '../components/IconImage';
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
          <div class="flex flex-col lg:flex-row lg:justify-between gap-8 mb-10">
            <div>
              <div class="flex items-center gap-2 text-stone-100 mb-4">
                <IconImage src={`/assets/items/${itemData().icon}`} alt={itemData().name} />
                <div>
                  <h1 class="font-serif text-2xl text-amber-300">{itemData().name}</h1>
                  <Cost gold={itemData().goldCost} wood={itemData().woodCost} />
                </div>
              </div>
              <p class="text-stone-300">說明：{itemData().description}</p>
              <p class="text-stone-300">效果：{itemData().effect}</p>
            </div>
            <div class="text-amber-300">
              <Switch>
                <Match when={isBaseItem(itemData())}>
                  <h3 class="text-lg my-2">合成對象</h3>
                  <ul>
                    <For
                      each={elite.filter((eliteItem) =>
                        isBaseItem(itemData())?.buildsInto.includes(eliteItem.name)
                      )}
                    >
                      {(eliteItem) => (
                        <li class="text-stone-100 my-2">
                          <A class="flex items-center gap-2" href={`/item/${eliteItem.id}`}>
                            <IconImage
                              src={`/assets/items/${eliteItem.icon}`}
                              alt={eliteItem.name}
                            />
                            <div class="flex flex-col">
                              <span class="text-xl font-serif">{eliteItem.name}</span>
                              <Cost gold={eliteItem.buildGoldCost} wood={eliteItem.buildWoodCost} />
                            </div>
                          </A>
                        </li>
                      )}
                    </For>
                  </ul>
                </Match>
                <Match when={isEliteItem(itemData())}>
                  <h3 class="text-lg my-2">合成材料</h3>
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
                              <IconImage
                                src={`/assets/items/${baseItem.icon}`}
                                alt={baseItem.name}
                              />
                              <div class="flex flex-col">
                                <span class="text-xl font-serif">{baseItem.name}</span>
                                <Cost gold={baseItem.goldCost} wood={baseItem.woodCost} />
                              </div>
                            </A>
                          </li>
                          <li class="text-4xl text-stone-300 w-[64px] text-center">+</li>
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

const Cost = (props: { gold: number; wood: number }) => (
  <div>
    <Show when={props.gold}>
      <span class="mr-2">🟡 {props.gold}</span>
    </Show>
    <Show when={props.wood}>
      <span>🌲 {props.wood}</span>
    </Show>
  </div>
);

const ItemList = () => (
  <div class="w-full text-center text-amber-300">
    <h2 class="text-lg my-2">消耗品</h2>
    <div class="flex flex-wrap">
      <For each={consumables}>
        {(item) => (
          <div>
            <A href={`/item/${item.id}`}>
              <IconImage src={`/assets/items/${item.icon}`} alt={item.name} />
            </A>
          </div>
        )}
      </For>
    </div>
    <h2 class="text-lg my-2">基礎裝備</h2>
    <div class="flex flex-wrap">
      <For each={base}>
        {(item) => (
          <div>
            <A href={`/item/${item.id}`}>
              <IconImage src={`/assets/items/${item.icon}`} alt={item.name} />
            </A>
          </div>
        )}
      </For>
    </div>
    <h2 class="text-lg my-2">合成裝備</h2>
    <div class="flex flex-wrap">
      <For each={elite}>
        {(item) => (
          <div>
            <A href={`/item/${item.id}`}>
              <IconImage src={`/assets/items/${item.icon}`} alt={item.name} />
            </A>
          </div>
        )}
      </For>
    </div>
  </div>
);
