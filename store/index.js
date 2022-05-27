import Vuex from 'vuex'
import {nanoid} from 'nanoid'

export default new Vuex.Store({
    state: {
        productList: [
            {
                id: nanoid(),
                name: 'product1',
                price: 120
            },
            {
                id: nanoid(),
                name: 'product2',
                price: 163
            },
            {
                id: nanoid(),
                name: 'product3',
                price: 201
            }
        ],
        cartList: [
        ]
    },
    getters: {
        cartItems: function (state) {
            let cartList = state.cartList.map(item1 => {
                let prodoct = state.productList.find(p => p.id === item1.id)
               return {...prodoct, count: item1.count}
            })
            return cartList
        },
    },
    mutations: {
        'addProduct': function (state, id) {
            let product = state.cartList.find(obj => obj.id === id)
            if (product) {
                product.count++
            } else {
                state.cartList.push({id, count: 1})
            }
        },
        "deleteProduct": function (state, id) {
            let product = state.cartList.find(obj => obj.id === id)
            if (product) {
                product.count--
            }
            state.cartList.reduce((pre, current) => {
                return current.count > 0 ? [...pre, current] : [...pre]
            }, [])
        }
    }
})