var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,r.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire4c75=r);var l=r("8zd4h");let o=JSON.parse(localStorage.getItem("feedback-form-state"))||{};const n=document.querySelector(".feedback-form"),{email:i,message:s}=n.elements;n.addEventListener("input",l((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:i.value,message:s.value}))}),500)),n.addEventListener("submit",(e=>{if(e.preventDefault(),console.log({email:i.value,message:s.value}),""===i.value||""===s.value)return alert("Будь-ласка, заповніть всі поля!");e.currentTarget.reset()})),o&&(i.value=o.email||"",s.value=o.message||"",localStorage.removeItem("feedback-form-state"));
//# sourceMappingURL=03-feedback.e69ed5a7.js.map
