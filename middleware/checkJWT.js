
const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    //JWTを持っているか確認:リクエストヘッドの中のx-auth-tokenを確認
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(400).json({
            errors: [
                {
                    message: "権限がありません",
                },
            ],
        });
    }

    try {
        let user = await JWT.verify(token, "SECRET_KEY");
        console.log(req);
        //req.user = user.email;
        console.log(user.email);
        next();
    } catch {
        return res.status(400).json({
            errors: [
                {
                    message: "トークンは一致ません。",
                },
            ],
        });
    }
};

