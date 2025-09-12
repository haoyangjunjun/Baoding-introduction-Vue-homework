<template>
  <div>
    <div><!--导航栏Top Index-->
      <TopIndex></TopIndex>
    </div>

    <div class="fff"><!-- view视图 -->
      <transition name="slide-fade" mode="out-in"><!--过度效果-->
        <router-view /><!--Vue Router提供的路由视图组件，用于显示当前路由对应的组件。-->
      </transition>
    </div>

  </div>
</template>

<script>
import "./css/all.css";//引入全部css
import TopIndex from "./components/TopIndex.vue";

export default {
  name: 'App',
  components: {
    TopIndex//注册组件
  },
  methods: {
    
  }
}

</script>
<style>
.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
