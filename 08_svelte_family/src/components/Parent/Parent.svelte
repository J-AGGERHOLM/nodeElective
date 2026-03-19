<script>
  import Child from "../Child/Child.svelte";

    let { name, children } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore";


    function handleShowLove(name) {
      console.log(`${name} loves you`)
    }

    let cookiejar = $state(["🍪", "🍪", "🍪", "🍪", "🍪", "🍪"]);

    let drinkPantry = $state(["🍺", "🍺", "🍺"])

    function handleTakeCookie(name) {
      cookiejar.pop();
      console.log(`${name} takes a cookie 🍪`)
    }

  


</script>

<button onclick={fridgeMessages.wipe}>Wipe Fridge</button>
<h2>{cookiejar}</h2>
<h2>{drinkPantry}</h2>
<h1>I'm a parent! my name is {name}</h1>


{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onTakeCookie={handleTakeCookie} drinkPantry={drinkPantry}></Child>
{/each}