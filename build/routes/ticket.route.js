"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_validators_1 = require("../validators/auth.validators");
const ticket_validators_1 = require("../validators/ticket.validators");
const ticket_controller_1 = require("../controllers/ticket.controller");
const router = (0, express_1.Router)();
router.post('/new', auth_validators_1.validateAuthCode, ticket_validators_1.validateNew, ticket_controller_1.newTicket);
router.get('/all', auth_validators_1.validateAuthCode, ticket_controller_1.getTickets);
router.get('/:ticketId', auth_validators_1.validateAuthCode, ticket_validators_1.validateGetTicket, ticket_controller_1.getTicket);
exports.default = router;
