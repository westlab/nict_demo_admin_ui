<template>
  <div>
    <h3 class="pt-4">Retrieve your Access Token!</h3>
    <div class="container w-25">
      <span v-if="$store.isError" class="text-danger"><font-awesome-icon icon="exclamation-circle" /> Failed to Retrieve Token.</span>
      <form @submit.prevent="userInfoSubmit">
        <div class="field">
            <label>Email</label>
            <br />
            <input class="input form-control" type="email" placeholder="taro@email.com" v-model="email" v-validate="required|email" name="email" />
        </div>
        <div class="field pb-3">
            <label>Password</label>
            <br />
            <input class="input form-control" type="password" v-model="password" v-validate="required" name="password" />
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      email: "",
      password: "",
      errorMessage: "warota",
    }
  },
  methods: {
    async userInfoSubmit() {
      this.$store.dispatch("getAccessToken",
      {
        name: this.email,
        password: this.password,
      })
      .then(() => {
           if(this.$store.fiwareToken) { this.$router.push(".")}
      })
      .catch(err => {
        console.log(err.config);
      })
    }
  }
}

</script>
