const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
	image:
	{
		type:String,
		// required:true,
	},

	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	rollNo: {
		type: Number,
		required: true,
	},

	department: {
		type: String,
		required: true,
		maxLength: 20,
	},
	
	contact :
	{
		type:Number,
		required:true,
		maxLength:10,
		minLength:10,
	},

	hostel: {
		type: String,
		required: true,
	},

    outTime :
    {
		type:String,
        // type:Date,
        // Default:Date.now(),
		required:true
    },

    inTime :
    {
		// type:Date(),
        type:String,
		// Default:"",
    }
});

module.exports = mongoose.model("Register", registerSchema);