/**
 * 会計画面
 */

Calc = (function () {
    let total = 0 // 商品の合計金額

    /**
     * 会計画面の作成
     */
    function create() {
        clear()
        createCalc()
        createSum()
        createSumNumber()
        createPay()
        createPayNumber()
        createButton()
        createChange()
        createChangeNumber()
    }

    /**
     * 会計画面の削除
     */
    function clear() {
        if (document.getElementById('root-calc')) {
            document.getElementById('root-calc').remove()
        }
    }

    /**
     * 会計画面の作成
     */
    function createCalc() {
        let calc = document.createElement('div')
        calc.id = 'root-calc'
        document.body.appendChild(calc)
    }

    /**
     * 合計金額の文字列の作成
     */
    function createSum() {
        let sum = document.createElement('p')
        sum.id = 'root-calc-sum'
        sum.innerText = '合計金額 : '
        document.getElementById('root-calc').appendChild(sum)
    }

    /**
     * 合計金額の作成
     */
    function createSumNumber() {
        let sumNumber = document.createElement('p')
        sumNumber.id = 'root-calc-sumNumber'
        sumNumber.innerText = total
        document.getElementById('root-calc').appendChild(sumNumber)
    }

    /**
     * 支払金額の文字列の作成
     */
    function createPay() {
        let pay = document.createElement('p')
        pay.id = 'root-calc-pay'
        pay.innerText = '支払い金額 : '
        document.getElementById('root-calc').appendChild(pay)
    }

    /**
     * 支払金額の作成
     */
    function createPayNumber() {
        let payNumber = document.createElement('p')
        payNumber.id = 'root-calc-payNumber'
        payNumber.contentEditable = true
        document.getElementById('root-calc').appendChild(payNumber)
    }

    /**
     * 支払いボタンの作成
     */
    function createButton() {
        let button = document.createElement('p')
        button.id = 'root-calc-button'
        button.innerText = '支払い'
        button.onclick = payment
        document.getElementById('root-calc').appendChild(button)
    }

    /**
     * おつりの文字列の作成
     */
    function createChange() {
        let change = document.createElement('p')
        change.id = 'root-calc-change'
        change.innerText = 'おつり : '
        document.getElementById('root-calc').appendChild(change)
    }

    /**
     * おつりの作成
     */
    function createChangeNumber() {
        let changeNumber = document.createElement('p')
        changeNumber.id = 'root-calc-changeNumber'
        document.getElementById('root-calc').appendChild(changeNumber)
    }

    /**
     * 支払い
     */
    function payment() {
        let pay = document.getElementById('root-calc-payNumber').innerText
        let change = pay - total
        document.getElementById('root-calc-changeNumber').innerText = change
    }

    /**
     * 合計金額の入力
     */
    function set(_total) {
        total = _total
    }

    return {
        create: create,
        set: set
    }
}())