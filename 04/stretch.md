# 第4回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第4回で学んだ `puts`、変数、`#{}`、`if`/`elsif`/`else`、`gets.to_i`、`times` を使って解きましょう。

- `まずは`：1〜10
- `余裕があれば`：11〜20
- `さらに余裕があれば`：21〜

やればやるほど力がつきます。

---

## 1〜10：繰り返しの基本

### 問題1：「がんばれ」を5回表示する

`times` を使って、「がんばれ」を5回表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do
  puts "がんばれ"
end
```

</details>

---

### 問題2：1から5まで表示する

`times` と `i + 1` を使って、1から5までの数字を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts i + 1
end
```

</details>

---

### 問題3：1から10まで表示する

1から10までの数字を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
10.times do |i|
  puts i + 1
end
```

</details>

---

### 問題4：「○回目です」を表示する

「1回目です」「2回目です」...「5回目です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts "#{i + 1}回目です"
end
```

</details>

---

### 問題5：星を増やす

次のような出力を作ってみましょう。

```
*
**
***
****
*****
```

ヒント：`"*" * 3` で `"***"` になります。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts "*" * (i + 1)
end
```

</details>

---

### 問題6：カウントダウン

5からカウントダウンして「スタート！」と表示してみましょう。

```
5
4
3
2
1
スタート！
```

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts 5 - i
end
puts "スタート！"
```

</details>

---

### 問題7：文字列を増やす

次のような出力を作ってみましょう。

```
Ruby
RubyRuby
RubyRubyRuby
```

<details>
<summary>解答例</summary>

```ruby
3.times do |i|
  puts "Ruby" * (i + 1)
end
```

</details>

---

### 問題8：2の段を表示する

2の段の九九を表示してみましょう。

```
2 x 1 = 2
2 x 2 = 4
...
2 x 9 = 18
```

<details>
<summary>解答例</summary>

```ruby
9.times do |i|
  n = i + 1
  puts "2 x #{n} = #{2 * n}"
end
```

</details>

---

### 問題9：10から1までの逆順

10から1まで逆順に表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
10.times do |i|
  puts 10 - i
end
```

</details>

---

### 問題10：0から始まる番号を表示する

0から9までの番号を「No.0」「No.1」...「No.9」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
10.times do |i|
  puts "No.#{i}"
end
```

</details>

---

## 11〜20：繰り返し + 条件分岐 + 入力

### 問題11：偶数だけ表示する

1から20までの中で、偶数だけを表示してみましょう。

ヒント：`% 2 == 0` で偶数かどうかを調べられます。

<details>
<summary>解答例</summary>

```ruby
20.times do |i|
  n = i + 1
  if n % 2 == 0
    puts n
  end
end
```

</details>

---

### 問題12：奇数だけ表示する

1から20までの中で、奇数だけを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
20.times do |i|
  n = i + 1
  if n % 2 != 0
    puts n
  end
end
```

</details>

---

### 問題13：3の倍数に「!」をつける

1から15までの数字を表示し、3の倍数のときだけ数字のあとに「!」をつけてみましょう。

```
1
2
3!
4
5
6!
...
```

<details>
<summary>解答例</summary>

```ruby
15.times do |i|
  n = i + 1
  if n % 3 == 0
    puts "#{n}!"
  else
    puts n
  end
end
```

</details>

---

### 問題14：入力した回数だけ表示する

キーボードから回数を入力して、その回数だけ「こんにちは」を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "何回表示しますか？"
count = gets.to_i

count.times do
  puts "こんにちは"
end
```

</details>

---

### 問題15：入力した段の九九を表示する

キーボードから数字を入力して、その段の九九を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "何の段を表示しますか？"
dan = gets.to_i

9.times do |i|
  n = i + 1
  puts "#{dan} x #{n} = #{dan * n}"
end
```

</details>

---

### 問題16：入力した数まで合計する

キーボードから数字を入力して、1からその数までの合計を表示してみましょう。

```
5を入力した場合：
1 + 2 + 3 + 4 + 5 = 15
```

<details>
<summary>解答例</summary>

```ruby
puts "いくつまで合計しますか？"
n = gets.to_i

total = 0
n.times do |i|
  total = total + (i + 1)
end

puts "1から#{n}までの合計は#{total}です"
```

</details>

---

### 問題17：入力した段数の三角形を作る

キーボードから段数を入力して、星の三角形を表示してみましょう。

```
4を入力した場合：
*
**
***
****
```

<details>
<summary>解答例</summary>

```ruby
puts "何段にしますか？"
n = gets.to_i

n.times do |i|
  puts "*" * (i + 1)
end
```

</details>

---

### 問題18：入力した数からカウントダウンする

キーボードから数字を入力して、その数からカウントダウンしてみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "何からカウントダウンしますか？"
n = gets.to_i

n.times do |i|
  puts n - i
end
puts "スタート！"
```

</details>

---

### 問題19：偶数と奇数を分けて表示する

1から入力した数までの数字を表示し、偶数なら「偶数」、奇数なら「奇数」と横に表示してみましょう。

```
3を入力した場合：
1 → 奇数
2 → 偶数
3 → 奇数
```

<details>
<summary>解答例</summary>

```ruby
puts "いくつまで表示しますか？"
n = gets.to_i

n.times do |i|
  number = i + 1
  if number % 2 == 0
    puts "#{number} → 偶数"
  else
    puts "#{number} → 奇数"
  end
end
```

</details>

---

### 問題20：入力した回数だけおみくじを引く

キーボードから回数を入力して、その回数だけおみくじを引いてみましょう。

- 1：大吉
- 2：中吉
- 3：小吉
- 4：凶

ヒント：`rand(1..4)` で1〜4のランダムな数が出ます。

<details>
<summary>解答例</summary>

```ruby
puts "何回引きますか？"
count = gets.to_i

count.times do |i|
  number = rand(1..4)

  if number == 1
    result = "大吉"
  elsif number == 2
    result = "中吉"
  elsif number == 3
    result = "小吉"
  else
    result = "凶"
  end

  puts "#{i + 1}回目：#{result}"
end
```

</details>

---

## 21〜：応用

### 問題21：間違い探し その1

次のコードは `times` の書き方が間違っています。直して動くようにしましょう。

```ruby
3.times
  puts "こんにちは"
end
```

<details>
<summary>解答例</summary>

```ruby
3.times do
  puts "こんにちは"
end
```

`times` のあとに `do` が必要です。

</details>

---

### 問題22：間違い探し その2

次のコードは、1から5まで表示したいのに 0 から 4 が表示されます。直してみましょう。

```ruby
5.times do |i|
  puts i
end
```

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts i + 1
end
```

`i` は 0 から始まるので、`i + 1` にします。

</details>

---

### 問題23：間違い探し その3

次のコードは、入力した回数だけ表示したいのにエラーになります。直してみましょう。

```ruby
puts "何回表示しますか？"
count = gets

count.times do
  puts "Ruby"
end
```

<details>
<summary>解答例</summary>

```ruby
puts "何回表示しますか？"
count = gets.to_i

count.times do
  puts "Ruby"
end
```

`gets` だけだと文字列なので、`to_i` で整数に変換します。

</details>

---

### 問題24：FizzBuzz

1から30までの数字を順番に表示しましょう。ただし：

- 3で割り切れるときは数字の代わりに `Fizz`
- 5で割り切れるときは数字の代わりに `Buzz`
- 3でも5でも割り切れるときは `FizzBuzz`

<details>
<summary>解答例</summary>

```ruby
30.times do |i|
  n = i + 1
  if n % 3 == 0 && n % 5 == 0
    puts "FizzBuzz"
  elsif n % 3 == 0
    puts "Fizz"
  elsif n % 5 == 0
    puts "Buzz"
  else
    puts n
  end
end
```

</details>

---

### 問題25：合計を求める

1から100までの合計を `times` で計算して表示してみましょう。

ヒント：変数 `total` を 0 で用意して、ループの中で足していきます。

<details>
<summary>解答例</summary>

```ruby
total = 0

100.times do |i|
  total = total + (i + 1)
end

puts "1から100までの合計は#{total}です"
```

</details>

---

### 問題26：逆三角形を作る

次のような出力を作ってみましょう。

```
*****
****
***
**
*
```

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts "*" * (5 - i)
end
```

</details>

---

### 問題27：じゃんけん3回勝負

3回じゃんけんをして、毎回勝敗を表示してみましょう。自分の手はキーボードから入力し、相手の手は `rand` で決めます。

- 1：グー
- 2：チョキ
- 3：パー

<details>
<summary>解答例</summary>

```ruby
3.times do |i|
  puts "#{i + 1}回目：手を入力してください（1:グー 2:チョキ 3:パー）"
  my_hand = gets.to_i
  enemy_hand = rand(1..3)

  if enemy_hand == 1
    enemy_name = "グー"
  elsif enemy_hand == 2
    enemy_name = "チョキ"
  else
    enemy_name = "パー"
  end

  puts "相手：#{enemy_name}"

  if my_hand == enemy_hand
    puts "あいこ！"
  elsif my_hand == 1 && enemy_hand == 2
    puts "勝ち！"
  elsif my_hand == 2 && enemy_hand == 3
    puts "勝ち！"
  elsif my_hand == 3 && enemy_hand == 1
    puts "勝ち！"
  else
    puts "負け！"
  end
end
```

</details>

---

### 問題28：九九を全段表示する

1の段から9の段まで、九九を全部表示してみましょう。

```
1 x 1 = 1
1 x 2 = 2
...
1 x 9 = 9
---
2 x 1 = 2
2 x 2 = 4
...
9 x 9 = 81
---
```

ヒント：`times` の中に `times` を入れることができます。

<details>
<summary>解答例</summary>

```ruby
9.times do |i|
  dan = i + 1
  9.times do |j|
    n = j + 1
    puts "#{dan} x #{n} = #{dan * n}"
  end
  puts "---"
end
```

</details>

---

### 問題29：九九の表を横に並べる

各段の計算結果を横一列に並べて、表のように表示してみましょう。

```
1 2 3 4 5 6 7 8 9
2 4 6 8 10 12 14 16 18
3 6 9 12 15 18 21 24 27
4 8 12 16 20 24 28 32 36
5 10 15 20 25 30 35 40 45
6 12 18 24 30 36 42 48 54
7 14 21 28 35 42 49 56 63
8 16 24 32 40 48 56 64 72
9 18 27 36 45 54 63 72 81
```

ヒント：`print` を使うと改行せずに横に並べられます。1段分を表示し終わったら `puts ""` で改行します。

<details>
<summary>解答例</summary>

```ruby
9.times do |i|
  dan = i + 1
  9.times do |j|
    n = j + 1
    print "#{dan * n} "
  end
  puts ""
end
```

</details>

---

### 問題30：入力した回数だけサイコロを振って合計を出す

キーボードから回数を入力して、その回数だけサイコロを振り、毎回の目と最後に合計を表示してみましょう。

ヒント：`rand(1..6)` で1〜6のランダムな数が出ます。

<details>
<summary>解答例</summary>

```ruby
puts "何回振りますか？"
count = gets.to_i

total = 0

count.times do |i|
  dice = rand(1..6)
  total = total + dice
  puts "#{i + 1}回目：#{dice}"
end

puts "合計：#{total}"
```

</details>

---

### 問題31：数当てゲーム

1から10のランダムな数を当てるゲームを作りましょう。5回まで挑戦できます。

ヒント：`rand(1..10)` で答えを決めて、毎回入力と比較します。

<details>
<summary>解答例</summary>

```ruby
answer = rand(1..10)

puts "1から10の数を当ててください（5回まで）"

5.times do |i|
  puts "#{i + 1}回目："
  guess = gets.to_i

  if guess == answer
    puts "正解！"
    break
  elsif guess > answer
    puts "もっと小さい"
  else
    puts "もっと大きい"
  end
end

puts "答えは#{answer}でした"
```

`break` はループを途中で抜ける命令です。正解したらそこで終わります。

</details>
