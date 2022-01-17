import { pathToRegexp } from "path-to-regexp"

/*
 * @Author: your name
 * @Date: 2022-01-17 19:37:58
 * @LastEditTime: 2022-01-17 20:51:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/react-router/matchPath.js
 */
function compilePath (path, options) {
     const  keys  = []
     const regexp  = pathToRegexp(path,  keys, options)
     return {keys, regexp}

}
/**
 * @description:把地址懒的路径和属性中的path进行匹配
 * @param {*} pathname  地址中的路径 
 * @param {*} options 属性对象
 * @return {*}
 */
function matchPath  (pathname, options){
    // sensitive  就是大小写敏感
    // strict  是否是严格匹配
    let {path="/" , exact = false, strict = false, sensitive= false} = options
    let  {keys, regexp} =  compilePath(path, {
         end:exact,
         sensitive,
         strict,
     })
      let match  = regexp.exec(pathname)
      if(!match ) return null;
       const  [url,...groups] = match
       const isExact  = pathname==url // 是否是完整匹配
       if(exact &&!isExact) return null 
       return {
           path, url, isExact,  params:  keys.reduce((memo,  key, index) => {
            memo[key.name] = groups[index]   
            return memo
           },  {})
       }

}
 export default matchPath