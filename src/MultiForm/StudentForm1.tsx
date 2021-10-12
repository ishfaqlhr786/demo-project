import {Form,Button } from 'react-bootstrap';

import '../App.css';
import { IFormState } from './MultiForm';
interface IProps{
    nextStep:()=> void;
    formState:IFormState;
    handleChange: (value: string,FieldNAme:string) => void
}
export function StudentForm1(props: IProps){
    const {nextStep,formState,handleChange}=props;
    return(
        <div className="App">
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label><br/>
                    <Form.Control type="text" placeholder="enter name"
                    value={formState.name}
                    onChange= {(event)=>handleChange(event.target.value,'name')}
                    />

                </Form.Group><br/>
                <Form.Group controlId="formGroupFatherName">
                    <Form.Label>Father Name</Form.Label><br/>
                    
                    <Form.Control type="text" placeholder="enter fathre name"
                    value={formState.fatherName}
                    onChange= {(event)=>handleChange(event.target.value,'fatherName')}
                    />
                    
                </Form.Group>
                <br/>
                <Form.Group controlId="formGroupMotherName">
                    <Form.Label>Mother Name</Form.Label><br/>
                    <Form.Control type="text" placeholder="enter mother  name"
                    value={formState.motherName}
                    onChange= {(event)=>handleChange(event.target.value,'motherName')}
                    />
                    
                </Form.Group>
                <Form.Group>
                    <Button type="submit" onClick={nextStep}>Continue</Button>
                </Form.Group>
  
</Form>
        </div>
    )
}