# 第3回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第3回で学んだ `puts`、変数、`#{}`、計算、`if`/`elsif`/`else` を使って解きましょう。

- `まずは`：1〜10
- `余裕があれば`：11〜20
- `さらに余裕があれば`：21〜30

全部やる必要はありません。できるところまで進めれば十分です。

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

## 11〜20：変数と計算を組み合わせる

### 問題11：名前つきで合格判定

`name` と `score` を使って、合格なら「田中さんは合格です」、不合格なら「田中さんは不合格です」のように表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
name = "田中"
score = 72

if score >= 60
  puts "#{name}さんは合格です"
else
  puts "#{name}さんは不合格です"
end
```

</details>

---

### 問題12：送料無料判定

`price` と `count` から合計金額を計算し、1000円以上なら「送料無料です」、それ未満なら「送料500円かかります」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
price = 250
count = 5
total = price * count

if total >= 1000
  puts "合計#{total}円：送料無料です"
else
  puts "合計#{total}円：送料500円かかります"
end
```

</details>

---

### 問題13：税込み金額で判定する

`price` と `count` から税込み金額を計算し、1500円以上なら「予算オーバーです」、それ以外は「予算内です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
price = 400
count = 3
total = price * count
tax = total * 10 / 100
total_with_tax = total + tax

if total_with_tax >= 1500
  puts "合計#{total_with_tax}円：予算オーバーです"
else
  puts "合計#{total_with_tax}円：予算内です"
end
```

</details>

---

### 問題14：生まれ年から判定する

`birth_year` から2026年の年齢を計算し、18歳以上なら「大人です」、それ以外は「未成年です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
birth_year = 2010
age = 2026 - birth_year

if age >= 18
  puts "#{age}歳なので大人です"
else
  puts "#{age}歳なので未成年です"
end
```

</details>

---

### 問題15：3教科の平均で判定する

3教科の点数から平均点を計算し、60点以上なら「合格」、それ未満なら「不合格」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
japanese = 75
math = 82
english = 58
total = japanese + math + english
average = total / 3

if average >= 60
  puts "平均#{average}点：合格"
else
  puts "平均#{average}点：不合格"
end
```

</details>

---

### 問題16：身長を変換して判定する

`height_cm` を `m` と `cm` に分けて表示し、170cm以上なら「高めです」、それ未満なら「170cm未満です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
height_cm = 168
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

### 問題17：秒を分と秒に分けて判定する

`total_seconds` を `分` と `秒` に分けて表示し、180秒以上なら「3分以上です」、それ未満なら「3分未満です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
total_seconds = 185
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

### 問題18：おみくじ

`rand` を使って、1〜5の数字をランダムに出し、その数字に応じておみくじの結果を表示してみましょう。

```ruby
number = rand(1..5)
puts number
```

<details>
<summary>解答例</summary>

```ruby
number = rand(1..5)

if number == 1
  puts "大吉"
elsif number == 2
  puts "中吉"
elsif number == 3
  puts "小吉"
elsif number == 4
  puts "末吉"
else
  puts "凶"
end
```

</details>

---

### 問題19：うるう年判定

`year` を使って、その年がうるう年かどうかを判定してみましょう。

ルール：
- 4で割り切れる年はうるう年
- ただし100で割り切れる年はうるう年ではない
- ただし400で割り切れる年はうるう年

<details>
<summary>解答例</summary>

```ruby
year = 2024

if year % 400 == 0
  puts "#{year}年はうるう年です"
elsif year % 100 == 0
  puts "#{year}年はうるう年ではありません"
elsif year % 4 == 0
  puts "#{year}年はうるう年です"
else
  puts "#{year}年はうるう年ではありません"
end
```

</details>

---

### 問題20：HPで状態を表示する

`hp` を使って、0以下なら「たおれた」、10以下なら「ピンチです」、それ以外は「まだ元気です」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
hp = 8

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

## 21〜30：第1回〜第3回をミックスする

### 問題21：自己紹介と年齢判定

`name`、`age`、`hobby` を使って自己紹介を表示し、そのあと年齢が18歳以上かどうかも表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
name = "田中"
age = 17
hobby = "ゲーム"

puts "名前：#{name}"
puts "年齢：#{age}歳"
puts "趣味：#{hobby}"

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

</details>

---

### 問題22：レシートと予算判定

商品名と値段を3つ用意してレシート風に表示し、合計が1000円を超えていたら「買いすぎ注意」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
item1 = "りんご"
price1 = 150
item2 = "パン"
price2 = 280
item3 = "牛乳"
price3 = 198
total = price1 + price2 + price3

puts "========== レシート =========="
puts "#{item1}：#{price1}円"
puts "#{item2}：#{price2}円"
puts "#{item3}：#{price3}円"
puts "合計：#{total}円"

if total > 1000
  puts "買いすぎ注意"
else
  puts "まだ予算内です"
end
```

</details>

---

### 問題23：名前つき成績判定

`name` と `score` を使って、点数と成績をまとめて表示してみましょう。

例：

```
山田さんは78点です
判定：合格です
```

<details>
<summary>解答例</summary>

```ruby
name = "山田"
score = 78

puts "#{name}さんは#{score}点です"

if score >= 60
  puts "判定：合格です"
else
  puts "判定：不合格です"
end
```

</details>

---

### 問題24：3日分の勉強時間

3日分の勉強時間を変数に入れて合計を出し、120分以上なら「よくがんばりました」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
day1 = 40
day2 = 35
day3 = 50
total = day1 + day2 + day3

puts "合計勉強時間：#{total}分"

if total >= 120
  puts "よくがんばりました"
else
  puts "明日も続けよう"
end
```

</details>

---

### 問題25：おこづかい帳

もらったお金と、使ったお金を変数に入れて残り金額を表示し、残りが500円以上なら「まだ使えます」、それ未満なら「使いすぎ注意」と表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
money = 2000
lunch = 650
juice = 150
rest = money - lunch - juice

puts "残り：#{rest}円"

if rest >= 500
  puts "まだ使えます"
else
  puts "使いすぎ注意"
end
```

</details>

---

### 問題26：間違い探し その1

次のコードは、文字列に `""` がないのでエラーになります。直して動くようにしましょう。

```ruby
weather = 晴れ

if weather == "晴れ"
  puts "散歩に行こう"
else
  puts "家にいよう"
end
```

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

文字列は `""` で囲みます。

</details>

---

### 問題27：間違い探し その2

次のコードは、`end` が足りません。直して動くようにしましょう。

```ruby
score = 75

if score >= 60
  puts "合格"
else
  puts "不合格"
```

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

`if` を書いたら、最後に `end` が必要です。

</details>

---

### 問題28：間違い探し その3

次のコードは、`else age < 18` の書き方が間違っています。直して動くようにしましょう。

```ruby
age = 16

if age >= 18
  puts "大人です"
else age < 18
  puts "未成年です"
end
```

<details>
<summary>解答例</summary>

```ruby
age = 16

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

`else` には条件を書きません。条件を書くなら `elsif` を使います。

</details>

---

### 問題29：間違い探し その4

次のコードは、条件の順番がよくありません。200円のときに「水が買えます」と出てしまいます。順番を直しましょう。

```ruby
money = 200

if money >= 100
  puts "水が買えます"
elsif money >= 200
  puts "ジュースが買えます"
elsif money >= 500
  puts "コーヒーが買えます"
else
  puts "お金が足りません"
end
```

<details>
<summary>解答例</summary>

```ruby
money = 200

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

条件は上から順に調べられるので、広い条件を先に書くと、そこで止まってしまいます。

</details>

---

### 問題30：まとめカードを作る

`name`、`age`、`score` を使って、自己紹介とテスト結果をまとめたカードを作ってみましょう。

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
name = "田中"
age = 17
score = 78

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
