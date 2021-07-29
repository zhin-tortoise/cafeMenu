/**
 * メニューバー画面
 */

MenuBar = (function () {
    let menus = [] // メニューの種類

    /**
     * メニューバーの作成
     */
    function create() {
        clear()
        createMenuBar()
        createMenus()
    }

    /**
     * メニューバーの削除
     */
    function clear() {
        if (document.getElementById('root-menuBar')) {
            document.getElementById('root-menuBar').remove()
        }
    }

    /**
     * メニューバーの作成
     */
    function createMenuBar() {
        let menuBar = document.createElement('div')
        menuBar.id = 'root-menuBar'
        document.body.appendChild(menuBar)
    }

    /**
     * メニューの作成
     */
    function createMenus() {
        for (let menu in menus) {
            createMenu(menu)
        }
    }

    /**
     * メニューの作成
     */
    function createMenu(_menu) {
        let menu = document.createElement('p')
        menu.className = 'root-menuBar-item'
        menu.innerText = _menu

        menu.onclick = function () {
            MenuList.set(menus[_menu])
            MenuList.create()
        }
        document.getElementById('root-menuBar').appendChild(menu)
    }

    /**
     * メニューのセット
     */
    function set(_menus) {
        menus = _menus
    }

    return {
        create: create,
        set: set
    }
}())