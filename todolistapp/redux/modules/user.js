//Imports

//Actions

const LOGIN = 'LOGIN';
const LOGIN = 'LOGOUT';

//Action creators

const login = (username, password) => {
    return{
        type: "LOGIN",
        username: username,
        password: password
    }
}

const logout = () => {
    return{
        type: "LOGOUT"
    }
}

//API Actions

//Initial State

  const initialState = {
    isLoggedIn: false,
    username: '',
    password: ''
}

  
  //Reducer
  
  function reducer(state = initialState, action){
    switch(action, type){
        case 'LOGIN':
            return Object.assign({}, state, {
                /* 메소드는 열거할 수 있는 하나 이상의 소스 오브젝트로 부터 타켓 오브젝트로 프로퍼티들을 복사하는데 사용됩니다. 
                 그리고, 타겟 오브젝트가 반환될 것입니다.*/
                isLoggedIn: true,
                username: action.username,
                password: action.password
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: action.username,
                password: action.password
        });       
        default:
            return state;
        
    }
}

  //reducer Functions
  
  //Exports
  
  //default reducer export
  
  export default reducer;
  