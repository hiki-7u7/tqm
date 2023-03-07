import { Formik, Form } from "formik"
// import { MytextInput } from "../components/MyTextInput";
import * as Yup from 'yup';
import { AuthLayout } from "../layout/AuthLayout";
import { TextField, Button } from "@mui/material";

export const RegisterPage = () => {
  return (
    // title="Registrate para entrar a la cueva del grasoso"
    <AuthLayout >  

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
            >

                { (formik) => (
                    <Form style={{
                        display: "flex",
                        flexDirection: "column",
                        gap:"5px"
                    }} >

                        <TextField 
                          name="user"
                          label="user"
                          value={formik.values.user}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.user && Boolean(formik.errors.user)}
                          helperText={formik.touched.user && formik.errors.user}
                          variant="standard" 
                        />

                        <TextField 
                          name="email"
                          label="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                          variant="standard" 
                        />
                        
                        <TextField 
                            type='password'
                            name="password1"
                            label="password"
                            value={formik.values.password1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password1 && Boolean(formik.errors.password1)}
                            helperText={formik.touched.password1 && formik.errors.password1}
                            variant="standard" 
                        />

                        <TextField 
                            type='password'
                            name="password2"
                            label="repeat password"
                            value={formik.values.password2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password2 && Boolean(formik.errors.password2)}
                            helperText={formik.touched.password2 && formik.errors.password2}
                            variant="standard" 
                        />
                      

                    <Button 
                        color="primary" 
                        variant="contained" 
                        fullWidth
                        type="submit"
                        sx={{
                            marginTop: "10px"
                        }} 
                    >
                        Submit
                    </Button>

                    </Form>
                )}

            </Formik>

    </AuthLayout>
  )
}
