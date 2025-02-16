import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { provider,auth } from "../firebase/firebaseConfig";

export const login = (uid, displayName, email) => ({
    type: "LOGIN",
    payload: { uid, displayName, email },
});

export const logout = () => ({
    type: "LOGOUT",
});

export const startGoogleLogin = () => {
    return async (dispatch) => {
        try {
        const auth = getAuth();
        const result = await signInWithPopup(auth, provider);
        const { uid, displayName, email } = result.user;

        // if (!allowedEmails.includes(email)) {
        //     await signOut(auth); 
        //     alert("Bu e-posta ile giriş izni yok!");  
        //     return;
        // }

        dispatch(login(uid, displayName, email));
        } catch (error) {
        console.error("Google login error:", error);
        throw error;
        }
    };
};

export const startEmailPasswordLogin = (email, password) => {
    console.log(email, password);
    return async (dispatch) => {
        try {
        const auth = getAuth();
        const result = await signInWithEmailAndPassword(auth, email, password).then();
        const { uid } = result.user;
        console.log(result.user);
        dispatch(login(uid, email.split('@')[0], email));
        } catch (error) {
        console.error("Email/password login error:", error);
        throw error;
        }
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        try {
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout());
        } catch (error) {
        console.error("Logout error:", error);
        throw error;
        }
    };
};


export const startRegisterWithEmailPassword = (email, password) => {
    return async (dispatch) => {
        try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const { uid, email: userEmail } = result.user;

        dispatch(register(uid, userEmail));
        alert("Kullanıcı başarıyla oluşturuldu! Giriş yapabilirsiniz. ");
        } catch (error) {
        console.error("Kayıt hatası:", error.message);
        alert("Kayıt olurken bir hata oluştu: " + error.message);
        }
    };
};

// Kullanıcıyı Redux state'e ekleyen action
const register = (uid, email) => ({
  type: "REGISTER",
  payload: { uid, email },
});