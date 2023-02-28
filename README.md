# jwt-auth-tutorial-swl

## Reactを用いて、IDPW認証でのJWTの仕組みを理解
JWT入門、ユーザー登録・ログイン認証の流れを理解するため、YouTube動画を参考に手を動かしてWebAPIを作成します。
参考した動画は下記になります。

[#プログラミングチュートリアル](https://www.youtube.com/@user-hl9uv6cv7k)さんの[#JWT入門ユーザー登録・ログイン認証の流れをWebAPIを構築しながら学ぼう](https://www.youtube.com/watch?v=IaCQqCIqZ6U&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB)

毎日アウトプットに頑張ります。

## 最初の環境構築
```diff
# 初期化
$ npm init -y
# expressフレームワークとnodemonをインストール
$ npm i express nodemon

package.jsonの8行目を修正
-    "start": "node server.js"
+    "start": "nodemon server.js"

＊「nodemon」とは、Saveするたび、リフレッシュをしてくれるモジュールのこと。

# 起動
$ npm start
```

## 必要なモジュールのインストール
```shell
# バリデーションのモジュールをインストール
https://express-validator.github.io/docs

$ npm install --save express-validator

# bcryptをインストール
$ npm i bcrypt

# json web tokenモジュールのインストール
https://www.npmjs.com/package/jsonwebtoken

$ npm install jsonwebtoken

```


## 実装内容
1. ユーザーがEメールとパスワードを入力
2. バリデーションチェック
3. すでにそのユーザーが存在しているか確認
4. パスワード暗号化
5. DBへ保存
6. JWT発行して渡す

## postmanでのAPI呼び出しテスト
`http://localhost:5123/auth/register`

![Screen Shot 2023-03-01 at 0 18 43](https://user-images.githubusercontent.com/119092801/221897789-6e49a2e2-312d-4251-b47b-0dcefce3af0c.png)

`http://localhost:5123/auth/allUsers`

![Screen Shot 2023-03-01 at 0 18 46](https://user-images.githubusercontent.com/119092801/221898004-01de3666-782d-4f13-b86c-4cfa10e8a344.png)

`http://localhost:5123/auth/login`

![Screen Shot 2023-03-01 at 0 18 48](https://user-images.githubusercontent.com/119092801/221898105-2479fb03-b224-44b3-9d1c-008f8e15dcc6.png)

`http://localhost:5123/posts/public`

![Screen Shot 2023-03-01 at 0 18 50](https://user-images.githubusercontent.com/119092801/221898155-f18a2c66-6c79-44fb-9eaa-fc1879cfd7dd.png)

`http://localhost:5123/posts/private`
![Screen Shot 2023-03-01 at 0 18 53](https://user-images.githubusercontent.com/119092801/221898202-91aa7a45-0fc5-47ca-917f-c8bbdc2bda1a.png)

-----

