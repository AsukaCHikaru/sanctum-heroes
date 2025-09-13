import { For } from 'solid-js';
import { Layout } from '../components/Layout';
import { ITEMS } from '../data/item';

export const ItemPage = () => {
  return (
    <Layout>
      <div>item</div>
      <ItemList />
    </Layout>
  );
};

const consumables = ITEMS.filter((item) => item.type === 'Consumable');
const base = ITEMS.filter((item) => item.type === 'Base');
const elite = ITEMS.filter((item) => item.type === 'Elite');

const ItemList = () => (
  <div class="w-full text-center text-amber-300">
    <h2>消耗品</h2>
    <div class="flex flex-wrap">
      <For each={consumables}>
        {(item) => (
          <div>
            <a href={`/item/${item.id}`}>
              <img class="w-[64px] h-[64px]" src={`/src/assets/items/${item.icon}`} alt="" />
            </a>
          </div>
        )}
      </For>
    </div>
    <h2>基礎裝備</h2>
    <div class="flex flex-wrap">
      <For each={base}>
        {(item) => (
          <div>
            <a href={`/item/${item.id}`}>
              <img class="w-[64px] h-[64px]" src={`/src/assets/items/${item.icon}`} alt="" />
            </a>
          </div>
        )}
      </For>
    </div>
    <h2>合成裝備</h2>
    <div class="flex flex-wrap">
      <For each={elite}>
        {(item) => (
          <div>
            <a href={`/item/${item.id}`}>
              <img class="w-[64px] h-[64px]" src={`/src/assets/items/${item.icon}`} alt="" />
            </a>
          </div>
        )}
      </For>
    </div>
  </div>
);
