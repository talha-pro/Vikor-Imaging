const AWS = require('aws-sdk') // Load the SDK for JavaScript

module.exports.sendMail = (sender, receivers, data) => {
  const params = {
    Destination: {
      ToAddresses: receivers,
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'Website Enquiry',
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: htmlTemplate(data),
        },
      },
    },
    Source: sender,
  }

  const sendPromise = new AWS.SES().sendEmail(params).promise()

  return sendPromise
    .then(data => data)
    .catch(err => {
      throw new Error(err)
    })
}
