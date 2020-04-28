const express = require('express');
const webpush = require('web-push');

const publicVapidKey = BBi_K9Wczqo3NuDaTT6KEap-4zEWKcJISVt53Fpj4a5Ti-igbqTJV6Ki3xQb3NgpSizJbmtiPKIReC-lTTGexvY;
const privateVapidKey = FzRMLykTjJR45HUf2agxvhRuBjt4kOywMafueBVNyG8;

// Replace with your email
webpush.setVapidDetails('allexxey222@gmail.com', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.use(require('express-static')('./'));

app.listen(3000);
