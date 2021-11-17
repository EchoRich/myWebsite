class Modal  {
   constructor(options) {
      this.title  =   options.title || "标题"
      this.content  = options.content || "内容"
      this.onConfirm  = options.onConfirm;
      this.onCancel  = options.onCancel
      this.init()
      this.eventListener()
   }
  //  初始化的方法 用于在页面绘制一个对话框 
   init() {
     this.panel  = document.createElement("div")
     this.panel.className="modal"
     document.body.appendChild(this.panel)
     this.titleP  = document.createElement("p")
     this.titleP.innerHTML =  this.title;
      this.panel.appendChild(this.titleP )

      this.contentP  = document.createElement("p")
      this.contentP.innerHTML =  this.title;
      this.panel.appendChild( this.contentP )

      this.confirmBtn  = document.createElement("button")
      this.confirmBtn .innerHTML =  "确定";
      this.confirmBtn .className="btn confirm-btn"
      this.panel.appendChild(this.confirmBtn )

      this.cancelBtn  = document.createElement("button")
      this.cancelBtn.innerHTML =  "取消";
      this.cancelBtn.className="btn cancel-btn"
      this.panel.appendChild(this.cancelBtn )

   }
   eventListener() {

    this.confirmBtn.addEventListener("click",() => {
      this.onConfirm()
      this.hide()
    })
    this.cancelBtn.addEventListener("click",() => {
      this.onCancel()
      this.hide()
    })
   }
   hide() {
     this.panel.style.display="none"
   }
   show() {
    this.panel.style.display="block"
   }
}
 class ContentOnly extends Modal{
    // constructor() {
    //   super()
    // }
     init() {
        super.init();
        this.titleP.parentNode.removeChild(this.titleP)
     }
 }
  class TitleOnly extends Modal  {
    init() {
      super.init()
      this.contentP.parentNode.removeChild(this.contentP)
    }
  }