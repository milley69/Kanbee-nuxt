<template>
  <div class="card flex-shrink-0 w-full pt-0">
    <form class="card-body p-0" @submit.prevent="signInHandler">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="you@example.com"
          autocomplete="email"
          v-model="form.email"
          class="input input-bordered"
          :class="{ 'input-error': formError.email }"
        />
        <label class="label" v-if="formError.email">
          <span class="label-text text-error">{{ formError.email }}</span>
        </label>
      </div>
      <div class="form-control relative">
        <label class="label">
          <span class="label-text">Password</span>
          <span class="label-text-alt link link-hover">Forgot Password?</span>
        </label>
        <input
          :type="isHidePasswd ? 'text' : 'password'"
          :placeholder="isHidePasswd ? 'oh hello' : '********'"
          autocomplete="current-password"
          v-model="form.password"
          class="input input-bordered"
          :class="{ 'input-error': formError.password }"
        />
        <label class="label" v-if="formError.password">
          <span class="label-text text-error">{{ formError.password }}</span>
        </label>
        <span class="absolute right-3 top-12" @click="isHidePasswd = !isHidePasswd">
          <i
            class="bx bx-sm hover:text-opacity-100 cursor-pointer text-base-content"
            :class="isHidePasswd ? 'bx-show' : 'bx-hide text-opacity-50'"
          ></i>
        </span>
      </div>
      <div class="form-control mt-6">
        <div class="tooltip-bottom" :class="{ tooltip: !isSign }" data-tip="Fill in the fields">
          <button type="submit" class="btn btn-ghost btn-outline w-full" :class="{ 'btn-disabled': !isSign }">
            Sign In
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const { signIn } = useAuth()
const router = useRouter()
const isHidePasswd = ref(false)
const form = reactive({
  email: '',
  password: '',
})
const formError = reactive({
  email: '',
  password: '',
})

const isSign = computed(() => Boolean(form.email) && Boolean(form.password))

const signInHandler = async () => {
  const data = useAuthValidator({ email: form.email, password: form.password }, 'signIn')
  if (!data) return

  const res = await signIn(form.email, form.password)
  if (res) {
    console.log('res: ', res)

    router.push('/').catch(() => {})
  }
}
</script>
