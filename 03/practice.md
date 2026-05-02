# 第3回 練習：条件分岐で遊ぼう

## 今日のゴール

`if` を使って、条件によって動きが変わるプログラムを書く。

---

## この練習について

コピーすれば早く終わりますが、今は自分の手で打って慣れることの方が大事です。特に最初のうちは、入力に慣れること自体が練習です。できるだけ自分で打って進めましょう。

コードを書いたら、必ず実行（例: `ruby main.rb`）してください。実行する前に「何が表示されるか」を予想してから実行すると、理解が深まります。予想と違う結果が出たら、なぜ違うのかを考えてみてください。

エラーが出ることもあります。それは失敗ではありません。エラーを読んで、原因を考えて、直して、もう一度実行する。この繰り返しが、プログラミングの力をつける一番の近道です。

---

## プログラムの基本構造（おさらい）

```
入力 → 処理 → 出力
```

今日から「処理」の部分で条件による分岐が入ります。同じプログラムでも、データによって結果が変わるようになります。後半では、キーボードから入力した値で結果が変わる形も試します。

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

## 1. if と else

```ruby
age = 20

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

### やってみよう

`age` を自分の年齢に変えて実行してみましょう。次に `age = 10` にして、結果が変わることを確認しましょう。

<details>
<summary>解答例</summary>

```ruby
age = 18

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

`age` を 17 にすると「未成年です」、18 にすると「大人です」と表示されます。

</details>

---

## 2. 比較記号を使う

```ruby
score = 75

if score >= 60
  puts "合格"
else
  puts "不合格"
end
```

### やってみよう

`score` を色々な値に変えて試してみましょう。60、59、100、0 など。

<details>
<summary>解答例</summary>

```ruby
score = 59

if score >= 60
  puts "合格"
else
  puts "不合格"
end
```

59 → 不合格、60 → 合格。境界の値を試すのが大事です。

</details>

---

## 3. elsif で3つ以上に分ける

```ruby
score = 75

if score >= 80
  puts "よくできました"
elsif score >= 60
  puts "合格です"
else
  puts "もう少しがんばりましょう"
end
```

### やってみよう

点数を4段階に分けてみましょう。90以上「素晴らしい」、80以上「よくできました」、60以上「合格」、それ以外「もう少し」。

<details>
<summary>解答例</summary>

```ruby
score = 85

if score >= 90
  puts "素晴らしい"
elsif score >= 80
  puts "よくできました"
elsif score >= 60
  puts "合格"
else
  puts "もう少しがんばりましょう"
end
```

</details>

---

## 4. 文字列を比較する

```ruby
weather = "晴れ"

if weather == "晴れ"
  puts "散歩に行こう"
elsif weather == "曇り"
  puts "傘を持っていこう"
else
  puts "家にいよう"
end
```

### やってみよう

好きな食べ物を変数に入れて、食べ物によってメッセージを変えるプログラムを作ってみましょう。

<details>
<summary>解答例</summary>

```ruby
food = "カレー"

if food == "カレー"
  puts "辛口がおすすめ！"
elsif food == "ラーメン"
  puts "とんこつ派？味噌派？"
elsif food == "寿司"
  puts "回転寿司に行こう！"
else
  puts "#{food}、いいね！"
end
```

</details>

---

## 5. 変数と条件分岐を組み合わせる

```ruby
price = 500
count = 3
total = price * count

if total >= 1000
  puts "合計#{total}円：送料無料です"
else
  puts "合計#{total}円：送料500円かかります"
end
```

### やってみよう

消費税込みの金額で判定するように書き換えてみましょう。

<details>
<summary>解答例</summary>

```ruby
price = 500
count = 3
total = price * count
tax = total * 10 / 100
total_with_tax = total + tax

if total_with_tax >= 1000
  puts "合計#{total_with_tax}円（税込）：送料無料です"
else
  puts "合計#{total_with_tax}円（税込）：送料500円かかります"
end
```

</details>

---

## 6. キーボードから入力して判定する

```ruby
puts "年齢を入力してください"
age = gets.to_i

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

`gets` はキーボードから入力を受け取る命令です。`to_i` をつけると、入力された文字を数値に変換できます。

### やってみよう

自分の年齢を入力して判定してみましょう。次に、別の数字を入れて結果が変わることも確認しましょう。

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

例えば `17` と入力すると「未成年です」、`18` と入力すると「大人です」と表示されます。

</details>

---

## 7. チャレンジ問題

このチャレンジ問題では、 `gets` を使って、キーボードから入力する形で書いてみましょう。

### その1

年齢を入力して、以下のように表示するプログラムを作りましょう：

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

### その2

点数を入力して、成績（S/A/B/C/F）を表示するプログラムを作りましょう。

- 90以上：S
- 80以上：A
- 70以上：B
- 60以上：C
- 60未満：F

表示例：`75点はBです`

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

### その3

じゃんけんプログラムを作りましょう。自分の手と相手の手を入力して、勝敗を表示します。

- 1：グー
- 2：チョキ
- 3：パー

<details>
<summary>解答例</summary>

```ruby
puts "自分の手を入力してください（1:グー 2:チョキ 3:パー）"
my_hand = gets.to_i

puts "相手の手を入力してください（1:グー 2:チョキ 3:パー）"
enemy_hand = gets.to_i

if my_hand == 1
  puts "自分：グー"
elsif my_hand == 2
  puts "自分：チョキ"
else
  puts "自分：パー"
end

if enemy_hand == 1
  puts "相手：グー"
elsif enemy_hand == 2
  puts "相手：チョキ"
else
  puts "相手：パー"
end

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

> [!TIP]
> `&&` は「かつ」という意味です。2つの条件を同時に満たすときに使います。

</details>

### その4

月を入力して、12月・1月・2月なら「冬です」、それ以外なら「冬ではありません」と表示するプログラムを作りましょう。

> [!TIP]
> `||` は「または」という意味です。どれか1つでも当てはまれば実行されます。

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

## まとめ

今日覚えたこと：

- `if 条件` で「もし○○なら」が書ける
- `else` で「そうでなければ」が書ける
- `elsif` で3つ以上に分岐できる
- `==` は比較、`=` は代入（別物！）
- `>=` `<=` `>` `<` `!=` で大小や等しさを比較できる
- 文字列も `==` で比較できる
- `gets.to_i` を使うと、入力した数字で判定できる

次回は「繰り返し」を学びます。同じ処理を何度も実行できるようになります。

---

チャレンジ問題を全部終えた人は [もっと練習](stretch.md) へ進みましょう。
