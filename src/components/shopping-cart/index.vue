<template>
    <ProductList/>
    <hr />
    <CarttList/>
</template>
<script>
import ProductList from './ProductList.vue'
import CarttList from './CartList.vue'
export default {
    name: 'ShoppingCart',
    components: {
        ProductList,
        CarttList
    },
}
</script>