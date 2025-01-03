var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Couch } from '../models/index.ts';
// Get all couches
export const getAllCouches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const couches = yield Couch.find();
        res.status(200).json(couches);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch couches', details: error });
    }
});
// Get a single couch by ID
export const getCouchById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { couchId } = req.params;
    try {
        const couch = yield Couch.findById(couchId);
        if (!couch) {
            res.status(404).json({ error: 'Couch not found' });
            return;
        }
        res.status(200).json(couch);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch couch', details: error });
    }
});
// Create a new couch
export const createCouch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, type, description, material, color, dimensions, images } = req.body;
    try {
        const couch = new Couch({ name, type, description, material, color, dimensions, images });
        const savedCouch = yield couch.save();
        res.status(201).json(savedCouch);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create couch', details: error });
    }
});
// Update a couch
export const updateCouch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { couchId } = req.params;
    const updateData = req.body;
    try {
        const updatedCouch = yield Couch.findByIdAndUpdate(couchId, updateData, { new: true });
        if (!updatedCouch) {
            res.status(404).json({ error: 'Couch not found' });
            return;
        }
        res.status(200).json(updatedCouch);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update couch', details: error });
    }
});
// Delete a couch
export const deleteCouch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { couchId } = req.params;
    try {
        const deletedCouch = yield Couch.findByIdAndDelete(couchId);
        if (!deletedCouch) {
            res.status(404).json({ error: 'Couch not found' });
            return;
        }
        res.status(200).json({ message: 'Couch deleted successfully', couch: deletedCouch });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete couch', details: error });
    }
});
