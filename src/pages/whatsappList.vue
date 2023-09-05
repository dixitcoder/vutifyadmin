<script setup>
import { useRoute } from "vue-router";
import AccountSettingsAccount from "@/pages/search.vue";
import AccountSettingsNotification from "@/pages/About.vue";
import AccountSettingsSecurity from "@/pages/Shopping.vue";

const route = useRoute();
const activeTab = ref(route.params.tab);

// tabs
const tabs = [
  {
    title: "search",
    icon: "mdi-search",
    tab: "account",
  },
  {
    title: "Security",
    icon: "mdi-shopping",
    tab: "security",
  },
  {
    title: "Notifications",
    icon: "mdi-cart",
    tab: "notification",
  },
];
</script>

<template>
  <a href="http://localhost:5173/">Login Page</a>
  <div>
    <VTabs v-model="activeTab" show-arrows>
      <VTab v-for="item in tabs" :key="item.icon" :value="item.tab">
        <VIcon size="20" start :icon="item.icon" />
        {{ item.title }}
      </VTab>
    </VTabs>
    <VDivider />

    <VWindow v-model="activeTab" class="mt-5 disable-tab-transition">
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="notification">
        <AccountSettingsNotification />
      </VWindowItem>
    </VWindow>
  </div>
</template>
