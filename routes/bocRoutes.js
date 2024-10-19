import { Router } from 'express';
import BOC_API from '../controllers/BOC_API.js';

const router = Router();

// Route to get user account details
router.get("/account/:accountId", async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const data = await BOC_API.getUserAccountDetails({ accountId });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get account balance
router.get("/balance/:accountId", async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const data = await BOC_API.getAccountBalance({ accountId });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get user bank statements
router.get("/statements/:accountId", async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const startDate = req.query.start_date;
    const endDate = req.query.end_date;

    const data = await BOC_API.getUserBankStatement(
      { accountId },
      startDate,
      endDate
    );

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;