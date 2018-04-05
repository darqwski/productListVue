<template>
  <div class="inputContainer">
    <h1> Lista Produktów</h1>
  <form @submit.prevent="addElement">
    <input type="text" placeholder="Podaj nazwe produktu: " v-model="text">
    <input type="number" placeholder="Podaj koszt produktu: " v-model="cost">
    <button type="submit">Dodaj produkt</button>
  </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {text: '', cost: ''}
      },
    methods: {
      addElement() {
          this.$emit('addElement', { text: this.text, cost: this.cost});
      }
    }
  }
</script>

<style scoped>
  .inputContainer{
  margin-bottom: 5%;
  }
  form {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-column-gap: 1%;

  }
  input{
    font-size:150%;
  }
</style>

