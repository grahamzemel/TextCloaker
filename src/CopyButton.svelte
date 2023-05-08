<script lang="ts">  
    export let inputText: string;
    let isCopied = false;
  
    function copyToClipboard() {
      navigator.clipboard.writeText(inputText);
      isCopied = true;
  
      setTimeout(() => {
        isCopied = false;
      }, 3000);
    }
  </script>
  
  <button style="background-color: #3b82f6;" on:click={copyToClipboard} class="button button-copy">
    {#if isCopied}
      Copied!
    {:else}
      Copy
    {/if}
  </button>
  
  <style>
  </style>
  