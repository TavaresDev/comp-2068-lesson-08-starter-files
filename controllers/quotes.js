//import quote model 
const Quote = require('../models/quote');

exports.index = async (req, res, next) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (error) {
    next(error);
  }
}

exports.show = async (req, res, next) => {
  try {
    const quote = await Quote.findById(req.params.id);
    res.status(200).json(quote);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const { author, quote, reason, date } = req.body;
    const qt = await Quote.create({
      author,
      quote,
      reason,
      date: new Date(date)
    });
    res.status(200).json({message: 'Quote was created successfully', status: 'success', quote: qt});
  } catch (error) {
    next(error);
  }
}

exports.update = async (req, res, next) => {
  try {
    const { _id, author, quote, reason, date } = req.body;
    const qt = await Quote.findOneAndUpdate({ _id }, {
      author,
      quote,
      reason,
      date: new Date(date)
    });
    res.status(200).json({message: 'Quote was updated successfully', status: 'success', quote: qt});
  } catch (error) {
    next(error);
  }
}

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Quote.findOneAndDelete({ _id });
    res.status(200).json({message: 'Quote was deleted successfully', status: 'success'});
  } catch (error) {
    next(error);
  }
}

exports.search = async (req, res, next) => {
  // Quick and dirty search algo
  Object
    .entries(req.query)
    .map(
      ([k, v]) => req.query[k] = new RegExp(`${v.split(/\s/).join('|')}`, 'gi')
    );
  console.log(req.query);

  try {
    const quotes = await Quote.find(req.query);
    res.status(200).json(quotes);
  } catch (error) {
    next(error);
  }
}