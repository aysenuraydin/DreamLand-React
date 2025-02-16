
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updatePassword, EmailAuthProvider, reauthenticateWithCredential, sendPasswordResetEmail } from "firebase/auth";
import { provider,auth, database } from "../firebase/firebaseConfig";
import { getDatabase, ref, set,update } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux';


export const login = (uid, displayName, email) => ({
    type: "LOGIN",
    payload: { uid, displayName, email },
}); 
export const logout = () => ({
    type: "LOGOUT",
}); 
export const startGoogleLogin = () => {
    return async (dispatch, getState) => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const { uid, displayName, email } = result.user;

            const users = getState().user.users; 

            if (users.some((user) => user.email === email)) {

                //set user
                dispatch(login(uid, email.split("@")[0], email));
                console.log(`✅ Giriş başarılı: ${email}`);
            } else {
                await signOut(auth);
                console.warn("❌ Bu e-posta ile giriş izni yok!");
                dispatch(setAuthError("Bu e-posta ile giriş izni yok!"));
            }
        } catch (error) {
            console.error("❌ Google login error:", error.message);
            dispatch(setAuthError(error.message));
        }
    };
};
export const startEmailPasswordLogin = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const auth = getAuth();
            const result = await signInWithEmailAndPassword(auth, email, password);
            const { uid } = result.user;

            const users = getState().user.users; 

            if (users.some((user) => user.email === email)) {

                //set user
                dispatch(login(uid, email.split("@")[0], email));
                console.log(`✅ Giriş başarılı: ${email}`);
            } else {
                await signOut(auth);
                console.warn("❌ Bu e-posta ile giriş izni yok!");
                dispatch(setAuthError("Bu e-posta ile giriş izni yok!"));
            }
        } catch (error) {
            console.error("❌ Email/password login error:", error.message);
            dispatch(setAuthError(error.message));
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
        console.log("Kullanıcı başarıyla oluşturuldu! Giriş yapabilirsiniz. ");
        } catch (error) {
        console.error("Kayıt hatası:", error.message);
        console.log("Kayıt olurken bir hata oluştu: " + error.message);
        }
    };
};
const register = (uid, email) => ({
    type: "REGISTER",
    payload: { uid, email },
});
export const updatePasswordAction = (oldPassword, newPassword) => {
    console.log(oldPassword, newPassword);
    return async (dispatch, getState) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            dispatch({ type: "UPDATE_PASSWORD_ERROR", payload: "Giriş yapmalısınız!" });
            return;
        }

        try {
            const credential = EmailAuthProvider.credential(user.email, oldPassword);
            await reauthenticateWithCredential(user, credential);

            await updatePassword(user, newPassword);

            dispatch({ type: "UPDATE_PASSWORD_SUCCESS", payload: "Şifre başarıyla güncellendi!" });
        } catch (error) {
            console.error("Şifre güncelleme hatası:", error.message);
            dispatch({ type: "UPDATE_PASSWORD_ERROR", payload: error.message });
        }
    };
};
export const forgotPasswordAction = (email) => {
    return async (dispatch) => {
        const auth = getAuth();
        try {
            await sendPasswordResetEmail(auth, email);
            dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: "Şifre sıfırlama e-postası gönderildi!" });
        } catch (error) {
            dispatch({ type: "FORGOT_PASSWORD_ERROR", payload: error.message });
        }
    };
};


