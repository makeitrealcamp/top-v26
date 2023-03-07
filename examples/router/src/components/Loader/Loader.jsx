import React from "react"
import "./loader.scss"

const Loader = (pokemon)=>{
    const children  = pokemon.props;
    console.log(children)
    if (children ==="pokemon") {
        return(
            <div class="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
    else{
        return(
            <div class="lds-circle">
                <div></div>
            </div>
        )
    }
    
}

export default Loader