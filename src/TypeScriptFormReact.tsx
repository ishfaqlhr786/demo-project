import {useState} from 'react'
//import { StudentForm1 } from './StudentForm1';
//import { StudentForm2 } from './StudentForm2';
import {Form,Button } from 'react-bootstrap';
export interface IFormState{
    //step:number;
    name:string;
    fatherName:string;
    motherName:string;
    email:string;
    phoneNumber:string;
    address:string;
    permanentAddress:string;
}
const defaultValue :IFormState={
   // step:1,
    name:"",
    fatherName:"",
    motherName:"",
    email:"",
    phoneNumber:"",
    address:"",
    permanentAddress:""

}

export function TypeScriptFormReact(){
    const [formState,setFormState]=useState<IFormState>(defaultValue);
   
   
    const handleFieldUpdate=(value:string,FieldNAme:string)=>{
      setFormState({
          ...formState,
          [FieldNAme] :value
      })
    }
   
    return(
        <div className="App">
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label><br/>
                    <Form.Control type="text" placeholder="enter name"
                    value={formState.name}
                    onChange= {(event)=>handleFieldUpdate(event.target.value,'name')}
                    />

                </Form.Group><br/>
                <Form.Group controlId="formGroupFatherName">
                    <Form.Label>Father Name</Form.Label><br/>
                    
                    <Form.Control type="text" placeholder="enter fathre name"
                    value={formState.fatherName}
                    onChange= {(event)=>handleFieldUpdate(event.target.value,'fatherName')}
                    />
                    
                </Form.Group>
                <br/>
                <Form.Group controlId="formGroupMotherName">
                    <Form.Label>Mother Name</Form.Label><br/>
                    <Form.Control type="text" placeholder="enter mother  name"
                    value={formState.motherName}
                    onChange= {(event)=>handleFieldUpdate(event.target.value,'motherName')}
                    />
                    
                </Form.Group>
               
                <br/>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label><br/>
                    <Form.Control type="text" placeholder="enter email"
                    value={formState.email}
                    onChange= {(event)=>handleFieldUpdate(event.target.value,'email')}
                    />

                </Form.Group><br/>
                <Form.Group controlId="formGroupFatherName">
                    <Form.Label>Phone number</Form.Label><br/>
                    
                    <Form.Control type="text" placeholder="enter phone number"
                    value={formState.phoneNumber}
                    onChange= {(event)=>handleFieldUpdate(event.target.value,'phoneNumber')}
                    />
                    
                </Form.Group>
                <br/>
                <Form.Group>
                    <Button onClick={(event)=>{
                        event.preventDefault();
                        console.log(formState)
                    }} type="submit">Submit</Button>
                </Form.Group>
               
  
</Form>
        </div>
    )

   
}