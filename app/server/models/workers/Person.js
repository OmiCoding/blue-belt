import { Schema } from "mongoose"

const AddressSchema = new Schema({
  delivery: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
    uppercase: true,
    maxlength: 2,
    minlength: 2,
  },
  city: {
    type: String,
    required: true,
    minlength: 1,
  },
  aptSuite: {
    type: String,
    default: "NA",
  },
  zipCode: {
    type: String,
    minlength: 5,
    maxLength: 5,
    default: "XXXXX",
  },
  country: {
    type: String,
    required: true,
    uppercase: true,
    maxlength: 2,
    minlength: 2,
    default: "US",
  },
  postalCode: {
    type: String,
    maxLength: 10,
    minlength: 10,
    default: "XXXXX-XXXX",
  },
})

const PersonSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    requied: true,
  },
  sex: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    default: "NA",
  },
  prefName: {
    type: String,
    default: "NA",
  },
  choice: {
    type: String,
    default: "NA",
  },
  address: AddressSchema,
})

export default PersonSchema
