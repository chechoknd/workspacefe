<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <ListUsers />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <CreateUser />
      </div>
    </div>
  </div>
</template>

<script>
import ListUsers from "components/ListUsers";
import CreateUser from "components/CreateUser";

export default {
  name: "User",
  components: {ListUsers, CreateUser},
}
</script>

<style scoped>

</style>
