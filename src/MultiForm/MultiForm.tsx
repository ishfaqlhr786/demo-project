import {useState} from 'react'
import { StudentForm1 } from './StudentForm1';
import { StudentForm2 } from './StudentForm2';
export interface IFormState{
    step:number;
    name:string;
    fatherName:string;
    motherName:string;
    email:string;
    phoneNumber:string;
    address:string;
    permanentAddress:string;
}
const defaultValue :IFormState={
    step:1,
    name:"",
    fatherName:"",
    motherName:"",
    email:"",
    phoneNumber:"",
    address:"",
    permanentAddress:""

}

export function MultiForm(){
    const [formState,setFormState]=useState<IFormState>(defaultValue);
    const handleFieldUpdate=(value:string,FieldNAme:string)=>{
      setFormState({
          ...formState,
          [FieldNAme] :value
      })
    }
    const handleNextStep=()=>{
        setFormState({
            ...formState,
            step :formState.step +1
        })
    }
    const handlePreviousStep=()=>{
        setFormState({
            ...formState,
            step :formState.step -1
        })
    }
    const RenderForm=()=>{
        if(formState.step ===1){
        return    <StudentForm1   nextStep={handleNextStep}
        handleChange={handleFieldUpdate}
        formState={formState}/>
        }
        else if(formState.step === 2){
            return    <StudentForm2   previousStep  ={handlePreviousStep} nextStep={handleNextStep}
        handleChange={handleFieldUpdate}
        formState={formState}/>
        }
      return <>
      
      </>  
    }
    return(
        <>
        {RenderForm()}
        </>
    )
}