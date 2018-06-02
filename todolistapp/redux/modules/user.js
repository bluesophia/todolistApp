//Imports

//Actions

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//Action creators

function logIn(){
    return{
        type: LOGIN
    };
}

function logOut(){
    return{
        type: LOGOUT
    };
}
// const logIn = (email, password) => {
//     return{
//         type: LOGIN,
//         email: email,
//         password: password
//     }
// }

// const logOut = () => {
//     return{
//         type: LOGOUT
//     }
// }

//API Actions

//Initial State

  const initialState = {
    isLoggedIn: false,
    email: '',
    password: ''
}

  
   //Reducer
   function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return applyLogin(state);
        case LOGOUT:
            return applyLogOut(state);    
        default:
            return state;
        
    }
}
//   function reducer(state = initialState, action){
//     switch(action.type){
//         case LOGIN:
//             return Object.assign({}, state, {
//                 /* 메소드는 열거할 수 있는 하나 이상의 소스 오브젝트로 부터 타켓 오브젝트로 프로퍼티들을 복사하는데 사용됩니다. 
//                  그리고, 타겟 오브젝트가 반환될 것입니다.
//                  첫번째 인수로 전달받은 state는 수정하면 안됨 -> 상태를 수정할때는 반드시 Object.assign등을 사용해서 새로운 객체를
//                  만들어서 반환해야 함
//                  */
//                 isLoggedIn: true,
//                 username: action.username,
//                 password: action.password
//             });
//         case LOGOUT:
//             return Object.assign({}, state, {
//                 isLoggedIn: false,
//                 username: action.username,
//                 password: action.password
//         });       
//         default:
//             return state;
        
//     }
// }

  //reducer Functions
  function applyLogin(state){
    return{
        ...state,
        isLoggedIn: true
    };
}
function applyLogOut(state){
    return{
        ...state,
        isLoggedIn: false
    };
}
  //Export Action Creators

const actionCreators = {
    logIn,
    logOut,
}

export { actionCreators };


  
  //Exports
  
  //default reducer export
  
  export default reducer;
  