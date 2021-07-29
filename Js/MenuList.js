/**
 * 商品リスト画面
 */

MenuList = (function () {
    let items = [] // メニューリスト

    /**
     * 商品リスト画面の作成
     */
    function create() {
        clear()
        createMenu()
        createList()
        createItems()
    }

    /**
     * 商品リストの削除
     */
    function clear() {
        if (document.getElementById('root-menu-list')) {
            document.getElementById('root-menu-list').remove()
        }
    }

    /**
     * メニューの作成
     */
    function createMenu() {
        if (!document.getElementById('root-menu')) {
            let menu = document.createElement('div')
            menu.id = 'root-menu'
            document.body.appendChild(menu)
        }
    }

    /**
     * メニューリストの作成
     */
    function createList() {
        let list = document.createElement('ul')
        list.id = 'root-menu-list'
        document.getElementById('root-menu').appendChild(list)
    }

    /**
     * 商品の作成
     */
    function createItems() {
        items.forEach(function (item) {
            let itemDom = createItem(item)
            createPicture(itemDom, item)
            createExplain(itemDom, item)
        })
    }

    /**
     * 商品の作成
     */
    function createItem(_item) {
        let item = document.createElement('li')
        item.className = 'root-menu-list-item'
        item.onclick = function () {
            MenuDetail.set(_item)
            MenuDetail.create()
        }
        document.getElementById('root-menu-list').appendChild(item)

        return item
    }

    /**
     * 商品の写真の作成
     */
    function createPicture(_itemDom, _item) {
        let picture = document.createElement('img')
        picture.className = 'root-menu-list-item-picture'
        picture.src = _item.picture
        _itemDom.appendChild(picture)
    }

    /**
     * 商品の説明の作成
     */
    function createExplain(_itemDom, _item) {
        let explain = document.createElement('p')
        explain.className = 'root-menu-list-item-explain'
        explain.innerText = _item.name
        _itemDom.appendChild(explain)
    }

    /**
     * メニューリストのセット
     */
    function set(_items) {
        items = _items
    }

    return {
        create: create,
        set: set
    }
}())