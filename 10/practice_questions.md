# Practice Questions：Webの仕組みを読み解く

このファイルは、公開Web教材で扱う問題の復習用です。

通常の Practice は [practice.md](practice.md) から公開Web教材を開いて取り組んでください。

---

## 問題の範囲

- ブラウザとサーバ
- リクエストとレスポンス
- URLの分解
- GET / POST の使い分け
- フォームの `action` / `method` / `name`
- ルーティングとコントローラ処理

---

## ブラウザとサーバ

### Q1. Chromeはどれにあたりますか。

- ブラウザ
- サーバ
- ルーティング
- データベース

正解：ブラウザ

解説：ChromeはWebページを見るためのブラウザです。

### Q2. サーバの役割として最も近いものはどれですか。

- リクエストを受け取り、レスポンスを返す
- 画面の文字を入力する
- ブラウザのタブを増やす
- URLを手で並べ替える

正解：リクエストを受け取り、レスポンスを返す

解説：サーバはブラウザからのお願いを受け取り、HTMLなどを返します。

### Q3. ブラウザが最初に行うこととして近いものはどれですか。

- URLをもとにサーバへリクエストを送る
- Railsのルーティングを書く
- データベースを直接更新する
- サーバの中でHTMLを作る

正解：URLをもとにサーバへリクエストを送る

解説：ブラウザはURLを手がかりに、サーバへリクエストを送ります。

### Q4. レスポンスを受け取って画面に表示するのはどれですか。

- ブラウザ
- サーバ
- ルーティング
- コントローラ

正解：ブラウザ

解説：ブラウザはサーバから返ってきたレスポンスを画面に表示します。

### Q5. Webアプリケーションの基本的な流れとして正しいものはどれですか。

- ブラウザがリクエストを送り、サーバがレスポンスを返す
- サーバがリクエストを送り、ブラウザがレスポンスを返す
- URLがレスポンスを作り、HTMLがリクエストを送る
- データベースがブラウザを直接操作する

正解：ブラウザがリクエストを送り、サーバがレスポンスを返す

解説：Webはブラウザとサーバの会話で動きます。

### Q6. ブラウザ側の動きとして正しいものをすべて選んでください。

- URLを入力する
- リクエストを送る
- レスポンスを受け取る
- Railsのルーティングを実行する

正解：URLを入力する / リクエストを送る / レスポンスを受け取る

解説：URL入力、リクエスト送信、レスポンス受信はブラウザ側の動きです。Railsのルーティングはサーバ側です。

## リクエストとレスポンス

### Q7. 「記事一覧をください」はどちらに近いですか。

- リクエスト
- レスポンス
- ルーティング
- アクション

正解：リクエスト

解説：「ください」はブラウザからサーバへのお願いです。

### Q8. 「記事一覧のHTMLを返します」はどちらに近いですか。

- リクエスト
- レスポンス
- URL
- フォーム

正解：レスポンス

解説：サーバがブラウザへ返す返事がレスポンスです。

### Q9. 「ログイン情報を送ります」はどちらに近いですか。

- リクエスト
- レスポンス
- 画面表示
- CSS

正解：リクエスト

解説：フォームに入力した情報をサーバへ送るため、リクエストです。

### Q10. 「送信完了画面のHTMLを返します」はどちらに近いですか。

- リクエスト
- レスポンス
- パス
- HTTPメソッド

正解：レスポンス

解説：HTMLを返すのはサーバからブラウザへのレスポンスです。

### Q11. リクエストの説明として正しいものはどれですか。

- ブラウザからサーバへ送るお願い
- サーバからブラウザへ返すHTMLだけ
- URLの最後の文字だけ
- Railsで必ず手書きするファイル

正解：ブラウザからサーバへ送るお願い

解説：リクエストは、ブラウザがサーバへ送るお願いです。

### Q12. レスポンスの説明として正しいものはどれですか。

- サーバからブラウザへ返す返事
- ブラウザからサーバへ送るお願い
- フォームの送信先
- パスの別名

正解：サーバからブラウザへ返す返事

解説：レスポンスは、サーバが処理結果としてブラウザへ返す返事です。

## URL

### Q13. https://example.com/articles の通信の種類はどれですか。

- https
- example.com
- /articles
- articles

正解：https

解説：URLの先頭にある https は通信の方法を表します。

### Q14. https://example.com/articles のサーバの場所はどれですか。

- https
- example.com
- /articles
- GET

正解：example.com

解説：example.com はアクセス先のサーバの場所です。

### Q15. https://example.com/articles/1 のパスはどれですか。

- /articles/1
- example.com
- https
- articles=1

正解：/articles/1

解説：サーバ内のどの場所や処理を使うかを表す部分がパスです。

### Q16. https://example.com/search?keyword=ruby の追加の情報はどれですか。

- keyword=ruby
- /search
- example.com
- https

正解：keyword=ruby

解説：? の後ろは、サーバへ一緒に送る追加の情報です。

### Q17. /students/10 が表していそうなページはどれですか。

- 10番の学生の詳細
- 学生一覧
- 10年生の検索
- 新しい学生の登録

正解：10番の学生の詳細

解説：/students/10 は、学生の中の10番のデータを表していると読めます。

### Q18. https://shop.example.com/items?category=book のパスはどれですか。

- /items
- category=book
- shop.example.com
- https

正解：/items

解説：パスはサーバの場所の後ろ、? より前の /items です。

### Q19. https://example.com/products?min_price=1000&max_price=3000 の追加の情報はどれですか。

- min_price=1000&max_price=3000
- /products
- example.com/products
- https

正解：min_price=1000&max_price=3000

解説：? の後ろにある min_price と max_price が追加の情報です。

## GET / POST

### Q20. GETをよく使う場面はどれですか。

- ページを見る
- 新しい記事を登録する
- ログイン情報を送る
- お問い合わせ内容を送る

正解：ページを見る

解説：GETは情報を見る、取り出す場面でよく使います。

### Q21. POSTをよく使う場面はどれですか。

- 登録フォームの入力内容を送る
- 記事一覧を見る
- 商品詳細を見る
- 検索結果を見る

正解：登録フォームの入力内容を送る

解説：POSTは登録、投稿、ログインなど、入力したデータを送る場面でよく使います。

### Q22. GET /articles は何をお願いしていそうですか。

- 記事一覧をください
- 新しい記事を登録してください
- 記事を削除してください
- ログインしてください

正解：記事一覧をください

解説：GETで /articles なので、記事一覧を取得するリクエストと読めます。

### Q23. POST /articles は何をしていそうですか。

- 新しい記事を投稿する
- 記事一覧を見る
- 1番の記事を見る
- 記事を検索する

正解：新しい記事を投稿する

解説：POSTで /articles なので、記事データを送って作成する場面が考えられます。

### Q24. 商品を検索する場面でよく使うのはどれですか。

- GET
- POST
- HTML
- CSS

正解：GET

解説：検索は情報を取り出す操作なので、GETがよく使われます。

### Q25. ログイン情報を送る場面でよく使うのはどれですか。

- POST
- GET
- URL
- HTML

正解：POST

解説：ログイン情報のような入力内容を送る場面ではPOSTがよく使われます。

### Q26. 記事の詳細を見るリクエストとして自然なものはどれですか。

- GET /articles/1
- POST /articles/1
- GET /articles?create=true
- POST /search

正解：GET /articles/1

解説：特定の記事を見る操作なので、GETとIDつきのパスが自然です。

### Q27. お問い合わせ内容を送るリクエストとして自然なものはどれですか。

- POST /contacts
- GET /contacts/1
- GET /contacts?message=
- POST /articles

正解：POST /contacts

解説：お問い合わせ内容はフォームから送るデータなので、POSTが自然です。

## フォーム

### Q28. 次のフォームの送信先はどれですか。

```html
<form action="/search" method="get">
  <input type="text" name="keyword">
</form>
```

- /search
- get
- form
- keyword

正解：/search

解説：action はフォームの送信先です。

### Q29. 次のフォームの送信方法はどれですか。

```html
<form action="/search" method="get">
  <input type="text" name="keyword">
</form>
```

- GET
- POST
- /search
- keyword

正解：GET

解説：method="get" なのでGETで送信します。

### Q30. 次のフォームの入力欄の名前はどれですか。

```html
<form action="/search" method="get">
  <input type="text" name="keyword">
</form>
```

- keyword
- text
- input
- search

正解：keyword

解説：name は、サーバへ送るときの項目名です。

### Q31. /search に keyword=ruby をGETで送るリクエストはどれですか。

- GET /search?keyword=ruby
- POST /search?keyword=ruby
- GET /keyword/search/ruby
- POST /ruby

正解：GET /search?keyword=ruby

解説：GETでは、入力値がURLの ? の後ろにつくことがあります。

### Q32. /contacts に message をPOSTで送るフォームとして正しい組み合わせはどれですか。

- action="/contacts"、method="post"、name="message"
- action="/message"、method="get"、name="contacts"
- action="/contacts"、method="get"、name="title"
- action="/search"、method="post"、name="keyword"

正解：action="/contacts"、method="post"、name="message"

解説：送信先、送信方法、入力欄の名前が条件と一致しています。

### Q33. 次のフォームで 1 と入力して送信すると、どのリクエストになりそうですか。

```html
<form action="/students" method="get">
  <input type="text" name="grade">
</form>
```

- GET /students?grade=1
- POST /students?grade=1
- GET /grade?students=1
- POST /students

正解：GET /students?grade=1

解説：GETで /students へ送り、入力欄の名前が grade なので ?grade=1 がつきます。

### Q34. 次のフォームは何を送っていそうですか。

```html
<form action="/login" method="post">
  <input type="text" name="email">
  <input type="password" name="password">
</form>
```

- メールアドレスとパスワード
- 検索キーワードだけ
- 記事の一覧
- 商品のカテゴリだけ

正解：メールアドレスとパスワード

解説：name が email と password の入力欄をPOSTで送るフォームです。

### Q35. /articles に title をPOSTで送るフォームとして正しいものはどれですか。

- action="/articles"、method="post"、name="title"
- action="/articles"、method="get"、name="keyword"
- action="/title"、method="post"、name="articles"
- action="/search"、method="get"、name="title"

正解：action="/articles"、method="post"、name="title"

解説：新しい記事のタイトルを送るので、/articles にPOSTで title を送る形が合います。

## ルーティング

### Q36. ルーティングの役割として正しいものはどれですか。

- リクエストをどの処理につなげるかを決める
- ブラウザの色を変える
- URLを自動で英語に翻訳する
- データベースの中身を直接表示する

正解：リクエストをどの処理につなげるかを決める

解説：Railsでは、ルーティングがリクエストとコントローラの処理をつなげます。

### Q37. get "/articles", to: "articles#index" はどう読めますか。

- GET /articles が来たら articles#index へつなげる
- POST /articles が来たら articles#index へつなげる
- GET /articles が来たら articles#create へつなげる
- /articles をブラウザ側で保存する

正解：GET /articles が来たら articles#index へつなげる

解説：get、"/articles"、articles#index を順に読みます。

### Q38. post "/articles", to: "articles#create" に一致するリクエストはどれですか。

- POST /articles
- GET /articles
- POST /articles/1
- GET /articles/create

正解：POST /articles

解説：HTTPメソッドとパスの両方が一致する必要があります。

### Q39. GET /books が books#index につながるルーティングはどれですか。

- get "/books", to: "books#index"
- post "/books", to: "books#index"
- get "/books", to: "books#create"
- post "/books", to: "books#create"

正解：get "/books", to: "books#index"

解説：GET、/books、books#index がすべて一致しています。

### Q40. POST /students が students#create につながるルーティングはどれですか。

- post "/students", to: "students#create"
- get "/students", to: "students#create"
- post "/students", to: "students#index"
- get "/students/1", to: "students#create"

正解：post "/students", to: "students#create"

解説：POSTで学生情報を送る処理は、作成を表す create につながることが多いです。

### Q41. 次のルーティングで GET /comments はどこにつながりますか。

```ruby
get "/comments", to: "comments#index"
post "/comments", to: "comments#create"
```

- comments#index
- comments#create
- articles#index
- comments#show

正解：comments#index

解説：GET /comments なので get "/comments" の行に一致します。

### Q42. 次のルーティングで POST /messages はどこにつながりますか。

```ruby
get "/messages", to: "messages#index"
post "/messages", to: "messages#create"
```

- messages#create
- messages#index
- messages#show
- comments#create

正解：messages#create

解説：POST /messages なので post "/messages" の行に一致します。

## 総合問題

### Q43. 本の一覧を見るリクエストとして最も自然なものはどれですか。

- GET /books
- POST /books
- GET /books?title=
- POST /login

正解：GET /books

解説：一覧を見る操作なのでGETを使います。

### Q44. 3番の本を見るリクエストとして最も自然なものはどれですか。

- GET /books/3
- POST /books/3
- GET /books?new=3
- POST /books

正解：GET /books/3

解説：特定の本の詳細を見るため、GETとIDつきのパスが自然です。

### Q45. 新しい本を登録するリクエストとして最も自然なものはどれですか。

- POST /books
- GET /books
- GET /books/1
- POST /search

正解：POST /books

解説：新しいデータを送る操作なのでPOSTが自然です。

### Q46. ruby で本を検索するリクエストとして最も自然なものはどれですか。

- GET /books?keyword=ruby
- POST /books/1
- GET /books/ruby/create
- POST /keyword

正解：GET /books?keyword=ruby

解説：検索条件を追加情報として送り、結果を取得しています。

### Q47. 次のフォームはどの処理につながりますか。

```html
<form action="/books" method="get">
  <input type="text" name="author">
</form>

get "/books", to: "books#index"
post "/books", to: "books#create"
```

- books#index
- books#create
- articles#index
- authors#create

正解：books#index

解説：GETで /books に送信するため、get "/books" のルーティングに一致します。name="author" は送るデータの名前です。どの処理につながるかは、method="get" と action="/books" を見ます。

### Q48. 次のフォームはどの処理につながりますか。

```html
<form action="/articles" method="post">
  <input type="text" name="title">
</form>

get "/articles", to: "articles#index"
post "/articles", to: "articles#create"
```

- articles#create
- articles#index
- books#create
- articles#show

正解：articles#create

解説：POSTで /articles に送信するため、post "/articles" のルーティングに一致します。

### Q49. 学生一覧を見る、10番の学生を見る、新しい学生を登録する、の組み合わせとして最も自然なものはどれですか。

- GET /students、GET /students/10、POST /students
- POST /students、POST /students/10、GET /students
- GET /students/create、GET /students/10、GET /students
- POST /login、GET /students、POST /contacts

正解：GET /students、GET /students/10、POST /students

解説：一覧と詳細はGET、新規登録はPOSTが自然です。

### Q50. 「URLは画面に表示する文章だけを表している」という説明は正しいですか。

- 誤り。URLはサーバの場所やお願いしたい内容を表す
- 正しい。URLは文章だけを表す
- 正しい。URLはCSSだけを表す
- 誤り。URLはブラウザの色だけを表す

正解：誤り。URLはサーバの場所やお願いしたい内容を表す

解説：URLはサーバへの宛先や、パス、追加の情報を含みます。

### Q51. 「GETは必ず新しいデータを登録するときに使う」という説明は正しいですか。

- 誤り。GETは情報を見るときによく使う
- 正しい。GETは登録専用である
- 正しい。GETはログイン専用である
- 誤り。GETはフォームでは絶対に使えない

正解：誤り。GETは情報を見るときによく使う

解説：GETはページを見る、一覧を見る、検索する場合によく使います。

### Q52. Webアプリケーションの流れとして最も自然な順番はどれですか。

- ブラウザがリクエストを送る → サーバが処理する → サーバがレスポンスを返す → ブラウザが表示する
- サーバが表示する → ブラウザが処理する → URLが消える → レスポンスを送る
- CSSがリクエストする → HTMLがルーティングする → ブラウザが登録する
- データベースがURLを入力する → ブラウザがRailsを書く → サーバがタブを開く

正解：ブラウザがリクエストを送る → サーバが処理する → サーバがレスポンスを返す → ブラウザが表示する

解説：ブラウザから始まり、サーバで処理し、レスポンスが返って画面に表示されます。

### Q53. Railsに入る前に押さえておく考え方として正しいものをすべて選んでください。

- ブラウザがリクエストを送る
- サーバがレスポンスを返す
- ルーティングはリクエストを処理へつなげる
- POSTはページを見るときだけに使う

正解：ブラウザがリクエストを送る / サーバがレスポンスを返す / ルーティングはリクエストを処理へつなげる

解説：POSTはデータを送る場面でよく使います。ページを見るときはGETがよく使われます。

### Q54. 次回以降のRails学習につながる読み方として正しいものはどれですか。

- GET /articles が来たら、ルーティングが articles#index などの処理へつなげる
- GET /articles が来たら、ブラウザが直接データベースを書き換える
- POST /articles が来たら、URLがCSSを作る
- ルーティングはフォームの文字色だけを決める

正解：GET /articles が来たら、ルーティングが articles#index などの処理へつなげる

解説：Railsでは、リクエストをルーティングが受け取り、コントローラの処理へつなげます。

