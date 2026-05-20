# 第5回 もっと練習

この課題は、[練習](practice.md) を終えた人向けの発展課題です。第1回〜第5回で学んだ `puts`、変数、`#{}`、`if`/`elsif`/`else`、`gets.to_i`、`gets.chomp`、`times`、配列、`each`、範囲を使って解きましょう。

後半では、`rand`、`break`、`.length`、`<<` なども使います。まだ授業で深く扱っていないものは、問題の近くにヒントを入れています。

答えを写して終わりではありません。まず自分で考えて、動かして、必要になったら解答例を開きましょう。

やればやるほど力がつきます。できるところまで進めましょう。

---

## 1〜10：配列を作って表示する

### 問題1：朝のあいさつを表示する

次の配列を作り、`each` で順番に表示してみましょう。

```ruby
greetings = ["おはよう", "こんにちは", "こんばんは"]
```

<details>
<summary>解答例</summary>

```ruby
greetings = ["おはよう", "こんにちは", "こんばんは"]

greetings.each do |greeting|
  puts greeting
end
```

</details>

---

### 問題2：好きな食べ物を表示する

好きな食べ物を3つ入れた配列を作り、1つずつ表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
foods = ["カレー", "寿司", "ラーメン"]

foods.each do |food|
  puts food
end
```

</details>

---

### 問題3：名前に「さん」をつける

次の配列を使って、`田中さん` のように表示してみましょう。

```ruby
names = ["田中", "鈴木", "佐藤"]
```

<details>
<summary>解答例</summary>

```ruby
names = ["田中", "鈴木", "佐藤"]

names.each do |name|
  puts "#{name}さん"
end
```

</details>

---

### 問題4：商品名を表示する

次の配列を使って、`商品：ノート` のように表示してみましょう。

```ruby
items = ["ノート", "ペン", "消しゴム"]
```

<details>
<summary>解答例</summary>

```ruby
items = ["ノート", "ペン", "消しゴム"]

items.each do |item|
  puts "商品：#{item}"
end
```

</details>

---

### 問題5：点数を表示する

次の配列を使って、`80点` のように表示してみましょう。

```ruby
scores = [80, 55, 100]
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 55, 100]

scores.each do |score|
  puts "#{score}点"
end
```

</details>

---

### 問題6：値段を表示する

次の配列を使って、`120円` のように表示してみましょう。

```ruby
prices = [120, 80, 300]
```

<details>
<summary>解答例</summary>

```ruby
prices = [120, 80, 300]

prices.each do |price|
  puts "#{price}円"
end
```

</details>

---

### 問題7：2倍にして表示する

次の配列の数字を、1つずつ2倍にして表示してみましょう。

```ruby
numbers = [3, 5, 8]
```

<details>
<summary>解答例</summary>

```ruby
numbers = [3, 5, 8]

numbers.each do |number|
  puts number * 2
end
```

</details>

---

### 問題8：10を足して表示する

次の配列の数字に、1つずつ10を足して表示してみましょう。

```ruby
numbers = [1, 2, 3, 4]
```

<details>
<summary>解答例</summary>

```ruby
numbers = [1, 2, 3, 4]

numbers.each do |number|
  puts number + 10
end
```

</details>

---

### 問題9：半分にして表示する

次の配列の数字を、1つずつ2で割って表示してみましょう。

```ruby
numbers = [10, 20, 30]
```

<details>
<summary>解答例</summary>

```ruby
numbers = [10, 20, 30]

numbers.each do |number|
  puts number / 2
end
```

</details>

---

### 問題10：番号つきで表示する

次の配列を使って、`1. Ruby`、`2. Rails` のように番号をつけて表示してみましょう。

```ruby
words = ["Ruby", "Rails", "HTML"]
```

<details>
<summary>解答例</summary>

```ruby
words = ["Ruby", "Rails", "HTML"]
number = 1

words.each do |word|
  puts "#{number}. #{word}"
  number = number + 1
end
```

</details>

---

## 11〜20：配列から取り出す

### 問題11：1番目と3番目を表示する

次の配列から、1番目と3番目を表示してみましょう。

```ruby
foods = ["カレー", "ラーメン", "寿司"]
```

<details>
<summary>解答例</summary>

```ruby
foods = ["カレー", "ラーメン", "寿司"]

puts foods[0]
puts foods[2]
```

</details>

---

### 問題12：2番目の点数を表示する

次の配列から、2番目の点数を表示してみましょう。

```ruby
scores = [72, 88, 60]
```

<details>
<summary>解答例</summary>

```ruby
scores = [72, 88, 60]

puts scores[1]
```

</details>

---

### 問題13：最初の商品を使って文を作る

次の配列の最初の商品を使って、`最初の商品はノートです` と表示してみましょう。

```ruby
items = ["ノート", "ペン", "消しゴム"]
```

<details>
<summary>解答例</summary>

```ruby
items = ["ノート", "ペン", "消しゴム"]

puts "最初の商品は#{items[0]}です"
```

</details>

---

### 問題14：最後の名前を表示する

次の配列から、最後の名前を表示してみましょう。

```ruby
names = ["田中", "鈴木", "佐藤", "高橋"]
```

<details>
<summary>解答例</summary>

```ruby
names = ["田中", "鈴木", "佐藤", "高橋"]

puts names[3]
```

</details>

---

### 問題15：2番目と4番目を足す

次の配列から、2番目と4番目の数字を足して表示してみましょう。

```ruby
numbers = [5, 10, 15, 20]
```

<details>
<summary>解答例</summary>

```ruby
numbers = [5, 10, 15, 20]

puts numbers[1] + numbers[3]
```

</details>

---

### 問題16：配列は0から数えることを確認する

次の配列を使って、`colors[0]`、`colors[1]`、`colors[2]` をそれぞれ表示してみましょう。

```ruby
colors = ["赤", "青", "黄"]
```

<details>
<summary>解答例</summary>

```ruby
colors = ["赤", "青", "黄"]

puts colors[0]
puts colors[1]
puts colors[2]
```

</details>

---

### 問題17：1番目だけ合格判定する

次の配列の1番目の点数だけを見て、60点以上なら「合格」、そうでなければ「不合格」と表示してみましょう。

```ruby
scores = [80, 55, 90]
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 55, 90]

if scores[0] >= 60
  puts "合格"
else
  puts "不合格"
end
```

</details>

---

### 問題18：3番目の商品だけ高いか判定する

次の配列の3番目の値段だけを見て、200円以上なら「高い」、そうでなければ「安い」と表示してみましょう。

```ruby
prices = [120, 80, 300]
```

<details>
<summary>解答例</summary>

```ruby
prices = [120, 80, 300]

if prices[2] >= 200
  puts "高い"
else
  puts "安い"
end
```

</details>

---

### 問題19：配列の中身を書き換える

次の配列の2番目を `"Rails"` に書き換えてから、全部表示してみましょう。

```ruby
words = ["Ruby", "HTML", "CSS"]
```

<details>
<summary>解答例</summary>

```ruby
words = ["Ruby", "HTML", "CSS"]
words[1] = "Rails"

words.each do |word|
  puts word
end
```

</details>

---

### 問題20：点数を1つ書き換える

次の配列の先頭の点数を100に書き換えてから、全部表示してみましょう。

```ruby
scores = [70, 80, 90]
```

<details>
<summary>解答例</summary>

```ruby
scores = [70, 80, 90]
scores[0] = 100

scores.each do |score|
  puts score
end
```

</details>

---

## 21〜30：条件で表示を変える

### 問題21：合格だけ表示する

次の配列から、60点以上の点数だけを表示してみましょう。

```ruby
scores = [80, 45, 60, 30, 90]
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 45, 60, 30, 90]

scores.each do |score|
  if score >= 60
    puts score
  end
end
```

</details>

---

### 問題22：不合格だけ表示する

次の配列から、60点未満の点数だけを表示してみましょう。

```ruby
scores = [80, 45, 60, 30, 90]
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 45, 60, 30, 90]

scores.each do |score|
  if score < 60
    puts score
  end
end
```

</details>

---

### 問題23：合格・不合格を表示する

次の配列を使って、点数ごとに「合格」または「不合格」と表示してみましょう。

```ruby
scores = [80, 45, 60]
```

表示例：

```
80点：合格
45点：不合格
60点：合格
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 45, 60]

scores.each do |score|
  if score >= 60
    puts "#{score}点：合格"
  else
    puts "#{score}点：不合格"
  end
end
```

</details>

---

### 問題24：100円以上だけ表示する

次の配列から、100円以上の値段だけを表示してみましょう。

```ruby
prices = [80, 120, 50, 300]
```

<details>
<summary>解答例</summary>

```ruby
prices = [80, 120, 50, 300]

prices.each do |price|
  if price >= 100
    puts price
  end
end
```

</details>

---

### 問題25：買う・やめるを表示する

次の配列を使って、100円以上なら「買う」、100円未満なら「やめる」と表示してみましょう。

```ruby
prices = [80, 120, 50, 300]
```

<details>
<summary>解答例</summary>

```ruby
prices = [80, 120, 50, 300]

prices.each do |price|
  if price >= 100
    puts "#{price}円：買う"
  else
    puts "#{price}円：やめる"
  end
end
```

</details>

---

### 問題26：偶数だけ表示する

次の配列から、偶数だけを表示してみましょう。

```ruby
numbers = [3, 8, 11, 20, 7, 14]
```

<details>
<summary>解答例</summary>

```ruby
numbers = [3, 8, 11, 20, 7, 14]

numbers.each do |number|
  if number % 2 == 0
    puts number
  end
end
```

</details>

---

### 問題27：奇数だけ表示する

次の配列から、奇数だけを表示してみましょう。

```ruby
numbers = [3, 8, 11, 20, 7, 14]
```

<details>
<summary>解答例</summary>

```ruby
numbers = [3, 8, 11, 20, 7, 14]

numbers.each do |number|
  if number % 2 == 1
    puts number
  end
end
```

</details>

---

### 問題28：80点以上にコメントをつける

次の配列を使って、80点以上なら「よくできました」、それ以外なら「次もがんばろう」と表示してみましょう。

```ruby
scores = [95, 72, 48, 88]
```

<details>
<summary>解答例</summary>

```ruby
scores = [95, 72, 48, 88]

scores.each do |score|
  if score >= 80
    puts "#{score}点：よくできました"
  else
    puts "#{score}点：次もがんばろう"
  end
end
```

</details>

---

### 問題29：3段階で判定する

次の配列を使って、80点以上なら「A」、60点以上なら「B」、60点未満なら「C」と表示してみましょう。

```ruby
scores = [95, 72, 48, 60]
```

<details>
<summary>解答例</summary>

```ruby
scores = [95, 72, 48, 60]

scores.each do |score|
  if score >= 80
    puts "#{score}点：A"
  elsif score >= 60
    puts "#{score}点：B"
  else
    puts "#{score}点：C"
  end
end
```

</details>

---

### 問題30：指定した名前を探す

次の配列の中に `"佐藤"` があれば、「佐藤さんがいます」と表示してみましょう。

```ruby
names = ["田中", "鈴木", "佐藤", "高橋"]
```

<details>
<summary>解答例</summary>

```ruby
names = ["田中", "鈴木", "佐藤", "高橋"]

names.each do |name|
  if name == "佐藤"
    puts "佐藤さんがいます"
  end
end
```

</details>

---

## 31〜40：合計と数える処理

### 問題31：合計点を出す

次の配列の合計点を表示してみましょう。

```ruby
scores = [80, 55, 100]
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 55, 100]
total = 0

scores.each do |score|
  total = total + score
end

puts "合計：#{total}点"
```

</details>

---

### 問題32：商品の合計金額を出す

次の配列の合計金額を表示してみましょう。

```ruby
prices = [120, 80, 300, 150]
```

<details>
<summary>解答例</summary>

```ruby
prices = [120, 80, 300, 150]
total = 0

prices.each do |price|
  total = total + price
end

puts "合計金額：#{total}円"
```

</details>

---

### 問題33：`sum` で合計する

問題32と同じ配列を使って、`sum` で合計金額を表示してみましょう。

> [!TIP]
> `配列.sum` と書くと、配列の中の数を合計できます。

<details>
<summary>解答例</summary>

```ruby
prices = [120, 80, 300, 150]

puts "合計金額：#{prices.sum}円"
```

</details>

---

### 問題34：合格者数を数える

次の配列を使って、60点以上の人数を数えて表示してみましょう。

```ruby
scores = [80, 55, 100, 42, 67]
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 55, 100, 42, 67]
count = 0

scores.each do |score|
  if score >= 60
    count = count + 1
  end
end

puts "合格者：#{count}人"
```

</details>

---

### 問題35：不合格者数を数える

次の配列を使って、60点未満の人数を数えて表示してみましょう。

```ruby
scores = [80, 55, 100, 42, 67]
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 55, 100, 42, 67]
count = 0

scores.each do |score|
  if score < 60
    count = count + 1
  end
end

puts "不合格者：#{count}人"
```

</details>

---

### 問題36：売上個数を数える

次の配列を使って、1個以上売れた日が何日あるか数えて表示してみましょう。

```ruby
sales = [0, 3, 5, 0, 2]
```

<details>
<summary>解答例</summary>

```ruby
sales = [0, 3, 5, 0, 2]
count = 0

sales.each do |sale|
  if sale >= 1
    count = count + 1
  end
end

puts "売れた日：#{count}日"
```

</details>

---

### 問題37：0の日を数える

次の配列を使って、売上が0個の日が何日あるか数えて表示してみましょう。

```ruby
sales = [0, 3, 5, 0, 2]
```

<details>
<summary>解答例</summary>

```ruby
sales = [0, 3, 5, 0, 2]
count = 0

sales.each do |sale|
  if sale == 0
    count = count + 1
  end
end

puts "売上0の日：#{count}日"
```

</details>

---

### 問題38：平均点を出す

次の配列の平均点を表示してみましょう。

```ruby
scores = [80, 60, 100, 40]
```

> [!TIP]
> `.length` は、配列の中にデータがいくつあるかを調べるメソッドです。

<details>
<summary>解答例</summary>

```ruby
scores = [80, 60, 100, 40]
total = 0

scores.each do |score|
  total = total + score
end

average = total / scores.length
puts "平均：#{average}点"
```

</details>

---

### 問題39：平均金額を出す

次の配列の平均金額を表示してみましょう。

```ruby
prices = [100, 200, 300]
```

<details>
<summary>解答例</summary>

```ruby
prices = [100, 200, 300]
total = 0

prices.each do |price|
  total = total + price
end

average = total / prices.length
puts "平均：#{average}円"
```

</details>

---

### 問題40：予算内か判定する

次の配列の合計金額を出し、500円以内なら「予算内」、500円を超えたら「予算オーバー」と表示してみましょう。

```ruby
prices = [120, 80, 300, 150]
```

<details>
<summary>解答例</summary>

```ruby
prices = [120, 80, 300, 150]
total = 0

prices.each do |price|
  total = total + price
end

if total <= 500
  puts "予算内"
else
  puts "予算オーバー"
end
```

</details>

---

## 41〜50：最大・最小・文字数

### 問題41：最高点を探す

次の配列から、最高点を探して表示してみましょう。

```ruby
scores = [72, 48, 90, 65]
```

<details>
<summary>解答例</summary>

```ruby
scores = [72, 48, 90, 65]
max_score = scores[0]

scores.each do |score|
  if score > max_score
    max_score = score
  end
end

puts "最高点：#{max_score}"
```

</details>

---

### 問題42：最低点を探す

次の配列から、最低点を探して表示してみましょう。

```ruby
scores = [72, 48, 90, 65]
```

<details>
<summary>解答例</summary>

```ruby
scores = [72, 48, 90, 65]
min_score = scores[0]

scores.each do |score|
  if score < min_score
    min_score = score
  end
end

puts "最低点：#{min_score}"
```

</details>

---

### 問題43：最高金額を探す

次の配列から、一番高い金額を探して表示してみましょう。

```ruby
prices = [120, 800, 300, 150]
```

<details>
<summary>解答例</summary>

```ruby
prices = [120, 800, 300, 150]
max_price = prices[0]

prices.each do |price|
  if price > max_price
    max_price = price
  end
end

puts "最高金額：#{max_price}円"
```

</details>

---

### 問題44：最低金額を探す

次の配列から、一番安い金額を探して表示してみましょう。

```ruby
prices = [120, 800, 300, 150]
```

<details>
<summary>解答例</summary>

```ruby
prices = [120, 800, 300, 150]
min_price = prices[0]

prices.each do |price|
  if price < min_price
    min_price = price
  end
end

puts "最低金額：#{min_price}円"
```

</details>

---

### 問題45：`max` を使って最高点を出す

次の配列から、`max` を使って最高点を表示してみましょう。

```ruby
scores = [72, 48, 90, 65]
```

> [!TIP]
> `配列.max` と書くと、配列の中の一番大きい値を取り出せます。

<details>
<summary>解答例</summary>

```ruby
scores = [72, 48, 90, 65]

puts "最高点：#{scores.max}"
```

</details>

---

### 問題46：`min` を使って最低点を出す

次の配列から、`min` を使って最低点を表示してみましょう。

```ruby
scores = [72, 48, 90, 65]
```

> [!TIP]
> `配列.min` と書くと、配列の中の一番小さい値を取り出せます。

<details>
<summary>解答例</summary>

```ruby
scores = [72, 48, 90, 65]

puts "最低点：#{scores.min}"
```

</details>

---

### 問題47：文字数を表示する

次の配列の言葉を、1つずつ文字数つきで表示してみましょう。

```ruby
words = ["Ruby", "Rails", "HTML"]
```

表示例：

```
Ruby：4文字
Rails：5文字
HTML：4文字
```

<details>
<summary>解答例</summary>

```ruby
words = ["Ruby", "Rails", "HTML"]

words.each do |word|
  puts "#{word}：#{word.length}文字"
end
```

</details>

---

### 問題48：3文字以上だけ表示する

次の配列から、3文字以上の言葉だけを表示してみましょう。

```ruby
words = ["犬", "ねこ", "りんご", "本", "プログラム"]
```

<details>
<summary>解答例</summary>

```ruby
words = ["犬", "ねこ", "りんご", "本", "プログラム"]

words.each do |word|
  if word.length >= 3
    puts word
  end
end
```

</details>

---

### 問題49：3文字以上の数を数える

次の配列から、3文字以上の言葉がいくつあるか数えて表示してみましょう。

```ruby
words = ["犬", "ねこ", "りんご", "本", "プログラム"]
```

<details>
<summary>解答例</summary>

```ruby
words = ["犬", "ねこ", "りんご", "本", "プログラム"]
count = 0

words.each do |word|
  if word.length >= 3
    count = count + 1
  end
end

puts "3文字以上：#{count}個"
```

</details>

---

### 問題50：一番長い言葉を探す

次の配列から、一番長い言葉を探して表示してみましょう。

```ruby
words = ["犬", "ねこ", "りんご", "プログラム"]
```

<details>
<summary>解答例</summary>

```ruby
words = ["犬", "ねこ", "りんご", "プログラム"]
longest = words[0]

words.each do |word|
  if word.length > longest.length
    longest = word
  end
end

puts "一番長い言葉：#{longest}"
```

</details>

---

## 51〜60：範囲を使う

### 問題51：1から10まで表示する

`1..10` を使って、1から10まで表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
(1..10).each do |number|
  puts number
end
```

</details>

---

### 問題52：1から10までの合計を出す

`1..10` を使って、1から10までの合計を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
total = 0

(1..10).each do |number|
  total = total + number
end

puts "合計：#{total}"
```

</details>

---

### 問題53：1から20までの偶数だけ表示する

`1..20` を使って、偶数だけを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
(1..20).each do |number|
  if number % 2 == 0
    puts number
  end
end
```

</details>

---

### 問題54：1から20までの奇数だけ表示する

`1..20` を使って、奇数だけを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
(1..20).each do |number|
  if number % 2 == 1
    puts number
  end
end
```

</details>

---

### 問題55：3の倍数だけ表示する

`1..30` を使って、3の倍数だけを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
(1..30).each do |number|
  if number % 3 == 0
    puts number
  end
end
```

</details>

---

### 問題56：5の倍数だけ表示する

`1..50` を使って、5の倍数だけを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
(1..50).each do |number|
  if number % 5 == 0
    puts number
  end
end
```

</details>

---

### 問題57：7の段を表示する

`1..9` を使って、7の段を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
dan = 7

(1..9).each do |number|
  puts "#{dan} x #{number} = #{dan * number}"
end
```

</details>

---

### 問題58：入力した段の九九を表示する

段の数を入力し、その段の九九を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "何の段を表示しますか"
dan = gets.to_i

(1..9).each do |number|
  puts "#{dan} x #{number} = #{dan * number}"
end
```

</details>

---

### 問題59：入力した数まで表示する

数を入力し、1からその数まで表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "いくつまで表示しますか"
n = gets.to_i

(1..n).each do |number|
  puts number
end
```

</details>

---

### 問題60：入力した数までの合計を出す

数を入力し、1からその数までの合計を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "いくつまで合計しますか"
n = gets.to_i
total = 0

(1..n).each do |number|
  total = total + number
end

puts "合計：#{total}"
```

</details>

---

## 61〜70：入力と配列

### 問題61：3つの名前を配列に入れる

名前を3回入力し、配列に入れてから、最後に全員分を表示してみましょう。

> [!TIP]
> - 文字を入力するときは `gets.chomp` を使います
> - `names << name` と書くと、配列の最後に `name` を追加できます

<details>
<summary>解答例</summary>

```ruby
names = []

3.times do
  puts "名前を入力してください"
  name = gets.chomp
  names << name
end

names.each do |name|
  puts name
end
```

</details>

---

### 問題62：3つの点数を配列に入れる

点数を3回入力し、配列に入れてから、最後に全て表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
scores = []

3.times do
  puts "点数を入力してください"
  score = gets.to_i
  scores << score
end

scores.each do |score|
  puts "#{score}点"
end
```

</details>

---

### 問題63：入力した点数の合計を出す

点数を3回入力し、合計点を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
scores = []

3.times do
  puts "点数を入力してください"
  score = gets.to_i
  scores << score
end

total = 0
scores.each do |score|
  total = total + score
end

puts "合計：#{total}点"
```

</details>

---

### 問題64：入力した点数の平均を出す

点数を3回入力し、平均点を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
scores = []

3.times do
  puts "点数を入力してください"
  score = gets.to_i
  scores << score
end

total = 0
scores.each do |score|
  total = total + score
end

average = total / scores.length
puts "平均：#{average}点"
```

</details>

---

### 問題65：入力した点数を合格判定する

点数を3回入力し、最後に1つずつ合格・不合格を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
scores = []

3.times do
  puts "点数を入力してください"
  score = gets.to_i
  scores << score
end

scores.each do |score|
  if score >= 60
    puts "#{score}点：合格"
  else
    puts "#{score}点：不合格"
  end
end
```

</details>

---

### 問題66：入力した商品金額の合計を出す

商品の金額を4回入力し、合計金額を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
prices = []

4.times do
  puts "金額を入力してください"
  price = gets.to_i
  prices << price
end

total = 0
prices.each do |price|
  total = total + price
end

puts "合計：#{total}円"
```

</details>

---

### 問題67：入力した商品金額の平均を出す

商品の金額を4回入力し、平均金額を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
prices = []

4.times do
  puts "金額を入力してください"
  price = gets.to_i
  prices << price
end

total = 0
prices.each do |price|
  total = total + price
end

average = total / prices.length
puts "平均：#{average}円"
```

</details>

---

### 問題68：入力した名前に番号をつける

名前を3回入力し、最後に `1. 田中` のように番号をつけて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
names = []

3.times do
  puts "名前を入力してください"
  name = gets.chomp
  names << name
end

number = 1
names.each do |name|
  puts "#{number}. #{name}"
  number = number + 1
end
```

</details>

---

### 問題69：入力した名前から指定した人を探す

名前を3回入力し、最後に `"田中"` があれば「田中さんがいます」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
names = []

3.times do
  puts "名前を入力してください"
  name = gets.chomp
  names << name
end

names.each do |name|
  if name == "田中"
    puts "田中さんがいます"
  end
end
```

</details>

---

### 問題70：入力した個数だけ名前を入れる

最初に人数を入力し、その人数分だけ名前を入力します。最後に全員分を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "人数を入力してください"
count = gets.to_i
names = []

count.times do
  puts "名前を入力してください"
  name = gets.chomp
  names << name
end

names.each do |name|
  puts name
end
```

</details>

---

## 71〜80：乱数とゲーム

### 問題71：ランダムな数字を表示する

`rand(1..10)` を使って、1から10までのランダムな数字を1つ表示してみましょう。

> [!TIP]
> `rand(1..10)` は、1から10までの中からランダムに1つ数字を作ります。

<details>
<summary>解答例</summary>

```ruby
number = rand(1..10)
puts number
```

</details>

---

### 問題72：ランダムな数字を5回表示する

`rand(1..10)` を使って、1から10までのランダムな数字を5回表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do
  number = rand(1..10)
  puts number
end
```

</details>

---

### 問題73：ランダムな点数を判定する

0から100までのランダムな点数を1つ作り、60点以上なら「合格」、そうでなければ「不合格」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
score = rand(0..100)
puts "#{score}点"

if score >= 60
  puts "合格"
else
  puts "不合格"
end
```

</details>

---

### 問題74：ランダムな点数を5回判定する

0から100までのランダムな点数を5回作り、それぞれ合格・不合格を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do
  score = rand(0..100)

  if score >= 60
    puts "#{score}点：合格"
  else
    puts "#{score}点：不合格"
  end
end
```

</details>

---

### 問題75：ランダムな点数を配列に入れる

0から100までのランダムな点数を5回作り、配列に入れてから、最後に全部表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
scores = []

5.times do
  score = rand(0..100)
  scores << score
end

scores.each do |score|
  puts "#{score}点"
end
```

</details>

---

### 問題76：ランダムな点数の合計を出す

0から100までのランダムな点数を5回作り、合計点を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
scores = []

5.times do
  score = rand(0..100)
  scores << score
end

total = 0
scores.each do |score|
  total = total + score
end

puts "合計：#{total}点"
```

</details>

---

### 問題77：ランダムな点数の最高点を出す

0から100までのランダムな点数を5回作り、最高点を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
scores = []

5.times do
  score = rand(0..100)
  scores << score
end

max_score = scores[0]
scores.each do |score|
  if score > max_score
    max_score = score
  end
end

puts "最高点：#{max_score}点"
```

</details>

---

### 問題78：ランダムな点数の合格者数を出す

0から100までのランダムな点数を5回作り、60点以上が何個あるか数えて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
scores = []

5.times do
  score = rand(0..100)
  scores << score
end

count = 0
scores.each do |score|
  if score >= 60
    count = count + 1
  end
end

puts "合格者：#{count}人"
```

</details>

---

### 問題79：数当てゲームを作る

1から10までの答えをランダムに作り、入力した数が当たっているか判定してみましょう。

<details>
<summary>解答例</summary>

```ruby
answer = rand(1..10)

puts "1から10の数字を入力してください"
guess = gets.to_i

if guess == answer
  puts "正解です"
else
  puts "違います"
end

puts "答えは#{answer}でした"
```

</details>

---

### 問題80：3回まで挑戦できる数当てゲーム

1から10までの答えをランダムに作り、3回まで入力できる数当てゲームを作ってみましょう。

> [!TIP]
> `break` は、繰り返しの途中でループを終わらせる命令です。

<details>
<summary>解答例</summary>

```ruby
answer = rand(1..10)

3.times do
  puts "1から10の数字を入力してください"
  guess = gets.to_i

  if guess == answer
    puts "正解です"
    break
  elsif guess < answer
    puts "もっと大きいです"
  else
    puts "もっと小さいです"
  end
end

puts "答えは#{answer}でした"
```

</details>

---

## 81〜90：小さなプログラムにまとめる

### 問題81：買い物リストを表示する

商品名の配列と値段の配列を作り、番号を使って次のように表示してみましょう。

```ruby
items = ["ノート", "ペン", "消しゴム"]
prices = [120, 80, 60]
```

表示例：

```
ノート：120円
ペン：80円
消しゴム：60円
```

<details>
<summary>解答例</summary>

```ruby
items = ["ノート", "ペン", "消しゴム"]
prices = [120, 80, 60]

3.times do |i|
  puts "#{items[i]}：#{prices[i]}円"
end
```

</details>

---

### 問題82：買い物リストの合計を出す

問題81の値段の配列を使って、合計金額を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
prices = [120, 80, 60]
total = 0

prices.each do |price|
  total = total + price
end

puts "合計：#{total}円"
```

</details>

---

### 問題83：在庫を判定する

商品名の配列と在庫数の配列を作り、在庫が1以上なら「販売中」、0なら「売り切れ」と表示してみましょう。

```ruby
items = ["ノート", "ペン", "消しゴム"]
stocks = [5, 0, 12]
```

<details>
<summary>解答例</summary>

```ruby
items = ["ノート", "ペン", "消しゴム"]
stocks = [5, 0, 12]

3.times do |i|
  if stocks[i] >= 1
    puts "#{items[i]}：販売中"
  else
    puts "#{items[i]}：売り切れ"
  end
end
```

</details>

---

### 問題84：注文の小計を表示する

商品名、単価、個数の配列を作り、商品ごとの小計を表示してみましょう。

```ruby
items = ["ノート", "ペン", "消しゴム"]
prices = [120, 80, 60]
counts = [2, 3, 1]
```

<details>
<summary>解答例</summary>

```ruby
items = ["ノート", "ペン", "消しゴム"]
prices = [120, 80, 60]
counts = [2, 3, 1]

3.times do |i|
  subtotal = prices[i] * counts[i]
  puts "#{items[i]}：#{subtotal}円"
end
```

</details>

---

### 問題85：注文の合計を表示する

問題84の配列を使って、すべての小計を足した合計金額を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
prices = [120, 80, 60]
counts = [2, 3, 1]
total = 0

3.times do |i|
  subtotal = prices[i] * counts[i]
  total = total + subtotal
end

puts "合計：#{total}円"
```

</details>

---

### 問題86：出席状況を表示する

名前の配列と出席状況の配列を作り、1人ずつ表示してみましょう。

```ruby
names = ["田中", "鈴木", "佐藤"]
attends = ["出席", "欠席", "出席"]
```

<details>
<summary>解答例</summary>

```ruby
names = ["田中", "鈴木", "佐藤"]
attends = ["出席", "欠席", "出席"]

3.times do |i|
  puts "#{names[i]}：#{attends[i]}"
end
```

</details>

---

### 問題87：出席者数を数える

問題86の出席状況の配列を使って、出席者数を数えて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
attends = ["出席", "欠席", "出席"]
count = 0

attends.each do |attend|
  if attend == "出席"
    count = count + 1
  end
end

puts "出席者：#{count}人"
```

</details>

---

### 問題88：メニュー番号から商品を選ぶ

商品名の配列を作り、1〜3の番号を入力して、選んだ商品名を表示してみましょう。

```ruby
items = ["カレー", "ラーメン", "寿司"]
```

<details>
<summary>解答例</summary>

```ruby
items = ["カレー", "ラーメン", "寿司"]

puts "1:カレー 2:ラーメン 3:寿司"
number = gets.to_i

puts "選んだ商品：#{items[number - 1]}"
```

</details>

---

### 問題89：メニュー番号の範囲を判定する

問題88を改造し、1〜3以外が入力されたら「その番号はありません」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
items = ["カレー", "ラーメン", "寿司"]

puts "1:カレー 2:ラーメン 3:寿司"
number = gets.to_i

if number >= 1 && number <= 3
  puts "選んだ商品：#{items[number - 1]}"
else
  puts "その番号はありません"
end
```

</details>

---

### 問題90：簡単なおみくじを作る

おみくじ結果の配列を作り、ランダムに1つ選んで表示してみましょう。

```ruby
results = ["大吉", "中吉", "小吉", "凶"]
```

<details>
<summary>解答例</summary>

```ruby
results = ["大吉", "中吉", "小吉", "凶"]
number = rand(0..3)

puts "結果：#{results[number]}"
```

</details>

---

## 91〜100：総合問題

### 問題91：入力した点数表を作る

人数を入力し、その人数分の名前と点数を入力します。最後に `田中：80点` のように一覧表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "人数を入力してください"
count = gets.to_i

names = []
scores = []

count.times do
  puts "名前を入力してください"
  name = gets.chomp
  names << name

  puts "点数を入力してください"
  score = gets.to_i
  scores << score
end

count.times do |i|
  puts "#{names[i]}：#{scores[i]}点"
end
```

</details>

---

### 問題92：入力した点数表に合否をつける

問題91を改造し、点数が60点以上なら「合格」、60点未満なら「不合格」も表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "人数を入力してください"
count = gets.to_i

names = []
scores = []

count.times do
  puts "名前を入力してください"
  name = gets.chomp
  names << name

  puts "点数を入力してください"
  score = gets.to_i
  scores << score
end

count.times do |i|
  if scores[i] >= 60
    puts "#{names[i]}：#{scores[i]}点：合格"
  else
    puts "#{names[i]}：#{scores[i]}点：不合格"
  end
end
```

</details>

---

### 問題93：入力した点数表の平均を出す

人数を入力し、その人数分の点数を入力します。最後に平均点を表示してみましょう。

※ 人数には、1以上の数字を入力してください。

<details>
<summary>解答例</summary>

```ruby
puts "人数を入力してください"
count = gets.to_i
scores = []

count.times do
  puts "点数を入力してください"
  score = gets.to_i
  scores << score
end

total = 0
scores.each do |score|
  total = total + score
end

average = total / scores.length
puts "平均：#{average}点"
```

</details>

---

### 問題94：入力した商品の注文表を作る

商品数を入力し、その数だけ商品名、単価、個数を入力します。最後に商品ごとの小計を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "商品数を入力してください"
count = gets.to_i

items = []
prices = []
counts = []

count.times do
  puts "商品名を入力してください"
  item = gets.chomp
  items << item

  puts "単価を入力してください"
  price = gets.to_i
  prices << price

  puts "個数を入力してください"
  item_count = gets.to_i
  counts << item_count
end

count.times do |i|
  subtotal = prices[i] * counts[i]
  puts "#{items[i]}：#{subtotal}円"
end
```

</details>

---

### 問題95：入力した商品の合計金額を出す

問題94を改造し、最後に合計金額も表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "商品数を入力してください"
count = gets.to_i

items = []
prices = []
counts = []
total = 0

count.times do
  puts "商品名を入力してください"
  item = gets.chomp
  items << item

  puts "単価を入力してください"
  price = gets.to_i
  prices << price

  puts "個数を入力してください"
  item_count = gets.to_i
  counts << item_count
end

count.times do |i|
  subtotal = prices[i] * counts[i]
  total = total + subtotal
  puts "#{items[i]}：#{subtotal}円"
end

puts "合計：#{total}円"
```

</details>

---

### 問題96：ランダムな出題で九九クイズを作る

ランダムに段と数を作り、九九の答えを入力してもらいます。正解なら「正解」、違えば正しい答えを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
dan = rand(1..9)
number = rand(1..9)
answer = dan * number

puts "#{dan} x #{number} = ?"
guess = gets.to_i

if guess == answer
  puts "正解"
else
  puts "正解は#{answer}"
end
```

</details>

---

### 問題97：九九クイズを3問出す

問題96を改造し、九九クイズを3問出して、最後に正解数を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
correct_count = 0

3.times do
  dan = rand(1..9)
  number = rand(1..9)
  answer = dan * number

  puts "#{dan} x #{number} = ?"
  guess = gets.to_i

  if guess == answer
    puts "正解"
    correct_count = correct_count + 1
  else
    puts "正解は#{answer}"
  end
end

puts "正解数：#{correct_count}問"
```

</details>

---

### 問題98：合計が20を超えるまで数字を引く

1から10までのランダムな数字を引き、合計が20を超えたら終了するプログラムを作ってみましょう。

<details>
<summary>解答例</summary>

```ruby
total = 0

10.times do
  number = rand(1..10)
  total = total + number
  puts "引いた数：#{number}"
  puts "合計：#{total}"

  if total > 20
    puts "20を超えました"
    break
  end
end
```

</details>

---

### 問題99：簡単なじゃんけんを作る

1:グー、2:チョキ、3:パー を入力し、相手の手をランダムに作って勝敗を表示してみましょう。

> [!TIP]
> `hands[1]` を「グー」にしたいので、0番目には使わない空文字 `""` を入れています。

<details>
<summary>解答例</summary>

```ruby
hands = ["", "グー", "チョキ", "パー"]

puts "1:グー 2:チョキ 3:パー"
my_hand = gets.to_i
enemy_hand = rand(1..3)

puts "自分：#{hands[my_hand]}"
puts "相手：#{hands[enemy_hand]}"

if my_hand == enemy_hand
  puts "あいこ"
elsif my_hand == 1 && enemy_hand == 2
  puts "勝ち"
elsif my_hand == 2 && enemy_hand == 3
  puts "勝ち"
elsif my_hand == 3 && enemy_hand == 1
  puts "勝ち"
else
  puts "負け"
end
```

</details>

---

### 問題100：今日のまとめプログラムを作る

今日使った配列、`each`、合計、条件分岐を使って、次の点数表を表示してみましょう。

```ruby
names = ["田中", "鈴木", "佐藤"]
scores = [80, 45, 90]
```

表示する内容：

- `田中：80点：合格` のように1人ずつ表示する
- 最後に合計点を表示する
- 最後に平均点を表示する

<details>
<summary>解答例</summary>

```ruby
names = ["田中", "鈴木", "佐藤"]
scores = [80, 45, 90]
total = 0

3.times do |i|
  total = total + scores[i]

  if scores[i] >= 60
    puts "#{names[i]}：#{scores[i]}点：合格"
  else
    puts "#{names[i]}：#{scores[i]}点：不合格"
  end
end

average = total / scores.length

puts "合計：#{total}点"
puts "平均：#{average}点"
```

</details>
