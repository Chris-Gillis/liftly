<script context="module" lang="ts">
  import { auth } from '$lib/firebase';

  export async function load() {
    await auth.signOut();
    return {
      status: 302,
      redirect: '/login'
    }
  }
</script>