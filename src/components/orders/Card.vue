<template>
  <div class="card">
    <img :src="product.image" alt="Product Image">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart(product) {
      // Add the product to the cart
      // You can dispatch an action to update the store or call an API
    }
  }
}
</script>

<style>
.card {
  width: 300px;
  height: 400px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  padding: 20px;
}

.card img {
  width: 100%;
}
</style>