class Factory{
  createButton() {}
  createIcon() {}
}
 class Button {

 }
 class AppleButton{
   render() {
      console.log("绘制苹果按钮")
   }
 }
 class windowsButton {
   render() {
     console.log("绘制window按钮")
   }
 }
 class Icon {

 }
  class AppleIcon {
    render () {
      console.log("绘制appleicon ")
    }
  }
  class WindowIcon {
    render() {
      console.log("绘制windowicon")
    }
  }
   class WindowFactory extends Factory {
     createIcon () {
        return new WindowIcon()
     }
     createButton() {
        return new windowsButton()
     }
   }
    class AppleFactory extends Factory {
      createIcon() {
        return new AppleIcon()
      }
      createButton() {
         return new AppleButton()
      }
    }
    let windowsFactory  = new WindowFactory()
    windowsFactory.createIcon().render()
    windowsFactory.createButton().render()
    let appleFactory  = new AppleFactory()
    appleFactory.createButton().render()
    appleFactory.createIcon().render()