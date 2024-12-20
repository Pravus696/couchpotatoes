import { Request, Response } from 'express';
import { Couch } from '../models/Couch';

// Get all couches
export const getAllCouches = async (req: Request, res: Response): Promise<void> => {
  try {
    const couches = await Couch.find();
    res.status(200).json(couches);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch couches', details: error });
  }
};

// Get a single couch by ID
export const getCouchById = async (req: Request, res: Response): Promise<void> => {
  const { couchId } = req.params;
  try {
    const couch = await Couch.findById(couchId);
    if (!couch) {
      res.status(404).json({ error: 'Couch not found' });
      return;
    }
    res.status(200).json(couch);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch couch', details: error });
  }
};

// Create a new couch
export const createCouch = async (req: Request, res: Response): Promise<void> => {
  const { name, type, description, material, color, dimensions, images } = req.body;
  try {
    const couch = new Couch({ name, type, description, material, color, dimensions, images });
    const savedCouch = await couch.save();
    res.status(201).json(savedCouch);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create couch', details: error });
  }
};

// Update a couch
export const updateCouch = async (req: Request, res: Response): Promise<void> => {
  const { couchId } = req.params;
  const updateData = req.body;
  try {
    const updatedCouch = await Couch.findByIdAndUpdate(couchId, updateData, { new: true });
    if (!updatedCouch) {
      res.status(404).json({ error: 'Couch not found' });
      return;
    }
    res.status(200).json(updatedCouch);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update couch', details: error });
  }
};

// Delete a couch
export const deleteCouch = async (req: Request, res: Response): Promise<void> => {
  const { couchId } = req.params;
  try {
    const deletedCouch = await Couch.findByIdAndDelete(couchId);
    if (!deletedCouch) {
      res.status(404).json({ error: 'Couch not found' });
      return;
    }
    res.status(200).json({ message: 'Couch deleted successfully', couch: deletedCouch });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete couch', details: error });
  }
};
