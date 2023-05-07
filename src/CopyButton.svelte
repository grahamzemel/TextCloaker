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
  
  <button on:click={copyToClipboard} class="button button-copy">
    {#if isCopied}
      Copied!
    {:else}
      Copy
    {/if}
  </button>
  
  <style>
    .button-copy {
      padding: 1.5rem 3rem;
      font-size: 1.2rem;
      font-weight: bold;
      background-color: #3b82f6; 
      color: #ffffff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  </style>
  