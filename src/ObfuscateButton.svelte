<script lang="ts">  
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

 
  export let inputText: string;
  let isLoading = false;
  let isSuccessful = false;

  function obfuscate() {
    isSuccessful = false;
    isLoading = true;
    setTimeout(() => {
      const invis = "\u034F";
      const commonLetterPairs = ["th", "he", "in", "er", "an", "re", "on", "at", "en", "nd", "ti", "es", "or", "te", "of", "ed", "is", "it", "al", "ar", "st", "to", "nt", "ng", "se", "ha", "as", "ou", "io", "le", "ve", "co", "me", "de", "hi", "ri", "ro", "ic", "ne", "ea", "ra", "ce", "li", "ch", "ll", "be", "ma", "si", "om", "ur"];
      const punctuations = ['.', ',', ';', ':', '!', '?'];
      
      var modifiedData = "";
      var currentIndex = 0;
      
      while (currentIndex < inputText.length) {
        var currentChar = inputText[currentIndex];
        var nextChar = inputText[currentIndex + 1];
      
        if (commonLetterPairs.includes(currentChar + nextChar) && Math.random() < 0.04) {
          modifiedData += currentChar + nextChar;
          modifiedData += invis;
          currentIndex += 2;
        } else {
          modifiedData += currentChar;
          
          if (currentChar === ' ' && Math.random() < 0.04) {
            modifiedData += invis;
          } else if (punctuations.includes(currentChar) && Math.random() < 0.04) {
            modifiedData += invis;
          }
      
          currentIndex++;
        }
      }
      
      inputText = modifiedData;
      dispatch("success", modifiedData);

      isSuccessful = true;
      isLoading = false;

      setTimeout(() => {
        isSuccessful = false;
      }, 7000);
    }, 2000); 
  }
</script>

<button
  id="obfuscate"
  on:click={obfuscate}
  class="button obfuscate-button"
>
  {#if isLoading}
    <div class="loader"></div>
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
