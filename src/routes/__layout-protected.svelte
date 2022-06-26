<script lang="ts" context="module">
  import { get } from 'svelte/store';
  import { authStore } from '$lib/stores/auth_store';
  export async function load({ url }: { url: URL }) {
    const { isLoggedIn, user } = get(authStore);
    if (!isLoggedIn) {
      return {
        status: 302,
        redirect: `/login?redirect=${encodeURI(url.pathname)}`,
      };
    }

    return {};
  }
</script>


<script lang="ts">
  import "../app.css"

  import Auth from '$lib/components/auth.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<Auth />
<Header />
<slot />