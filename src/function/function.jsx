function loginCheck () {
    if (localStorage.getItem("loginKey") === "sjghRQEETGWkfadvdljpshgkfnewEFQREGW"){
        return true
    }else {
        return false
    }
}

export default loginCheck