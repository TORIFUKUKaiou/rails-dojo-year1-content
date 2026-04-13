# 第6回 練習：ハッシュで遊ぼう

## 今日のゴール

ハッシュを作り、キーを使って値を取り出し、書き換えたり追加したりできるようになる。

---

## プログラムの基本構造（おさらい）

```
入力 → 処理 → 出力
```

今日は「処理」の部分で、ハッシュから必要な値を取り出します。

---

## 準備

1. Codespacesを起動する
2. `main.rb` を開く
3. 書き換えるたびに、ターミナルで `ruby main.rb` を実行する

※ ここには後で、Codespacesを起動して `main.rb` を開くまでのスクリーンショットを追加します。

<!-- TODO: Codespaces 起動から main.rb を開くまでのスクリーンショットを追加する -->

---

## 今日の目標（達成ライン）

- `必須（全員）`：1〜3 を終える（ハッシュを作る、キーで取り出す、値を追加・変更する）
- `推奨（余裕がある人）`：4〜5 に進む（`each` で全部見る、文章に組み込む）
- `発展（早く終わった人）`：6 のチャレンジ問題に取り組む

まずは `必須` を確実に終えましょう。

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
