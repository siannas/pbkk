import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const loginUser = (userData, callbackFunc) => {
    dispatch(setUserLoading());
    axios
        .post("/api/users/login", userData)
        .then(res => {
            // Save to localStorage
            // Set token to localStorage
            const {
                token
            } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            
            return decoded;

        })
        .catch(err =>{
            toggleCatchError(dispatch, err);
        });
};


export const loadUserFromToken = () => {
    // Get token from local storage
    let token = localStorage.getItem("jwtToken")
    if(!token || token === '') {//if there is no token, dont bother
        return;
    }
    axios
        .get("/api/users/my/token",
            {headers: {
                "authorization" : token
            }}
        ).then(res=>{
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            return decoded;
        }).catch(err =>{});
};