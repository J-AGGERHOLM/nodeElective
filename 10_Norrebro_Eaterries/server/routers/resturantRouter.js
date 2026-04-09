import { Router } from "express"
const router = Router();

const resturants = ["Sultan", "Sheik"]


router.get('/api/resturants', (req, res) => {
    res.send({ data: req.session.visitorCount || 0 })
})

router.post('/api/visitors', (req, res) => {
    req.session.visitorCount = !req.session.visitorsCount ? 1 : req.session.visitorCount + 1;
    res.send( {data: req.session.visitorCount} );
})
export default router;