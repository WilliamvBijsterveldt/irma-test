const express = require('express');
const cors = require('cors');
const redis = require('redis')
const IrmaBackend = require('@privacybydesign/irma-backend');
const irmaBackend = new IrmaBackend("http://localhost:8088");

const app = express();
const port = 3000;
const redisPort = 6379;

const client  = redis.createClient(redisPort);

const irmaRequest = {
  '@context': 'https://irma.app/ld/request/disclosure/v2',
  'disclose': [
    [
      ['pbdf.gemeente.personalData.bsn']
    ]
  ]
};

app.use(cors());

app.get('/start', (req, res) => {
  irmaBackend.startSession(irmaRequest)
    .then(({ sessionPtr, token }) => {

      irmaBackend.subscribeStatusEvents(token, (error, status) => {
        if (error != null) {
          throw error;
        }
        if (status === IrmaBackend.SessionStatus.Done) {
          irmaBackend.getSessionResult(token)
            .then(result => {
              console.log(result.disclosed[0][0].rawvalue);

              client.setEx('sessionKey', 3600, rawvalue)
            });
        }
      });

      res.send(sessionPtr);
    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
