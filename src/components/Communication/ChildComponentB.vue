<template>
  <div>
    <base-card>
      <h3>This is Child B component</h3>
      <h3>{{ text }}</h3></base-card
    >
  </div>
</template>
<script>
export default {
  name: "ChildB",
  props: {
    text: {
      type: String,
    },
  },
  mounted() {
    this.sendTextToParent();
  },
  watch: {
    text() {
      this.sendTextToParent();
    },
  },
  methods: {
    sendTextToParent() {
      this.$emit("sentTextToParent", this.text);
    },
  },
};
</script>
