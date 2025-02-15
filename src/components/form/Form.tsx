import { FormEvent, ReactNode } from "react";

export default function Form({styles,children, handleSubmit}:{styles?:string,children: ReactNode, handleSubmit: (e: FormEvent<HTMLFormElement>)=>void}) {
  return (
    <form className={styles} onSubmit={handleSubmit}>
        {children}
    </form>
  )
}
