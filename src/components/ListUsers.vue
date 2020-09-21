<template>
  <div>
    <q-btn label="List Users" color="primary" @click="alert = true"/>
    <q-dialog v-model="alert" full-width>
      <q-card>
        <q-card-section>
          <div class="text-h6">Users</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pa-md">
            <q-table
              title="Users"
              :data="data"
              :columns="columns"
              row-key="name">

              <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th auto-width />
                  <q-th
                      v-for="col in props.cols"
                      :key="col.name"
                      :props="props"
                  >
                    {{ col.label }}
                  </q-th>
                </q-tr>
              </template>

              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td>
                    <q-btn size="sm" color="red" round dense @click="remove(props.row)" icon="remove" />
                    <q-btn size="sm" color="accent" round dense @click="update(props.row)" icon="edit" />
                  </q-td>
                  <q-td
                      v-for="col in props.cols"
                      :key="col.name"
                      :props="props"
                  >
                    {{ col.value }}
                  </q-td>
                </q-tr>
              </template>

            </q-table>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="updateModal" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <div class="q-gutter-md" style="max-width: 300px">
            <q-input v-model="user.first_name" label="First Name"/>
            <q-input v-model="user.last_name" label="Last Name"/>
            <q-input v-model="user.email" label="Email"/>
            <q-input v-model="user.phone" label="Phone"/>
            <q-select
                v-model="user.role"
                :options="rolesOptions"
                label="Role"
                option-value="id"
                option-label="name"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Update" color="primary" @click="updateUser" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "ListUsers",
  data() {
    return {
      alert: false,
      columns: [
        {name: 'id', label: 'ID', field: 'id', sortable: false, align: 'left',},
        {
          name: 'first_name',
          label: 'First Name',
          field: 'first_name',
          sortable: true,
          align: 'left',
        },
        {
          name: 'last_name',
          label: 'Last Name',
          field: 'last_name',
          sortable: true,
          align: 'left',
        },
        {
          name: 'phone',
          label: 'Phone',
          field: 'phone',
          sortable: true,
          align: 'left',
        },
        {
          name: 'role',
          label: 'Role',
          sortable: true,
          align: 'left',
          field: row => row.role.name,
        },
        {
          name: 'email',
          label: 'Email',
          field: 'email',
          sortable: true,
          align: 'left',
        },
      ],
      data: [],
      rolesOptions: [],
      updateModal: false,
      user: {
        first_name: null,
        last_name: null,
        role: null,
        phone: null,
        email: null,
        id: null,
      },
    }
  },
  methods: {
    remove(row) {
      this.$axios.delete(`/users/${row.id}`).then(() => this.load())
    },
    update(row) {
      this.updateModal = true;
      this.user = {
        first_name: row.first_name,
        last_name: row.last_name,
        role: row.role,
        phone: row.phone,
        email: row.email,
        id: row.id,
      }
    },
    updateUser() {
      console.log('rere')
      this.$axios.put(`/users/${this.user.id}`, this.user)
        .then(() => {
          this.updateModal = false;
          this.load()
        })
        .catch(console.error)
    },
    load(){
      this.$axios.get('/users').then(response => this.data = response.data)
    },
  },
  mounted() {
    this.load()
    this.$axios.get('/roles').then(response => this.rolesOptions = response.data)
  }
}
</script>

<style scoped>

</style>
