// 由 build.py 自動產生，請勿手動修改
(() => {
const ROUTES = [
  { k: "canal", nm: "水圳之源", en: "Source of water canal", sub: "官田・六甲・烏山頭・八田與一" },
  { k: "hill", nm: "湖丘時光", en: "Hills & Lake in Time", sub: "南化・左鎮・玉井・新化・虎頭埤" },
  { k: "cloud", nm: "雲水之間", en: "Between Clouds and Water", sub: "中埔・大埔・曾文水庫・楠西" },
];
const SPOTS = [
  ["canal", 1, "官田遊客中心", "我們今天戶外教學來的地方，屋頂上長了草"],
  ["canal", 2, "台南六甲落羽松森林", "一整排高高的樹倒映在水面上，秋冬葉子會變紅"],
  ["canal", 3, "南元花園休閒農場", null],
  ["canal", 4, "柳營尖山埤渡假村", "湖邊的渡假村，可以坐船遊湖"],
  ["canal", 5, "八田與一紀念園區", "紀念帶大家蓋烏山頭水庫和嘉南大圳的工程師"],
  ["canal", 6, "烏山頭水庫風景區", "湖面彎彎曲曲像珊瑚，所以又叫「珊瑚潭」"],
  ["canal", 7, "台南山上花園水道博物館", "以前把水變乾淨、送給台南人喝的地方"],
  ["canal", 8, "官田菱角田", "水田裡長著有角的果實，水雉鳥會來這裡"],
  ["hill", 1, "南化遊客中心", null],
  ["hill", 2, "大坑休閒農場", null],
  ["hill", 3, "台南左鎮化石園區", "可以看到很久很久以前動物的骨頭化石"],
  ["hill", 4, "玉井芒果冰", "夏天最受歡迎的冰，上面有黃色的水果"],
  ["hill", 5, "新化老街", "一整排漂亮的老房子，牆上有雕花"],
  ["hill", 6, "虎頭埤水庫", "台灣第一座水庫，湖上有長長的吊橋"],
  ["hill", 7, "二寮觀日平臺", "天還沒亮就要來，看日出和雲海"],
  ["hill", 8, "走馬瀨農場", "有大草原的農場，名字裡有一種動物"],
  ["cloud", 1, "中埔遊客中心", null],
  ["cloud", 2, "石硦林場", null],
  ["cloud", 3, "大埔同心橋", "在大埔情人公園裡，跨過溪流的大橋"],
  ["cloud", 4, "曾文水庫", "台灣最大的水庫"],
  ["cloud", 5, "梅嶺風景區", "冬天山上會開滿白色梅花"],
  ["cloud", 6, "玄空法寺", "寺廟門口有一塊寫著「佛」字的大石頭"],
  ["cloud", 7, "鹿陶洋江家聚落", "同一個家族的人住在一起的古老三合院"],
  ["cloud", 8, "龜丹溫泉", "可以泡溫泉、讓身體暖呼呼的地方"],
].map(([r, n, nm, clue]) => ({ r, nm, clue, img: `img/${r}${n}.jpg` }));
const SECRETS = [
  ["停車場屋頂上種滿植物（覆土建築）", "停車場藏在下面，上面變成綠地，比較涼", "img/s1.jpg", "官田遊客中心是覆土式綠建築，2022 年得到園冶獎"],
  ["像飛鳥翅膀的折板大屋頂", "幫大家遮太陽，屋頂下空空的讓南風吹過", "img/s2.jpg", "大屋頂底下的「空」讓風到處流動，走在裡面很舒服"],
  ["屋頂上的天窗", "陽光照進來，地上出現光影", "img/s3.jpg", "建築把台南的「陽光」帶進房子裡"],
  ["入口圓弧形的房間", "像西拉雅人祭拜用的「壺」", "img/s4.jpg", "西拉雅人信仰阿立祖，用壺來祭拜"],
  ["二樓水池流到一樓的瀑布", "像水庫的溢洪道，把阿立祖的「水」帶進來", "img/s5.jpg", "建築結合了水圳和景觀水池"],
  ["房子圍著廣場、面向草地和水池", "像西拉雅聚落面向水、在戶外聚會", "img/s6.jpg", "園區融合台南的陽光、嘉南平原的風、阿立祖的水"],
  ["白牆上的藍色線條、紅色窗框", "西拉雅傳統服飾的顏色", "img/s7.jpg", "西拉雅傳統服飾以藍、白、紅、黑為主"],
  ["黃色的牆和白色的八葉花", "芒果黃、稻穗黃，加上西拉雅刺繡的花", "img/s8.jpg", "芒果黃、稻穗黃是這裡最有名的農產顏色"],
  ["二樓的無邊際景觀水池", "水面像鏡子，映出天空和美麗的倒影", "img/s9.jpg", "站在二樓，可以拍到天空和雲朵的倒影"],
  ["草原上的梅花鹿地景藝術", "以前嘉南平原上有成群的梅花鹿", "img/s10.jpg", "梅花鹿地景藝術呈現早期嘉南平原的樣子"],
  ["草原小山坡上的白色許願鶴", "乘著祝福降臨西拉雅，作品名叫「幸福翔起」", "img/s12.jpg", "許願鶴由葛萊美獎設計大師蕭青陽設計"],
  ["屋頂上的太陽能板", "用太陽發電，是省電的綠建築", "img/s11.jpg", "這裡以前是國軍的野戰訓練場，2020 年 8 月變成遊客中心"],
].map(([a, b, img, fact]) => ({ a, b, img, fact, kind: "實景" }));
const ANIMALS = ["鹿", "牛", "野豬", "蝸牛", "犬"];
const ELEMENTS = ["風", "土", "山", "水", "人情味"];
const TABE = {
  animal: [
    { img: "img/tabe4.jpg", q: "這隻是什麼動物？", opts: ANIMALS, ans: "鹿", fact: "鹿頭上有銀色鹿角，身上的神秘線條代表「風」" },
    { img: "img/tabe2.jpg", q: "這隻是什麼動物？", opts: ANIMALS, ans: "牛", fact: "牛頭上的角是菱角的造型，身上的方格是「田」" },
    { img: "img/tabe1.jpg", q: "這隻是什麼動物？", opts: ANIMALS, ans: "野豬", fact: "野豬身上畫滿了「山」，牠要帶大家去爬山" },
    { img: "img/tabe5.jpg", q: "這隻是什麼動物？", opts: ANIMALS, ans: "蝸牛", fact: "蝸牛頭上的觸角是找水的雷達，身上布滿水滴" },
    { img: "img/tabe6.jpg", q: "這隻是什麼動物？", opts: ANIMALS, ans: "犬", fact: "熱情的狗狗身上有愛心，還有很多「人」字" },
  ],
  element: [
    { img: "img/tabe4.jpg", q: "鹿代表西拉雅的什麼？", opts: ELEMENTS, ans: "風", fact: "風帶來雲霧，在左鎮二寮可以看雲海和日出" },
    { img: "img/tabe1.jpg", q: "野豬代表西拉雅的什麼？", opts: ELEMENTS, ans: "山", fact: "來梅嶺爬山走古道，讓身體和山一樣勇健" },
    { img: "img/tabe2.jpg", q: "牛代表西拉雅的什麼？", opts: ELEMENTS, ans: "土", fact: "嘉南平原肥沃的土，種出讓人元氣滿滿的農產" },
    { img: "img/tabe5.jpg", q: "蝸牛代表西拉雅的什麼？", opts: ELEMENTS, ans: "水", fact: "蝸牛揹著水庫，慢慢把水送到平原；西拉雅有五座有名的水庫" },
    { img: "img/tabe6.jpg", q: "熱情的狗狗（犬）代表西拉雅的什麼？", opts: ELEMENTS, ans: "人情味", fact: "犬一大早就跑下山等大家，要帶大家去關子嶺泡溫泉" },
  ],
  more: [
    { img: "img/tabe6.jpg", q: "狗狗身上的愛心代表什麼？", opts: ["熱情的人情味", "下雨的水滴", "高高的山", "吹來的風"], ans: "熱情的人情味", fact: "狗狗身上還有忙著招呼朋友的人、鞠躬說「歡迎光臨」的人" },
    { img: "img/tabe7.jpg", q: "「Tabe」是西拉雅語，意思是什麼？", opts: ["你好", "再見", "謝謝", "好吃"], ans: "你好", fact: "Tabe 唸起來像「搭背」，意思是日安、你好、嗨" },
    { img: "img/tabe5.jpg", q: "雕塑的顏料裡加了官田的什麼？", opts: ["菱角殼", "芒果皮", "稻草", "龍眼殼"], ans: "菱角殼", fact: "官田是全台灣最大的菱角產地，菱角殼做成「菱殼炭粉」再利用" },
    { img: "img/tabe2.jpg", q: "牛頭上的角，是哪一種農產的造型？", opts: ["菱角", "香蕉", "芒果", "稻穗"], ans: "菱角", fact: "菱角長得像元寶，又叫「黑元寶」，9 到 11 月是產季" },
    { img: "img/tabe7.jpg", q: "這組雕塑可以和朋友玩什麼遊戲？", opts: ["躲貓貓", "跳繩", "踢足球", "放風箏"], ans: "躲貓貓", fact: "旁邊有一支會數到 10 的「放送頭」：1、2、3……10，躲好了嗎？" },
    { img: "img/tabe7.jpg", q: "這組雕塑只用了哪兩種顏色？", opts: ["黑和白", "紅和藍", "黃和綠", "粉紅和紫"], ans: "黑和白", fact: "黑白圖紋來自原住民編織紋、古代文字和符號" },
  ],
};
const PLANTS = [
  { nm: "桃花心木", img: "img/plants/mahogany-photo.jpg", part: "種子", feat: "果實裂開後掉出有一片翅膀的種子，掉下來會像直升機一樣轉圈圈" },
  { nm: "大花紫薇", img: "img/plants/crapemyrtle-dry.jpg", part: "果實", feat: "夏天開紫色的花，花謝後結出一串圓圓的果實" },
  { nm: "羊蹄甲", img: "img/plants/orchidtree-photo.jpg", part: "葉子", feat: "葉子前端裂成兩半，很像羊的腳蹄" },
  { nm: "馬拉巴栗", img: "img/plants/moneytree-photo.jpg", part: "種子", feat: "常被種成盆栽放在家裡，又叫「發財樹」" },
  { nm: "火焰木", img: "img/plants/tuliptree-photo.jpg", part: "果實", feat: "開橘紅色的大花像火焰，果實像一艘小船" },
  { nm: "阿勃勒", img: "img/plants/goldenshower-photo.jpg", part: "果實", feat: "夏天開一串串黃花像下「黃金雨」，果實是長長的黑色棍子" },
  { nm: "油桐", img: "img/plants/tung.svg", photos: ["img/plants/tung-photo.jpg"], part: "種子", feat: "春天開白花，花掉下來像下雪，叫做「五月雪」" },
  { nm: "桂花", img: "img/plants/osmanthus-photo.jpg", part: "花", feat: "花小小的，但是非常非常香" },
  { nm: "銀樺", img: "img/plants/silveroak-photo.jpg", part: "葉子", feat: "葉子分成很多細細的條，像一根羽毛" },
  { nm: "茄苳", img: "img/plants/bishopwood-photo.jpg", part: "果實", feat: "一根葉柄上長三片小葉子，很多老樹都是茄苳" },
  { nm: "樟樹", img: "img/plants/camphor-photo.jpg", part: "樹幹切片", feat: "葉子揉一揉會有樟腦的香味，樹幹切開可以數年輪" },
  { nm: "大葉欖仁", img: "img/plants/almond-photo.jpg", part: "葉子", feat: "葉子大大的，冬天會變紅再掉光，春天再長出綠色新葉" },
];
window.GAME = { ROUTES, SPOTS, SECRETS, ANIMALS, ELEMENTS, TABE, PLANTS };
})();
