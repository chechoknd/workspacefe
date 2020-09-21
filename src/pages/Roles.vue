<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <ListRoles />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <CreateRole />
      </div>
    </div>
  </div>
</template>

<script>
import CreateRole from "components/CreateRole";
import ListRoles from "components/ListRoles";

export default {
  name: "Roles",
  components: {ListRoles, CreateRole},
}
</script>

<style scoped>

</style>
