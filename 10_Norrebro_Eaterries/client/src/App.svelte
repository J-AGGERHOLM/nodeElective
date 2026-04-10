<script>
  import { Router, Link, Route } from 'svelte-routing';

  import Restaurants from './pages/Restuarants/Restuarants.svelte';
  import Visitors from './pages/Visitors/Visitors.svelte';
  
</script>

<Router>
  <nav>
      <Link to='/restaurants'>Restaurants</Link>
      <Link to='/vistors'>Visit</Link>
      <Link to='/about'>About</Link>
  </nav>

  <div>
    <Route path='/'>Norrebronx Eateries</Route>
    <Route path='/restaurants'><Restaurants /></Route>
    <Route path='/vistors'><Visitors /></Route>
    <Route path='/about'>
      <h1>About</h1>
      <h3>We made this because we are hungry!</h3>
    </Route>
  </div>
</Router>