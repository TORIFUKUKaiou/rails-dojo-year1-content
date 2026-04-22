# 第5回 練習：配列で遊ぼう

## 今日のゴール

配列を作り、番号で中身を取り出し、`each` を使って順番に表示できるようになる。

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

ここまでできたら準備完了です。次へ進みましょう。

---

## 今日の目標（達成ライン）

- `必須（全員）`：1〜3 を終える（配列を作る、番号で取り出す、`each` で表示する）
- `推奨（余裕がある人）`：4〜5 に進む（条件分岐や合計と組み合わせる）
- `発展（早く終わった人）`：6 のチャレンジ問題に取り組む

まずは `必須` を確実に終えましょう。

---

## 1. 配列を作る

```ruby
foods = ["カレー", "ラーメン", "寿司"]
```

### やってみよう

好きなものを3つ入れた配列を作ってみましょう。

<details>
<summary>解答例</summary>

```ruby
foods = ["ピザ", "カレー", "オムライス"]
```

</details>

---

## 2. 番号で取り出す

```ruby
foods = ["カレー", "ラーメン", "寿司"]

puts foods[0]
puts foods[1]
puts foods[2]
```

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

```ruby
foods = ["カレー", "ラーメン", "寿司"]

foods.each do |food|
  puts food
end
```

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

```ruby
scores = [80, 55, 100]

scores.each do |score|
  if score >= 60
    puts "#{score}点：合格"
  else
    puts "#{score}点：不合格"
  end
end
```

### やってみよう

3つの点数を配列に入れて、1つずつ合格・不合格を判定してみましょう。

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

```ruby
scores = [80, 55, 100]
total = 0

scores.each do |score|
  total = total + score
end

puts "合計：#{total}点"
```

### やってみよう

自分で3つの点数を入れて、合計を表示してみましょう。

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

</details>

---

## 6. チャレンジ問題

### その1

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

### その2

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

### その3

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

### その4

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

### その5

自由課題。配列と `each` を使って、自分だけのプログラムを作ってみましょう。

---

## まとめ

今日覚えたこと：

- 配列でたくさんのデータをまとめて持てる
- `foods[0]` のように番号で取り出せる
- 配列の番号は `0` から始まる
- `each` で中身を1つずつ取り出せる
- 変数や `if` と組み合わせられる

次回は「ハッシュ」を学びます。名前とデータをセットで持つ方法です。
