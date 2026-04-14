<script>

  import { Router, Link, Route } from "svelte-routing"

  import { toast } from "./stores/toastStore.js"

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

{#if $toast.message}
  <div class="toast {$toast.type}">
    {$toast.message}
  </div>