<template>
  <tbody>
    <tr v-for="(user, index) in paginatedRecords" :key="index">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.website }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    // data array
    records: {
      type: Array,
      required: true,
    },
    // records to be displayed per page
    records_per_page: {
      type: Number,
      required: false,
      default: 8,
    },
  },
  data() {
    return {
      // initially we'll be at page 1
      page: 1,
    };
  },
  created() {
    window.addEventListener("scroll", () => {
      // if we are at the last page return
      if (this.page >= this.totalPages) return;
      // if we are almost at the end of the page, move to next page
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 100
      ) {
        this.page++;
      }
    });
  },
  computed: {
    totalPages() {
      return Math.ceil(this.records.length / this.records_per_page);
    },
    paginatedRecords() {
      return this.records.slice(0, this.page * this.records_per_page);
    },
  },
  watch: {
    // everytime there is a change in data array, we'll come to page 1
    records() {
      this.page = 1;
    },
  },
};
</script>
