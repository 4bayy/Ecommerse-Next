import mongose from 'mongoose';

const treatmentSchema = new mongose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }, // Duration in minutes
    createdAt: { type: Date, default: Date.now },
});

const Treatment = mongose.model('Treatment', treatmentSchema);

export default Treatment;
