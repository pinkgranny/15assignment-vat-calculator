import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatPercent: 25,
      brutto: 0,
      netto: 0,
      vat: 0
    }
  }

  handleVatPercentChange = event => {
    console.log("VatPercent changed!", event.target.value)
    this.setState({
      vatPercent: parseInt(event.target.value),
      brutto:  parseInt(event.target.value) * ((this.setState.vatPercent / 100) + 1),
      netto: parseInt(event.target.value) / ((this.setState.vatPercent / 100) + 1),
      // vat: vatAmount
    })
  }

  handleBruttoAmountChange = event => {
    console.log("Brutto amount changed!", event.target.value)
    this.setState({
      // vatPercent: event.target.value,
      brutto:  parseInt(event.target.value),
      netto: parseInt(event.target.value) / (this.state.vatPercent / 100 + 1)
      // vat: vatAmount
    })
  }

  handleNettoAmountChange = event => {
    console.log("Netto amount changed!", event.target.value)
    this.setState({
      // vatPercent: event.target.value,
      brutto: parseInt(event.target.value) * ((this.state.vatPercent / 100) + 1),
      netto: parseInt(event.target.value),
      // vat: vatAmount
    })
  }

  handleVatAmountChange = event => {
    console.log("Vat amount changed!", event.target.value)
    this.setState({
      // vatPercent: event.target.value,
      brutto:  exVatToIncVat,
      netto: incVatToExtVat,
      // vat: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <h2>Please select your VAT percentage:</h2>
          <div className="vatPercentage">
            <input
              type="radio"
              id="vatChoise1"
              name="vatPercent"
              value="25"
              checked />
            <label htmlFor="vatChoise1">25%</label>
            <input
              type="radio"
              id="vatChoise2"
              name="vatPercent"
              value="12" />
            <label htmlFor="vatChoise2">12%</label>
            <input
              type="radio"
              id="vatChoise3"
              name="vatPercent"
              value="6" />
            <label htmlFor="vatChoise3">6%</label>
          </div>
          <div calculatingVatPrices>
            <p>Your brutto amount:</p>
            <input
              type="number"
              name="brutto"
              onChange={this.handleBruttoAmountChange}
              value={this.state.brutto} />
            <p>If your brutto amount is {this.state.brutto},
               your netto amount is {incVatToExtVat(this.state.vatPercent, this.state.brutto)}
            </p>

            <p>Your netto amount:</p>
            <input
              type="number"
              name="netto"
              onChange={this.handleNettoAmountChange}
              value={this.state.netto} />
            <p>If your netto amount is {this.state.netto},
               your brutto amount is {exVatToIncVat(this.state.vatPercent, this.state.netto)}
            </p>

            <p>Your vat amount:</p>
            {/* <input
              type="number"
              name="vat"
              onChange={this.handleVatAmountChange}
              value={this.state.vat} /> */}
          </div>
        <p>Example calculating ex vat for 1000kr inc vat @ 25%: {incVatToExtVat(25, 1000)}</p>
        <p>Example calculating inc vat for 600kr ex vat @ 6%: {exVatToIncVat(6, 600)}</p>

        </form>
      </div>
    )
  }

}

export default App
