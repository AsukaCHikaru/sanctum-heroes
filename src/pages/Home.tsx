import { Layout } from '../components/Layout';

export const HomePage = () => {
  return (
    <Layout>
      <div class="max-w-3xl mx-auto px-4 pt-10 pb-20">
        <div>
          <img src="/assets/banner.png" alt="banner" />
          <h1 class="text-center text-lg text-gray-400 mb-4">
            An asukachikaru creation - WarCraft III Custom Map
          </h1>
        </div>

        <div class="space-y-6 text-gray-300 leading-relaxed">
          <p class="text-center">緊湊、精彩、刺激，勝負只在一線之間。</p>

          <section>
            <h2 class="text-xl font-bold text-amber-600 mb-3 text-center">遊戲方式</h2>
            <p class="mb-2">你有三種方法獲得勝利：</p>
            <ol class="list-decimal list-inside space-y-1">
              <li>在遊戲時間倒數結束後，分數大於敵隊</li>
              <li>在遊戲時間倒數結束前，拉開70分的差距</li>
              <li>擊破對方主堡將強制停止遊戲並結算分數，分數高的一方獲勝</li>
            </ol>
          </section>

          <div class="space-y-4">
            <p>
              這並不只是個A主堡遊戲，而多了競分與搶旗要素。但，就算完全不搶旗，一樣有可能獲得勝利。
            </p>

            <p>
              遊戲採用競分制，殺死強度不同的敵人將會獲得相對的分數。但與那相比，搶旗得到的分數是壓倒性的高。與競分方式配合的是遊戲時間倒數。初始設定為20分鐘，但可以藉由輸入指令選擇10、15、25、30四種另外選擇。
            </p>

            <p>
              戰場不再是只有英雄與雜兵，而是更為複雜、更為危險。基地中有雇傭兵營地。傭兵分成五種：騎兵、弓兵、法師、輕步兵、重步兵。每種三級，傭兵除了有兵種之間攻擊防禦數值上的相剋，更有著不同的技能、定位，因應各種戰況。
            </p>

            <p>
              遊戲中將有各種不同的刺激感。搶旗你爭我奪，搶旗者千方百計甩開追兵的刺激感；一隻隻擊殺對方傭兵及英雄，不斷跳出加分記號的快感；以及計分板比數相近的緊張感。逆轉不再需要跑到地圖對角線打主堡；勝負只在一線之間，任何一隻單位的生死都是關鍵。
            </p>
          </div>

          <section>
            <h2 class="text-xl font-bold text-amber-600 mb-3 text-center">
              Sanctum Heroes有什麼優點？
            </h2>
            <ul class="space-y-2">
              <li>
                <strong>緊湊感：</strong>遊戲時間縮短，每一分鐘都將影響勝負。
              </li>
              <li>
                <strong>惡趣味：</strong>遊戲內包含多種neta或惡趣味，讓人會心一笑。
              </li>
              <li>
                <strong>完成度：</strong>
                地圖本身花了一個月以上製作，更花了近三個月debug與測試平衡性。英雄配合道具、傭兵，每個角色都不容忽視。
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-bold text-amber-600 mb-3 text-center">
              Sanctum Heroes與市面上其它的對戰地圖有什麼不同？
            </h2>
            <div class="space-y-3">
              <p>
                SH的遊戲時間在預設情形下，最長只有20分鐘加上遊戲開始前不到1分鐘的準備時間。也就是說，在你享受好幾倍的SH樂趣後，其他遊戲搞不好都還沒打完一場！
              </p>

              <p>
                而且SH雖然只有短短的20分鐘，但卻是整整20分鐘的激烈衝突。想像一場長達20分鐘的會戰、長達20分鐘的刺激！
              </p>

              <p>
                再加上，SH判斷勝負的方式不同於其它對戰地圖。平常，最精彩的逆轉，也不過是在你家主堡剩下一滴血的時候幹掉所有人，然後慢慢跑過長長的中路，再打爆對方家主堡。這中間有多少時間是在跑步？
              </p>

              <p>
                但SH裡，你能在最後的最後，才擊敗敵人取得逆轉分。即使時間倒數只剩下一秒，這都有可能發生。
              </p>
            </div>
          </section>

          <p class="text-center text-lg font-semibold text-amber-300 pt-4">
            勝負只在一線之間，任何一隻單位的生死都是關鍵。
          </p>
        </div>
      </div>
    </Layout>
  );
};
