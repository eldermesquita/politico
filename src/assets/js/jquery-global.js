import $ from 'jquery';
globalThis.$ = globalThis.jQuery = $;
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $;
}
export default $;
