# 第1回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回で学んだ `puts`、`""`、`#{}`、計算を使って解きましょう。

Practice と同じように、自分で解いたあとで解答例を開き、実行結果や書き方を比べてください。

---

## 📝 問題1：自分だけの名刺 ( `stretch001.rb` )

以下のような出力を作ってみましょう。罫線や記号は自由に変えてOKです。

```
+--------------------+
|  山田太郎          |
|  福岡県出身        |
|  好きな言語：Ruby  |
+--------------------+
```

<details>
<summary>解答例 (stretch001_answer.rb)</summary>

```ruby
# stretch001_answer.rb
puts "+--------------------+"
puts "|  山田太郎          |"
puts "|  福岡県出身        |"
puts "|  好きな言語：Ruby  |"
puts "+--------------------+"
```

</details>

---

## 📝 問題2：時間の計算 ( `stretch002.rb` )

1日は何秒か、`puts` と `#{}` で計算して表示してみましょう。

```
1日は86400秒です
```

<details>
<summary>解答例 (stretch002_answer.rb)</summary>

```ruby
# stretch002_answer.rb
puts "1日は #{24 * 60 * 60} 秒です"
```

</details>

---

## 📝 問題3：単位変換 ( `stretch003.rb` )

身長170cmをメートルに変換して表示してみましょう。

```
170cmは1mと70cmです
```

> [!TIP]
> `/` は割り算、`%` は余りを求める演算です。

```ruby
puts 170 / 100   # => 1
puts 170 % 100   # => 70
```

<details>
<summary>解答例 (stretch003_answer.rb)</summary>

```ruby
# stretch003_answer.rb
puts "170cmは #{170 / 100}mと #{170 % 100}cmです"
```

</details>

---

## 📝 問題4：九九の表（1段分） ( `stretch004.rb` )

好きな段を選んで、九九を横一列に表示してみましょう。

```
3の段：3 6 9 12 15 18 21 24 27
```

> [!TIP]
> `print` を使うと改行なしで表示できます。

```ruby
print "hello "
print "world"
# => hello world（1行に表示される）
```

<details>
<summary>解答例 (stretch004_answer.rb)</summary>

```ruby
# stretch004_answer.rb
print "3の段："
print "#{3 * 1} "
print "#{3 * 2} "
print "#{3 * 3} "
print "#{3 * 4} "
print "#{3 * 5} "
print "#{3 * 6} "
print "#{3 * 7} "
print "#{3 * 8} "
print "#{3 * 9} "
puts ""
```

</details>

---

## 📝 問題5：大きなアスキーアート ( `stretch005.rb` )

以下の出力を作ってみましょう。

```
    *
   * *
  *   *
 *     *
*********
```

<details>
<summary>解答例 (stretch005_answer.rb)</summary>

```ruby
# stretch005_answer.rb
puts "    *"
puts "   * *"
puts "  *   *"
puts " *     *"
puts "*********"
```

</details>

---

## 📝 問題6：カウントダウン ( `stretch006.rb` )

次の出力を作ってみましょう。

```
3
2
1
スタート！
```

<details>
<summary>解答例 (stretch006_answer.rb)</summary>

```ruby
# stretch006_answer.rb
puts 3
puts 2
puts 1
puts "スタート！"
```

</details>

---

## 📝 問題7：テストの合計点 ( `stretch007.rb` )

国語 `80` 点、数学 `75` 点、英語 `92` 点の合計点を表示してみましょう。

```
合計点は247点です
```

<details>
<summary>解答例 (stretch007_answer.rb)</summary>

```ruby
# stretch007_answer.rb
puts "合計点は #{80 + 75 + 92} 点です"
```

</details>

---

## 📝 問題8：10年後の西暦 ( `stretch008.rb` )

今年から10年後の西暦を表示してみましょう。

```
10年後は2036年です
```

> [!TIP]
> `Time.now.year` が使えます。

<details>
<summary>解答例 (stretch008_answer.rb)</summary>

```ruby
# stretch008_answer.rb
puts "10年後は #{Time.now.year + 10} 年です"
```

</details>

---

## 📝 問題9：おこづかいの計算 ( `stretch009.rb` )

100円玉を `7` 枚持っています。合計金額を表示してみましょう。

```
100円玉7枚で700円です
```

<details>
<summary>解答例 (stretch009_answer.rb)</summary>

```ruby
# stretch009_answer.rb
puts "100円玉7枚で #{100 * 7} 円です"
```

</details>

---

## 📝 問題10：1時間は何分？ ( `stretch010.rb` )

2時間30分は何分かを表示してみましょう。

```
2時間30分は150分です
```

<details>
<summary>解答例 (stretch010_answer.rb)</summary>

```ruby
# stretch010_answer.rb
puts "2時間30分は #{2 * 60 + 30} 分です"
```

</details>

---

## 📝 問題11：好きな言葉を強調する ( `stretch011.rb` )

好きな言葉を大文字にして表示してみましょう。

```
RUBY
```

> [!TIP]
> `upcase` が使えます。

<details>
<summary>解答例 (stretch011_answer.rb)</summary>

```ruby
# stretch011_answer.rb
puts "ruby".upcase
```

</details>

---

## 📝 問題12：横に並べて表示する ( `stretch012.rb` )

次の出力を作ってみましょう。

```
★ ★ ★ ★ ★
```

> [!TIP]
> `print` を使うと横に並べられます。

<details>
<summary>解答例 (stretch012_answer.rb)</summary>

```ruby
# stretch012_answer.rb
print "★ "
print "★ "
print "★ "
print "★ "
print "★ "
puts ""
```

</details>

---

## 📝 問題13：年齢を月に直す ( `stretch013.rb` )

20歳は何か月かを表示してみましょう。

```
20歳は240か月です
```

<details>
<summary>解答例 (stretch013_answer.rb)</summary>

```ruby
# stretch013_answer.rb
puts "20歳は #{20 * 12} か月です"
```

</details>

---

## 📝 問題14：買い物の合計 ( `stretch014.rb` )

りんご `120` 円、ジュース `150` 円、パン `180` 円の合計金額を表示してみましょう。

```
合計は450円です
```

<details>
<summary>解答例 (stretch014_answer.rb)</summary>

```ruby
# stretch014_answer.rb
puts "合計は #{120 + 150 + 180} 円です"
```

</details>

---

## 📝 問題15：残りはいくつ？ ( `stretch015.rb` )

クッキーが `12` 枚あり、`5` 枚食べました。残りの枚数を表示してみましょう。

```
残りは7枚です
```

<details>
<summary>解答例 (stretch015_answer.rb)</summary>

```ruby
# stretch015_answer.rb
puts "残りは #{12 - 5} 枚です"
```

</details>

---

## 📝 問題16：1週間は何時間？ ( `stretch016.rb` )

1週間は何時間かを表示してみましょう。

```
1週間は168時間です
```

<details>
<summary>解答例 (stretch016_answer.rb)</summary>

```ruby
# stretch016_answer.rb
puts "1週間は #{7 * 24} 時間です"
```

</details>

---

## 📝 問題17：余りを使う ( `stretch017.rb` )

13個のあめを4人で同じ数ずつ分けると、何個あまるかを表示してみましょう。

```
あまりは1個です
```

> [!TIP]
> `%` が使えます。

<details>
<summary>解答例 (stretch017_answer.rb)</summary>

```ruby
# stretch017_answer.rb
puts "あまりは #{13 % 4} 個です"
```

</details>

---

## 📝 問題18：自分のミニ予定表 ( `stretch018.rb` )

次のように、今日の予定を3行で表示してみましょう。内容は自由に変えてかまいません。

```
1時間目：Ruby
2時間目：数学
放課後：部活
```

<details>
<summary>解答例 (stretch018_answer.rb)</summary>

```ruby
# stretch018_answer.rb
puts "1時間目：Ruby"
puts "2時間目：数学"
puts "放課後：部活"
```

</details>

---

## 📝 問題19：ミニレシート ( `stretch019.rb` )

次のような出力を作ってみましょう。

```
りんご 120円
パン 180円
ジュース 150円
合計 450円
```

> [!TIP]
> 最後の行は `#{}` の中で計算できます。

<details>
<summary>解答例 (stretch019_answer.rb)</summary>

```ruby
# stretch019_answer.rb
puts "りんご 120円"
puts "パン 180円"
puts "ジュース 150円"
puts "合計 #{120 + 180 + 150} 円"
```

</details>

---

## 📝 問題20：自由研究 ( `stretch020.rb` )

`puts`、`#{}` 、計算（`+ - * / %`）、`print` を組み合わせて、自分だけのプログラムを作ってみましょう。

アイデア例：
- 好きなアニメや漫画のキャラクター紹介
- 今日の日付を計算で表示
- オリジナルのアスキーアート
