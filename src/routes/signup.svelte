<script lang="ts">
  import { auth } from '$lib/firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  
  let email = '';
  let password = '';

  let formDirty = false;
  let formValid = false;
  async function onSubmit(e: SubmitEvent) {
    console.log(email, password);
    if (formDirty && !formValid) {
      console.log('invalid form');
    }

    try {

      const credential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(credential.user);
    }
    catch(error) {
      console.log('error happeend');
      console.log(error);
    }
  }

  function onChange() {
    formDirty = true;
    formValid = !!email && !!password;
  }

</script>

<main>
  <form on:change={onChange} on:submit|preventDefault={onSubmit}>
    <h1>Sign up for Liftly</h1>
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
        type="text" id="password" name="password" bind:value={password} />
    </div>
    <div>
      <button disabled={formValid && !formDirty} class="btn btn-primary">Create Account</button>
    </div>

  </form>
</main>