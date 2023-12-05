const assert = require("assert");
const Definer = require("../lib/mistake");

let memberController = module.exports;

memberController.retrieveAuthMember = (req, res, next) => {
  try {
    const account = req?.body?.account_address;
    assert.ok(account, Definer.auth_err5);
    next();
  } catch (err) {
    console.log(`ERROR, cont/retrieveAuthMember, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};
