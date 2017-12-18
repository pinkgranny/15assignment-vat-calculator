// const vatMultiplier = percentage =>
//   (percentage / 100) + 1
//
// export const exVatToIncVat = (percentage, exVat) =>
//   exVat * vatMultiplier(percentage)
//
// export const incVatToExtVat = (percentage, incVat) =>
//   incVat / vatMultiplier(percentage)

 const vatMultiplier = vatPercent =>
    (vatPercent / 100) + 1

  export const exVatToIncVat = (vatPercent, netto) =>
    netto * vatMultiplier(vatPercent)

  export const incVatToExtVat = (vatPercent, brutto) =>
    brutto / vatMultiplier(vatPercent)

  // export const vatAmount = (brutto, netto) =>
  // exVatToIncVat - incVatToExtVat
