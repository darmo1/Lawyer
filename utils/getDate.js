export const becomeDate = ( date ) => {
  const opt  = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date( date ).toLocaleDateString('es-CO', opt )
}