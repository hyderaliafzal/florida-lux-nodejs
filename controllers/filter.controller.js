const mongoose = require('mongoose');

const catchAsync = require('../utils/catchAsync');
const { Filter } = require('../models');

const createFilter = catchAsync(async (req, res) => {
  const { name, code, description, photo } = req.body;

  const { permissions } = req.user.roleId
  const all = permissions.find(i => i.module === 'all');

  if (all) {
  
    await Filter.create({  name, code, description, photo });
    
    return res.status(200).send('Filter created successfully');
    
  } else { 
    return res.status(403).send('Forbiden! You are not allowed to create an Filter');
  }
});

const getFilter = catchAsync(async (req, res) => {
  try {

    const filter = await Filter.findById(req.params.id);
    return res.status(200).send(filter)
  } catch (error) {
    // Handle errors
    console.error(error);
    return res.status(404).json('No filter foud');
  }
});

const updateFilter = catchAsync(async (req, res) => {

  const { permissions } = req.user.roleId
  const all = permissions.find(i => i.module === 'all');

  if (all) {

    await Filter.findByIdAndUpdate(req.body.id, req.body);
    
    return res.status(200).send('Filter updated successfully');
    
  } else { 
    return res.status(403).send('Forbiden! You are not allowed to create an Filter');
  }
});

const getAllFilters = catchAsync(async (req, res) => {
    
    try {
      const { key } = req.query;
      
      const query = {};
    // Add search filters to the query object
    if (key) {
      query.name = { $regex: key, $options: 'i' }; // Case-insensitive regex search for name

      // If key is provided
      const allFilters = await Filter.find(query);
      return res.status(200).json(allFilters);
    }
      
      // If no key is provided, return all agents
      const allFilters = await Filter.find(query);
      return res.status(200).json(allFilters);
    } catch (error) {
      // Handle errors
      console.error(error);
      return res.status(500).json('Internal server error');
    }
});

module.exports = {
    createFilter,
    getFilter,
    updateFilter,
    getAllFilters,
};
