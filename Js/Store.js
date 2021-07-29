Store = (function () {
    let store = {
        [Starbucks.getName()]: Starbucks,
        [Doutor.getName()]: Doutor,
        [Excelsior.getName()]: Excelsior
    }

    function getStore() {
        return store
    }

    return {
        getStore: getStore
    }
}())