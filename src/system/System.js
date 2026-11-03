
import { useState } from "react"
import "./System.css"

function System() {
    const [name,setname] = useState("")
    const [lastname,setlastname] = useState("")
    const [date,setdate] =useState("")
    const [month,setmonth] =useState("")
    const [year,setyear] =useState("")
    const [email,setemail] =useState("")
    const [number,setnumber] =useState("")
    const [category,setcategory] =useState("")
    const [user,setuser] = useState("")
    
    const [emoployees,setemployees] =useState([]) 

    const [editid,seteditid] = useState(null)

    function Addemployee(){
         let list = {
            id :Date.now(),name:name,lastname:lastname,date:date,
            month:month,year:year,email:email,number:number,category:category,user:user
          }
        
          setemployees([...emoployees, list])

    setname("")
    setlastname("")
    setdate("")
    setmonth("")
    setyear("")
    setemail("")
    setnumber("")
    setcategory("")
    setuser("")
    }
    function Delete(id){
         let result = emoployees.filter((item)=> item.id !== id)

         setemployees(result)
    }

    function Edit(id){
           let result = emoployees.find((item)=>(
            item.id === id
           ))
    setname(result.name)
    setlastname(result.lastname)
    setdate(result.date)
    setmonth(result.month)
    setyear(result.year)
    setemail(result.email)
    setnumber(result.number)
    setcategory(result.category)
    setuser(result.user)

    seteditid(id)

    }

    function Update(){
        let result = emoployees.map((item)=>{
          if (item.id === editid){
            return{
                ...item,
                name:name,
                lastname:lastname,
                date:date,
                month:month,
                year:year,
                email:email,
                number:number,
                category:category,
                user:user

          }
          }
          return item
        })
        setemployees(result)
           
    setname("")
    setlastname("")
    setdate("")
    setmonth("")
    setyear("")
    setemail("")
    setnumber("")
    setcategory("")
    setuser("")
    seteditid(null)

    }
    
  return (
    <div>

        <h1>new employee</h1> <br/>
        <br/> <br/>

        <div className='input-container'>   
        <h5>first name</h5>
        <input type='name' placeholder='Name' value={name} onChange={(e)=>{
            setname(e.target.value)
        }}></input> <br/> <br/>
        <h5>last name</h5>
        <input type='name' placeholder='Last Name' value={lastname} onChange={(e)=>{
            setlastname(e.target.value)
        }}></input> <br/> <br/>

        <h5>date of birth</h5> 
    <div className='dob-container'>  
        <input type='numbee' placeholder='Date' value={date} onChange={(e)=>{
            setdate(e.target.value)
        }}></input> 
        <input type='name' placeholder='Month' value={month} onChange={(e)=>{
            setmonth(e.target.value)
        }}></input>
        <input type='number' placeholder='Year' value={year} onChange={(e)=>{
            setyear(e.target.value)
        }}></input>
         </div>

        <br/> <br/>
        <h5>email</h5>
        <input type='email' placeholder=' Email' value={email} onChange={(e)=>{
            setemail(e.target.value)
        }}></input>
        <br/> <br/>
        <h5>phone number</h5>
        <input type='number' placeholder='Phone Number' value={number} onChange={(e)=>{
            setnumber(e.target.value)
        }}></input> <br/> <br/>

        <h5>category</h5>
        <input type='text' placeholder='Set Category' value={category} onChange={(e)=>{
            setcategory(e.target.value)
        }}></input> <br/> <br/>

        <h5>user</h5>
        <input type='text' placeholder='User' value={user} onChange={(e)=>{
            setuser(e.target.value)
        }}></input> <br/> <br/>

        </div>


<div className="button-container">
    
    {
        editid === null? (
            <button className='add-btn' onClick={Addemployee}>Add Employee</button> 
        ) :
        (
            <button className='add-btn' onClick={Update}>Update Employee</button> 
        )
    }
</div >
    <table className='table-box'>
        <thead>
            <tr>
                <th>name</th> <th>last name</th> <th>date of birth</th> <th>email</th>
                <th>number</th> <th>category</th> <th>user</th> <th>Remove</th> <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {
                emoployees.map((item)=>(
                    <tr >
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.date}/{item.month}/{item.year}</td>
                        <td>{item.email}</td>
                        <td>{item.number}</td>
                        <td>{item.category}</td>
                        <td>{item.user}</td>
                        <td><button onClick={()=> Delete (item.id)}>Remove</button></td>
                        <td><button onClick={()=> Edit (item.id)}>Edit</button></td>
                    </tr>
                ))
            }
        </tbody>

    </table>
</div>

  )
}

export default System