/**
 * 这样的 方法出现的问题在于如在在表单上加上password等字段的时候就需要改变这个方法中的内容
 * 这就违背了开放封闭的原色 
 * 并且也违背了单一职责的原则
*/
function check() {
  let userName  = document.querySelector("#userName").value;
  if(!userName || userName.length< 6 || userName>12){
     return alert("用户名不合法")
  }
  let email  = document.querySelector("#email").value;
  if(!email){
    return alert("邮箱不合法")
  }
}

 function check2() {
   let form  = document.querySelector("#userForm");
   let inputs  = form.querySelectorAll("input"); 
   for(let i  = 0 ; i< inputs.length; i++){
     let validate  = inputs[i].dataset.validate
      console.log(1111, validate ,"这是一个字符串")
     let validateFn  = window[validate]
      if(validateFn){
        let error  = validateFn(inputs[i])
        if(error) {
          return alert(error)
        }
      }
   }
 }
  function checkUserName(input){
 
  }
   function checkEmail(input) {
     let val  = input.value;
     if(!val) return alert("something wrong")
   }