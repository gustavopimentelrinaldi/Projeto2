const express = require('express')

module.exports = function(server){
  //Definir a URL base de todas as rotas
  const router = express.Router()
  server.use('/api', router)

  //Rotas dos pagamentos
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}