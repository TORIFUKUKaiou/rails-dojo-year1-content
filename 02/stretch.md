# 第2回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第2回で学んだ `puts`、変数、`#{}`、計算、文字列と数値を使って解きましょう。

---

## 問題1：BMI計算

身長と体重を変数に入れて、BMIを計算して表示してみましょう。

BMIの計算式：体重(kg) ÷ 身長(m) ÷ 身長(m)

```
身長：170cm
体重：65kg
BMI：22
```

ヒント：Rubyの整数同士の割り算は小数が切り捨てられます。まずはそれでやってみましょう。

<details>
<summary>解答例</summary>

```ruby
height_cm = 170
weight = 65
height_m = height_cm / 100
bmi = weight / height_m / height_m

puts "身長：#{height_cm}cm"
puts "体重：#{weight}kg"
puts "BMI：#{bmi}"
```

`170 / 100` は `1` になってしまい、BMIの値が正確ではありません。次の「小数を使う」で解決します。

</details>

---

## 小数を使う（ミニ解説）

Rubyでは、整数同士の割り算は小数が切り捨てられます。

```ruby
puts 170 / 100    # => 1（小数が消える）
```

数値に `.0` をつけると小数（Float）になります。

```ruby
puts 170.0 / 100  # => 1.7
```

片方が小数なら、結果も小数になります。`.to_f` を使って変換することもできます。

```ruby
puts 170.to_f / 100  # => 1.7
```

### BMIを小数で計算し直す

```ruby
height_cm = 170
weight = 65
height_m = height_cm.to_f / 100
bmi = weight / height_m / height_m

puts "身長：#{height_cm}cm"
puts "体重：#{weight}kg"
puts "BMI：#{bmi}"
```

`22.49134948096886` のような長い数値が出ます。小数点以下を丸めたいときは `.round` を使います。

```ruby
puts bmi.round(1)   # => 22.5（小数第1位まで）
puts bmi.round      # => 22（整数に丸める）
```

---

## 問題2：お買い物レシート

3つの商品の名前と値段を変数に入れて、レシート風に表示してみましょう。

```
========== レシート ==========
りんご          150円
パン            280円
牛乳            198円
------------------------------
合計            628円
消費税           62円
お支払い        690円
==============================
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
tax = total * 10 / 100
payment = total + tax

puts "========== レシート =========="
puts "#{item1}          #{price1}円"
puts "#{item2}            #{price2}円"
puts "#{item3}            #{price3}円"
puts "------------------------------"
puts "合計            #{total}円"
puts "消費税           #{tax}円"
puts "お支払い        #{payment}円"
puts "=============================="
```

</details>

---

## 問題3：年齢早見表

生まれ年を変数に入れて、2026年〜2030年の年齢を一覧表示してみましょう。

```
生まれ年：2006年
2026年 → 20歳
2027年 → 21歳
2028年 → 22歳
2029年 → 23歳
2030年 → 24歳
```

<details>
<summary>解答例</summary>

```ruby
birth_year = 2006

puts "生まれ年：#{birth_year}年"
puts "2026年 → #{2026 - birth_year}歳"
puts "2027年 → #{2027 - birth_year}歳"
puts "2028年 → #{2028 - birth_year}歳"
puts "2029年 → #{2029 - birth_year}歳"
puts "2030年 → #{2030 - birth_year}歳"
```

</details>

---

## 問題4：秒を時間に変換

秒数を変数に入れて、○時間○分○秒に変換して表示してみましょう。

```
7384秒は2時間3分4秒です
```

ヒント：`/` と `%` を組み合わせます。

<details>
<summary>解答例</summary>

```ruby
total_seconds = 7384
hours = total_seconds / 3600
minutes = total_seconds % 3600 / 60
seconds = total_seconds % 60

puts "#{total_seconds}秒は#{hours}時間#{minutes}分#{seconds}秒です"
```

</details>

---

## 問題5：文字列メソッドで遊ぶ

第1回で `.upcase` を学びました。他にもこんなメソッドがあります：

```ruby
puts "Hello".downcase    # => hello
puts "Hello".reverse     # => olleH
puts "Hello".length      # => 5
```

これらを使って、自分の名前（ローマ字）を色々変換して表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
name = "Tanaka"

puts name
puts name.upcase
puts name.downcase
puts name.reverse
puts "#{name}は#{name.length}文字です"
```

</details>

---

## 問題6：自由研究

第1回〜第2回で学んだことを全部使って、自分だけのプログラムを作ってみましょう。

アイデア例：
- 通貨換算（1ドル＝150円として、ドルを円に変換）
- 自分の時間割を表示するプログラム
- 好きなゲームやアニメのステータス画面
