const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  nazov: { type: String, required: true },
  popis: String,
  pdf_url: { type: String, required: true },
  datum_vytvorenia: { type: Date, default: Date.now },
  datum_podpisu_admin: Date,
  miesto_podpisu_admin: String,
  admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  admin_podpis: String,
  datum_podpisu_zakaznika: Date,
  miesto_podpisu_zakaznika: String,
  zakaznik_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  zakaznik_podpis: String,
  stav: { type: String, enum: ['nova', 'podpis_admin', 'cakajuci_zakaznik', 'podpisana'], default: 'nova' },
  dodatky: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }],
  poznamka: String
}, { timestamps: true });

module.exports = mongoose.model('Contract', contractSchema);
