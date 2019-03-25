window.addEventListener(("load"), () => {
  Vue.component("avengersdiv", {
    props:['boxclass', 'avatarclass', 'movname', 'link'],

    template: `
    <div v-bind:class="boxclass">
        <div class="outer-div">
          <div v-bind:class="avatarclass"></div>
        </div>
        <br/>
        <h2 class="name">Avengers</h2>
        <h5 class="name">{{movname}}</h5>
        <a v-bind:href="link" class="mybutton">
         <span>Read More</span>
        <div class="transition"></div>
        </a>

    </div>
    `

  })
  new Vue({
    el: "#page-body"

  })

})
