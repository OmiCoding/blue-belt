import { Schema } from "mongoose"

const AddressSchema = new Schema({
  location: {
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
  zipCode: {
    type: String,
    minlength: 5,
    maxLength: 5,
    default: "XXXXX",
  },
  floor: {
    type: String,
    default: "NA",
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

const DetailsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  choice: {
    type: String,
    default: "NA",
  },
  address: AddressSchema,
})

export default DetailsSchema
