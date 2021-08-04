import {request} from "./request";

export function getCountrydata() {
  // return request({
  //   url: '/country',
  //   params:{
  //     countryName
  //   }
  // })
  return request({
    url: '/page-data.json',
  })
}

export function getworldData(){
  // return request({
  //   url: '/worldData',
  // })
  return request({
    url: '/worldData.json',
  })
}

export function getbrief(){
  return request({
    url: '/brief.json',
  })
}

export function getchina(){
  // return request({
  //   url: '/chinaInfo',
  // })
  return request({
    url: '/chinaInfo.json',
  })
}



export function getvacc(){
  // return request({
  //   url: '/vaccination-data',
  // })
  return request({
    url: '/vaccination-data.json',
  })
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()

let totalNums = []

const nums1 = [20, 11, 222]
const nums2 = [111, 22, 333]

// for (let n of nums1) {
//   totalNums.push(n)
// }

totalNums.push(...nums1)
