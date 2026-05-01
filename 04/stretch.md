# 第4回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第4回で学んだ `puts`、変数、`#{}`、`if`/`elsif`/`else`、`gets.to_i`、`gets.chomp`、`times` を中心に使って解きましょう。後半では `print`、`rand`、`break`、二重ループにも挑戦します。

やればやるほど力がつきます。できるところまで進めましょう。

---

## 1〜10：繰り返しに慣れる

### 問題1：チケット番号を作る

1001から1005までのチケット番号を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts 1001 + i
end
```

</details>

---

### 問題2：バスの便名を表示する

「第1便」から「第4便」まで表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
4.times do |i|
  puts "第#{i + 1}便"
end
```

</details>

---

### 問題3：回数ごとの料金を表示する

1回120円のゲームについて、1回分から5回分までの料金を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  count = i + 1
  puts "#{count}回分：#{120 * count}円"
end
```

</details>

---

### 問題4：残りページを表示する

50ページの本を5ページずつ読むとして、1日目から5日目までの残りページを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  day = i + 1
  rest = 50 - 5 * day
  puts "#{day}日目の残り：#{rest}ページ"
end
```

</details>

---

### 問題5：奇数の棚番号を表示する

棚番号 1、3、5、7、9 を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  shelf = i * 2 + 1
  puts "棚#{shelf}"
end
```

</details>

---

### 問題6：偶数のロッカー番号を表示する

ロッカー番号 2、4、6、8、10 を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  locker = (i + 1) * 2
  puts "ロッカー#{locker}"
end
```

</details>

---

### 問題7：走った距離を表示する

1周400mのトラックを走ります。1周目から6周目まで、合計何m走ったか表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
6.times do |i|
  lap = i + 1
  puts "#{lap}周目：#{400 * lap}m"
end
```

</details>

---

### 問題8：記号の区切り線を長くする

次のように、区切り線を少しずつ長くして表示してみましょう。

```text
--
----
------
--------
```

<details>
<summary>解答例</summary>

```ruby
4.times do |i|
  puts "--" * (i + 1)
end
```

</details>

---

### 問題9：座席番号を表示する

3行4列の座席を、次のように表示してみましょう。

```text
1行目-1番
1行目-2番
...
3行目-4番
```

<details>
<summary>解答例</summary>

```ruby
3.times do |row|
  4.times do |seat|
    puts "#{row + 1}行目-#{seat + 1}番"
  end
end
```

</details>

---

### 問題10：時間割の枠を表示する

月曜から金曜まで、1時間目から3時間目までの枠を表示してみましょう。

```text
1日目 1時間目
1日目 2時間目
...
5日目 3時間目
```

<details>
<summary>解答例</summary>

```ruby
5.times do |day|
  3.times do |period|
    puts "#{day + 1}日目 #{period + 1}時間目"
  end
end
```

</details>

---

## 11〜20：入力と組み合わせる

### 問題11：開始番号から連番を作る

開始番号を入力し、その番号から5つ連続で表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "開始番号を入力してください"
start = gets.to_i

5.times do |i|
  puts start + i
end
```

</details>

---

### 問題12：単価と個数で明細を表示する

商品の単価を入力し、1個から5個までの金額を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "単価を入力してください"
price = gets.to_i

5.times do |i|
  count = i + 1
  puts "#{count}個：#{price * count}円"
end
```

</details>

---

### 問題13：入力した日数ぶん予定を書く

日数を入力し、「1日目：復習」からその日数ぶん表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "何日分表示しますか"
days = gets.to_i

days.times do |i|
  puts "#{i + 1}日目：復習"
end
```

</details>

---

### 問題14：入力した数まで4の倍数を表示する

表示する個数を入力し、4、8、12...と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "何個表示しますか"
count = gets.to_i

count.times do |i|
  puts 4 * (i + 1)
end
```

</details>

---

### 問題15：名前入りの番号札を作る

名前と枚数を入力し、「佐藤-1」「佐藤-2」のような番号札を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "名前を入力してください"
name = gets.chomp

puts "何枚作りますか"
count = gets.to_i

count.times do |i|
  puts "#{name}-#{i + 1}"
end
```

</details>

---

### 問題16：高さを入力して看板を作る

高さを入力し、その行数ぶん「| Ruby |」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "高さを入力してください"
height = gets.to_i

height.times do
  puts "| Ruby |"
end
```

</details>

---

### 問題17：入力した数まで二乗を表示する

数を入力し、1からその数までの二乗を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "いくつまで表示しますか"
n = gets.to_i

n.times do |i|
  number = i + 1
  puts "#{number}の二乗：#{number * number}"
end
```

</details>

---

### 問題18：毎日の貯金額を表示する

1日あたりの貯金額と日数を入力し、毎日の合計貯金額を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "1日いくら貯金しますか"
money = gets.to_i

puts "何日続けますか"
days = gets.to_i

days.times do |i|
  day = i + 1
  puts "#{day}日目：#{money * day}円"
end
```

</details>

---

### 問題19：入力した行と列でマスを表示する

行数と列数を入力し、「1行1列」のようにすべてのマスを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "行数を入力してください"
rows = gets.to_i

puts "列数を入力してください"
columns = gets.to_i

rows.times do |row|
  columns.times do |column|
    puts "#{row + 1}行#{column + 1}列"
  end
end
```

</details>

---

### 問題20：入力した件数でチェックリストを作る

件数を入力し、`[ ] タスク1` のようなチェックリストを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "件数を入力してください"
count = gets.to_i

count.times do |i|
  puts "[ ] タスク#{i + 1}"
end
```

</details>

---

## 21〜30：合計を作る

### 問題21：10日分の勉強時間を合計する

1日目から10日目まで、毎日30分勉強したときの合計時間を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
total = 0

10.times do
  total = total + 30
end

puts "合計#{total}分"
```

</details>

---

### 問題22：1から30までの偶数を合計する

1から30までの偶数だけを合計して表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
total = 0

30.times do |i|
  number = i + 1
  if number % 2 == 0
    total = total + number
  end
end

puts total
```

</details>

---

### 問題23：入力した人数ぶん点数を合計する

人数を入力し、その人数ぶん点数を入力して合計点を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "人数を入力してください"
count = gets.to_i

total = 0

count.times do |i|
  puts "#{i + 1}人目の点数を入力してください"
  score = gets.to_i
  total = total + score
end

puts "合計#{total}点"
```

</details>

---

### 問題24：5つの商品の合計金額を出す

5つの商品の値段を入力し、合計金額を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
total = 0

5.times do |i|
  puts "#{i + 1}つ目の値段を入力してください"
  price = gets.to_i
  total = total + price
end

puts "合計#{total}円"
```

</details>

---

### 問題25：入力した数までの3の倍数を合計する

数を入力し、1からその数までの3の倍数を合計してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "いくつまで調べますか"
n = gets.to_i

total = 0

n.times do |i|
  number = i + 1
  if number % 3 == 0
    total = total + number
  end
end

puts "合計#{total}"
```

</details>

---

### 問題26：平均点を表示する

4回分のテスト点数を入力し、平均点を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
total = 0

4.times do |i|
  puts "#{i + 1}回目の点数を入力してください"
  score = gets.to_i
  total = total + score
end

average = total / 4
puts "平均#{average}点"
```

</details>

---

### 問題27：最高点を探す

5人分の点数を入力し、最高点を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
max_score = 0

5.times do |i|
  puts "#{i + 1}人目の点数を入力してください"
  score = gets.to_i

  if score > max_score
    max_score = score
  end
end

puts "最高点は#{max_score}点"
```

</details>

---

### 問題28：合格者数を数える

6人分の点数を入力し、60点以上の人数を数えてみましょう。

<details>
<summary>解答例</summary>

```ruby
pass_count = 0

6.times do |i|
  puts "#{i + 1}人目の点数を入力してください"
  score = gets.to_i

  if score >= 60
    pass_count = pass_count + 1
  end
end

puts "合格者は#{pass_count}人"
```

</details>

---

### 問題29：残り予算を表示する

予算を入力し、3回買い物した値段を入力して、最後に残り予算を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "予算を入力してください"
budget = gets.to_i

3.times do |i|
  puts "#{i + 1}回目の金額を入力してください"
  price = gets.to_i
  budget = budget - price
end

puts "残り#{budget}円"
```

</details>

---

### 問題30：在庫を減らす

最初の在庫数を入力し、4日分の販売数を入力して、最後の在庫数を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "最初の在庫数を入力してください"
stock = gets.to_i

4.times do |i|
  puts "#{i + 1}日目の販売数を入力してください"
  sold = gets.to_i
  stock = stock - sold
end

puts "残り在庫#{stock}個"
```

</details>

---

## 31〜40：条件分岐と組み合わせる

### 問題31：曜日番号を表示する

1から7までを表示し、6と7のときだけ「休日」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
7.times do |i|
  day = i + 1

  if day >= 6
    puts "#{day}：休日"
  else
    puts "#{day}：平日"
  end
end
```

</details>

---

### 問題32：5の倍数で拍手する

1から25まで表示し、5の倍数のときだけ「拍手」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
25.times do |i|
  number = i + 1

  if number % 5 == 0
    puts "#{number} 拍手"
  else
    puts number
  end
end
```

</details>

---

### 問題33：残り時間でメッセージを変える

10から1まで表示し、3以下のときだけ「あと少し」と一緒に表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
10.times do |i|
  rest = 10 - i

  if rest <= 3
    puts "#{rest} あと少し"
  else
    puts rest
  end
end
```

</details>

---

### 問題34：点数を分類する

5人分の点数を入力し、80点以上なら「よくできました」、それ以外なら「次もがんばろう」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts "#{i + 1}人目の点数を入力してください"
  score = gets.to_i

  if score >= 80
    puts "よくできました"
  else
    puts "次もがんばろう"
  end
end
```

</details>

---

### 問題35：売り切れを判定する

在庫を10個から始め、5日分の販売数を入力します。毎日、残り在庫と「販売中」または「売り切れ」を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
stock = 10

5.times do |i|
  puts "#{i + 1}日目の販売数を入力してください"
  sold = gets.to_i
  stock = stock - sold

  if stock <= 0
    puts "残り#{stock}個：売り切れ"
  else
    puts "残り#{stock}個：販売中"
  end
end
```

</details>

---

### 問題36：入力した数までFizzBuzzする

数を入力し、1からその数までFizzBuzzを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "いくつまで表示しますか"
n = gets.to_i

n.times do |i|
  number = i + 1

  if number % 3 == 0 && number % 5 == 0
    puts "FizzBuzz"
  elsif number % 3 == 0
    puts "Fizz"
  elsif number % 5 == 0
    puts "Buzz"
  else
    puts number
  end
end
```

</details>

---

### 問題37：温度を判定する

7日分の気温を入力し、30度以上なら「暑い」、10度未満なら「寒い」、それ以外なら「過ごしやすい」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
7.times do |i|
  puts "#{i + 1}日目の気温を入力してください"
  temperature = gets.to_i

  if temperature >= 30
    puts "暑い"
  elsif temperature < 10
    puts "寒い"
  else
    puts "過ごしやすい"
  end
end
```

</details>

---

### 問題38：注文金額を判定する

3件分の注文金額を入力し、3000円以上なら「送料無料」、それ以外なら「送料あり」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
3.times do |i|
  puts "#{i + 1}件目の注文金額を入力してください"
  price = gets.to_i

  if price >= 3000
    puts "送料無料"
  else
    puts "送料あり"
  end
end
```

</details>

---

### 問題39：3回までパスワードを入力する

正しいパスワードを `"ruby"` とします。3回まで入力でき、正しければ「ログイン成功」と表示して終わりましょう。

<details>
<summary>解答例</summary>

```ruby
3.times do
  puts "パスワードを入力してください"
  password = gets.chomp

  if password == "ruby"
    puts "ログイン成功"
    break
  else
    puts "違います"
  end
end
```

</details>

---

### 問題40：目標歩数を達成した日を数える

7日分の歩数を入力し、8000歩以上の日数を数えて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
clear_days = 0

7.times do |i|
  puts "#{i + 1}日目の歩数を入力してください"
  steps = gets.to_i

  if steps >= 8000
    clear_days = clear_days + 1
  end
end

puts "達成した日は#{clear_days}日"
```

</details>

---

## 41〜50：文字列を組み立てる

### 問題41：商品コードを作る

`A-001` から `A-005` までの商品コードを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts "A-00#{i + 1}"
end
```

</details>

---

### 問題42：メニュー表を作る

1番から5番まで、すべて「おすすめ」とつけて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts "#{i + 1}番：おすすめ"
end
```

</details>

---

### 問題43：点線ラベルを作る

1行目から5行目まで、点線つきで表示してみましょう。

```text
1行目 .....
2行目 .....
3行目 .....
4行目 .....
5行目 .....
```

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts "#{i + 1}行目 " + "." * 5
end
```

</details>

---

### 問題44：右下がりの記号を作る

次のような出力を作ってみましょう。

```text
>
->
-->
--->
```

<details>
<summary>解答例</summary>

```ruby
4.times do |i|
  puts "-" * i + ">"
end
```

</details>

---

### 問題45：入力した文字で線を作る

文字と長さを入力し、その文字を長さのぶんだけ並べて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "文字を入力してください"
mark = gets.chomp

puts "長さを入力してください"
length = gets.to_i

puts mark * length
```

</details>

---

### 問題46：入力した文字で番号つき看板を作る

文字と個数を入力し、番号つきの看板を作ってみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "文字を入力してください"
mark = gets.chomp

puts "個数を入力してください"
count = gets.to_i

count.times do |i|
  puts "#{i + 1}: #{mark * 3}"
end
```

</details>

---

### 問題47：名札をまとめて作る

名字と人数を入力し、「山田1さん」「山田2さん」のように表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "名字を入力してください"
family_name = gets.chomp

puts "人数を入力してください"
count = gets.to_i

count.times do |i|
  puts "#{family_name}#{i + 1}さん"
end
```

</details>

---

### 問題48：横並びの番号を作る

1から8までを横に並べて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
8.times do |i|
  print "#{i + 1} "
end

puts ""
```

</details>

---

### 問題49：受付番号を横に並べる

受付番号 `R1` から `R6` までを横に並べて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
6.times do |i|
  print "R#{i + 1} "
end

puts ""
```

</details>

---

### 問題50：入力した回数だけ区切りを作る

回数を入力し、その回数ぶん `---` を横に並べて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "いくつ並べますか"
count = gets.to_i

count.times do
  print "---"
end

puts ""
```

</details>

---

## 51〜60：ランダムと繰り返し

### 問題51：サイコロを5回振る

サイコロを5回振り、出た目を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  dice = rand(1..6)
  puts "#{i + 1}回目：#{dice}"
end
```

</details>

---

### 問題52：サイコロの合計を出す

サイコロを4回振り、合計を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
total = 0

4.times do
  dice = rand(1..6)
  total = total + dice
end

puts "合計#{total}"
```

</details>

---

### 問題53：6が出た回数を数える

サイコロを10回振り、6が出た回数を数えてみましょう。

<details>
<summary>解答例</summary>

```ruby
six_count = 0

10.times do
  dice = rand(1..6)
  puts dice

  if dice == 6
    six_count = six_count + 1
  end
end

puts "6は#{six_count}回"
```

</details>

---

### 問題54：コインを8回投げる

1なら「表」、2なら「裏」として、コインを8回投げた結果を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
8.times do
  coin = rand(1..2)

  if coin == 1
    puts "表"
  else
    puts "裏"
  end
end
```

</details>

---

### 問題55：当たりを探す

1から5のランダムな数を10回作り、3が出たときだけ「当たり」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
10.times do
  number = rand(1..5)

  if number == 3
    puts "#{number} 当たり"
  else
    puts number
  end
end
```

</details>

---

### 問題56：くじを入力回数だけ引く

回数を入力し、その回数だけ1から100のくじ番号を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "何回引きますか"
count = gets.to_i

count.times do |i|
  number = rand(1..100)
  puts "#{i + 1}回目：#{number}"
end
```

</details>

---

### 問題57：ランダム点数の合格判定

0から100のランダムな点数を5回作り、60点以上なら「合格」と表示してみましょう。

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

### 問題58：ランダムな歩数を合計する

1000から10000のランダムな歩数を7日分作り、合計を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
total = 0

7.times do |i|
  steps = rand(1000..10000)
  total = total + steps
  puts "#{i + 1}日目：#{steps}歩"
end

puts "合計#{total}歩"
```

</details>

---

### 問題59：目標以上が出たら終わる

サイコロを最大10回振り、6が出たら「終了」と表示してループを抜けましょう。

<details>
<summary>解答例</summary>

```ruby
10.times do |i|
  dice = rand(1..6)
  puts "#{i + 1}回目：#{dice}"

  if dice == 6
    puts "終了"
    break
  end
end
```

</details>

---

### 問題60：ランダムな在庫変化

在庫を20個から始め、5日間、1から6個ずつランダムに売れたとして残り在庫を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
stock = 20

5.times do |i|
  sold = rand(1..6)
  stock = stock - sold
  puts "#{i + 1}日目：#{sold}個売れた、残り#{stock}個"
end
```

</details>

---

## 61〜70：二重ループを使う

### 問題61：4行3列の表を作る

4行3列のマスを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
4.times do |row|
  3.times do |column|
    puts "#{row + 1}行#{column + 1}列"
  end
end
```

</details>

---

### 問題62：3階建ての部屋番号を作る

3階建てで各階に4部屋ある建物の部屋番号を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
3.times do |floor|
  4.times do |room|
    puts "#{floor + 1}0#{room + 1}号室"
  end
end
```

</details>

---

### 問題63：縦横の線を作る

5行ぶん、各行に `====` を3つ並べて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do
  3.times do
    print "===="
  end
  puts ""
end
```

</details>

---

### 問題64：入力した大きさの四角を作る

行数と列数を入力し、`*` の四角を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "行数を入力してください"
rows = gets.to_i

puts "列数を入力してください"
columns = gets.to_i

rows.times do
  columns.times do
    print "*"
  end
  puts ""
end
```

</details>

---

### 問題65：入力した大きさの番号表を作る

行数と列数を入力し、各マスに `行-列` を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "行数を入力してください"
rows = gets.to_i

puts "列数を入力してください"
columns = gets.to_i

rows.times do |row|
  columns.times do |column|
    print "#{row + 1}-#{column + 1} "
  end
  puts ""
end
```

</details>

---

### 問題66：九九の答えだけを表にする

1から5の段まで、答えだけを横に並べて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |dan|
  5.times do |n|
    print "#{(dan + 1) * (n + 1)} "
  end
  puts ""
end
```

</details>

---

### 問題67：段ごとに区切り線を入れる

3グループあり、各グループに4人いるとして、全員の番号を表示し、グループごとに区切り線を入れましょう。

<details>
<summary>解答例</summary>

```ruby
3.times do |group|
  4.times do |member|
    puts "#{group + 1}班 #{member + 1}人目"
  end
  puts "---"
end
```

</details>

---

### 問題68：入力した班数と人数で名簿枠を作る

班数と1班あたりの人数を入力し、すべての枠を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "班数を入力してください"
groups = gets.to_i

puts "1班あたりの人数を入力してください"
members = gets.to_i

groups.times do |group|
  members.times do |member|
    puts "#{group + 1}班 #{member + 1}人目"
  end
end
```

</details>

---

### 問題69：座席表を横に表示する

3行5列の座席表を、行ごとに横並びで表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
3.times do |row|
  5.times do |seat|
    print "#{row + 1}-#{seat + 1} "
  end
  puts ""
end
```

</details>

---

### 問題70：試合カードを作る

チーム数と試合数を入力し、各チームの試合カードを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "チーム数を入力してください"
teams = gets.to_i

puts "1チームあたりの試合数を入力してください"
games = gets.to_i

teams.times do |team|
  games.times do |game|
    puts "チーム#{team + 1} 試合#{game + 1}"
  end
end
```

</details>

---

## 71〜80：間違い探し

### 問題71：`do` が足りない

次のコードはエラーになります。直して動くようにしましょう。

```ruby
4.times
  puts "確認中"
end
```

<details>
<summary>解答例</summary>

```ruby
4.times do
  puts "確認中"
end
```

</details>

---

### 問題72：`end` が足りない

次のコードはエラーになります。直して動くようにしましょう。

```ruby
3.times do
  puts "Ruby"
```

<details>
<summary>解答例</summary>

```ruby
3.times do
  puts "Ruby"
end
```

</details>

---

### 問題73：入力を数値にしていない

次のコードは、入力した回数だけ表示したいのにエラーになります。直しましょう。

```ruby
puts "回数を入力してください"
count = gets.chomp

count.times do
  puts "OK"
end
```

<details>
<summary>解答例</summary>

```ruby
puts "回数を入力してください"
count = gets.to_i

count.times do
  puts "OK"
end
```

</details>

---

### 問題74：`i + 1` を忘れている

次のコードを直して、「1番」から「5番」まで表示されるようにしましょう。

```ruby
5.times do |i|
  puts "#{i}番"
end
```

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  puts "#{i + 1}番"
end
```

</details>

---

### 問題75：合計が増えない

次のコードは合計したいのに、最後に5しか表示されません。直しましょう。

```ruby
total = 0

5.times do |i|
  total = i + 1
end

puts total
```

<details>
<summary>解答例</summary>

```ruby
total = 0

5.times do |i|
  total = total + (i + 1)
end

puts total
```

</details>

---

### 問題76：条件の比較が文字列になっている

次のコードを直して、入力した点数が60以上なら「合格」と表示されるようにしましょう。

```ruby
puts "点数を入力してください"
score = gets.chomp

if score >= 60
  puts "合格"
else
  puts "不合格"
end
```

<details>
<summary>解答例</summary>

```ruby
puts "点数を入力してください"
score = gets.to_i

if score >= 60
  puts "合格"
else
  puts "不合格"
end
```

</details>

---

### 問題77：二重ループの外側と内側を混ぜている

次のコードを直して、2行3列を表示しましょう。

```ruby
2.times do |row|
  3.times do |column|
    puts "#{column + 1}行#{row + 1}列"
  end
end
```

<details>
<summary>解答例</summary>

```ruby
2.times do |row|
  3.times do |column|
    puts "#{row + 1}行#{column + 1}列"
  end
end
```

</details>

---

### 問題78：改行の位置が違う

次のコードを直して、3行4列の四角にしましょう。

```ruby
3.times do
  4.times do
    print "*"
    puts ""
  end
end
```

<details>
<summary>解答例</summary>

```ruby
3.times do
  4.times do
    print "*"
  end
  puts ""
end
```

</details>

---

### 問題79：変数名が途中で変わっている

次のコードはエラーになります。直しましょう。

```ruby
total = 0

3.times do
  price = gets.to_i
  sum = sum + price
end

puts total
```

<details>
<summary>解答例</summary>

```ruby
total = 0

3.times do
  price = gets.to_i
  total = total + price
end

puts total
```

</details>

---

### 問題80：`break` の位置を直す

次のコードは1回目で必ず終わってしまいます。0が入力されたときだけ終わるように直しましょう。

```ruby
5.times do
  number = gets.to_i
  break

  if number == 0
    puts "終了"
  end
end
```

<details>
<summary>解答例</summary>

```ruby
5.times do
  number = gets.to_i

  if number == 0
    puts "終了"
    break
  end
end
```

</details>

---

## 81〜90：出力を予想する

### 問題81：何が表示されるか

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
3.times do |i|
  puts i * 2
end
```

<details>
<summary>解答例</summary>

```text
0
2
4
```

</details>

---

### 問題82：合計はいくつか

次のコードを実行すると、最後に何が表示されるか予想してから実行しましょう。

```ruby
total = 10

3.times do
  total = total + 5
end

puts total
```

<details>
<summary>解答例</summary>

```text
25
```

</details>

---

### 問題83：条件つき表示を読む

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
5.times do |i|
  number = i + 1

  if number > 3
    puts number
  end
end
```

<details>
<summary>解答例</summary>

```text
4
5
```

</details>

---

### 問題84：文字列の掛け算を読む

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
4.times do |i|
  puts "ab" * i
end
```

<details>
<summary>解答例</summary>

```text

ab
abab
ababab
```

1行目は空文字なので、空行になります。

</details>

---

### 問題85：二重ループを読む

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
2.times do |row|
  2.times do |column|
    puts "#{row}-#{column}"
  end
end
```

<details>
<summary>解答例</summary>

```text
0-0
0-1
1-0
1-1
```

</details>

---

### 問題86：`print` と `puts` を読む

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
3.times do
  print "A"
end

puts "B"
```

<details>
<summary>解答例</summary>

```text
AAAB
```

</details>

---

### 問題87：変数の変化を読む

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
stock = 5

3.times do
  stock = stock - 1
  puts stock
end
```

<details>
<summary>解答例</summary>

```text
4
3
2
```

</details>

---

### 問題88：`break` を読む

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
5.times do |i|
  if i == 2
    break
  end

  puts i
end
```

<details>
<summary>解答例</summary>

```text
0
1
```

</details>

---

### 問題89：`if` と合計を読む

次のコードを実行すると、最後に何が表示されるか予想してから実行しましょう。

```ruby
total = 0

6.times do |i|
  number = i + 1

  if number % 2 == 0
    total = total + number
  end
end

puts total
```

<details>
<summary>解答例</summary>

```text
12
```

</details>

---

### 問題90：内側のループ回数を読む

次のコードを実行すると、何行表示されるか考えてみましょう。

```ruby
3.times do |i|
  (i + 1).times do
    puts "x"
  end
end
```

<details>
<summary>解答例</summary>

6行表示されます。

外側が1回目のとき1行、2回目のとき2行、3回目のとき3行なので、合計で6行です。

</details>

---

## 91〜100：仕上げ

### 問題91：レシートを作る

商品数を入力し、商品名と値段を入力して、最後に合計金額を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "商品数を入力してください"
count = gets.to_i

total = 0

count.times do |i|
  puts "#{i + 1}つ目の商品名を入力してください"
  name = gets.chomp

  puts "#{name}の値段を入力してください"
  price = gets.to_i

  total = total + price
  puts "#{name}：#{price}円"
end

puts "合計#{total}円"
```

</details>

---

### 問題92：出席者を数える

人数を入力し、1人ずつ `"出席"` または `"欠席"` を入力します。出席者数を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "人数を入力してください"
count = gets.to_i

attend_count = 0

count.times do |i|
  puts "#{i + 1}人目：出席か欠席を入力してください"
  status = gets.chomp

  if status == "出席"
    attend_count = attend_count + 1
  end
end

puts "出席#{attend_count}人"
```

</details>

---

### 問題93：ミニ家計簿を作る

最初の所持金を入力し、支出を何回か入力して、最後に残金を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "所持金を入力してください"
money = gets.to_i

puts "支出は何回ありますか"
count = gets.to_i

count.times do |i|
  puts "#{i + 1}回目の支出を入力してください"
  cost = gets.to_i
  money = money - cost
end

puts "残金#{money}円"
```

</details>

---

### 問題94：目標金額までの貯金を確認する

1日あたりの貯金額と日数を入力し、毎日合計を表示します。目標1000円以上になったら「達成」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "1日あたりの貯金額を入力してください"
money = gets.to_i

puts "何日続けますか"
days = gets.to_i

total = 0

days.times do |i|
  total = total + money

  if total >= 1000
    puts "#{i + 1}日目：#{total}円 達成"
  else
    puts "#{i + 1}日目：#{total}円"
  end
end
```

</details>

---

### 問題95：注文番号と明細番号を作る

注文が3件あり、それぞれに明細が2件あります。`注文1-明細1` のように表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
3.times do |order|
  2.times do |item|
    puts "注文#{order + 1}-明細#{item + 1}"
  end
end
```

</details>

---

### 問題96：入力した大きさのチェック表を作る

行数と列数を入力し、すべてのマスに `[ ]` を表示してチェック表を作ってみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "行数を入力してください"
rows = gets.to_i

puts "列数を入力してください"
columns = gets.to_i

rows.times do
  columns.times do
    print "[ ]"
  end
  puts ""
end
```

</details>

---

### 問題97：5回の入力で最小値を探す

5つの数字を入力し、一番小さい数字を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "1つ目の数字を入力してください"
min_number = gets.to_i

4.times do |i|
  puts "#{i + 2}つ目の数字を入力してください"
  number = gets.to_i

  if number < min_number
    min_number = number
  end
end

puts "一番小さい数字は#{min_number}"
```

</details>

---

### 問題98：ゲームの得点を集計する

プレイ回数を入力し、毎回の得点を入力します。合計点と100点以上だった回数を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "プレイ回数を入力してください"
count = gets.to_i

total = 0
high_score_count = 0

count.times do |i|
  puts "#{i + 1}回目の得点を入力してください"
  score = gets.to_i
  total = total + score

  if score >= 100
    high_score_count = high_score_count + 1
  end
end

puts "合計#{total}点"
puts "100点以上は#{high_score_count}回"
```

</details>

---

### 問題99：入力した数の約数を表示する

数を入力し、その数の約数をすべて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "数を入力してください"
n = gets.to_i

n.times do |i|
  number = i + 1

  if n % number == 0
    puts number
  end
end
```

</details>

---

### 問題100：簡単な注文システムを作る

注文数を入力し、各注文の単価と個数を入力します。注文ごとの小計と、最後に合計金額を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "注文数を入力してください"
order_count = gets.to_i

total = 0

order_count.times do |i|
  puts "#{i + 1}件目の単価を入力してください"
  price = gets.to_i

  puts "#{i + 1}件目の個数を入力してください"
  count = gets.to_i

  subtotal = price * count
  total = total + subtotal

  puts "#{i + 1}件目：#{subtotal}円"
end

puts "合計#{total}円"
```

</details>
