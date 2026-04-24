# 第2回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第2回で学んだ `puts`、変数、`#{}`、計算、文字列と数値を使って解きましょう。

- `まずは`：1〜10
- `余裕があれば`：11〜20
- `さらに余裕があれば`：21〜30

やればやるほど力がつきます。できるところまで進めましょう。

---

## 1〜10：基本

### 問題1：名前を入れて表示する

`name` という変数に名前を入れて、表示してみましょう。

```
山田太郎
```

<details>
<summary>解答例</summary>

```ruby
name = "山田太郎"
puts name
```

</details>

---

### 問題2：年齢を入れて表示する

`age` という変数に年齢を入れて、表示してみましょう。

```
18
```

<details>
<summary>解答例</summary>

```ruby
age = 18
puts age
```

</details>

---

### 問題3：好きな食べ物を入れて表示する

`food` という変数に好きな食べ物を入れて、表示してみましょう。

```
カレー
```

<details>
<summary>解答例</summary>

```ruby
food = "カレー"
puts food
```

</details>

---

### 問題4：同じ変数を2回使う

1つの変数を2回使って、同じ内容を2回表示してみましょう。

```
Ruby
Ruby
```

<details>
<summary>解答例</summary>

```ruby
language = "Ruby"
puts language
puts language
```

</details>

---

### 問題5：文字列を上書きする

`color` に最初は `"赤"` を入れ、そのあと `"青"` を入れて表示してみましょう。

```
赤
青
```

<details>
<summary>解答例</summary>

```ruby
color = "赤"
puts color

color = "青"
puts color
```

</details>

---

### 問題6：数値を上書きする

`score` に最初は `80` を入れ、そのあと `95` を入れて表示してみましょう。

```
80
95
```

<details>
<summary>解答例</summary>

```ruby
score = 80
puts score

score = 95
puts score
```

</details>

---

### 問題7：名前と年齢を1行で表示する

変数を使って、次のように表示してみましょう。

```
山田太郎さんは18歳です
```

<details>
<summary>解答例</summary>

```ruby
name = "山田太郎"
age = 18

puts "#{name}さんは#{age}歳です"
```

</details>

---

### 問題8：趣味と出身を2行で表示する

変数を使って、次のように2行で表示してみましょう。

```
趣味：音楽
出身：福岡
```

<details>
<summary>解答例</summary>

```ruby
hobby = "音楽"
hometown = "福岡"

puts "趣味：#{hobby}"
puts "出身：#{hometown}"
```

</details>

---

### 問題9：単価と個数から合計を出す

`price` と `count` を使って、合計金額を表示してみましょう。

```
単価：120円
個数：3個
合計：360円
```

<details>
<summary>解答例</summary>

```ruby
price = 120
count = 3
total = price * count

puts "単価：#{price}円"
puts "個数：#{count}個"
puts "合計：#{total}円"
```

</details>

---

### 問題10：10年後の年齢を表示する

今の年齢を変数に入れて、10年後の年齢を表示してみましょう。

```
今は18歳です
10年後は28歳です
```

<details>
<summary>解答例</summary>

```ruby
age = 18

puts "今は#{age}歳です"
puts "10年後は#{age + 10}歳です"
```

</details>

---

## 11〜20：計算と組み立て

### 問題11：3教科の合計点

3教科の点数を変数に入れて、合計点を表示してみましょう。

```
国語：75点
数学：82点
英語：68点
合計：225点
```

<details>
<summary>解答例</summary>

```ruby
japanese = 75
math = 82
english = 68
total = japanese + math + english

puts "国語：#{japanese}点"
puts "数学：#{math}点"
puts "英語：#{english}点"
puts "合計：#{total}点"
```

</details>

---

### 問題12：3教科の平均点

問題11の続きとして、平均点も表示してみましょう。

```
合計：225点
平均：75点
```

<details>
<summary>解答例</summary>

```ruby
japanese = 75
math = 82
english = 68
total = japanese + math + english
average = total / 3

puts "合計：#{total}点"
puts "平均：#{average}点"
```

</details>

---

### 問題13：身長を m と cm に分ける

身長 `170cm` を、`1m 70cm` の形で表示してみましょう。

```
170cmは1m70cmです
```

ヒント：`/` は割り算、`%` は余りです。

<details>
<summary>解答例</summary>

```ruby
height_cm = 170
meters = height_cm / 100
remaining_cm = height_cm % 100

puts "#{height_cm}cmは#{meters}m#{remaining_cm}cmです"
```

</details>

---

### 問題14：分を時間と分に分ける

`145` 分を、`2時間25分` の形で表示してみましょう。

```
145分は2時間25分です
```

<details>
<summary>解答例</summary>

```ruby
total_minutes = 145
hours = total_minutes / 60
minutes = total_minutes % 60

puts "#{total_minutes}分は#{hours}時間#{minutes}分です"
```

</details>

---

### 問題15：秒を分と秒に分ける

`185` 秒を、`3分5秒` の形で表示してみましょう。

```
185秒は3分5秒です
```

<details>
<summary>解答例</summary>

```ruby
total_seconds = 185
minutes = total_seconds / 60
seconds = total_seconds % 60

puts "#{total_seconds}秒は#{minutes}分#{seconds}秒です"
```

</details>

---

### 問題16：お買い物レシート

商品名と値段を変数に入れて、レシート風に表示してみましょう。

```
========== レシート ==========
りんご：150円
パン：280円
牛乳：198円
------------------------------
合計：628円
```

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
puts "------------------------------"
puts "合計：#{total}円"
```

</details>

---

### 問題17：年齢早見表

生まれ年を変数に入れて、2026年から2030年までの年齢を表示してみましょう。

```
生まれ年：2008年
2026年 → 18歳
2027年 → 19歳
2028年 → 20歳
2029年 → 21歳
2030年 → 22歳
```

<details>
<summary>解答例</summary>

```ruby
birth_year = 2008

puts "生まれ年：#{birth_year}年"
puts "2026年 → #{2026 - birth_year}歳"
puts "2027年 → #{2027 - birth_year}歳"
puts "2028年 → #{2028 - birth_year}歳"
puts "2029年 → #{2029 - birth_year}歳"
puts "2030年 → #{2030 - birth_year}歳"
```

</details>

---

### 問題18：ゲームのステータス画面

変数を使って、ゲームのステータス画面を作ってみましょう。

```
====================
勇者のステータス
====================
名前：ゆうしゃ
HP：35
MP：12
攻撃力：8
防御力：6
====================
```

<details>
<summary>解答例</summary>

```ruby
name = "ゆうしゃ"
hp = 35
mp = 12
attack = 8
defense = 6

puts "===================="
puts "勇者のステータス"
puts "===================="
puts "名前：#{name}"
puts "HP：#{hp}"
puts "MP：#{mp}"
puts "攻撃力：#{attack}"
puts "防御力：#{defense}"
puts "===================="
```

</details>

---

### 問題19：時間割を表示する

3つの授業名を変数に入れて、時間割のように表示してみましょう。

```
1限：Ruby
2限：英語
3限：数学
```

<details>
<summary>解答例</summary>

```ruby
subject1 = "Ruby"
subject2 = "英語"
subject3 = "数学"

puts "1限：#{subject1}"
puts "2限：#{subject2}"
puts "3限：#{subject3}"
```

</details>

---

### 問題20：秒を時間・分・秒に分ける

`7384` 秒を、`2時間3分4秒` の形で表示してみましょう。

```
7384秒は2時間3分4秒です
```

<details>
<summary>解答例</summary>

```ruby
total_seconds = 7384
hours = total_seconds / 3600
remaining_seconds = total_seconds % 3600
minutes = remaining_seconds / 60
seconds = remaining_seconds % 60

puts "#{total_seconds}秒は#{hours}時間#{minutes}分#{seconds}秒です"
```

`3600` は、`1時間 = 60分`、`1分 = 60秒` なので、`60 × 60 = 3600秒` を表しています。

つまり、`total_seconds / 3600` で「何時間あるか」を求めています。

</details>

---

## 21〜30：直して作る

### 問題21：間違い探し その1

次のコードはエラーになります。直して動くようにしましょう。

```ruby
name = 田中
puts name
```

<details>
<summary>解答例</summary>

```ruby
name = "田中"
puts name
```

文字列は `""` で囲みます。

</details>

---

### 問題22：間違い探し その2

次のコードは、変数名の打ち間違いがあります。直して動くようにしましょう。

```ruby
name = "田中"
puts nmae
```

<details>
<summary>解答例</summary>

```ruby
name = "田中"
puts name
```

</details>

---

### 問題23：間違い探し その3

次のコードは、文字列と数値をそのまま `+` でつなごうとしているのでエラーになります。直して動くようにしましょう。

```ruby
age = 18
puts "私の年齢は" + age + "歳です"
```

<details>
<summary>解答例</summary>

```ruby
age = 18
puts "私の年齢は#{age}歳です"
```

別解です。`age` を文字列にすれば、`+` でつなげることもできます。

```ruby
age = "18"
puts "私の年齢は" + age + "歳です"
```

</details>

---

### 問題24：間違い探し その4

次のコードは、`#{}` の書き方が少し違います。直して動くようにしましょう。

```ruby
name = "田中"
puts "名前は{name}です"
```

<details>
<summary>解答例</summary>

```ruby
name = "田中"
puts "名前は#{name}です"
```

</details>

---

### 問題25：間違い探し その5

次のコードでは、変更前の点数と変更後の点数を出したいのに、同じ点数が2回出ます。直してみましょう。

```ruby
score = 80
score = 95

puts "変更前：#{score}点"
puts "変更後：#{score}点"
```

<details>
<summary>解答例</summary>

```ruby
score1 = 80
score2 = 95

puts "変更前：#{score1}点"
puts "変更後：#{score2}点"
```

「変更前」と「変更後」の両方を残したいなら、別々の変数に分けて持つ方が分かりやすいです。

別解です。1つの変数を使うなら、上書きする前に表示します。

```ruby
score = 80
puts "変更前：#{score}点"

score = 95
puts "変更後：#{score}点"
```

上書きしたあとには、新しい値だけが残ります。

</details>

---

### 問題26：3日分の勉強時間

3日分の勉強時間を変数に入れて、合計時間と平均時間を表示してみましょう。

```
1日目：40分
2日目：35分
3日目：25分
合計：100分
平均：33分
```

<details>
<summary>解答例</summary>

```ruby
day1 = 40
day2 = 35
day3 = 25
total = day1 + day2 + day3
average = total / 3

puts "1日目：#{day1}分"
puts "2日目：#{day2}分"
puts "3日目：#{day3}分"
puts "合計：#{total}分"
puts "平均：#{average}分"
```

</details>

---

### 問題27：おこづかい帳

もらったお金と、使ったお金を変数に入れて、残り金額を表示してみましょう。

```
もらったお金：2000円
お昼ごはん：650円
ジュース：150円
残り：1200円
```

<details>
<summary>解答例</summary>

```ruby
money = 2000
lunch = 650
juice = 150
rest = money - lunch - juice

puts "もらったお金：#{money}円"
puts "お昼ごはん：#{lunch}円"
puts "ジュース：#{juice}円"
puts "残り：#{rest}円"
```

</details>

---

### 問題28：買い物の合計とおつり

持っているお金と、買う商品の値段を変数に入れて、合計金額とおつりを表示してみましょう。

```
持っているお金：1000円
ノート：180円
ペン：120円
消しゴム：90円
合計：390円
おつり：610円
```

<details>
<summary>解答例</summary>

```ruby
money = 1000
notebook = 180
pen = 120
eraser = 90
total = notebook + pen + eraser
change = money - total

puts "持っているお金：#{money}円"
puts "ノート：#{notebook}円"
puts "ペン：#{pen}円"
puts "消しゴム：#{eraser}円"
puts "合計：#{total}円"
puts "おつり：#{change}円"
```

</details>

---

### 問題29：ミニ旅行の予算表

交通費、宿泊費、食費を変数に入れて、旅行の予算表を作ってみましょう。

```
交通費：8000円
宿泊費：12000円
食費：3000円
合計予算：23000円
```

<details>
<summary>解答例</summary>

```ruby
transportation = 8000
hotel = 12000
food = 3000
total = transportation + hotel + food

puts "交通費：#{transportation}円"
puts "宿泊費：#{hotel}円"
puts "食費：#{food}円"
puts "合計予算：#{total}円"
```

</details>

---

### 問題30：自己紹介カードを5行で作る

変数を使って、5行以上の自己紹介カードを作ってみましょう。

```
========================
名前：山田太郎
年齢：18歳
出身：福岡
趣味：音楽
目標：Webアプリを作る
========================
```

<details>
<summary>解答例</summary>

```ruby
name = "山田太郎"
age = 18
hometown = "福岡"
hobby = "音楽"
goal = "Webアプリを作る"

puts "========================"
puts "名前：#{name}"
puts "年齢：#{age}歳"
puts "出身：#{hometown}"
puts "趣味：#{hobby}"
puts "目標：#{goal}"
puts "========================"
```

</details>
