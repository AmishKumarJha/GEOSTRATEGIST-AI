const Country = require("../models/Country");

exports.getCountries = async () => {
  return await Country.find();
};

exports.getCountryById = async (id) => {
  return await Country.findById(id);
};

exports.createCountry = async (data) => {
  return await Country.create(data);
};