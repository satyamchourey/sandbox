import { useEffect, useState } from 'react'


export default function Form() {

const [data, setData] = useState({
  "title": "Customer Feedback",
  "fields": [
    { "name": "name", "label": "Full Name", "type": "text" },
    { "name": "rating", "label": "Rating", "type": "number" },
    { "name": "comment", "label": "Comment", "type": "textarea" }
  ]
});
const [val , setVal] = useState({
    'name' : '',
    'rating'  : '',
    'comment' : ''
})

    const handleChange= (key , newVal)=>{
        let updatedData = {...val}
        updatedData[key] = newVal
        setVal(updatedData)
    }

  return (
    <div className='form'>
        <form onSubmit={(e)=>{e.preventDefault();console.log(val)}} >
            {
                data.fields.map((row , i)=>(
                    <div key={i}>
                        <label htmlFor={row.name}>{row.label}</label>
                        <input id={row.name} type={row.type} onChange={(e)=>handleChange(row.name , e.target.value)} tabIndex='0'/>
                    </div>
                )) 
            }
            <input type='submit' label='Submit' />
        </form>
    </div>
  );
}
