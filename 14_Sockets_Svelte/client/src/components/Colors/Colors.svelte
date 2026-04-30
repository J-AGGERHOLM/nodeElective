<script>
import { onMount } from "svelte";
import { BASE_URL } from "../../stores/generalStore";
import { colorList } from "../../stores/colorList";
import { currentColor } from "../../stores/currentColor";
import io from 'socket.io-client';


let socket;

let colorInput = "#0000ff";


onMount(() => {
    //connects to the server
    socket = io($BASE_URL, {
        withCredentials: true
    });

    //tells the client to listen on the socket, 
    // in the namespace 'server-sends-color'
    socket.on("server-sends-color", (data) => {
        console.log("incoming color:", data.data)
        //updating the currentColor writeable
        currentColor.set(data.data);

        //updating the colorList writeable
        colorList.update((colorList) => {
            colorList.push({
            
                nickname: data.nickname,
                color: data.data
            });
            return colorList;
         
    })

    })
})

function submitColor() {
    //send data from the client to the server on the namespace
    socket.emit("client-sends-color", { data: colorInput })
}
</script>

<input type="color" bind:value={colorInput}>
<button onclick={submitColor}> Submit color</button>

{#each $colorList as colorListItem }
<div>{colorListItem.nickname}: {colorListItem.color}</div>
    
{/each}