// Email validation
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Phone validation
export const validatePhone = (phone) => {
  const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
  return re.test(phone)
}

// Name validation
export const validateName = (name) => {
  return name.trim().length >= 2
}

// Password validation
export const validatePassword = (password) => {
  return password.length >= 8
}

// Form validation
export const validateForm = (formData) => {
  const errors = {}
  if (!formData.name) errors.name = 'Name is required'
  if (!formData.email) errors.email = 'Email is required'
  else if (!validateEmail(formData.email)) errors.email = 'Invalid email'
  if (!formData.message) errors.message = 'Message is required'
  return errors
}
