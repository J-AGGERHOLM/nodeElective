<script>
  import { onMount } from "svelte";
  import { nickname } from "./stores/nicknameStore.js"

  import Register from "./components/Register/Register.svelte";
  import Colors from "./components/Colors/Colors.svelte";

  import { currentColor } from "./stores/currentColor.js";



</script>

<main style:backgroundColor={$currentColor} >

{#if !$nickname}
<Register></Register>
{:else}
<Colors></Colors>
{/if}
</main>

<style>
  main {
    min-height: 100vh;
  }
</style>