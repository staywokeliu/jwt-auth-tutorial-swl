const router = require("express").Router();
const { body, validationResult } = require('express-validator');
const { User } = require("../db/User");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

router.get("/", (req, res) => {
    res.send("Hello Authjs");
});

// ユーザー新規登録用のAPI
router.post(
    "/register",
    // (2) バリデーションのチェック
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // (3) DBにユーザーが存在しているか確認
        const user = User.find((user) => user.email === email);
        if (user) {
            return res.status(400).json([
                {
                    message: "すでに存在しているユーザーです。",
                },
            ]);
        }

        // (4) パスワードの暗号化
        let hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        // (5) DBへ保存
        User.push({
            email,
            password: hashedPassword,
        });

        // (6) クライアントへJWTの発行
        const token = await JWT.sign(
            //payload
            {
                email,
            },
            //secret key
            "SECRET_KEY",
            //option トークンの有効期限
            {
                expiresIn: "1h",
            }
        );

        return res.json({
            token: token,
        });
    }
);

//ログイン用のAPI
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = User.find((user) => user.email === email);
    if (!user) {
        return res.status(400).json([
            {
                message: "存在しないユーザーです。",
            },
        ]);
    }

    // パスワードの復号、照合
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json([
            {
                message: "パスワードが異なります。",
            },
        ]);
    }

    return res.status(200).json([
        {
            message: "正常にログインしました。",
        },
    ]);


});



// DBのユーザーを確認するAPI
router.get("/allUsers", (req, res) => {
    return res.json(User);
});


module.exports = router;
