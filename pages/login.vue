<template lang="pug">
v-app
  v-container(fluid, fill-height)
    v-layout(align-center, justify-center, v-if="!$auth.$state.loggedIn")
      v-flex(xs12, sm8, md4, lg4)
        v-tabs(
          v-model="tab",
          show-arrows,
          background-color="deep-purple accent-4",
          icons-and-text,
          dark,
          grow
        )
          v-tabs-slider(color="purple darken-4")
          v-tab(v-for="i in tabs", :key="i.name")
            v-icon(large) {{ i.icon }}
            .caption.py-1 {{ i.name }}
          v-tab-item
            v-card.px-4
              v-card-text
                v-form(ref="loginForm")
                  v-row
                    v-col(cols="12")
                      v-text-field(
                        label="Username",
                        v-model="loginForm.username",
                        required
                      )
                    v-col(cols="12")
                      v-text-field(
                        label="Password",
                        v-model="loginForm.password",
                        counter,
                        type="password"
                      )
                    v-col.d-flex(cols="12", sm="6", xsm="12")
                    v-spacer
                    v-col.d-flex(cols="12", sm="3", xsm="12", align-end)
                      v-btn(x-large, block, color="success", @click="login") Login
          v-tab-item
            v-card.px-4
              v-form(ref="registerForm")
                v-row
                  v-col(cols="12")
                    v-text-field(
                      label="Username",
                      v-model="registerForm.username",
                      required
                    )
                  v-col(cols="12")
                    v-text-field(
                      label="E-mail",
                      v-model="registerForm.email",
                      required
                    )
                  v-col(cols="12")
                    v-text-field(
                      label="Password",
                      v-model="registerForm.password",
                      counter,
                      type="password"
                    )
                  v-col(cols="12")
                    v-text-field(
                      label="Confirm Password",
                      v-model="registerForm.confirmPassword",
                      counter,
                      type="password"
                    )
                  v-col.d-flex(cols="12", sm="6", xsm="12")
                  v-spacer
                  v-col.d-flex(cols="12", sm="3", xsm="12", align-end)
                    v-btn(x-large, block, color="success", @click="register") Register
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      tab: "",
      tabs: [
        { name: "Login", icon: "mdi-account" },
        { name: "Register", icon: "mdi-account-outline" },
      ],
      loginForm: {
        password: "",
        username: "",
      },
      registerForm: {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      },
    };
  },
  mounted () {
    console.log(this.$auth)
  },
  methods: {
    async login() {
      if (this.$refs.loginForm.validate()) {
        let response = await this.$auth.loginWith("local", {
          data: this.loginForm,
        });
      }
    },
    async register() {
      if (this.$refs.registerForm.validate()) {
        await this.$axios.$post("/api/auth/registration", this.registerForm);
        await this.$auth.loginWith("local", { data: this.registerForm });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>