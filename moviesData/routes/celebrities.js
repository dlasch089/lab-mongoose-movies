var express = require("express");
var router = express.Router();

const Celebrity = require("../models/celebrity").Celebrity;

/* GET users listing. */
router.get("/", function(req, res, next) {
  Celebrity.find({}, (err, result) => {
    if (err) {
      console.log(err);
      next(err);
    } else {
      const data = {
        celebrity: result
      };
      res.render("celebrities/index", data);
      // res.send("respond something");
    }
  });
});

router.get("/:id", function(req, res, next) {
  const celebrityId = req.query.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      console.log(err);
      next(err);
    } else {
      res.render("celebrities/show", { celebrity: celebrity });
    }
  });
});

module.exports = router;
