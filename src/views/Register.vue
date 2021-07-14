<template>
  <div style="height:903px">
    <div class="card">
      <form class="box ms-9" v-on:submit.prevent="addUser">
        <h1>Register</h1>
        <p class="text-muted">
          Please enter your name and phone number to register!
        </p>
        <input
          type="text"
          name=""
          placeholder="Hoang Linh"
          v-model="user.name"
        /><input
          type="text"
          name=""
          placeholder="0905789654"
          v-model="user.phoneNumber"
        />
        <input type="submit" name="" value="Sign up" href="#" />

        <button class="btn-primary">Move to homepage</button>
        <div class="col-md-12">
          <ul class="social-network social-circle">
            <li>
              <a href="#" class="icoFacebook" title="Facebook"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="#" class="icoTwitter" title="Twitter"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="#" class="icoGoogle" title="Google +"
                ><i class="fab fa-google-plus"></i
              ></a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    ...mapActions(["addData"]),
    movePage() {
      this.$router.push("/");
    },
    addUser() {
      const data = {
        id: Date.now(),
        username: this.user.name,
        avatar:
          "https://www.fakeavatar.com/wp-content/uploads/2021/07/MartaBevacqua2.jpg",
        phoneNumber: this.user.phoneNumber,
      };
      console.log(data.id);
      this.addData(data);
      alert("Sign up succes");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.card {
  margin-bottom: 20px;
  border: none;
}

.box {
  width: 500px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 37%;
  background: #191919;
  text-align: center;
  transition: 0.25s;
  margin-top: 100px;
  border: 1px solid;
  border-radius: 10px;
}

.box input[type="text"],
.box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 10px 10px;
  width: 250px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.box h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
  width: 300px;
  border-color: #2ecc71;
}

.box input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.box input[type="submit"]:hover {
  background: #2ecc71;
}

.forgot {
  text-decoration: underline;
}

ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}

.social-network a.icoFacebook:hover {
  background-color: #3b5998;
}

.social-network a.icoTwitter:hover {
  background-color: #33ccff;
}

.social-network a.icoGoogle:hover {
  background-color: #bd3518;
}

.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoGoogle:hover i {
  color: #fff;
}

a.socialIcon:hover,
.socialHoverClass {
  color: #44bcdd;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
}

.social-circle li i {
  margin: 0;
  line-height: 50px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  transform: rotate(360deg);
  transition: all 0.2s;
}

.social-circle i {
  color: #fff;
  transition: all 0.8s;
  transition: all 0.8s;
}
</style>
