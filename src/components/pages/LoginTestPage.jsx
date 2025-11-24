import { useState } from "react";
import { auth } from "../../config/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export default function LoginTestPage() {
  const [text, setText] = useState("");

  async function login() {
    await signInWithPopup(auth, new GoogleAuthProvider());
  }

  async function test() {
    setText(auth?.currentUser?.email);
  }

  return (
    <div className="flex flex-col gap-3">
      <p>simple test</p>
      <button className="btn btn-accent" onClick={login}>
        Login
      </button>
      <button className="btn btn-accent" onClick={() => signOut(auth)}>
        Logout
      </button>
      <button className="btn btn-accent" onClick={test}>
        Test
      </button>
      <span>{text}</span>
    </div>
  );
}
