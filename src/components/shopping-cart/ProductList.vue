<template>
    <div v-for="item in list" :key="item.id">
        <span>{{item.name}}</span> -- 
        <span>{{item.price}}</span>
        <button @click="increase(item.id)"> + </button>
        </div>
</template>
<script>
import store from '../../../store/index'
export default {
    name: 'ProductList',
    computed: {
        list: () => store.state.productList
    },
    methods: {
        increase (id) {
            store.commit('addProduct', {id})
        }
    }
}
</script>
<style lang="less">
button {
    margin-left: 20px;
}
</style>