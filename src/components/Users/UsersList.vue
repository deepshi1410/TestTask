<!-- This component is used to serve our list-->
<!-- pagination is used to show only a small piece of data so that problem of showing a large piece of data at once
and re-rendering it once data is changed is not at all good for website performance -->

<template>
  <table
    class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
  >
    <!-- <sorted :records="records" /> -->
    <paginated :records="records" />
  </table>
</template>
<script>
import PaginatedTableData from "./PaginatedTableData.vue";
// import SortRecords from "@/components/SortRecords.vue";
export default {
  components: {
    paginated: PaginatedTableData,
    // sorted: SortRecords,
  },
  created() {
    console.log(this.$store);
    this.records = this.$store.getters.getUsersData;
  },
  data() {
    return {
      records: "",
      // sortedList: usersData,
    };
  },
  methods: {
    // sort_records(data) {
    //   this.sortedList = data;
    // },
  },
};
</script>

<style lang="scss" scoped></style>
