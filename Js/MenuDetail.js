/**
 * 商品詳細画面
 */

MenuDetail = (function () {
    let item;

    function create() {
        clear()
        createDetail()
        createPicture()
        createName()
        createExplain()
        createMoney()
    }

    /**
     * 商品詳細の削除
     */
    function clear() {
        if (document.getElementById('root-menu-detail')) {
            document.getElementById('root-menu-detail').remove()
        }
    }

    /**
     * 商品詳細の作成
     */
    function createDetail() {
        let detail = document.createElement('div')
        detail.id = 'root-menu-detail'
        document.getElementById('root-menu').appendChild(detail)
    }

    /**
     * 商品の写真の作成
     */
    function createPicture() {
        let picture = document.createElement('img')
        picture.id = 'root-menu-detail-picture'
        picture.src = item.picture
        document.getElementById('root-menu-detail').appendChild(picture)
    }

    /**
     * 商品名の作成
     */
    function createName() {
        let name = document.createElement('p')
        name.id = 'root-menu-detail-name'
        name.innerText = item.name
        document.getElementById('root-menu-detail').appendChild(name)
    }

    /**
     * 商品の説明の作成
     */
    function createExplain() {
        let explain = document.createElement('p')
        explain.id = 'root-menu-detail-explain'
        explain.innerText = item.explain
        document.getElementById('root-menu-detail').appendChild(explain)
    }

    /**
     * 商品の料金の作成
     */
    function createMoney() {
        item.money.forEach(function (money, index) {
            createSizeMoney(money, index)
        });
    }

    /**
     * 各サイズの料金の作成
     */
    function createSizeMoney(_money, _index) {
        let money = document.createElement('p')
        money.id = `root-menu-detail-${_index}`
        money.innerText = _money
        money.onclick = createOrder
        document.getElementById('root-menu-detail').appendChild(money)
    }

    /**
     * 注文画面の作成
     */
    function createOrder(event) {
        Order.add({
            name: item.name,
            money: event.target.innerText
        })
        Order.create()
    }

    /**
     * 商品のセット
     */
    function set(_item) {
        item = _item
    }

    return {
        create: create,
        set: set
    }
}())