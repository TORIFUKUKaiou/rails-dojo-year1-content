# 第10回：Webの仕組み ── ブラウザとサーバの会話

## 今日のゴール

Webアプリケーションは、ブラウザとサーバのやり取りで動いています。

今回は、Railsに入る前に、Webアプリケーションの基本的な流れを確認します。

- ブラウザとサーバの関係を説明できる
- <ruby>要求<rt>リクエスト</rt></ruby>と<ruby>応答<rt>レスポンス</rt></ruby>の流れを説明できる
- URLが何を表しているのかを説明できる
- GET と POST の違いを大まかに説明できる
- フォーム送信で何が起きているのかを観察できる
- URL とルーティングの関係を説明できる

---

## 前回までのおさらい

前回までは、Rubyの基本を復習しました。

Rubyでは、次のような部品を学びました。

- 変数
- 配列
- ハッシュ
- 条件分岐
- 繰り返し
- メソッド
- クラス

たとえば、記事を表すクラスは次のように書けます。

```ruby
class Article
  def initialize(title, body)
    @title = title
    @body = body
  end

  def show
    puts @title
    puts @body
  end
end

article = Article.new("はじめての記事", "Rubyを学んでいます")
article.show
```

ここでは、Rubyの中だけでデータを作り、処理を実行しています。

今日からは、この考え方をWebアプリケーションにつなげていきます。

---

## Webアプリケーションとは

Webアプリケーションは、ブラウザで使うアプリケーションです。

たとえば、次のようなものがあります。

- 検索サイト
- 通販サイト
- SNS
- ブログ
- 予約システム
- 学校の出欠管理システム

ブラウザに画面が表示されているため、ブラウザだけで動いているように見えるかもしれません。

しかし、多くのWebアプリケーションでは、ブラウザの向こう側にサーバがあります。

---

## ブラウザとサーバ

**ブラウザ**は、Webページを見るためのソフトです。

代表的なブラウザには、次のようなものがあります。

- Google Chrome
- Microsoft Edge
- Safari
- Firefox

**サーバ**は、ブラウザからのお願いを受け取り、必要な返事を返すコンピュータです。

ブラウザとサーバの関係は、お店で注文する流れに似ています。

| Webの言葉 | たとえ |
|---|---|
| ブラウザ | お客さん |
| サーバ | お店 |
| リクエスト | 注文 |
| レスポンス | 商品や返事 |
| URL | お店の住所と注文内容 |

---

## リクエストとレスポンス

ブラウザでWebページを開くと、次のような流れが起きます。

```mermaid
flowchart LR
  Browser["ブラウザ"]
  Server["サーバ"]

  Browser -->|"リクエスト<br>このページをください"| Server
  Server -->|"レスポンス<br>HTMLなどを返す"| Browser
```

<ruby>要求<rt>リクエスト</rt></ruby>は、ブラウザからサーバへ送るお願いです。

たとえば、次のようなお願いです。

- トップページをください
- 記事の一覧をください
- 検索結果をください
- 入力した内容を登録してください

<ruby>応答<rt>レスポンス</rt></ruby>は、サーバからブラウザへ返す返事です。

たとえば、次のような返事です。

- HTML
- 画像
- CSS
- JavaScript
- エラー画面

> [!IMPORTANT]
> Webアプリケーションは、ブラウザとサーバの会話で動きます。
>
> ブラウザがリクエストを送り、サーバがレスポンスを返します。

---

## URLとは

URLは、Web上の場所を表す文字列です。

たとえば、次のようなURLがあります。

```text
https://example.com/articles?keyword=ruby
```

URLは、いくつかの部分に分けて見ることができます。

```text
https://example.com/articles?keyword=ruby
─────  ───────────  ──────── ────────────
通信   サーバの場所  パス      追加の情報
```

| 部分 | 例 | 意味 |
|---|---|---|
| 通信の種類 | `https` | 通信の方法 |
| サーバの場所 | `example.com` | どのサーバへ送るか |
| パス | `/articles` | サーバ内のどの場所や処理を使うか |
| 追加の情報 | `keyword=ruby` | サーバへ一緒に送る情報 |

URLは、ただの文字列ではありません。

ブラウザがサーバへリクエストを送るときの、宛先と内容を表しています。

---

## GETとは

GETは、サーバから情報を取り出すときによく使うリクエストの種類です。

たとえば、次のような場面で使います。

- ページを見る
- 記事の一覧を見る
- 詳細ページを見る
- 検索する

例です。

```text
GET /articles
```

これは、「記事の一覧をください」というお願いだと考えられます。

検索するときは、URLに情報がつくことがあります。

```text
GET /search?keyword=ruby
```

この場合、`keyword=ruby` という情報も一緒に送っています。

---

## POSTとは

POSTは、サーバへデータを送るときによく使うリクエストの種類です。

たとえば、次のような場面で使います。

- フォームに入力した内容を送る
- 新しい記事を投稿する
- ログイン情報を送る
- お問い合わせ内容を送る

例です。

```text
POST /articles
```

これは、「新しい記事の情報を送ります」というお願いだと考えられます。

---

## GETとPOSTの違い

最初は、次のように考えてください。

| 種類 | よく使う場面 | イメージ |
|---|---|---|
| GET | 情報を見る | ください |
| POST | 情報を送る | 登録してください |

GETは、ページを見るときによく使います。

POSTは、フォームの内容を送るときによく使います。

細かい違いは、Railsを学びながら少しずつ確認します。

---

## フォーム送信の観察

Webページには、入力フォームがあります。

たとえば、検索フォームです。

```html
<form action="/search" method="get">
  <input type="text" name="keyword">
  <button type="submit">検索</button>
</form>
```

このフォームで大事な部分は、次の2つです。

```html
action="/search"
method="get"
```

`action` は、送信先です。

`method` は、送信方法です。

つまり、このフォームは次のような意味になります。

```text
/search に GET で送る
```

入力欄には、`name="keyword"` と書かれています。

```html
<input type="text" name="keyword">
```

ここに `ruby` と入力して送信すると、次のようなリクエストになります。

```text
GET /search?keyword=ruby
```

フォームに入力した値は、リクエストに含まれてサーバへ送られます。

---

## フォーム送信の流れ

検索フォームを送信すると、次のような流れになります。

```mermaid
sequenceDiagram
  participant Browser as ブラウザ
  participant Server as サーバ

  Browser->>Server: GET /search?keyword=ruby
  Server-->>Browser: 検索結果のHTML
```

ブラウザは、入力された内容をリクエストに含めてサーバへ送ります。

サーバは、その内容を受け取り、必要な処理をしてレスポンスを返します。

---

## URLとルーティングの関係

Railsでは、ブラウザから届いたリクエストを、どの処理に渡すかを決めます。

この案内役を**ルーティング**と呼びます。

たとえば、次のようなリクエストが来たとします。

```text
GET /articles
```

Railsでは、このリクエストを次のような処理へつなげます。

```text
articles コントローラの index アクション
```

イメージは次の通りです。

```mermaid
flowchart LR
  Request["GET /articles"]
  Routing["ルーティング"]
  Action["articles#index"]
  View["記事一覧の画面"]

  Request --> Routing
  Routing --> Action
  Action --> View
```

ルーティングは、URLと処理をつなぐ案内表です。

---

## Railsで見ると

Railsでは、ルーティングを次のように書くことがあります。

```ruby
get "/articles", to: "articles#index"
post "/articles", to: "articles#create"
```

今は、すべてを覚える必要はありません。

まずは、次のように読めれば十分です。

```text
GET /articles が来たら articles#index へ
POST /articles が来たら articles#create へ
```

次回以降、実際にRailsアプリケーションを作りながら、この流れを確認します。

---

## Railsに入る前に押さえること

Railsは、Webアプリケーションを作るための道具です。

Railsを学ぶときも、基本の流れは変わりません。

```mermaid
flowchart LR
  Browser["ブラウザ"]

  subgraph Request["リクエスト"]
    Method["GET"]
    URL["/articles"]
  end

  subgraph Server["Railsサーバ"]
    Routing["ルーティング<br>GET /articles"]
    Controller["コントローラ<br>articles#index"]
    View["ビュー<br>HTMLを作る"]
  end

  Response["レスポンス<br>HTML"]

  Browser --> Request
  Request --> Routing
  Routing --> Controller
  Controller --> View
  View --> Response
  Response --> Browser
```

ブラウザがリクエストを送ります。

サーバがレスポンスを返します。

Railsは、サーバ側の処理を作るための道具です。

---

## まとめ

今日やったこと：

1. Webアプリケーションは、ブラウザとサーバのやり取りで動くことを知った
2. ブラウザからサーバへ送るお願いをリクエストと呼ぶことを学んだ
3. サーバからブラウザへ返す返事をレスポンスと呼ぶことを学んだ
4. URLは、サーバへの宛先とリクエストの内容を表すことを知った
5. GETは情報を見るとき、POSTは情報を送るときによく使うことを知った
6. フォームには送信先と送信方法があることを知った
7. ルーティングは、URLと処理をつなぐ案内表だと知った

> [!IMPORTANT]
> - Webアプリケーションは、ブラウザとサーバの会話で動く
> - リクエストはお願い、レスポンスは返事
> - URLはサーバへの宛先とリクエストの内容
> - GETは見る、POSTは送る
> - ルーティングはURLと処理をつなぐ案内表

---

それでは、[練習問題](practice.md) に進みましょう。
