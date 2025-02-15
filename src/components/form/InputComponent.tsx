export default function InputComponent({styles,type="text",placeholder, name, id,state,handleChange}:{styles?:string,type?: string,placeholder:string,name: string, id: string,state: string,handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void}) {
  return (
    <div className={styles}>
      <input type={type} name={name} id={id} onChange={handleChange} placeholder={placeholder} value={state} className={`p-2 rounded-md border-black border-2 w-full`}/>
    </div>
  )
}