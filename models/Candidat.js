const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    identite: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    lieu:{
        type: String,
        required: true
    },
    national:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    adresse:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    region:{
        type: String,
        required: true
    },
    module1: {
        type: String
    },
    module2: {
        type: String
    },
    module3: {
        type: String
    },
    module4: {
        type: String
    },
    etablissement1: {
        type: String
    },
    annee1: {
        type: String
    },
    etablissement2: {
        type: String
    },
    annee2: {
        type: String
    },
    etablissement3: {
        type: String
    },
    annee3: {
        type: String
    },
    etablissement4: {
        type: String
    },
    annee4: {
        type: String
    },
    etablissement5: {
        type: String
    },
    annee5: {
        type: String
    },
    langue: {
        type: String
    },
    langue2: {
        type: String
    }
});

module.exports = mongoose.model('Candidat', userSchema);