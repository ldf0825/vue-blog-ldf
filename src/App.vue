<template>
  <div id="app">
    <HeaderBlogs />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import HeaderBlogs from "./components/Header";

export default {
  name: "App",
  components: {
    HeaderBlogs
  }
};
</script>
<style>
</style>
