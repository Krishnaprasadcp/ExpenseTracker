const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const monthlyExpenseSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Decimal128,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
const expenseSchema = new Schema({
  expenseName: {
    type: String,
  },
  items: {
    type: String,
  },
  price: {
    type: Decimal128,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "UserData",
  },
  monthlyExpense: [monthlyExpenseSchema],
});
const expenseModal = mongoose.model("Expense", expenseSchema);
module.exports = expenseModal;
