var AWS = require("aws-sdk");

var resp200ok = {
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: {},
};

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

exports.handler = async (event, context, callback) => {
  console.log("Event input => ", event);
  const attributes = event.request.userAttributes; // read user attributes from event

  var params = {
    UserPoolId: "us-east-1_qQZdfQbIl",
    Username: attributes.username,
    //TemporaryPassword: 'Password!1',
    DesiredDeliveryMediums: ["EMAIL"],
    UserAttributes: [
      {
        Name: "email",
        Value: attributes.email,
      },
      {
        Name: "email_verified" /* required */,
        Value: "true",
      },
      {
        Name: "name" /* required */,
        Value: attributes["name"],
      },
    ],
  };

  try {
    const data = await cognitoidentityserviceprovider
      .adminCreateUser(params, function (err, data) {
        if (err) {
          console.log(err, err.stack);
        }
        // an error occurred
        else {
          console.log("SUCCESS", JSON.stringify(data)); // successful response
          return data;
        }
      })
      .promise();
  } catch (error) {
    console.log(error);
  }
};
