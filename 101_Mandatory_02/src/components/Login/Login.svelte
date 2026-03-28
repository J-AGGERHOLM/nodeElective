<div id="loginCard" class="loginCard">
    <form action="/auth/login">
        <input type="text" id="username" name="username" placeholder="Username">
    <br>
        <input type="text" id="password" name="password" placeholder="Password">
    <br>
        <button type="submit" value="submit">Log-in</button>
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