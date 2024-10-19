import { Router } from 'express';
import BOC_API from '../controllers/BOC_API.js';

const router = Router();

router.get("/account/:accountId", async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const data = await BOC_API.getUserAccountDetails({
      accountId,
      authorization: req.headers.authorization, // Pass token from headers
      journeyId: "3802988197969920", 
      timeStamp: "554370977", // The time stamp when the request was sent to system
      subscriptionId: "31.204.105.234", //Subscription ID of a subscriber
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/balance/:accountId", async (req,res) => {
    try{
        const accountId = req.params.accountId;

        const data = await BOC_API.getAccountBalance({
            accountId,
            authorization: req.headers.authorization, // Pass token from headers
            journeyId: "3802988197969920", 
            timeStamp: "554370977", // The time stamp when the request was sent to system
            subscriptionId: "31.204.105.234", //Subscription ID of a subscriber
        })

        res.json(data)
    }catch (error){
        res.status(500).json({error: error.message});
    }
})

router.get("/statements/:accountId", async (req,res,date_params) => {
    try{
        const accountId = req.params.accountId;

        const data = await BOC_API.getUserBankStatement({
            accountId,
            authorization: req.headers.authorization, // Pass token from headers
            journeyId: "3802988197969920", 
            timeStamp: "554370977", // The time stamp when the request was sent to system
            subscriptionId: "31.204.105.234", //Subscription ID of a subscriber
        },date_params.start_date,date_params.end_date);

        res.json(data)
    }catch (error){
        res.status(500).json({error: error.message});
    }
})

router.get("/balance/:accountId", async(req,res) => {
    try {
        const accountId = req.params.accountId;

        const data = await BOC_API.getUserBankStatement({
            accountId,
            authorization: req.headers.authorization, // Pass token from headers
            journeyId: "3802988197969920", 
            timeStamp: "554370977", // The time stamp when the request was sent to system
            subscriptionId: "31.204.105.234", //Subscription ID of a subscriber
        })

        res.json(data)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

export default router;
