"use client"

import React from "react";
import { useFormState} from 'react-dom'
import login from "./actions";

export default function Page(){
    const [state, formAction] = useFormState(login, {error: ''});
    return <>
        {state && state.error} <div className="alert">{state.error}</div>
        <form action={formAction}>
            <h1 className="text-3xl font-bold underline">Login</h1>
            <input type="text" name="email" /> <br />
            <input type="password" name="password" /> <br />
            <button >Submit</button>
        </form>
    </>
}