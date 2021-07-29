Doutor = (function () {
    let name = 'ドトール'
    let menu = {
        'ホットドリンク': [{
                name: '沖縄黒糖ラテ',
                picture: './Picture/Doutor/HotDrink/1.jpg',
                explain: '黒糖の深い味わいとまろやかさが広がる、風味豊かなラテです。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: 'ブレンドコーヒー',
                picture: './Picture/Doutor/HotDrink/2.jpg',
                explain: 'マイルドな口あたりが特徴で、どなたにも親しんでいただけるコーヒーです。',
                money: [
                    'S ￥224',
                    'M ￥275',
                    'L ￥326'
                ]
            },
            {
                name: 'アメリカンコーヒー',
                picture: './Picture/Doutor/HotDrink/3.jpg',
                explain: '苦味が少なく、すっきりとした味わいのコーヒーです。',
                money: [
                    'S ￥224',
                    'M ￥275'
                ]
            },
            {
                name: 'エスプレッソコーヒー',
                picture: './Picture/Doutor/HotDrink/4.jpg',
                explain: 'コーヒーの旨みを凝縮し、豊潤な香りとすっきりとした苦味が感じられます。',
                money: [
                    'S ￥224',
                    'M ￥275'
                ]
            },
            {
                name: 'カプチーノ',
                picture: './Picture/Doutor/HotDrink/5.jpg',
                explain: '豊かな泡立ちとまろやかな味わいです。',
                money: [
                    'S ￥275',
                    'M ￥326',
                    'L ￥377'
                ]
            },
            {
                name: 'カフェ・ラテ',
                picture: './Picture/Doutor/HotDrink/6.jpg',
                explain: 'しっかりしたコーヒー感が自慢のまろやかな味です。',
                money: [
                    'S ￥275',
                    'M ￥326',
                    'L ￥377'
                ]
            },
            {
                name: 'ハニーカフェ・オレ',
                picture: './Picture/Doutor/HotDrink/7.jpg',
                explain: '最後までハチミツの風味が広がります。',
                money: [
                    'M ￥346',
                    'L ￥398'
                ]
            },
            {
                name: '豆乳ラテ',
                picture: './Picture/Doutor/HotDrink/8.jpg',
                explain: '豆乳でつくったカフェラテです。',
                money: [
                    'S ￥316',
                    'M ￥367',
                    'L ￥418'
                ]
            },
            {
                name: 'カフェ・モカ',
                picture: './Picture/Doutor/HotDrink/9.jpg',
                explain: 'オリジナルのココアにエスプレッソ（※）を加えホイップとカプチーノパウダーをトッピング。こだわりのコーヒーとココアを絶妙にマッチさせた、ほどよい甘さが特長です。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: 'ティー',
                picture: './Picture/Doutor/HotDrink/10.jpg',
                explain: 'ダージリン、アッサムなどをブレンドしてバランスをとった、すっきりと飲みやすい紅茶です。',
                money: [
                    'M ￥224'
                ]
            },
            {
                name: 'ルイボスティー',
                picture: './Picture/Doutor/HotDrink/11.jpg',
                explain: 'ノンカフェインで老若男女優しく飲めるハーブティー。自然な甘み、すっきりした味わいでカフェインが気になる方におすすめのドリンクです。',
                money: [
                    'M ￥255'
                ]
            },
            {
                name: 'ロイヤルミルクティー',
                picture: './Picture/Doutor/HotDrink/12.jpg',
                explain: '紅茶の上品な香りとミルクのコクが楽しめます。',
                money: [
                    'S ￥305',
                    'M ￥357',
                    'L ￥408'
                ]
            },
            {
                name: '豆乳ティー',
                picture: './Picture/Doutor/HotDrink/13.jpg',
                explain: '豆乳でつくったロイヤルミルクティーです。',
                money: [
                    'S ￥346',
                    'M ￥398',
                    'L ￥440'
                ]
            },
            {
                name: 'ココア',
                picture: './Picture/Doutor/HotDrink/14.jpg',
                explain: '口当たりまろやかなココアです。',
                money: [
                    'S ￥336',
                    'M ￥387',
                    'L ￥438'
                ]
            },
            {
                name: '宇治抹茶ラテ',
                picture: './Picture/Doutor/HotDrink/15.jpg',
                explain: '宇治抹茶とミルクがマッチした絶妙な味わいです。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: 'カフェインレス コーヒー',
                picture: './Picture/Doutor/HotDrink/16.jpg',
                explain: 'ボディー感がしっかりと感じられる、まろやかな味わいのカフェインレスコーヒーです。',
                money: [
                    'S ￥224'
                ]
            },
            {
                name: 'カフェインレス カフェ・ラテ',
                picture: './Picture/Doutor/HotDrink/17.jpg',
                explain: 'カフェインレスコーヒーでつくったカフェラテです。',
                money: [
                    'S ￥275'
                ]
            },
            {
                name: 'カフェインレス 豆乳ラテ',
                picture: './Picture/Doutor/HotDrink/18.jpg',
                explain: 'カフェインレスコーヒーでつくった豆乳ラテです。',
                money: [
                    'S ￥316'
                ]
            }
        ],
        'アイスドリンク': [{
                name: 'マスカットヨーグルン ～長野県産シャインマスカット～',
                picture: './Picture/Doutor/IceDrink/1.jpg',
                explain: 'ヨーグルト風味のフローズンに、長野県産シャインマスカットの果汁を使用したソースを合わせました。食感のアクセントとしてアロエを入れています。マスカットの爽やかな香りとアロエの食感が楽しめるフローズンドリンクです。',
                money: [
                    'S ￥380',
                    'M ￥430',
                    'L ￥480'
                ]
            },
            {
                name: 'いちごヨーグルン ～愛知県産紅ほっぺ～',
                picture: './Picture/Doutor/IceDrink/2.jpg',
                explain: 'ヨーグルト風味のフローズンに、愛知県産の紅ほっぺを使用したいちごソースを合わせました。食感のアクセントとしていちごの果肉が入っています。いちごの甘酸っぱい味わいと食感が楽しめる、フローズンドリンクです。',
                money: [
                    'S ￥380',
                    'M ￥430',
                    'L ￥480'
                ]
            },
            {
                name: 'アイス沖縄黒糖ラテ',
                picture: './Picture/Doutor/IceDrink/3.jpg',
                explain: '黒糖の深い味わいとまろやかさが広がる、風味豊かなラテです。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: 'タピオカ ～黒糖ミルク～',
                picture: './Picture/Doutor/IceDrink/4.jpg',
                explain: '沖縄県西表島産の黒糖のソースとミルクを合わせたベースに、もちもち食感のタピオカを合わせたデザートドリンクです。どこか懐かしいやさしい味わいの中にタピオカの食感が楽しめます。',
                money: [
                    'M ￥458'
                ]
            },
            {
                name: 'タピオカ ～宇治抹茶ミルク～',
                picture: './Picture/Doutor/IceDrink/5.jpg',
                explain: 'ほどよい苦味が特長の宇治抹茶に、やさしい甘味のミルクともちもち食感のタピオカを合わせたデザートドリンクです。',
                money: [
                    'M ￥458'
                ]
            },
            {
                name: 'タピオカ ～ミルクティー～',
                picture: './Picture/Doutor/IceDrink/6.jpg',
                explain: 'ロイヤルミルクティーにもちもち食感のタピオカを合わせたデザートドリンクです。',
                money: [
                    'M ￥458'
                ]
            },
            {
                name: 'アイスコーヒー',
                picture: './Picture/Doutor/IceDrink/7.jpg',
                explain: 'アラビカ種を100％使用し、苦味を抑え香ばしさと甘味を感じられる一杯に仕上げました。',
                money: [
                    'S ￥224',
                    'M ￥275',
                    'L ￥326'
                ]
            },
            {
                name: 'アイスカフェ・ラテ',
                picture: './Picture/Doutor/IceDrink/8.jpg',
                explain: 'コーヒーと冷たいミルクのバランスを追求した、人気の定番ドリンクです。',
                money: [
                    'S ￥275',
                    'M ￥326',
                    'L ￥377'
                ]
            },
            {
                name: 'アイスハニーカフェ・オレ',
                picture: './Picture/Doutor/IceDrink/9.jpg',
                explain: '最後までハチミツの風味が広がります。',
                money: [
                    'M ￥346',
                    'L ￥398'
                ]
            },
            {
                name: 'アイス豆乳ラテ',
                picture: './Picture/Doutor/IceDrink/10.jpg',
                explain: '豆乳でつくったアイスカフェラテです。',
                money: [
                    'S ￥316',
                    'M ￥367',
                    'L ￥418'
                ]
            },
            {
                name: 'アイスカフェ・モカ',
                picture: './Picture/Doutor/IceDrink/11.jpg',
                explain: 'オリジナルのココアにエスプレッソ（※）を加えホイップとカプチーノパウダーをトッピング。こだわりのコーヒーとココアを絶妙にマッチさせた、ほどよい甘さが特長です。 ※一部の店舗ではエスプレッソではなく濃度の高いコーヒーを使用しています。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: 'アイスティー',
                picture: './Picture/Doutor/IceDrink/12.jpg',
                explain: 'フルーティーな香りとコクのある味わいが特長のアイスティーです。',
                money: [
                    'S ￥255',
                    'M ￥305',
                    'L ￥357'
                ]
            },
            {
                name: 'アイスルイボスティー',
                picture: './Picture/Doutor/IceDrink/13.jpg',
                explain: 'ルイボスティーは南アフリカ原産のハーブを使用したお茶で、「奇跡のお茶」「不老長寿のお茶」として現地で飲まれています。鮮やかな赤色と自然な甘み、すっきりした味わいでカフェインが気になる方におすすめのドリンクです。',
                money: [
                    'S ￥286',
                    'M ￥336',
                    'L ￥387'
                ]
            },
            {
                name: 'アイスロイヤルミルクティー',
                picture: './Picture/Doutor/IceDrink/14.jpg',
                explain: 'ミルク感を持たせながらも紅茶の香りとコクがしっかりと感じられます。',
                money: [
                    'S ￥305',
                    'M ￥357',
                    'L ￥408'
                ]
            },
            {
                name: 'アイス豆乳ティー',
                picture: './Picture/Doutor/IceDrink/15.jpg',
                explain: '豆乳でつくったロイヤルミルクティーです。',
                money: [
                    'S ￥346',
                    'M ￥398',
                    'L ￥448'
                ]
            },
            {
                name: 'アイスココア',
                picture: './Picture/Doutor/IceDrink/16.jpg',
                explain: '口当たりまろやかなココアです。',
                money: [
                    'S ￥336',
                    'M ￥387',
                    'L ￥438'
                ]
            },
            {
                name: 'アイス宇治抹茶ラテ',
                picture: './Picture/Doutor/IceDrink/17.jpg',
                explain: '宇治抹茶とミルクがマッチした絶妙な味わいです。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: '沖縄県産パインヨーグルト',
                picture: './Picture/Doutor/IceDrink/18.jpg',
                explain: '沖縄県やんばる地域で収穫されたパイナップルの果肉入りソースを使用したヨーグルトドリンクです。爽やかな甘味と果肉の食感、ヨーグルトのまろやかな酸味をお楽しみいただけます。',
                money: [
                    'S ￥360',
                    'M ￥410',
                    'L ￥460'
                ]
            },
            {
                name: 'ももミックスジュース',
                picture: './Picture/Doutor/IceDrink/19.jpg',
                explain: '国産白桃のピューレ、黄桃果汁、りんご果汁、白ぶどう果汁を使用した果汁100%のミックスジュースです。白桃ピューレを使用することで桃の濃厚な甘さとトロリとした飲み口に、りんご果汁を加えることですっきりとした後味に仕上げました。',
                money: [
                    'S ￥390',
                    'M ￥440',
                    'L ￥490'
                ]
            },
            {
                name: '青森県産りんごストレートジュース',
                picture: './Picture/Doutor/IceDrink/20.jpg',
                explain: 'りんご果汁本来のまろやかな甘味とスッキリとしたのどごし、爽やかな酸味が特長です。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: 'オレンジジュース ～100%ストレート果汁～',
                picture: './Picture/Doutor/IceDrink/21.jpg',
                explain: '100％ストレート果汁のオレンジジュースです。',
                money: [
                    'S ￥326',
                    'M ￥377',
                    'L ￥427'
                ]
            },
            {
                name: 'カフェインレス アイスコーヒー',
                picture: './Picture/Doutor/IceDrink/22.jpg',
                explain: 'ボディー感がしっかりと感じられる、まろやかな味わいのカフェインレスコーヒーです。',
                money: [
                    'S ￥224',
                    'M ￥275',
                    'L ￥326'
                ]
            },
            {
                name: 'カフェインレス アイスカフェ・ラテ',
                picture: './Picture/Doutor/IceDrink/23.jpg',
                explain: 'カフェインレスコーヒーでつくったアイスカフェラテです。',
                money: [
                    'S ￥275',
                    'M ￥326',
                    'L ￥377'
                ]
            },
            {
                name: 'カフェインレス アイス豆乳ラテ',
                picture: './Picture/Doutor/IceDrink/24.jpg',
                explain: 'カフェインレスコーヒーでつくった豆乳ラテです。',
                money: [
                    'S ￥316',
                    'M ￥367',
                    'L ￥418'
                ]
            },
            {
                name: 'カフェインレス アイスハニーカフェ・オレ',
                picture: './Picture/Doutor/IceDrink/25.jpg',
                explain: 'カフェインレスコーヒーでつくったハニーカフェ・オレです。',
                money: [
                    'M ￥346',
                    'L ￥398'
                ]
            }
        ],
        'ミラノサンド': [{
                name: 'ミラノサンドB 北海道産サーモンとエビのバジルソース',
                picture: './Picture/Doutor/Milano/1.jpg',
                explain: '北海道産スモークサーモンとえびを組み合わせ、バジル・パセリ・ディル等のハーブとマヨソースを合わせた、香り豊かなバジルマヨソースで全体の味をまとめました。水菜・大根・人参・アーリーレッドを合わせ食感を出し、サラダ感覚でお楽しみいただけるミラノサンドに仕上げました。',
                money: [
                    '￥456'
                ]
            },
            {
                name: 'ミラノサンドA ビーフパストラミ＆生ハム',
                picture: './Picture/Doutor/Milano/2.jpg',
                explain: 'ビーフパストラミと生ハムの旨みを活かしたドトールの自信作。シンプルな素材の組み合わせが、味わい深い逸品です。',
                money: [
                    '￥448'
                ]
            },
            {
                name: 'ミラノサンドC 照り焼きチキン～お店仕込みのタルタルソース～',
                picture: './Picture/Doutor/Milano/3.jpg',
                explain: '食べ応えのある鶏もも肉を使用し、「ヨーグルトザジキ」でゆで卵を和えた、お店仕込みのタルタルソースで味付けしました。照り焼きの甘さと、爽やかな味わいが口いっぱいに広がります。※ヨーグルトザジキとは、ヨーグルトにディル(ハーブ)、きゅうり、レモンなどを合わせたギリシャ料理。クリーミーで爽やかな味わいが特長です。',
                money: [
                    '￥456'
                ]
            }
        ],
        'ジャーマンドック': [{
                name: 'ジャーマンドック',
                picture: './Picture/Doutor/German/1.jpg',
                explain: 'ドトールコーヒーショップのベストセラー商品。どこを切ってもオリジナル。パン・ソーセージ・マスタードの素材にとことんこだわった、自信作です。',
                money: [
                    '￥224'
                ]
            },
            {
                name: 'レタスドック',
                picture: './Picture/Doutor/German/2.jpg',
                explain: 'シャキシャキレタスのサラダなドック。オリジナルソースが◎',
                money: [
                    '￥265'
                ]
            }
        ],
        '全粒粉サンド': [{
            name: '全粒粉サンド 大豆ミート ～和風トマトのソース～',
            picture: './Picture/Doutor/WholeWheatFlour/1.jpg',
            explain: '香ばしい風味の全粒粉入りパンに、「畑のお肉」といわれる大豆を主原料とした大豆ミートハンバーグを使い、きんぴらごぼうと和風トマトのソースとともにサンドしました。大豆とは思えないお肉感ときんぴらごぼうの食感で、満足感を得られる一品です。',
            money: [
                '￥360'
            ]
        }],
        'モーニング': [{
                name: 'モーニング・セットA ハムタマゴサラダ',
                picture: './Picture/Doutor/Morning/1.jpg',
                explain: '柔らかな薄切りハム、旨味のあるタマゴサラダ、シャキシャキのレタス、トマトを、トーストしたてのこんがりとした全粒粉入りパンでサンドしています。朝食の代表的な食材といえるハム＆タマゴは、どんなドリンクとの相性も抜群です。野菜も摂りたいという方におすすめのモーニングメニューです。',
                money: [
                    '￥420'
                ]
            },
            {
                name: 'モーニング・セットB 彩り野菜とアボカドチキン',
                picture: './Picture/Doutor/Morning/2.jpg',
                explain: '食べやすくほぐした蒸し鶏とアボカドをだし醤油とマヨソースで絡め、大根、水菜、人参などのシャキシャキ食感の野菜やレタスを合わせました。',
                money: [
                    '￥420'
                ]
            },
            {
                name: 'モーニング・セットC ジャーマンドック',
                picture: './Picture/Doutor/Morning/3.jpg',
                explain: 'ドトールコーヒーショップのベストセラー商品。どこを切ってもオリジナル。パン・ソーセージ・マスタードの素材にとことんこだわった、自信作です。',
                money: [
                    '￥398'
                ]
            },
            {
                name: 'モーニング・セットD ベーコンとタマゴ ～3種のチーズ～',
                picture: './Picture/Doutor/Morning/4.jpg',
                explain: '焼成済みの香ばしいベーコン、山口県油谷島産の塩を使用した味わい深いポモドーロソース、半熟タマゴ、3種のチーズ（ゴーダ、モッツァレラ、チェダー）が絶妙にマッチしたモーニングメニューです。',
                money: [
                    '￥398'
                ]
            }
        ],
        'ホットサンド': [{
                name: 'カルツォーネ ドイツ産ソーセージと彩り野菜',
                picture: './Picture/Doutor/HotSandwich/1.jpg',
                explain: 'ロースト小麦を加えた香り高いもちもち食感の生地に、フランクフルトソーセージ、5種の野菜（ナス、ズッキーニ、パプリカ、トマト、玉ねぎ）を使用した彩り鮮やかなソースとモッツァレラチーズをトッピング。食べ応え抜群のあつあつ手包みピザです。',
                money: [
                    '￥367'
                ]
            },
            {
                name: 'ツナチェダーチーズ',
                picture: './Picture/Doutor/HotSandwich/2.jpg',
                explain: 'あつあつホットサンド。ツナがチーズのコクをさらに引き立てます。',
                money: [
                    '￥346'
                ]
            }
        ],
        'トースト': [{
                name: 'クロックムッシュ',
                picture: './Picture/Doutor/Toast/1.jpg',
                explain: '軽い食感、香ばしい風味を感じられるパンを使用。チーズはゴーダチーズ、エメンタールチーズ、グリュイエールチーズ、パルメザンチーズの4種を使用し、しっかりとした味わいに仕上げたホットサンドです。',
                money: [
                    '￥326'
                ]
            },
            {
                name: 'トースト',
                picture: './Picture/Doutor/Toast/2.jpg',
                explain: '外はさっくり、中はふんわり食感の厚切りトーストです。コーヒーと相性がよく、朝食メニューにぴったりです。',
                money: [
                    '￥193'
                ]
            },
            {
                name: 'チーズトースト',
                picture: './Picture/Doutor/Toast/3.jpg',
                explain: '外はさっくり、中はふんわり食感の厚切りトーストにチーズをのせました。',
                money: [
                    '￥255'
                ]
            }
        ],
        'デザート': [{
                name: '福島県産白桃のミルクレープ',
                picture: './Picture/Doutor/Dessert/1.jpg',
                explain: '福島県産白桃を使用した、この時期だけのミルクレープです。白桃ピューレを使用して作ったソースをクレープ生地の間に3層挟み、天面には果肉もトッピング。みずみずしく、さっぱりと召し上がっていただけるよう仕立てました。',
                money: [
                    '￥420'
                ]
            },
            {
                name: 'ショコラムース',
                picture: './Picture/Doutor/Dessert/2.jpg',
                explain: 'ベルギー産チョコレートを4種類使用し、口当たりなめらかなショコラムースとココアスポンジ生地を組み立てました。下段のショコラムースにはチョコチップを散らし、食感にアクセントを加えています。チョコレートの香りと味わいを楽しんでいただける一品です。',
                money: [
                    '￥400'
                ]
            },
            {
                name: 'ベイクドチーズケーキ',
                picture: './Picture/Doutor/Dessert/3.jpg',
                explain: 'しっとりなめらかで濃厚なベイクドチーズケーキです。北海道産クリームチーズの素材本来の美味しさを味わうことができる、シンプルな仕立てにしました。底にはクランベリーと胡桃入りの香ばしいグラハムクッキー生地をひき、味のアクセントになっています。',
                money: [
                    '￥418'
                ]
            },
            {
                name: '熊本県産和栗のモンブラン',
                picture: './Picture/Doutor/Dessert/4.jpg',
                explain: '和栗ならではのほっくりとした食感と口いっぱいに広がる風味豊かな優しい甘さを楽しめます。',
                money: [
                    '￥458'
                ]
            },
            {
                name: '北海道産かぼちゃのタルト',
                picture: './Picture/Doutor/Dessert/5.jpg',
                explain: 'ほくほく感がたまらないタルトです。やさしい口どけのムースとダイス状にカットしたかぼちゃをとじ込めたプリンの組み合わせが素晴らしく、かぼちゃ本来のおいしさを楽しめます。',
                money: [
                    '￥398'
                ]
            },
            {
                name: 'ミルクレープ',
                picture: './Picture/Doutor/Dessert/6.jpg',
                explain: 'ドトール定番のミルクレープ。最後の一口まで自慢の口どけ感をお楽しみください。',
                money: [
                    '￥387'
                ]
            },
            {
                name: 'スティックシュー カスタード',
                picture: './Picture/Doutor/Dessert/7.jpg',
                explain: 'シュークリームを食べやすいスティック形状にしました。さっくり食感の香ばしいシュー生地が、食欲を促進します。口どけよく、濃厚なカスタードクリームは生地との相性抜群です。',
                money: [
                    '￥255'
                ]
            }
        ]
    }

    function getName() {
        return name
    }

    function getMenu() {
        return menu
    }

    return {
        getName: getName,
        getMenu: getMenu
    }
}())