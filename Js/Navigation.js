/**
 * ナビゲーション画面
 */

Navigation = (function () {
    let stores = [] // 店舗のリスト

    /**
     * ナビゲーションの作成
     */
    function create() {
        createNavigation()
        createStores()
    }

    /**
     * ナビゲーションの作成
     */
    function createNavigation() {
        let navigation = document.createElement('div');
        navigation.id = 'root-navigation'
        document.body.appendChild(navigation)
    }

    /**
     * 店舗の作成
     */
    function createStores() {
        let index = 0
        for (let store in stores) {
            createStore(index, store)
            index++
        }
    }

    /**
     * 店舗の作成
     */
    function createStore(_index, _store) {
        let store = document.createElement('div')
        store.id = `root-navigation-${_index}`
        store.innerText = _store
        store.onclick = function () {
            createMenuBar(_store)
        }
        document.getElementById('root-navigation').appendChild(store)
    }

    /**
     * メニューバーの作成
     */
    function createMenuBar(_store) {
        MenuBar.set(stores[_store])
        MenuBar.create()
    }

    /**
     * 店舗のセット
     */
    function set(_stores) {
        stores = _stores
    }

    return {
        create: create,
        set: set
    }
}())