type ClassesType = string | boolean | null | undefined

export const cn = (...classes: ClassesType[]) => {
  return classes.filter(Boolean).join(' ')
}
