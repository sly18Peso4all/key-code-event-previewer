const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  const { key, keyCode, code } = e;
  insert.innerHTML = ` 
       <div class="key">
           ${e.key === " " ? "Space" : key}
           <small>key</small>
       </div>
       <div class="key">
           ${keyCode}
           <small>number</small>
       </div>
       <div class="key">
           ${code}
           <small>key.code</small>
       </div>
   `;
});
