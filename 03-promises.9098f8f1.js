!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var r=o("h6c0i");function i(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.Notify.init({fontSize:"1rem",width:"450px",cssAnimationStyle:"from-bottom",closeButton:!1,useIcon:!1,pauseOnHover:!0}),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,t=n.delay,o=n.step,a=n.amount,c=parseInt(t.value),l=parseInt(o.value);if(c<0||l<=0||a.value<=0)r.Notify.warning("❗ Please enter positive value");else for(var u=1;u<=a.value;u++){var s=performance.now();i(u,c+(u-1)*l).then((function(e){var n=e.position,t=e.delay,o=performance.now()-s;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms (Actual: ").concat(o.toFixed(0),"ms)"))})).catch((function(e){var n=e.position,t=e.delay,o=performance.now()-s;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms (Actual: ").concat(o.toFixed(0),"ms)"))}))}e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.9098f8f1.js.map
