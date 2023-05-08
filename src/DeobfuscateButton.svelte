<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let inputText: string;

  const dispatch = createEventDispatcher();

  let isLoading = false;
  let isSuccessful = false;

  async function deobfuscate() {
    isSuccessful = false;
    isLoading = true;

    const deobfuscateAsync = async () => {
      try {
        const response = await fetch(
          "https://obfuscate-kuzz4.ondigitalocean.app/tc-obfuscate/deobfuscate", 
          // "http://localhost:4000/deobfuscate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              inputs: inputText,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();
        const responseData = data.modifiedData;

        dispatch("success", responseData);
      } catch (error) {
        console.error(error);
      }

      setTimeout(() => {
        isSuccessful = true;
        isLoading = false;
      }, 2000);
    };

    setTimeout(deobfuscateAsync, 2000);
  }
</script>

<button id="deobfuscate" on:click={deobfuscate} class="button deobfuscate-button">
  {#if isLoading}
    <div class="loader"></div>
  {:else if isSuccessful}
    Success!
  {:else}
    Un-Cloak!
  {/if}
</button>

<style>
  .loader {
    border: 5px solid #1e1e1e;
    border-top: 5px solid dimgray;
    border-radius: 50%;
    width: .6rem;
    height: .6rem;
    animation: spin 1s linear infinite;
    display: inline-block;
    vertical-align: middle;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
