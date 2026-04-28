# 第3回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第3回で学んだ `puts`、変数、`#{}`、計算、`if`/`elsif`/`else`、入力を使って解きましょう。

- `まずは`：1〜10
- `余裕があれば`：11〜20
- `さらに余裕があれば`：21〜30
- `まだ進める人は`：31〜50
- `どんどん進む人は`：51〜80
- `まだ足りない人は`：81〜100

やればやるほど力がつきます。できるところまで進めましょう。

---

## 1〜10：基本の条件分岐

### 問題1：大人か未成年か

変数 `age` を使って、18歳以上なら「大人です」、そうでなければ「未成年です」と表示してみましょう。

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

変数 `score` を使って、60点以上なら「合格」、それ以外は「不合格」と表示してみましょう。

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

変数 `weather` を使って、`"晴れ"` なら「散歩に行こう」、それ以外は「家にいよう」と表示してみましょう。

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

変数 `number` を使って、偶数なら「偶数です」、奇数なら「奇数です」と表示してみましょう。

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

変数 `number` を使って、正の数なら「正の数です」、負の数なら「負の数です」、0なら「0です」と表示してみましょう。

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

変数 `temperature` を使って、30以上なら「暑いです」、15以上なら「ちょうどよいです」、それ未満なら「寒いです」と表示してみましょう。

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

変数 `money` を使って、500円以上なら「コーヒーが買えます」、200円以上なら「ジュースが買えます」、100円以上なら「水が買えます」、それ未満なら「お金が足りません」と表示してみましょう。

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

変数 `food` を使って、`"カレー"`、`"ラーメン"`、それ以外でメッセージを変えてみましょう。

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

変数 `score` を使って、80以上なら「よくできました」、60以上なら「合格です」、それ以外は「もう少しがんばろう」と表示してみましょう。

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

変数 `number` を使って、3でも5でも割り切れるなら「FizzBuzz」、3で割り切れるなら「Fizz」、5で割り切れるなら「Buzz」、それ以外は数値をそのまま表示してみましょう。

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

広すぎる条件を先に書くと、そこで条件判定が確定してしまいます。

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

---

## 31〜40：出力を予想する

### 問題31：条件が正しいとき

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
age = 20

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

<details>
<summary>解答例</summary>

```
大人です
```

`20 >= 18` は正しいので、`if` の中が実行されます。

</details>

---

### 問題32：条件が正しくないとき

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
age = 15

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

<details>
<summary>解答例</summary>

```
未成年です
```

`15 >= 18` は正しくないので、`else` の中が実行されます。

</details>

---

### 問題33：境界の値

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
age = 18

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

<details>
<summary>解答例</summary>

```
大人です
```

`>=` は「以上」なので、18も含みます。

</details>

---

### 問題34：`>` と `>=` の違い

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
age = 18

if age > 18
  puts "18歳より上です"
else
  puts "18歳以下です"
end
```

<details>
<summary>解答例</summary>

```
18歳以下です
```

`>` は「より大きい」です。18ちょうどは含みません。

</details>

---

### 問題35：文字列の比較

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
weather = "雨"

if weather == "晴れ"
  puts "散歩に行こう"
else
  puts "家にいよう"
end
```

<details>
<summary>解答例</summary>

```
家にいよう
```

`weather` は `"雨"` なので、`weather == "晴れ"` は正しくありません。

</details>

---

### 問題36：`if` が2つある

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
score = 90

if score >= 60
  puts "合格"
end

if score >= 80
  puts "優秀"
end
```

<details>
<summary>解答例</summary>

```
合格
優秀
```

`if` が2つあるので、それぞれ別々に判定されます。

</details>

---

### 問題37：`elsif` は最初の1つだけ

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
score = 90

if score >= 60
  puts "合格"
elsif score >= 80
  puts "優秀"
else
  puts "不合格"
end
```

<details>
<summary>解答例</summary>

```
合格
```

上から順に見て、最初に正しい `score >= 60` で条件判定が確定します。

</details>

---

### 問題38：条件の順番を変える

問題37を直して、`score = 90` のとき「優秀」と表示されるようにしましょう。

<details>
<summary>解答例</summary>

```ruby
score = 90

if score >= 80
  puts "優秀"
elsif score >= 60
  puts "合格"
else
  puts "不合格"
end
```

広い条件より、厳しい条件を先に書きます。

</details>

---

### 問題39：`!=` を読む

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
name = "田中"

if name != "佐藤"
  puts "佐藤さんではありません"
else
  puts "佐藤さんです"
end
```

<details>
<summary>解答例</summary>

```
佐藤さんではありません
```

`!=` は「等しくない」という意味です。

</details>

---

### 問題40：何も表示されない場合

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
score = 40

if score >= 60
  puts "合格"
end
```

<details>
<summary>解答例</summary>

何も表示されません。

`else` がないので、条件が正しくないときは何も実行されません。

</details>

---

## 41〜50：`=` と `==`、文字列と変数

### 問題41：代入と比較

次のコードは意図が分かりにくいです。`score` が60点かどうかを調べるコードに直しましょう。

```ruby
score = 60

if score = 60
  puts "60点です"
end
```

<details>
<summary>解答例</summary>

```ruby
score = 60

if score == 60
  puts "60点です"
end
```

条件で「等しいか」を調べるときは `==` を使います。

</details>

---

### 問題42：文字列の比較で `==` を使う

次のコードを直して、`food` が `"カレー"` のとき「カレーです」と表示されるようにしましょう。

```ruby
food = "カレー"

if food = "カレー"
  puts "カレーです"
end
```

<details>
<summary>解答例</summary>

```ruby
food = "カレー"

if food == "カレー"
  puts "カレーです"
end
```

</details>

---

### 問題43：変数ではなく文字を見ている

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
weather = "晴れ"

if "weather" == "晴れ"
  puts "散歩に行こう"
else
  puts "家にいよう"
end
```

<details>
<summary>解答例</summary>

```
家にいよう
```

`"weather"` は文字列です。変数 `weather` の中身ではありません。

</details>

---

### 問題44：変数の中身を見る

問題43を直して、変数 `weather` が `"晴れ"` のとき「散歩に行こう」と表示されるようにしましょう。

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

### 問題45：表示だけが間違っている

次のコードを直して、`田中さん、こんにちは` と表示されるようにしましょう。

```ruby
name = "田中"

if name == "田中"
  puts "nameさん、こんにちは"
end
```

<details>
<summary>解答例</summary>

```ruby
name = "田中"

if name == "田中"
  puts "#{name}さん、こんにちは"
end
```

</details>

---

### 問題46：条件だけが間違っている

次のコードを直して、「ログインしました」と表示されるようにしましょう。

```ruby
user_name = "admin"

if "user_name" == "admin"
  puts "ログインしました"
else
  puts "ユーザー名が違います"
end
```

<details>
<summary>解答例</summary>

```ruby
user_name = "admin"

if user_name == "admin"
  puts "ログインしました"
else
  puts "ユーザー名が違います"
end
```

</details>

---

### 問題47：数値を文字列として比べている

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
age = 18

if age == "18"
  puts "18歳です"
else
  puts "18歳ではありません"
end
```

<details>
<summary>解答例</summary>

```
18歳ではありません
```

数値の `18` と文字列の `"18"` は別物です。

</details>

---

### 問題48：数値として比べる

問題47を直して、`18歳です` と表示されるようにしましょう。

<details>
<summary>解答例</summary>

```ruby
age = 18

if age == 18
  puts "18歳です"
else
  puts "18歳ではありません"
end
```

</details>

---

### 問題49：入力は文字列

次のコードを実行して `18` と入力すると、何が表示されるか予想してから実行しましょう。

```ruby
puts "年齢を入力してください"
age = gets.chomp

if age == 18
  puts "18歳です"
else
  puts "18歳ではありません"
end
```

<details>
<summary>解答例</summary>

```
18歳ではありません
```

`gets.chomp` で受け取った `age` は文字列なので、数値の `18` とは別物です。

</details>

---

### 問題50：入力を数値にする

問題49を直して、`18` と入力したら `18歳です` と表示されるようにしましょう。

<details>
<summary>解答例</summary>

```ruby
puts "年齢を入力してください"
age = gets.to_i

if age == 18
  puts "18歳です"
else
  puts "18歳ではありません"
end
```

</details>

---

## 51〜60：条件の順番を考える

### 問題51：100点を特別扱いする

`score` が100なら「満点」、80以上なら「優秀」、60以上なら「合格」、それ以外は「不合格」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
score = 100

if score == 100
  puts "満点"
elsif score >= 80
  puts "優秀"
elsif score >= 60
  puts "合格"
else
  puts "不合格"
end
```

</details>

---

### 問題52：順番が悪いコードを直す その1

次のコードは、`score = 100` でも「優秀」と表示されます。「満点」と表示されるように直しましょう。

```ruby
score = 100

if score >= 80
  puts "優秀"
elsif score == 100
  puts "満点"
else
  puts "普通"
end
```

<details>
<summary>解答例</summary>

```ruby
score = 100

if score == 100
  puts "満点"
elsif score >= 80
  puts "優秀"
else
  puts "普通"
end
```

</details>

---

### 問題53：年齢を4段階に分ける

変数 `age` を使って、6歳未満なら「幼児」、12歳未満なら「小学生くらい」、18歳未満なら「中高生くらい」、それ以外は「大人」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
age = 15

if age < 6
  puts "幼児"
elsif age < 12
  puts "小学生くらい"
elsif age < 18
  puts "中高生くらい"
else
  puts "大人"
end
```

</details>

---

### 問題54：料金を年齢で分ける

変数 `age` を使って、6歳未満なら0円、18歳未満なら500円、それ以外は1000円と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
age = 16

if age < 6
  puts "料金：0円"
elsif age < 18
  puts "料金：500円"
else
  puts "料金：1000円"
end
```

</details>

---

### 問題55：HPで状態を分ける

変数 `hp` が0以下なら「たおれた」、30未満なら「危険」、70未満なら「注意」、それ以外は「元気」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
hp = 25

if hp <= 0
  puts "たおれた"
elsif hp < 30
  puts "危険"
elsif hp < 70
  puts "注意"
else
  puts "元気"
end
```

</details>

---

### 問題56：気温を5段階に分ける

変数 `temperature` が35以上なら「猛暑」、30以上なら「暑い」、20以上なら「快適」、10以上なら「寒い」、それ以外は「とても寒い」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
temperature = 32

if temperature >= 35
  puts "猛暑"
elsif temperature >= 30
  puts "暑い"
elsif temperature >= 20
  puts "快適"
elsif temperature >= 10
  puts "寒い"
else
  puts "とても寒い"
end
```

</details>

---

### 問題57：買えるものを分ける

変数 `money` が1000円以上なら「ランチが買えます」、500円以上なら「パンが買えます」、150円以上なら「飲み物が買えます」、それ以外は「何も買えません」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
money = 600

if money >= 1000
  puts "ランチが買えます"
elsif money >= 500
  puts "パンが買えます"
elsif money >= 150
  puts "飲み物が買えます"
else
  puts "何も買えません"
end
```

</details>

---

### 問題58：月を季節に分ける

変数 `month` が3〜5なら「春」、6〜8なら「夏」、9〜11なら「秋」、12・1・2なら「冬」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
month = 4

if month >= 3 && month <= 5
  puts "春"
elsif month >= 6 && month <= 8
  puts "夏"
elsif month >= 9 && month <= 11
  puts "秋"
elsif month == 12 || month == 1 || month == 2
  puts "冬"
else
  puts "その月はありません"
end
```

</details>

---

### 問題59：曜日でメッセージを変える

変数 `day` が `"土曜"` または `"日曜"` なら「休み」、それ以外なら「平日」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
day = "日曜"

if day == "土曜" || day == "日曜"
  puts "休み"
else
  puts "平日"
end
```

</details>

---

### 問題60：パスワード判定

変数 `password` が `"ruby"` なら「ログイン成功」、それ以外なら「ログイン失敗」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
password = "ruby"

if password == "ruby"
  puts "ログイン成功"
else
  puts "ログイン失敗"
end
```

</details>

---

## 61〜70：入力して判定する

### 問題61：入力した名前であいさつする

名前を入力し、`"田中"` なら「田中さん、こんにちは」、それ以外なら「はじめまして」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "名前を入力してください"
name = gets.chomp

if name == "田中"
  puts "田中さん、こんにちは"
else
  puts "はじめまして"
end
```

</details>

---

### 問題62：入力した数が10以上か

数値を入力し、10以上なら「10以上です」、それ以外なら「10未満です」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "数値を入力してください"
number = gets.to_i

if number >= 10
  puts "10以上です"
else
  puts "10未満です"
end
```

</details>

---

### 問題63：入力した点数を4段階に分ける

点数を入力し、90以上なら「A」、80以上なら「B」、60以上なら「C」、それ以外なら「D」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "点数を入力してください"
score = gets.to_i

if score >= 90
  puts "A"
elsif score >= 80
  puts "B"
elsif score >= 60
  puts "C"
else
  puts "D"
end
```

</details>

---

### 問題64：入力した月が夏か

月を入力し、6月・7月・8月なら「夏です」、それ以外なら「夏ではありません」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "月を入力してください"
month = gets.to_i

if month == 6 || month == 7 || month == 8
  puts "夏です"
else
  puts "夏ではありません"
end
```

</details>

---

### 問題65：入力した合計金額で送料判定

合計金額を入力し、1000円以上なら「送料無料」、それ以外なら「送料500円」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "合計金額を入力してください"
total = gets.to_i

if total >= 1000
  puts "送料無料"
else
  puts "送料500円"
end
```

</details>

---

### 問題66：入力した体温で判定する

体温を整数で入力し、37以上なら「熱があります」、それ以外なら「平熱です」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "体温を入力してください"
temperature = gets.to_i

if temperature >= 37
  puts "熱があります"
else
  puts "平熱です"
end
```

小数はまだ扱わないので、ここでは整数で入力します。

</details>

---

### 問題67：入力した注文数で割引判定

注文数を入力し、10個以上なら「まとめ買い割引」、それ以外なら「通常価格」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "注文数を入力してください"
count = gets.to_i

if count >= 10
  puts "まとめ買い割引"
else
  puts "通常価格"
end
```

</details>

---

### 問題68：入力した手でじゃんけん判定

自分の手を入力し、`"グー"` なら「あなたはグー」、`"チョキ"` なら「あなたはチョキ」、`"パー"` なら「あなたはパー」、それ以外なら「正しく入力してください」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "グー、チョキ、パーのどれかを入力してください"
hand = gets.chomp

if hand == "グー"
  puts "あなたはグー"
elsif hand == "チョキ"
  puts "あなたはチョキ"
elsif hand == "パー"
  puts "あなたはパー"
else
  puts "正しく入力してください"
end
```

</details>

---

### 問題69：入力した名前と点数でメッセージ

名前と点数を入力し、60点以上なら「○○さん、合格です」、それ以外なら「○○さん、再挑戦です」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "名前を入力してください"
name = gets.chomp

puts "点数を入力してください"
score = gets.to_i

if score >= 60
  puts "#{name}さん、合格です"
else
  puts "#{name}さん、再挑戦です"
end
```

</details>

---

### 問題70：入力した値段と個数で合計判定

値段と個数を入力し、合計が1000円以上なら「大きな買い物」、それ以外なら「小さな買い物」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "値段を入力してください"
price = gets.to_i

puts "個数を入力してください"
count = gets.to_i

total = price * count

if total >= 1000
  puts "合計#{total}円：大きな買い物"
else
  puts "合計#{total}円：小さな買い物"
end
```

</details>

---

## 71〜80：間違い探し

### 問題71：`end` が足りない

次のコードはエラーになります。直して動くようにしましょう。

```ruby
score = 70

if score >= 60
  puts "合格"
else
  puts "不合格"
```

<details>
<summary>解答例</summary>

```ruby
score = 70

if score >= 60
  puts "合格"
else
  puts "不合格"
end
```

</details>

---

### 問題72：`elsif` のつづり

次のコードはエラーになります。直して動くようにしましょう。

```ruby
score = 75

if score >= 80
  puts "優秀"
elseif score >= 60
  puts "合格"
else
  puts "不合格"
end
```

<details>
<summary>解答例</summary>

```ruby
score = 75

if score >= 80
  puts "優秀"
elsif score >= 60
  puts "合格"
else
  puts "不合格"
end
```

Rubyでは `elseif` ではなく `elsif` と書きます。

</details>

---

### 問題73：条件のあとに `then` はいらない

次のコードは動く場合もありますが、この授業の書き方に直しましょう。

```ruby
age = 20

if age >= 18 then
  puts "大人"
end
```

<details>
<summary>解答例</summary>

```ruby
age = 20

if age >= 18
  puts "大人"
end
```

</details>

---

### 問題74：比較記号が逆

次のコードは、60点以上を合格にしたいのに逆になっています。直しましょう。

```ruby
score = 70

if score < 60
  puts "合格"
else
  puts "不合格"
end
```

<details>
<summary>解答例</summary>

```ruby
score = 70

if score >= 60
  puts "合格"
else
  puts "不合格"
end
```

</details>

---

### 問題75：文字列の囲み忘れ

次のコードはエラーになります。直しましょう。

```ruby
weather = 晴れ

if weather == "晴れ"
  puts "散歩"
end
```

<details>
<summary>解答例</summary>

```ruby
weather = "晴れ"

if weather == "晴れ"
  puts "散歩"
end
```

</details>

---

### 問題76：条件の文字列だけ間違い

次のコードは「散歩」と表示したいのに表示されません。直しましょう。

```ruby
weather = "晴れ"

if weather == "雨"
  puts "散歩"
else
  puts "家"
end
```

<details>
<summary>解答例</summary>

```ruby
weather = "晴れ"

if weather == "晴れ"
  puts "散歩"
else
  puts "家"
end
```

</details>

---

### 問題77：入力を数値にしていない

次のコードはエラーになります。直しましょう。

```ruby
puts "年齢を入力してください"
age = gets.chomp

if age >= 18
  puts "大人"
else
  puts "未成年"
end
```

<details>
<summary>解答例</summary>

```ruby
puts "年齢を入力してください"
age = gets.to_i

if age >= 18
  puts "大人"
else
  puts "未成年"
end
```

</details>

---

### 問題78：`&&` を使う

次のコードを、`&&` を使って短く書き直しましょう。

```ruby
score = 75

if score >= 60
  if score < 80
    puts "60点以上80点未満"
  end
end
```

<details>
<summary>解答例</summary>

```ruby
score = 75

if score >= 60 && score < 80
  puts "60点以上80点未満"
end
```

</details>

---

### 問題79：`||` を使う

次のコードを、`||` を使って短く書き直しましょう。

```ruby
month = 1

if month == 12
  puts "冬"
elsif month == 1
  puts "冬"
elsif month == 2
  puts "冬"
end
```

<details>
<summary>解答例</summary>

```ruby
month = 1

if month == 12 || month == 1 || month == 2
  puts "冬"
end
```

</details>

---

### 問題80：表示に変数を入れる

次のコードを直して、`田中さんは合格です` と表示されるようにしましょう。

```ruby
name = "田中"
score = 80

if score >= 60
  puts "nameさんは合格です"
else
  puts "nameさんは不合格です"
end
```

<details>
<summary>解答例</summary>

```ruby
name = "田中"
score = 80

if score >= 60
  puts "#{name}さんは合格です"
else
  puts "#{name}さんは不合格です"
end
```

</details>

---

## 81〜90：小さなアプリを作る

### 問題81：映画館の料金アプリ

年齢を入力し、6歳未満なら0円、18歳未満なら1000円、それ以外なら1800円と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "年齢を入力してください"
age = gets.to_i

if age < 6
  puts "料金：0円"
elsif age < 18
  puts "料金：1000円"
else
  puts "料金：1800円"
end
```

</details>

---

### 問題82：成績カード

名前と点数を入力し、点数に応じて「優秀」「合格」「再挑戦」を表示するカードを作りましょう。

<details>
<summary>解答例</summary>

```ruby
puts "名前を入力してください"
name = gets.chomp

puts "点数を入力してください"
score = gets.to_i

puts "===================="
puts "名前：#{name}"
puts "点数：#{score}点"

if score >= 80
  puts "判定：優秀"
elsif score >= 60
  puts "判定：合格"
else
  puts "判定：再挑戦"
end

puts "===================="
```

</details>

---

### 問題83：買い物チェック

商品名、値段、個数を入力し、合計が1000円以上なら「送料無料」と表示するレシートを作りましょう。

<details>
<summary>解答例</summary>

```ruby
puts "商品名を入力してください"
item = gets.chomp

puts "値段を入力してください"
price = gets.to_i

puts "個数を入力してください"
count = gets.to_i

total = price * count

puts "商品：#{item}"
puts "合計：#{total}円"

if total >= 1000
  puts "送料無料"
else
  puts "送料500円"
end
```

</details>

---

### 問題84：体調チェック

体温を整数で入力し、37以上なら「休みましょう」、それ以外なら「無理せず行動しましょう」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "体温を入力してください"
temperature = gets.to_i

if temperature >= 37
  puts "休みましょう"
else
  puts "無理せず行動しましょう"
end
```

</details>

---

### 問題85：ゲームのレベル判定

経験値を入力し、1000以上なら「レベル3」、500以上なら「レベル2」、それ以外なら「レベル1」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "経験値を入力してください"
exp = gets.to_i

if exp >= 1000
  puts "レベル3"
elsif exp >= 500
  puts "レベル2"
else
  puts "レベル1"
end
```

</details>

---

### 問題86：バス料金

年齢を入力し、6歳未満なら「無料」、12歳未満なら「子ども料金」、それ以外なら「大人料金」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "年齢を入力してください"
age = gets.to_i

if age < 6
  puts "無料"
elsif age < 12
  puts "子ども料金"
else
  puts "大人料金"
end
```

</details>

---

### 問題87：ログイン判定

ユーザー名を入力し、`"admin"` なら「管理者です」、それ以外なら「一般ユーザーです」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "ユーザー名を入力してください"
user_name = gets.chomp

if user_name == "admin"
  puts "管理者です"
else
  puts "一般ユーザーです"
end
```

</details>

---

### 問題88：曜日アプリ

曜日を入力し、土曜または日曜なら「休日」、それ以外なら「平日」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "曜日を入力してください"
day = gets.chomp

if day == "土曜" || day == "日曜"
  puts "休日"
else
  puts "平日"
end
```

</details>

---

### 問題89：割り勘チェック

合計金額と人数を入力し、1人あたりの金額を表示しましょう。1人あたり1000円以上なら「高め」、それ以外なら「安め」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "合計金額を入力してください"
total = gets.to_i

puts "人数を入力してください"
people = gets.to_i

per_person = total / people

puts "1人あたり：#{per_person}円"

if per_person >= 1000
  puts "高め"
else
  puts "安め"
end
```

</details>

---

### 問題90：持ち物チェック

天気を入力し、`"雨"` なら「傘を持つ」、`"晴れ"` なら「帽子を持つ」、それ以外なら「そのまま出かける」と表示しましょう。

<details>
<summary>解答例</summary>

```ruby
puts "天気を入力してください"
weather = gets.chomp

if weather == "雨"
  puts "傘を持つ"
elsif weather == "晴れ"
  puts "帽子を持つ"
else
  puts "そのまま出かける"
end
```

</details>

---

## 91〜100：仕上げ

### 問題91：自分で条件分岐を作る

変数を1つ作り、`if`/`else` を使って表示が変わるプログラムを作りましょう。

<details>
<summary>解答例</summary>

```ruby
hungry = "はい"

if hungry == "はい"
  puts "ごはんを食べよう"
else
  puts "少し休もう"
end
```

</details>

---

### 問題92：自分で3段階判定を作る

`elsif` を使って、3段階に分かれるプログラムを作りましょう。

<details>
<summary>解答例</summary>

```ruby
sleep_hours = 6

if sleep_hours >= 8
  puts "よく眠れました"
elsif sleep_hours >= 6
  puts "ふつうです"
else
  puts "眠いです"
end
```

</details>

---

### 問題93：自分で入力アプリを作る

`gets.chomp` を使って、入力した文字によって結果が変わるプログラムを作りましょう。

<details>
<summary>解答例</summary>

```ruby
puts "好きな色を入力してください"
color = gets.chomp

if color == "青"
  puts "落ち着いた色ですね"
else
  puts "#{color}もいいですね"
end
```

</details>

---

### 問題94：自分で数値入力アプリを作る

`gets.to_i` を使って、入力した数値によって結果が変わるプログラムを作りましょう。

<details>
<summary>解答例</summary>

```ruby
puts "歩数を入力してください"
steps = gets.to_i

if steps >= 8000
  puts "よく歩きました"
else
  puts "もう少し歩こう"
end
```

</details>

---

### 問題95：自分で間違い探しを作る

条件分岐に関する「間違ったコード」を自分で作り、その下に正しいコードを書きましょう。

条件：

- 間違ったコードを書く
- 正しいコードを書く
- 何が間違いだったかを1行で説明する

<details>
<summary>解答例</summary>

間違ったコード：

```ruby
score = 80

if score = 80
  puts "80点です"
end
```

正しいコード：

```ruby
score = 80

if score == 80
  puts "80点です"
end
```

条件で等しいか調べるときは `==` を使います。

</details>

---

### 問題96：境界の値を試す

60点以上なら合格にするプログラムを作り、`59`、`60`、`61` の3つで試しましょう。

<details>
<summary>解答例</summary>

```ruby
score = 60

if score >= 60
  puts "合格"
else
  puts "不合格"
end
```

`59` は不合格、`60` と `61` は合格です。

</details>

---

### 問題97：条件の順番を説明する

次のコードで、`score = 95` のとき「A」と表示される理由を説明してみましょう。

```ruby
score = 95

if score >= 90
  puts "A"
elsif score >= 80
  puts "B"
elsif score >= 60
  puts "C"
else
  puts "D"
end
```

<details>
<summary>解答例</summary>

上から順に条件を見て、最初の `score >= 90` が正しいからです。

`score >= 80` や `score >= 60` も正しいですが、最初に正しかった1つだけが実行されます。

</details>

---

### 問題98：`if` を2つ使う例を作る

条件が2つとも正しければ、2行表示されるプログラムを作りましょう。

<details>
<summary>解答例</summary>

```ruby
score = 90

if score >= 60
  puts "合格"
end

if score >= 80
  puts "優秀"
end
```

</details>

---

### 問題99：`elsif` を使う例に直す

問題98のコードを、表示が1行だけになるように `elsif` で書き直しましょう。

<details>
<summary>解答例</summary>

```ruby
score = 90

if score >= 80
  puts "優秀"
elsif score >= 60
  puts "合格"
else
  puts "不合格"
end
```

</details>

---

### 問題100：自分でミニアプリを作る

入力、変数、計算、条件分岐を使って、自分だけのミニアプリを作りましょう。

条件：

- `gets.chomp` または `gets.to_i` を使う
- `if`/`elsif`/`else` を使う
- `#{}` を使って結果を表示する
- 表示が5行以上ある

<details>
<summary>解答例</summary>

```ruby
puts "名前を入力してください"
name = gets.chomp

puts "所持金を入力してください"
money = gets.to_i

puts "商品の値段を入力してください"
price = gets.to_i

change = money - price

puts "===================="
puts "名前：#{name}"
puts "所持金：#{money}円"
puts "商品：#{price}円"

if change >= 0
  puts "買えます"
  puts "残り：#{change}円"
else
  puts "買えません"
  puts "不足：#{change * -1}円"
end

puts "===================="
```

</details>
