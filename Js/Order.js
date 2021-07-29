/**
 * 注文画面
 */

Order = (function () {
    let items = [] // 注文した商品のリスト

    function create() {
        clear()
        createOrder()
        createList()
        createItems()
        createCalc()
    }

    /**
     * 注文画面の削除
     */
    function clear() {
        if (document.getElementById('root-order')) {
            document.getElementById('root-order').remove()
        }
    }

    /**
     * 注文画面の作成
     */
    function createOrder() {
        let order = document.createElement('div')
        order.id = 'root-order'
        document.body.appendChild(order)
    }

    /**
     * 注文リストの作成
     */
    function createList() {
        let list = document.createElement('ul')
        list.id = 'root-order-list'
        document.getElementById('root-order').appendChild(list)
    }

    /**
     * 商品の作成
     */
    function createItems() {
        items.forEach(function (_item, _index) {
            let itemDom = createItem()
            createName(itemDom, _item)
            createMoney(itemDom, _item)
            createButton(itemDom, _index)
        })
    }

    /**
     * 商品の作成
     */
    function createItem() {
        let item = document.createElement('li')
        item.className = 'root-order-list-item'
        document.getElementById('root-order-list').appendChild(item)

        return item
    }

    /**
     * 商品の名前の作成
     */
    function createName(_itemDom, _item) {
        let name = document.createElement('p')
        name.className = 'root-order-list-item-name'
        if (_item.name.length > 20) {
            _item.name = _item.name.substr(0, 18) + '...'
        }
        name.innerText = _item.name + '　'
        _itemDom.appendChild(name)
    }

    /**
     * 商品の料金の作成
     */
    function createMoney(_itemDom, _item) {
        let money = document.createElement('p')
        money.className = 'root-order-list-item-money'
        money.innerText = _item.money
        _itemDom.appendChild(money)
    }

    /**
     * キャンセルボタンの作成
     */
    function createButton(_itemDom, _index) {
        let cancelButton = document.createElement('p')
        cancelButton.id = `root-order-list-item-cancel-${_index}`
        cancelButton.className = 'root-order-list-item-cancel'
        cancelButton.innerText = '×'
        cancelButton.onclick = cancel
        _itemDom.appendChild(cancelButton)
    }

    /**
     * 会計画面の作成
     */
    function createCalc() {
        let sum = 0
        items.forEach(function (_item) {
            let money = /^.*￥([0-9]*)$/.exec(_item.money)[1]
            sum += parseInt(money)
        })
        Calc.set(sum)
        Calc.create()
    }

    /**
     * キャンセル機能
     */
    function cancel(_event) {
        let index = /^.*-([0-9]*)$/.exec(_event.target.id)[1]
        items.splice(index, 1)
        create()
    }

    /**
     * 注文リストに商品を加える
     */
    function add(_item) {
        items.push(_item)
    }

    return {
        create: create,
        add: add
    }
}())