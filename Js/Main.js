/**
 * 画面の作成
 */

const initMenuBar = Starbucks.getMenu()
const initMenu = Starbucks.getMenu()['47 JIMOTO']
const initItem = Starbucks.getMenu()['47 JIMOTO'][0]

// ナビゲーションの作成
Navigation.set({
    [Starbucks.getName()]: Starbucks.getMenu(),
    [Doutor.getName()]: Doutor.getMenu(),
    [Excelsior.getName()]: Excelsior.getMenu()
})
Navigation.create()

// メニューバーの作成
MenuBar.set(initMenuBar)
MenuBar.create(Starbucks.getName())

// メニューリストの作成
MenuList.set(initMenu)
MenuList.create()

// メニュー詳細の作成
MenuDetail.set(initItem)
MenuDetail.create()

// 注文の作成
Order.create()

// 会計の作成
Calc.create()