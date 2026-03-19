<script>
    import {fridgeMessages } from "../../stores/fridgeStore.js"
</script>

{#each fridgeMessages as fridgeMessage}

{/each}

<slot></slot>

<div id="welcome-mat">
    <p>Go Away</p>
</div>

<style>
    #welcome-mat {
        color: aliceblue;
        background-color: rgb(165, 87, 42);
        margin: 0 20em 0 20em;
        padding: 2em;
        border-radius: 0 0 2em 2em;
    }
</style>