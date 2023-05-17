<script lang="ts">
  // import { onMount } from "svelte";
  import ObfuscateButton from "./ObfuscateButton.svelte";
  import DeobfuscateButton from "./DeobfuscateButton.svelte";
  import CopyButton from "./CopyButton.svelte";

  let inputText: string = "";

  function handleObfuscate(event) {
    inputText = event.detail;
  }

  function handleDeobfuscate(event) {
    inputText = event.detail;
  }
</script>

<div class="container">
  <div class="content">
    <h3 class="title">TextCloaker</h3>
	<p class="subbertitle">Shield your AI-generated text from prying detectors with our cutting-edge cloaking tool!</p>
    <p class="subtitle">
      Version 1.1.4 - By
      <a href="https://grahamzemel.com" target="_blank" class="text-blue-500"
        >Graham Zemel</a
      >
    </p>
    <div class="border-bottom" />

    <div class="input-container">
      <textarea
        class="input-textarea"
        bind:value={inputText}
        placeholder="Enter your text..."
      />
    </div>
    <ObfuscateButton {inputText} on:success={handleObfuscate} />
    <DeobfuscateButton {inputText} on:success={handleDeobfuscate} />

    <CopyButton {inputText} />

    <p class="note">
      Note: Your text should not look any different after you cloak/uncloak it.
    </p>
    <!-- <p><a href="https://youtu.be/9D6mXNf4fWI" class="extension-promotion-description">Demo Video</a></p> -->
    <button class="smallButton"><a href="https://youtu.be/9D6mXNf4fWI" style="color:white; font-size:medium; text-decoration:none;">Demo Video</a></button>
    <div class="border-bottom" />
    <h3 style="text-align: center;">Helpful Tips</h3>
    <ul class="helpful-tips">
      <li>
        AI detectors may display red underlines beneath certain words. To remove
        them, simply retype each affected word.
      </li>
    </ul>

    <div class="extension-promotion">
      <h3 class="extension-promotion-title">Check out our Google Extension!</h3>
      <p class="extension-promotion-description">
        Take your text cloaking and deobfuscation to the next level with our
        powerful Google extension. Streamline your workflow and save time by
        installing the extension today.
      </p>
      <a href="https://chrome.google.com/webstore/detail/textcloaker/mehhokpcklihfcedcfhfcimcinjhakeh" class="extension-promotion-button">Get the Extension</a>
    </div>

    <div class="privacy-policy">
      <p>All user data is erased on webpage exit. Contact <a href="https://grahamzemel.com/contact">Graham Zemel</a> to learn more.</p>
      <a href="/privacypolicy.html">Privacy Policy</a>
    </div>
  </div>
</div>

<style>
</style>
