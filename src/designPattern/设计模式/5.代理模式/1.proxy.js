class Google{
  get(url){
     return  "google"
  }
}
 class Proxy{
   constructor() {
      this.google  = new Google()
   }
   get(url){
     return this.google.get(url)
   }
 }
 let proxy  = new Proxy()
 let res  =  proxy.get("url")
  console.log(1111, res)