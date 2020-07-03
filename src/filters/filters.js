export const filters = {
  uppercase: (input) => {
    return input.toUpperCase()
  },
  capitalizeFirstLetter: (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
}
