<script>
    import { onMount } from "svelte";
    import { fetchGet } from "../../util/fetchUtil.js";

    let restaurants;

    onMount(async () => {
    try {
        const result = await fetchGet('/api/restaurants');
        restaurants = result.data;
    } catch (err) {
        console.error("Component error:", err);
    }
});

</script>


<h1>Restaurants</h1>

{#each restaurants as restaurant}
    <h4>{restaurant}</h4>    
{/each}