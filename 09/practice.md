# 第9回 練習：Ruby基礎の総復習 ── パーツをつなぎ合わせる

## 今日のゴール

- 変数、条件分岐、繰り返し、配列、ハッシュ、メソッド、クラスの役割と書き方を思い出す
- それぞれのパーツを組み合わせて、お店の注文金額を計算するプログラムを作れるようになる

---

## この練習について

最初のうちは、自分の手で打って慣れることを大事にしましょう。

各問題は、次の順番で進めてください。

1. `practice01.rb` のようなファイルを作る
2. 自分で考えてコードを書く
3. `ruby practice01.rb` で実行する
4. 動いたら、解答例を開く
5. `practice01_answer.rb` を作り、解答例を写す（コピーしてもOK）
6. `ruby practice01_answer.rb` を実行する
7. 自分の実行結果と、解答例の実行結果を比べる

実行結果が同じならOKです。
そのうえで、自分のコードと解答例を見比べて、どちらが読みやすいかも考えてみましょう。

実行結果が違う場合は、自分のコードと解答例を見比べて、どこが違うのかを確認してください。

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
2. [このリポジトリ](https://github.com/TORIFUKUKaiou/rails-dojo-year1-content/)のページを開く（リンクを右クリックして、「リンクを新しいタブで開く」）
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

```bash
ruby main.rb
```

`Hello, World!` と表示されたら成功です。

ここまでできたら準備完了です。
`main.rb` は動作確認用のファイルです。
ここから先の練習では、問題ごとに `practice01.rb`、`practice02.rb` のような新しいファイルを作って進めましょう。

---

## 📝 1. 文字列と数値の表示 ( `practice01.rb` )

### やってみよう

`puts` を使って、文字列 `"Rubyの復習を始めます"` と、計算式 `150 + 80` の計算結果をそれぞれ別の行に表示するプログラムを書いてください。

作成するファイル：
```text
practice01.rb
```

表示例：
```text
Rubyの復習を始めます
230
```

実行するコマンド：
```bash
ruby practice01.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice01_answer.rb)</summary>

```ruby
# practice01_answer.rb
puts "Rubyの復習を始めます"
puts 150 + 80
```

解答例を確認するときは、`practice01_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice01_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 2. 変数の代入と更新 ( `practice02.rb` )

### やってみよう

変数 `total` を作り、初期値として数値 `120` を代入してください。
その後、`total = total + 80` のように、現在の `total` の値に `80` を加算した結果をもう一度 `total` に代入（上書き）してください。
最後に、`total` の中身を `puts` で表示してください。

作成するファイル：
```text
practice02.rb
```

表示例：
```text
200
```

実行するコマンド：
```bash
ruby practice02.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice02_answer.rb)</summary>

```ruby
# practice02_answer.rb
total = 120
total = total + 80
puts total
```

解答例を確認するときは、`practice02_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice02_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 3. 変数を使った式展開 ( `practice03.rb` )

### やってみよう

変数 `item_name` に `"カレー"`、変数 `price` に `750` を代入してください。
`#{}` を使って、`"カレーは750円です"` という文章を組み立てて `puts` で表示するプログラムを書いてください。

作成するファイル：
```text
practice03.rb
```

表示例：
```text
カレーは750円です
```

実行するコマンド：
```bash
ruby practice03.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice03_answer.rb)</summary>

```ruby
# practice03_answer.rb
item_name = "カレー"
price = 750

puts "#{item_name}は#{price}円です"
```

解答例を確認するときは、`practice03_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice03_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 4. 条件分岐による判定 ( `practice04.rb` )

### やってみよう

変数 `score` に数値 `85` を代入してください。
`if` と `else` を使って、`score` が `80` 以上の場合は `"合格です"`、それ以外の場合は `"不合格です"` と表示するプログラムを書いてください。

作成するファイル：
```text
practice04.rb
```

表示例：
```text
合格です
```

実行するコマンド：
```bash
ruby practice04.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice04_answer.rb)</summary>

```ruby
# practice04_answer.rb
score = 85

if score >= 80
  puts "合格です"
else
  puts "不合格です"
end
```

解答例を確認するときは、`practice04_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice04_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 5. elsif を使った複数分岐 ( `practice05.rb` )

### やってみよう

変数 `age` に数値 `15` を代入してください。
`if`、`elsif`、`else` を使って、以下の条件で表示を切り替えるプログラムを書いてください。

- `age` が `18` 以上の場合は `"大人です"`
- `age` が `12` 以上、かつ `18` 未満の場合は `"中高生です"`
- それ以外（`12` 未満）の場合は `"子供です"`

作成するファイル：
```text
practice05.rb
```

表示例：
```text
中高生です
```

実行するコマンド：
```bash
ruby practice05.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice05_answer.rb)</summary>

```ruby
# practice05_answer.rb
age = 15

if age >= 18
  puts "大人です"
elsif age >= 12
  puts "中高生です"
else
  puts "子供です"
end
```

解答例を確認するときは、`practice05_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice05_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 6. 複合条件による判定 ( `practice06.rb` )

### やってみよう

変数 `is_member` に `true`（会員である）、変数 `has_coupon` に `false`（クーポンは持っていない）を代入してください。
`||`（または）を使って、「会員である」か「クーポンを持っている」のどちらか一方でも正しければ `"割引対象です"`、どちらも正しくなければ `"通常料金です"` と表示するプログラムを書いてください。

作成するファイル：
```text
practice06.rb
```

表示例：
```text
割引対象です
```

実行するコマンド：
```bash
ruby practice06.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice06_answer.rb)</summary>

```ruby
# practice06_answer.rb
is_member = true
has_coupon = false

if is_member || has_coupon
  puts "割引対象です"
else
  puts "通常料金です"
end
```

解答例を確認するときは、`practice06_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice06_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 7. キーボードからの入力と条件判定 ( `practice07.rb` )

### やってみよう

画面に `"年齢を入力してください"` と表示し、`gets.to_i` を使ってキーボードからの数値入力を受け取ってください。
入力された値が `18` 以上の場合は `"大人です"`、`18` 未満の場合は `"未成年です"` と表示するプログラムを書いてください。

作成するファイル：
```text
practice07.rb
```

表示例（キーボードから `20` と入力した場合）：
```text
年齢を入力してください
20
大人です
```

表示例（キーボードから `15` と入力した場合）：
```text
年齢を入力してください
15
未成年です
```

> [!IMPORTANT]
> キーボードから入力する値（例の中の `20` や `15`）は、実行時に自分でターミナルに打ち込んで Enter を押してください。

実行するコマンド：
```bash
ruby practice07.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice07_answer.rb)</summary>

```ruby
# practice07_answer.rb
puts "年齢を入力してください"
age = gets.to_i

if age >= 18
  puts "大人です"
else
  puts "未成年です"
end
```

解答例を確認するときは、`practice07_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice07_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 8. times による繰り返し ( `practice08.rb` )

### やってみよう

`times` を使って、画面に `"わっしょい"` と3回繰り返し表示するプログラムを書いてください。

作成するファイル：
```text
practice08.rb
```

表示例：
```text
わっしょい
わっしょい
わっしょい
```

実行するコマンド：
```bash
ruby practice08.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice08_answer.rb)</summary>

```ruby
# practice08_answer.rb
3.times do
  puts "わっしょい"
end
```

解答例を確認するときは、`practice08_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice08_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 9. ループ変数を使った回数の表示 ( `practice09.rb` )

### やってみよう

`times` とループ変数 `|i|` を使って、画面に `"1回目です"` から `"5回目です"` まで順番に表示するプログラムを書いてください。
ループ変数は `0` から始まるため、人間に分かりやすい回数を表示するには `i + 1` を使うことに注意してください。

作成するファイル：
```text
practice09.rb
```

表示例：
```text
1回目です
2回目です
3回目です
4回目です
5回目です
```

実行するコマンド：
```bash
ruby practice09.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice09_answer.rb)</summary>

```ruby
# practice09_answer.rb
5.times do |i|
  puts "#{i + 1}回目です"
end
```

解答例を確認するときは、`practice09_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice09_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 10. 配列の定義と取り出し・書き換え ( `practice10.rb` )

### やってみよう

`"カレー"`、`"ラーメン"`、`"寿司"` の3つの文字列を要素に持つ配列 `foods` を定義してください。
その後、2番目の要素（ラーメン）を `"うどん"` に書き換えてください（配列の番号は `0` から始まることに注意してください）。
最後に、`foods[0]`、`foods[1]`、`foods[2]` の中身をそれぞれ `puts` で別の行に表示してください。

作成するファイル：
```text
practice10.rb
```

表示例：
```text
カレー
うどん
寿司
```

実行するコマンド：
```bash
ruby practice10.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice10_answer.rb)</summary>

```ruby
# practice10_answer.rb
foods = ["カレー", "ラーメン", "寿司"]
foods[1] = "うどん"

puts foods[0]
puts foods[1]
puts foods[2]
```

解答例を確認するときは、`practice10_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice10_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 11. 配列への追加と each ( `practice11.rb` )

### やってみよう

`"カレー"`、`"ラーメン"` の2つの文字列を持つ配列 `foods` を定義してください。
その後、`<<` を使って配列の最後に `"寿司"` を追加してください。
最後に、`each` を使って配列の中身を1つずつ取り出し、`puts` で表示するプログラムを書いてください。

作成するファイル：
```text
practice11.rb
```

表示例：
```text
カレー
ラーメン
寿司
```

実行するコマンド：
```bash
ruby practice11.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice11_answer.rb)</summary>

```ruby
# practice11_answer.rb
foods = ["カレー", "ラーメン"]
foods << "寿司"

foods.each do |food|
  puts food
end
```

解答例を確認するときは、`practice11_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice11_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 12. 配列の each を使った合計値の計算 ( `practice12.rb` )

### やってみよう

`80`、`90`、`70` の3つの数値を持つ配列 `scores` を定義してください。
合計値を入れておくための変数 `total` を `0` で作り、`each` を使って配列の数値を順番に `total` に足し込んでください（`total = total + score` のような変数の更新を使います）。
ループが終わったあと、`total` の値を表示してください。

作成するファイル：
```text
practice12.rb
```

表示例：
```text
240
```

実行するコマンド：
```bash
ruby practice12.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice12_answer.rb)</summary>

```ruby
# practice12_answer.rb
scores = [80, 90, 70]
total = 0

scores.each do |score|
  total = total + score
end

puts total
```

解答例を確認するときは、`practice12_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice12_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 13. 範囲オブジェクトと繰り返し ( `practice13.rb` )

### やってみよう

`1..5` の範囲オブジェクトを定義してください。
`each` を使って、その範囲内の数値を1つずつ取り出し、それぞれを2倍した値を `puts` で表示するプログラムを書いてください。

作成するファイル：
```text
practice13.rb
```

表示例：
```text
2
4
6
8
10
```

実行するコマンド：
```bash
ruby practice13.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice13_answer.rb)</summary>

```ruby
# practice13_answer.rb
numbers = 1..5

numbers.each do |number|
  puts number * 2
end
```

解答例を確認するときは、`practice13_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice13_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 14. ハッシュの定義と書き換え・追加 ( `practice14.rb` )

### やってみよう

キーが `"name"`（値は `"カレー"`）、キーが `"price"`（値は `700`）であるハッシュ `item` を定義してください。
定義後、価格（`"price"` キーの値）を `750` に書き換えてください。
さらに、新しくキー `"category"`（値は `"主食"`）を追加してください。
最後に、`puts` を使って `"name"`、`"price"`、`"category"` の値をそれぞれ表示してください。

作成するファイル：
```text
practice14.rb
```

表示例：
```text
カレー
750
主食
```

実行するコマンド：
```bash
ruby practice14.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice14_answer.rb)</summary>

```ruby
# practice14_answer.rb
item = {
  "name" => "カレー",
  "price" => 700
}

item["price"] = 750
item["category"] = "主食"

puts item["name"]
puts item["price"]
puts item["category"]
```

解答例を確認するときは、`practice14_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice14_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 15. ハッシュの each ( `practice15.rb` )

### やってみよう

キーが `"name"`（値は `"田中"`）、キーが `"age"`（値は `20`）、キーが `"city"`（値は `"福岡"`）であるハッシュ `person` を定義してください。
`each` を使い、すべてのキーと値のペアを取り出して、`"キー: 値"` の形式で表示するプログラムを書いてください。

作成するファイル：
```text
practice15.rb
```

表示例：
```text
name: 田中
age: 20
city: 福岡
```

実行するコマンド：
```bash
ruby practice15.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice15_answer.rb)</summary>

```ruby
# practice15_answer.rb
person = {
  "name" => "田中",
  "age" => 20,
  "city" => "福岡"
}

person.each do |key, value|
  puts "#{key}: #{value}"
end
```

解答例を確認するときは、`practice15_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice15_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 16. 配列とハッシュの組み合わせ ( `practice16.rb` )

### やってみよう

複数のハッシュを格納した配列 `members` を定義してください。各ハッシュは `"name"` と `"age"` をキーに持ちます。データは以下の3人分とします。

- 1つ目のハッシュ：`name` は `"佐藤"`、`age` は `19`
- 2つ目のハッシュ：`name` は `"鈴木"`、`age` は `22`
- 3つ目のハッシュ：`name` は `"高橋"`、`age` は `20`

配列 `members` に対して `each` を使い、それぞれのメンバーの名前と年齢を取り出して、`"○○さんは△△歳です"` と表示するプログラムを書いてください。

作成するファイル：
```text
practice16.rb
```

表示例：
```text
佐藤さんは19歳です
鈴木さんは22歳です
高橋さんは20歳です
```

実行するコマンド：
```bash
ruby practice16.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice16_answer.rb)</summary>

```ruby
# practice16_answer.rb
members = [
  { "name" => "佐藤", "age" => 19 },
  { "name" => "鈴木", "age" => 22 },
  { "name" => "高橋", "age" => 20 }
]

members.each do |member|
  puts "#{member["name"]}さんは#{member["age"]}歳です"
end
```

解答例を確認するときは、`practice16_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice16_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 17. ハッシュの値に配列を入れる ( `practice17.rb` )

### やってみよう

ハッシュ `user` を定義してください。キー `"name"` の値は `"田中"`、キー `"favorites"` の値は `"カレー"` と `"ラーメン"` の2つの文字列を持つ配列とします。
このハッシュから `"name"` の値と、`"favorites"` 配列の1番目（インデックス `0`）の料理名を取り出し、`"田中さんのお気に入りはカレーです"` と表示するプログラムを書いてください。

作成するファイル：
```text
practice17.rb
```

表示例：
```text
田中さんのお気に入りはカレーです
```

実行するコマンド：
```bash
ruby practice17.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice17_answer.rb)</summary>

```ruby
# practice17_answer.rb
user = {
  "name" => "田中",
  "favorites" => ["カレー", "ラーメン"]
}

puts "#{user["name"]}さんのお気に入りは#{user["favorites"][0]}です"
```

解答例を確認するときは、`practice17_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice17_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 18. メソッドの定義と呼び出し ( `practice18.rb` )

### やってみよう

引数として名前（`name`）を1つ受け取り、`"こんにちは、○○さん！"` という挨拶の文字列を作って返す `make_message(name)` メソッドを定義してください。
メソッドの中では `puts` を使わずに値を返し、呼び出し側の外側で `puts` を使って画面に表示してください。
名前として `"佐藤"` と `"鈴木"` をそれぞれ引数に渡して呼び出し、結果を表示してください。

作成するファイル：
```text
practice18.rb
```

表示例：
```text
こんにちは、佐藤さん！
こんにちは、鈴木さん！
```

実行するコマンド：
```bash
ruby practice18.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice18_answer.rb)</summary>

```ruby
# practice18_answer.rb
def make_message(name)
  "こんにちは、#{name}さん！"
end

msg1 = make_message("佐藤")
puts msg1

msg2 = make_message("鈴木")
puts msg2
```

解答例を確認するときは、`practice18_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice18_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 19. メソッド内での条件分岐 ( `practice19.rb` )

### やってみよう

引数として点数（`score`）を1つ受け取り、`score` が `80` 以上の場合は文字列 `"合格"`、それ以外の場合は `"不合格"` を戻り値として返す `judge(score)` メソッドを定義してください。
引数として `85` と `50` を渡してそれぞれメソッドを呼び出し、結果を `puts` で表示してください。

作成するファイル：
```text
practice19.rb
```

表示例：
```text
合格
不合格
```

実行するコマンド：
```bash
ruby practice19.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice19_answer.rb)</summary>

```ruby
# practice19_answer.rb
def judge(score)
  if score >= 80
    "合格"
  else
    "不合格"
  end
end

puts judge(85)
puts judge(50)
```

解答例を確認するときは、`practice19_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice19_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 20. メソッドのスコープと引数の利用 ( `practice20.rb` )

### やってみよう

メソッドの外で定義した変数（`discount`）の値を、メソッドの中から直接使おうとすると、エラーが発生してプログラムが止まってしまいます。
外のデータをメソッドの中で使うために、引数としてそのデータをメソッドに渡すようにする必要があります。

引数として通常価格（`price`）と割引額（`discount`）の2つを受け取り、割引適用後の価格を計算して返す `calculate_discount(price, discount)` メソッドを定義してください。
メソッドの外で変数 `discount = 150` を定義し、通常価格 `1000` とその `discount` を引数に渡してメソッドを呼び出し、戻り値を表示してください。

作成するファイル：
```text
practice20.rb
```

表示例：
```text
850
```

実行するコマンド：
```bash
ruby practice20.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice20_answer.rb)</summary>

```ruby
# practice20_answer.rb
def calculate_discount(price, discount)
  price - discount
end

discount = 150
result = calculate_discount(1000, discount)

puts result
```

解答例を確認するときは、`practice20_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice20_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 21. クラスの定義とインスタンス化 ( `practice21.rb` )

### やってみよう

クラス名 `Article` でクラスを定義してください。クラス名は大文字で始めるルールを忘れないでください。
`Article` クラスの中に `title_message` というメソッドを作り、文字列 `"記事のタイトル欄"` を返すようにしてください。
クラスを定義したあと、`Article.new` でインスタンスを1つ作り、変数 `article` に代入してください。その後、`article.title_message` を呼び出して `puts` で表示してください。

作成するファイル：
```text
practice21.rb
```

表示例：
```text
記事のタイトル欄
```

実行するコマンド：
```bash
ruby practice21.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice21_answer.rb)</summary>

```ruby
# practice21_answer.rb
class Article
  def title_message
    "記事のタイトル欄"
  end
end

article = Article.new
puts article.title_message
```

解答例を確認するときは、`practice21_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice21_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 22. initialize とインスタンス変数 ( `practice22.rb` )

### やってみよう

`Article` クラスを定義してください。
`Article` クラスの中に `initialize(title)` メソッドを作り、受け取った `title` をインスタンス変数 `@title` に代入してください。
さらに、`title_message` メソッドを定義し、インスタンス変数 `@title` の値を埋め込んだ文字列 `"記事タイトル：#{@title}"` を返すようにしてください。

クラスの定義後、次の2つのインスタンスを作成して、それぞれの `title_message` を呼び出して表示してください。

- 1つ目のインスタンス（変数 `article1`）：タイトルは `"Rubyとは"`
- 2つ目のインスタンス（変数 `article2`）：タイトルは `"Railsを学ぶ"`

作成するファイル：
```text
practice22.rb
```

表示例：
```text
記事タイトル：Rubyとは
記事タイトル：Railsを学ぶ
```

実行するコマンド：
```bash
ruby practice22.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice22_answer.rb)</summary>

```ruby
# practice22_answer.rb
class Article
  def initialize(title)
    @title = title
  end

  def title_message
    "記事タイトル：#{@title}"
  end
end

article1 = Article.new("Rubyとは")
article2 = Article.new("Railsを学ぶ")

puts article1.title_message
puts article2.title_message
```

解答例を確認するときは、`practice22_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice22_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 23. ハッシュデータの割引計算 ( `practice23.rb` )

### やってみよう

キーが `"name"`（値は `"カレー"`）、キーが `"price"`（値は `1200`）であるハッシュ `item` を定義してください。
価格（`"price"` キーの値）が `1000` 以上の場合は通常価格から `100` 円を引き、そうでない場合は通常価格のままの金額を合計金額（変数 `total`）としてください。
最後に、`"カレーの合計金額は1100円です"` の形式で表示するプログラムを書いてください。

作成するファイル：
```text
practice23.rb
```

表示例：
```text
カレーの合計金額は1100円です
```

実行するコマンド：
```bash
ruby practice23.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice23_answer.rb)</summary>

```ruby
# practice23_answer.rb
item = {
  "name" => "カレー",
  "price" => 1200
}

total = item["price"]

if total >= 1000
  total = total - 100
end

puts "#{item["name"]}の合計金額は#{total}円です"
```

解答例を確認するときは、`practice23_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice23_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 24. 配列からのデータ抽出 ( `practice24.rb` )

### やってみよう

以下の3つの商品ハッシュを格納した配列 `items` を定義してください。

- 1つ目のハッシュ：`name` は `"カレー"`、`price` は `700`
- 2つ目のハッシュ：`name` は `"サラダ"`、`price` は `300`
- 3つ目のハッシュ：`name` は `"ラーメン"`、`price` は `850`

配列 `items` に対して `each` と `if` を使い、価格が `500` 以上の商品のみを抽出し、`"商品名：価格円"`（例：`カレー：700円`）と表示するプログラムを書いてください。

作成するファイル：
```text
practice24.rb
```

表示例：
```text
カレー：700円
ラーメン：850円
```

実行するコマンド：
```bash
ruby practice24.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice24_answer.rb)</summary>

```ruby
# practice24_answer.rb
items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

items.each do |item|
  if item["price"] >= 500
    puts "#{item["name"]}：#{item["price"]}円"
  end
end
```

解答例を確認するときは、`practice24_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice24_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 25. 合計金額を計算するメソッド ( `practice25.rb` )

### やってみよう

引数として商品の配列（ハッシュの配列）を受け取り、すべての商品の合計金額をループ処理で計算して戻り値として返す `calculate_total(items)` メソッドを定義してください。
メソッドの外で、問24と同じ3つの商品ハッシュを含む配列 `items` を定義し、それを引数に渡して `calculate_total` メソッドを呼び出してください。戻り値を `puts` で表示してください。

作成するファイル：
```text
practice25.rb
```

表示例：
```text
1850
```

実行するコマンド：
```bash
ruby practice25.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice25_answer.rb)</summary>

```ruby
# practice25_answer.rb
def calculate_total(items)
  total = 0
  items.each do |item|
    total = total + item["price"]
  end
  total
end

items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

puts calculate_total(items)
```

解答例を確認するときは、`practice25_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice25_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 26. Order クラスの定義 ( `practice26.rb` )

### やってみよう

注文を管理するクラス `Order` を定義してください。
`Order` クラスの中に `initialize(items)` メソッドを作り、受け取った商品の配列をインスタンス変数 `@items` に代入してください。
クラスの定義後、問24と同じ3つの商品ハッシュを含む配列 `items` を定義し、`Order.new(items)` でインスタンスを作って変数 `order` に代入してください。
この問題では画面への出力はありません。エラーが出ずに終了すれば成功です。

作成するファイル：
```text
practice26.rb
```

表示例：
（何も表示されません）

> [!IMPORTANT]
> この課題は、エラーが出ず、何も表示されなければ成功です。

実行するコマンド：
```bash
ruby practice26.rb
```

<details>
<summary>解答例 (practice26_answer.rb)</summary>

```ruby
# practice26_answer.rb
class Order
  def initialize(items)
    @items = items
  end
end

items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

order = Order.new(items)
```

解答例を確認するときは、`practice26_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice26_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 27. Order クラスに合計金額計算メソッドを追加する ( `practice27.rb` )

### やってみよう

新しいファイルに問26と同じ `Order` クラスをもう一度書き、インスタンスメソッド `total_price` を追加してください。
`total_price` メソッドは、インスタンス変数 `@items` に入っているすべての商品の合計金額をループ処理で計算し、その結果を戻り値として返すようにしてください。
クラス定義後、問24と同じ3つの商品ハッシュを含む配列 `items` を定義して `Order` インスタンスを作成し、`order.total_price` を呼び出して `puts` で表示してください。

作成するファイル：
```text
practice27.rb
```

表示例：
```text
1850
```

実行するコマンド：
```bash
ruby practice27.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice27_answer.rb)</summary>

```ruby
# practice27_answer.rb
class Order
  def initialize(items)
    @items = items
  end

  def total_price
    total = 0
    @items.each do |item|
      total = total + item["price"]
    end
    total
  end
end

items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

order = Order.new(items)
puts order.total_price
```

解答例を確認するときは、`practice27_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice27_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 28. 注文商品の個数を取得するメソッド ( `practice28.rb` )

### やってみよう

新しいファイルに問27と同じ `Order` クラスをもう一度書き、インスタンスメソッド `item_count` を追加してください。
`item_count` メソッドは、注文に含まれる商品の個数を返すようにしてください（配列の個数を調べる `length` メソッドが使えます）。
クラス定義後、問24と同じ3つの商品ハッシュを含む配列 `items` を定義して `Order` インスタンスを作成し、`order.item_count` を呼び出して表示してください。

作成するファイル：
```text
practice28.rb
```

表示例：
```text
3
```

実行するコマンド：
```bash
ruby practice28.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice28_answer.rb)</summary>

```ruby
# practice28_answer.rb
class Order
  def initialize(items)
    @items = items
  end

  def total_price
    total = 0
    @items.each do |item|
      total = total + item["price"]
    end
    total
  end

  def item_count
    @items.length
  end
end

items = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "サラダ", "price" => 300 },
  { "name" => "ラーメン", "price" => 850 }
]

order = Order.new(items)
puts order.item_count
```

解答例を確認するときは、`practice28_answer.rb` を作成し, 上のコードを書いてから次を実行してください。

```bash
ruby practice28_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 29. 送料を加算するメソッドの追加 ( `practice29.rb` )

### やってみよう

新しいファイルに問28と同じ `Order` クラスをもう一度書き、インスタンスメソッド `total_price_with_shipping` を追加してください。
`total_price_with_shipping` メソッドは、以下の条件で送料を加算した総支払額を返すようにしてください。

- 商品の合計金額（`total_price` メソッドで計算される値）が `3000` 未満の場合は、送料 `500` 円を加算する。
- 合計金額が `3000` 以上の場合は、送料は加算しない（`0` 円）。

クラス定義後、以下の2パターンの注文インスタンスを作成し、それぞれの `total_price_with_shipping` を呼び出して `puts` で表示してください。

- 1つ目の注文（合計が3000円未満）：
  - 商品：`"カレー"`（700円）、`"ラーメン"`（850円）
- 2つ目の注文（合計が3000円以上）：
  - 商品：`"カレー"`（700円）、`"ステーキ"`（2500円）

作成するファイル：
```text
practice29.rb
```

表示例：
```text
2050
3200
```

実行するコマンド：
```bash
ruby practice29.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice29_answer.rb)</summary>

```ruby
# practice29_answer.rb
class Order
  def initialize(items)
    @items = items
  end

  def total_price
    total = 0
    @items.each do |item|
      total = total + item["price"]
    end
    total
  end

  def item_count
    @items.length
  end

  def total_price_with_shipping
    total = total_price
    if total < 3000
      total = total + 500
    end
    total
  end
end

# 1つ目の注文（合計 1550 円 → 3000 円未満なので送料 500 円加算）
items1 = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "ラーメン", "price" => 850 }
]
order1 = Order.new(items1)
puts order1.total_price_with_shipping

# 2つ目の注文（合計 3200 円 → 3000 円以上なので送料 0 円）
items2 = [
  { "name" => "カレー", "price" => 700 },
  { "name" => "ステーキ", "price" => 2500 }
]
order2 = Order.new(items2)
puts order2.total_price_with_shipping
```

解答例を確認するときは、`practice29_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice29_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 30. 複数の注文を each で一括処理する ( `practice30.rb` )

### やってみよう

新しいファイルに問29と同じ `Order` クラスを定義してください。
問29で作成した `order1`（カレー・ラーメン）、`order2`（カレー・ステーキ）に加え、以下の3つ目の注文インスタンス `order3` を作成してください。

- 3つ目の注文（合計 500 円）：
  - 商品：`"サラダ"`（300円）、`"ジュース"`（200円）

これら3つの `Order` インスタンスを要素とする配列 `orders` を定義してください。
配列 `orders` に対して `each` を使い、それぞれの注文の送料込み合計金額を取り出して、`"注文の合計金額（送料込み）：○○円"` と表示するプログラムを書いてください。

作成するファイル：
```text
practice30.rb
```

表示例：
```text
注文の合計金額（送料込み）：2050円
注文の合計金額（送料込み）：3200円
注文の合計金額（送料込み）：1000円
```

実行するコマンド：
```bash
ruby practice30.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice30_answer.rb)</summary>

```ruby
# practice30_answer.rb
class Order
  def initialize(items)
    @items = items
  end

  def total_price
    total = 0
    @items.each do |item|
      total = total + item["price"]
    end
    total
  end

  def item_count
    @items.length
  end

  def total_price_with_shipping
    total = total_price
    if total < 3000
      total = total + 500
    end
    total
  end
end

orders = [
  Order.new([
    { "name" => "カレー", "price" => 700 },
    { "name" => "ラーメン", "price" => 850 }
  ]),
  Order.new([
    { "name" => "カレー", "price" => 700 },
    { "name" => "ステーキ", "price" => 2500 }
  ]),
  Order.new([
    { "name" => "サラダ", "price" => 300 },
    { "name" => "ジュース", "price" => 200 }
  ])
]

orders.each do |order|
  puts "注文の合計金額（送料込み）：#{order.total_price_with_shipping}円"
end
```

解答例を確認するときは、`practice30_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice30_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>


