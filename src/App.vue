<template>
  <div id="app">
    <app-prompter v-on:addElement="addElement"></app-prompter>

    <div class="productList">
      <app-element v-for="item in items" :text=item.text :cost=item.cost ></app-element>
    </div>
    <app-footer :sum=totalCost></app-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    addElement(element) {
      if(element.cost>0&&element.name!=""){
        element.id = this.items.length;
        this.items.push(element);
      }

    }
  },
  computed:{
    totalCost(){
      var all=0;
      for(var i=0;i<this.items.length;i++)
        all+=parseInt(this.items[i].cost);
      return all
    }
  }
}
</script>

<style>
  #app {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-row-gap: 1%;
    height: 100%;
    width: 100%;

  }
  .productList{
    display:grid;
    grid-template-columns:auto auto auto;
    margin-bottom:15%;
    grid-row-gap: 1%;
    grid-column-gap: 1%;
  }
  input {
  }

</style>
