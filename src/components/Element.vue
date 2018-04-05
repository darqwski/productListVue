<template>
   <div class="product">{{ text }}  - {{ cost }} </div>

</template>


<script>
    export default {
        props: ['text', 'cost']
    }
</script>
<style scoped>

  .product{
    font-size: 200%;
    background-color: #E0F2F1;
    text-align: center;
  }

</style>
