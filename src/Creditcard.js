import React from 'react'
import InputMask from 'react-input-mask';


class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: '',
            number: '',
            name: '',

        };
    }
    StateName = (event) => { 
      if (event.target.value.length<=20){
      this.setState({ name: event.target.value.toUpperCase().replace(/[0-9]/g, '') })
    }}


    StateDate = (event) => { 
     /*if ((Number(event.target.value))   && (event.target.value.length<=5)){*/
        if ((event.target.value.slice(0, 2) <= 12) && (event.target.value.slice(0, 2) > 0))
            this.setState({date: event.target.value})
            else {
                this.setState({ date: "" })
            }
    }



    StateNumber = (event) => {
            //if (event.target.value.length <= 19){
            this.setState({ number: event.target.value })
    }

    


        render() {
            return (

                <div className="background">
                    <div className="card">
                        <div className="card-top" >
                            <div className="card-name">
                                CREDIT CARD
                </div>
                            <div className="card-puce">
                                <img src="images/chip.png" width="44px" ></img>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <div className="card-information" >
                                <div className="card-number">
                                    {this.state.number}
                                </div>
                                <div className="card-detail">
                                    <div className="card-code">5422</div>
                                    <div className="card-validation">
                                        <div className="card-valid-thru">
                                            <div><div>VALID</div> <div>THRU</div></div>
                                            <div>></div>
                                        </div>
                                        <div className="card-validation-date">
                                            <div>MONTH/YEAR</div>
                                            <div className="year-validation">{this.state.date}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-holder">
                                  {this.state.name}
                                </div>
                            </div>
                            <div className="card-logo">
                                <img src="images/visa.png" width="80%" ></img>
                            </div>
                        </div>
                    </div>
                    <form class="form" >
                        <span>Card holder</span>
                        <input type="text" name="name" onChange={this.StateName}  />
                        
                        <span>Valid thru</span>
                        <InputMask mask="99/99" maskChar="_" onChange={this.StateDate}  />
                    
                        <span> Card number</span>
                        <InputMask mask="9999 9999 9999 9999" maskChar="*" onChange={this.StateNumber} />

                    </form>
                </div>


            );
        }
    }


    export default Card;