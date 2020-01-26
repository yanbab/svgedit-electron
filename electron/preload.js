
window.addEventListener('DOMContentLoaded', e => {
  loadStylesheet(__dirname + "/svg-edit.css", document.body)
  // loadScript(__dirname + "/svg-edit.js")
 
})

function loadStylesheet(href, target) {
  let link = document.createElement("link")
  target = target || document.head
  link.rel = "stylesheet"
  link.href = href
  target.appendChild(link)
}

function loadScript(src, target) {
  let script = document.createElement("script")
  target = target || document.body
  script.src = src
  target.appendChild(script)
}

//window.loadStylesheet = loadStylesheet