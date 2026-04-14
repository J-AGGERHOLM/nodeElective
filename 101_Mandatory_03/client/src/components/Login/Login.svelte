<script>
import { fetchGet, fetchPost } from "../../util/fetchUtil.js"
import { showToast } from "../../stores/toastStore.js";

let username = "";
let password = "";

async function handleLogin(event) {
    event.preventDefault();

    const result = await fetchPost("/auth/login", { username, password });

    if (result.ok) {
      showToast(result.data.message, "success");
    } else {
      showToast(result.data.message, "error")
    }
  }
</script>

<div id="loginCard" class="loginCard">
    <form on:submit={handleLogin}>
        <input type="text" id="username" name="username" placeholder="Username">
    <br>
        <input type="password" id="password" name="password" placeholder="Password">
    <br>
        <button type="submit">Log-in</button>
    </form>
</div>

<style>
    #loginCard {
        display: flex;
        flex-direction: column;
        margin: 5%;
        padding: 2%;
        background-color: rgb(87, 78, 87);
        max-width: 33vw;
        border-radius: 25px;

    }
    #loginCard button{
        margin-top: 1rem;
        padding: 5%;
        background-color: aliceblue;
        color: black;
        border: none;
        border-radius: 5px;
    }

    #loginCard input {
        width: 100%;
        font-size: large;
        color: rgb(9, 9, 9);
        background-color: aliceblue;
        border: none;
        border-radius: 5px;
        
    }
</style>