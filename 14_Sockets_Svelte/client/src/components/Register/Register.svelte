<script>
import { BASE_URL } from "../../stores/generalStore";
import { nickname } from "../../stores/nicknameStore";

let nicknameInput = $state("");


async function submitNickname() {
 const response = await fetch ($BASE_URL + "/nicknames", {
    method:"POST",
    credentials: 'include',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ nickname: nicknameInput })
 })
 const result = await response.json();

 nickname.set(result.data);

 localStorage.setItem('nickname', result.data);

}
</script>

<input bind:value={nicknameInput} placeholder="Nickname...">
<button onclick={submitNickname}>Submit</button>