const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/recipePageController');
const { ensureAuth } = require('../utils/auth');

router.get('/', ctrl.listPage);
router.get('/create', ensureAuth, ctrl.createForm);
router.post('/create', ensureAuth, ctrl.createAction);
router.get('/:id/edit', ensureAuth, ctrl.editForm);
router.post('/:id/edit', ensureAuth, ctrl.editAction);
router.post('/:id/delete', ensureAuth, ctrl.deleteAction);
router.get('/:id', ctrl.detailPage);

module.exports = router;
