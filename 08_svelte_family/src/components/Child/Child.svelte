<script>
    let {name, familySheep, isGirl, onShowLove, onTakeCookie, drinkPantry = $bindable()} = $props();
</script>
<div
class={familySheep || "not-a-sheep"}
class:is-girl={isGirl}
class:is-boy={!isGirl}
>
<h3>I'm {name}</h3>
</div>

<button onclick={() => onShowLove(name)}>show love</button>
<button onclick={() => onTakeCookie(name)}> take cookie</button>
<button onclick={() => drinkPantry.pop()}> have a drink</button>

<style>
    div{
        color: aliceblue;
    }
    .black-sheep{
        background-color: rebeccapurple;
    }
    .grey-sheep {
        background-color: yellowgreen;
    }
    .not-a-sheep{
        background-color: plum;
    }
    .is-girl {
        border: 4px dashed palevioletred;
    }
    .is-boy {
        border: 4px dashed darkblue;
    }
</style>