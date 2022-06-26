
import { writable } from "svelte/store";
import type { User } from "firebase/auth";

import { auth } from '$lib/firebase';


export const authStore = writable<{ isLoggedIn: boolean, user?: User }>({ isLoggedIn: false });
auth.onAuthStateChanged(user => {
  if (user) {
    authStore.set({ isLoggedIn: true, user });
  }
  else {
    authStore.set({ isLoggedIn: false, user: undefined });
  }
});
