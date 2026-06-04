const router =
  require("express").Router();

const {
  getCountries,
  getCountry,
  createCountry,
} = require(
  "../controllers/country.controller"
);

router.get(
  "/",
  getCountries
);

router.get(
  "/:id",
  getCountry
);

router.post(
  "/",
  createCountry
);

module.exports = router;