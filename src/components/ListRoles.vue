<template>
  <div class="q-pa-md">
    <q-table
        title="Roles"
        :data="data"
        :columns="columns"
        row-key="name"
    />
  </div>
</template>

<script>
export default {
  name: "ListRoles",
  data () {
    return {
      columns: [
        { name: 'id', label: 'ID', field: 'id', sortable: false, align: 'left', },
        {
          name: 'name',
          label: 'Name',
          field: 'name',
          sortable: true,
          align: 'left',
        },
      ],
      data: [],
    }
  },
  mounted() {
    this.$axios.get('/roles').then(response => this.data = response.data)
  }
}
</script>

<style scoped>

</style>
