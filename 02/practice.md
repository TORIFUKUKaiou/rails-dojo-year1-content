# 第2回 練習：変数で遊ぼう

## 今日のゴール

変数を使って、データに名前をつけて使い回す。

---

## プログラムの基本構造（おさらい）

```
入力 → 処理 → 出力
```

前回は「処理 → 出力」だけでした。今日も同じです。ただし「処理」の部分で変数を使います。

---

## 準備

1. Codespacesを起動する
2. `main.rb` を開く（前回のコードが残っていたら消してOK）
3. 書き換えるたびに、ターミナルで `ruby main.rb` を実行する

---

## 今日の目標（達成ライン）

- `必須（全員）`：1〜3 を終える（変数の基本、上書き、文字列と数値）
- `推奨（余裕がある人）`：4〜5 に進む（自己紹介カード、計算プログラム）
- `発展（早く終わった人）`：6 のチャレンジ問題に取り組む

---

## 1. 変数に入れて表示する

```ruby
name = "田中"
puts name
```

### やってみよう

自分の名前を変数に入れて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
name = "山田太郎"
puts name
```

</details>

---

## 2. 変数を上書きする

```ruby
weather = "晴れ"
puts weather

weather = "雨"
puts weather
```

### やってみよう

好きな食べ物を変数に入れて表示し、別の食べ物に上書きしてもう一度表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
food = "カレー"
puts food

food = "ラーメン"
puts food
```

</details>

---

## 3. 文字列と数値の違い

```ruby
puts "10" + "20"
puts 10 + 20
```

### やってみよう

上のコードを実行して、結果の違いを確認してみましょう。なぜ違うのか、隣の人と話してみてください。

次に、以下を実行するとどうなるか予想してから実行してみましょう：

```ruby
puts "10" + 20
```

<details>
<summary>解答例</summary>

エラーになります。文字列と数値は `+` で直接つなげません。

```
no implicit conversion of Integer into String (TypeError)
```

こういうときは `#{}` を使います：

```ruby
puts "10#{20}"
```

または数値を文字列に変換します：

```ruby
puts "10" + 20.to_s
```

</details>

---

## 4. 自己紹介カードを作る

変数と `#{}` を組み合わせて、自己紹介カードを作りましょう。

```ruby
name = "田中"
age = 20
hobby = "ゲーム"
hometown = "福岡"

puts "========================"
puts "  自己紹介カード"
puts "========================"
puts "名前：#{name}"
puts "年齢：#{age}歳"
puts "趣味：#{hobby}"
puts "出身：#{hometown}"
puts "========================"
```

### やってみよう

自分の情報に書き換えて実行してみましょう。項目を増やしてもOKです。

<details>
<summary>解答例</summary>

```ruby
name = "山田太郎"
age = 18
hobby = "音楽"
hometown = "大阪"
goal = "Webエンジニアになる"

puts "========================"
puts "  自己紹介カード"
puts "========================"
puts "名前：#{name}"
puts "年齢：#{age}歳"
puts "趣味：#{hobby}"
puts "出身：#{hometown}"
puts "目標：#{goal}"
puts "========================"
```

</details>

---

## 5. 計算プログラムを作る

変数を使って、計算結果を表示するプログラムを作りましょう。

```ruby
price = 500
count = 3
total = price * count

puts "単価：#{price}円"
puts "個数：#{count}個"
puts "合計：#{total}円"
```

### やってみよう

消費税（10%）を含めた合計を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
price = 500
count = 3
total = price * count
tax = total * 10 / 100
total_with_tax = total + tax

puts "単価：#{price}円"
puts "個数：#{count}個"
puts "小計：#{total}円"
puts "消費税：#{tax}円"
puts "合計：#{total_with_tax}円"
```

</details>

---

## 6. チャレンジ問題

### その1

以下の出力を、変数を使って作ってみましょう：

```
田中さんは20歳です
田中さんの10年後は30歳です
田中さんの20年後は40歳です
```

名前と年齢は変数に入れて、計算で表示しましょう。

<details>
<summary>解答例</summary>

```ruby
name = "田中"
age = 20

puts "#{name}さんは#{age}歳です"
puts "#{name}さんの10年後は#{age + 10}歳です"
puts "#{name}さんの20年後は#{age + 20}歳です"
```

</details>

### その2

3つの科目の点数を変数に入れて、合計と平均を表示してみましょう。

```
国語：75点
数学：82点
英語：68点
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

puts "国語：#{japanese}点"
puts "数学：#{math}点"
puts "英語：#{english}点"
puts "合計：#{total}点"
puts "平均：#{average}点"
```

</details>

### その3

前回のチャレンジ問題（九九の7の段）を、変数を使って書き直してみましょう。`7` を変数に入れれば、数字を変えるだけで別の段になります。

<details>
<summary>解答例</summary>

```ruby
n = 7

puts "#{n} x 1 = #{n * 1}"
puts "#{n} x 2 = #{n * 2}"
puts "#{n} x 3 = #{n * 3}"
puts "#{n} x 4 = #{n * 4}"
puts "#{n} x 5 = #{n * 5}"
puts "#{n} x 6 = #{n * 6}"
puts "#{n} x 7 = #{n * 7}"
puts "#{n} x 8 = #{n * 8}"
puts "#{n} x 9 = #{n * 9}"
```

`n = 5` に変えるだけで5の段になります。これが変数の力です。

</details>

### その4

自由課題。変数を使って、好きなプログラムを作ってみましょう。

---

## まとめ

今日覚えたこと：

- `name = "田中"` で変数にデータを入れる
- 変数は何度でも使い回せる
- 変数は上書きできる（前の値は消える）
- `""` で囲むと文字列、囲まないと数値
- 文字列と数値は別物（`"10" + 20` はエラー）
- `#{}` の中に変数を書くと値が埋め込まれる

次回は「条件分岐」を学びます。「もし○○なら△△する」というプログラムが書けるようになります。
