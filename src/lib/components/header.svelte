<script lang="ts">
  import { authStore } from '$lib/stores/auth_store';
  
</script>

<main>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a  href="/" class="btn btn-ghost normal-case text-xl">Liftly</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        {#if !$authStore.isLoggedIn}
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        {:else}
        <li>
          <a href="/logout">Logout</a>
        </li>
        {/if}
      </ul>
    </div>
  </div>
</main>