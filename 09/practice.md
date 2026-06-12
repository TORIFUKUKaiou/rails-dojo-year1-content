# 第9回 練習：Ruby基礎の総復習 ── パーツをつなぎ合わせる

## 今日のゴール

- 変数、条件分岐、繰り返し、配列、ハッシュ、メソッド、クラスの役割と書き方を思い出す
- 学んだパーツを組み合わせて、注文金額を計算するプログラムを作る

---

## この練習の進め方

最初のうちは、コードを自分の手で入力することも大切です。

各問題は、次の順番で進めてください。

1. `practice01.rb` のような問題用ファイルを作る
2. 問題文を読み、自分でコードを書く
3. `ruby practice01.rb` のように実行する
4. 表示例と実行結果を比べる
5. 動いたら解答例を開く
6. 必要に応じて `practice01_answer.rb` のようなファイルを作り、解答例を実行する
7. 自分のコードと解答例の違いを確認する

自分のコードと解答例が同じでなくても、実行結果が同じになることがあります。正しく動いたあとは、変数名や処理の順番にも注目し、どちらが読みやすいかを考えてみましょう。

> [!IMPORTANT]
> 解答例を見る前に、まずは自分で考えてコードを書いてください。
> 分からない場合は、オリエンテーションやこれまでの教材を見返して構いません。

---

## 準備

<details>
<summary>前回の Codespace が残っている場合</summary>

前回の授業で Codespace を削除していない場合は、前回の Codespace が残っていることがあります。

- この授業では、操作に慣れるために、毎回新しい Codespace を作って始めます
- 前回の Codespace が残っている場合は、削除してから新しく作り直してください
- まっさらな状態から始めることで、準備の手順も少しずつ覚えられます
- 削除方法は [Codespace を削除する](../delete_codespace.md) を見てください（リンクを右クリックして、「新しいタブで開く」）

</details>

1. GitHubにログインする
2. [このリポジトリ](https://github.com/TORIFUKUKaiou/rails-dojo-year1-content/)を開く（リンクを右クリックして、「リンクを新しいタブで開く」）
3. 「Code」ボタン → 「Codespaces」タブ → 「Create codespace on main」をクリックする

    ![](../images/create-codespace-on-main.png)

4. しばらく待つ（初回は1〜2分かかります）

画面が開き、「**準備完了**」と表示されたら、プログラミングを始められます。

![](../images/created-codespace-on-main.png)

### Rubyのプログラムを書いて実行する

1. 画面左側のファイル一覧で、`content` の外側にある何もない場所を右クリックする
2. 「新しいファイル」を選び、`main.rb` と入力する
3. `main.rb` に次のコードを書く

```ruby
puts "Hello, World!"
```

Codespaces上のVS Codeでは、自動保存が有効になっています。コードを書き換えたら、ターミナルで次を実行してください。

```bash
ruby main.rb
```

次のように表示されたら成功です。

```text
Hello, World!
```

`main.rb` は動作確認用のファイルです。ここからは、問題ごとに `practice01.rb`、`practice02.rb` のような新しいファイルを作って進めます。

---

# 基本の復習

## 📝 1. 文字列と計算結果を表示する（`practice01.rb`）

### やってみよう

`puts` を使い、次の2つを別々の行に表示してください。

- 文字列 `"Rubyの復習を始めます"`
- `150 + 80` の計算結果

### 表示例

```text
Rubyの復習を始めます
230
```

### 実行するコマンド

```bash
ruby practice01.rb
```

<details>
<summary>解答例（practice01_answer.rb）</summary>

```ruby
puts "Rubyの復習を始めます"
puts 150 + 80
```

</details>

---

## 📝 2. 変数の値を更新する（`practice02.rb`）

### やってみよう

変数 `total` に `120` を代入してください。

次に、現在の `total` に `80` を足した結果を、もう一度 `total` に代入してください。最後に、`total` の値を表示してください。

### 表示例

```text
200
```

<details>
<summary>解答例（practice02_answer.rb）</summary>

```ruby
total = 120
total = total + 80

puts total
```

</details>

---

## 📝 3. 変数を文字列に埋め込む（`practice03.rb`）

### やってみよう

次の値を変数に代入してください。

- `item_name`：`"カレー"`
- `price`：`750`

`#{}` を使い、次のように表示してください。

### 表示例

```text
カレーは750円です
```

<details>
<summary>解答例（practice03_answer.rb）</summary>

```ruby
item_name = "カレー"
price = 750

puts "#{item_name}は#{price}円です"
```

</details>

---

# 条件分岐

## 📝 4. `if` と `else` で判定する（`practice04.rb`）

### やってみよう

変数 `score` に `85` を代入してください。

- `score` が `80` 以上なら `"合格です"`
- それ以外なら `"不合格です"`

と表示してください。

### 表示例

```text
合格です
```

<details>
<summary>解答例（practice04_answer.rb）</summary>

```ruby
score = 85

if score >= 80
  puts "合格です"
else
  puts "不合格です"
end
```

</details>

---

## 📝 5. `elsif` で条件を増やす（`practice05.rb`）

### やってみよう

変数 `age` に `15` を代入し、次の条件で表示を切り替えてください。

- `18` 以上：`"大人です"`
- `12` 以上：`"中高生です"`
- それ以外：`"子供です"`

### 表示例

```text
中高生です
```

<details>
<summary>解答例（practice05_answer.rb）</summary>

```ruby
age = 15

if age >= 18
  puts "大人です"
elsif age >= 12
  puts "中高生です"
else
  puts "子供です"
end
```

</details>

---

## 📝 6. `||` を使って判定する（`practice06.rb`）

### やってみよう

次の値を変数に代入してください。

```ruby
is_member = true
has_coupon = false
```

`is_member` または `has_coupon` のどちらかが `true` なら `"割引対象です"`、どちらも `false` なら `"通常料金です"` と表示してください。

### 表示例

```text
割引対象です
```

<details>
<summary>解答例（practice06_answer.rb）</summary>

```ruby
is_member = true
has_coupon = false

if is_member || has_coupon
  puts "割引対象です"
else
  puts "通常料金です"
end
```

</details>

---

## 📝 7. 入力された値を判定する（`practice07.rb`）

### やってみよう

1. `"年齢を入力してください"` と表示する
2. `gets.to_i` で年齢を受け取る
3. `18` 以上なら `"大人です"`、それ以外なら `"未成年です"` と表示する

### 実行例

```text
年齢を入力してください
20
大人です
```

> [!NOTE]
> 例の `20` は、プログラムが表示する値ではありません。実行中に自分で入力する値です。

<details>
<summary>解答例（practice07_answer.rb）</summary>

```ruby
puts "年齢を入力してください"
age = gets.to_i

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

</details>

---

# 繰り返し・配列・範囲

## 📝 8. `times` で繰り返す（`practice08.rb`）

### やってみよう

`times` を使い、`"わっしょい"` を3回表示してください。

### 表示例

```text
わっしょい
わっしょい
わっしょい
```

<details>
<summary>解答例（practice08_answer.rb）</summary>

```ruby
3.times do
  puts "わっしょい"
end
```

</details>

---

## 📝 9. 繰り返した回数を表示する（`practice09.rb`）

### やってみよう

`times` のループ変数を使い、`"1回目です"` から `"5回目です"` まで表示してください。

ループ変数は `0` から始まります。表示するときは `1` を足してください。

### 表示例

```text
1回目です
2回目です
3回目です
4回目です
5回目です
```

<details>
<summary>解答例（practice09_answer.rb）</summary>

```ruby
5.times do |i|
  puts "#{i + 1}回目です"
end
```

</details>

---

## 📝 10. 配列の要素を書き換える（`practice10.rb`）

### やってみよう

次の配列を作ってください。

```ruby
foods = ["カレー", "ラーメン", "寿司"]
```

2番目の要素を `"うどん"` に書き換えたあと、3つの要素を別々の行に表示してください。

### 表示例

```text
カレー
うどん
寿司
```

<details>
<summary>解答例（practice10_answer.rb）</summary>

```ruby
foods = ["カレー", "ラーメン", "寿司"]
foods[1] = "うどん"

puts foods[0]
puts foods[1]
puts foods[2]
```

</details>

---

## 📝 11. 配列に要素を追加して繰り返す（`practice11.rb`）

### やってみよう

`"カレー"` と `"ラーメン"` を持つ配列 `foods` を作ってください。

`<<` を使って `"寿司"` を追加し、`each` ですべての要素を表示してください。

### 表示例

```text
カレー
ラーメン
寿司
```

<details>
<summary>解答例（practice11_answer.rb）</summary>

```ruby
foods = ["カレー", "ラーメン"]
foods << "寿司"

foods.each do |food|
  puts food
end
```

</details>

---

## 📝 12. 配列の合計を計算する（`practice12.rb`）

### やってみよう

次の配列を作ってください。

```ruby
scores = [80, 90, 70]
```

変数 `total` を `0` で用意し、`each` を使ってすべての点数を足してください。最後に合計を表示してください。

### 表示例

```text
240
```

<details>
<summary>解答例（practice12_answer.rb）</summary>

```ruby
scores = [80, 90, 70]
total = 0

scores.each do |score|
  total = total + score
end

puts total
```

</details>

---

## 📝 13. 範囲オブジェクトを繰り返す（`practice13.rb`）

### やってみよう

`1..5` を変数 `numbers` に代入してください。

`each` を使い、範囲内の数値を1つずつ取り出して、それぞれを2倍した値を表示してください。

### 表示例

```text
2
4
6
8
10
```

<details>
<summary>解答例（practice13_answer.rb）</summary>

```ruby
numbers = 1..5

numbers.each do |number|
  puts number * 2
end
```

</details>

---

# ハッシュとデータの組み合わせ

## 📝 14. ハッシュの値を書き換えて追加する（`practice14.rb`）

### やってみよう

次のハッシュを作ってください。

```ruby
item = {
  "name" => "カレー",
  "price" => 700
}
```

次の操作を行ってください。

1. `"price"` の値を `750` に書き換える
2. `"category"` というキーと `"主食"` という値を追加する
3. `"name"`、`"price"`、`"category"` の値を表示する

### 表示例

```text
カレー
750
主食
```

<details>
<summary>解答例（practice14_answer.rb）</summary>

```ruby
item = {
  "name" => "カレー",
  "price" => 700
}

item["price"] = 750
item["category"] = "主食"

puts item["name"]
puts item["price"]
puts item["category"]
```

</details>

---

## 📝 15. ハッシュのキーと値を繰り返す（`practice15.rb`）

### やってみよう

次のハッシュを作ってください。

```ruby
person = {
  "name" => "田中",
  "age" => 20,
  "city" => "福岡"
}
```

`each` を使い、すべてのキーと値を `"キー: 値"` の形式で表示してください。

### 表示例

```text
name: 田中
age: 20
city: 福岡
```

<details>
<summary>解答例（practice15_answer.rb）</summary>

```ruby
person = {
  "name" => "田中",
  "age" => 20,
  "city" => "福岡"
}

person.each do |key, value|
  puts "#{key}: #{value}"
end
```

</details>

---

## 📝 16. ハッシュを配列に入れる（`practice16.rb`）

### やってみよう

次の3人を、ハッシュの配列 `members` で表してください。

- 佐藤：19歳
- 鈴木：22歳
- 高橋：20歳

`each` を使い、名前と年齢を表示してください。

### 表示例

```text
佐藤さんは19歳です
鈴木さんは22歳です
高橋さんは20歳です
```

<details>
<summary>解答例（practice16_answer.rb）</summary>

```ruby
members = [
  { "name" => "佐藤", "age" => 19 },
  { "name" => "鈴木", "age" => 22 },
  { "name" => "高橋", "age" => 20 }
]

members.each do |member|
  puts "#{member["name"]}さんは#{member["age"]}歳です"
end
```

</details>

---

## 📝 17. ハッシュの値に配列を入れる（`practice17.rb`）

### やってみよう

次のデータをハッシュ `user` で表してください。

- `"name"`：`"田中"`
- `"favorites"`：`["カレー", "ラーメン"]`

配列の最初の料理を取り出し、次のように表示してください。

### 表示例

```text
田中さんのお気に入りはカレーです
```

<details>
<summary>解答例（practice17_answer.rb）</summary>

```ruby
user = {
  "name" => "田中",
  "favorites" => ["カレー", "ラーメン"]
}

puts "#{user["name"]}さんのお気に入りは#{user["favorites"][0]}です"
```

</details>

---

# メソッド

## 📝 18. 引数を受け取るメソッドを作る（`practice18.rb`）

### やってみよう

名前を引数として受け取り、`"こんにちは、○○さん！"` という文字列を戻り値として返す `make_message` メソッドを作ってください。

`"佐藤"` と `"鈴木"` を渡して呼び出し、結果を表示してください。

### 表示例

```text
こんにちは、佐藤さん！
こんにちは、鈴木さん！
```

<details>
<summary>解答例（practice18_answer.rb）</summary>

```ruby
def make_message(name)
  "こんにちは、#{name}さん！"
end

puts make_message("佐藤")
puts make_message("鈴木")
```

</details>

---

## 📝 19. メソッドの中で条件分岐する（`practice19.rb`）

### やってみよう

点数を引数として受け取る `judge` メソッドを作ってください。

- `80` 以上なら `"合格"`
- それ以外なら `"不合格"`

を戻り値として返します。

`85` と `50` を渡し、結果を表示してください。

### 表示例

```text
合格
不合格
```

<details>
<summary>解答例（practice19_answer.rb）</summary>

```ruby
def judge(score)
  if score >= 80
    "合格"
  else
    "不合格"
  end
end

puts judge(85)
puts judge(50)
```

</details>

---

## 📝 20. 必要な値を引数で渡す（`practice20.rb`）

### やってみよう

通常価格と割引額を受け取り、割引後の価格を返す `calculate_discount` メソッドを作ってください。

メソッドの外で `discount = 150` を定義し、通常価格 `1000` と `discount` をメソッドへ渡してください。

### 表示例

```text
850
```

> [!NOTE]
> メソッドの外で作ったローカル変数は、メソッドの中から直接使えません。必要な値は引数として渡します。

<details>
<summary>解答例（practice20_answer.rb）</summary>

```ruby
def calculate_discount(price, discount)
  price - discount
end

discount = 150
result = calculate_discount(1000, discount)

puts result
```

</details>

---

# クラスとインスタンス

## 📝 21. クラスからインスタンスを作る（`practice21.rb`）

### やってみよう

`Article` クラスを作り、その中に `"記事のタイトル欄"` を返す `title_message` メソッドを定義してください。

`Article.new` でインスタンスを作り、`title_message` の戻り値を表示してください。

### 表示例

```text
記事のタイトル欄
```

<details>
<summary>解答例（practice21_answer.rb）</summary>

```ruby
class Article
  def title_message
    "記事のタイトル欄"
  end
end

article = Article.new

puts article.title_message
```

</details>

---

## 📝 22. インスタンスごとに値を保存する（`practice22.rb`）

### やってみよう

`Article` クラスに次の2つのメソッドを作ってください。

- `initialize(title)`：受け取った `title` を `@title` に代入する
- `title_message`：`"記事タイトル：#{@title}"` を返す

次の2つのインスタンスを作り、それぞれのタイトルを表示してください。

- `"Rubyとは"`
- `"Railsを学ぶ"`

### 表示例

```text
記事タイトル：Rubyとは
記事タイトル：Railsを学ぶ
```

<details>
<summary>解答例（practice22_answer.rb）</summary>

```ruby
class Article
  def initialize(title)
    @title = title
  end

  def title_message
    "記事タイトル：#{@title}"
  end
end

article1 = Article.new("Rubyとは")
article2 = Article.new("Railsを学ぶ")

puts article1.title_message
puts article2.title_message
```

</details>

---

# 総合問題：注文管理プログラム

ここからは、これまでに学んだパーツを組み合わせます。

## 📝 23. 商品データと条件分岐を組み合わせる（`practice23.rb`）

### やってみよう

次の商品をハッシュ `item` で表してください。

- 商品名：`"カレー"`
- 価格：`1200`

価格が `1000` 円以上なら、100円引きにします。支払金額を変数 `total` に保存し、次の形式で表示してください。

### 表示例

```text
カレーの支払金額は1100円です
```

<details>
<summary>解答例（practice23_answer.rb）</summary>

```ruby
item = {
  "name" => "カレー",
  "price" => 1200
}

total = item["price"]

if total >= 1000
  total = total - 100
end

puts "#{item["name"]}の支払金額は#{total}円です"
```

</details>

---

## 📝 24. 条件に合う商品だけを表示する（`practice24.rb`）

### やってみよう

次の商品を、ハッシュの配列 `items` で表してください。

- カレー：700円
- サラダ：300円
- ラーメン：850円

`each` と `if` を使い、価格が `500` 円以上の商品だけを表示してください。

### 表示例

```text
カレー：700円
ラーメン：850円
```

<details>
<summary>解答例（practice24_answer.rb）</summary>

```ruby
items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

items.each do |item|
  if item["price"] >= 500
    puts "#{item["name"]}：#{item["price"]}円"
  end
end
```

</details>

---

## 📝 25. 商品の合計金額を返すメソッドを作る（`practice25.rb`）

### やってみよう

商品の配列を引数として受け取り、すべての商品の合計金額を返す `calculate_total` メソッドを作ってください。

問24と同じ `items` を渡し、戻り値を表示してください。

### 表示例

```text
1850
```

<details>
<summary>解答例（practice25_answer.rb）</summary>

```ruby
def calculate_total(items)
  total = 0

  items.each do |item|
    total = total + item["price"]
  end

  total
end

items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

puts calculate_total(items)
```

</details>

---

## 📝 26. `Order` クラスを作る（`practice26.rb`）

### やってみよう

注文を表す `Order` クラスを作ってください。

`initialize(items)` で受け取った商品の配列を、インスタンス変数 `@items` に保存します。

問24と同じ商品データを使って、`Order` インスタンスを作ってください。

この問題では、画面への出力はありません。エラーが表示されずにプログラムが終了すれば成功です。

<details>
<summary>解答例（practice26_answer.rb）</summary>

```ruby
class Order
  def initialize(items)
    @items = items
  end
end

items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

order = Order.new(items)
```

</details>

---

## 📝 27. 合計金額を計算するメソッドを追加する（`practice27.rb`）

### やってみよう

問26の `Order` クラスに、`total_price` メソッドを追加してください。

`total_price` は、`@items` に入っているすべての商品の合計金額を返します。

### 表示例

```text
1850
```

<details>
<summary>解答例（practice27_answer.rb）</summary>

```ruby
class Order
  def initialize(items)
    @items = items
  end

  def total_price
    total = 0

    @items.each do |item|
      total = total + item["price"]
    end

    total
  end
end

items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

order = Order.new(items)

puts order.total_price
```

</details>

---

## 📝 28. 商品数を返すメソッドを追加する（`practice28.rb`）

### やってみよう

問27の `Order` クラスに、`item_count` メソッドを追加してください。

`item_count` は、`@items` に入っている商品の個数を返します。配列の `length` メソッドを使ってください。

### 表示例

```text
3
```

<details>
<summary>解答例（practice28_answer.rb）</summary>

```ruby
class Order
  def initialize(items)
    @items = items
  end

  def total_price
    total = 0

    @items.each do |item|
      total = total + item["price"]
    end

    total
  end

  def item_count
    @items.length
  end
end

items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

order = Order.new(items)

puts order.item_count
```

</details>

---

## 📝 29. 送料込みの金額を返すメソッドを追加する（`practice29.rb`）

### やってみよう

問28の `Order` クラスに、`total_price_with_shipping` メソッドを追加してください。

送料の条件は次のとおりです。

- 商品の合計金額が `3000` 円未満：送料500円を加える
- 商品の合計金額が `3000` 円以上：送料を加えない

次の2つの注文で確認してください。

- カレー700円、ラーメン850円
- カレー700円、ステーキ2500円

### 表示例

```text
2050
3200
```

<details>
<summary>解答例（practice29_answer.rb）</summary>

```ruby
class Order
  def initialize(items)
    @items = items
  end

  def total_price
    total = 0

    @items.each do |item|
      total = total + item["price"]
    end

    total
  end

  def item_count
    @items.length
  end

  def total_price_with_shipping
    total = total_price

    if total < 3000
      total = total + 500
    end

    total
  end
end

items1 = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "ラーメン", "price" => 850 }
]

items2 = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "ステーキ", "price" => 2500 }
]

order1 = Order.new(items1)
order2 = Order.new(items2)

puts order1.total_price_with_shipping
puts order2.total_price_with_shipping
```

</details>

---

## 📝 30. 複数の注文をまとめて処理する（`practice30.rb`）

### やってみよう

問29と同じ `Order` クラスを使います。

次の3つの注文を作ってください。

1. カレー700円、ラーメン850円
2. カレー700円、ステーキ2500円
3. サラダ300円、ジュース200円

3つの `Order` インスタンスを配列 `orders` に入れ、`each` を使って送料込みの合計金額を表示してください。

### 表示例

```text
注文の合計金額（送料込み）：2050円
注文の合計金額（送料込み）：3200円
注文の合計金額（送料込み）：1000円
```

<details>
<summary>解答例（practice30_answer.rb）</summary>

```ruby
class Order
  def initialize(items)
    @items = items
  end

  def total_price
    total = 0

    @items.each do |item|
      total = total + item["price"]
    end

    total
  end

  def item_count
    @items.length
  end

  def total_price_with_shipping
    total = total_price

    if total < 3000
      total = total + 500
    end

    total
  end
end

order1 = Order.new([
  { "name" => "カレー", "price" => 700 },
  { "name" => "ラーメン", "price" => 850 }
])

order2 = Order.new([
  { "name" => "カレー", "price" => 700 },
  { "name" => "ステーキ", "price" => 2500 }
])

order3 = Order.new([
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ジュース", "price" => 200 }
])

orders = [order1, order2, order3]

orders.each do |order|
  puts "注文の合計金額（送料込み）：#{order.total_price_with_shipping}円"
end
```

</details>

---

## 練習のまとめ

30問を通して、Rubyの基本パーツを1つずつ振り返り、最後は複数のパーツを組み合わせて注文管理プログラムを作りました。

うまく書けなかった問題は、そのままにせず、オリエンテーションやこれまでの教材を見返して、もう一度書いてみましょう。
