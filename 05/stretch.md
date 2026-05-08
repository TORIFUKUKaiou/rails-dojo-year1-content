# 第5回：Stretch ── 配列と繰り返しの100本ノック

この課題は、[練習](practice.md) を終えた人向けの超・発展課題です。
これまで学んだ知識（変数、`if`、`times`、`gets`、配列、`each`、範囲）をすべて組み合わせて解きます。

全100問あります。答えを写して動かし、その仕組みをじっくり観察してください。

---

## レベル1：配列と `each` の基礎（1〜20問）

### 問題1：挨拶の配列
`["おはよう", "こんにちは", "こんばんは"]` という配列を作り、`each` で順番に表示してください。

<details>
<summary>解答例</summary>

```ruby
greetings = ["おはよう", "こんにちは", "こんばんは"]
greetings.each do |g|
  puts g
end
```
</details>

### 問題2：好きな食べ物
自分の好きな食べ物を3つ入れた配列を作り、`each` で「私の好きな食べ物は〇〇です」と表示してください。

<details>
<summary>解答例</summary>

```ruby
foods = ["焼肉", "寿司", "カレー"]
foods.each do |food|
  puts "私の好きな食べ物は#{food}です"
end
```
</details>

### 問題3：数字の表示
`[10, 20, 30, 40, 50]` という配列を作り、`each` で表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [10, 20, 30, 40, 50]
numbers.each do |n|
  puts n
end
```
</details>

### 問題4：2倍にする
問題3の配列を使い、`each` の中でそれぞれの数字を2倍にして表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [10, 20, 30, 40, 50]
numbers.each do |n|
  puts n * 2
end
```
</details>

### 問題5：半分の数字
問題3の配列を使い、それぞれの数字を2で割った数（半分）を表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [10, 20, 30, 40, 50]
numbers.each do |n|
  puts n / 2
end
```
</details>

### 問題6：30以上の数
問題3の配列を使い、30以上の数字だけを表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [10, 20, 30, 40, 50]
numbers.each do |n|
  if n >= 30
    puts n
  end
end
```
</details>

### 問題7：30より小さい数
問題3の配列を使い、30より小さい数字だけを表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [10, 20, 30, 40, 50]
numbers.each do |n|
  if n < 30
    puts n
  end
end
```
</details>

### 問題8：特定の値を探す
問題3の配列の中から、「30」と完全に一致する時だけ「見つけました！」と表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [10, 20, 30, 40, 50]
numbers.each do |n|
  if n == 30
    puts "見つけました！"
  end
end
```
</details>

### 問題9：文字列の長さを調べる
`["A", "BB", "CCC", "DDDD"]` という配列を作り、それぞれの文字の長さを `.length` を使って表示してください。

<details>
<summary>解答例</summary>

```ruby
words = ["A", "BB", "CCC", "DDDD"]
words.each do |w|
  puts w.length
end
```
</details>

### 問題10：長い単語だけ表示
`["cat", "elephant", "dog", "hippopotamus"]` という配列を作り、文字数が5文字以上の単語だけを表示してください。

<details>
<summary>解答例</summary>

```ruby
animals = ["cat", "elephant", "dog", "hippopotamus"]
animals.each do |animal|
  if animal.length >= 5
    puts animal
  end
end
```
</details>

### 問題11：合計を計算する
`[5, 10, 15]` という配列の合計を、変数 `total` を使って計算し、表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [5, 10, 15]
total = 0
numbers.each do |n|
  total = total + n
end
puts total
```
</details>

### 問題12：平均を計算する
問題11の合計を使って、平均値を計算して表示してください（合計を3で割ります）。

<details>
<summary>解答例</summary>

```ruby
numbers = [5, 10, 15]
total = 0
numbers.each do |n|
  total = total + n
end
puts total / 3
```
</details>

### 問題13：条件に合うものを数える
`[80, 45, 60, 90, 30]` の配列の中で、60以上の数がいくつあるか数えて表示してください。

<details>
<summary>解答例</summary>

```ruby
scores = [80, 45, 60, 90, 30]
count = 0
scores.each do |s|
  if s >= 60
    count = count + 1
  end
end
puts "#{count}個"
```
</details>

### 問題14：条件に合わないものを数える
問題13の配列で、60未満の数がいくつあるか数えて表示してください。

<details>
<summary>解答例</summary>

```ruby
scores = [80, 45, 60, 90, 30]
count = 0
scores.each do |s|
  if s < 60
    count = count + 1
  end
end
puts "#{count}個"
```
</details>

### 問題15：フラグを立てる
`[1, 2, 3, 4, 5]` の中に「3」が含まれているか調べます。ループの前に `found = "ない"` を用意し、見つけたら `found = "ある"` に変更して、最後に結果を表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [1, 2, 3, 4, 5]
found = "ない"
numbers.each do |n|
  if n == 3
    found = "ある"
  end
end
puts found
```
</details>

### 問題16：奇数だけ表示
`[11, 12, 13, 14, 15]` の配列から、奇数だけを表示してください。（ヒント：2で割った余りが1）

<details>
<summary>解答例</summary>

```ruby
numbers = [11, 12, 13, 14, 15]
numbers.each do |n|
  if n % 2 == 1
    puts n
  end
end
```
</details>

### 問題17：aで始まる単語
`["apple", "banana", "cherry"]` の中で、最初の文字が `a` のものを表示してください。

<details>
<summary>解答例</summary>

```ruby
words = ["apple", "banana", "cherry"]
words.each do |w|
  if w[0] == "a"
    puts w
  end
end
```
</details>

### 問題18：足し算の途中経過
`[1, 2, 3]` を使い、`1`, `3` (1+2), `6` (3+3) のように足していく途中経過を表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [1, 2, 3]
current = 0
numbers.each do |n|
  current = current + n
  puts current
end
```
</details>

### 問題19：何番目かを表示
`i = 1` を用意し、`["A", "B", "C"]` を `1番: A`, `2番: B` のように表示してください。

<details>
<summary>解答例</summary>

```ruby
letters = ["A", "B", "C"]
i = 1
letters.each do |l|
  puts "#{i}番: #{l}"
  i = i + 1
end
```
</details>

### 問題20：範囲の判定
`[15, 25, 35, 45, 55]` の中で、20より大きく50より小さい数だけを表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [15, 25, 35, 45, 55]
numbers.each do |n|
  if n > 20 && n < 50
    puts n
  end
end
```
</details>

---

## レベル2〜4：応用とユーザー入力（21〜90問）
（※ 21〜90問は、100問のボリュームを維持しつつ、順次公開または練習用として作成します）

---

## レベル5：アルゴリズムと闘魂（91〜100問）

### 問題91：数字の並び替え
`[3, 1, 4]` という配列の数字を、小さい順に並び替えて `[1, 3, 4]` にして表示してください。

<details>
<summary>解答例</summary>

```ruby
numbers = [3, 1, 4]

2.times do
  if numbers[0] > numbers[1]
    tmp = numbers[0]
    numbers[0] = numbers[1]
    numbers[1] = tmp
  end
  if numbers[1] > numbers[2]
    tmp = numbers[1]
    numbers[1] = numbers[2]
    numbers[2] = tmp
  end
end

puts numbers[0]
puts numbers[1]
puts numbers[2]
```
</details>

### 問題92：同じ数字があるか
`[1, 2, 3, 2, 4]` の中に、重複（同じ数字）があるか調べてください。

<details>
<summary>解答例</summary>

```ruby
numbers = [1, 2, 3, 2, 4]
duplicate = false

numbers.each do |n1|
  count = 0
  numbers.each do |n2|
    if n1 == n2
      count = count + 1
    end
  end
  if count > 1
    duplicate = true
  end
end

if duplicate == true
  puts "同じ数字があります"
else
  puts "すべてバラバラです"
end
```
</details>

### 問題93：入力を配列に保存
3回名前を入力させ、配列に保存したあと、最後に全員分を表示してください。

<details>
<summary>解答例</summary>

```ruby
names = []
3.times do
  puts "名前を入力してください"
  name = gets.chomp
  names << name
end

puts "登録された名前一覧："
names.each do |n|
  puts n
end
```
</details>

### 問題94：じゃんけんゲーム
自分と相手（ランダム）の勝敗を判定してください。

<details>
<summary>解答例</summary>

```ruby
hands = ["", "グー", "チョキ", "パー"]
puts "1:グー, 2:チョキ, 3:パー を選んでください"
my = gets.to_i
enemy = rand(1..3)

puts "自分: #{hands[my]} / 相手: #{hands[enemy]}"

if my == enemy
  puts "あいこです"
elsif (my == 1 && enemy == 2) || (my == 2 && enemy == 3) || (my == 3 && enemy == 1)
  puts "あなたの勝ちです！"
else
  puts "あなたの負けです..."
end
```
</details>

### 問題95：1から100までの素数
1から100までの素数をすべて表示してください。

<details>
<summary>解答例</summary>

```ruby
(2..100).each do |n|
  is_prime = true
  (2..(n-1)).each do |i|
    if n % i == 0
      is_prime = false
      break
    end
  end
  if is_prime == true
    print "#{n} "
  end
end
puts ""
```
</details>

### 問題96：パスワードの簡単チェック
入力された文字が「8文字以上」かつ「数字が含まれているか」を判定してください。

<details>
<summary>解答例</summary>

```ruby
puts "パスワードを入力してください"
pass = gets.chomp
has_number = false

# 0〜9が含まれているか強引にチェック
"0123456789".split("").each do |n|
  if pass.include?(n)
    has_number = true
  end
end

if pass.length >= 8 && has_number == true
  puts "強いパスワードです"
else
  puts "パスワードが弱いです"
end
```
</details>

### 問題97：順列の全表示
`[1, 2, 3]` の数字を入れ替えた全パターンを表示してください。

<details>
<summary>解答例</summary>

```ruby
nums = [1, 2, 3]
nums.each do |n1|
  nums.each do |n2|
    nums.each do |n3|
      if n1 != n2 && n2 != n3 && n1 != n3
        puts "#{n1}-#{n2}-#{n3}"
      end
    end
  end
end
```
</details>

### 問題98：合計21ゲーム
21を超えないように数字を足していくゲームを作ってください。

<details>
<summary>解答例</summary>

```ruby
total = 0
10.times do
  card = rand(1..10)
  total = total + card
  puts "引いた数: #{card} / 合計: #{total}"
  if total > 21
    puts "バースト！"
    break
  end
  puts "まだ引きますか？ (1:はい, 0:いいえ)"
  if gets.to_i == 0
    break
  end
end
puts "最終合計: #{total}"
```
</details>

### 問題99：座標の移動
`w,s,a,d` で座標 `(x, y)` を動かしてください。

<details>
<summary>解答例</summary>

```ruby
x = 0
y = 0
10.times do
  puts "w,s,a,d で移動（qで終了）"
  key = gets.chomp
  if key == "w" then y = y + 1
  elsif key == "s" then y = y - 1
  elsif key == "a" then x = x - 1
  elsif key == "d" then x = x + 1
  elsif key == "q" then break
  end
  puts "今の位置: (#{x}, #{y})"
end
```
</details>

### 問題100：自分を褒める
100本ノックを終えた自分へのメッセージを表示せよ！

<details>
<summary>解答例</summary>

```ruby
puts "100本ノック完走おめでとう！"
puts "今日踏み出した一歩（いっぷ）が、いつか大きな道になる。"
puts "闘魂注入、完了！"
```
</details>
