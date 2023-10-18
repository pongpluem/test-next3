
import { Button } from 'primereact/button';  

import {test2} from './testapi'

async function getData() {
  console.log(0)
  await fetch('https://fakestoreapi.com/products')
    .then((response) => response.text())
    .then((body) => {
        //console.log(body);
        console.log(1)
    }); 

    console.log(2)


  const res = await fetch('https://fakestoreapi.com/products')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log(3)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  //console.log(res)
  //return res.json()
}

async function d2() {
  console.log(5)
  await getData()

  console.log(6)
}


export default async function Page1() {
  let a = "5555"
  //dd = "ss"

  d2()
  

  console.log("Page1")
  return (
    <div>
      <h1>Page1 {a}</h1>
      <Button >Button</Button>
    </div>
  )
}
 