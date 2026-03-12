# 第3回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第3回で学んだ `puts`、変数、`#{}`、`if`/`elsif`/`else` を使って解きましょう。

---

## 問題1：うるう年判定

年を変数に入れて、うるう年かどうかを判定するプログラムを作りましょう。

うるう年のルール：
- 4で割り切れる年はうるう年
- ただし100で割り切れる年はうるう年ではない
- ただし400で割り切れる年はうるう年

ヒント：`%` は余りを求める演算です。`2024 % 4` は `0`（割り切れる）。

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

## 問題2：BMI判定

第2回のstretchで計算したBMIに、判定を追加しましょう。小数で計算するには `.to_f` を使います（[第2回stretch「小数を使う」](../02/stretch.md#小数を使うミニ解説)参照）。

- 18.5未満：やせ型
- 18.5以上25未満：標準
- 25以上：肥満

<details>
<summary>解答例</summary>

```ruby
height_cm = 170
weight = 65
height_m = height_cm.to_f / 100
bmi = weight / height_m / height_m

puts "BMI：#{bmi.round(1)}"

if bmi < 18.5
  puts "やせ型です"
elsif bmi < 25
  puts "標準です"
else
  puts "肥満です"
end
```

</details>

---

## 問題3：自動販売機

お金を変数に入れて、買える飲み物を表示するプログラムを作りましょう。

- 500円以上：「コーヒー（500円）が買えます」
- 200円以上：「ジュース（200円）が買えます」
- 100円以上：「水（100円）が買えます」
- 100円未満：「お金が足りません」

<details>
<summary>解答例</summary>

```ruby
money = 350

puts "所持金：#{money}円"

if money >= 500
  puts "コーヒー（500円）が買えます"
elsif money >= 200
  puts "ジュース（200円）が買えます"
elsif money >= 100
  puts "水（100円）が買えます"
else
  puts "お金が足りません"
end
```

</details>

---

## 問題4：FizzBuzz（1問だけ版）

数値を変数に入れて、以下のルールで表示するプログラムを作りましょう。

- 3でも5でも割り切れる → 「FizzBuzz」
- 3で割り切れる → 「Fizz」
- 5で割り切れる → 「Buzz」
- どれでもない → その数値をそのまま表示

<details>
<summary>解答例</summary>

```ruby
n = 15

if n % 3 == 0 && n % 5 == 0
  puts "FizzBuzz"
elsif n % 3 == 0
  puts "Fizz"
elsif n % 5 == 0
  puts "Buzz"
else
  puts n
end
```

次回「繰り返し」を学ぶと、1から100まで一気にFizzBuzzできるようになります。

</details>

---

## 問題5：おみくじ

`rand` を使うとランダムな数値が出せます。

```ruby
number = rand(1..5)   # 1〜5のどれかがランダムに入る
puts number
```

これを使って、おみくじプログラムを作りましょう。

<details>
<summary>解答例</summary>

```ruby
number = rand(1..5)

if number == 1
  puts "大吉！"
elsif number == 2
  puts "中吉"
elsif number == 3
  puts "小吉"
elsif number == 4
  puts "末吉"
else
  puts "凶..."
end
```

実行するたびに結果が変わります。

</details>

---

## 問題6：自由研究

第1回〜第3回で学んだことを全部使って、自分だけのプログラムを作ってみましょう。

アイデア例：
- 星座占い（誕生月で判定）
- 電車の運賃計算（距離で料金が変わる）
- ゲームのダメージ計算（攻撃力と防御力で判定）
