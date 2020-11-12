module.exports = router => {
  require('./routes/quotes')(router);
  
  return router;
};