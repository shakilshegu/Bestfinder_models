
import mongoose from 'mongoose';

const amenitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    icon: {
        type: String,
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
});

const Amenity = mongoose.model('Amenity', amenitySchema);
export default Amenity;
