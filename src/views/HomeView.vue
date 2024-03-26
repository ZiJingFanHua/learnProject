<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="clickDebounceBtn">debounceButton</button>
    <button @click="clickThrottleButtonBtn">throttleButton</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { debounceRequest ,throttleRequest} from "@/utils/commonUtils";
export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const clickDebounceBtn = () => {
      debounceRequest("test");
    };
    const clickThrottleButtonBtn = () => {
      throttleRequest("throttleRequest", "2");
    };
    return {
      clickDebounceBtn,
      clickThrottleButtonBtn,
    };
  },
});
</script>
