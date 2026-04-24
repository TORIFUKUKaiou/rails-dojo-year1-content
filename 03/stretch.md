# 第3回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第3回で学んだ `puts`、変数、`#{}`、計算、`if`/`elsif`/`else`、入力を使って解きましょう。

- `まずは`：1〜10
- `余裕があれば`：11〜20
- `さらに余裕があれば`：21〜30

やればやるほど力がつきます。できるところまで進めましょう。

---

## 1〜10：基本の条件分岐

### 問題1：大人か未成年か

`age` を使って、18歳以上なら「大人です」、そうでなければ「未成年です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
age = 17

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

</details>

---

### 問題2：合格か不合格か

`score` を使って、60点以上なら「合格」、それ以外は「不合格」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
score = 75

if score >= 60
  puts "合格"
else
  puts "不合格"
end
```

</details>

---

### 問題3：晴れか雨か

`weather` を使って、`"晴れ"` なら「散歩に行こう」、それ以外は「家にいよう」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
weather = "晴れ"

if weather == "晴れ"
  puts "散歩に行こう"
else
  puts "家にいよう"
end
```

</details>

---

### 問題4：偶数か奇数か

`number` を使って、偶数なら「偶数です」、奇数なら「奇数です」と表示してみましょう。

ヒント：`% 2` の結果が `0` なら偶数です。

<details>
<summary>解答例</summary>

```ruby
number = 7

if number % 2 == 0
  puts "偶数です"
else
  puts "奇数です"
end
```

</details>

---

### 問題5：正・負・ゼロ

`number` を使って、正の数なら「正の数です」、負の数なら「負の数です」、0なら「0です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
number = -3

if number > 0
  puts "正の数です"
elsif number < 0
  puts "負の数です"
else
  puts "0です"
end
```

</details>

---

### 問題6：気温でメッセージを変える

`temperature` を使って、30以上なら「暑いです」、15以上なら「ちょうどよいです」、それ未満なら「寒いです」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
temperature = 22

if temperature >= 30
  puts "暑いです"
elsif temperature >= 15
  puts "ちょうどよいです"
else
  puts "寒いです"
end
```

</details>

---

### 問題7：自動販売機

`money` を使って、500円以上なら「コーヒーが買えます」、200円以上なら「ジュースが買えます」、100円以上なら「水が買えます」、それ未満なら「お金が足りません」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
money = 350

if money >= 500
  puts "コーヒーが買えます"
elsif money >= 200
  puts "ジュースが買えます"
elsif money >= 100
  puts "水が買えます"
else
  puts "お金が足りません"
end
```

</details>

---

### 問題8：食べ物でメッセージを変える

`food` を使って、`"カレー"`、`"ラーメン"`、それ以外でメッセージを変えてみましょう。

<details>
<summary>解答例</summary>

```ruby
food = "ラーメン"

if food == "カレー"
  puts "辛口がおすすめです"
elsif food == "ラーメン"
  puts "スープも飲みたいですね"
else
  puts "#{food}、いいですね"
end
```

</details>

---

### 問題9：成績を3段階に分ける

`score` を使って、80以上なら「よくできました」、60以上なら「合格です」、それ以外は「もう少しがんばろう」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
score = 68

if score >= 80
  puts "よくできました"
elsif score >= 60
  puts "合格です"
else
  puts "もう少しがんばろう"
end
```

</details>

---

### 問題10：FizzBuzz（1問だけ）

`number` を使って、3でも5でも割り切れるなら「FizzBuzz」、3で割り切れるなら「Fizz」、5で割り切れるなら「Buzz」、それ以外は数値をそのまま表示してみましょう。

ヒント：両方の条件を同時に満たすかどうかは `&&` を使って書けます。

<details>
<summary>解答例</summary>

```ruby
number = 15

if number % 3 == 0 && number % 5 == 0
  puts "FizzBuzz"
elsif number % 3 == 0
  puts "Fizz"
elsif number % 5 == 0
  puts "Buzz"
else
  puts number
end
```

</details>

---

## 11〜20：入力して判定する

### 問題11：入力した年齢で判定する

キーボードから年齢を入力して、18歳以上なら「大人です」、それ以外は「未成年です」と表示してみましょう。

<details>
<summary>解答例</summary>

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

### 問題12：入力した点数で合否判定する

キーボードから点数を入力して、60点以上なら「合格」、それ以外は「不合格」と表示してみましょう。

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

### 問題13：入力した点数で成績を出す

キーボードから点数を入力して、成績（S/A/B/C/F）を表示してみましょう。

- 90以上：S
- 80以上：A
- 70以上：B
- 60以上：C
- 60未満：F

<details>
<summary>解答例</summary>

```ruby
puts "点数を入力してください"
score = gets.to_i

if score >= 90
  grade = "S"
elsif score >= 80
  grade = "A"
elsif score >= 70
  grade = "B"
elsif score >= 60
  grade = "C"
else
  grade = "F"
end

puts "#{score}点は#{grade}です"
```

</details>

---

### 問題14：入力した気温で判定する

キーボードから気温を入力して、30以上なら「暑いです」、15以上なら「ちょうどよいです」、それ未満なら「寒いです」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "気温を入力してください"
temperature = gets.to_i

if temperature >= 30
  puts "暑いです"
elsif temperature >= 15
  puts "ちょうどよいです"
else
  puts "寒いです"
end
```

</details>

---

### 問題15：入力した所持金で判定する

キーボードから所持金を入力して、自動販売機で買えるものを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "所持金を入力してください"
money = gets.to_i

if money >= 500
  puts "コーヒーが買えます"
elsif money >= 200
  puts "ジュースが買えます"
elsif money >= 100
  puts "水が買えます"
else
  puts "お金が足りません"
end
```

</details>

---

### 問題16：入力した月が冬かどうかを判定する

キーボードから月を入力して、12月・1月・2月なら「冬です」、それ以外なら「冬ではありません」と表示してみましょう。

ヒント：`||` は「または」という意味です。

<details>
<summary>解答例</summary>

```ruby
puts "月を入力してください"
month = gets.to_i

if month == 12 || month == 1 || month == 2
  puts "冬です"
else
  puts "冬ではありません"
end
```

</details>

---

### 問題17：入力した年齢を5段階に分ける

キーボードから年齢を入力して、次のように表示してみましょう。

- 0〜5歳：「幼児です」
- 6〜12歳：「小学生です」
- 13〜15歳：「中学生です」
- 16〜18歳：「高校生です」
- 19歳以上：「大人です」

<details>
<summary>解答例</summary>

```ruby
puts "年齢を入力してください"
age = gets.to_i

if age <= 5
  puts "幼児です"
elsif age <= 12
  puts "小学生です"
elsif age <= 15
  puts "中学生です"
elsif age <= 18
  puts "高校生です"
else
  puts "大人です"
end
```

</details>

---

### 問題18：入力した数が偶数か奇数かを判定する

キーボードから数を入力して、偶数なら「偶数です」、奇数なら「奇数です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "数を入力してください"
number = gets.to_i

if number % 2 == 0
  puts "偶数です"
else
  puts "奇数です"
end
```

</details>

---

### 問題19：入力したHPで状態を表示する

キーボードから HP を入力して、0以下なら「たおれた」、10以下なら「ピンチです」、それ以外は「まだ元気です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "HPを入力してください"
hp = gets.to_i

if hp <= 0
  puts "たおれた"
elsif hp <= 10
  puts "ピンチです"
else
  puts "まだ元気です"
end
```

</details>

---

### 問題20：入力した手でじゃんけんする

じゃんけんプログラムを作りましょう。自分の手と相手の手を入力して、勝敗を表示します。

- 1：グー
- 2：チョキ
- 3：パー

ヒント：`&&` は「かつ」という意味です。

<details>
<summary>解答例</summary>

```ruby
puts "自分の手を入力してください（1:グー 2:チョキ 3:パー）"
my_hand = gets.to_i

puts "相手の手を入力してください（1:グー 2:チョキ 3:パー）"
enemy_hand = gets.to_i

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
```

</details>

---

## 21〜30：第1回〜第3回をミックスする

### 問題21：入力した名前と年齢で自己紹介する

名前と年齢を入力して、自己紹介を表示し、そのあと年齢が18歳以上かどうかも表示してみましょう。

ヒント：文字を入力するときは `gets.chomp` を使います。`chomp` をつけると、最後の改行が消えます。

<details>
<summary>解答例</summary>

```ruby
puts "名前を入力してください"
name = gets.chomp

puts "年齢を入力してください"
age = gets.to_i

puts "名前：#{name}"
puts "年齢：#{age}歳"

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

</details>

---

### 問題22：入力した値段と個数で送料判定する

値段と個数を入力して、合計金額を表示し、1000円以上なら「送料無料です」、それ未満なら「送料500円かかります」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "値段を入力してください"
price = gets.to_i

puts "個数を入力してください"
count = gets.to_i

total = price * count

puts "合計は#{total}円です"

if total >= 1000
  puts "送料無料です"
else
  puts "送料500円かかります"
end
```

</details>

---

### 問題23：入力した3教科で平均点を出す

3教科の点数を入力して、合計と平均を表示し、平均が60点以上なら「合格」、それ未満なら「不合格」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "国語の点数を入力してください"
japanese = gets.to_i

puts "数学の点数を入力してください"
math = gets.to_i

puts "英語の点数を入力してください"
english = gets.to_i

total = japanese + math + english
average = total / 3

puts "合計：#{total}点"
puts "平均：#{average}点"

if average >= 60
  puts "合格"
else
  puts "不合格"
end
```

</details>

---

### 問題24：入力した身長を変換して判定する

身長を cm で入力して、`m` と `cm` に分けて表示し、170cm以上なら「高めです」、それ未満なら「170cm未満です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "身長をcmで入力してください"
height_cm = gets.to_i

meters = height_cm / 100
remaining_cm = height_cm % 100

puts "#{height_cm}cmは#{meters}m#{remaining_cm}cmです"

if height_cm >= 170
  puts "高めです"
else
  puts "170cm未満です"
end
```

</details>

---

### 問題25：入力した秒を分と秒に分ける

秒数を入力して、`分` と `秒` に分けて表示し、180秒以上なら「3分以上です」、それ未満なら「3分未満です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "秒数を入力してください"
total_seconds = gets.to_i

minutes = total_seconds / 60
seconds = total_seconds % 60

puts "#{total_seconds}秒は#{minutes}分#{seconds}秒です"

if total_seconds >= 180
  puts "3分以上です"
else
  puts "3分未満です"
end
```

</details>

---

### 問題26：入力した3つの値段でレシートを作る

3つの商品の値段を入力して、合計金額を表示し、1000円を超えていたら「買いすぎ注意」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
puts "1つ目の値段を入力してください"
price1 = gets.to_i

puts "2つ目の値段を入力してください"
price2 = gets.to_i

puts "3つ目の値段を入力してください"
price3 = gets.to_i

total = price1 + price2 + price3

puts "合計：#{total}円"

if total > 1000
  puts "買いすぎ注意"
else
  puts "まだ予算内です"
end
```

</details>

---

### 問題27：間違い探し その1

次のコードは、`gets` で入力した値をそのまま数値と比べているので、うまく動きません。直してみましょう。

```ruby
puts "年齢を入力してください"
age = gets

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

<details>
<summary>解答例</summary>

```ruby
puts "年齢を入力してください"
age = gets.to_i

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

`gets` だけだと文字列なので、`to_i` で整数に変換します。

</details>

---

### 問題28：間違い探し その2

次のコードは、`=` と `==` をまちがえています。直して動くようにしましょう。

```ruby
puts "点数を入力してください"
score = gets.to_i

if score = 100
  puts "満点です"
else
  puts "満点ではありません"
end
```

<details>
<summary>解答例</summary>

```ruby
puts "点数を入力してください"
score = gets.to_i

if score == 100
  puts "満点です"
else
  puts "満点ではありません"
end
```

比較するときは `==` を使います。

</details>

---

### 問題29：間違い探し その3

次のコードは、条件の順番がよくありません。12月を入力しても「冬ではありません」と出ます。順番を直しましょう。

```ruby
puts "月を入力してください"
month = gets.to_i

if month >= 1
  puts "冬ではありません"
elsif month == 12 || month == 1 || month == 2
  puts "冬です"
end
```

<details>
<summary>解答例</summary>

```ruby
puts "月を入力してください"
month = gets.to_i

if month == 12 || month == 1 || month == 2
  puts "冬です"
else
  puts "冬ではありません"
end
```

広すぎる条件を先に書くと、そこで止まってしまいます。

</details>

---

### 問題30：まとめカードを作る

名前、年齢、点数を入力して、自己紹介とテスト結果をまとめたカードを作ってみましょう。

例：

```
====================
名前：田中
年齢：17歳
点数：78点
年齢判定：未成年
テスト判定：合格
====================
```

<details>
<summary>解答例</summary>

```ruby
puts "名前を入力してください"
name = gets.chomp

puts "年齢を入力してください"
age = gets.to_i

puts "点数を入力してください"
score = gets.to_i

puts "===================="
puts "名前：#{name}"
puts "年齢：#{age}歳"
puts "点数：#{score}点"

if age >= 18
  puts "年齢判定：大人"
else
  puts "年齢判定：未成年"
end

if score >= 60
  puts "テスト判定：合格"
else
  puts "テスト判定：不合格"
end

puts "===================="
```

</details>
