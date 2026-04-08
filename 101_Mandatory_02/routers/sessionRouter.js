import { Router } from "express";

const router = Router();

router.get("/dogpark/", (req, res) => {
  req.session.dogBarks = req.session.dogBarks ? req.session.dogBarks +1 : 1;
  res.send({data: `A dog Barked total barks ${req.session.dogBarks}` });
});



router.get("/dogpark/shutup", (req,res) => {
    console.log(req.session)
    const dogbarks = req.session.dogBarks
    req.session.dogBarks = 0;

    res.send({ data: `No more dogs barking ${dogbarks}`})
})



router.get("/dogpark/shutdown", (req, res) => {
    req.session.destroy((error) => {
        res.send({ data: "the park has been shut down "})
    })
})

export default router;
