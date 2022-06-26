<script lang="ts">
  import { auth } from '$lib/firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  import { authStore } from '$lib/stores/auth_store';
  import { goto } from '$app/navigation';
  
  authStore.subscribe(async ({ isLoggedIn, user }) => {

  });

  let email = '';
  let password = '';

  async function onSubmit(e: SubmitEvent) {

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }

    await goto('/home');
  }
</script>

<main>
  <form on:submit|preventDefault={onSubmit}>
    <h1>Login to Liftly</h1>
    <div class="mb-2">
      <div class="form-control w-full max-w-xs">
        <label class="label" for="email">
          <span class="label-text">Email</span>
        </label>
      </div>
      <input class="input input-bordered input-primary w-full max-w-xs" 
        type="text" id="email" name="email" bind:value={email}/>
    </div>
    <div class="mb-2">
      <div class="form-control w-full max-w-xs">
        <label class="label" for="password">
          <span class="label-text">Password</span>
        </label>
      </div>
      <input class="input input-bordered input-primary w-full max-w-xs" 
        type="password" id="password" name="password" bind:value={password} />
    </div>
    <div>
      <button class="btn btn-primary">Login</button>
    </div>

  </form>
</main>