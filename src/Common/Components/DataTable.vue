<template>
  <v-data-table
    dense
    fixed-header
    id="users-table"
    :headers="tableColumns"
    :items="tableData"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    @page-count="pageCount = $event"
  ></v-data-table>
</template>
<script>
export default {
  name: "DataTable",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      pageOptions: [5, 10, 15],
    };
  },
  props: {
    tableColumns: {
      type: Array,
    },
    tableData: {
      type: Array,
    },
  },
  computed: {
    totalRows() {
      return this.tableData.length;
    },
  },
};
</script>
