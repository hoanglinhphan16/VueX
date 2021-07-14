<template>
  <div class="container-fluid">
    <div class="text-center title">
      <h3>List Users</h3>
    </div>
    <div class=" d-flex justify-content-around flex-wrap ">
      <div
        v-for="user in backUser"
        :key="user.id"
        class="card justify-content-around col-3 m-3"
        style="width: 18rem;"
      >
        <img
          :src="user.avatar"
          class="card-img-top"
          @click="$router.push('/user-detail/' + user.id)"
        />
        <div class="card-body text-center">
          <h5 class="card-title">{{ user.username }}</h5>
          <a href="#" @click="deleteData(user.id)" class="btn btn-danger"
            >Delete</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["backUser"]),
  },
  methods: {
    ...mapActions(["deleteData"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 800px !important;
}

img {
  cursor: pointer;
}

li {
  list-style-type: none;
  margin: 15px;
  font-size: large;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

label {
  margin-left: 15px;
}

.submit {
  width: 5%;
  border-radius: 7px;
}
ul {
  padding-left: 0px;
}

.title {
  margin: 5px auto;
  width: 20%;
  background-color: orange;
  border-radius: 10px;
}
</style>
