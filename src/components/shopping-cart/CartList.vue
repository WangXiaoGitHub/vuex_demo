<template>
    <div v-for="item in list" :key="item.id">
        <span>{{item.name}}</span> -- 数量：
        <span>{{item.count}}</span>
        <button @click="decrease(item.id)"> - </button>
    </div>
    <div>总额： </div>
</template>
<script>
import store from '../../../store/index'
export default {
    name: 'CarttList',
    computed: {
        list: function () {
            return store.getters.cartItems
        },
        // sum: function () {
        //     return this.list.reduce((pre, curr) => {
        //         return pre + curr.price * curr.count
        //     }, 0)
        // }
    },
    methods: {
        decrease (id) {
            this.$emit("deleteProduct", id)
        }
    }
}
</script>