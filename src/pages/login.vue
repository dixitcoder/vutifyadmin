<script>
import logo from '@images/logo.svg?raw'

// import axios from '@axios'

function firebaseLogin(email, password){
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAnWTuhnVHA6lvSn9ST37axxjT_liM828A', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password, "returnSecureToken": true }),
  })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response.idToken)))
}
import auth from '../auth'

export default {
  data () {
    return {
      email: 'joe@example.com',
      pass: 'password1',
      remember: false,
      logo: logo,
      loggedIn: auth.loggedIn(),
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/dashboard')
        }
      })
    },
  },
}

// import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
// import { useTheme } from 'vuetify'
// import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
// import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
// import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
// import authV1Tree from '@images/pages/auth-v1-tree.png'

// const form = ref({

// })

// const vuetifyTheme = useTheme()

// const authThemeMask = computed(() => {
//   return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
// })

// const isPasswordVisible = ref(false)
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <!--  Logo  -->
            <div v-html="logo" />
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          Materio
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Welcome to Materio! 👋🏻
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm>
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="email"
                label="Email"
                type="email"
              />
            </VCol>
            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="pass"
                label="Password"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="remember"
                  label="Remember me"
                />

                <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                > Forgot Password? </a>
              </div>

              <!-- login button -->
              <VBtn
                block
                type="submit"
                to="/dashboard"
                @click="login"
              >
                Login
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
                Create an account
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      src="authV1Tree"
      width="250"
    />

    <VImg
      src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      width="350"
    />

    <!-- bg img -->
    <VImg
      class="auth-footer-mask d-none d-md-block"
      src="authThemeMask"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>
