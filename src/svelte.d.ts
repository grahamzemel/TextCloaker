declare module "*.svelte" {
    import { SvelteComponentTyped } from "svelte";
    const _component: SvelteComponentTyped<{}, {}, {}>;
    export default _component;
  }
  