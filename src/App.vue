<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute();

</script>

<template>
  <div v-if="route.path !== '/'" style="background-color: rgba(138, 137, 137, 0.1);" class=" w-full h-16 fixed bottom-0 flex justify-between items-center px-5 text-center z-50 ba">
        <div class="pro">
          <img src="@/assets/images/carbon_catalog.svg" class="icon" alt="">
          <span>Catalog</span>
        </div>
        <div class="pro">
          <img src="@/assets/images/search.svg" class="icon" alt="">
          <span>Search</span>
        </div>
        <div class="pro">
          <img src="@/assets/images/heart-light.svg" class="icon" alt="">
          <span>Favorites</span>
        </div>
        <div class="pro">
          <img src="@/assets/images/Group.svg" class="icon" alt="">
          <span>Profile</span>
        </div>
    </div>
  <RouterView />
</template>

<style scoped>
  .icon{
    width: 25px;
    height: 24px;
  }
  .pro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ba{
    backdrop-filter: blur(10px);
  }
</style>
