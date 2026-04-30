<script>
  import { onMount } from "svelte";
  import { nickname } from "./stores/nicknameStore.js"

  import Register from "./components/Register/Register.svelte";
  import Colors from "./components/Colors/Colors.svelte";

  import { currentColor } from "./stores/currentColor.js";



</script>

<main class="app" style:background-color={$currentColor}>
{#if !$nickname}
<Register></Register>
{:else}
<Colors></Colors>
{/if}
</main>

<style>
  .app {
    height: 100vh;
  }
</style>
