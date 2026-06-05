# 第8回 練習：クラスを作ってデータとメソッドをひとまとめにしよう

## 今日のゴール

- `class` と `end` でクラスを定義し、インスタンスを作って使えるようになる
- `initialize` で初期値を渡し、インスタンス変数（`@変数名`）で保持できるようになる
- 複数のインスタンスを作り、それぞれが独立したデータを持つことを確認できるようになる
- インスタンスの状態をメソッドで変更できるようになる

---

## この練習について

最初のうちは、自分の手で打って慣れることを大事にしましょう。

各問題は、次の順番で進めてください。

1. `practice01.rb` のようなファイルを作る
2. 自分で考えてコードを書く
3. `ruby practice01.rb` で実行する
4. 動いたら、解答例を開く
5. `practice01_answer.rb` を作り、解答例を写す（コピーしてもOK）
6. `ruby practice01_answer.rb` を実行する
7. 自分の実行結果と、解答例の実行結果を比べる

実行結果が同じならOKです。
そのうえで、自分のコードと解答例を見比べて、どちらが読みやすいかも考えてみましょう。

実行結果が違う場合は、自分のコードと解答例を見比べて、どこが違うのかを確認してください。

---

## 準備

<details>
<summary>前回の Codespace が残っている場合</summary>

前回の授業で Codespace を削除していないと、前回の Codespace が残っていることがあります。

- この授業では、操作に慣れるために、毎回新しい Codespace を作って始めます
- 前回の Codespace が残っている場合は、削除してから新しく作り直してください
- まっさらな状態から始めることで、準備の手順も少しずつ覚えられます
- 削除方法は [Codespace を削除する](../delete_codespace.md) を見てください（リンクを右クリックして、「新しいタブで開く」）

</details>

---

1. GitHubにログインする
2. [このリポジトリ](https://github.com/TORIFUKUKaiou/rails-dojo-year1-content/)のページを開く（リンクを右クリックして、「リンクを新しいタブで開く」）
3. 「Code」ボタン → 「Codespaces」タブ → 「Create codespace on main」をクリック

    ![](../images/create-codespace-on-main.png)

4. しばらく待つ（初回は1〜2分かかります）

画面が開いて、「**準備完了**」の文字が表示されたらプログラミングができる環境が整っています。

![](../images/created-codespace-on-main.png)

## ファイルにRubyのプログラムを書いて実行する

1. 画面左側のファイル一覧で `content` の外側、ホームディレクトリのあたりを右クリック →「新しいファイル」→ `main.rb` と入力

    ![](../images/new-file.png)

2. ファイルに以下を書く：

```ruby
puts "Hello, World!"
```

※ Codespaces 上の VS Code では、自動保存が初期設定で有効になっています。そのため、この環境では保存操作をしなくても変更は反映されます。ただし、開発環境によっては、保存しないと変更が反映されないこともあります。書き換えたら `ruby main.rb` を実行してください。

3. ターミナルで以下を実行する：

```bash
ruby main.rb
```

`Hello, World!` と表示されたら成功です。

ここまでできたら準備完了です。
`main.rb` は動作確認用のファイルです。
ここから先の練習では、問題ごとに `practice01.rb`、`practice02.rb` のような新しいファイルを作って進めましょう。

---

## 📝 1. `Article` クラスを作る ( `practice01.rb` )

### やってみよう

`Article` クラスを定義してください。クラスの中に `title_message` というメソッドを作り、`"これは記事です"` という文字列を返すようにしてください。

クラスを定義したら、`Article.new` でインスタンスを作り、変数 `article` に入れてください。その後、`article.title_message` を呼び出して `puts` で表示してください。

作成するファイル：
```text
practice01.rb
```

表示例：
```text
これは記事です
```

実行するコマンド：
```bash
ruby practice01.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice01_answer.rb)</summary>

```ruby
# practice01_answer.rb
class Article
  def title_message
    "これは記事です"
  end
end

article = Article.new
puts article.title_message
```

解答例を確認するときは、`practice01_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice01_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 2. `Article` クラスにメソッドを追加する ( `practice02.rb` )

### やってみよう

問1の `Article` クラスに、`body_message` というメソッドを追加してください。`body_message` は `"これは本文です"` という文字列を返します。

インスタンスを1つ作り、`title_message` と `body_message` を両方呼び出して、それぞれ `puts` で表示してください。

作成するファイル：
```text
practice02.rb
```

表示例：
```text
これは記事です
これは本文です
```

実行するコマンド：
```bash
ruby practice02.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice02_answer.rb)</summary>

```ruby
# practice02_answer.rb
class Article
  def title_message
    "これは記事です"
  end

  def body_message
    "これは本文です"
  end
end

article = Article.new
puts article.title_message
puts article.body_message
```

解答例を確認するときは、`practice02_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice02_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 3. `Task` クラスを作る ( `practice03.rb` )

### やってみよう

`Task` クラスを定義してください。クラスの中に `name_message` というメソッドを作り、`"これはタスクです"` という文字列を返すようにしてください。

インスタンスを1つ作り、`name_message` を呼び出して `puts` で表示してください。

作成するファイル：
```text
practice03.rb
```

表示例：
```text
これはタスクです
```

実行するコマンド：
```bash
ruby practice03.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice03_answer.rb)</summary>

```ruby
# practice03_answer.rb
class Task
  def name_message
    "これはタスクです"
  end
end

task = Task.new
puts task.name_message
```

解答例を確認するときは、`practice03_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice03_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 4. `Product` クラスを作る ( `practice04.rb` )

### やってみよう

`Product` クラスを定義してください。クラスの中に `info` というメソッドを作り、`"商品情報です"` という文字列を返すようにしてください。

インスタンスを1つ作り、`info` を呼び出して `puts` で表示してください。

作成するファイル：
```text
practice04.rb
```

表示例：
```text
商品情報です
```

実行するコマンド：
```bash
ruby practice04.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice04_answer.rb)</summary>

```ruby
# practice04_answer.rb
class Product
  def info
    "商品情報です"
  end
end

product = Product.new
puts product.info
```

解答例を確認するときは、`practice04_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice04_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 5. 1つのインスタンスから2つのメソッドを呼ぶ ( `practice05.rb` )

### やってみよう

`Article` クラスに `title_message` と `body_message` の2つのメソッドを作ってください。それぞれ次の文字列を返します。

- `title_message` → `"記事のタイトル欄"`
- `body_message` → `"記事の本文欄"`

インスタンスを1つ作り、2つのメソッドを順番に呼び出して表示してください。

作成するファイル：
```text
practice05.rb
```

表示例：
```text
記事のタイトル欄
記事の本文欄
```

実行するコマンド：
```bash
ruby practice05.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice05_answer.rb)</summary>

```ruby
# practice05_answer.rb
class Article
  def title_message
    "記事のタイトル欄"
  end

  def body_message
    "記事の本文欄"
  end
end

article = Article.new
puts article.title_message
puts article.body_message
```

解答例を確認するときは、`practice05_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice05_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 6. インスタンスを2つ作る ( `practice06.rb` )

### やってみよう

`Article` クラスに `title_message` メソッドを作り、`"これは記事です"` を返すようにしてください。

`Article.new` を2回書き、1つ目を変数 `article1`、2つ目を変数 `article2` に入れてください。それぞれから `title_message` を呼び出して表示してください。

作成するファイル：
```text
practice06.rb
```

表示例：
```text
これは記事です
これは記事です
```

実行するコマンド：
```bash
ruby practice06.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice06_answer.rb)</summary>

```ruby
# practice06_answer.rb
class Article
  def title_message
    "これは記事です"
  end
end

article1 = Article.new
article2 = Article.new

puts article1.title_message
puts article2.title_message
```

解答例を確認するときは、`practice06_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice06_answer.rb
```

`article1` と `article2` はそれぞれ別のインスタンスです。同じクラスから作っても、別々のインスタンスとして独立しています。

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 7. クラス名を小文字にするとどうなるか（エラー確認の課題） ( `practice07.rb` )

> [!IMPORTANT]
> この課題は、わざとエラーを出して確認するための課題です。エラーが表示されれば確認成功です。

### やってみよう

次のコードを `practice07.rb` に書いて実行してください。

```ruby
class article
  def title_message
    "これは記事です"
  end
end
```

作成するファイル：
```text
practice07.rb
```

実行するコマンド：
```bash
ruby practice07.rb
```

エラーが表示されれば確認成功です。どんなエラーメッセージが出るか読んでみましょう。

<details>
<summary>解答例と解説</summary>

実行すると、次のようなエラーが表示されます。

```text
practice07.rb:1:in `<main>': class/module name must be CONSTANT (SyntaxError)
```

`class/module name must be CONSTANT` は「クラス名は定数（大文字始まり）でなければならない」という意味です。

Rubyでは、クラス名は必ず大文字で始めます。`article` → `Article` に直すと正しく動きます。

クラス名を直した修正版を `practice07_answer.rb` に書いて確認しましょう。

```ruby
# practice07_answer.rb
class Article
  def title_message
    "これは記事です"
  end
end

article = Article.new
puts article.title_message
```

```bash
ruby practice07_answer.rb
```

</details>

---

## 📝 8. `initialize` でタイトルを受け取る ( `practice08.rb` )

### やってみよう

`Article` クラスに `initialize(title)` を追加してください。受け取った `title` をインスタンス変数 `@title` に代入します。

`title_message` メソッドでは `"記事タイトル：#{@title}"` という文字列を返すようにしてください。

`Article.new("はじめての記事")` でインスタンスを作り、`title_message` を呼び出して表示してください。

作成するファイル：
```text
practice08.rb
```

表示例：
```text
記事タイトル：はじめての記事
```

実行するコマンド：
```bash
ruby practice08.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice08_answer.rb)</summary>

```ruby
# practice08_answer.rb
class Article
  def initialize(title)
    @title = title
  end

  def title_message
    "記事タイトル：#{@title}"
  end
end

article = Article.new("はじめての記事")
puts article.title_message
```

解答例を確認するときは、`practice08_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice08_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 9. タイトルを変えてインスタンスを作る ( `practice09.rb` )

### やってみよう

新しいファイルに問8と同じ `Article` クラスをもう一度書き、タイトルが違う記事を2つ作ってください。

- 1つ目：`"はじめての記事"`
- 2つ目：`"Rubyを学ぶ"`

それぞれの `title_message` を呼び出して表示してください。

作成するファイル：
```text
practice09.rb
```

表示例：
```text
記事タイトル：はじめての記事
記事タイトル：Rubyを学ぶ
```

実行するコマンド：
```bash
ruby practice09.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice09_answer.rb)</summary>

```ruby
# practice09_answer.rb
class Article
  def initialize(title)
    @title = title
  end

  def title_message
    "記事タイトル：#{@title}"
  end
end

article1 = Article.new("はじめての記事")
article2 = Article.new("Rubyを学ぶ")

puts article1.title_message
puts article2.title_message
```

解答例を確認するときは、`practice09_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice09_answer.rb
```

同じ `title_message` メソッドを呼んでも、インスタンスごとに `@title` が違うので、表示が変わります。

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 10. `Task` クラスで `initialize` を使う ( `practice10.rb` )

### やってみよう

`Task` クラスを作り、`initialize(name)` でタスク名を受け取ってください。受け取った `name` をインスタンス変数 `@name` に代入します。

`name_message` メソッドでは `"タスク：#{@name}"` という文字列を返すようにしてください。

タスクを2つ作って表示してください。

- 1つ目：`"買い物に行く"`
- 2つ目：`"レポートを書く"`

作成するファイル：
```text
practice10.rb
```

表示例：
```text
タスク：買い物に行く
タスク：レポートを書く
```

実行するコマンド：
```bash
ruby practice10.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice10_answer.rb)</summary>

```ruby
# practice10_answer.rb
class Task
  def initialize(name)
    @name = name
  end

  def name_message
    "タスク：#{@name}"
  end
end

task1 = Task.new("買い物に行く")
task2 = Task.new("レポートを書く")

puts task1.name_message
puts task2.name_message
```

解答例を確認するときは、`practice10_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice10_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 11. `Product` クラスで `initialize` を使う ( `practice11.rb` )

### やってみよう

`Product` クラスを作り、`initialize(name)` で商品名を受け取ってください。受け取った `name` をインスタンス変数 `@name` に代入します。

`name_message` メソッドでは `"商品名：#{@name}"` という文字列を返すようにしてください。

商品を3つ作って表示してください。

- 1つ目：`"りんご"`
- 2つ目：`"バナナ"`
- 3つ目：`"みかん"`

作成するファイル：
```text
practice11.rb
```

表示例：
```text
商品名：りんご
商品名：バナナ
商品名：みかん
```

実行するコマンド：
```bash
ruby practice11.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice11_answer.rb)</summary>

```ruby
# practice11_answer.rb
class Product
  def initialize(name)
    @name = name
  end

  def name_message
    "商品名：#{@name}"
  end
end

product1 = Product.new("りんご")
product2 = Product.new("バナナ")
product3 = Product.new("みかん")

puts product1.name_message
puts product2.name_message
puts product3.name_message
```

解答例を確認するときは、`practice11_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice11_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 12. `initialize` に引数を2つ渡す ( `practice12.rb` )

### やってみよう

`Article` クラスに `initialize(title, body)` を追加してください。受け取った `title` を `@title`、`body` を `@body` にそれぞれ代入します。

`title_message` メソッドは `"記事タイトル：#{@title}"` を返し、`body_message` メソッドは `"本文：#{@body}"` を返すようにしてください。

次の記事を作り、両方のメソッドを呼び出して表示してください。

- タイトル：`"Rubyとは"`
- 本文：`"Webアプリを作れるプログラミング言語です"`

作成するファイル：
```text
practice12.rb
```

表示例：
```text
記事タイトル：Rubyとは
本文：Webアプリを作れるプログラミング言語です
```

実行するコマンド：
```bash
ruby practice12.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice12_answer.rb)</summary>

```ruby
# practice12_answer.rb
class Article
  def initialize(title, body)
    @title = title
    @body = body
  end

  def title_message
    "記事タイトル：#{@title}"
  end

  def body_message
    "本文：#{@body}"
  end
end

article = Article.new("Rubyとは", "Webアプリを作れるプログラミング言語です")
puts article.title_message
puts article.body_message
```

解答例を確認するときは、`practice12_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice12_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 13. `summary` メソッドで1行にまとめる ( `practice13.rb` )

### やってみよう

`Article` クラスに `initialize(title, body)` を作り、`@title` と `@body` に代入してください。

`summary` メソッドを作り、`"#{@title}｜#{@body}"` の形の文字列を返すようにしてください。

次の記事を2つ作り、それぞれの `summary` を表示してください。

- 1つ目：タイトル `"はじめての記事"`、本文 `"Rubyを学んでいます"`
- 2つ目：タイトル `"Railsとは"`、本文 `"WebアプリをRubyで作るフレームワークです"`

作成するファイル：
```text
practice13.rb
```

表示例：
```text
はじめての記事｜Rubyを学んでいます
Railsとは｜WebアプリをRubyで作るフレームワークです
```

実行するコマンド：
```bash
ruby practice13.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice13_answer.rb)</summary>

```ruby
# practice13_answer.rb
class Article
  def initialize(title, body)
    @title = title
    @body = body
  end

  def summary
    "#{@title}｜#{@body}"
  end
end

article1 = Article.new("はじめての記事", "Rubyを学んでいます")
article2 = Article.new("Railsとは", "WebアプリをRubyで作るフレームワークです")

puts article1.summary
puts article2.summary
```

解答例を確認するときは、`practice13_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice13_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 14. `Student` クラスで名前と点数を持たせる ( `practice14.rb` )

### やってみよう

`Student` クラスを作り、`initialize(name, score)` で名前と点数を受け取ってください。受け取った値をそれぞれ `@name`、`@score` に代入します。

`profile` メソッドを作り、`"#{@name}：#{@score}点"` の形の文字列を返すようにしてください。

次の3人を作り、それぞれ `profile` を表示してください。

- 田中、80点
- 鈴木、55点
- 佐藤、92点

作成するファイル：
```text
practice14.rb
```

表示例：
```text
田中：80点
鈴木：55点
佐藤：92点
```

実行するコマンド：
```bash
ruby practice14.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice14_answer.rb)</summary>

```ruby
# practice14_answer.rb
class Student
  def initialize(name, score)
    @name = name
    @score = score
  end

  def profile
    "#{@name}：#{@score}点"
  end
end

student1 = Student.new("田中", 80)
student2 = Student.new("鈴木", 55)
student3 = Student.new("佐藤", 92)

puts student1.profile
puts student2.profile
puts student3.profile
```

解答例を確認するときは、`practice14_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice14_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 15. `Student#result` で合否を返す ( `practice15.rb` )

### やってみよう

新しいファイルに問14と同じ `Student` クラスをもう一度書き、そこに `result` メソッドを追加してください。

- `@score` が60以上なら `"合格"` を返す
- それ以外なら `"不合格"` を返す

次の3人を作り、それぞれ `result` を表示してください。

- 田中、80点
- 鈴木、55点
- 佐藤、92点

作成するファイル：
```text
practice15.rb
```

表示例：
```text
合格
不合格
合格
```

実行するコマンド：
```bash
ruby practice15.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice15_answer.rb)</summary>

```ruby
# practice15_answer.rb
class Student
  def initialize(name, score)
    @name = name
    @score = score
  end

  def result
    if @score >= 60
      "合格"
    else
      "不合格"
    end
  end
end

student1 = Student.new("田中", 80)
student2 = Student.new("鈴木", 55)
student3 = Student.new("佐藤", 92)

puts student1.result
puts student2.result
puts student3.result
```

解答例を確認するときは、`practice15_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice15_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 16. 名前と合否をセットで表示する ( `practice16.rb` )

### やってみよう

新しいファイルに問15と同じ `Student` クラスをもう一度書き、`report` メソッドを追加して「名前：点数（合否）」の形で表示してみましょう。

`report` メソッドを追加し、`"#{@name}：#{@score}点（#{result}）"` という文字列を返すようにしてください。

> [!NOTE]
> `report` メソッドの中で `result` を呼び出すことができます。同じインスタンスのメソッドを別のメソッドの中から呼ぶときは、メソッド名だけで呼び出せます。

次の3人を作り、それぞれ `report` を表示してください。

- 田中、80点
- 鈴木、55点
- 佐藤、92点

作成するファイル：
```text
practice16.rb
```

表示例：
```text
田中：80点（合格）
鈴木：55点（不合格）
佐藤：92点（合格）
```

実行するコマンド：
```bash
ruby practice16.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice16_answer.rb)</summary>

```ruby
# practice16_answer.rb
class Student
  def initialize(name, score)
    @name = name
    @score = score
  end

  def result
    if @score >= 60
      "合格"
    else
      "不合格"
    end
  end

  def report
    "#{@name}：#{@score}点（#{result}）"
  end
end

student1 = Student.new("田中", 80)
student2 = Student.new("鈴木", 55)
student3 = Student.new("佐藤", 92)

puts student1.report
puts student2.report
puts student3.report
```

解答例を確認するときは、`practice16_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice16_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 17. `Product` クラスで名前と価格を持たせる ( `practice17.rb` )

### やってみよう

`Product` クラスに `initialize(name, price)` を作り、商品名と価格を受け取ってください。受け取った値をそれぞれ `@name`、`@price` に代入します。

`info` メソッドを作り、`"#{@name}：#{@price}円"` という文字列を返すようにしてください。

次の商品を3つ作り、それぞれ `info` を表示してください。

- りんご、200円
- バナナ、150円
- みかん、100円

作成するファイル：
```text
practice17.rb
```

表示例：
```text
りんご：200円
バナナ：150円
みかん：100円
```

実行するコマンド：
```bash
ruby practice17.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice17_answer.rb)</summary>

```ruby
# practice17_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
  end

  def info
    "#{@name}：#{@price}円"
  end
end

product1 = Product.new("りんご", 200)
product2 = Product.new("バナナ", 150)
product3 = Product.new("みかん", 100)

puts product1.info
puts product2.info
puts product3.info
```

解答例を確認するときは、`practice17_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice17_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 18. 税込価格を返すメソッドを作る ( `practice18.rb` )

### やってみよう

新しいファイルに問17と同じ `Product` クラスをもう一度書き、そこに `tax_included_price` メソッドを追加してください。税込価格は `@price * 110 / 100` で計算します（整数の割り算なので、小数点以下は切り捨てになります）。

`tax_info` メソッドも作り、`"#{@name}：税込#{tax_included_price}円"` という文字列を返すようにしてください。

次の商品を2つ作り、それぞれ `tax_info` を表示してください。

- りんご、200円
- バナナ、150円

作成するファイル：
```text
practice18.rb
```

表示例：
```text
りんご：税込220円
バナナ：税込165円
```

実行するコマンド：
```bash
ruby practice18.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice18_answer.rb)</summary>

```ruby
# practice18_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
  end

  def tax_included_price
    @price * 110 / 100
  end

  def tax_info
    "#{@name}：税込#{tax_included_price}円"
  end
end

product1 = Product.new("りんご", 200)
product2 = Product.new("バナナ", 150)

puts product1.tax_info
puts product2.tax_info
```

解答例を確認するときは、`practice18_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice18_answer.rb
```

`tax_included_price` のように、メソッドの中から別のメソッドを呼ぶことができます。

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 19. 公開状態を持たせる ( `practice19.rb` )

### やってみよう

`Article` クラスに `initialize(title, body)` を作り、`@title`、`@body` に加えて `@published = false` もセットしてください。

`published?` メソッドを作り、`@published` の値をそのまま返すようにしてください。

記事を1つ作り、`published?` を呼び出して表示してください。

作成するファイル：
```text
practice19.rb
```

表示例：
```text
false
```

実行するコマンド：
```bash
ruby practice19.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice19_answer.rb)</summary>

```ruby
# practice19_answer.rb
class Article
  def initialize(title, body)
    @title = title
    @body = body
    @published = false
  end

  def published?
    @published
  end
end

article = Article.new("はじめての記事", "Rubyを学んでいます")
puts article.published?
```

解答例を確認するときは、`practice19_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice19_answer.rb
```

`@published = false` は `initialize` の中に書くことで、インスタンスを作ったときに自動的にセットされます。

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 20. 状態を変えるメソッドを作る ( `practice20.rb` )

### やってみよう

新しいファイルに問19と同じ `Article` クラスをもう一度書き、そこに `publish` メソッドを追加してください。`publish` を呼ぶと `@published` が `true` に変わります。

記事を1つ作り、`publish` を呼び出した後に `published?` を表示してください。

作成するファイル：
```text
practice20.rb
```

表示例：
```text
true
```

実行するコマンド：
```bash
ruby practice20.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice20_answer.rb)</summary>

```ruby
# practice20_answer.rb
class Article
  def initialize(title, body)
    @title = title
    @body = body
    @published = false
  end

  def published?
    @published
  end

  def publish
    @published = true
  end
end

article = Article.new("はじめての記事", "Rubyを学んでいます")
article.publish
puts article.published?
```

解答例を確認するときは、`practice20_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice20_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 21. `publish` の前後で状態が変わることを確認する ( `practice21.rb` )

### やってみよう

新しいファイルに問20と同じ `Article` クラスをもう一度書き、`publish` を呼ぶ前と後で `published?` の表示が変わることを確認してください。

記事を1つ作り、次の順番でコードを書いてください。

1. `published?` を表示する（`false` のはず）
2. `publish` を呼ぶ
3. もう一度 `published?` を表示する（`true` に変わっているはず）

作成するファイル：
```text
practice21.rb
```

表示例：
```text
false
true
```

実行するコマンド：
```bash
ruby practice21.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice21_answer.rb)</summary>

```ruby
# practice21_answer.rb
class Article
  def initialize(title, body)
    @title = title
    @body = body
    @published = false
  end

  def published?
    @published
  end

  def publish
    @published = true
  end
end

article = Article.new("はじめての記事", "Rubyを学んでいます")
puts article.published?
article.publish
puts article.published?
```

解答例を確認するときは、`practice21_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice21_answer.rb
```

`publish` メソッドを呼ぶことで、`@published` の値が変わります。インスタンスは「状態を持ち、状態を変えられる」のです。

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 22. インスタンスごとに状態が独立していることを確認する ( `practice22.rb` )

### やってみよう

新しいファイルに問21と同じ `Article` クラスをもう一度書き、記事を2つ作ってください。`article1` だけ `publish` し、`article2` はそのままにしてください。

それぞれの `published?` を表示して、状態が独立していることを確認してください。

作成するファイル：
```text
practice22.rb
```

表示例：
```text
true
false
```

実行するコマンド：
```bash
ruby practice22.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice22_answer.rb)</summary>

```ruby
# practice22_answer.rb
class Article
  def initialize(title, body)
    @title = title
    @body = body
    @published = false
  end

  def published?
    @published
  end

  def publish
    @published = true
  end
end

article1 = Article.new("はじめての記事", "Rubyを学んでいます")
article2 = Article.new("Railsとは", "WebアプリをRubyで作るフレームワークです")

article1.publish

puts article1.published?
puts article2.published?
```

解答例を確認するときは、`practice22_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice22_answer.rb
```

`article1` を公開しても、`article2` の状態は変わりません。インスタンスごとのデータは、完全に独立しています。

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 23. `Task` に完了状態を持たせる ( `practice23.rb` )

### やってみよう

`Task` クラスに `initialize(name)` を作り、`@name` に加えて `@done = false` もセットしてください。

- `done?` メソッドを作り、`@done` の値を返すようにしてください
- `finish` メソッドを作り、`@done` を `true` に変えるようにしてください

タスクを1つ作り、`done?` を確認してから `finish` を呼び出し、もう一度 `done?` を確認してください。

作成するファイル：
```text
practice23.rb
```

表示例：
```text
false
true
```

実行するコマンド：
```bash
ruby practice23.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice23_answer.rb)</summary>

```ruby
# practice23_answer.rb
class Task
  def initialize(name)
    @name = name
    @done = false
  end

  def done?
    @done
  end

  def finish
    @done = true
  end
end

task = Task.new("買い物に行く")
puts task.done?
task.finish
puts task.done?
```

解答例を確認するときは、`practice23_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice23_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 24. タスクの名前と完了状態をセットで表示する ( `practice24.rb` )

### やってみよう

新しいファイルに問23と同じ `Task` クラスをもう一度書き、そこに `status_message` メソッドを追加してください。

- `@done` が `true` なら `"#{@name}：完了"` を返す
- `@done` が `false` なら `"#{@name}：未完了"` を返す

タスクを2つ作り、1つ目だけ `finish` してから、両方の `status_message` を表示してください。

- 1つ目：`"買い物に行く"`
- 2つ目：`"レポートを書く"`

作成するファイル：
```text
practice24.rb
```

表示例：
```text
買い物に行く：完了
レポートを書く：未完了
```

実行するコマンド：
```bash
ruby practice24.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice24_answer.rb)</summary>

```ruby
# practice24_answer.rb
class Task
  def initialize(name)
    @name = name
    @done = false
  end

  def done?
    @done
  end

  def finish
    @done = true
  end

  def status_message
    if @done
      "#{@name}：完了"
    else
      "#{@name}：未完了"
    end
  end
end

task1 = Task.new("買い物に行く")
task2 = Task.new("レポートを書く")

task1.finish

puts task1.status_message
puts task2.status_message
```

解答例を確認するときは、`practice24_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice24_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 25. 配列に `Article` インスタンスを入れて `each` で表示する ( `practice25.rb` )

### やってみよう

`Article` クラスに `initialize(title, body)` と `summary` メソッド（`"#{@title}｜#{@body}"` を返す）を作ってください。

記事を3つ作り、配列 `articles` に入れてください。

- `"はじめての記事"`、`"Rubyを学んでいます"`
- `"Railsとは"`、`"WebアプリをRubyで作るフレームワークです"`
- `"クラスとは"`、`"データとメソッドをまとめる仕組みです"`

`articles.each` で1つずつ取り出し、`summary` を表示してください。

作成するファイル：
```text
practice25.rb
```

表示例：
```text
はじめての記事｜Rubyを学んでいます
Railsとは｜WebアプリをRubyで作るフレームワークです
クラスとは｜データとメソッドをまとめる仕組みです
```

実行するコマンド：
```bash
ruby practice25.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice25_answer.rb)</summary>

```ruby
# practice25_answer.rb
class Article
  def initialize(title, body)
    @title = title
    @body = body
  end

  def summary
    "#{@title}｜#{@body}"
  end
end

articles = [
  Article.new("はじめての記事", "Rubyを学んでいます"),
  Article.new("Railsとは", "WebアプリをRubyで作るフレームワークです"),
  Article.new("クラスとは", "データとメソッドをまとめる仕組みです")
]

articles.each do |article|
  puts article.summary
end
```

解答例を確認するときは、`practice25_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice25_answer.rb
```

配列にインスタンスを入れて `each` で取り出すことができます。これは第5回の配列と今回のクラスを組み合わせた形です。

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 26. 配列に `Task` インスタンスを入れて `each` で表示する ( `practice26.rb` )

### やってみよう

`Task` クラスに `initialize(name)` と `name_message`（`"タスク：#{@name}"` を返す）を作ってください。

タスクを3つ配列に入れ、`each` で1つずつ取り出して `name_message` を表示してください。

- `"買い物に行く"`
- `"レポートを書く"`
- `"部屋を片付ける"`

作成するファイル：
```text
practice26.rb
```

表示例：
```text
タスク：買い物に行く
タスク：レポートを書く
タスク：部屋を片付ける
```

実行するコマンド：
```bash
ruby practice26.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice26_answer.rb)</summary>

```ruby
# practice26_answer.rb
class Task
  def initialize(name)
    @name = name
  end

  def name_message
    "タスク：#{@name}"
  end
end

tasks = [
  Task.new("買い物に行く"),
  Task.new("レポートを書く"),
  Task.new("部屋を片付ける")
]

tasks.each do |task|
  puts task.name_message
end
```

解答例を確認するときは、`practice26_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice26_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 27. 全員の名前と合否を表示する ( `practice27.rb` )

### やってみよう

`Student` クラスに `initialize(name, score)` と `report`（`"#{@name}：#{@score}点（合否）"` を返す）を作ってください。合否は `@score >= 60` なら `"合格"`、そうでなければ `"不合格"` です。

次の4人を配列に入れ、`each` で全員の `report` を表示してください。

- 田中、80点
- 鈴木、55点
- 佐藤、92点
- 山田、60点

作成するファイル：
```text
practice27.rb
```

表示例：
```text
田中：80点（合格）
鈴木：55点（不合格）
佐藤：92点（合格）
山田：60点（合格）
```

実行するコマンド：
```bash
ruby practice27.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice27_answer.rb)</summary>

```ruby
# practice27_answer.rb
class Student
  def initialize(name, score)
    @name = name
    @score = score
  end

  def report
    if @score >= 60
      "#{@name}：#{@score}点（合格）"
    else
      "#{@name}：#{@score}点（不合格）"
    end
  end
end

students = [
  Student.new("田中", 80),
  Student.new("鈴木", 55),
  Student.new("佐藤", 92),
  Student.new("山田", 60)
]

students.each do |student|
  puts student.report
end
```

解答例を確認するときは、`practice27_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice27_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 28. 全商品の税込価格を表示する ( `practice28.rb` )

### やってみよう

`Product` クラスに `initialize(name, price)` を作り、`tax_info` メソッドで `"#{@name}：税込#{@price * 110 / 100}円"` を返すようにしてください。

次の商品を配列に入れ、`each` で全商品の `tax_info` を表示してください。

- りんご、200円
- バナナ、150円
- みかん、100円
- ぶどう、350円

作成するファイル：
```text
practice28.rb
```

表示例：
```text
りんご：税込220円
バナナ：税込165円
みかん：税込110円
ぶどう：税込385円
```

実行するコマンド：
```bash
ruby practice28.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice28_answer.rb)</summary>

```ruby
# practice28_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
  end

  def tax_info
    "#{@name}：税込#{@price * 110 / 100}円"
  end
end

products = [
  Product.new("りんご", 200),
  Product.new("バナナ", 150),
  Product.new("みかん", 100),
  Product.new("ぶどう", 350)
]

products.each do |product|
  puts product.tax_info
end
```

解答例を確認するときは、`practice28_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice28_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 29. `status_message` で状態を言葉にする ( `practice29.rb` )

### やってみよう

`Article` クラスに `initialize(title, body)`、`publish`、`published?` に加えて `status_message` メソッドを作ってください。

- `@published` が `true` なら `"公開済み"` を返す
- `@published` が `false` なら `"下書き"` を返す

記事を1つ作り、`publish` する前と後の `status_message` を表示してください。

作成するファイル：
```text
practice29.rb
```

表示例：
```text
下書き
公開済み
```

実行するコマンド：
```bash
ruby practice29.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice29_answer.rb)</summary>

```ruby
# practice29_answer.rb
class Article
  def initialize(title, body)
    @title = title
    @body = body
    @published = false
  end

  def published?
    @published
  end

  def publish
    @published = true
  end

  def status_message
    if @published
      "公開済み"
    else
      "下書き"
    end
  end
end

article = Article.new("はじめての記事", "Rubyを学んでいます")
puts article.status_message
article.publish
puts article.status_message
```

解答例を確認するときは、`practice29_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice29_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 30. 記事の一覧とその状態を表示する ( `practice30.rb` )

### やってみよう

新しいファイルに問29と同じ `Article` クラスをもう一度書き、記事を3つ作ってください。1つ目だけ `publish` し、残り2つは未公開のままにしてください。

配列に3つ入れ、`each` でタイトルと状態を一覧表示してください。

- `"はじめての記事"`、`"Rubyを学んでいます"` → 公開する
- `"Railsとは"`、`"WebアプリをRubyで作るフレームワークです"` → 公開しない
- `"クラスとは"`、`"データとメソッドをまとめる仕組みです"` → 公開しない

表示は `"タイトル：状態"` の形にしてください。

作成するファイル：
```text
practice30.rb
```

表示例：
```text
はじめての記事：公開済み
Railsとは：下書き
クラスとは：下書き
```

実行するコマンド：
```bash
ruby practice30.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice30_answer.rb)</summary>

```ruby
# practice30_answer.rb
class Article
  def initialize(title, body)
    @title = title
    @body = body
    @published = false
  end

  def publish
    @published = true
  end

  def status_message
    if @published
      "公開済み"
    else
      "下書き"
    end
  end

  def list_item
    "#{@title}：#{status_message}"
  end
end

article1 = Article.new("はじめての記事", "Rubyを学んでいます")
article2 = Article.new("Railsとは", "WebアプリをRubyで作るフレームワークです")
article3 = Article.new("クラスとは", "データとメソッドをまとめる仕組みです")

article1.publish

articles = [article1, article2, article3]

articles.each do |article|
  puts article.list_item
end
```

解答例を確認するときは、`practice30_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice30_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

課題30まで終わったら、次の `stretch.md` に進みましょう。
