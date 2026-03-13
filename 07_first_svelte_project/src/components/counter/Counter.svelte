<script>
    const { countdownFrom } = $props()
    let count = $state(countdownFrom);

    function descreaseCount() {
        count -=1;
    }
</script>

<h1>Counter</h1>
<h4>{count}</h4>
<button onclick={descreaseCount}> decrease the count</button>