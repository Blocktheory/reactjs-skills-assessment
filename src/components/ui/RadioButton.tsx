import { Field } from 'formik'

type RadioButtonProps = {
  label: string
  name: string
  value: string
}

export default function RadioButton({ label, ...props }: RadioButtonProps) {
  return (
    <label>
      <Field type="radio" {...props} /> {label}
    </label>
  )
}
