<template>
  <div>
    <h2>This is Parent Component</h2>
    <ChildB :text="text" @sentTextToParent="textReceivedFromChild"></ChildB>
    <ChildA></ChildA>
  </div>
</template>
<script>
import ChildB from "./ChildComponentB.vue";
import ChildA from "./ChildComponentA.vue";
export default {
  name: "ParentComponent",
  components: { ChildB, ChildA },
  data() {
    return {
      text: "Text being passed to Child B from parent- Hi There",
    };
  },
  methods: {
    textReceivedFromChild(arg) {
      window.alert("message from child", arg);
    },
  },
};
</script>
