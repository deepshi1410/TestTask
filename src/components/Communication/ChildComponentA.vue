<template>
  <div>
    <base-card>
      <h3>This is Child A Component</h3>
      <button @click="sendMessage">Send Message to sibling</button>
      <ChildC
    /></base-card>
  </div>
</template>
<script>
import ChildC from "./ChildComponentC.vue";
export default {
  name: "ChildA",
  components: { ChildC },
  mounted() {
    this.sendMessage();
  },
  methods: {
    sendMessage() {
      this.emitter.emit("text_from_Child_A", "Hi From Child A");
    },
  },
};
</script>
