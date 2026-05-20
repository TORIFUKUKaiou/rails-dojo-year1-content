# 第5回 練習：配列で遊ぼう

## 今日のゴール

配列を作り、番号で中身を取り出し、書き換えたり追加したりしながら、`each`、`sum`、`length` を使って処理できるようになる。

---

## この練習について

コピーすれば早く終わりますが、今は自分の手で打って慣れることの方が大事です。
特に最初のうちは、入力に慣れること自体が練習です。できるだけ自分で打って進めましょう。

各問題は、次の順番で進めてください。

1. `practice01.rb` のようなファイルを作る
2. 自分で考えてコードを書く
3. `ruby practice01.rb` で実行する
4. 動いたら、解答例を開く
5. `practice01-answer.rb` を作り、解答例を写す（コピーしてもOK）
6. `ruby practice01-answer.rb` を実行する
7. 自分の実行結果と、解答例の実行結果を比べる

実行結果が同じならOKです。
そのうえで、自分のコードと解答例を見比べて、どちらが読みやすいかも考えてみましょう。

実行結果が違う場合は、自分のコードと解答例を見比べて、どこが違うのかを確認してください。

解答例を見ることは、自分の書き方を確認し、別の考え方を学ぶための作業です。

「動いたから終わり」ではありません。
解答例と比べるところまでが、この練習です。

---

## プログラムの基本構造（おさらい）

```
入力 → 処理 → 出力
```

今日は「処理」の部分で、配列の中身を1つずつ取り出します。

---

## 準備

<details>
<summary>前回の Codespace が残っている場合</summary>

前回の授業で Codespace を削除していないと、前回の Codespace が残っていることがあります。

- この授業では、操作に慣れるために、毎回新しい Codespace を作って始めます
- 前回の Codespace が残っている場合は、削除してから新しく作り直してください
- まっさらな状態から始めることで、準備の手順も少しずつ覚えられます
- 削除方法は [Codespace を削除する](../delete_codespace.md) を見てください（リンクを右クリックして、「新しいタブで開く」）

</details>

---

1. GitHubにログインする
2. [このリポジトリ](https://github.com/TORIFUKUKaiou/rails-dojo-year1-content/)のページを開く (リンクを右クリックして、「リンクを新しいタブで開く」)
3. 「Code」ボタン → 「Codespaces」タブ → 「Create codespace on main」をクリック

    ![](../images/create-codespace-on-main.png)

4. しばらく待つ（初回は1〜2分かかります）

画面が開いて、「**準備完了**」の文字が表示されたらプログラミングができる環境が整っています。

![](../images/created-codespace-on-main.png)

## ファイルにRubyのプログラムを書いて実行する

1. 画面左側のファイル一覧で `content` の外側、ホームディレクトリのあたりを右クリック →「新しいファイル」→ `main.rb` と入力

    ![](../images/new-file.png)

2. ファイルに以下を書く：

```ruby
puts "Hello, World!"
```

※ Codespaces 上の VS Code では、自動保存が初期設定で有効になっています。そのため、この環境では保存操作をしなくても変更は反映されます。ただし、開発環境によっては、保存しないと変更が反映されないこともあります。書き換えたら `ruby main.rb` を実行してください。

3. ターミナルで以下を実行する：

```
ruby main.rb
```

`Hello, World!` と表示されたら成功です。

ここまでできたら準備完了です。
`main.rb` は動作確認用のファイルです。
ここから先の練習では、問題ごとに `practice01.rb`、`practice02.rb` のような新しいファイルを作って進めましょう。

---

## 1. 配列を作る

```ruby
foods = ["カレー", "ラーメン", "寿司"]
```

### やってみよう

好きなものを3つ入れた配列を作ってみましょう。

この問題では、まだ画面に表示する命令を書いていません。
実行してエラーが出ず、何も表示されなければ成功です。

<details>
<summary>解答例</summary>

```ruby
foods = ["ピザ", "カレー", "オムライス"]
```

</details>

---

## 2. 番号で取り出す

### やってみよう

自分の配列を使って、1番目と3番目を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
foods = ["ピザ", "カレー", "オムライス"]

puts foods[0]
puts foods[2]
```

</details>

---

## 3. `each` で全部表示する

### やってみよう

自分の配列の中身を、`each` を使って全部表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
foods = ["ピザ", "カレー", "オムライス"]

foods.each do |food|
  puts food
end
```

</details>

---

## 4. 条件分岐と組み合わせる

### やってみよう

3つの点数を配列に入れて、1つずつ合格・不合格を判定してみましょう。

- 60点以上を合格
- 59点以下を不合格

<details>
<summary>解答例</summary>

```ruby
scores = [72, 48, 90]

scores.each do |score|
  if score >= 60
    puts "#{score}点：合格"
  else
    puts "#{score}点：不合格"
  end
end
```

</details>

---

## 5. 合計を出す

### やってみよう

自分で3つの点数を配列に入れて、合計を表示してみましょう。

> [!TIP]
> 最初に `total = 0` を用意します。
> `each` で点数を1つずつ取り出し、`total = total + score` で合計に足していきます。
> `total` は、点数を入れていく貯金箱のような変数です。

<details>
<summary>解答例</summary>

```ruby
scores = [72, 48, 90]
total = 0

scores.each do |score|
  total = total + score
end

puts "合計：#{total}点"
```

### 解答例2

Rubyには、配列の中の数を合計する `sum` というメソッドもあります。

```ruby
scores = [72, 48, 90]

puts "合計：#{scores.sum}点"
```

`sum` を使うと短く書けます。
ただし、まずは `each` で1つずつ足している動きを理解しておきましょう。

</details>

---

## 6. 名前に「さん」をつける

名前の配列を作って、次のように表示してみましょう。

```
こんにちは、田中さん
こんにちは、鈴木さん
こんにちは、佐藤さん
```

<details>
<summary>解答例</summary>

```ruby
names = ["田中", "鈴木", "佐藤"]

names.each do |name|
  puts "こんにちは、#{name}さん"
end
```

</details>

---

## 7. 偶数だけ表示する

数字の配列から、偶数だけを表示してみましょう。

```ruby
numbers = [3, 8, 11, 20, 7, 14]
```

<details>
<summary>解答例</summary>

```ruby
numbers = [3, 8, 11, 20, 7, 14]

numbers.each do |number|
  if number % 2 == 0
    puts number
  end
end
```

</details>

---

## 8. 80点以上だけ表示する

次の配列の中から、80点以上だけ表示してみましょう。

```ruby
scores = [65, 82, 97, 40, 88]
```

<details>
<summary>解答例</summary>

```ruby
scores = [65, 82, 97, 40, 88]

scores.each do |score|
  if score >= 80
    puts score
  end
end
```

</details>

---

## 9. 感嘆符をつけて表示する

配列の中の文字を、1つずつ `Ruby!` のように感嘆符つきで表示してみましょう。

```ruby
words = ["Ruby", "Rails", "HTML"]
```

<details>
<summary>解答例</summary>

```ruby
words = ["Ruby", "Rails", "HTML"]

words.each do |word|
  puts "#{word}!"
end
```

</details>

---

## 10. 1から10まで表示する

`1..10` を使って、1から10まで表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
numbers = 1..10

numbers.each do |number|
  puts number
end
```

</details>

---

## 11. 1から10までの合計を出す

`1..10` を使って、1から10までの合計を表示してみましょう。

表示例：

```
合計：55
```

<details>
<summary>解答例</summary>

```ruby
numbers = 1..10
total = 0

numbers.each do |number|
  total = total + number
end

puts "合計：#{total}"
```

</details>

---

## 12. 1から10までの偶数だけ表示する

`1..10` を使って、偶数だけを表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
numbers = 1..10

numbers.each do |number|
  if number % 2 == 0
    puts number
  end
end
```

</details>

---

## 13. 買うかどうかを判定する

次の配列を1つずつ見て、100円以上なら「買う」、100円未満なら「やめる」と表示してみましょう。

```ruby
prices = [80, 120, 50, 300, 100]
```

表示例：

```
80円：やめる
120円：買う
50円：やめる
300円：買う
100円：買う
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

## 14. 合格した人数を数える

次の配列を使って、60点以上の人数を数えて表示してみましょう。

```ruby
scores = [80, 55, 100, 42, 67]
```

表示例：

```
合格者：3人
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 55, 100, 42, 67]
count = 0

scores.each do |score|
  if score >= 60
    count = count + 1
  end
end

puts "合格者：#{count}人"
```

</details>

---

## 15. 3文字以上の言葉を数える

次の配列の中から、3文字以上の言葉がいくつあるか数えて表示してみましょう。

```ruby
words = ["犬", "ねこ", "りんご", "本", "プログラム"]
```

> [!TIP]
> 文字の長さは `.length` で調べられます。

表示例：

```
3文字以上：2個
```

<details>
<summary>解答例</summary>

```ruby
words = ["犬", "ねこ", "りんご", "本", "プログラム"]
count = 0

words.each do |word|
  if word.length >= 3
    count = count + 1
  end
end

puts "3文字以上：#{count}個"
```

</details>

---

## 16. 番号をつけて表示する

次の配列を使って、名前に番号をつけて表示してみましょう。

```ruby
names = ["田中", "鈴木", "佐藤"]
```

表示例：

```
1. 田中
2. 鈴木
3. 佐藤
```

<details>
<summary>解答例</summary>

```ruby
names = ["田中", "鈴木", "佐藤"]
number = 1

names.each do |name|
  puts "#{number}. #{name}"
  number = number + 1
end
```

</details>

---

## 17. 商品の合計金額を出す

次の配列を使って、商品の合計金額を表示してみましょう。

```ruby
prices = [120, 80, 300, 150]
```

表示例：

```
合計金額：650円
```

<details>
<summary>解答例</summary>

```ruby
prices = [120, 80, 300, 150]
total = 0

prices.each do |price|
  total = total + price
end

puts "合計金額：#{total}円"
```

### 解答例2

`sum` を使うと、配列の中の数をまとめて合計できます。

```ruby
prices = [120, 80, 300, 150]

puts "合計金額：#{prices.sum}円"
```

</details>

---

## 18. 予算内かどうかを判定する

次の配列を使って合計金額を出し、500円以内なら「予算内です」、500円を超えたら「予算オーバーです」と表示してみましょう。

```ruby
prices = [120, 80, 300, 150]
```

<details>
<summary>解答例</summary>

```ruby
prices = [120, 80, 300, 150]
total = 0

prices.each do |price|
  total = total + price
end

if total <= 500
  puts "予算内です"
else
  puts "予算オーバーです"
end
```

</details>

---

## 19. 7の段を表示する

`1..9` を使って、7の段を表示してみましょう。

表示例：

```
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 9 = 63
```

<details>
<summary>解答例</summary>

```ruby
dan = 7
numbers = 1..9

numbers.each do |number|
  puts "#{dan} x #{number} = #{dan * number}"
end
```

</details>

---

## 20. 点数にコメントをつける

次の配列を使って、点数ごとにコメントを表示してみましょう。

```ruby
scores = [95, 72, 48, 60]
```

条件：

- 80点以上なら「よくできました」
- 60点以上なら「合格です」
- 60点未満なら「再挑戦です」

表示例：

```
95点：よくできました
72点：合格です
48点：再挑戦です
60点：合格です
```

<details>
<summary>解答例</summary>

```ruby
scores = [95, 72, 48, 60]

scores.each do |score|
  if score >= 80
    puts "#{score}点：よくできました"
  elsif score >= 60
    puts "#{score}点：合格です"
  else
    puts "#{score}点：再挑戦です"
  end
end
```

</details>

---

## 21. 配列の中身を書き換える

次の配列の2番目を `"うどん"` に書き換えてから、全部表示してみましょう。

```ruby
foods = ["カレー", "ラーメン", "寿司"]
```

<details>
<summary>解答例</summary>

```ruby
foods = ["カレー", "ラーメン", "寿司"]

foods[1] = "うどん"

foods.each do |food|
  puts food
end
```

</details>

---

## 22. 配列にあとから追加する

次の配列に `"うどん"` を追加してから、全部表示してみましょう。

```ruby
foods = ["カレー", "ラーメン", "寿司"]
```

> [!TIP]
> `foods << "うどん"` と書くと、配列の最後に `"うどん"` を追加できます。

<details>
<summary>解答例</summary>

```ruby
foods = ["カレー", "ラーメン", "寿司"]

foods << "うどん"

foods.each do |food|
  puts food
end
```

</details>

---

## 23. 配列の個数を表示する

次の配列に点数がいくつ入っているか、`length` を使って表示してみましょう。

```ruby
scores = [80, 55, 100, 72]
```

表示例：

```
点数は4個あります
```

<details>
<summary>解答例</summary>

```ruby
scores = [80, 55, 100, 72]

puts "点数は#{scores.length}個あります"
```

</details>

---

## 24. 平均点を出す

次の配列を使って、平均点を表示してみましょう。

```ruby
scores = [80, 60, 100, 40]
```

条件：

- 合計は `scores.sum` で出す
- 個数は `scores.length` で調べる
- 平均は `合計 / 個数` で出す

<details>
<summary>解答例</summary>

```ruby
scores = [80, 60, 100, 40]

total = scores.sum
average = total / scores.length

puts "平均：#{average}点"
```

</details>

---

## 25. 入力した名前を配列にためる

名前を3回入力し、配列に追加してから、最後に全員分を表示してみましょう。

> [!TIP]
> - 文字を入力するときは `gets.chomp` を使います
> - `names << name` と書くと、配列の最後に `name` を追加できます

<details>
<summary>解答例</summary>

```ruby
names = []

3.times do
  puts "名前を入力してください"
  name = gets.chomp
  names << name
end

names.each do |name|
  puts name
end
```

</details>

---

## 26. 数当てゲームを作る

もっと練習に入る前の助走として、数当てゲームを作ってみましょう。
ここまで学んだ「順次（上から下へ）」「分岐」「繰り返し」をすべて使う総合問題です。

条件：

- 答えは `rand(1..10)` で作る
- 入力できる回数は3回
- 入力した数が答えと同じなら「正解です」と表示して、そこで終了する
- 入力した数が答えより小さければ「もっと大きいです」と表示する
- 入力した数が答えより大きければ「もっと小さいです」と表示する
- 最後に答えを表示する

> [!TIP]
> - `rand(1..10)` は、1から10までの中からランダムに1つ数字を作ります
> - 数字を入力するときは `gets.to_i` を使います
> - 繰り返しの途中で終わるときは `break` を使います

実行例：

```
1から10の数字を入力してください
5
もっと大きいです
1から10の数字を入力してください
8
正解です
答えは8でした
```

<details>
<summary>解答例</summary>

```ruby
answer = rand(1..10)

3.times do
  puts "1から10の数字を入力してください"
  guess = gets.to_i

  if guess == answer
    puts "正解です"
    break
  elsif guess < answer
    puts "もっと大きいです"
  else
    puts "もっと小さいです"
  end
end

puts "答えは#{answer}でした"
```

</details>

---

## まとめ

今日覚えたこと：

- 配列でたくさんのデータをまとめて持てる
- `foods[0]` のように番号で取り出せる
- 配列の番号は `0` から始まる
- 配列の中身を書き換えたり、あとから追加したりできる
- `each` で中身を1つずつ取り出せる
- `sum` で合計、`length` で個数を調べられる
- 変数や `if` と組み合わせられる
- `1..10` のような範囲も `each` で使える

練習問題を全部終えた人は [もっと練習](stretch.md) へ進みましょう。

次回は「ハッシュ」を学びます。名前とデータをセットで持つ方法です。
