// 保存数据的属性
export const state = {
    userInfo:{
        token:'',
        user:{}
    }
}

// 同步修改数据
export const mutations = {

    setUserinfo(state,data){
        state.userinfo=data
    }
}

// 异步修改数据
export const actions={
     // 登录
     login({commit}, data){
        return this.$axios({
            url: "/accounts/login",
            method: "POST",
            data: data
        }).then(res => {
            const data = res.data;
            // 保存到state
            commit("setUserInfo", data);
            return data;
        })
    }
}