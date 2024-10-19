import axios from "axios";
import * as qs from qs


class CONFIG_BOC {
    static CreateSubscription (){
        let data = JSON.stringify({
            "accounts": {
              "transactionHistory": true,
              "balance": true,
              "details": true,
              "checkFundsAvailability": true
            },
            "payments": {
              "limit": 99999999,
              "currency": "EUR",
              "amount": 999999999
            }
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2/v1/subscriptions',
            headers: { 
              'Authorization': 'Bearer AAIgOTgyMGJkZjU0YTQ2NDRkYWNlNDM1OTdkZTc2YTgxZjKRSDRtlE0_mjGIwX_pq0ZGTSvkilJMLLwPB9NLob4Kdx7T6NwUGWU-T8nUBIbW7NdKXrBbk7kmmA5mUMFPx0FEoUS5g-eHIFce2YohsX4V5Xa2yk-ubttusmOSFxzJ4froFBjz-GMJZsADNOy94rkp', 
              'Content-Type': 'application/json', 
              'timeStamp': '1729349924', 
              'journeyId': 'ece5ed11-c487-4d97-890c-f7a2c1a13f3c', 
              'Cookie': 'TS013b36ab=0179594e11da520ab9ca0e2fecdd7bd44cec88b86fe6081ddf473b36a1263e318ff69fd1f77425cd263d34a30e7668448604417001e030dfb79787b948a7b1de116ff9d813; de2a657d1673ca26a0e0abed5da67a83=c5a7b127c02a76d77fdf4912ee5581c6'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    }


    constructor() {
        this.data = qs.stringify({
            'client_id': '9820bdf54a4644dace43597de76a81f2',
            'client_secret': 'a10bc669fc3285276e8620b995580bd1',
            'grant_type': 'client_credentials',
            'scope': 'TPPOAuth2Security'
        });

        this.config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://sandbox-apis.bankofcyprus.com/df-boc-org-sb/sb/psd2/oauth2/token',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 
              'Cookie': 'TS013b36ab=0179594e1140d88eae525fd16fb6d1b84840c45c65e46c43c5eedb79a7d2041364a29feccf1ee1c3fe12570e91cd68dd3237af4a75c41783e83f8d03503bd2bd893167720f; de2a657d1673ca26a0e0abed5da67a83=c5a7b127c02a76d77fdf4912ee5581c6'
            },
            data : data
          };

          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    }



}