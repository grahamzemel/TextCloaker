<script lang="ts">
	// import { onMount } from "svelte";
	import ObfuscateButton from "./ObfuscateButton.svelte";
	import DeobfuscateButton from "./DeobfuscateButton.svelte";
	import CopyButton from "./CopyButton.svelte";

	let inputs: string = "";  
  
	function handleObfuscate(event) {
    inputs = event.detail;
  }

  function handleDeobfuscate(event) {
    inputs = event.detail;
  }
  </script>
  
  <div class="container">
	<div class="content">
	  <h3 class="title">TextCloaker</h3>
	  <p class="subtitle">
		Version 1.1.3 - By
		<a href="https://grahamzemel.com" target="_blank" class="text-blue-500"
		  >Graham Zemel</a
		>
	  </p>
	  <div class="border-bottom"></div>
  
	  <div class="input-container">
	  <textarea class="input-textarea" bind:value={inputs} placeholder="Enter your text..."></textarea>
	</div>
	  <ObfuscateButton {inputs} on:success={handleObfuscate} />
	  <DeobfuscateButton {inputs} on:success={handleDeobfuscate} />
  
	  <CopyButton {inputs} />

	  <p class="note">
		Note: Your text should not look any different after you cloak/uncloak it.
	  </p>
	  <div class="border-bottom"></div>
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
			Take your text cloaking and deobfuscation to the next level with our powerful Google extension. Streamline your workflow and save time by installing the extension today.
		</p>
		<a class="extension-promotion-button">Coming Soon...</a>
	  </div>
	  

	  <div class="privacy-policy">
		<a href="/privacy-policy">Privacy Policy</a>
	  </div>
	</div>
  </div>
  
  <style>

  </style>
  