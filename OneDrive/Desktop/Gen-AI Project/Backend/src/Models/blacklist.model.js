const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required to added in balcklist"]
    }
}, {
    timestamps: true
})

const tokenBlackListModel = mongoose.model("blackListToken",blacklistTokenSchema)


module.exports = tokenBlackListModel