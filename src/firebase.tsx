import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GithubAuthProvider,
    getAuth,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth"
import {addDoc, collection, getDocs, getFirestore, query, where,} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFulAi63lWaCZ6kgMJQ7bsTvGnqZNRehY",
    authDomain: "authproject-9355e.firebaseapp.com",
    projectId: "authproject-9355e",
    storageBucket: "authproject-9355e.appspot.com",
    messagingSenderId: "969851580675",
    appId: "1:969851580675:web:dace427c2062c0ff7af936",
    measurementId: "G-V0W8R05ESH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
getAnalytics(app);

const githubProvider = new GithubAuthProvider();

const githubLogin = async () =>{
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            GithubAuthProvider.credentialFromResult(result);
        }).catch((error) => {
        GithubAuthProvider.credentialFromError(error);
// ...
    });
}

const facebookProvider = new FacebookAuthProvider();

const facebookLogin = async () => {

    signInWithPopup(auth, facebookProvider)
        .then((result) => {
            FacebookAuthProvider.credentialFromResult(result);
        })
        .catch((error) => {
            FacebookAuthProvider.credentialFromError(error);
        });
}
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name: any, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth).then(r => console.log("success"));
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    facebookLogin,
    githubLogin
};

