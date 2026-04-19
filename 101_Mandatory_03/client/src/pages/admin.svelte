<script>
    import { fetchGet } from "../util/fetchUtil.js";
    import toastr from "toastr";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";


  onMount ( async () => {
    try{
      const result = await fetchGet("/auth/authorize");
      if (!result.ok) {
        toastr.warning(result.data.message, "Unauthorized");
        navigate("/");
      }
    }catch(error){
      toastr.warning(error, "Could not connect to server.")
      navigate("/");
    }
  });
</script>


<span>If you're not an Admin, you shouldn't be here!!</span>