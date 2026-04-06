# 第5回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第5回で学んだ `puts`、変数、`#{}`、`if`/`elsif`/`else`、`times`、配列、`each` を使って解きましょう。

---

## 問題1：最高点を探す

次の配列の中から、いちばん大きい数を見つけて表示してみましょう。

```ruby
scores = [72, 48, 90, 65, 99, 81]
```

ヒント：

- まず最初の値を `max_score` に入れる
- 1つずつ見ながら、もっと大きい数があれば上書きする

<details>
<summary>解答例</summary>

```ruby
scores = [72, 48, 90, 65, 99, 81]
max_score = scores[0]

scores.each do |score|
  if score > max_score
    max_score = score
  end
end

puts "最高点：#{max_score}"
```

※ 別の書き方として、まだ習っていない `max` というメソッドも使えます。

```ruby
scores = [72, 48, 90, 65, 99, 81]

puts "最高点：#{scores.max}"
```

</details>

---

## 問題2：平均点を出す

次の配列の平均点を出してみましょう。

```ruby
scores = [72, 48, 90, 65]
```

ヒント：

- まず合計を出す
- 配列の数は `scores.length` でわかる

※ `length` は、まだ習っていないメソッドです。配列に何個データが入っているかを調べられます。

<details>
<summary>解答例</summary>

```ruby
scores = [72, 48, 90, 65]
total = 0

scores.each do |score|
  total = total + score
end

average = total / scores.length

puts "平均点：#{average}"
```

※ 別の書き方として、まだ習っていない `sum` というメソッドも使えます。

```ruby
scores = [72, 48, 90, 65]

puts "平均点：#{scores.sum / scores.length}"
```

</details>

---

## 問題3：買い物リスト判定

次の配列を1つずつ見て、100円以上なら「買う」、100円未満なら「やめる」と表示してみましょう。

```ruby
prices = [80, 120, 50, 300, 100]
```

表示例：

```
80円：やめる
120円：買う
...
```

<details>
<summary>解答例</summary>

```ruby
prices = [80, 120, 50, 300, 100]

prices.each do |price|
  if price >= 100
    puts "#{price}円：買う"
  else
    puts "#{price}円：やめる"
  end
end
```

</details>

---

## 問題4：おみくじメンバー紹介

次の名前の配列を使って、1人ずつランダムなおみくじ結果を出してみましょう。

```ruby
names = ["田中", "鈴木", "佐藤", "高橋"]
```

結果は次のどれかです。

- 大吉
- 中吉
- 小吉
- 末吉
- 凶

※ この問題では、まだ習っていない `sample` というメソッドを使う書き方もあります。`sample` は、配列の中からランダムに1つ取り出すメソッドです。

<details>
<summary>解答例</summary>

```ruby
names = ["田中", "鈴木", "佐藤", "高橋"]
results = ["大吉", "中吉", "小吉", "末吉", "凶"]

names.each do |name|
  puts "#{name}さん：#{results.sample}"
end
```

</details>

---

## 問題5：文字の長さで判定

次の配列の中から、3文字以上の言葉だけ表示してみましょう。

```ruby
words = ["犬", "ねこ", "りんご", "本", "プログラム"]
```

ヒント：文字の長さは `.length` で調べられます。

※ ここで使う `length` も、まだ習っていないメソッドです。文字が何文字あるかを調べられます。

<details>
<summary>解答例</summary>

```ruby
words = ["犬", "ねこ", "りんご", "本", "プログラム"]

words.each do |word|
  if word.length >= 3
    puts word
  end
end
```

</details>

---

## 問題6：自由研究

第1回〜第5回で学んだことを全部使って、自分だけのプログラムを作ってみましょう。

アイデア例：

- クラス名簿を順番に表示するプログラム
- テストの点数を判定するプログラム
- 好きな食べ物ランキングを表示するプログラム
