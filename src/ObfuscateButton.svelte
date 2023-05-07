<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let inputText: string;

  const dispatch = createEventDispatcher();

  let isLoading = false;
  let isSuccessful = false;

  async function obfuscate() {
    isSuccessful = false;
    isLoading = true;

    const obfuscateAsync = async () => {
      try {
        const response = await fetch(
          "https://obfuscate-kuzz4.ondigitalocean.app/tc-obfuscate/obfuscate", // Update the URL with your server URL
          // "http://localhost:3000/obfuscate",
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
      }, 5000);
    };

    setTimeout(obfuscateAsync, 2000);
  }
</script>

<button id="obfuscate" on:click={obfuscate} class="button obfuscate-button">
  {#if isLoading}
    <div class="loader" />
  {:else if isSuccessful}
    Success!
  {:else}
    Cloak!
  {/if}
</button>

<style>
  .obfuscate-button {
    background-color: #5cc789;
  }

  .loader {
    border: 5px solid #1e1e1e;
    border-top: 5px solid #58c384;
    border-radius: 50%;
    width: 0.6rem;
    height: 0.6rem;
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
