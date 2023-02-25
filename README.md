# jwt-auth-tutorial-swl

## Reactを用いて、IDPW認証でのJWTの仕組みを理解
JWT入門、ユーザー登録・ログイン認証の流れを理解するため、YouTube動画を参考に手を動かしてWebAPIを作成します。
参考した動画は下記になります。

[#プログラミングチュートリアル](https://www.youtube.com/@user-hl9uv6cv7k)さんの[#JWT入門ユーザー登録・ログイン認証の流れをWebAPIを構築しながら学ぼう](https://www.youtube.com/watch?v=IaCQqCIqZ6U&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB)

毎日アウトプットに頑張ります。

## 最初の環境構築
```shell
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


## 実装内容
1. ユーザーがEメールとパスワードを入力
2. バリデーションチェック
3. すでにそのユーザーが存在しているか確認
4. パスワード暗号化
5. DBへ保存
6. JWT発行して渡す






