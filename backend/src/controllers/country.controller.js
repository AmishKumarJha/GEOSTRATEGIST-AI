const CountryService = require(
  "../services/country.service"
);

exports.getCountries = async (
  req,
  res
) => {
  try {
    const countries =
      await CountryService.getCountries();

    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCountry = async (
  req,
  res
) => {
  try {
    const country =
      await CountryService.getCountryById(
        req.params.id
      );

    if (!country) {
      return res.status(404).json({
        success: false,
        message: "Country not found",
      });
    }

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createCountry = async (
  req,
  res
) => {
  try {
    console.log(
      "BODY:",
      req.body
    );

    const country =
      await CountryService.createCountry(
        req.body
      );

    res.status(201).json({
      success: true,
      country,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};