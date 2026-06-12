# 第9回 発展練習：Rubyのパーツを組み合わせて、さらに先へ進もう

## この練習について

この発展練習は、Practiceを早く終えた人のための追加課題です。

Practiceと同じように、問題ごとにファイルを作って進めてください。

1. `stretch01.rb` のようなファイルを作る
2. 自分で考えてコードを書く
3. `ruby stretch01.rb` のように実行する
4. 表示例と実行結果を比べる
5. 動いたら解答例を開く
6. 自分のコードと解答例の違いを確認する

> [!IMPORTANT]
> この発展練習では、まだ授業で詳しく扱っていない書き方も登場します。
> TIPSを読んだり、Webで検索したり、生成AIへ相談したりして構いません。
>
> ただし、答えをそのまま写すだけではなく、「なぜこのコードで動くのか」を説明できるようにしましょう。

## 進め方のコツ

この発展練習は、次の5つのテーマに分かれています。

- **テーマ1：計算と条件分岐**
- **テーマ2：配列とハッシュのデータ処理**
- **テーマ3：メソッドで処理を整理する**
- **テーマ4：クラスで状態を管理する**
- **テーマ5：検索・生成AIも使うチャレンジ課題**

すべての問題を順番に解いても構いません。興味のあるテーマから始めても構いません。

---

# テーマ1：計算と条件分岐

## 📝 1. 偶数か奇数かを判定する（`stretch01.rb`）

変数 `number` に `17` を代入してください。

`number` が偶数なら `"偶数です"`、奇数なら `"奇数です"` と表示してください。

### TIPS

`%` は、割り算の余りを求める演算子です。

```ruby
puts 10 % 3
```

### 表示例

```text
奇数です
```

<details>
<summary>解答例</summary>

```ruby
number = 17

if number % 2 == 0
  puts "偶数です"
else
  puts "奇数です"
end
```

</details>

---

## 📝 2. 3の倍数を判定する（`stretch02.rb`）

変数 `number` に `21` を代入してください。

3の倍数なら `"3の倍数です"`、それ以外なら `"3の倍数ではありません"` と表示してください。

<details>
<summary>解答例</summary>

```ruby
number = 21

if number % 3 == 0
  puts "3の倍数です"
else
  puts "3の倍数ではありません"
end
```

</details>

---

## 📝 3. 最大値を表示する（`stretch03.rb`）

変数 `a` に `18`、変数 `b` に `25` を代入してください。

大きいほうの値を表示してください。

### 表示例

```text
25
```

<details>
<summary>解答例</summary>

```ruby
a = 18
b = 25

if a > b
  puts a
else
  puts b
end
```

</details>

---

## 📝 4. 3つの数値から最大値を探す（`stretch04.rb`）

変数 `a`、`b`、`c` に、それぞれ `12`、`30`、`24` を代入してください。

3つの中で最も大きい値を表示してください。

<details>
<summary>解答例</summary>

```ruby
a = 12
b = 30
c = 24

max = a

if b > max
  max = b
end

if c > max
  max = c
end

puts max
```

</details>

---

## 📝 5. 料金区分を判定する（`stretch05.rb`）

変数 `age` に `67` を代入してください。

- 12歳未満：`"子供料金"`
- 65歳以上：`"シニア料金"`
- それ以外：`"通常料金"`

と表示してください。

<details>
<summary>解答例</summary>

```ruby
age = 67

if age < 12
  puts "子供料金"
elsif age >= 65
  puts "シニア料金"
else
  puts "通常料金"
end
```

</details>

---

## 📝 6. BMIを計算する（`stretch06.rb`）

身長 `1.70` メートル、体重 `65.0` キログラムとしてBMIを計算してください。

BMIは、次の式で求めます。

```text
体重 ÷ 身長 ÷ 身長
```

計算結果を表示してください。

<details>
<summary>解答例</summary>

```ruby
height = 1.70
weight = 65.0

bmi = weight / height / height

puts bmi
```

</details>

---

## 📝 7. BMIから判定する（`stretch07.rb`）

問6のBMIを使い、次の条件で判定してください。

- 18.5未満：`"やせ"`
- 25未満：`"普通"`
- それ以外：`"肥満"`

<details>
<summary>解答例</summary>

```ruby
height = 1.70
weight = 65.0
bmi = weight / height / height

if bmi < 18.5
  puts "やせ"
elsif bmi < 25
  puts "普通"
else
  puts "肥満"
end
```

</details>

---

## 📝 8. うるう年を判定する（`stretch08.rb`）

変数 `year` に `2024` を代入してください。

次の条件を使って、うるう年かどうかを判定してください。

- 400で割り切れる年は、うるう年
- 100で割り切れる年は、うるう年ではない
- 4で割り切れる年は、うるう年
- それ以外は、うるう年ではない

### 表示例

```text
うるう年です
```

<details>
<summary>解答例</summary>

```ruby
year = 2024

if year % 400 == 0
  puts "うるう年です"
elsif year % 100 == 0
  puts "うるう年ではありません"
elsif year % 4 == 0
  puts "うるう年です"
else
  puts "うるう年ではありません"
end
```

</details>

---

## 📝 9. 数当てゲームを作る（`stretch09.rb`）

正解を `7` とします。

キーボードから数値を入力し、次のように表示してください。

- 正解より大きい：`"もっと小さいです"`
- 正解より小さい：`"もっと大きいです"`
- 正解：`"正解です"`

<details>
<summary>解答例</summary>

```ruby
answer = 7

puts "数値を入力してください"
number = gets.to_i

if number > answer
  puts "もっと小さいです"
elsif number < answer
  puts "もっと大きいです"
else
  puts "正解です"
end
```

</details>

---

## 📝 10. 税込み価格を計算する（`stretch10.rb`）

価格 `1200` 円、税率 `0.1` として税込み価格を計算してください。

小数点以下を切り捨てた整数で表示してください。

### TIPS

小数を整数へ変換するときは、`to_i` が使えます。

<details>
<summary>解答例</summary>

```ruby
price = 1200
tax_rate = 0.1

tax_included_price = (price + price * tax_rate).to_i

puts tax_included_price
```

</details>

---

# テーマ2：配列とハッシュのデータ処理

## 📝 11. 配列の最大値を探す（`stretch11.rb`）

次の配列から、最大値を探して表示してください。

```ruby
numbers = [14, 8, 23, 17, 5]
```

`max` メソッドは使わず、`each` と `if` を使ってください。

<details>
<summary>解答例</summary>

```ruby
numbers = [14, 8, 23, 17, 5]
max_number = numbers[0]

numbers.each do |number|
  if number > max_number
    max_number = number
  end
end

puts max_number
```

</details>

---

## 📝 12. 配列の最小値を探す（`stretch12.rb`）

次の配列から、最小値を探して表示してください。

```ruby
numbers = [14, 8, 23, 17, 5]
```

<details>
<summary>解答例</summary>

```ruby
numbers = [14, 8, 23, 17, 5]
min_number = numbers[0]

numbers.each do |number|
  if number < min_number
    min_number = number
  end
end

puts min_number
```

</details>

---

## 📝 13. 平均点を計算する（`stretch13.rb`）

次の配列の平均点を計算してください。

```ruby
scores = [80, 90, 70, 60]
```

### 表示例

```text
75.0
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 90, 70, 60]
total = 0

scores.each do |score|
  total = total + score
end

average = total.to_f / scores.length

puts average
```

</details>

---

## 📝 14. 偶数だけを表示する（`stretch14.rb`）

次の配列から、偶数だけを表示してください。

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
```

<details>
<summary>解答例</summary>

```ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8]

numbers.each do |number|
  if number % 2 == 0
    puts number
  end
end
```

</details>

---

## 📝 15. 条件に合う値を新しい配列へ入れる（`stretch15.rb`）

次の配列から、80点以上の値だけを新しい配列 `passed_scores` に入れてください。

```ruby
scores = [55, 80, 92, 67, 88]
```

最後に `passed_scores` を表示してください。

### TIPS

配列へ値を追加するときは、`<<` が使えます。

<details>
<summary>解答例</summary>

```ruby
scores = [55, 80, 92, 67, 88]
passed_scores = []

scores.each do |score|
  if score >= 80
    passed_scores << score
  end
end

puts passed_scores
```

</details>

---

## 📝 16. 商品の合計金額を計算する（`stretch16.rb`）

次の商品データを使い、合計金額を表示してください。

```ruby
items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ジュース", "price" => 200 }
]
```

<details>
<summary>解答例</summary>

```ruby
items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ジュース", "price" => 200 }
]

total = 0

items.each do |item|
  total = total + item["price"]
end

puts total
```

</details>

---

## 📝 17. 最も高い商品を探す（`stretch17.rb`）

問16と同じ商品データから、価格が最も高い商品の名前と価格を表示してください。

### 表示例

```text
最も高い商品：カレー（700円）
```

<details>
<summary>解答例</summary>

```ruby
items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ジュース", "price" => 200 }
]

most_expensive = items[0]

items.each do |item|
  if item["price"] > most_expensive["price"]
    most_expensive = item
  end
end

puts "最も高い商品：#{most_expensive["name"]}（#{most_expensive["price"]}円）"
```

</details>

---

## 📝 18. 在庫がある商品だけを表示する（`stretch18.rb`）

次の商品データから、在庫が1個以上ある商品だけを表示してください。

```ruby
products = [
  { "name" => "りんご", "stock" => 3 },
  { "name" => "バナナ", "stock" => 0 },
  { "name" => "みかん", "stock" => 5 }
]
```

<details>
<summary>解答例</summary>

```ruby
products = [
  { "name" => "りんご", "stock" => 3 },
  { "name" => "バナナ", "stock" => 0 },
  { "name" => "みかん", "stock" => 5 }
]

products.each do |product|
  if product["stock"] > 0
    puts "#{product["name"]}：#{product["stock"]}個"
  end
end
```

</details>

---

## 📝 19. 人数を年代別に数える（`stretch19.rb`）

次のデータを使い、20歳未満と20歳以上の人数を数えて表示してください。

```ruby
members = [
  { "name" => "佐藤", "age" => 19 },
  { "name" => "鈴木", "age" => 22 },
  { "name" => "高橋", "age" => 17 },
  { "name" => "田中", "age" => 25 }
]
```

### 表示例

```text
20歳未満：2人
20歳以上：2人
```

<details>
<summary>解答例</summary>

```ruby
members = [
  { "name" => "佐藤", "age" => 19 },
  { "name" => "鈴木", "age" => 22 },
  { "name" => "高橋", "age" => 17 },
  { "name" => "田中", "age" => 25 }
]

under_20 = 0
over_20 = 0

members.each do |member|
  if member["age"] < 20
    under_20 = under_20 + 1
  else
    over_20 = over_20 + 1
  end
end

puts "20歳未満：#{under_20}人"
puts "20歳以上：#{over_20}人"
```

</details>

---

## 📝 20. 単語の出現回数を数える（`stretch20.rb`）

次の配列に含まれる単語の回数を、ハッシュで数えてください。

```ruby
words = ["ruby", "rails", "ruby", "html", "ruby", "rails"]
```

### 表示例

```text
ruby: 3
rails: 2
html: 1
```

### TIPS

まだ存在しないキーへ最初に `0` を入れてから、1ずつ増やします。

<details>
<summary>解答例</summary>

```ruby
words = ["ruby", "rails", "ruby", "html", "ruby", "rails"]
counts = {}

words.each do |word|
  if counts[word] == nil
    counts[word] = 0
  end

  counts[word] = counts[word] + 1
end

counts.each do |word, count|
  puts "#{word}: #{count}"
end
```

</details>

---

# テーマ3：メソッドで処理を整理する

## 📝 21. 偶数かどうかを返すメソッド（`stretch21.rb`）

数値を引数として受け取り、偶数なら `true`、奇数なら `false` を返す `even_number?` メソッドを作ってください。

<details>
<summary>解答例</summary>

```ruby
def even_number?(number)
  number % 2 == 0
end

puts even_number?(8)
puts even_number?(7)
```

</details>

---

## 📝 22. 最大値を返すメソッド（`stretch22.rb`）

2つの数値を受け取り、大きいほうを返す `larger` メソッドを作ってください。

<details>
<summary>解答例</summary>

```ruby
def larger(a, b)
  if a > b
    a
  else
    b
  end
end

puts larger(12, 20)
```

</details>

---

## 📝 23. 配列の合計を返すメソッド（`stretch23.rb`）

数値の配列を受け取り、合計を返す `sum_numbers` メソッドを作ってください。

<details>
<summary>解答例</summary>

```ruby
def sum_numbers(numbers)
  total = 0

  numbers.each do |number|
    total = total + number
  end

  total
end

puts sum_numbers([10, 20, 30])
```

</details>

---

## 📝 24. 配列の平均を返すメソッド（`stretch24.rb`）

数値の配列を受け取り、平均を返す `average` メソッドを作ってください。

<details>
<summary>解答例</summary>

```ruby
def average(numbers)
  total = 0

  numbers.each do |number|
    total = total + number
  end

  total.to_f / numbers.length
end

puts average([80, 90, 70])
```

</details>

---

## 📝 25. 条件に合う要素の数を返す（`stretch25.rb`）

点数の配列を受け取り、80点以上の点数がいくつあるかを返す `count_passed` メソッドを作ってください。

<details>
<summary>解答例</summary>

```ruby
def count_passed(scores)
  count = 0

  scores.each do |score|
    if score >= 80
      count = count + 1
    end
  end

  count
end

puts count_passed([50, 80, 92, 70, 88])
```

</details>

---

## 📝 26. 商品の合計金額を返す（`stretch26.rb`）

商品のハッシュ配列を受け取り、合計金額を返す `calculate_total` メソッドを作ってください。

<details>
<summary>解答例</summary>

```ruby
def calculate_total(items)
  total = 0

  items.each do |item|
    total = total + item["price"]
  end

  total
end
```

</details>

---

## 📝 27. 条件付きの送料を返す（`stretch27.rb`）

合計金額を受け取り、3000円未満なら500円、3000円以上なら0円を返す `shipping_fee` メソッドを作ってください。

<details>
<summary>解答例</summary>

```ruby
def shipping_fee(total)
  if total < 3000
    500
  else
    0
  end
end

puts shipping_fee(2500)
puts shipping_fee(3200)
```

</details>

---

## 📝 28. 注文金額を計算する（`stretch28.rb`）

商品の配列を受け取り、商品合計と送料を合わせた支払金額を返す `order_total` メソッドを作ってください。

問26の `calculate_total` と、問27の `shipping_fee` を使って構いません。

<details>
<summary>解答例</summary>

```ruby
def calculate_total(items)
  total = 0

  items.each do |item|
    total = total + item["price"]
  end

  total
end

def shipping_fee(total)
  if total < 3000
    500
  else
    0
  end
end

def order_total(items)
  total = calculate_total(items)
  total + shipping_fee(total)
end
```

</details>

---

## 📝 29. 文字列を指定回数つなぐ（`stretch29.rb`）

文字列と回数を受け取り、その文字列を指定回数つないで返す `repeat_text` メソッドを作ってください。

### 表示例

```text
RubyRubyRuby
```

<details>
<summary>解答例</summary>

```ruby
def repeat_text(text, count)
  result = ""

  count.times do
    result = result + text
  end

  result
end

puts repeat_text("Ruby", 3)
```

</details>

---

## 📝 30. 回文を判定する（`stretch30.rb`）

文字列を受け取り、前から読んでも後ろから読んでも同じなら `true` を返す `palindrome?` メソッドを作ってください。

### TIPS

文字列を逆順にするには、`reverse` メソッドが使えます。

<details>
<summary>解答例</summary>

```ruby
def palindrome?(text)
  text == text.reverse
end

puts palindrome?("しんぶんし")
puts palindrome?("ruby")
```

</details>

---

# テーマ4：クラスで状態を管理する

## 📝 31. `Counter` クラスを作る（`stretch31.rb`）

数値を数える `Counter` クラスを作ってください。

初期値は `0` とし、現在の値を返す `value` メソッドを作ってください。

<details>
<summary>解答例</summary>

```ruby
class Counter
  def initialize
    @value = 0
  end

  def value
    @value
  end
end
```

</details>

---

## 📝 32. カウントを増やす（`stretch32.rb`）

`Counter` クラスに、値を1増やす `increment` メソッドを追加してください。

<details>
<summary>解答例</summary>

```ruby
class Counter
  def initialize
    @value = 0
  end

  def increment
    @value = @value + 1
  end

  def value
    @value
  end
end
```

</details>

---

## 📝 33. 指定した数だけ増やす（`stretch33.rb`）

`Counter` クラスに、引数で受け取った数だけ増やす `add` メソッドを追加してください。

<details>
<summary>解答例</summary>

```ruby
class Counter
  def initialize
    @value = 0
  end

  def add(number)
    @value = @value + number
  end

  def value
    @value
  end
end
```

</details>

---

## 📝 34. 値を0に戻す（`stretch34.rb`）

`Counter` クラスに、値を0へ戻す `reset` メソッドを追加してください。

<details>
<summary>解答例</summary>

```ruby
class Counter
  def initialize
    @value = 0
  end

  def increment
    @value = @value + 1
  end

  def reset
    @value = 0
  end

  def value
    @value
  end
end
```

</details>

---

## 📝 35. `BankAccount` クラスを作る（`stretch35.rb`）

銀行口座を表す `BankAccount` クラスを作ってください。

- `initialize(owner)` で口座名義を受け取る
- 残高の初期値は `0`
- `info` で `"山田さんの残高：0円"` のように返す

<details>
<summary>解答例</summary>

```ruby
class BankAccount
  def initialize(owner)
    @owner = owner
    @balance = 0
  end

  def info
    "#{@owner}さんの残高：#{@balance}円"
  end
end
```

</details>

---

## 📝 36. 入金する（`stretch36.rb`）

`BankAccount` クラスに、金額を加える `deposit(amount)` メソッドを追加してください。

<details>
<summary>解答例</summary>

```ruby
class BankAccount
  def initialize(owner)
    @owner = owner
    @balance = 0
  end

  def deposit(amount)
    @balance = @balance + amount
  end

  def info
    "#{@owner}さんの残高：#{@balance}円"
  end
end
```

</details>

---

## 📝 37. 出金する（`stretch37.rb`）

`BankAccount` クラスに、金額を減らす `withdraw(amount)` メソッドを追加してください。

残高より大きい金額を出金しようとした場合は、残高を変更せず、`"残高が不足しています"` と表示してください。

<details>
<summary>解答例</summary>

```ruby
class BankAccount
  def initialize(owner)
    @owner = owner
    @balance = 0
  end

  def deposit(amount)
    @balance = @balance + amount
  end

  def withdraw(amount)
    if amount <= @balance
      @balance = @balance - amount
    else
      puts "残高が不足しています"
    end
  end

  def info
    "#{@owner}さんの残高：#{@balance}円"
  end
end
```

</details>

---

## 📝 38. 複数口座の残高を合計する（`stretch38.rb`）

3つの `BankAccount` インスタンスを配列に入れてください。

各口座へ入金したあと、すべての残高を合計して表示してください。

### TIPS

残高を返す `balance` メソッドを追加すると便利です。

<details>
<summary>解答例</summary>

```ruby
class BankAccount
  def initialize(owner)
    @owner = owner
    @balance = 0
  end

  def deposit(amount)
    @balance = @balance + amount
  end

  def balance
    @balance
  end
end

accounts = [
  BankAccount.new("山田"),
  BankAccount.new("佐藤"),
  BankAccount.new("鈴木")
]

accounts[0].deposit(1000)
accounts[1].deposit(2000)
accounts[2].deposit(3000)

total = 0

accounts.each do |account|
  total = total + account.balance
end

puts total
```

</details>

---

## 📝 39. `Order` クラスに割引を追加する（`stretch39.rb`）

`Order` クラスを作ってください。

- 商品の配列を `@items` に保存する
- `total_price` で合計金額を返す
- 合計金額が5000円以上なら10%引きした金額を返す `discounted_price` を作る

<details>
<summary>解答例</summary>

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

  def discounted_price
    total = total_price

    if total >= 5000
      (total * 0.9).to_i
    else
      total
    end
  end
end
```

</details>

---

## 📝 40. `Order` クラスに注文番号を追加する（`stretch40.rb`）

`Order` クラスへ注文番号を追加してください。

`initialize(number, items)` で注文番号と商品データを受け取り、`summary` メソッドで次のように返してください。

### 表示例

```text
注文番号：A001／商品数：3個／合計：1850円
```

<details>
<summary>解答例</summary>

```ruby
class Order
  def initialize(number, items)
    @number = number
    @items = items
  end

  def total_price
    total = 0

    @items.each do |item|
      total = total + item["price"]
    end

    total
  end

  def summary
    "注文番号：#{@number}／商品数：#{@items.length}個／合計：#{total_price}円"
  end
end
```

</details>

---

# テーマ5：検索・生成AIも使うチャレンジ課題

> [!TIP]
> ここからは、未習のメソッドや書き方を使っても構いません。
>
> 分からない場合は、次のように調べてみましょう。
>
> - Web検索：`Ruby 配列 重複 削除`
> - 生成AIへの相談：`Rubyで配列の重複を削除する方法を、初学者向けに説明してください`
>
> 生成AIへ相談した場合は、返ってきたコードをそのまま使わず、1行ずつ意味を確認してください。

## 📝 41. 配列の重複を削除する（`stretch41.rb`）

次の配列から重複を削除して表示してください。

```ruby
numbers = [1, 2, 2, 3, 3, 3, 4]
```

### TIPS

Rubyには `uniq` メソッドがあります。

<details>
<summary>解答例</summary>

```ruby
numbers = [1, 2, 2, 3, 3, 3, 4]

puts numbers.uniq
```

</details>

---

## 📝 42. 配列を並び替える（`stretch42.rb`）

次の配列を小さい順に並び替えて表示してください。

```ruby
numbers = [5, 2, 8, 1, 4]
```

### TIPS

`sort` メソッドを調べてみましょう。

<details>
<summary>解答例</summary>

```ruby
numbers = [5, 2, 8, 1, 4]

puts numbers.sort
```

</details>

---

## 📝 43. 大きい順に並び替える（`stretch43.rb`）

問42の配列を、大きい順に並び替えて表示してください。

### TIPS

`sort.reverse` という組み合わせも使えます。

<details>
<summary>解答例</summary>

```ruby
numbers = [5, 2, 8, 1, 4]

puts numbers.sort.reverse
```

</details>

---

## 📝 44. `map` で各要素を2倍する（`stretch44.rb`）

次の配列の各要素を2倍した、新しい配列を作ってください。

```ruby
numbers = [1, 2, 3, 4, 5]
```

### TIPS

`map` は、配列の各要素を変換して、新しい配列を作るメソッドです。

<details>
<summary>解答例</summary>

```ruby
numbers = [1, 2, 3, 4, 5]

doubled_numbers = numbers.map do |number|
  number * 2
end

puts doubled_numbers
```

</details>

---

## 📝 45. `select` で条件に合う要素を取り出す（`stretch45.rb`）

次の配列から、80点以上の点数だけを新しい配列へ取り出してください。

```ruby
scores = [55, 80, 92, 67, 88]
```

### TIPS

`select` は、条件に合う要素だけを集めて新しい配列を作ります。

<details>
<summary>解答例</summary>

```ruby
scores = [55, 80, 92, 67, 88]

passed_scores = scores.select do |score|
  score >= 80
end

puts passed_scores
```

</details>

---

## 📝 46. 商品を価格順に並べる（`stretch46.rb`）

商品ハッシュの配列を、価格が安い順に並べて表示してください。

### TIPS

`sort_by` メソッドを調べてみましょう。

<details>
<summary>解答例</summary>

```ruby
items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ジュース", "price" => 200 }
]

sorted_items = items.sort_by do |item|
  item["price"]
end

sorted_items.each do |item|
  puts "#{item["name"]}：#{item["price"]}円"
end
```

</details>

---

## 📝 47. 文字列を分割する（`stretch47.rb`）

次の文字列を、カンマで分割して配列にしてください。

```ruby
text = "Ruby,Rails,HTML,CSS"
```

### TIPS

`split` メソッドを調べてみましょう。

<details>
<summary>解答例</summary>

```ruby
text = "Ruby,Rails,HTML,CSS"

languages = text.split(",")

puts languages
```

</details>

---

## 📝 48. 配列を文字列へつなぐ（`stretch48.rb`）

次の配列を、`" / "` でつないだ1つの文字列にしてください。

```ruby
languages = ["Ruby", "Rails", "HTML", "CSS"]
```

### 表示例

```text
Ruby / Rails / HTML / CSS
```

### TIPS

`join` メソッドを調べてみましょう。

<details>
<summary>解答例</summary>

```ruby
languages = ["Ruby", "Rails", "HTML", "CSS"]

puts languages.join(" / ")
```

</details>

---

## 📝 49. 自由課題：メニュー検索を作る（`stretch49.rb`）

次の商品データを使い、キーボードから入力した商品名を検索するプログラムを作ってください。

```ruby
items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ジュース", "price" => 200 }
]
```

見つかった場合は、商品名と価格を表示してください。見つからない場合は、`"商品が見つかりません"` と表示してください。

### TIPS

まずは `each` と `if` で作れます。`find` メソッドを調べて使っても構いません。

<details>
<summary>解答例</summary>

```ruby
items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ジュース", "price" => 200 }
]

puts "商品名を入力してください"
keyword = gets.chomp

found_item = nil

items.each do |item|
  if item["name"] == keyword
    found_item = item
  end
end

if found_item
  puts "#{found_item["name"]}：#{found_item["price"]}円"
else
  puts "商品が見つかりません"
end
```

</details>

---

## 📝 50. 自由課題：自分で機能を追加する（`stretch50.rb`）

ここまでに作ったプログラムのどれかを選び、自分で新しい機能を1つ追加してください。

例：

- `Order` クラスへ消費税計算を追加する
- `BankAccount` クラスへ送金機能を追加する
- 商品検索で部分一致を使う
- メニューを価格帯で絞り込む
- 成績データから最高点と最低点を表示する
- 注文履歴を配列へ保存する

検索や生成AIへの相談を使って構いません。

ただし、最後に次の3点をコメントで書いてください。

```ruby
# 追加した機能：
# 調べたこと：
# 自分で説明できること：
```

<details>
<summary>解答例について</summary>

この問題には、1つだけの正解はありません。

自分で追加した機能が意図したとおりに動き、その仕組みを説明できれば成功です。

</details>

---

50問まで終わったら、第9回の発展練習は完了です。

すべてを終えることだけが目的ではありません。興味を持った問題を深く掘り下げたり、別の書き方を調べたり、自分なりの機能を追加したりすることも大切です。
