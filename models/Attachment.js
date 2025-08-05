const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
  nazov: { type: String, required: true },
  typ: { type: String, enum: ['dodatok', 'priloha'], required: true },
  pdf_url: { type: String, required: true },
  contract_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Contract', required: true },
  datum_podpisu_admin: Date,
  admin_podpis: String,
  datum_podpisu_zakaznika: Date,
  zakaznik_podpis: String,
  stav: { type: String, enum: ['nova', 'podpis_admin', 'cakajuci_zakaznik', 'podpisana'], default: 'nova' }
}, { timestamps: true });

module.exports = mongoose.model('Attachment', attachmentSchema);
