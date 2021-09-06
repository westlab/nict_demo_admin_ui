<template>
  <div id="reload">
    <h3 class="pt-4 animate__animated animate__fadeInUp">
      Retrieve your Access Token!
    </h3>
    <div class="container w-25">
      <form @submit.prevent="userInfoSubmit">
        <div class="field">
          <label>Email</label>
          <br />
          <input
            class="input form-control"
            type="email"
            placeholder="taro@email.com"
            v-model="email"
            name="email"
            required
          />
        </div>
        <div class="field py-3">
          <label>Password</label>
          <br />
          <input
            class="input form-control"
            type="password"
            v-model="password"
            name="password"
            required
          />
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
      <div v-if="isLoading" class="text-center pt-4">
        Loading...
        <div class="spinner-border" role="status" aria-hidden="true"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: "",
      password: "",
      errorMessage: "warota",
      isLoading: false,
    };
  },
  methods: {
    async userInfoSubmit() {
      this.isLoading = true;
      await this.$store
        .dispatch("getAccessToken", {
          name: this.email,
          password: this.password,
        })
        .then(async () => {
          let token = await sessionStorage.getItem("accessToken");
          if (token) {
            this.$router.push("/success");
          } else {
            this.$router.push("/error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
