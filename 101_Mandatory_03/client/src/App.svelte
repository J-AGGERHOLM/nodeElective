<script>
  import "../src/app.css"
  import { Router, Link, Route, navigate } from "svelte-routing"

  import LogInPage from "./pages/logInPage.svelte";
  import Welcome from "./pages/welcome.svelte";
  import Admin from "./pages/admin.svelte";
  import { fetchGet } from "./util/fetchUtil";
  import toastr from "toastr";
  
  async function logOut () {
    try {
      const result = await fetchGet("/auth/logout");
      if ( result.ok ) {
        toastr.info(result.data.message, "succes");
        navigate("/");
      }else{
        toastr.warning(result.data.message, "error")
      }
    } catch (error) {
      toastr.warning(error, "error")
    }
  } 
  
</script>

<Router>
  <nav>
    <Link to = "/">Log-in</Link>  
    <Link to = "/welcome">Welcome</Link>  
    <Link to = "/admin">Admin</Link>  
    <Link to = "/" on:click = {logOut}>Log-out</Link>
  </nav>

  <div>
    <Route path="/"><LogInPage/></Route>
    <Route path="/welcome"><Welcome /></Route>
    <Route path="/admin"><Admin /></Route>
  </div>
</Router>

