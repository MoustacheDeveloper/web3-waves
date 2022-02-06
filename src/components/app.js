import ReactDOM from "react-dom";
import React from "react";
import { Signer } from '@waves/signer';
import { ProviderWeb } from '@waves.exchange/provider-web';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.authFunc = this.authFunc.bind(this);
        this.signer = new Signer({NODE_URL: 'https://nodes-testnet.wavesnodes.com'});
        this.signer.setProvider(new ProviderWeb('https://testnet.waves.exchange/signer/'));
    }
    authFunc() {
        try {
            this.signer.login().then(userData => {
                document.getElementById("account-link").innerHTML = `<a href="https://wavesexplorer.com/testnet/address/${userData.address}" target="_blank">Check the Explorer</a>`;
            }).catch(error => {
                console.log(error);
            });
        } catch (e) {
            console.error(e);
        }
    }
    render(){
        return (
            <div className="container">
                <input className="btn btn-primary" type="button" value="Auth" onClick={this.authFunc} />
                <span id="account-link"></span>
            </div>
        )
    }
}

const app = document.getElementById("app");

if (app){
    ReactDOM.render(<App/>, app);
}
