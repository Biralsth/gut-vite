import React from 'react'


const App = () => {
  const getData = () => {
    console.log('Hallo')
  }
  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-red-900 text-white text-2xl px-6 py-3 rounded active:scale-90'>Boahhh Get Data</button>
      <div className="p-5 bg-amber-100">Hey</div>

    </div>
  )
}

export default App



// import { useState } from 'react'
// import Card from './components/Card'


// // import './App.css'

// const App = (props) => {

//   const users = [
//     {
//       "name": "Alice Johnson",
//       "age": 29,
//       "city": "New York",
//       "profession": "Software Engineer",
//       "profile_photo": "https://example.com/profiles/alice.jpg"
//     },
//     {
//       "name": "Bob Smith",
//       "age": 34,
//       "city": "Los Angeles",
//       "profession": "Graphic Designer",
//       "profile_photo": "https://example.com/profiles/bob.jpg"
//     },
//     {
//       "name": "Carol White",
//       "age": 26,
//       "city": "Chicago",
//       "profession": "Marketing Specialist",
//       "profile_photo": "https://example.com/profiles/carol.jpg"
//     },
//     {
//       "name": "David Brown",
//       "age": 42,
//       "city": "Houston",
//       "profession": "Architect",
//       "profile_photo": "https://example.com/profiles/david.jpg"
//     },
//     {
//       "name": "Eve Taylor",
//       "age": 31,
//       "city": "San Francisco",
//       "profession": "Product Manager",
//       "profile_photo": "https://example.com/profiles/eve.jpg"
//     }
//   ]

//   users.forEach(function () {
//     console.log("Hello")
//   })


//   return (
//     <>
//       <div className='p-10 bg-black text-white'>

//         {users.map(function (elemn) {
//           return <Card username={elemn.name} age={elemn.age} city={elemn.city}
//             photo={elemn.profile_photo} prof={elemn.profession}

//           />


//         })}
//       </div>

//     </>

//   )
// }

// export default App
