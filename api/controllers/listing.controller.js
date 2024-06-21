import Listing from "../models/listing.model.js";
import { errorhandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body)
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
}

export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorhandler(404, 'Listing not found'));
    }
    if (req.user.id !== listing.userRef) {
        return next(errorhandler(401, 'You can delete only your listings'));
    }
    try {
        await Listing.findByIdAndDelete(listing._id);
        res.status(200).json('Deleted successfully');
    } catch (error) {
        next(error);
    }
}

export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorhandler(404, 'Listing not found'));
    }
    if (req.user.id !== listing.userRef) {
        return next(errorhandler(401, 'You can delete only your listings'));
    }
    try {
        const updatedListing = await Listing.findByIdAndUpdate(listing._id, req.body, { new: true });
        res.status(200).json(updatedListing)
    }
    catch (error) {
        next(error);
    }
}

export const getListing = async (req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return next(errorhandler(404, 'Listing does not exist'));
        }
        res.status(200).json(listing)
    }
    catch (error) {
        next(error);
    }
}