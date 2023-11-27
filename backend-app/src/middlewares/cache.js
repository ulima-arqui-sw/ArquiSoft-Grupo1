const redis = require('redis');
const client = redis.createClient(6379)

const checkCachePublicaciones = async (req, res, next) => {
  const id = req.params.idUser;
  await client.connect();
  const data = await client.get('publicaciones'+id)
  client.quit();
  if (data !== null) {
    res.status(200).send(data);
  } else {
    next();
  }
};

module.exports = {
  checkCachePublicaciones
}