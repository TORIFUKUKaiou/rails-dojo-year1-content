# 第2回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第2回で学んだ `puts`、変数、`#{}`、計算、文字列と数値を使って解きましょう。

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

> [!TIP]
> `/` は割り算、`%` は余りです。

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

---

## 31〜40：予想してから実行する

### 問題31：上書きの順番を読む

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
drink = "水"
drink = "お茶"
puts drink
```

<details>
<summary>解答例</summary>

```
お茶
```

`drink` はあとから `"お茶"` に上書きされています。

</details>

---

### 問題32：表示してから上書きする

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
drink = "水"
puts drink

drink = "お茶"
puts drink
```

<details>
<summary>解答例</summary>

```
水
お茶
```

1回目の `puts` の時点では、まだ `drink` の中身は `"水"` です。

</details>

---

### 問題33：計算結果を変数に入れる

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
price = 300
count = 4
total = price * count

puts total
```

<details>
<summary>解答例</summary>

```
1200
```

`price * count` は `300 * 4` なので、`1200` です。

</details>

---

### 問題34：変数を使ったあとに上書きする

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
price = 100
count = 2
total = price * count

price = 300

puts total
puts price
```

<details>
<summary>解答例</summary>

```
200
300
```

`total` を作ったあとに `price` を上書きしても、`total` は自動では計算し直されません。

</details>

---

### 問題35：あとから計算し直す

問題34のコードを直して、次のように表示されるようにしましょう。

```
600
300
```

<details>
<summary>解答例</summary>

```ruby
price = 100
count = 2
total = price * count

price = 300
total = price * count

puts total
puts price
```

`price` を変えたあと、`total` ももう一度計算します。

</details>

---

### 問題36：文字列の足し算

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
first_name = "山田"
last_name = "太郎"

puts first_name + last_name
```

<details>
<summary>解答例</summary>

```
山田太郎
```

文字列同士を `+` でつなぐと、1つの文字列になります。

</details>

---

### 問題37：文字列の中に空白を入れる

問題36のコードを直して、次のように表示されるようにしましょう。

```
山田 太郎
```

<details>
<summary>解答例</summary>

```ruby
first_name = "山田"
last_name = "太郎"

puts "#{first_name} #{last_name}"
```

別解です。

```ruby
first_name = "山田"
last_name = "太郎"

puts first_name + " " + last_name
```

</details>

---

### 問題38：変数名を読みやすくする

次のコードは動きますが、変数名の意味が分かりにくいです。意味が分かる変数名に直しましょう。

```ruby
a = 120
b = 3
c = a * b

puts "合計：#{c}円"
```

<details>
<summary>解答例</summary>

```ruby
price = 120
count = 3
total = price * count

puts "合計：#{total}円"
```

変数名を見るだけで、何の値なのか分かるようにします。

</details>

---

### 問題39：使っていない変数を見つける

次のコードには、使っていない変数があります。使っていない変数を消して、同じ表示になるようにしましょう。

```ruby
name = "山田"
age = 18
favorite_color = "青"

puts "#{name}さんは#{age}歳です"
```

<details>
<summary>解答例</summary>

```ruby
name = "山田"
age = 18

puts "#{name}さんは#{age}歳です"
```

`favorite_color` はどこにも使われていません。

</details>

---

### 問題40：同じ計算を変数にする

次のコードは、同じ計算を何度も書いています。計算結果を変数に入れて、同じ表示になるように直しましょう。

```ruby
puts "小計：#{500 * 3}円"
puts "送料込み：#{500 * 3 + 300}円"
puts "2人で割ると：#{(500 * 3 + 300) / 2}円"
```

<details>
<summary>解答例</summary>

```ruby
subtotal = 500 * 3
total = subtotal + 300
per_person = total / 2

puts "小計：#{subtotal}円"
puts "送料込み：#{total}円"
puts "2人で割ると：#{per_person}円"
```

</details>

---

## 41〜50：少し長いものを作る

### 問題41：プロフィールを文章にする

変数を使って、次のように表示してみましょう。

```
私の名前は山田太郎です。
18歳です。
福岡から来ました。
趣味はゲームです。
```

<details>
<summary>解答例</summary>

```ruby
name = "山田太郎"
age = 18
hometown = "福岡"
hobby = "ゲーム"

puts "私の名前は#{name}です。"
puts "#{age}歳です。"
puts "#{hometown}から来ました。"
puts "趣味は#{hobby}です。"
```

</details>

---

### 問題42：カフェの注文

商品名、単価、個数を変数に入れて、注文内容を表示してみましょう。

```
商品：コーヒー
単価：380円
個数：2個
合計：760円
```

<details>
<summary>解答例</summary>

```ruby
item = "コーヒー"
price = 380
count = 2
total = price * count

puts "商品：#{item}"
puts "単価：#{price}円"
puts "個数：#{count}個"
puts "合計：#{total}円"
```

</details>

---

### 問題43：映画チケットの合計

大人料金、子ども料金、人数を変数に入れて、合計金額を表示してみましょう。

```
大人：2人
子ども：1人
合計：4600円
```

大人は `1800` 円、子どもは `1000` 円とします。

<details>
<summary>解答例</summary>

```ruby
adult_price = 1800
child_price = 1000
adult_count = 2
child_count = 1
total = adult_price * adult_count + child_price * child_count

puts "大人：#{adult_count}人"
puts "子ども：#{child_count}人"
puts "合計：#{total}円"
```

</details>

---

### 問題44：部屋の面積

縦と横の長さを変数に入れて、面積を表示してみましょう。

```
縦：6m
横：4m
面積：24平方メートル
```

<details>
<summary>解答例</summary>

```ruby
height = 6
width = 4
area = height * width

puts "縦：#{height}m"
puts "横：#{width}m"
puts "面積：#{area}平方メートル"
```

</details>

---

### 問題45：時給の計算

時給と働いた時間を変数に入れて、給料を表示してみましょう。

```
時給：1100円
時間：5時間
給料：5500円
```

<details>
<summary>解答例</summary>

```ruby
hourly_wage = 1100
working_hours = 5
salary = hourly_wage * working_hours

puts "時給：#{hourly_wage}円"
puts "時間：#{working_hours}時間"
puts "給料：#{salary}円"
```

</details>

---

### 問題46：テストの成績表

名前と3教科の点数を変数に入れて、成績表を表示してみましょう。

```
山田太郎さんの成績
国語：80点
数学：70点
英語：90点
合計：240点
平均：80点
```

<details>
<summary>解答例</summary>

```ruby
name = "山田太郎"
japanese = 80
math = 70
english = 90
total = japanese + math + english
average = total / 3

puts "#{name}さんの成績"
puts "国語：#{japanese}点"
puts "数学：#{math}点"
puts "英語：#{english}点"
puts "合計：#{total}点"
puts "平均：#{average}点"
```

</details>

---

### 問題47：電車の到着時刻

出発時刻と移動時間を分で考えて、到着時刻を表示してみましょう。

```
出発：9時15分
移動時間：50分
到着：10時5分
```

> [!TIP]
> いったん「0時から何分たったか」で考えると作りやすいです。

<details>
<summary>解答例</summary>

```ruby
start_hour = 9
start_minute = 15
travel_minutes = 50

start_total_minutes = start_hour * 60 + start_minute
arrival_total_minutes = start_total_minutes + travel_minutes
arrival_hour = arrival_total_minutes / 60
arrival_minute = arrival_total_minutes % 60

puts "出発：#{start_hour}時#{start_minute}分"
puts "移動時間：#{travel_minutes}分"
puts "到着：#{arrival_hour}時#{arrival_minute}分"
```

</details>

---

### 問題48：ゲームのダメージ計算

攻撃力と防御力を変数に入れて、ダメージを表示してみましょう。

```
攻撃力：25
防御力：8
ダメージ：17
```

<details>
<summary>解答例</summary>

```ruby
attack = 25
defense = 8
damage = attack - defense

puts "攻撃力：#{attack}"
puts "防御力：#{defense}"
puts "ダメージ：#{damage}"
```

</details>

---

### 問題49：イベント参加費

参加費、人数、会場費を変数に入れて、合計売上と利益を表示してみましょう。

```
参加費：1500円
人数：20人
会場費：12000円
売上：30000円
利益：18000円
```

<details>
<summary>解答例</summary>

```ruby
fee = 1500
people = 20
venue_cost = 12000
sales = fee * people
profit = sales - venue_cost

puts "参加費：#{fee}円"
puts "人数：#{people}人"
puts "会場費：#{venue_cost}円"
puts "売上：#{sales}円"
puts "利益：#{profit}円"
```

</details>

---

### 問題50：自分で問題を作る

ここまでの問題を参考にして、変数を3つ以上使う問題を自分で作りましょう。

条件：

- 変数を3つ以上使う
- 計算を1回以上使う
- `#{}` を使って表示する
- 実行結果の見本も書く

<details>
<summary>解答例</summary>

問題：ハンバーガー、ポテト、ドリンクの合計金額を表示する。

```ruby
burger = 420
potato = 280
drink = 180
total = burger + potato + drink

puts "ハンバーガー：#{burger}円"
puts "ポテト：#{potato}円"
puts "ドリンク：#{drink}円"
puts "合計：#{total}円"
```

</details>

---

## 51〜60：変数と文字列を見分ける

### 問題51：`name` と `"name"` の違い

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
name = "ジョン"
puts "name"
```

<details>
<summary>解答例</summary>

```
name
```

`"name"` は文字列なので、そのまま `name` と表示されます。

</details>

---

### 問題52：変数の中身を表示する

問題51のコードを直して、次のように表示されるようにしましょう。

```
ジョン
```

<details>
<summary>解答例</summary>

```ruby
name = "ジョン"
puts name
```

変数の中身を表示したいときは、`"` で囲みません。

</details>

---

### 問題53：文字列の中に変数を入れる

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
name = "ジョン"
puts "こんにちは、nameさん"
```

<details>
<summary>解答例</summary>

```
こんにちは、nameさん
```

`"こんにちは、nameさん"` の中の `name` は、ただの文字として扱われます。

</details>

---

### 問題54：`#{}` を使って直す

問題53のコードを直して、次のように表示されるようにしましょう。

```
こんにちは、ジョンさん
```

<details>
<summary>解答例</summary>

```ruby
name = "ジョン"
puts "こんにちは、#{name}さん"
```

</details>

---

### 問題55：`{}` だけでは足りない

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
name = "ジョン"
puts "こんにちは、{name}さん"
```

<details>
<summary>解答例</summary>

```
こんにちは、{name}さん
```

変数を埋め込むには `{}` だけではなく、`#{}` と書きます。

</details>

---

### 問題56：数値の変数と文字列

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
age = 18
puts "age"
puts age
```

<details>
<summary>解答例</summary>

```
age
18
```

`"age"` は文字列、`age` は変数です。

</details>

---

### 問題57：文章を直す

次のコードを直して、`ジョンさんは18歳です` と表示されるようにしましょう。

```ruby
name = "ジョン"
age = 18
puts "nameさんはage歳です"
```

<details>
<summary>解答例</summary>

```ruby
name = "ジョン"
age = 18
puts "#{name}さんは#{age}歳です"
```

</details>

---

### 問題58：変数名と表示したい文字

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
food = "カレー"
puts "food"
puts "#{food}"
puts food
```

<details>
<summary>解答例</summary>

```
food
カレー
カレー
```

`"#{food}"` と `food` は、この場合どちらも中身の `"カレー"` を表示します。

</details>

---

### 問題59：わざと `name` と表示する

変数 `name` には `"ジョン"` を入れます。ただし、表示は `name` という文字にしてください。

```
name
```

<details>
<summary>解答例</summary>

```ruby
name = "ジョン"
puts "name"
```

変数の中身ではなく、`name` という文字を表示したいので `"` で囲みます。

</details>

---

### 問題60：両方表示する

変数名としての `name` と、変数の中身の `"ジョン"` を両方表示してみましょう。

```
変数名：name
中身：ジョン
```

<details>
<summary>解答例</summary>

```ruby
name = "ジョン"

puts "変数名：name"
puts "中身：#{name}"
```

</details>

---

## 61〜70：エラーと間違いを直す

### 問題61：文字列の囲み忘れ

次のコードはエラーになります。直して動くようにしましょう。

```ruby
city = 東京
puts city
```

<details>
<summary>解答例</summary>

```ruby
city = "東京"
puts city
```

</details>

---

### 問題62：変数名の打ち間違い

次のコードはエラーになります。直して動くようにしましょう。

```ruby
hobby = "音楽"
puts hobyy
```

<details>
<summary>解答例</summary>

```ruby
hobby = "音楽"
puts hobby
```

</details>

---

### 問題63：変数を作る前に使っている

次のコードはエラーになります。順番を直して動くようにしましょう。

```ruby
puts name
name = "田中"
```

<details>
<summary>解答例</summary>

```ruby
name = "田中"
puts name
```

変数は、使う前に代入しておく必要があります。

</details>

---

### 問題64：数字で始まる変数名

次のコードはエラーになります。変数名を直して動くようにしましょう。

```ruby
1st_score = 80
puts 1st_score
```

<details>
<summary>解答例</summary>

```ruby
first_score = 80
puts first_score
```

変数名は数字から始められません。

</details>

---

### 問題65：ハイフンではなくアンダースコア

次のコードはエラーになります。変数名を直して動くようにしましょう。

```ruby
first-name = "山田"
puts first-name
```

<details>
<summary>解答例</summary>

```ruby
first_name = "山田"
puts first_name
```

2語以上の変数名は `_` でつなぎます。

</details>

---

### 問題66：文字列と数値を `+` している

次のコードはエラーになります。`#{}` を使って直しましょう。

```ruby
price = 500
puts "値段は" + price + "円です"
```

<details>
<summary>解答例</summary>

```ruby
price = 500
puts "値段は#{price}円です"
```

</details>

---

### 問題67：計算するつもりが文字になっている

次のコードはエラーにはなりませんが、計算されません。`30` と表示されるように直しましょう。

```ruby
puts "10 + 20"
```

<details>
<summary>解答例</summary>

```ruby
puts 10 + 20
```

`"` で囲むと、そのままの文字として表示されます。

</details>

---

### 問題68：計算結果を文章に入れる

次のコードを直して、`合計は30です` と表示されるようにしましょう。

```ruby
puts "合計は10 + 20です"
```

<details>
<summary>解答例</summary>

```ruby
puts "合計は#{10 + 20}です"
```

</details>

---

### 問題69：上書き前の値も残したい

次のコードでは、最初の名前が残りません。変更前と変更後の両方を表示できるように直しましょう。

```ruby
name = "田中"
name = "佐藤"

puts "変更前：#{name}"
puts "変更後：#{name}"
```

<details>
<summary>解答例</summary>

```ruby
before_name = "田中"
after_name = "佐藤"

puts "変更前：#{before_name}"
puts "変更後：#{after_name}"
```

</details>

---

### 問題70：合計の変数を作る

次のコードは動きますが、同じ計算が2回出てきます。`total` を使って書き直しましょう。

```ruby
apple = 120
banana = 90

puts "合計：#{apple + banana}円"
puts "2セット：#{(apple + banana) * 2}円"
```

<details>
<summary>解答例</summary>

```ruby
apple = 120
banana = 90
total = apple + banana

puts "合計：#{total}円"
puts "2セット：#{total * 2}円"
```

</details>

---

## 71〜80：出力を予想する

### 問題71：代入の順番

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
x = 10
y = x
x = 20

puts x
puts y
```

<details>
<summary>解答例</summary>

```
20
10
```

`y = x` の時点で、`y` には `10` が入ります。

</details>

---

### 問題72：変数同士の計算

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
a = 5
b = 3
c = a + b

puts c
```

<details>
<summary>解答例</summary>

```
8
```

</details>

---

### 問題73：あとから変えても自動更新されない

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
a = 5
b = 3
c = a + b

a = 10

puts c
```

<details>
<summary>解答例</summary>

```
8
```

`a` をあとから変えても、`c` は自動では変わりません。

</details>

---

### 問題74：計算し直す

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
a = 5
b = 3
c = a + b

a = 10
c = a + b

puts c
```

<details>
<summary>解答例</summary>

```
13
```

</details>

---

### 問題75：文字列の連結

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
word1 = "Ruby"
word2 = "楽しい"

puts word1 + word2
```

<details>
<summary>解答例</summary>

```
Ruby楽しい
```

</details>

---

### 問題76：文字列の連結に空白を入れる

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
word1 = "Ruby"
word2 = "楽しい"

puts word1 + " " + word2
```

<details>
<summary>解答例</summary>

```
Ruby 楽しい
```

</details>

---

### 問題77：数値と文字列の違い

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
number = 10
text = "10"

puts number + number
puts text + text
```

<details>
<summary>解答例</summary>

```
20
1010
```

</details>

---

### 問題78：割り算の結果

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
total = 10
count = 3
average = total / count

puts average
```

<details>
<summary>解答例</summary>

```
3
```

整数同士の割り算なので、小数ではなく `3` になります。

</details>

---

### 問題79：余りを使う

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
total = 10
count = 3
remainder = total % count

puts remainder
```

<details>
<summary>解答例</summary>

```
1
```

`10` を `3` で割ると、余りは `1` です。

</details>

---

### 問題80：文章の中の計算

次のコードを実行すると、何が表示されるか予想してから実行しましょう。

```ruby
price = 200
count = 4

puts "#{price}円の商品を#{count}個買うと#{price * count}円です"
```

<details>
<summary>解答例</summary>

```
200円の商品を4個買うと800円です
```

</details>

---

## 81〜90：計算プログラムを増やす

### 問題81：ドリンクのまとめ買い

1本 `140` 円のドリンクを `6` 本買ったときの合計を表示しましょう。

```
単価：140円
本数：6本
合計：840円
```

<details>
<summary>解答例</summary>

```ruby
price = 140
count = 6
total = price * count

puts "単価：#{price}円"
puts "本数：#{count}本"
puts "合計：#{total}円"
```

</details>

---

### 問題82：昼ごはん代

おにぎり、からあげ、飲み物の合計を表示しましょう。

```
おにぎり：130円
からあげ：260円
飲み物：150円
合計：540円
```

<details>
<summary>解答例</summary>

```ruby
rice_ball = 130
chicken = 260
drink = 150
total = rice_ball + chicken + drink

puts "おにぎり：#{rice_ball}円"
puts "からあげ：#{chicken}円"
puts "飲み物：#{drink}円"
puts "合計：#{total}円"
```

</details>

---

### 問題83：貯金の計算

今の貯金と、毎月ためる金額を変数に入れて、3か月後の貯金を表示しましょう。

```
今の貯金：5000円
毎月：2000円
3か月後：11000円
```

<details>
<summary>解答例</summary>

```ruby
savings = 5000
monthly = 2000
months = 3
future_savings = savings + monthly * months

puts "今の貯金：#{savings}円"
puts "毎月：#{monthly}円"
puts "#{months}か月後：#{future_savings}円"
```

</details>

---

### 問題84：残り時間

授業時間 `180` 分のうち、説明が `30` 分、練習が `60` 分終わりました。残り時間を表示しましょう。

```
授業時間：180分
説明：30分
練習：60分
残り：90分
```

<details>
<summary>解答例</summary>

```ruby
lesson_minutes = 180
orientation_minutes = 30
practice_minutes = 60
remaining_minutes = lesson_minutes - orientation_minutes - practice_minutes

puts "授業時間：#{lesson_minutes}分"
puts "説明：#{orientation_minutes}分"
puts "練習：#{practice_minutes}分"
puts "残り：#{remaining_minutes}分"
```

</details>

---

### 問題85：歩いた距離

1歩を `70cm` として、`3000` 歩の距離を cm と m で表示しましょう。

```
1歩：70cm
歩数：3000歩
距離：210000cm
距離：2100m
```

<details>
<summary>解答例</summary>

```ruby
step_cm = 70
steps = 3000
distance_cm = step_cm * steps
distance_m = distance_cm / 100

puts "1歩：#{step_cm}cm"
puts "歩数：#{steps}歩"
puts "距離：#{distance_cm}cm"
puts "距離：#{distance_m}m"
```

</details>

---

### 問題86：ピザを分ける

ピザが `3` 枚あります。1枚を `8` 切れに分けます。`5` 人で同じ数ずつ食べると、1人何切れで、何切れ余るか表示しましょう。

```
全部：24切れ
人数：5人
1人：4切れ
余り：4切れ
```

<details>
<summary>解答例</summary>

```ruby
pizzas = 3
slices_per_pizza = 8
people = 5
total_slices = pizzas * slices_per_pizza
per_person = total_slices / people
remainder = total_slices % people

puts "全部：#{total_slices}切れ"
puts "人数：#{people}人"
puts "1人：#{per_person}切れ"
puts "余り：#{remainder}切れ"
```

</details>

---

### 問題87：ライブチケット

チケット代、手数料、枚数を変数に入れて、合計金額を表示しましょう。

```
チケット：6500円
手数料：330円
枚数：2枚
合計：13660円
```

<details>
<summary>解答例</summary>

```ruby
ticket_price = 6500
fee = 330
count = 2
total = (ticket_price + fee) * count

puts "チケット：#{ticket_price}円"
puts "手数料：#{fee}円"
puts "枚数：#{count}枚"
puts "合計：#{total}円"
```

</details>

---

### 問題88：本のページ数

1日に読むページ数と日数を変数に入れて、合計ページ数を表示しましょう。

```
1日：25ページ
日数：14日
合計：350ページ
```

<details>
<summary>解答例</summary>

```ruby
pages_per_day = 25
days = 14
total_pages = pages_per_day * days

puts "1日：#{pages_per_day}ページ"
puts "日数：#{days}日"
puts "合計：#{total_pages}ページ"
```

</details>

---

### 問題89：ゲームの経験値

現在の経験値、1回でもらえる経験値、回数を変数に入れて、合計経験値を表示しましょう。

```
現在：1200
1回：350
回数：4
合計：2600
```

<details>
<summary>解答例</summary>

```ruby
current_exp = 1200
exp_per_battle = 350
battles = 4
total_exp = current_exp + exp_per_battle * battles

puts "現在：#{current_exp}"
puts "1回：#{exp_per_battle}"
puts "回数：#{battles}"
puts "合計：#{total_exp}"
```

</details>

---

### 問題90：水分量

1本 `500ml` の水を `4` 本飲みました。合計を ml と L で表示しましょう。

```
1本：500ml
本数：4本
合計：2000ml
合計：2L
```

<details>
<summary>解答例</summary>

```ruby
ml_per_bottle = 500
bottles = 4
total_ml = ml_per_bottle * bottles
total_l = total_ml / 1000

puts "1本：#{ml_per_bottle}ml"
puts "本数：#{bottles}本"
puts "合計：#{total_ml}ml"
puts "合計：#{total_l}L"
```

</details>

---

## 91〜100：仕上げ

### 問題91：商品紹介文

商品名、値段、色を変数に入れて、紹介文を作りましょう。

```
青いノートは180円です。
```

<details>
<summary>解答例</summary>

```ruby
color = "青い"
item = "ノート"
price = 180

puts "#{color}#{item}は#{price}円です。"
```

</details>

---

### 問題92：座席番号

列と番号を変数に入れて、座席番号を表示しましょう。

```
あなたの席はB-12です
```

<details>
<summary>解答例</summary>

```ruby
row = "B"
number = 12

puts "あなたの席は#{row}-#{number}です"
```

</details>

---

### 問題93：IDを作る

年、クラス、番号を変数に入れて、IDのように表示しましょう。

```
2026-Ruby-07
```

<details>
<summary>解答例</summary>

```ruby
year = 2026
class_name = "Ruby"
number = "07"

puts "#{year}-#{class_name}-#{number}"
```

`07` のように先頭の `0` を残したいときは、文字列にすると分かりやすいです。

</details>

---

### 問題94：自分の今日の状態

名前、気分、今日やることを変数に入れて、3行で表示しましょう。

```
名前：山田
気分：元気
今日やること：変数を練習する
```

<details>
<summary>解答例</summary>

```ruby
name = "山田"
mood = "元気"
todo = "変数を練習する"

puts "名前：#{name}"
puts "気分：#{mood}"
puts "今日やること：#{todo}"
```

</details>

---

### 問題95：予定表

開始時刻、終了時刻、予定名を変数に入れて、予定表を表示しましょう。

```
10時から12時までRubyの授業
```

<details>
<summary>解答例</summary>

```ruby
start_time = 10
end_time = 12
event = "Rubyの授業"

puts "#{start_time}時から#{end_time}時まで#{event}"
```

</details>

---

### 問題96：気温差

最高気温と最低気温を変数に入れて、気温差を表示しましょう。

```
最高気温：28度
最低気温：19度
気温差：9度
```

<details>
<summary>解答例</summary>

```ruby
high_temperature = 28
low_temperature = 19
difference = high_temperature - low_temperature

puts "最高気温：#{high_temperature}度"
puts "最低気温：#{low_temperature}度"
puts "気温差：#{difference}度"
```

</details>

---

### 問題97：買える個数

持っているお金と商品の値段を変数に入れて、何個買えて、いくら余るか表示しましょう。

```
所持金：1000円
商品：180円
買える個数：5個
余り：100円
```

<details>
<summary>解答例</summary>

```ruby
money = 1000
price = 180
count = money / price
remainder = money % price

puts "所持金：#{money}円"
puts "商品：#{price}円"
puts "買える個数：#{count}個"
puts "余り：#{remainder}円"
```

</details>

---

### 問題98：残りページ

本のページ数、読んだページ数を変数に入れて、残りページを表示しましょう。

```
全部：320ページ
読んだ：125ページ
残り：195ページ
```

<details>
<summary>解答例</summary>

```ruby
total_pages = 320
read_pages = 125
remaining_pages = total_pages - read_pages

puts "全部：#{total_pages}ページ"
puts "読んだ：#{read_pages}ページ"
puts "残り：#{remaining_pages}ページ"
```

</details>

---

### 問題99：自分で間違い探しを作る

変数に関する「間違ったコード」を自分で作り、その下に正しいコードを書きましょう。

条件：

- 間違ったコードを書く
- 正しいコードを書く
- 何が間違いだったかを1行で説明する

<details>
<summary>解答例</summary>

間違ったコード：

```ruby
name = "山田"
puts "name"
```

正しいコード：

```ruby
name = "山田"
puts name
```

`"name"` は文字列なので、変数の中身は表示されません。

</details>

---

### 問題100：自分でミニアプリを作る

変数と計算を使って、自分だけのミニアプリを作りましょう。

条件：

- 変数を5つ以上使う
- 計算を2回以上使う
- `#{}` を3回以上使う
- 表示が5行以上ある

<details>
<summary>解答例</summary>

```ruby
name = "山田"
money = 3000
lunch = 680
drink = 150
snack = 220
used_money = lunch + drink + snack
remaining_money = money - used_money

puts "#{name}さんのおこづかい帳"
puts "最初のお金：#{money}円"
puts "昼ごはん：#{lunch}円"
puts "飲み物：#{drink}円"
puts "おやつ：#{snack}円"
puts "使ったお金：#{used_money}円"
puts "残り：#{remaining_money}円"
```

</details>
