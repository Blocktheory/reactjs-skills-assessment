import RadioButton from '@/components/ui/RadioButton'
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
            />
            <label htmlFor="aboutYourself">About Yourself</label>
            <Field
              name="aboutYourself"
              placeholder="Describe in brief"
              type="text"
            />
            <label htmlFor="country">Country</label>
            <Field
              as="select"
              className={styles.country}
              id="country"
              name="country"
              type="select"
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
                  <RadioButton name="gender" value="male" label="Male" />
                </div>
                <div className={styles.genderFemale}>
                  <RadioButton name="gender" value="female" label="Female" />
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
                    />
                  )}
                </Field>
              </label>
            </div>
            <label>
              <Field type="checkbox" name="isAgreeTerms" />I agree to terms and
              conditions
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
