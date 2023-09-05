<template>
  <div>
    <div style="text-align: center; margin: auto">
      <h2>Dixit Patel</h2>
      <br />
      <VAvatar size="200px">
        <VImg
          v-show="val"
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        />
      </VAvatar>
      <!-- Text Show  -->
      <br />
      <div v-for="item in items" :key="item">
        <u :class="{ active: isActive }">{{ item.search }}</u>
        <button class="btn" @click="page">X</button>
      </div>
      <!-- vuetify in search Bar   -->
      <br />
      <form @submit.prevent="event">
        <VLayout class="overflow-visible" style="height: 56px">
          <VTextField
            v-model="search"
            clearable
            hide-details
            label="Search News"
            prepend-inner-icon="mdi-message"
            single-line
          />
        </VLayout>
        <br />
      </form>
    </div>
  </div>
  <div></div>
  <iframe width="560" height="315" src="https://www.instagram.com/dixitcoder/" frameborder="900"></iframe>
  <div>
    <router-link to="/login">Page Show </router-link>
  </div>
</template>

<script>
let id = 0;
import { useTheme } from "vuetify/lib/framework.mjs";
import chat from "./whatsappList.vue";
export default {
  components: {
    chat,
  },
  data() {
    return {
      done:true,
      value:'red',
      isActive: true,
      val: true,
      search: null,
      items: [{ id: 1, search: "Even You Welcome My House " , done:true }],
    };
  },
  methods: {
    page(){
      this.isActive = !this.isActive
    },
    event() {
      this.items.push({ id: id++, search: this.search , done:true});
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
