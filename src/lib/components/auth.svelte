<script context="module" lang="ts">
  import type { URL } from 'url';

  export async function load({ url, params }: { url: URL, params: any }) {
    console.log(`url ${url}`);
    console.log(`params ${params}`);
  }
</script>

<script lang="ts">
  import { authStore } from '$lib/stores/auth_store';

  authStore.subscribe(async ({ isLoggedIn }) => {
    if (!isLoggedIn) {
      console.log('not logged in');
    }
  });
</script>