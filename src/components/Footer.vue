<template>
  <div class="footer">ŁĄCZNY KOSZT PRODUKTÓW: {{this.sum}}</div>

</template>

<script>
    export default {
      props: ['sum']
    }
</script>

<style scoped>
.footer{
  width: 100%;
  background-color: #cecece;
  padding-top:0.5%;
  padding-left:0.5%;
  font-size: 200%;
}
</style>
