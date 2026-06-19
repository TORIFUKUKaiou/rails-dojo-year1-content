# Practice：Webの仕組みを読み解く

この Practice では、Railsに入る前に、Webアプリケーションの基本的な流れを確認します。

ブラウザでURLを開いたとき、ブラウザはサーバへ<ruby>要求<rt>リクエスト</rt></ruby>を送ります。サーバはその<ruby>要求<rt>リクエスト</rt></ruby>を受け取り、結果を<ruby>応答<rt>レスポンス</rt></ruby>として返します。

この流れを理解すると、次回以降に学ぶRailsのルーティング、コントローラ、ビューの理解につながります。

---

## 取り組み方

この教材に直接書き込む必要はありません。

自分のノート、テキストファイル、または教員から指定された場所に答えをまとめてください。

各問題には模範回答を折りたたみで用意しています。最初から開かず、まず自分で考えてから確認してください。

---

## 1. ブラウザとサーバを分類する

次の言葉を、**ブラウザ側**、**サーバ側**、**どちらにも関係するもの**に分類してください。

- Chrome
- Safari
- URLを入力する
- HTMLを受け取る
- HTMLを返す
- リクエストを送る
- リクエストを受け取る
- レスポンスを返す
- レスポンスを受け取る
- 処理を実行する
- 画面を表示する
- Webアプリケーションを動かす

<details>
<summary>模範回答</summary>

分類の一例です。

### ブラウザ側

- Chrome
- Safari
- URLを入力する
- HTMLを受け取る
- リクエストを送る
- レスポンスを受け取る
- 画面を表示する

### サーバ側

- HTMLを返す
- リクエストを受け取る
- レスポンスを返す
- 処理を実行する
- Webアプリケーションを動かす

### どちらにも関係するもの

状況によっては、HTML、リクエスト、レスポンスという言葉は、ブラウザとサーバの両方に関係します。

</details>

---

## 2. リクエストとレスポンスを分類する

次の文が、**リクエスト** と **レスポンス** のどちらに近いかを考えてください。

1. 記事一覧をください
2. 記事一覧のHTMLを返します
3. 検索結果をください
4. 検索結果のHTMLを返します
5. ログイン情報を送ります
6. ログイン後の画面を返します
7. 商品詳細をください
8. 商品詳細のHTMLを返します
9. お問い合わせ内容を送ります
10. 送信完了画面を返します

<details>
<summary>模範回答</summary>

1. リクエスト
2. レスポンス
3. リクエスト
4. レスポンス
5. リクエスト
6. レスポンス
7. リクエスト
8. レスポンス
9. リクエスト
10. レスポンス

リクエストは、ブラウザからサーバへ送るお願いです。

レスポンスは、サーバからブラウザへ返す返事です。

</details>

---

## 3. URLを分解する

次のURLを、**通信の種類**、**サーバの場所**、**パス**、**追加の情報**に分解してください。

### 3-1.

```text
https://example.com/articles
```

### 3-2.

```text
https://example.com/articles/1
```

### 3-3.

```text
https://example.com/search?keyword=ruby
```

### 3-4.

```text
https://school.example.com/students?grade=1
```

### 3-5.

```text
https://shop.example.com/items?category=book
```

### 3-6.

```text
https://example.com/products?min_price=1000&max_price=3000
```

### 3-7.

```text
https://example.com/events?year=2026&month=6
```

<details>
<summary>模範回答</summary>

### 3-1.

```text
通信の種類: https
サーバの場所: example.com
パス: /articles
追加の情報: なし
```

### 3-2.

```text
通信の種類: https
サーバの場所: example.com
パス: /articles/1
追加の情報: なし
```

### 3-3.

```text
通信の種類: https
サーバの場所: example.com
パス: /search
追加の情報: keyword=ruby
```

### 3-4.

```text
通信の種類: https
サーバの場所: school.example.com
パス: /students
追加の情報: grade=1
```

### 3-5.

```text
通信の種類: https
サーバの場所: shop.example.com
パス: /items
追加の情報: category=book
```

### 3-6.

```text
通信の種類: https
サーバの場所: example.com
パス: /products
追加の情報: min_price=1000&max_price=3000
```

### 3-7.

```text
通信の種類: https
サーバの場所: example.com
パス: /events
追加の情報: year=2026&month=6
```

</details>

---

## 4. パスを読む

次のパスを見て、どのようなページや処理を表していそうか考えてください。

1. `/articles`
2. `/articles/1`
3. `/books`
4. `/books/3`
5. `/students`
6. `/students/10`
7. `/search`
8. `/login`
9. `/contacts`
10. `/items`
11. `/items/5`
12. `/users`
13. `/users/2`

<details>
<summary>模範回答</summary>

一例です。

1. 記事一覧
2. 1番の記事の詳細
3. 本の一覧
4. 3番の本の詳細
5. 学生一覧
6. 10番の学生の詳細
7. 検索
8. ログイン
9. お問い合わせ
10. 商品一覧
11. 5番の商品の詳細
12. ユーザー一覧
13. 2番のユーザーの詳細

</details>

---

## 5. GETリクエストを読む

次のGETリクエストは、ブラウザがサーバへ何をお願いしているものだと思いますか。

1. `GET /articles`
2. `GET /articles/1`
3. `GET /books`
4. `GET /books/3`
5. `GET /students`
6. `GET /students/10`
7. `GET /search?keyword=ruby`
8. `GET /items?category=food`
9. `GET /events?year=2026`
10. `GET /products?min_price=1000&max_price=3000`
11. `GET /users?name=tanaka`
12. `GET /posts?tag=rails`

<details>
<summary>模範回答</summary>

一例です。

1. 記事一覧をください
2. 1番の記事をください
3. 本の一覧をください
4. 3番の本をください
5. 学生一覧をください
6. 10番の学生をください
7. `ruby` で検索した結果をください
8. `food` カテゴリの商品一覧をください
9. 2026年のイベント一覧をください
10. 1000円以上3000円以下の商品一覧をください
11. `tanaka` という名前のユーザーを検索してください
12. `rails` タグの投稿一覧をください

</details>

---

## 6. POSTリクエストを読む

次のPOSTリクエストは、ブラウザがサーバへ何を送っていそうですか。

1. `POST /articles`
2. `POST /books`
3. `POST /students`
4. `POST /login`
5. `POST /contacts`
6. `POST /items`
7. `POST /comments`
8. `POST /orders`
9. `POST /users`
10. `POST /messages`

<details>
<summary>模範回答</summary>

一例です。

1. 新しい記事の情報
2. 新しい本の情報
3. 新しい学生の情報
4. ログイン情報
5. お問い合わせ内容
6. 新しい商品情報
7. コメント内容
8. 注文内容
9. 新しいユーザー情報
10. メッセージ内容

POSTは、フォームなどで入力した内容をサーバへ送るときによく使います。

</details>

---

## 7. GETとPOSTの使い分けを考える

次の場面では、GETとPOSTのどちらを使うことが多いでしょうか。

1. 記事一覧を見る
2. 記事の詳細を見る
3. 商品一覧を見る
4. 商品を検索する
5. 新しい記事を投稿する
6. ログイン情報を送る
7. お問い合わせ内容を送る
8. 学生一覧を見る
9. 新しい学生情報を登録する
10. コメントを投稿する
11. 本の一覧を見る
12. 新しい本を登録する
13. 検索キーワードを送る
14. 注文内容を送る
15. ユーザー登録をする

<details>
<summary>模範回答</summary>

一例です。

1. GET
2. GET
3. GET
4. GET
5. POST
6. POST
7. POST
8. GET
9. POST
10. POST
11. GET
12. POST
13. GET
14. POST
15. POST

GETは、ページを見る、一覧を見る、検索する場合によく使います。

POSTは、登録、投稿、ログイン、お問い合わせ、注文など、データを送る場合によく使います。

</details>

---

## 8. GETリクエストを作る

次の説明に合うGETリクエストを考えてください。

1. 記事一覧を表示する
2. 1番の記事を表示する
3. 本の一覧を表示する
4. 3番の本を表示する
5. `ruby` というキーワードで検索する
6. `rails` というキーワードで検索する
7. 1年生の学生一覧を表示する
8. `food` カテゴリの商品一覧を表示する
9. 2026年のイベント一覧を表示する
10. `tag=web` の投稿一覧を表示する

<details>
<summary>模範回答</summary>

一例です。

```text
GET /articles
GET /articles/1
GET /books
GET /books/3
GET /search?keyword=ruby
GET /search?keyword=rails
GET /students?grade=1
GET /items?category=food
GET /events?year=2026
GET /posts?tag=web
```

</details>

---

## 9. POSTリクエストを作る

次の説明に合うPOSTリクエストを考えてください。

1. 新しい記事を作成する
2. 新しい本を登録する
3. 新しい学生情報を登録する
4. ログイン情報を送信する
5. お問い合わせ内容を送信する
6. コメントを投稿する
7. 注文内容を送信する
8. 新しいユーザーを登録する

<details>
<summary>模範回答</summary>

一例です。

```text
POST /articles
POST /books
POST /students
POST /login
POST /contacts
POST /comments
POST /orders
POST /users
```

</details>

---

## 10. フォームを読む：GET

次のHTMLを読んで、質問に答えてください。

```html
<form action="/search" method="get">
  <input type="text" name="keyword">
  <button type="submit">検索</button>
</form>
```

質問です。

1. 送信先はどこですか
2. 送信方法はGETですか、POSTですか
3. 入力欄の名前は何ですか
4. `ruby` と入力して送信すると、どのようなリクエストになりそうですか

<details>
<summary>模範回答</summary>

1. `/search`
2. GET
3. `keyword`
4. `GET /search?keyword=ruby`

</details>

---

## 11. フォームを読む：GET その2

次のHTMLを読んで、質問に答えてください。

```html
<form action="/students" method="get">
  <input type="text" name="grade">
  <button type="submit">検索</button>
</form>
```

質問です。

1. 送信先はどこですか
2. 送信方法はGETですか、POSTですか
3. 入力欄の名前は何ですか
4. `1` と入力して送信すると、どのようなリクエストになりそうですか

<details>
<summary>模範回答</summary>

1. `/students`
2. GET
3. `grade`
4. `GET /students?grade=1`

</details>

---

## 12. フォームを読む：GET その3

次のHTMLを読んで、質問に答えてください。

```html
<form action="/items" method="get">
  <input type="text" name="category">
  <button type="submit">検索</button>
</form>
```

質問です。

1. 送信先はどこですか
2. 送信方法はGETですか、POSTですか
3. 入力欄の名前は何ですか
4. `book` と入力して送信すると、どのようなリクエストになりそうですか

<details>
<summary>模範回答</summary>

1. `/items`
2. GET
3. `category`
4. `GET /items?category=book`

</details>

---

## 13. フォームを読む：POST

次のHTMLを読んで、質問に答えてください。

```html
<form action="/articles" method="post">
  <input type="text" name="title">
  <button type="submit">投稿</button>
</form>
```

質問です。

1. 送信先はどこですか
2. 送信方法はGETですか、POSTですか
3. 入力欄の名前は何ですか
4. 何を送っていそうですか

<details>
<summary>模範回答</summary>

1. `/articles`
2. POST
3. `title`
4. 記事のタイトルを送っていそうです

</details>

---

## 14. フォームを読む：POST その2

次のHTMLを読んで、質問に答えてください。

```html
<form action="/contacts" method="post">
  <input type="text" name="message">
  <button type="submit">送信</button>
</form>
```

質問です。

1. 送信先はどこですか
2. 送信方法はGETですか、POSTですか
3. 入力欄の名前は何ですか
4. 何を送っていそうですか

<details>
<summary>模範回答</summary>

1. `/contacts`
2. POST
3. `message`
4. お問い合わせメッセージを送っていそうです

</details>

---

## 15. フォームを読む：POST その3

次のHTMLを読んで、質問に答えてください。

```html
<form action="/login" method="post">
  <input type="text" name="email">
  <input type="password" name="password">
  <button type="submit">ログイン</button>
</form>
```

質問です。

1. 送信先はどこですか
2. 送信方法はGETですか、POSTですか
3. 入力欄の名前を2つ書いてください
4. 何を送っていそうですか

<details>
<summary>模範回答</summary>

1. `/login`
2. POST
3. `email` と `password`
4. メールアドレスとパスワードを送っていそうです

</details>

---

## 16. フォームを書き換える

次のフォームは、`/search` に `keyword` をGETで送信するフォームです。

```html
<form action="/search" method="get">
  <input type="text" name="keyword">
  <button type="submit">検索</button>
</form>
```

次の条件に合うように書き換えてください。

1. `/books` に `title` をGETで送信するフォーム
2. `/students` に `name` をGETで送信するフォーム
3. `/contacts` に `message` をPOSTで送信するフォーム
4. `/articles` に `title` をPOSTで送信するフォーム

<details>
<summary>模範回答</summary>

### 1. `/books` に `title` をGETで送信するフォーム

```html
<form action="/books" method="get">
  <input type="text" name="title">
  <button type="submit">検索</button>
</form>
```

### 2. `/students` に `name` をGETで送信するフォーム

```html
<form action="/students" method="get">
  <input type="text" name="name">
  <button type="submit">検索</button>
</form>
```

### 3. `/contacts` に `message` をPOSTで送信するフォーム

```html
<form action="/contacts" method="post">
  <input type="text" name="message">
  <button type="submit">送信</button>
</form>
```

### 4. `/articles` に `title` をPOSTで送信するフォーム

```html
<form action="/articles" method="post">
  <input type="text" name="title">
  <button type="submit">投稿</button>
</form>
```

</details>

---

## 17. リクエストとルーティング

次のルーティングを読んでください。

```ruby
get "/articles", to: "articles#index"
post "/articles", to: "articles#create"
get "/books", to: "books#index"
post "/books", to: "books#create"
get "/students", to: "students#index"
post "/students", to: "students#create"
```

次のリクエストは、どの処理につながりますか。

1. `GET /articles`
2. `POST /articles`
3. `GET /books`
4. `POST /books`
5. `GET /students`
6. `POST /students`

<details>
<summary>模範回答</summary>

1. `articles#index`
2. `articles#create`
3. `books#index`
4. `books#create`
5. `students#index`
6. `students#create`

</details>

---

## 18. ルーティングを読む：その2

次のルーティングを読んでください。

```ruby
get "/items", to: "items#index"
post "/items", to: "items#create"
get "/comments", to: "comments#index"
post "/comments", to: "comments#create"
get "/messages", to: "messages#index"
post "/messages", to: "messages#create"
```

次のリクエストは、どの処理につながりますか。

1. `GET /items`
2. `POST /items`
3. `GET /comments`
4. `POST /comments`
5. `GET /messages`
6. `POST /messages`

<details>
<summary>模範回答</summary>

1. `items#index`
2. `items#create`
3. `comments#index`
4. `comments#create`
5. `messages#index`
6. `messages#create`

</details>

---

## 19. ルーティングを書く

次の説明に合うルーティングを書いてください。

1. `GET /articles` を `articles#index` につなげる
2. `POST /articles` を `articles#create` につなげる
3. `GET /books` を `books#index` につなげる
4. `POST /books` を `books#create` につなげる
5. `GET /students` を `students#index` につなげる
6. `POST /students` を `students#create` につなげる

<details>
<summary>模範回答</summary>

```ruby
get "/articles", to: "articles#index"
post "/articles", to: "articles#create"
get "/books", to: "books#index"
post "/books", to: "books#create"
get "/students", to: "students#index"
post "/students", to: "students#create"
```

</details>

---

## 20. 間違いを直す

次の説明には間違いがあります。

どこが間違っているかを考え、正しい説明に直してください。

### 20-1.

```text
ブラウザは、サーバからリクエストを受け取る。
```

### 20-2.

```text
サーバは、ブラウザへリクエストを返す。
```

### 20-3.

```text
GETは、必ず新しいデータを登録するときに使う。
```

### 20-4.

```text
POSTは、ページを見るだけのときによく使う。
```

### 20-5.

```text
URLは、画面に表示する文章だけを表している。
```

### 20-6.

```text
ルーティングは、ブラウザ側で画面を表示するための機能である。
```

<details>
<summary>模範回答</summary>

### 20-1.

誤りです。

ブラウザは、サーバへリクエストを送ります。

### 20-2.

誤りです。

サーバは、ブラウザへレスポンスを返します。

### 20-3.

誤りです。

GETは、ページを見る、一覧を見る、検索する場合によく使います。

### 20-4.

誤りです。

POSTは、フォームの入力内容など、データを送る場合によく使います。

### 20-5.

誤りです。

URLは、サーバの場所や、サーバにお願いしたい内容を表します。

### 20-6.

誤りです。

ルーティングは、サーバ側でリクエストをどの処理につなげるかを決める仕組みです。

</details>

---

## 21. 具体例からリクエストを考える

次の状況を読んで、どのようなリクエストになりそうか考えてください。

1. 記事一覧ページを開く
2. 5番の記事詳細ページを開く
3. `ruby` で記事を検索する
4. 新しい記事を投稿する
5. お問い合わせフォームからメッセージを送る
6. ログインフォームからメールアドレスとパスワードを送る

<details>
<summary>模範回答</summary>

一例です。

```text
GET /articles
GET /articles/5
GET /search?keyword=ruby
POST /articles
POST /contacts
POST /login
```

</details>

---

## 22. 小さな設計：本を管理するWebアプリケーション

「本を管理するWebアプリケーション」を考えます。

次の操作に対して、URLとGET / POSTを考えてください。

1. 本の一覧を見る
2. 1番の本を見る
3. 新しい本を登録する
4. 本を検索する
5. 著者名で本を検索する

<details>
<summary>模範回答</summary>

一例です。

| 操作 | GET / POST | URL |
|---|---|---|
| 本の一覧を見る | GET | `/books` |
| 1番の本を見る | GET | `/books/1` |
| 新しい本を登録する | POST | `/books` |
| 本を検索する | GET | `/books?keyword=ruby` |
| 著者名で本を検索する | GET | `/books?author=natsume` |

</details>

---

## 23. 小さな設計：学生管理

「学生を管理するWebアプリケーション」を考えます。

次の操作に対して、URLとGET / POSTを考えてください。

1. 学生一覧を見る
2. 10番の学生を見る
3. 新しい学生を登録する
4. 1年生だけを検索する
5. 名前で学生を検索する

<details>
<summary>模範回答</summary>

一例です。

| 操作 | GET / POST | URL |
|---|---|---|
| 学生一覧を見る | GET | `/students` |
| 10番の学生を見る | GET | `/students/10` |
| 新しい学生を登録する | POST | `/students` |
| 1年生だけを検索する | GET | `/students?grade=1` |
| 名前で学生を検索する | GET | `/students?name=tanaka` |

</details>

---

## 24. 総合問題：フォームとルーティングをつなげる

次のルーティングがあります。

```ruby
get "/books", to: "books#index"
post "/books", to: "books#create"
```

次のフォームを送信したとき、どの処理につながるか考えてください。

```html
<form action="/books" method="get">
  <input type="text" name="author">
  <button type="submit">検索</button>
</form>
```

考えることです。

1. フォームの送信方法は何ですか
2. フォームの送信先はどこですか
3. どのルーティングに一致しますか
4. どのコントローラの処理につながりますか

<details>
<summary>模範回答</summary>

1. GET
2. `/books`
3. `get "/books", to: "books#index"`
4. `books#index`

GETで `/books` に送信するため、`books#index` につながります。

</details>

---

## 25. 総合問題：POSTとルーティングをつなげる

次のルーティングがあります。

```ruby
get "/articles", to: "articles#index"
post "/articles", to: "articles#create"
```

次のフォームを送信したとき、どの処理につながるか考えてください。

```html
<form action="/articles" method="post">
  <input type="text" name="title">
  <button type="submit">投稿</button>
</form>
```

考えることです。

1. フォームの送信方法は何ですか
2. フォームの送信先はどこですか
3. どのルーティングに一致しますか
4. どのコントローラの処理につながりますか
5. このフォームは何をするためのフォームだと考えられますか

<details>
<summary>模範回答</summary>

1. POST
2. `/articles`
3. `post "/articles", to: "articles#create"`
4. `articles#create`
5. 新しい記事を投稿するためのフォーム

POSTで `/articles` に送信するため、`articles#create` につながります。

</details>

---

## 26. Webアプリケーションの流れを説明する

次の言葉を使って、Webアプリケーションの流れを説明してください。

- ブラウザ
- サーバ
- リクエスト
- レスポンス
- URL
- GET
- POST
- ルーティング

<details>
<summary>模範回答</summary>

一例です。

ブラウザは、URLをもとにサーバへリクエストを送ります。

ページを見るときにはGETを使うことが多く、フォームからデータを送るときにはPOSTを使うことが多いです。

サーバはリクエストを受け取り、ルーティングを見て、どの処理を実行するかを決めます。

処理の結果としてHTMLなどを作り、レスポンスとしてブラウザへ返します。

ブラウザは受け取ったレスポンスを画面に表示します。

</details>

---

## 27. 最後の確認

次の文を完成させてください。

1. ブラウザは、サーバへ（　　　　　）を送る。
2. サーバは、ブラウザへ（　　　　　）を返す。
3. URLは、サーバへの（　　　　　）を表す。
4. GETは、主に（　　　　　）ときに使う。
5. POSTは、主に（　　　　　）ときに使う。
6. ルーティングは、リクエストをどの（　　　　　）へつなげるかを決める。

<details>
<summary>模範回答</summary>

一例です。

1. ブラウザは、サーバへ（リクエスト）を送る。
2. サーバは、ブラウザへ（レスポンス）を返す。
3. URLは、サーバへの（宛先やお願いしたい内容）を表す。
4. GETは、主に（ページを見る）ときに使う。
5. POSTは、主に（データを送る）ときに使う。
6. ルーティングは、リクエストをどの（処理）へつなげるかを決める。

</details>
