const service_id = process.env.SERVICE_ID;
const token = process.env.AUTH_TOKEN;
const account_sid = process.env.ACCOUNT_SID;
const client = require("twilio")(account_sid, token);
const mongodb = require("../configs/dbConfig");

exports.getCode = async (req, res) => {
  client.verify.v2
    .services(service_id)
    .verifications.create({
      to: `+91${req.query.phonenumber}`,
      channel: "sms",
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
};

exports.verifyCode = async (req, res) => {
  client.verify.v2
    .services(service_id)
    .verificationChecks.create({
      to: `+91${req.query.phonenumber}`,
      code: req.query.code,
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      res.status(401).send(e);
    });
};
