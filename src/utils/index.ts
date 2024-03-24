import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  aboutYourself: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  file: Yup.mixed().required('Required'),
  isAgreeTerms: Yup.bool()
    .oneOf([true], 'Must Accept Terms and Conditions')
    .required('Required'),
})

type ClassesType = string | boolean | null | undefined

export const cn = (...classes: ClassesType[]) => {
  return classes.filter(Boolean).join(' ')
}
