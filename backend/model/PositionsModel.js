const { Schema } = require("mongoose")

const { PositionsModel, PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = new model("position", PositionsModel);

module.exports = {PositionModel};