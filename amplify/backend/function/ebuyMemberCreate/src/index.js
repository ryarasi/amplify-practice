("use strict");
const awsmobile = {
  aws_user_pools_id: "us-east-1_qQZdfQbIl",
  region: "us-east-1",
};
var AWS = require("aws-sdk");
exports.handler = (event, callback) => {
  console.log("event => ", event);

  var myCredentials = new AWS.config({
    IdentityPoolId: awsmobile.region + ":" + awsmobile.aws_user_pools_id,
  });
  const myconfig = new AWS.config({
    credentials: myCredentials,
    region: awsmobile.region,
  });
  AWS.config = myconfig;

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({
    apiVersion: "2021-04-17",
    credentials: myCredentials,
    region: awsmobile.region,
  });

  var params = {
    UserPoolId: awsmobile.aws_user_pools_id /* required */,
    Username: "admin" /* required */,
    Region: awsmobile.region,
    DesiredDeliveryMediums: ["EMAIL"],
    ForceAliasCreation: false,
    MessageAction: "SUPPRESS",
    TemporaryPassword: "tempPassword1",
    UserAttributes: [
      {
        Name: "email" /* required */,
        Value: "ragav.code@gmail.com",
      },
      {
        Name: "name" /* required */,
        Value: "Ragav Yarasi",
      },

      /* more items */
    ],
  };

  cognitoidentityserviceprovider.adminCreateUser(params, function (err, data) {
    if (err)
      console.log(
        "Error from the cognitoidentityserviceprovider method => ",
        err,
        err.stack
      );
    // an error occurred
    else console.log(data); // successful response
    callback(null, data);
  });
};
