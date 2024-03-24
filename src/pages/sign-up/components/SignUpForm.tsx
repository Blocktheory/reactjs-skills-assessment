import RadioButton from '@/components/ui/RadioButton'
import { SignupSchema } from '@/utils'
import { Field, Form, Formik } from 'formik'
import styles from './SignUpForm.module.css'

export default function SignUpForm() {
  return (
    <div className={styles.signupFormContainer}>
      <h1 className={styles.signupFormHeading}>Create an account</h1>
      <Formik
        initialValues={{
          name: '',
          aboutYourself: '',
          country: '',
          gender: '',
          file: null,
          isAgreeTerms: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values)
          alert(
            JSON.stringify(values, null, 2) +
              '\nCheck console for better result'
          )
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              placeholder="What should we call you?"
              type="text"
              required
            />
            <label htmlFor="aboutYourself">About Yourself</label>
            <Field
              name="aboutYourself"
              placeholder="Describe in brief"
              type="text"
              required
            />
            <label htmlFor="country">Country</label>
            <Field
              as="select"
              className={styles.country}
              id="country"
              name="country"
              type="select"
              required
            >
              <option value="" disabled>
                Select country
              </option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="germany">Germany</option>
              <option value="japan">Japan</option>
            </Field>
            <div role="group" aria-labelledby="gender">
              <label>Gender</label>
              <div className={styles.gender}>
                <div className={styles.genderMale}>
                  <RadioButton
                    required
                    name="gender"
                    value="male"
                    label="Male"
                  />
                </div>
                <div className={styles.genderFemale}>
                  <RadioButton
                    required
                    name="gender"
                    value="female"
                    label="Female"
                  />
                </div>
              </div>
            </div>
            <div className={styles.fileWrapper}>
              Profile Pic
              <br />
              <label className={styles.fileLabel}>
                +
                <br />
                Upload Pic
                <Field name="file">
                  {() => (
                    <input
                      type="file"
                      onChange={(evt) => {
                        // @ts-ignore
                        setFieldValue('file', evt?.currentTarget?.files[0])
                      }}
                      required
                    />
                  )}
                </Field>
              </label>
            </div>
            <label>
              <Field type="checkbox" name="isAgreeTerms" required />I agree to
              terms and conditions
            </label>
            <button className={styles.submitBtn} type="submit">
              Create account
            </button>
            <small className={styles.signupFormFooter}>
              Already an member? <span className={styles.login}>Log in</span>
            </small>
          </Form>
        )}
      </Formik>
    </div>
  )
}
