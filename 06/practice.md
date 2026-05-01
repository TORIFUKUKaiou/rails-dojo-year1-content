# 第6回 練習：ハッシュで遊ぼう

## 今日のゴール

ハッシュを作り、キーを使って値を取り出し、書き換えたり追加したりできるようになる。

---

## この練習について

コピーすれば早く終わりますが、今は自分の手で打って慣れることの方が大事です。
特に最初のうちは、入力に慣れること自体が練習です。できるだけ自分で打って進めましょう。

---

## プログラムの基本構造（おさらい）

```
入力 → 処理 → 出力
```

今日は「処理」の部分で、ハッシュから必要な値を取り出します。

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
2. [このリポジトリ](https://github.com/TORIFUKUKaiou/rails-dojo-year1-content/)のページを開く (リンクを右クリックして、「リンクを新しいタブで開く」)
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

```
ruby main.rb
```

`Hello, World!` と表示されたら成功です。

ここまでできたら準備完了です。次へ進みましょう。

---

## 1. ハッシュを作る

```ruby
person = { "name" => "田中", "age" => 20 }
```

### やってみよう

自分の名前、年齢、好きな食べ物を入れたハッシュを作ってみましょう。

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "山田", "age" => 18, "food" => "カレー" }
```

</details>

---

## 2. キーを使って取り出す

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

puts person["name"]
puts person["city"]
```

### やってみよう

自分のハッシュを使って、`name` と `food` を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "山田", "age" => 18, "food" => "カレー" }

puts person["name"]
puts person["food"]
```

</details>

---

## 3. 値を書き換える・追加する

```ruby
person = { "name" => "田中", "age" => 20 }

person["age"] = 21
person["city"] = "福岡"
```

### やってみよう

自分のハッシュに、あとから `city` を追加して、`age` を1つ増やしてみましょう。

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "山田", "age" => 18, "food" => "カレー" }

person["age"] = 19
person["city"] = "長崎"

puts person["age"]
puts person["city"]
```

</details>

---

## 4. `each` で全部表示する

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

person.each do |key, value|
  puts "#{key}: #{value}"
end
```

### やってみよう

自分のハッシュの中身を、`each` を使って全部表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "山田", "age" => 19, "food" => "カレー", "city" => "長崎" }

person.each do |key, value|
  puts "#{key}: #{value}"
end
```

</details>

---

## 5. 文章の中で使う

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

puts "#{person["name"]}さんは#{person["city"]}出身です"
```

### やってみよう

自分のハッシュを使って、1文でプロフィールを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "山田", "age" => 19, "food" => "カレー", "city" => "長崎" }

puts "#{person["name"]}さんは#{person["city"]}出身で、好きな食べ物は#{person["food"]}です"
```

</details>

---

## 6. チャレンジ問題

### その1

教科ごとの点数をハッシュで作って、次のように表示してみましょう。

```
国語: 70点
数学: 85点
英語: 90点
```

<details>
<summary>解答例</summary>

```ruby
scores = { "国語" => 70, "数学" => 85, "英語" => 90 }

scores.each do |subject, score|
  puts "#{subject}: #{score}点"
end
```

</details>

### その2

次のハッシュを使って、`price` だけを表示してみましょう。

```ruby
item = { "name" => "りんご", "price" => 120, "stock" => 8 }
```

<details>
<summary>解答例</summary>

```ruby
item = { "name" => "りんご", "price" => 120, "stock" => 8 }

puts item["price"]
```

</details>

### その3

ハッシュに `stock` を追加して、次のように表示してみましょう。

```
りんごは120円で、在庫は8個です
```

<details>
<summary>解答例</summary>

```ruby
item = { "name" => "りんご", "price" => 120 }

item["stock"] = 8

puts "#{item["name"]}は#{item["price"]}円で、在庫は#{item["stock"]}個です"
```

</details>
