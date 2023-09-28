<template>
  <div>
    <h3>This is Child C component</h3>
    <h2>Text received from Child A - {{ message }}</h2>
  </div>
</template>
<script>
export default {
  name: "ChildC",
  data() {
    return { message: "" };
  },
  mounted() {
    this.emitter.on("text_from_Child_A", (data) => {
      this.message = data;
    });
  },
};
</script>
