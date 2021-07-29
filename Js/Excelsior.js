Excelsior = (function () {
    let name = 'エクセルシオール'
    let menu = {
        'ホットドリンク': [{
                name: 'ハニーオルゾーラテ ～アーモンドミルク使用～',
                picture: './Picture/Excelsior/HotDrink/1.jpg',
                explain: '植物性ミルクを使用したノンカフェインドリンクを作りました。オルゾー・アーモンドミルク・はちみつを入れ、コクを出すためにブラウンシュガーをプラスしました。オルゾーの風味とトッピングのはちみつの優しい甘さがぴったりの商品です。',
                money: [
                    'S ￥450',
                    'M ￥500',
                    'L ￥550'
                ]
            },
            {
                name: 'コーヒー',
                picture: './Picture/Excelsior/HotDrink/2.jpg',
                explain: 'マイルドな口あたりが特徴で、どなたにも親しんでいただけるコーヒーです。',
                money: [
                    'S ￥305',
                    'M ￥357',
                    'L ￥408'
                ]
            },
            {
                name: 'カフェラテ',
                picture: './Picture/Excelsior/HotDrink/3.jpg',
                explain: 'しっかりしたコーヒー感が自慢のまろやかな味。フードにもあう、すっきりしたおいしさです。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: 'カプチーノ',
                picture: './Picture/Excelsior/HotDrink/4.jpg',
                explain: '豊かな泡立ちとまろやかな味わい。定番だからこそ、しっかりとつくりました。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: 'カフェモカ',
                picture: './Picture/Excelsior/HotDrink/5.jpg',
                explain: 'ココアにエスプレッソをあわせた程よい甘さのドリンク。エスプレッソのコーヒー感とココアのコクで奥深い味わいに！',
                money: [
                    'S ￥398',
                    'M ￥448',
                    'L ￥499'
                ]
            },
            {
                name: 'アーモンドキャラメルラテ',
                picture: './Picture/Excelsior/HotDrink/6.jpg',
                explain: 'アーモンドシロップの香ばしさと、どこか懐かしいキャラメルの風味が人気のラテです。',
                money: [
                    'S ￥408',
                    'M ￥458',
                    'L ￥509'
                ]
            },
            {
                name: 'メープル ラテ',
                picture: './Picture/Excelsior/HotDrink/7.jpg',
                explain: 'メープルシロップのやさしい甘さと深いコクのロングセラー・ドリンクです。',
                money: [
                    'S ￥408',
                    'M ￥458',
                    'L ￥509'
                ]
            },
            {
                name: 'エスプレッソ',
                picture: './Picture/Excelsior/HotDrink/8.jpg',
                explain: 'コーヒーの旨味を凝縮した、豊潤な香りとすっきりとした苦味。おいしさの基準です。',
                money: [
                    'S ￥305',
                    'M ￥357'
                ]
            },
            {
                name: '豆乳ラテ',
                picture: './Picture/Excelsior/HotDrink/9.jpg',
                explain: '定番のカフェラテを豆乳で作りました。豆乳とエスプレッソのバランスがマッチしたやさしい味わいの豆乳ラテです。',
                money: [
                    'S ￥398',
                    'M ￥448',
                    'L ￥499'
                ]
            },
            {
                name: '豆乳カプチーノ',
                picture: './Picture/Excelsior/HotDrink/10.jpg',
                explain: '豆乳で作ったカプチーノです。',
                money: [
                    'S ￥398',
                    'M ￥448',
                    'L ￥499'
                ]
            },
            {
                name: '豆乳アーモンドキャラメルラテ',
                picture: './Picture/Excelsior/HotDrink/11.jpg',
                explain: '豆乳で作ったアーモンドキャラメルラテです。',
                money: [
                    'S ￥438',
                    'M ￥489',
                    'L ￥540'
                ]
            },
            {
                name: '豆乳メープルラテ',
                picture: './Picture/Excelsior/HotDrink/12.jpg',
                explain: '豆乳で作ったメープルラテです。',
                money: [
                    'S ￥438',
                    'M ￥489',
                    'L ￥540'
                ]
            },
            {
                name: '豆乳ロイヤルミルクティー',
                picture: './Picture/Excelsior/HotDrink/13.jpg',
                explain: 'エクセルシオールカフェオリジナルのミルクティー専用茶葉を使用し、豆乳で作りました。まろやかな味わいが楽しめます。',
                money: [
                    'S ￥418',
                    'M ￥468',
                    'L ￥520'
                ]
            },
            {
                name: '豆乳メープルロイヤルミルクティー',
                picture: './Picture/Excelsior/HotDrink/14.jpg',
                explain: '豆乳で作ったメープルロイヤルミルクティーです。',
                money: [
                    'S ￥458',
                    'M ￥509',
                    'L ￥561'
                ]
            },
            {
                name: '豆乳宇治抹茶ラテ',
                picture: './Picture/Excelsior/HotDrink/15.jpg',
                explain: '人気の宇治抹茶ラテを豆乳で作ったドリンクです。抹茶の苦みと豆乳のまろやかさが良く合います。豆乳ドリンクで「ホッ」と一息、リラックスした時間をお過ごしください。',
                money: [
                    'S ￥448',
                    'M ￥499',
                    'L ￥550'
                ]
            },
            {
                name: 'ティー',
                picture: './Picture/Excelsior/HotDrink/16.jpg',
                explain: 'ダージリン・アッサム・アールグレイの3種類から選べる本格的な紅茶です。',
                money: [
                    'M ￥305'
                ]
            },
            {
                name: 'ロイヤルミルクティー',
                picture: './Picture/Excelsior/HotDrink/17.jpg',
                explain: 'エクセオリジナル・ミルクティー専用茶葉を使用。紅茶の上質な香りとミルクのコクが楽しめます。',
                money: [
                    'S ￥387',
                    'M ￥438',
                    'L ￥489'
                ]
            },
            {
                name: 'メープルロイヤルミルクティー',
                picture: './Picture/Excelsior/HotDrink/18.jpg',
                explain: 'メープルシロップのやさしい甘さと深いコクが、ミルクティーとベストマッチ。',
                money: [
                    'S ￥427',
                    'M ￥479',
                    'L ￥530'
                ]
            },
            {
                name: '宇治抹茶ラテ',
                picture: './Picture/Excelsior/HotDrink/19.jpg',
                explain: '抹茶を点てるかのように1杯ずつ丁寧に作ることで、抹茶の風味、味わいが際立ち、ミルクの甘味とも良く合います。',
                money: [
                    'S ￥418',
                    'M ￥468',
                    'L ￥520'
                ]
            },
            {
                name: 'ココア',
                picture: './Picture/Excelsior/HotDrink/20.jpg',
                explain: '濃厚な味わいも残しつつ、すっきりとした甘さに。ミルクでコクもプラスしたおすすめの一品です。',
                money: [
                    'S ￥377',
                    'M ￥427',
                    'L ￥479'
                ]
            }
        ],
        'アイスドリンク': [{
                name: 'プロテインミルクスムージー～バナナキャラメル～',
                picture: './Picture/Excelsior/IceDrink/1.jpg',
                explain: 'マッスルテック社のホエイプロテインを使用したキャラメル風味のプロテインミックスパウダーと、バナナ、ミルクを使った飲みやすい味わいのスムージーです。',
                money: [
                    'S ￥480',
                    'M ￥555'
                ]
            },
            {
                name: 'ビネガーソーダ～ピーチ＆レモン～',
                picture: './Picture/Excelsior/IceDrink/2.jpg',
                explain: '国産白桃果汁などを合わせたりんご酢ベースに瀬戸内産レモン果汁とピールを使用したソースとスライスレモンをトッピングし、炭酸で割ったスッキリした飲み心地の一品。アクセントのミックスベリーとのピンクの濃淡がかわいらしいソーダです。',
                money: [
                    'M ￥499'
                ]
            },
            {
                name: 'ビネガーソーダ～りんご＆シャインマスカット～',
                picture: './Picture/Excelsior/IceDrink/3.jpg',
                explain: 'りんご果汁などを合わせたりんご酢ベースに長野県産シャインマスカット果汁を使用したジュレを入れ、炭酸で割った爽やかな飲み心地の一品。トッピングのオレンジスライスとぶどうが目にも鮮やか。',
                money: [
                    'M ￥499'
                ]
            },
            {
                name: '静岡県産温州みかんジュース',
                picture: './Picture/Excelsior/IceDrink/4.jpg',
                explain: '静岡の生産者の方々が手摘みした温州みかんを使用したみかんジュースです。添加物を加えず、またみかんを皮ごと丸搾りしているため果実本来の爽やかな酸味と甘みを味わえます。',
                money: [
                    'S ￥460',
                    'M ￥511',
                    'L ￥563'
                ]
            },
            {
                name: 'プロテインスムージー バナナキャラメル～アーモンドミルク使用～',
                picture: './Picture/Excelsior/IceDrink/5.jpg',
                explain: 'ホエイプロテインを使用したキャラメル風味のプロテインミックスパウダー、バナナ、アーモンドミルクを使用し、飲みやすい味わいのスムージーにしました。1食あたり186kcal、たんぱく質15.2ｇ（サンプル品による分析値）で、健康を意識する方にオススメのドリンクです。',
                money: [
                    'M ￥555'
                ]
            },
            {
                name: 'アイスハニーオルゾーラテ ～アーモンドミルク使用～',
                picture: './Picture/Excelsior/IceDrink/6.jpg',
                explain: '植物性ミルクを使用したノンカフェインドリンクを作りました。オルゾー・アーモンドミルク・はちみつを入れ、コクを出すためにブラウンシュガーをプラスしました。オルゾーの風味とトッピングのはちみつの優しい甘さがぴったりの商品です。',
                money: [
                    'S ￥450',
                    'M ￥500',
                    'L ￥550'
                ]
            },
            {
                name: 'アイスコーヒー',
                picture: './Picture/Excelsior/IceDrink/7.jpg',
                explain: 'アラビカ種を100％使用し、苦味を抑え香ばしさと甘味を感じられる一杯に仕上げました。',
                money: [
                    'S ￥305',
                    'M ￥357',
                    'L ￥408'
                ]
            },
            {
                name: 'アイス カフェラテ',
                picture: './Picture/Excelsior/IceDrink/8.jpg',
                explain: 'エスプレッソと冷たいミルクのバランスを追求した、人気の定番ドリンクです。',
                money: [
                    'S ￥367',
                    'M ￥418',
                    'L ￥468'
                ]
            },
            {
                name: 'アイス カフェモカ',
                picture: './Picture/Excelsior/IceDrink/9.jpg',
                explain: 'ココアにエスプレッソをあわせた程よい甘さのドリンク。エスプレッソのコーヒー感とココアのコクで奥深い味わいに！',
                money: [
                    'S ￥398',
                    'M ￥448',
                    'L ￥499'
                ]
            },
            {
                name: 'アイス アーモンドキャラメルラテ',
                picture: './Picture/Excelsior/IceDrink/10.jpg',
                explain: 'アーモンドシロップの香ばしさと、どこか懐かしいキャラメルの風味が人気のラテです。',
                money: [
                    'S ￥408',
                    'M ￥458',
                    'L ￥509'
                ]
            },
            {
                name: 'アイス メープルラテ',
                picture: './Picture/Excelsior/IceDrink/11.jpg',
                explain: 'メープルシロップのやさしい甘さと深いコクのロングセラー・ドリンクです。',
                money: [
                    'S ￥408',
                    'M ￥458',
                    'L ￥509'
                ]
            },
            {
                name: 'アイス豆乳ラテ',
                picture: './Picture/Excelsior/IceDrink/12.jpg',
                explain: '定番のカフェラテを豆乳で作りました。豆乳とエスプレッソのバランスがマッチしたやさしい味わいの豆乳ラテです。',
                money: [
                    'S ￥398',
                    'M ￥448',
                    'L ￥499'
                ]
            },
            {
                name: 'アイス豆乳アーモンドキャラメルラテ',
                picture: './Picture/Excelsior/IceDrink/13.jpg',
                explain: '豆乳で作ったアーモンドキャラメルラテです。',
                money: [
                    'S ￥438',
                    'M ￥489',
                    'L ￥540'
                ]
            },
            {
                name: 'アイス豆乳メープルラテ',
                picture: './Picture/Excelsior/IceDrink/14.jpg',
                explain: '豆乳で作ったメープルラテです。',
                money: [
                    'S ￥438',
                    'M ￥489',
                    'L ￥540'
                ]
            },
            {
                name: 'アイス豆乳ロイヤルミルクティー',
                picture: './Picture/Excelsior/IceDrink/15.jpg',
                explain: 'エクセルシオールカフェオリジナルのミルクティー専用茶葉を使用し、豆乳で作りました。まろやかな味わいが楽しめます。',
                money: [
                    'S ￥418',
                    'M ￥468',
                    'L ￥520'
                ]
            },
            {
                name: 'アイス豆乳メープルロイヤルミルクティー',
                picture: './Picture/Excelsior/IceDrink/16.jpg',
                explain: '豆乳で作ったメープルロイヤルミルクティーです。',
                money: [
                    'S ￥458',
                    'M ￥509',
                    'L ￥561'
                ]
            },
            {
                name: 'アイス豆乳宇治抹茶ラテ',
                picture: './Picture/Excelsior/IceDrink/17.jpg',
                explain: '人気の宇治抹茶ラテを豆乳で作ったドリンクです。抹茶の苦みと豆乳のまろやかさが良く合います。豆乳ドリンクで「ホッ」と一息、リラックスした時間をお過ごしください。',
                money: [
                    'S ￥448',
                    'M ￥499',
                    'L ￥550'
                ]
            },
            {
                name: 'アイスティー',
                picture: './Picture/Excelsior/IceDrink/18.jpg',
                explain: '厳選した茶葉から生まれるフルーティーな香りとコクのある味わいが特長です。',
                money: [
                    'S ￥336',
                    'M ￥387',
                    'L ￥438'
                ]
            },
            {
                name: 'アイス ロイヤルミルクティー',
                picture: './Picture/Excelsior/IceDrink/19.jpg',
                explain: 'エクセオリジナル・ミルクティー専用茶葉を使用。紅茶の上質な香りとミルクのコクが楽しめます。',
                money: [
                    'S ￥387',
                    'M ￥438',
                    'L ￥489'
                ]
            },
            {
                name: 'アイス メープルロイヤルミルクティー',
                picture: './Picture/Excelsior/IceDrink/20.jpg',
                explain: 'メープルシロップのやさしい甘さと深いコクが、ミルクティーとベストマッチ。',
                money: [
                    'S ￥427',
                    'M ￥479',
                    'L ￥530'
                ]
            },
            {
                name: 'レモネードソーダ',
                picture: './Picture/Excelsior/IceDrink/21.jpg',
                explain: 'レモンの爽やかな酸味と、炭酸のすっきり感が暑い夏にぴったりのドリンクです。',
                money: [
                    'M ￥499'
                ]
            },
            {
                name: 'アイス 宇治抹茶ラテ',
                picture: './Picture/Excelsior/IceDrink/22.jpg',
                explain: '抹茶を点てるかのように1杯ずつ丁寧に作ることで、抹茶の風味、味わいが際立ち、ミルクの甘味とも良く合います。',
                money: [
                    'S ￥418',
                    'M ￥468',
                    'L ￥520'
                ]
            },
            {
                name: 'アイス ココア',
                picture: './Picture/Excelsior/IceDrink/23.jpg',
                explain: '濃厚な味わいも残しつつ、すっきりとした甘さに。ミルクでコクもプラスしたおすすめの一品です。',
                money: [
                    'S ￥377',
                    'M ￥427',
                    'L ￥479'
                ]
            },
            {
                name: 'ペリエ',
                picture: './Picture/Excelsior/IceDrink/24.jpg',
                explain: '南フランス産の天然炭酸入りナチュラルミネラルウォーターです。',
                money: [
                    '￥387'
                ]
            }
        ],
        'パニーニ': [{
                name: 'パストラミビーフ＆カマンベール ～大葉の香り～',
                picture: './Picture/Excelsior/Panino/1.jpg',
                explain: 'ボリュームあるパストラミビーフに、コクのあるカマンベールチーズをあわせたサンド。大葉の香りで後味もさわやかです。',
                money: [
                    '￥489'
                ]
            },
            {
                name: 'ツナタプナード&チェダーチーズ',
                picture: './Picture/Excelsior/Panino/2.jpg',
                explain: 'オリーブやアンチョビの入った「タプナードソース」であえたツナと、とろ～りとろけるチェダーチーズのサンド。味、ボリュームともに満足感ある商品です。',
                money: [
                    '￥479'
                ]
            },
            {
                name: 'スモークハム＆ゴーダチーズ',
                picture: './Picture/Excelsior/Panino/3.jpg',
                explain: 'スモークハムとゴーダチーズを使用した、シンプルで飽きのこない味わいです。',
                money: [
                    '￥408'
                ]
            },
            {
                name: 'プレーンドッグ',
                picture: './Picture/Excelsior/Panino/4.jpg',
                explain: '食べごたえのあるジューシーな粗挽きソーセージを香ばしい全粒粉入りパンにはさみ、表面をぱりっと焼き上げました。',
                money: [
                    '￥326'
                ]
            },
            {
                name: 'チーズドッグ',
                picture: './Picture/Excelsior/Panino/5.jpg',
                explain: 'プレーンドッグに相性抜群のゴーダチーズをとろ～りトッピング。おいしさ倍増です。',
                money: [
                    '￥448'
                ]
            }
        ],
        'ごはん': [{
                name: '海老とブロッコリーのビスク',
                picture: './Picture/Excelsior/Rice/1.jpg',
                explain: 'オマール海老のうま味が詰まった、コク深いビスクソースに海老とブロッコリーをトッピング。海老好きにはたまらない味わいです。',
                money: [
                    '￥680'
                ]
            },
            {
                name: 'チキンドリア ～トマトクリーム仕立て～',
                picture: './Picture/Excelsior/Rice/2.jpg',
                explain: '香ばしく焼き上げたチキンと、チーズがよく合います。ホワイトとトマトのWソースが、どこか懐かしい味わいです。',
                money: [
                    '￥720'
                ]
            }
        ],
        'パスタ': [{
                name: 'ペスカトーレ',
                picture: './Picture/Excelsior/Pasta/1.jpg',
                explain: 'リコピンがたっぷり入った濃厚な味わいのトマトのソースに、ムール貝と海老をメイン食材にしたパスタです。モッツァレラチーズのミルキーさと、クレソンの爽やかな香りと辛味がアクセントになり、味を引き締めてくれます。魚介の旨味と香りがしっかりと感じられる一品です。',
                money: [
                    '￥940'
                ]
            },
            {
                name: 'あさりとトマトのアーリオ・オーリオ',
                picture: './Picture/Excelsior/Pasta/2.jpg',
                explain: 'あさりの旨味が味わえるオイルパスタです。はじめはそのまま、途中でレモンを絞って食べるのがオススメです。',
                money: [
                    '￥774'
                ]
            },
            {
                name: 'クリーミーボロネーゼ',
                picture: './Picture/Excelsior/Pasta/3.jpg',
                explain: '定番のボロネーゼをリニューアルしました。クリーミーでコクのある味わいのボロネーゼです。',
                money: [
                    '￥824'
                ]
            },
            {
                name: 'チーズとベーコン香る カルボナーラ',
                picture: './Picture/Excelsior/Pasta/4.jpg',
                explain: '粉チーズと薄削りのチーズの2種類をトッピングした、濃厚な味わいのカルボナーラです。',
                money: [
                    '￥825'
                ]
            },
            {
                name: 'エビとアボカドのジェノベーゼ',
                picture: './Picture/Excelsior/Pasta/5.jpg',
                explain: 'ジェノベーゼをリニューアルしました。エビ×ごろっとアボカドのおいしい組み合わせに、バジルソースが豊かに香ります。',
                money: [
                    '￥815'
                ]
            },
            {
                name: '瀬戸内海産しらすと大葉の明太子パスタ',
                picture: './Picture/Excelsior/Pasta/6.jpg',
                explain: 'しっかり辛味のある明太子とさっぱりとしたしらすと大葉のパスタです。はじめはそのまま、途中でレモンを絞って食べるのがオススメです。',
                money: [
                    '￥795'
                ]
            }
        ],
        'モーニング': [{
                name: '2種のチーズワッフルプレート はちみつ付き',
                picture: './Picture/Excelsior/Morning/1.jpg',
                explain: 'シンプルに素材の味を活かしたワッフルに、ゴーダチーズ・チェダーチーズをのせて焼き上げたことで、2種類の味わいをお楽しみいただけます。添えてあるはちみつをかけると甘じょっぱい味わいで絶品です。野菜も食べたい方にオススメのモーニングプレートです。',
                money: [
                    '￥408'
                ]
            },
            {
                name: 'クロックムッシュ',
                picture: './Picture/Excelsior/Morning/2.jpg',
                explain: 'ジューシーなジャンボンハムとベシャメルソースをはさみ、 2種類のチーズをのせて焼き上げました。',
                money: [
                    '￥305'
                ]
            },
            {
                name: '厚切りトーストプレート',
                picture: './Picture/Excelsior/Morning/3.jpg',
                explain: 'バター、卵、砂糖を使った、ほんのりした甘味と歯切れの良さが特徴のブリオッシュ食パンです。野菜も食べたい方にオススメのモーニングプレートです。',
                money: [
                    '￥338'
                ]
            },
            {
                name: 'ジャンボンハム・レタスサンド',
                picture: './Picture/Excelsior/Morning/4.jpg',
                explain: '短時間できちんと食べたい。そんなわがままに応えてくれる、エクセのモーニング。お口に運べば、ジャンボンハムのジューシーさと、シャキシャキ野菜で、朝からパワーアップ♪',
                money: [
                    '￥346'
                ]
            }
        ],
        'ケーキ': [{
                name: '糖質50%※オフ　レアチーズケーキ',
                picture: './Picture/Excelsior/Cake/1.jpg',
                explain: '小麦粉の一部をアーモンドプードルに、砂糖の一部をエリスリトールに置き換えることにより糖質を抑えました。ヨーグルトとクリームチーズのさっぱりとしたレアチーズムースにレモンカードで酸味のアクセントを、アーモンドで食感のアクセントを加えています。糖質控えめでも最後までお楽しみいただける仕立てになっています。',
                money: [
                    '￥490'
                ]
            },
            {
                name: '3種のチョコレートケーキ～ベルギー産クーベルチュールチョコレート使用～',
                picture: './Picture/Excelsior/Cake/2.jpg',
                explain: 'カカオ分55%、56%、73％の3種のチョコレートを使用したケーキです。ムース部分にカカオ分73％のチョコレートを加えることで、ビターな味わいに仕上げています。また、カカオ豆をローストして細かく砕いたカカオニブをアクセントに加えており、食感もお楽しみいただける一品です。',
                money: [
                    '￥495'
                ]
            },
            {
                name: 'ごろっとりんごのアップルパイ',
                picture: './Picture/Excelsior/Cake/3.jpg',
                explain: 'りんごのコンポートとスポンジクラムをパイ生地で包んだ、シンプルな仕立てのクラシックな王道アップルパイです。',
                money: [
                    '￥499'
                ]
            },
            {
                name: 'ミルクレープ',
                picture: './Picture/Excelsior/Cake/4.jpg',
                explain: '薄く焼き上げたクレープ生地に、口溶けのよいホイップクリームをサンド。端までやわらかく、しっとりとしたミルクレープです。',
                money: [
                    '￥468'
                ]
            },
            {
                name: 'ニューヨークチーズケーキ',
                picture: './Picture/Excelsior/Cake/5.jpg',
                explain: 'しっとりとした食感、チーズのコクが味わえるベイクドチーズケーキ。',
                money: [
                    '￥479'
                ]
            }
        ],
        'アルコール': [{
                name: '【ビール】ハイネケン（330ml）',
                picture: './Picture/Excelsior/Alcohol/1.jpg',
                explain: 'コクのあるバランスの取れた味わいとほのかなフルーツの香り。',
                money: [
                    '￥693'
                ]
            },
            {
                name: '【ビール】ギネス エクストラスタウト（330ml）',
                picture: './Picture/Excelsior/Alcohol/2.jpg',
                explain: '苦味と甘味が絶妙に調和したホップ香る爽やかな味わい。キレの良いドライな後味。',
                money: [
                    '￥733'
                ]
            },
            {
                name: '【ワイン・赤】セント・ハレット タティアラ カベルネ＆シラーズ（180ml）',
                picture: './Picture/Excelsior/Alcohol/3.jpg',
                explain: 'カシスやラズベリーの中にほのかにスパイスのニュアンスが漂う、果実味たっぷりの味わいです。',
                money: [
                    '￥591'
                ]
            },
            {
                name: '【ワイン・白】セント・ハレット タティアラ シャルドネ（180ml）',
                picture: './Picture/Excelsior/Alcohol/4.jpg',
                explain: 'フルーツを思わせる香りが魅力的で、ブドウそのものを味わっているような果実感と酸味のバランスが心地よく感じられます。',
                money: [
                    '￥591'
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