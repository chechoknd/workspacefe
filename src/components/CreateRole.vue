<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="name" label="Role Name" />
      <q-btn color="primary" label="Create" @click="create" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateRole",
  data () {
    return {
      name: null,
    }
  },
  methods: {
    create () {
      this.$axios.post('/roles', { name: this.name })
      .then(console.log)
      .catch(console.error);
    },
  },
}
</script>
