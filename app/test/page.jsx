// 2:32ж11
const Page = () => {
  const handleForm = async (formaData) => {
    'use server'
    console.log('formaData', formaData)
    const username = formaData.get('username')
    console.log('hello', username)
  }
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" className="text-black" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Page
// "use client"
// import { useState } from "react"

// const Page = () => {
//   const {input, setInput} = useState('')
//   return (
//     <div>
//       <form>
//         <input type="text" onChange={e=>setInput(e.target.value)}/>
//         <button onClick={send(input)}>Sebd</button>
//       </form>
//     </div>
//   )
// }

// export default Page
