import { Formik, Form } from "formik"
import { MytextInput } from "../components/MyTextInput";
import * as Yup from 'yup';

export const RegisterPage = () => {
  return (
    <div>


    <div>

        <h1>Hola</h1>
        
        <Formik
            initialValues={{
                user: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ (values) => {
                console.log(values);
                
            }}
            validationSchema={ Yup.object({
                user: Yup.string()
                    .required('required')
                    .max( 10, 'must have a maximum of 10 characters' )
                    .min( 2, 'must have a minimum of 2 characters'),
                email: Yup.string()
                    .required('required')
                    .email(),
                password1: Yup.string()
                    .required('required')
                    .min( 6, 'must have a minimum of 6 characters' ),
                password2: Yup.string()
                    .required('required')
                    .oneOf([ Yup.ref('password1')], 'passwords must be the same')

            })}

            //* Validacion lista Mañana toca hacerlo bonito
            
        >

            { () => (
                <Form noValidate>
                    
                    <MytextInput 
                        label="User" 
                        name="user" 
                        placeholder="user" 
                        type="text" />

                    <MytextInput 
                        label="Email" 
                        name="email" 
                        placeholder="email" 
                        type="email" />

                    <MytextInput 
                        label="Password" 
                        name="password1" 
                        placeholder="password" 
                        type="password" />

                    <MytextInput 
                        label="Repeat password" 
                        name="password2" 
                        placeholder="repeat password" 
                        type="password" />


                    <button type="submit">Crear</button>

                </Form>
            )}

        </Formik>

    </div>


</div>
  )
}
