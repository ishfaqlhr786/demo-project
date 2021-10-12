import {Form, FormGroup,Button} from 'react-bootstrap';

import '../App.css';
import { IFormState } from './MultiForm';
interface IProps{
    nextStep:()=> void;
    formState:IFormState;
    handleChange: (value: string,FieldNAme:string) => void;
    previousStep:()=> void;
}
export function StudentForm2(props: IProps){
    const {nextStep,formState,handleChange,previousStep}=props;
    
    return(
        <div className="App">
            <Form >
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label><br/>
                    <Form.Control type="text" placeholder="enter email"
                    value={formState.email}
                    onChange= {(event)=>handleChange(event.target.value,'email')}
                    />

                </Form.Group><br/>
                <Form.Group controlId="formGroupFatherName">
                    <Form.Label>Phone number</Form.Label><br/>
                    
                    <Form.Control type="text" placeholder="enter phone number"
                    value={formState.phoneNumber}
                    onChange= {(event)=>handleChange(event.target.value,'phoneNumber')}
                    />
                    
                </Form.Group>
                <br/>
                <Form.Group>
                    <Button onClick={previousStep} type="submit">Previous</Button>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Button onClick={nextStep} type="submit">Continue</Button>
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