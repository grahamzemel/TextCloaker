<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let inputText: string;

  const dispatch = createEventDispatcher();

  let isLoading = false;
  let isSuccess = false;

  function deobfuscate() {
    isLoading = true;
    isSuccess = false;
    // Simulate the deobfuscation process
    setTimeout(() => {
      const invis = "\u034F";
      const modifiedData = inputText.replace(new RegExp(invis, 'g'), '');

      inputText = modifiedData;

      dispatch("success", modifiedData);

      isLoading = false;
      isSuccess = true;

      // Reset the success status after 3 seconds
      setTimeout(() => {
        isSuccess = false;
      }, 3000);
    }, 2000);
  }
</script>

<button on:click={deobfuscate} class="button deobfuscate-button">
  {#if isLoading}
    <div class="loader"></div>
  {:else if isSuccess}
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
