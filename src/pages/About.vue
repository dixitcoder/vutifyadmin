<template>
  <h2>Dixit Patel</h2>
  <v-btn @click="event">Click</v-btn>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },
    methods: {
     async event(){
      const data = await fetch('https://dummyjson.com/products')
      const json = await data.json()
      let pro = json.products
      console.log(pro)
      }
    },
}
</script>
