// import Vue from 'vue'
import Vuex from 'vuex'
import {nanoid} from 'nanoid'

// Vue.use(Vuex)
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
            // let products = []
            return state.cartList.map(item1 => {
                let prodoct = state.productList.find(p => p.id === item1.id)
               return {...prodoct, count: item1.count}
            })
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
        }
    }
})