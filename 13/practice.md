# Practice：scaffoldで3つのRailsアプリを作る

## 進め方

このPracticeでは、Railsの`scaffold`を使って3つのアプリケーションを作ります。

1つのアプリケーションを作り、ブラウザで操作を確認してから、次のアプリケーションへ進みます。

作るアプリケーションは次の3つです。

| アプリケーション | フォルダ名 | 扱うデータ |
|---|---|---|
| TODOアプリ | `todo_app` | タスク |
| 読書メモアプリ | `book_app` | 本 |
| 支出メモアプリ | `expense_app` | 支出 |

作業を始める前に、ターミナルでRailsのバージョンを確認します。

```bash
rails --version
```

次のように表示されることを確認してください。

```text
Rails 8.0.2.1
```

## 共通の注意

Railsサーバーを起動したまま次のアプリケーションを作ると、ポート3000が使われたままになります。

1つのアプリケーションの確認が終わったら、サーバーを起動しているターミナルで `Ctrl + C` を押して止めます。

```text
Ctrl + C
```

サーバーを止めてから、次のアプリケーションを作ります。

## 共通手順：Codespaces用のhost設定

各アプリケーションで、`config/environments/development.rb` を開きます。

既存の次のブロックを探します。

```ruby
Rails.application.configure do
```

そのブロックの中に、次のコードを追加します。

```ruby
pf_domain = ENV["GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"]
codespace_name = ENV["CODESPACE_NAME"]

if pf_domain.present? && codespace_name.present?
  pf_host = "#{codespace_name}-3000.#{pf_domain}"
  config.hosts << pf_host
end
```

> [!IMPORTANT]
> `development.rb` のファイル全体を置き換えないでください。
> 既存の `Rails.application.configure do` から `end` までの中に、上のコードを追加します。

追加後のイメージは次のようになります。

```ruby
Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  pf_domain = ENV["GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"]
  codespace_name = ENV["CODESPACE_NAME"]

  if pf_domain.present? && codespace_name.present?
    pf_host = "#{codespace_name}-3000.#{pf_domain}"
    config.hosts << pf_host
  end

  # もともと書かれていた設定は消さずに残す
end
```

## 共通手順：CSSを追加する

各アプリケーションで、`app/assets/stylesheets/application.css` を開きます。

ファイルの一番下に、次のCSSを追加します。

```css
body {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 24px;
  background: #f6f7fb;
  color: #1f2937;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

h1 {
  margin-bottom: 24px;
  color: #111827;
}

a {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

table {
  width: 100%;
  margin: 24px 0;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

th,
td {
  padding: 14px 16px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
}

th {
  background: #eef2ff;
  color: #3730a3;
}

form,
div[id$="_form"] {
  max-width: 640px;
  margin: 24px 0;
  padding: 24px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 700;
}

input[type="text"],
input[type="number"],
input[type="date"],
textarea {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font: inherit;
}

input[type="checkbox"] {
  margin-bottom: 16px;
}

input[type="submit"],
button {
  padding: 10px 18px;
  border: 0;
  border-radius: 999px;
  background: #4f46e5;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

input[type="submit"]:hover,
button:hover {
  background: #4338ca;
}

p[style*="green"] {
  padding: 12px 16px;
  border-radius: 12px;
  background: #dcfce7;
  color: #166534 !important;
  font-weight: 700;
}
```

追加したら、ブラウザを再読み込みして見た目の変化を確認します。

## アプリ1：TODOアプリ

タスクを登録・表示・編集・削除できるTODOアプリを作ります。

### 課題1：Railsアプリケーションを作る

ターミナルで次のコマンドを実行します。

```bash
rails _8.0.2.1_ new todo_app
```

作成が終わったら、アプリケーションのフォルダへ移動します。

```bash
cd todo_app
```

Railsのバージョンを確認します。

```bash
bin/rails --version
```

次のように表示されることを確認します。

```text
Rails 8.0.2.1
```

もし別のバージョンが表示された場合は、`Gemfile` の `gem "rails"` の行を確認し、必要に応じて次のように固定します。

```ruby
gem "rails", "= 8.0.2.1"
```

変更した場合は、次のコマンドを実行します。

```bash
bundle install
```

### 課題2：Taskのscaffoldを作る

次のコマンドを実行します。

```bash
bin/rails generate scaffold Task title:string description:text completed:boolean due_date:date
```

ファイルが生成されたことを確認します。

表示の中に、次のような行が含まれていれば成功です。

```text
create    app/models/task.rb
create    app/controllers/tasks_controller.rb
create    app/views/tasks
```

### 課題3：データベースに反映する

次のコマンドを実行します。

```bash
bin/rails db:migrate
```

次のような表示が出れば成功です。

```text
== 20xxxxxxxxxxxx CreateTasks: migrating =====================================
-- create_table(:tasks)
   -> 0.0xxxs
== 20xxxxxxxxxxxx CreateTasks: migrated (0.0xxxs) ============================
```

### 課題4：Codespaces用のhost設定を追加する

`config/environments/development.rb` を開きます。

`Rails.application.configure do` のブロック内に、共通手順で示したCodespaces用のhost設定を追加します。

保存したら、次へ進みます。

### 課題5：サーバーを起動する

次のコマンドを実行します。

```bash
bin/rails server -b 0.0.0.0
```

次のような表示が出れば、サーバーが起動しています。

```text
* Listening on http://0.0.0.0:3000
```

Codespacesのポート3000の転送URLを開き、次のURLへ移動します。

```text
/tasks
```

### 課題6：CRUD操作を確認する

ブラウザで次の操作を行います。

1. `New task` からタスクを作成する
2. 一覧画面に作成したタスクが表示されることを確認する
3. 詳細画面を開く
4. 編集画面で内容を変更する
5. 一覧画面で変更後の内容を確認する
6. タスクを削除する
7. 一覧画面から削除されたことを確認する

入力例：

| 項目 | 入力する値 |
|---|---|
| Title | Railsの復習 |
| Description | scaffoldでTODOアプリを作る |
| Completed | チェックしない |
| Due date | 今日以降の日付 |

`completed` はチェックボックスとして表示されます。

`due_date` は日付を入力する欄として表示されます。

### 課題7：CSSを追加する

`app/assets/stylesheets/application.css` を開きます。

共通手順で示したCSSを、ファイルの一番下に追加します。

保存したら、ブラウザを再読み込みします。

一覧、フォーム、ボタンの見た目が変わったことを確認します。

### 課題8：サーバーを止める

サーバーを起動しているターミナルで `Ctrl + C` を押します。

プロンプトが戻ってきたら、サーバーは止まっています。

```text
Ctrl + C
```

次のアプリケーションへ進むため、1つ上のフォルダへ戻ります。

```bash
cd ..
```

## アプリ2：読書メモアプリ

本の情報を登録できる読書メモアプリを作ります。

### 課題9：Railsアプリケーションを作る

次のコマンドを実行します。

```bash
rails _8.0.2.1_ new book_app
cd book_app
bin/rails --version
```

次のように表示されることを確認します。

```text
Rails 8.0.2.1
```

### 課題10：Bookのscaffoldを作る

次のコマンドを実行します。

```bash
bin/rails generate scaffold Book title:string author:string rating:integer memo:text
```

### 課題11：データベースに反映する

次のコマンドを実行します。

```bash
bin/rails db:migrate
```

### 課題12：Codespaces用のhost設定を追加する

`config/environments/development.rb` を開きます。

`Rails.application.configure do` のブロック内に、共通手順で示したCodespaces用のhost設定を追加します。

### 課題13：サーバーを起動する

次のコマンドを実行します。

```bash
bin/rails server -b 0.0.0.0
```

Codespacesのポート3000の転送URLを開き、次のURLへ移動します。

```text
/books
```

### 課題14：CRUD操作を確認する

ブラウザで本を登録します。

入力例：

| 項目 | 入力する値 |
|---|---|
| Title | プログラミング入門 |
| Author | 山田太郎 |
| Rating | 5 |
| Memo | Railsのscaffoldを使って読書メモを作った |

次のことを確認します。

- 本のタイトル、著者、評価、メモを登録できる
- 一覧画面に表示される
- 詳細画面を開ける
- 編集できる
- 削除できる
- `rating` に数値を入力できる
- `memo` に長めの文章を入力できる

### 課題15：CSSを追加する

`app/assets/stylesheets/application.css` を開きます。

共通手順で示したCSSを、ファイルの一番下に追加します。

保存したら、ブラウザを再読み込みして見た目の変化を確認します。

### 課題16：サーバーを止める

サーバーを起動しているターミナルで `Ctrl + C` を押します。

その後、1つ上のフォルダへ戻ります。

```bash
cd ..
```

## アプリ3：支出メモアプリ

買ったもの、金額、カテゴリ、購入日を記録する支出メモアプリを作ります。

### 課題17：Railsアプリケーションを作る

次のコマンドを実行します。

```bash
rails _8.0.2.1_ new expense_app
cd expense_app
bin/rails --version
```

次のように表示されることを確認します。

```text
Rails 8.0.2.1
```

### 課題18：Expenseのscaffoldを作る

次のコマンドを実行します。

```bash
bin/rails generate scaffold Expense item:string amount:integer category:string purchased_on:date
```

### 課題19：データベースに反映する

次のコマンドを実行します。

```bash
bin/rails db:migrate
```

### 課題20：Codespaces用のhost設定を追加する

`config/environments/development.rb` を開きます。

`Rails.application.configure do` のブロック内に、共通手順で示したCodespaces用のhost設定を追加します。

### 課題21：サーバーを起動する

次のコマンドを実行します。

```bash
bin/rails server -b 0.0.0.0
```

Codespacesのポート3000の転送URLを開き、次のURLへ移動します。

```text
/expenses
```

### 課題22：CRUD操作を確認する

ブラウザで支出を登録します。

入力例：

| 項目 | 入力する値 |
|---|---|
| Item | 昼食 |
| Amount | 850 |
| Category | 食費 |
| Purchased on | 今日以降の日付 |

次のことを確認します。

- 品目、金額、カテゴリ、購入日を登録できる
- 一覧画面に表示される
- 詳細画面を開ける
- 編集できる
- 削除できる
- `amount` に数値を入力できる
- `purchased_on` が日付入力になる

### 課題23：CSSを追加する

`app/assets/stylesheets/application.css` を開きます。

共通手順で示したCSSを、ファイルの一番下に追加します。

保存したら、ブラウザを再読み込みして見た目の変化を確認します。

### 課題24：サーバーを止める

サーバーを起動しているターミナルで `Ctrl + C` を押します。

プロンプトが戻ってきたことを確認します。

## 課題25：3つのアプリを比べる（考察問題・実行しない）

> [!IMPORTANT]
> この課題は考察問題です。
> ファイルを変更したり、コマンドを実行したりしません。
> ノートまたは指定されたファイルに答えを書いてください。

3つのアプリケーションで、似ていたところを3つ書いてください。

例：

- `rails new` でアプリケーションを作った
- `generate scaffold` でCRUD画面を作った
- `db:migrate` でデータベースに反映した

次に、違っていたところを3つ書いてください。

例：

- モデル名が違った
- カラム名が違った
- `boolean`、`integer`、`date` などデータ型が違った

## 課題26：scaffoldで作られた場所を確認する（考察問題・実行しない）

> [!IMPORTANT]
> この課題は考察問題です。
> ファイルを変更したり、コマンドを実行したりしません。
> ノートまたは指定されたファイルに答えを書いてください。

`expense_app` の中で、次のファイルを探してください。

| ファイル | 役割 |
|---|---|
| `app/models/expense.rb` | 支出データを扱うModel |
| `app/controllers/expenses_controller.rb` | 支出画面の処理を担当するController |
| `app/views/expenses/index.html.erb` | 一覧画面のView |
| `app/views/expenses/_form.html.erb` | 新規作成・編集で使うフォームのView |
| `config/routes.rb` | URLとControllerを対応させる設定 |
| `db/migrate/...create_expenses.rb` | expensesテーブルを作るmigration |

ブラウザで見ている画面が、どのファイルと関係しているかを確認します。

Practiceが終わったら、[Stretch](stretch.md)へ進みましょう。
