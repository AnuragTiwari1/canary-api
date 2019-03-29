module.exports = app => {
  require ('./discover') (app);
  require ('./stream') (app);
};
