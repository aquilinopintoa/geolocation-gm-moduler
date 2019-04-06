const router = require('express').Router();

router.route('/').get((req: any, res: any) => {
    res.json({text: 'hellowwordl'})
});

export default router;