import { Field } from 'formik'

export default function RadioButton({ label, ...props }) {
  return (
    <label>
      <Field type="radio" {...props} /> {label}
    </label>
  )
}
