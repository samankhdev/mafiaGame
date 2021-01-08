<template>
  <div class="centerInParent">
    <div class="outOfHomeDiv">
      <router-link to="/select-user" class="btn btn-start">شروع
        <span class="div-icon">
      <img src="../assets/img/start.png" class="start-icon">
    </span>
      </router-link>
    <button class="btn btn-settings">تنظیمات
<span class="div-icon">
      <img src="../assets/img/settings.png" class="settings-icon">
    </span>
    </button>
    <button class="btn btn-exit">خروج
    <span class="div-icon">
      <img src="../assets/img/exit.png" class="exit-icon">
    </span>
    </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
