const router = require('express').Router();

const { filterByQuery, findById, createNewZookeeper, validateNewZookeeper, validateZookeeper } = require('../../lib/zookeepers');
const { zookeepers } = require('../../data/zookeepers.json');

router.get('/zookeepers', (req, res) => {
    let results = zookeepers;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('/zookeepers/:id', (req, res) => {
    let results = findById(req.params.id, zookeepers);
    if (results) {
        res.json(results);
    }
    res.send(404);
});

router.post("/zookeepers", (req, res) => {
    req.body.id = zookeepers.length.toString();

    if (!validateZookeeper(req.body)) {
        res.status(400).send("The Zookeeper is not properly formatted.");
    }
    else {
        const zookeeper = createNewZookeeper(req.body, zookeepers);
        res.json(zookeeper);
    }
});

module.exports = router;
