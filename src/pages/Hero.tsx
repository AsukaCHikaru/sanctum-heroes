import { createSignal, For, Match, Switch } from 'solid-js';

const dummy = {
  name: {
    zh: '御火者',
    en: 'Mega',
  },
  title: {
    zh: '無名的御火者',
    en: 'Anonymous',
  },
  faction: 'alliance',
  type: 'int',
  stats: {
    strength: {
      base: 16,
      growth: 1.5,
    },
    agility: {
      base: 16,
      growth: 1.5,
    },
    intelligence: {
      base: 28,
      growth: 3.0,
    },
    baseHealth: 420,
    baseMana: 280,
    baseAttackMin: 24,
    baseAttackMax: 26,
    baseArmor: 0,
    attackRange: 600,
    movementSpeed: 300,
  },
  description:
    '具有破壞力的英雄。他的火球是最致命的武器，沒有人能夠抵擋。沒有人知道他的過去，要不是他在戰場上令敵人聞風喪膽的實力，或許不會有人注意到他，利用他快速並精準的控制火燄一次又一次地擊毀任何阻擋在他面前的敵人，甚至一次放出龐大火球瞬間擊倒一整個軍團，他戰鬥的目的並不是為了財富、榮耀，而是找出生存的意義，找出他所遺忘的自我，在戰場上，人們都稱呼他「御火者」。',
  abilities: [
    {
      type: 'active',
      name: '火球術',
      icon: '../img_ALskill/mega01.gif',
      description: '發射一枚火球攻擊目標，對其造成火焰傷害。',
      effect: '對目標造成傷害。',
      stats: [
        {
          label: '法力消耗',
          value: 80,
        },
        {
          label: '傷害',
          value: [140, 170, 200, 230],
        },
        {
          label: '施法時間',
          value: 0.5,
        },
        {
          label: '射程',
          value: 600,
        },
        {
          label: '冷卻時間',
          value: 6,
        },
      ],
    },
    {
      type: 'active',
      name: '製作魔法泉水',
      icon: '../img_ALskill/mega02.gif',
      description: '將魔力壓縮成為液體，能夠更靈活的運用。',
      effect: '製造不可交易、不可丟棄的魔法泉水，使用之後可以恢復魔力。',
      stats: [
        {
          label: '法力恢復',
          value: 200,
        },
        {
          label: '冷卻時間',
          value: 10,
        },
        {
          label: '藥水冷卻時間',
          value: [50, 40, 32, 25],
        },
      ],
    },
    {
      type: 'passive',
      name: '秘法心智',
      icon: '../img_ALskill/mega03.gif',
      description: '對魔法極為熟練的法師，除了懂得發出強力魔法，也對魔力的使用更加了解。',
      effect: '增加法師的魔力最大值及魔力回復速度。',
      stats: [
        {
          label: '每秒魔力回復',
          value: [80, 160, 220, 280],
        },
        {
          label: '最大魔力增加',
          value: [100, 160, 220, 280],
        },
      ],
    },
    {
      type: 'active',
      name: '炎爆術',
      icon: '../img_ALskill/mega04.jpg',
      description: '丟出一枚殘暴的火球造成傷害並震昏目標敵方部隊。',
      effect: '對目標造成傷害及暈眩。',
      stats: [
        {
          label: '傷害',
          value: [600, 1000],
        },
        {
          label: '英雄暈眩時間',
          value: 3,
        },
        {
          label: '一般單位暈眩時間',
          value: 5,
        },
        {
          label: '施法時間',
          value: [3, 4],
        },
        {
          label: '冷卻時間',
          value: 60,
        },
        {
          label: '法力消耗',
          value: [300, 500],
        },
      ],
    },
  ],
  author: 'sos123409431',
  lastUpdated: '2008/12/29',
};

export const HeroPage = () => {
  const [selectedAbility, setSelectedAbility] = createSignal(1);

  return (
    <div class="">
      <h1 class="">Hero Page</h1>
      <h2 class="">
        {dummy.name.zh} {dummy.name.en}
      </h2>
      <h2 class="">
        {dummy.title.zh} {dummy.title.en}
      </h2>
      <p>{dummy.description}</p>
      <div class="flex">
        <For each={dummy.abilities}>
          {(ability, i) => (
            <button onClick={() => setSelectedAbility(i() + 1)}>{ability.name}</button>
          )}
        </For>
      </div>
      <Switch>
        <For each={dummy.abilities}>
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
