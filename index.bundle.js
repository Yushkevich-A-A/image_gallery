!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.createForm()}var n,r;return n=t,(r=[{key:"createForm",value:function(){this.formContainer=document.createElement("div"),this.formContainer.classList.add("form-container"),this.form=document.createElement("form"),this.form.classList.add("form"),this.form.innerHTML='<div class="input-container name-container">\n                            <label class="label" for="name">Название</label>\n                            <input  type="text" class="input name" id="name"> \n                          </div>\n                          <div class="input-container address-container">\n                            <label class="label" for="url-address">Ссылка на изображение</label>\n                            <input  type="text" class="input url-address" id="url-address"> \n                            <div class="url-error">Неверный URL изображения</div>\n                          </div>\n                          <div class="button-container">\n                            <button class="button">Добавить</button>\n                          </div>',this.formContainer.appendChild(this.form),document.body.appendChild(this.formContainer),this.inputName=document.querySelector(".name"),this.inputURL=document.querySelector(".url-address"),this.button=document.querySelector(".button"),this.error=document.querySelector(".url-error")}},{key:"addError",value:function(){this.error.classList.add("active")}},{key:"removeError",value:function(){this.error.classList.remove("active")}},{key:"resetValues",value:function(){this.inputName.value="",this.inputName.blur(),this.inputURL.value="",this.inputURL.blur()}}])&&e(n.prototype,r),t}();function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"изображение";n(this,e),this.img=t,this.alterText=r,this.imgGallery=document.querySelector(".gallery-container"),this.drawBlockImage()}var t,i;return t=e,(i=[{key:"drawBlockImage",value:function(){this.imageDiv=document.createElement("div"),this.imageDiv.classList.add("container-img"),this.img.classList.add("img"),this.img.alt=this.alterText,this.removeButton=document.createElement("button"),this.removeButton.classList.add("remove-button"),this.imageDiv.appendChild(this.img),this.imageDiv.appendChild(this.removeButton),this.imgGallery.appendChild(this.imageDiv)}}])&&r(t.prototype,i),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t,this.arrURL=[],this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.drawGalleryContainer(),this.addListeners()}},{key:"drawGalleryContainer",value:function(){this.GalleryContainer=document.createElement("div"),this.GalleryContainer.classList.add("gallery-container"),document.body.appendChild(this.GalleryContainer)}},{key:"addListeners",value:function(){var e=this;document.addEventListener("click",(function(t){t.preventDefault(),t.target.closest(".button")&&e.checkValidityURL(),t.target.closest(".remove-button")&&e.GalleryContainer.removeChild(t.target.closest(".container-img"))})),document.addEventListener("keydown",(function(t){"Enter"===t.code&&e.form.button.click()}))}},{key:"checkValidityURL",value:function(){var e=this;this.form.removeError();var t=document.createElement("img");t.src=this.form.inputURL.value,t.onload=function(){return new i(t,e.form.inputText)},t.onerror=function(){return e.form.addError()},this.form.resetValues()}}])&&a(t.prototype,n),e}())(new t)}();