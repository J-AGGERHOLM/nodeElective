<script>
  import Child from "../Child/Child.svelte";

    let { name, children } = $props();
</script>

<h1>I'm a parent! my name is {name}</h1>

{#each children as child (child.name)}
    <Child {...child}></Child>
{/each}