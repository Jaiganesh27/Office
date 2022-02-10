export const encryptPass = (password) => {
    var result = require("crypto").createHash("sha256").update(password, "utf8").digest("hex");
    return result;
}