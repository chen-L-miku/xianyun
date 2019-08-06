// 数据对象
export const state = ()=>{
  return {
    record:[]
  }
}

// 设置state的值
export const mutations={
  setRecord(state,arr){
    state.record =arr
    // console.log(arr);
    
  }
}