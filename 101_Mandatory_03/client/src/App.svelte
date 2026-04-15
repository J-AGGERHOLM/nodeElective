<script>
  import "../src/app.css"
  import { Router, Link, Route } from "svelte-routing"

  import LogInPage from "./pages/logInPage.svelte";
  import Welcome from "./pages/welcome.svelte";
  import Admin from "./pages/admin.svelte";

  
</script>

<Router>
  <nav>
    <Link to = "/"></Link>  
    <Link to = "/welcome"></Link>  
    <Link to = "/admin"></Link>  
  </nav>

  <div>
    <Route path="/"><LogInPage/></Route>
    <Route path="/welcome"><Welcome /></Route>
    <Route path="/admin"><Admin /></Route>
  </div>
</Router>

