<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="first_name" label="First Name"/>
      <q-input v-model="last_name" label="Last Name"/>
      <q-input v-model="email" label="Email"/>
      <q-input v-model="phone" label="Phone"/>
      <q-select
          v-model="role"
          :options="rolesOptions"
          label="Role"
          option-value="id"
          option-label="name"
      />
      <q-btn color="primary" label="Create" @click="create"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateUser",
  data () {
    return {
      first_name: null,
      last_name: null,
      role: null,
      phone: null,
      email: null,
      rolesOptions: [],
    }
  },
  methods: {
    create () {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email,
        role_id: this.role.id,
      }

      this.$axios.post('/users', data)
          .then(console.log)
          .catch(console.error);
    },
  },
  created() {
    this.$axios.get('/roles').then(response => this.rolesOptions = response.data)
  }
}
</script>
