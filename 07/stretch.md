# 第7回 もっと練習：メソッド

この課題は、[練習](practice.md) を終えた人向けの発展課題です。第1回〜第7回で学んだ `puts`、変数、文字列、数値、`#{}`、`if`/`elsif`/`else`、`gets`、`times`、配列、`each`、ハッシュ、そして今回学んだ「メソッド（引数・戻り値・スコープ）」を使って解きましょう。

後半では、`select`、`map`、`count`、`include?`、`empty?` などの発展的なメソッドも使います。まだ授業で扱っていないものは、問題の前にヒントや説明を入れています。必要に応じて、Rubyの使い方を検索したり、生成AIに相談したりしながら進めてみてください。

Practice と同じように、自分で解いたあとで解答例を開き、実行結果や書き方を比べてください。

やればやるほど力がつきます。できるところまで進めましょう。

---

## 📝 問題1：3倍の値を返す ( `stretch01.rb` )

### やってみよう

数値を受け取り、それを3倍した値を計算する `triple` メソッドを作ってみましょう。
引数名は `number` とします。
メソッドの中では `puts` を使わず、計算結果だけを書く（戻り値として返す）ようにしてください。
メソッドを定義したら、メソッドの外で `puts` を使い、次の数値について呼び出した結果を表示してください。
1. `8`

作成するファイル：
```text
stretch01.rb
```

表示例：
```text
24
```

実行するコマンド：
```bash
ruby stretch01.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch01_answer.rb)</summary>

```ruby
# stretch01_answer.rb
def triple(number)
  number * 3
end

puts triple(8)
```

解答例を確認するときは、`stretch01_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch01_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題2：四角形の面積を計算する ( `stretch02.rb` )

### やってみよう

縦と横の長さを引数として受け取り、四角形の面積を計算して返す `calc_area` メソッドを作ってみましょう。
引数名は `width` と `height` とします。
メソッドの中では計算結果だけを返し、表示処理は行わないでください。
メソッドを定義したら、メソッドの外で `puts` を使い、縦 `6`、横 `15` の四角形の面積を表示してください。

作成するファイル：
```text
stretch02.rb
```

表示例：
```text
90
```

実行するコマンド：
```bash
ruby stretch02.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch02_answer.rb)</summary>

```ruby
# stretch02_answer.rb
def calc_area(width, height)
  width * height
end

puts calc_area(6, 15)
```

解答例を確認するときは、`stretch02_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch02_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題3：三角形の面積を計算する ( `stretch03.rb` )

### やってみよう

底辺と高さの長さを引数として受け取り、三角形の面積を計算して返す `calc_triangle_area` メソッドを作ってみましょう。
引数名は `base` と `height` とします。
メソッドの中では計算結果だけを返し、表示処理は行わないでください。
メソッドを定義したら、メソッドの外で `puts` を使い、底辺 `8`、高さ `5` の三角形の面積を表示してください。

作成するファイル：
```text
stretch03.rb
```

表示例：
```text
20
```

実行するコマンド：
```bash
ruby stretch03.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch03_answer.rb)</summary>

```ruby
# stretch03_answer.rb
def calc_triangle_area(base, height)
  (base * height) / 2
end

puts calc_triangle_area(8, 5)
```

解答例を確認するときは、`stretch03_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch03_answer.rb
```

自分のプログラムと解答例의表示結果を比べてください。

</details>

---

## 📝 問題4：摂氏を華氏に変換する ( `stretch04.rb` )

### やってみよう

摂氏温度（℃）を引数として受け取り、華氏温度（℉）に変換して返す `celsius_to_fahrenheit` メソッドを作ってみましょう。
引数名は `celsius` とします。華氏温度への変換式は `摂氏温度 * 9 / 5 + 32` です。
メソッドの中では計算結果だけを返し、表示処理は行わないでください。
メソッドを定義したら、メソッドの外で `puts` を使い、摂氏 `25` 度のときの華氏温度を表示してください。

作成するファイル：
```text
stretch04.rb
```

表示例：
```text
77
```

実行するコマンド：
```bash
ruby stretch04.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch04_answer.rb)</summary>

```ruby
# stretch04_answer.rb
def celsius_to_fahrenheit(celsius)
  celsius * 9 / 5 + 32
end

puts celsius_to_fahrenheit(25)
```

解答例を確認するときは、`stretch04_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch04_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題5：英語のフルネームを返す ( `stretch05.rb` )

### やってみよう

「名前」と「名字」を引数として受け取り、英語表記のフルネームを戻り値として返す `make_fullname` メソッドを作ってみましょう。
引数名は `first_name` と `last_name` とします。
戻り値は、「名字の頭文字は大文字にして後ろにカンマをつけ、名前の前に置く」という形（例: `LASTNAME, FirstName`）にしてください。
メソッドの中では文字列を組み立てて返すだけにし、表示処理は行わないでください。
メソッドを定義したら、メソッドの外で `puts` を使い、名前 `"Taro"`、名字 `"Yamada"` のフルネームを表示してください。

作成するファイル：
```text
stretch05.rb
```

表示例：
```text
Yamada, Taro
```

実行するコマンド：
```bash
ruby stretch05.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch05_answer.rb)</summary>

```ruby
# stretch05_answer.rb
def make_fullname(first_name, last_name)
  "#{last_name}, #{first_name}"
end

puts make_fullname("Taro", "Yamada")
```

解答例を確認するときは、`stretch05_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch05_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題6：戻り値を別のメソッドの引数に渡す ( `stretch06.rb` )

### やってみよう

次の2つのメソッドを作り、一方のメソッドの戻り値をもう一方のメソッドの引数として渡して実行してみましょう。

1. `celsius_to_fahrenheit(celsius)`:
   摂氏（℃）を受け取り、華氏（℉）を計算して返すメソッド（問4と同じ）。
2. `format_temp(temp)`:
   数値を受け取り、「計算結果は○○℉です」という文字列を返すメソッド。

メソッドを定義したら、摂氏 `30` 度について呼び出し、計算された華氏温度を `format_temp` メソッドに渡して、その戻り値を `puts` で画面に表示してください。

作成するファイル：
```text
stretch06.rb
```

表示例：
```text
計算結果は86℉です
```

実行するコマンド：
```bash
ruby stretch06.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch06_answer.rb)</summary>

```ruby
# stretch06_answer.rb
def celsius_to_fahrenheit(celsius)
  celsius * 9 / 5 + 32
end

def format_temp(temp)
  "計算結果は#{temp}℉です"
end

fahrenheit = celsius_to_fahrenheit(30)
message = format_temp(fahrenheit)
puts message
```

解答例を確認するときは、`stretch06_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch06_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題7：2つの数値の差を計算する ( `stretch07.rb` )

### やってみよう

2つの数値を引数として受け取り、その「差の絶対値」（大きい数から小さい数を引いた値）を返す `calc_diff` メソッドを作ってみましょう。
引数名は `a` と `b` とします。
メソッドの内部で条件分岐（`if`）を使い、大きい方の値から小さい方の値を引くようにしてください。メソッドの中では計算結果だけを返し、表示処理は行わないでください。
メソッドを定義したら、メソッドの外で `puts` を使い、次の2つの呼び出し結果を表示してください。
1. `calc_diff(12, 5)`
2. `calc_diff(3, 10)`

作成するファイル：
```text
stretch07.rb
```

表示例：
```text
7
7
```

実行するコマンド：
```bash
ruby stretch07.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch07_answer.rb)</summary>

```ruby
# stretch07_answer.rb
def calc_diff(a, b)
  if a > b
    a - b
  else
    b - a
  end
end

puts calc_diff(12, 5)
puts calc_diff(3, 10)
```

解答例を確認するときは、`stretch07_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch07_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題8：戻り値を複数回利用する ( `stretch08.rb` )

### やってみよう

商品の単価を引数として受け取り、それに消費税（10%）を足した税込価格を返す `calc_tax_included` メソッドを作ってみましょう。
引数名は `price` とします。計算式は `price * 11 / 10` としてください。
メソッドを定義したら、単価 `150` 円の商品の税込価格をメソッドから取得して変数 `tax_price` に代入してください。
その後、次の2つの文章を `puts` を使って画面に表示してください。
1. 「1個あたりの税込価格は○○円です」
2. 「3個購入したときの合計金額は△△円です」

作成するファイル：
```text
stretch08.rb
```

表示例：
```text
1個あたりの税込価格は165円です
3個購入したときの合計金額は495円です
```

実行するコマンド：
```bash
ruby stretch08.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch08_answer.rb)</summary>

```ruby
# stretch08_answer.rb
def calc_tax_included(price)
  price * 11 / 10
end

tax_price = calc_tax_included(150)
puts "1個あたりの税込価格は#{tax_price}円です"
puts "3個購入したときの合計金額は#{tax_price * 3}円です"
```

解答例を確認するときは、`stretch08_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch08_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題9：変数の見えない壁エラーを観察する ( `stretch09.rb` )

### やってみよう

> [!IMPORTANT]
> この課題は、意図的にエラーを表示して動きを確認する問題です。
> 実行するとエラーになりますが、この問題では指定されたエラーが表示されれば確認成功です。

メソッドの外側で作った変数は、メソッドの中からは直接見えないことをエラー画面で確かめてみましょう。
次のコードをファイルに書いて、実行してください。

```ruby
discount = 100

def apply_discount(price)
  price - discount
end

puts apply_discount(500)
```

作成するファイル：
```text
stretch09.rb
```

実行するコマンド：
```bash
ruby stretch09.rb
```

ターミナルに `undefined local variable or method 'discount'` というエラーメッセージが表示されることを確認してください。

<details>
<summary>解答例 (stretch09_answer.rb)</summary>

```ruby
# stretch09_answer.rb
discount = 100

def apply_discount(price)
  price - discount
end

puts apply_discount(500)
```

解答例を確認するときは、`stretch09_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch09_answer.rb
```

エラーが発生することを確認してください。

</details>

---

## 📝 問題10：スコープエラーを引数で解決する ( `stretch10.rb` )

### やってみよう

問9でエラーになったプログラムを、**引数**を使って正しく動くように修正してみましょう。
`apply_discount` メソッドが、価格 `price` と割引額 `discount_value` の2つの引数を受け取れるように定義を変更してください。
そして、メソッドの外で定義した変数 `discount` を呼び出し時に引数として渡すように書き換えてください。

作成するファイル：
```text
stretch10.rb
```

表示例：
```text
400
```

実行するコマンド：
```bash
ruby stretch10.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch10_answer.rb)</summary>

```ruby
# stretch10_answer.rb
discount = 100

def apply_discount(price, discount_value)
  price - discount_value
end

puts apply_discount(500, discount)
```

解答例を確認するときは、`stretch10_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch10_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題11：偶数か奇数かを判定する ( `stretch11.rb` )

### やってみよう

数値を受け取り、それが「偶数」なら `true`、「奇数」なら `false` を戻り値として返す `even?` メソッドを作ってみましょう。
引数名は `number` とします。偶数であるかどうかの判定には `%`（割り算の余り）を使って `number % 2 == 0` を評価してください。
メソッドの中では条件判定式だけを返し、表示処理は行わないでください。
メソッドを定義したら、メソッドの外で `puts` を使い、次の2つの呼び出し結果を表示してください。
1. `even?(4)`
2. `even?(7)`

作成するファイル：
```text
stretch11.rb
```

表示例：
```text
true
false
```

実行するコマンド：
```bash
ruby stretch11.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch11_answer.rb)</summary>

```ruby
# stretch11_answer.rb
def even?(number)
  number % 2 == 0
end

puts even?(4)
puts even?(7)
```

解答例を確認するときは、`stretch11_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch11_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題12：大きい方の数値を返す ( `stretch12.rb` )

### やってみよう

2つの数値を受け取り、大きい方の数値をそのまま返す `max_number` メソッドを作ってみましょう。
引数名は `a` と `b` とします。もし同じ値の場合は、どちらの値を返しても構いません。
メソッドの中では条件分岐（`if`）を使い、値の返却だけを行ってください。表示処理は行わないでください。
メソッドを定義したら、メソッドの外で `puts` を使い、次の呼び出し結果を表示してください。
1. `max_number(15, 24)`

作成するファイル：
```text
stretch12.rb
```

表示例：
```text
24
```

実行するコマンド：
```bash
ruby stretch12.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch12_answer.rb)</summary>

```ruby
# stretch12_answer.rb
def max_number(a, b)
  if a > b
    a
  else
    b
  end
end

puts max_number(15, 24)
```

解答例を確認するときは、`stretch12_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch12_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題13：割引率に応じた価格を計算する ( `stretch13.rb` )

### やってみよう

元の価格と割引率を引数で受け取り、割引適用後の価格を計算して返す `apply_discount` メソッドを作ってみましょう。
引数名は `price` と `rate` とします。`rate` には `0.2` (2割引き) や `0.5` (半額) などの小数が渡されます。
計算式は `price * (1 - rate)` としてください（戻り値は小数を含んでも構いません。Rubyでは自動で小数になります）。
メソッドの中では計算結果だけを返し、表示処理は行わないでください。
メソッドを定義したら、メソッドの外で `puts` を使い、次の呼び出し結果を表示してください。
1. 元の価格 `1000`、割引率 `0.3`（3割引き）

作成するファイル：
```text
stretch13.rb
```

表示例：
```text
700.0
```

実行するコマンド：
```bash
ruby stretch13.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch13_answer.rb)</summary>

```ruby
# stretch13_answer.rb
def apply_discount(price, rate)
  price * (1 - rate)
end

puts apply_discount(1000, 0.3)
```

解答例を確認するときは、`stretch13_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch13_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題14：大人かどうか判定するメソッド ( `stretch14.rb` )

### やってみよう

年齢を引数として受け取り、その年齢が18歳以上（大人）なら `true`、18歳未満（子供）なら `false` を戻り値として返す `adult?` メソッドを作ってみましょう。
引数名は `age` とします。メソッドの中では `puts` などの表示は行わず、比較結果だけを返すようにしてください。
メソッドを定義したら、メソッドの外で `puts` を使い、次の2つの年齢について判定結果を表示してください。
1. `20`
2. `15`

作成するファイル：
```text
stretch14.rb
```

表示例：
```text
true
false
```

実行するコマンド：
```bash
ruby stretch14.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch14_answer.rb)</summary>

```ruby
# stretch14_answer.rb
def adult?(age)
  age >= 18
end

puts adult?(20)
puts adult?(15)
```

解答例を確認するときは、`stretch14_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch14_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題15：判定結果を外側の条件分岐で利用する ( `stretch15.rb` )

### やってみよう

問14で作った `adult?` メソッドを定義し、その結果を使って外側の `if` 分岐で表示するメッセージを切り替えてみましょう。
変数 `user_age` に `17` を代入しておきます。
メソッド `adult?(user_age)` を呼び出して結果を変数 `is_adult` に代入してください。
その後、`if is_adult` を使って、大人の場合は「ビールを注文できます」、そうでない場合は「ソフトドリンクを注文できます」と `puts` で画面に表示してください。

作成するファイル：
```text
stretch15.rb
```

表示例：
```text
ソフトドリンクを注文できます
```

実行するコマンド：
```bash
ruby stretch15.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch15_answer.rb)</summary>

```ruby
# stretch15_answer.rb
def adult?(age)
  age >= 18
end

user_age = 17
is_adult = adult?(user_age)

if is_adult
  puts "ビールを注文できます"
else
  puts "ソフトドリンクを注文できます"
end
```

解答例を確認するときは、`stretch15_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch15_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題16：点数から成績評価を返す ( `stretch16.rb` )

### やってみよう

テストの点数を受け取り、成績の評価（文字列）を返す `grade` メソッドを作ってみましょう。
引数名は `score` とします。評価基準は以下とします。
- `90` 以上：`"A"`
- `80` 以上 `90` 未満：`"B"`
- `60` 以上 `80` 未満：`"C"`
- `60` 未満：`"D"`

メソッドの中では評価された文字列を返すだけにし、表示処理は行わないでください。
メソッドを定義したら、次の3つの点数について呼び出した結果をメソッドの外で `puts` を使って表示してください。
1. `95`
2. `75`
3. `45`

作成するファイル：
```text
stretch16.rb
```

表示例：
```text
A
C
D
```

実行するコマンド：
```bash
ruby stretch16.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch16_answer.rb)</summary>

```ruby
# stretch16_answer.rb
def grade(score)
  if score >= 90
    "A"
  elsif score >= 80
    "B"
  elsif score >= 60
    "C"
  else
    "D"
  end
end

puts grade(95)
puts grade(75)
puts grade(45)
```

解答例を確認するときは、`stretch16_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch16_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題17：在庫切れかどうか判定する ( `stretch17.rb` )

### やってみよう

在庫数を受け取り、在庫切れ（0以下）であれば `true`、在庫があれば `false` を返す `out_of_stock?` メソッドを作ってみましょう。
引数名は `stock` とします。メソッドの中では `puts` などの表示は行わず、比較した判定結果だけを返すようにしてください。
メソッドを定義したら、メソッドの外で `puts` を使い、次の2つの在庫数について判定結果を表示してください。
1. `0`
2. `5`

作成するファイル：
```text
stretch17.rb
```

表示例：
```text
true
false
```

実行するコマンド：
```bash
ruby stretch17.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch17_answer.rb)</summary>

```ruby
# stretch17_answer.rb
def out_of_stock?(stock)
  stock <= 0
end

puts out_of_stock?(0)
puts out_of_stock?(5)
```

解答例を確認するときは、`stretch17_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch17_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題18：在庫ステータス文字列を返す ( `stretch18.rb` )

### やってみよう

問17の `out_of_stock?` メソッドを定義し、その結果を利用して在庫の状況メッセージを返す `stock_status_message` メソッドをさらに作ってみましょう。
`stock_status_message` メソッドは引数として `stock` を受け取り、その中で `out_of_stock?(stock)` を呼び出します。
もし戻り値が `true` なら `"売り切れ"`、`false` なら `"在庫あり"` という文字列を戻り値として返してください。
メソッドを定義したら、メソッドの外で `puts` を使い、次の2つの在庫数についてステータスメッセージを表示してください。
1. `0`
2. `8`

作成するファイル：
```text
stretch18.rb
```

表示例：
```text
売り切れ
在庫あり
```

実行するコマンド：
```bash
ruby stretch18.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch18_answer.rb)</summary>

```ruby
# stretch18_answer.rb
def out_of_stock?(stock)
  stock <= 0
end

def stock_status_message(stock)
  if out_of_stock?(stock)
    "売り切れ"
  else
    "在庫あり"
  end
end

puts stock_status_message(0)
puts stock_status_message(8)
```

解答例を確認するときは、`stretch18_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch18_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題19：文字数オーバーを判定する ( `stretch19.rb` )

### やってみよう

文字列と最大文字数を引数として受け取り、その文字列が指定された最大文字数を超えているかどうか（制限オーバーか）を判定して返す `too_long?` メソッドを作ってみましょう。
引数名は `text` と `max_length` とします。文字列の長さは `text.length` で取得できます。
メソッドは、文字数が `max_length` より大きい（超えている）場合に `true`、そうでない場合に `false` を返すようにしてください。メソッドの中での表示処理は不要です。
メソッドを定義したら、メソッドの外で `puts` を使い、次の2つの呼び出し結果を表示してください。
1. `too_long?("こんにちは", 4)`
2. `too_long?("Ruby", 10)`

作成するファイル：
```text
stretch19.rb
```

表示例：
```text
true
false
```

実行するコマンド：
```bash
ruby stretch19.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch19_answer.rb)</summary>

```ruby
# stretch19_answer.rb
def too_long?(text, max_length)
  text.length > max_length
end

puts too_long?("こんにちは", 4)
puts too_long?("Ruby", 10)
```

解答例を確認するときは、`stretch19_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch19_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題20：閏年かどうかを判定する ( `stretch20.rb` )

### やってみよう

西暦（年）を表す数値を受け取り、それが「閏年（うるうどし）」かどうかを判定して `true` または `false` を返す `leap_year?` メソッドを作ってみましょう。
引数名は `year` とします。閏年の条件は以下とします。
- `year` が `400` で割り切れる場合は閏年である (`true`)
- そうではなく、`year` が `100` で割り切れる場合は閏年ではない (`false`)
- そうではなく、`year` が `4` で割り切れる場合は閏年である (`true`)
- それ以外は閏年ではない (`false`)

メソッドの中では判定結果を返すだけにし、表示処理は行わないでください。
メソッドを定義したら、メソッドの外で `puts` を使い、次の3つの年について判定結果を表示してください。
1. `2020`
2. `2100`
3. `2000`

作成するファイル：
```text
stretch20.rb
```

表示例：
```text
true
false
true
```

実行するコマンド：
```bash
ruby stretch20.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch20_answer.rb)</summary>

```ruby
# stretch20_answer.rb
def leap_year?(year)
  if year % 400 == 0
    true
  elsif year % 100 == 0
    false
  elsif year % 4 == 0
    true
  else
    false
  end
end

puts leap_year?(2020)
puts leap_year?(2100)
puts leap_year?(2000)
```

解答例を確認するときは、`stretch20_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch20_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題21：配列の最大値を返す ( `stretch21.rb` )

### やってみよう

数値の配列を受け取り、その中の最大値を返す `find_max` メソッドを作ってみましょう。
引数名は `array` とします。配列の中の最大値を調べるには `array.max` を使ってください。
メソッドを定義したら、次の配列を定義してメソッドを呼び出し、戻り値を `puts` で表示してください。

```ruby
numbers = [8, 14, 5, 23, 11]
```

作成するファイル：
```text
stretch21.rb
```

表示例：
```text
23
```

実行するコマンド：
```bash
ruby stretch21.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch21_answer.rb)</summary>

```ruby
# stretch21_answer.rb
def find_max(array)
  array.max
end

numbers = [8, 14, 5, 23, 11]
puts find_max(numbers)
```

解答例を確認するときは、`stretch21_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch21_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題22：配列の最小値を返す ( `stretch22.rb` )

### やってみよう

数値の配列を受け取り、その中の最小値を返す `find_min` メソッドを作ってみましょう。
引数名は `array` とします。配列の中の最小値を調べるには `array.min` を使ってください。
メソッドを定義したら、次の配列を定義してメソッドを呼び出し、戻り値を `puts` で表示してください。

```ruby
numbers = [8, 14, 5, 23, 11]
```

作成するファイル：
```text
stretch22.rb
```

表示例：
```text
5
```

実行するコマンド：
```bash
ruby stretch22.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch22_answer.rb)</summary>

```ruby
# stretch22_answer.rb
def find_min(array)
  array.min
end

numbers = [8, 14, 5, 23, 11]
puts find_min(numbers)
```

解答例を確認するときは、`stretch22_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch22_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題23：点数の平均点を返す ( `stretch23.rb` )

### やってみよう

テストの点数（数値）が入った配列を受け取り、その平均点（整数）を計算して返す `calc_average` メソッドを作ってみましょう。
引数名は `scores` とします。平均点は `合計点 / 人数` で算出します。合計点は `scores.sum`、人数は `scores.length` を使ってください。
メソッドの中では計算結果だけを返し、表示処理は行わないでください。
メソッドを定義したら、次の配列を引数に渡して呼び出し、戻り値を `puts` で表示してください。

```ruby
points = [85, 90, 70, 65, 80]
```

作成するファイル：
```text
stretch23.rb
```

表示例：
```text
78
```

実行するコマンド：
```bash
ruby stretch23.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch23_answer.rb)</summary>

```ruby
# stretch23_answer.rb
def calc_average(scores)
  scores.sum / scores.length
end

points = [85, 90, 70, 65, 80]
puts calc_average(points)
```

解答例を確認するときは、`stretch23_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch23_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題24：商品ハッシュから税込価格を返す ( `stretch24.rb` )

### やってみよう

商品情報が入ったハッシュを引数として受け取り、消費税（10%）を含めた税込価格を計算して返す `tax_included_price` メソッドを作ってみましょう。
引数名は `item` とします。商品ハッシュの `"price"` というキーから価格を取り出し、それに消費税を足した額（`price * 11 / 10`）を計算して戻り値として返してください。
メソッドの中では計算結果だけを返し、表示処理は行わないでください。
メソッドを定義したら、次のハッシュを定義して呼び出し、戻り値を `puts` で表示してください。

```ruby
product = { "name" => "ボールペン", "price" => 150 }
```

作成するファイル：
```text
stretch24.rb
```

表示例：
```text
165
```

実行するコマンド：
```bash
ruby stretch24.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch24_answer.rb)</summary>

```ruby
# stretch24_answer.rb
def tax_included_price(item)
  item["price"] * 11 / 10
end

product = { "name" => "ボールペン", "price" => 150 }
puts tax_included_price(product)
```

解答例を確認するときは、`stretch24_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch24_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題25：プロフィールハッシュから紹介文を作る ( `stretch25.rb` )

### やってみよう

ユーザー情報のハッシュを引数として受け取り、丁寧な自己紹介の文章を組み立てて返す `introduce_user` メソッドを作ってみましょう。
引数名は `profile` とします。
戻り値の文字列は、「初めまして、○○です。△△出身の☆☆歳です。」という文章にしてください。ハッシュの `"name"`、`"city"`、`"age"` のキーを利用します。
メソッドを定義したら、次のハッシュを定義して呼び出し、その戻り値を `puts` で画面に表示してください。

```ruby
user = { "name" => "鈴木", "city" => "福岡", "age" => 19 }
```

作成するファイル：
```text
stretch25.rb
```

表示例：
```text
初めまして、鈴木です。福岡出身の19歳です。
```

実行するコマンド：
```bash
ruby stretch25.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch25_answer.rb)</summary>

```ruby
# stretch25_answer.rb
def introduce_user(profile)
  "初めまして、#{profile["name"]}です。#{profile["city"]}出身の#{profile["age"]}歳です。"
end

user = { "name" => "鈴木", "city" => "福岡", "age" => 19 }
puts introduce_user(user)
```

解答例を確認するときは、`stretch25_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch25_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題26：配列の各数値を2倍して表示する ( `stretch26.rb` )

### やってみよう

数値を2倍にするメソッドを定義し、配列の繰り返し処理（`each`）の中で呼び出してみましょう。
まず、数値を受け取り2倍した値を返す `double` メソッドを作ります（引数名は `number`）。
その下で次の配列を作り、`each` を使って配列から数値を1つずつ取り出し、`double` メソッドに渡して呼び出した結果を `puts` で画面に表示してください。

```ruby
numbers = [3, 7, 10, 15]
```

作成するファイル：
```text
stretch26.rb
```

表示例：
```text
6
14
20
30
```

実行するコマンド：
```bash
ruby stretch26.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch26_answer.rb)</summary>

```ruby
# stretch26_answer.rb
def double(number)
  number * 2
end

numbers = [3, 7, 10, 15]

numbers.each do |num|
  puts double(num)
end
```

解答例を確認するときは、`stretch26_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch26_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題27：特定のカテゴリの商品名だけを表示する ( `stretch27.rb` )

### やってみよう

商品ハッシュを受け取り、その商品のカテゴリが指定したものと一致するかどうかを判定して `true` または `false` を返す `in_category?` メソッドを作ってみましょう。
引数名は `item` と `target_category` とします。商品ハッシュの `"category"` というキーと `target_category` を比較して同じであれば `true` を返します。
メソッドを定義したら、次の配列を定義してください。

```ruby
products = [
  { "name" => "ノート", "category" => "文房具" },
  { "name" => "パン", "category" => "食品" },
  { "name" => "ペン", "category" => "文房具" },
  { "name" => "牛乳", "category" => "食品" }
]
```

`products.each` で各商品を1つずつ取り出し、`in_category?` メソッドを使ってカテゴリが `"食品"` である商品だけ、その商品名（`"name"`）を `puts` で画面に表示してください。

作成するファイル：
```text
stretch27.rb
```

表示例：
```text
パン
牛乳
```

実行するコマンド：
```bash
ruby stretch27.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch27_answer.rb)</summary>

```ruby
# stretch27_answer.rb
def in_category?(item, target_category)
  item["category"] == target_category
end

products = [
  { "name" => "ノート", "category" => "文房具" },
  { "name" => "パン", "category" => "食品" },
  { "name" => "ペン", "category" => "文房具" },
  { "name" => "牛乳", "category" => "食品" }
]

products.each do |product|
  if in_category?(product, "食品")
    puts product["name"]
  end
end
```

解答例を確認するときは、`stretch27_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch27_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題28：商品配列の合計金額を計算する ( `stretch28.rb` )

### やってみよう

商品ハッシュの配列を受け取り、すべて購入した時の合計金額を計算して返す `calc_total_price` メソッドを作ってみましょう。
引数名は `items` とします。メソッドの内部で合計値を入れる変数（`total = 0`）を用意し、`items.each` を使って各商品の `"price"` の値を足していってください。
メソッドの中では計算された合計金額だけを返し、表示処理は行わないでください。
メソッドを定義したら、次の配列を定義してメソッドを呼び出し、その戻り値を `puts` で表示してください。

```ruby
cart = [
  { "name" => "Tシャツ", "price" => 1500 },
  { "name" => "バッグ", "price" => 3200 },
  { "name" => "くつ下", "price" => 500 }
]
```

作成するファイル：
```text
stretch28.rb
```

表示例：
```text
5200
```

実行するコマンド：
```bash
ruby stretch28.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch28_answer.rb)</summary>

```ruby
# stretch28_answer.rb
def calc_total_price(items)
  total = 0
  items.each do |item|
    total = total + item["price"]
  end
  total
end

cart = [
  { "name" => "Tシャツ", "price" => 1500 },
  { "name" => "バッグ", "price" => 3200 },
  { "name" => "くつ下", "price" => 500 }
]

puts calc_total_price(cart)
```

解答例を確認するときは、`stretch28_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch28_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題29：在庫切れの商品名だけを配列で集める ( `stretch29.rb` )

### やってみよう

商品ハッシュの配列を受け取り、その中で在庫が `0`（またはそれ以下）になっている商品の名前だけを集めた配列を返す `collect_out_of_stock` メソッドを作ってみましょう。
引数名は `items` とします。メソッドの内部で空の配列（`result = []`）を用意し、`items.each` で各商品をチェックし、在庫切れ商品の名前を配列に追加（`<<`）していってください。
メソッドの最後には、集めた配列を戻り値として返してください。表示処理は不要です。
メソッドを定義したら、次の配列を定義してメソッドを呼び出し、戻り値（配列）の中身を `p` を使って画面にそのまま表示して確認してください。

```ruby
stock_list = [
  { "name" => "ノート", "stock" => 4 },
  { "name" => "ペン", "stock" => 0 },
  { "name" => "消しゴム", "stock" => 8 },
  { "name" => "定規", "stock" => 0 }
]
```

作成するファイル：
```text
stretch29.rb
```

表示例：
```text
["ペン", "定規"]
```

実行するコマンド：
```bash
ruby stretch29.rb
```

上の表示（配列の形）になれば成功です。

<details>
<summary>解答例 (stretch29_answer.rb)</summary>

```ruby
# stretch29_answer.rb
def collect_out_of_stock(items)
  result = []
  items.each do |item|
    if item["stock"] <= 0
      result << item["name"]
    end
  end
  result
end

stock_list = [
  { "name" => "ノート", "stock" => 4 },
  { "name" => "ペン", "stock" => 0 },
  { "name" => "消しゴム", "stock" => 8 },
  { "name" => "定規", "stock" => 0 }
]

p collect_out_of_stock(stock_list)
```

解答例を確認するときは、`stretch29_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch29_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題30：値が配列に含まれているか調べる ( `stretch30.rb` )

### やってみよう

> [!NOTE]
> この課題には、Orientation や Practice では詳しく扱っていない書き方が含まれます。
> 分からない場合は、Ruby の使い方を検索したり、生成AIに質問したりしながら進めて構いません。
> 最後に、使った書き方が何をしているのかを自分の言葉で確認してください。

配列の中に、指定した特定の値が含まれているかどうかを判定して `true` または `false` を返す `has_value?` メソッドを作ってみましょう。
引数名は `array` と `target` とします。配列の中に値が含まれているか調べるには、`array.include?(target)` という便利なメソッドが使えます。

メソッドを定義したら、次の配列を定義し、メソッドを呼び出して結果を `puts` で画面に表示してください。
1. `has_value?(fruits, "バナナ")`
2. `has_value?(fruits, "ぶどう")`

```ruby
fruits = ["りんご", "バナナ", "メロン"]
```

作成するファイル：
```text
stretch30.rb
```

表示例：
```text
true
false
```

実行するコマンド：
```bash
ruby stretch30.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch30_answer.rb)</summary>

```ruby
# stretch30_answer.rb
def has_value?(array, target)
  array.include?(target)
end

fruits = ["りんご", "バナナ", "メロン"]
puts has_value?(fruits, "バナナ")
puts has_value?(fruits, "ぶどう")
```

解答例を確認するときは、`stretch30_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch30_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題31：小さなメソッド2つを組み合わせて計算する ( `stretch31.rb` )

### やってみよう

役割の異なる2つの小さなメソッドを定義し、それらを組み合わせて合計金額を計算するプログラムを作ってみましょう。

次の2つのメソッドを定義します。
1. `calc_tax(price)`:
   価格を受け取り、その消費税額（10%）を返すメソッド。計算式は `price * 10 / 100` （整数）とします。
2. `calc_total(price, tax)`:
   価格と消費税額を受け取り、それらを足した合計金額を返すメソッド。

メソッドを定義したら、価格 `1200` 円について `calc_tax` を呼び出して消費税額を求め、その結果と元の価格を `calc_total` メソッドに渡して合計金額を求め、最後にその合計金額を `puts` で画面に表示してください。

作成するファイル：
```text
stretch31.rb
```

表示例：
```text
1320
```

実行するコマンド：
```bash
ruby stretch31.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch31_answer.rb)</summary>

```ruby
# stretch31_answer.rb
def calc_tax(price)
  price * 10 / 100
end

def calc_total(price, tax)
  price + tax
end

price_value = 1200
tax_value = calc_tax(price_value)
total_value = calc_total(price_value, tax_value)

puts total_value
```

解答例を確認するときは、`stretch31_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch31_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題32：合否判定と結果メッセージを組み合わせる ( `stretch32.rb` )

### やってみよう

判定用メソッドと文章作成用メソッドの2つを作り、組み合わせて結果を表示してみましょう。

次の2つのメソッドを定義します。
1. `passed?(score)`:
   点数を受け取り、`60` 以上なら `true`、未満なら `false` を返すメソッド。
2. `result_message(student)`:
   学生のハッシュを受け取る。メソッドの中で `passed?(student["score"])` を呼び出し、もし合格（`true`）なら「○○さんは合格です」、不合格（`false`）なら「○○さんは再確認です」という文字列メッセージを組み立てて返すメソッド。

メソッドを定義したら、次のハッシュを定義して `result_message` メソッドを呼び出し、戻り値を `puts` で表示してください。

```ruby
student_data = { "name" => "高橋", "score" => 75 }
```

作成するファイル：
```text
stretch32.rb
```

表示例：
```text
高橋さんは合格です
```

実行するコマンド：
```bash
ruby stretch32.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch32_answer.rb)</summary>

```ruby
# stretch32_answer.rb
def passed?(score)
  score >= 60
end

def result_message(student)
  if passed?(student["score"])
    "#{student["name"]}さんは合格です"
  else
    "#{student["name"]}さんは再確認です"
  end
end

student_data = { "name" => "高橋", "score" => 75 }
puts result_message(student_data)
```

解答例を確認するときは、`stretch32_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch32_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題33：割引計算と商品紹介を組み合わせる ( `stretch33.rb` )

### やってみよう

商品情報ハッシュを用いて、割引額を計算するメソッドと、商品紹介メッセージを組み立てるメソッドを組み合わせてみましょう。

次の2つのメソッドを定義します。
1. `discount_price(item)`:
   商品ハッシュを受け取り、その `"price"` の値から一律で `100` 引いた割引後の価格を計算して返すメソッド（引数名は `item`）。
2. `item_description(item)`:
   商品ハッシュを受け取り、メソッド内で `discount_price(item)` を呼び出して割引後価格を求め、「【限定セール】○○を割引価格△△円で販売中！」という文字列を返すメソッド。

メソッドを定義したら、次のハッシュを定義して `item_description` を呼び出し、戻り値を `puts` で画面に表示してください。

```ruby
sale_item = { "name" => "ステンレスボトル", "price" => 1500 }
```

作成するファイル：
```text
stretch33.rb
```

表示例：
```text
【限定セール】ステンレスボトルを割引価格1400円で販売中！
```

実行するコマンド：
```bash
ruby stretch33.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch33_answer.rb)</summary>

```ruby
# stretch33_answer.rb
def discount_price(item)
  item["price"] - 100
end

def item_description(item)
  discounted = discount_price(item)
  "【限定セール】#{item["name"]}を割引価格#{discounted}円で販売中！"
end

sale_item = { "name" => "ステンレスボトル", "price" => 1500 }
puts item_description(sale_item)
```

解答例を確認するときは、`stretch33_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch33_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題34：3教科の合計点と合否判定を組み合わせる ( `stretch34.rb` )

### やってみよう

教科の点数が入った配列から合計点を出すメソッドと、合計点をもとに合否判定をするメソッドを組み合わせてみましょう。

次の2つのメソッドを定義します。
1. `calc_total(scores)`:
   数値の配列を受け取り、その合計を返すメソッド。
2. `check_pass_by_total(scores)`:
   配列を受け取り、メソッド内で `calc_total(scores)` を呼び出す。その合計点が `200` 以上なら `"合格"`、未満なら `"不合格"` という文字列を返すメソッド。

メソッドを定義したら、次の配列を定義してメソッドを呼び出し、戻り値を `puts` で画面に表示してください。

```ruby
my_scores = [70, 85, 60]
```

作成するファイル：
```text
stretch34.rb
```

表示例：
```text
合格
```

実行するコマンド：
```bash
ruby stretch34.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch34_answer.rb)</summary>

```ruby
# stretch34_answer.rb
def calc_total(scores)
  scores.sum
end

def check_pass_by_total(scores)
  total = calc_total(scores)
  if total >= 200
    "合格"
  else
    "不合格"
  end
end

my_scores = [70, 85, 60]
puts check_pass_by_total(my_scores)
```

解答例を確認するときは、`stretch34_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch34_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題35：特定の条件のデータを抽出して返す ( `stretch35.rb` )

### やってみよう

> [!NOTE]
> この課題には、Orientation や Practice では詳しく扱っていない書き方が含まれます。
> 分からない場合は、Ruby の使い方を検索したり、生成AIに質問したりしながら進めて構いません。
> 最後に、使った書き方が何をしているのかを自分の言葉で確認してください。

ハッシュの配列を受け取り、その中で点数が `80` 点以上の学生ハッシュだけを抽出した新しい配列を返す `filter_high_scores` メソッドを作ってみましょう。
引数名は `students` とします。
条件に合うデータを抽出するには、配列に `students.select { |student| 条件 }` というメソッドを使うか、または `each` ループを回して新しい配列に合格者ハッシュを追加していくコードを書いてください。
メソッドの中では結果の配列を返すだけにし、表示処理は行わないでください。
メソッドを定義したら、次の配列を定義して呼び出し、戻り値を `p` を使って画面にそのまま表示して確認してください。

```ruby
class_data = [
  { "name" => "田中", "score" => 85 },
  { "name" => "鈴木", "score" => 70 },
  { "name" => "佐藤", "score" => 95 },
  { "name" => "高橋", "score" => 60 }
]
```

作成するファイル：
```text
stretch35.rb
```

表示例：
```text
[{"name" => "田中", "score" => 85}, {"name" => "佐藤", "score" => 95}]
```

実行するコマンド：
```bash
ruby stretch35.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch35_answer.rb)</summary>

### 解答例1（select を使った書き方）
```ruby
# stretch35_answer.rb
def filter_high_scores(students)
  students.select { |student| student["score"] >= 80 }
end

class_data = [
  { "name" => "田中", "score" => 85 },
  { "name" => "鈴木", "score" => 70 },
  { "name" => "佐藤", "score" => 95 },
  { "name" => "高橋", "score" => 60 }
]

p filter_high_scores(class_data)
```

### 解答例2（each を使った書き方）
```ruby
# stretch35_answer2.rb
def filter_high_scores(students)
  result = []
  students.each do |student|
    if student["score"] >= 80
      result << student
    end
  end
  result
end

class_data = [
  { "name" => "田中", "score" => 85 },
  { "name" => "鈴木", "score" => 70 },
  { "name" => "佐藤", "score" => 95 },
  { "name" => "高橋", "score" => 60 }
]

p filter_high_scores(class_data)
```

解答例を確認するときは、`stretch35_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch35_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題36：配列の値を一括で変換して返す ( `stretch36.rb` )

### やってみよう

> [!NOTE]
> この課題には、Orientation や Practice では詳しく扱っていない書き方が含まれます。
> 分からない場合は、Ruby の使い方を検索したり、生成AIに質問したりしながら進めて構いません。
> 最後に、使った書き方が何をしているのかを自分の言葉で確認してください。

数値の配列を受け取り、そのすべての値を一括で消費税込み（10%増し、価格に `11 / 10` を掛けた額）に変換した新しい配列を返す `tax_included_all` メソッドを作ってみましょう。
引数名は `prices` とします。
配列の値を一括で変換して新しい配列を作るには、`prices.map { |price| 変換後の値 }` というメソッドを使うか、または `each` を回して計算結果を新しい配列に追加していくコードを書いてください。
メソッドを定義したら、次の配列を定義してメソッドを呼び出し、戻り値を `p` で画面に表示して確認してください。

```ruby
base_prices = [100, 250, 500, 1000]
```

作成するファイル：
```text
stretch36.rb
```

表示例：
```text
[110, 275, 550, 1100]
```

実行するコマンド：
```bash
ruby stretch36.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch36_answer.rb)</summary>

### 解答例1（map を使った書き方）
```ruby
# stretch36_answer.rb
def tax_included_all(prices)
  prices.map { |price| price * 11 / 10 }
end

base_prices = [100, 250, 500, 1000]
p tax_included_all(base_prices)
```

### 解答例2（each を使った書き方）
```ruby
# stretch36_answer2.rb
def tax_included_all(prices)
  result = []
  prices.each do |price|
    result << price * 11 / 10
  end
  result
end

base_prices = [100, 250, 500, 1000]
p tax_included_all(base_prices)
```

解答例を確認するときは、`stretch36_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch36_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題37：摂氏の配列を一括で華氏に変換して返す ( `stretch37.rb` )

### やってみよう

摂氏温度（℃）が入った配列を受け取り、すべての値を華氏温度（℉）に変換した新しい配列を返す `celsius_to_fahrenheit_all` メソッドを作ってみましょう。
引数名は `temps` とします。華氏への変換式は `celsius * 9 / 5 + 32` です。
メソッドの内部で、問36で学んだ `map`（または `each` と新しい配列への追加）を用いて一括変換処理を行ってください。
メソッドを定義したら、次の配列を定義してメソッドを呼び出し、戻り値を `p` で画面に表示して確認してください。

```ruby
celsius_temps = [0, 15, 30]
```

作成するファイル：
```text
stretch37.rb
```

表示例：
```text
[32, 59, 86]
```

実行するコマンド：
```bash
ruby stretch37.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch37_answer.rb)</summary>

```ruby
# stretch37_answer.rb
def celsius_to_fahrenheit_all(temps)
  temps.map { |temp| temp * 9 / 5 + 32 }
end

celsius_temps = [0, 15, 30]
p celsius_to_fahrenheit_all(celsius_temps)
```

解答例を確認するときは、`stretch37_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch37_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題38：ハッシュ配列からフォーマット文字列の配列を作る ( `stretch38.rb` )

### やってみよう

商品情報ハッシュの配列を受け取り、それぞれの商品について「○○: △△円」というフォーマットされた文字列に変換した、新しい文字列の配列を返す `format_all_items` メソッドを作ってみましょう。
引数名は `items` とします。メソッドの内部で `map`（または `each`）を使って変換してください。
メソッドを定義したら、次の配列を定義してメソッドを呼び出し、戻り値を `p` で画面に表示して確認してください。

```ruby
products = [
  { "name" => "消しゴム", "price" => 100 },
  { "name" => "ノート", "price" => 150 },
  { "name" => "えんぴつ", "price" => 80 }
]
```

作成するファイル：
```text
stretch38.rb
```

表示例：
```text
["消しゴム: 100円", "ノート: 150円", "えんぴつ: 80円"]
```

実行するコマンド：
```bash
ruby stretch38.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch38_answer.rb)</summary>

```ruby
# stretch38_answer.rb
def format_all_items(items)
  items.map { |item| "#{item["name"]}: #{item["price"]}円" }
end

products = [
  { "name" => "消しゴム", "price" => 100 },
  { "name" => "ノート", "price" => 150 },
  { "name" => "えんぴつ", "price" => 80 }
]

p format_all_items(products)
```

解答例を確認するときは、`stretch38_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch38_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題39：3つの小さなメソッドを組み合わせて名簿を作る ( `stretch39.rb` )

### やってみよう

役割の異なる3つの小さなメソッドを定義し、それらを連携させて学生の成績メッセージを作成するプログラムを作ってみましょう。

次の3つのメソッドを定義します。
1. `passed?(score)`:
   点数が `60` 以上なら `true`、未満なら `false` を返す。
2. `result_label(score)`:
   メソッド内で `passed?(score)` を呼び出し、合格なら `"【合格】"`、不合格なら `"【再試】"` という文字列を返す。
3. `make_student_report(student)`:
   学生のハッシュを受け取る。メソッド内で `result_label(student["score"])` を呼び出してラベルを取得し、「○○さん: △△ (☆☆点)」という報告テキストを戻り値として返す。

メソッドを定義したら、次のハッシュを定義して `make_student_report` メソッドを呼び出し、戻り値を `puts` で画面に表示してください。

```ruby
student_data = { "name" => "高橋", "score" => 55 }
```

作成するファイル：
```text
stretch39.rb
```

表示例：
```text
高橋さん: 【再試】 (55点)
```

実行するコマンド：
```bash
ruby stretch39.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch39_answer.rb)</summary>

```ruby
# stretch39_answer.rb
def passed?(score)
  score >= 60
end

def result_label(score)
  if passed?(score)
    "【合格】"
  else
    "【再試】"
  end
end

def make_student_report(student)
  label = result_label(student["score"])
  "#{student["name"]}さん: #{label} (#{student["score"]}点)"
end

student_data = { "name" => "高橋", "score" => 55 }
puts make_student_report(student_data)
```

解答例を確認するときは、`stretch39_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch39_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題40：引数だけでメソッドをチェインさせて結合する ( `stretch40.rb` )

### やってみよう

メソッドのスコープの制限（見えない壁）の中で、グローバルな変数や余計な状態を一切使わずに、引数と戻り値の受け渡しだけで完全に連携されたメソッドチェインを作ってみましょう。

次の3つのメソッドを定義します。
1. `add_ten(val)`: 数値を受け取り、それに `10` 足した値を返す。
2. `multiply_three(val)`: 数値を受け取り、それを `3` 倍した値を返す。
3. `subtract_five(val)`: 数値を受け取り、そこから `5` 引いた値を返す。

メソッドを定義したら、初期値 `5` からスタートして、次のようにメソッドの戻り値を次のメソッドの引数に直接渡す「入れ子（チェイン）」の形にし、最後に `puts` で画面に表示してください。

```ruby
# multiply_three(5) の戻り値を add_ten に渡し、その戻り値を subtract_five に渡す
```

作成するファイル：
```text
stretch40.rb
```

表示例：
```text
20
```

実行するコマンド：
```bash
ruby stretch40.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch40_answer.rb)</summary>

```ruby
# stretch40_answer.rb
def add_ten(val)
  val + 10
end

def multiply_three(val)
  val * 3
end

def subtract_five(val)
  val - 5
end

# 5 * 3 = 15
# 15 + 10 = 25
# 25 - 5 = 20
result = subtract_five(add_ten(multiply_three(5)))
puts result
```

解答例を確認するときは、`stretch40_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch40_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題41：【成績判定システム】3教科の点数ハッシュから平均点・評価を返す ( `stretch41.rb` )

### やってみよう

これまでに学んだメソッド定義、引数、戻り値、ハッシュ、条件分岐を組み合わせて、実用的な成績判定処理を作ってみましょう。

次の3つのメソッドを定義します。
1. `calc_average(scores)`:
   国語、数学、英語の点数が入ったハッシュ（引数名 `scores`）を受け取り、その平均点（整数値）を計算して返すメソッド。ハッシュのキー `"kokugo"`、`"sugaku"`、`"eigo"` を足して `3` で割ります。
2. `grade(average)`:
   平均点を受け取り、平均点が `80` 以上なら `"A"`、`60` 以上 `"80"` 未満なら `"B"`、`60` 未満なら `"C"` という評価（文字列）を返すメソッド。
3. `make_report_card(name, scores)`:
   名前と点数ハッシュを受け取る。メソッド内で `calc_average(scores)` を呼び出して平均点を求め、さらにその平均点を `grade` メソッドに渡して評価を求め、「○○さん (平均: △△点 / 評価: ☆☆)」という通知表テキストを戻り値として返すメソッド。

メソッドを定義したら、次のハッシュを定義して `make_report_card` メソッドを呼び出し、戻り値を `puts` で画面に表示してください。

```ruby
my_name = "田中"
my_scores = { "kokugo" => 85, "sugaku" => 90, "eigo" => 80 }
```

作成するファイル：
```text
stretch41.rb
```

表示例：
```text
田中さん (平均: 85点 / 評価: A)
```

実行するコマンド：
```bash
ruby stretch41.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch41_answer.rb)</summary>

```ruby
# stretch41_answer.rb
def calc_average(scores)
  total = scores["kokugo"] + scores["sugaku"] + scores["eigo"]
  total / 3
end

def grade(average)
  if average >= 80
    "A"
  elsif average >= 60
    "B"
  else
    "C"
  end
end

def make_report_card(name, scores)
  avg = calc_average(scores)
  eval_grade = grade(avg)
  "#{name}さん (平均: #{avg}点 / 評価: #{eval_grade})"
end

my_name = "田中"
my_scores = { "kokugo" => 85, "sugaku" => 90, "eigo" => 80 }

puts make_report_card(my_name, my_scores)
```

解答例を確認するときは、`stretch41_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch41_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題42：【在庫管理システム】在庫切れを検知し発注推奨を返す ( `stretch42.rb` )

### やってみよう

ハッシュの配列から在庫切れの商品を見つけ出し、発注すべき商品のアラート一覧を作成するシステムを作ってみましょう。

次の2つのメソッドを定義します。
1. `needs_reorder?(item)`:
   商品ハッシュを受け取り、在庫（`"stock"`）が `2` 個以下である場合に `true`、そうでない場合に `false` を返すメソッド。
2. `create_reorder_list(items)`:
   商品のハッシュ配列を受け取る。メソッドの内部で空の配列（`result = []`）を用意し、`items.each` で各商品をチェックする。`needs_reorder?(item)` が `true` の商品があれば、「○○ (残り△△個) - 発注が必要です」という警告メッセージを追加（`<<`）していき、最後にその配列を戻り値として返すメソッド。

メソッドを定義したら、次の配列を定義して `create_reorder_list` メソッドを呼び出し、戻り値（配列）の中身を `puts` で1行ずつ画面に表示してください。

```ruby
inventory = [
  { "name" => "シャープペン", "stock" => 5 },
  { "name" => "消しゴム", "stock" => 1 },
  { "name" => "ノート", "stock" => 10 },
  { "name" => "定規", "stock" => 2 }
]
```

作成するファイル：
```text
stretch42.rb
```

表示例：
```text
消しゴム (残り1個) - 発注が必要です
定規 (残り2個) - 発注が必要です
```

実行するコマンド：
```bash
ruby stretch42.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch42_answer.rb)</summary>

```ruby
# stretch42_answer.rb
def needs_reorder?(item)
  item["stock"] <= 2
end

def create_reorder_list(items)
  result = []
  items.each do |item|
    if needs_reorder?(item)
      result << "#{item["name"]} (残り#{item["stock"]}個) - 発注が必要です"
    end
  end
  result
end

inventory = [
  { "name" => "シャープペン", "stock" => 5 },
  { "name" => "消しゴム", "stock" => 1 },
  { "name" => "ノート", "stock" => 10 },
  { "name" => "定規", "stock" => 2 }
]

reorder_list = create_reorder_list(inventory)
reorder_list.each do |message|
  puts message
end
```

解答例を確認するときは、`stretch42_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch42_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題43：【ショッピングカート】割引と消費税の段階計算 ( `stretch43.rb` )

### やってみよう

カート内の商品の合計金額に対して、クーポンの割引適用、および消費税（10%）の計算を別々のメソッドで行い、最終請求額を算出するシステムを作ってみましょう。

次の3つのメソッドを定義します。
1. `calc_cart_total(cart)`:
   商品のハッシュ配列を受け取り、すべての商品の価格（`"price"`）の合計値を計算して返す。
2. `apply_coupon(amount, has_coupon)`:
   合計額 `amount` とクーポンの有無 `has_coupon`（`true` または `false`）を受け取る。クーポンがある（`true`）場合は合計額から `500` 引いた値を、ない（`false`）場合はそのままの合計額を返す（引いた結果がマイナスになる場合は `0` にしますが、今回はマイナスにならないと仮定して構いません）。
3. `add_tax(amount)`:
   金額を受け取り、それに消費税10%を足した最終金額（`amount * 11 / 10`）を返す。

メソッドを定義したら、次の配列を定義してください。

```ruby
my_cart = [
  { "name" => "本", "price" => 1200 },
  { "name" => "文房具セット", "price" => 800 },
  { "name" => "お菓子", "price" => 500 }
]
use_coupon = true
```

メソッドを呼び出し、カートの合計額を求め、クーポンを適用し、最後に消費税を加算した最終請求額を計算して `puts` で画面に表示してください。

作成するファイル：
```text
stretch43.rb
```

表示例：
```text
2200
```

実行するコマンド：
```bash
ruby stretch43.rb
```

上の表示（2500 - 500 = 2000円に消費税10%を加算して2200円）になれば成功です。

<details>
<summary>解答例 (stretch43_answer.rb)</summary>

```ruby
# stretch43_answer.rb
def calc_cart_total(cart)
  total = 0
  cart.each do |item|
    total = total + item["price"]
  end
  total
end

def apply_coupon(amount, has_coupon)
  if has_coupon
    amount - 500
  else
    amount
  end
end

def add_tax(amount)
  amount * 11 / 10
end

my_cart = [
  { "name" => "本", "price" => 1200 },
  { "name" => "文房具セット", "price" => 800 },
  { "name" => "お菓子", "price" => 500 }
]
use_coupon = true

raw_total = calc_cart_total(my_cart)
discounted = apply_coupon(raw_total, use_coupon)
final_payment = add_tax(discounted)

puts final_payment
```

解答例を確認するときは、`stretch43_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch43_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題44：【イベント受付】年齢判定とウェルカムメッセージ ( `stretch44.rb` )

### やってみよう

イベント参加者の情報から年齢を判定し、ウェルカムメッセージを一括で出力するシステムを作ってみましょう。

次の2つのメソッドを定義します。
1. `can_enter?(age)`:
   年齢を受け取り、`18` 歳以上であれば `true`、未満であれば `false` を返すメソッド。
2. `welcome_message(participant)`:
   参加者のハッシュ（引数名 `participant`）を受け取る。メソッドの中で `can_enter?(participant["age"])` を呼び出し、もし入場可能（`true`）なら「○○さん、ようこそイベントへ！」、入場不可（`false`）なら「申し訳ありません、○○さんは入場できません。」という文字列を返すメソッド。

メソッドを定義したら、次の配列を定義し、`each` で1人ずつメッセージを作って `puts` で表示してください。

```ruby
people = [
  { "name" => "田中", "age" => 20 },
  { "name" => "鈴木", "age" => 16 },
  { "name" => "佐藤", "age" => 18 }
]
```

作成するファイル：
```text
stretch44.rb
```

表示例：
```text
田中さん、ようこそイベントへ！
申し訳ありません、鈴木さんは入場できません。
佐藤さん、ようこそイベントへ！
```

実行するコマンド：
```bash
ruby stretch44.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch44_answer.rb)</summary>

```ruby
# stretch44_answer.rb
def can_enter?(age)
  age >= 18
end

def welcome_message(participant)
  if can_enter?(participant["age"])
    "#{participant["name"]}さん、ようこそイベントへ！"
  else
    "申し訳ありません、#{participant["name"]}さんは入場できません。"
  end
end

people = [
  { "name" => "田中", "age" => 20 },
  { "name" => "鈴木", "age" => 16 },
  { "name" => "佐藤", "age" => 18 }
]

people.each do |person|
  puts welcome_message(person)
end
```

解答例を確認するときは、`stretch44_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch44_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題45：【読書記録】読書速度の計算とアドバイス ( `stretch45.rb` )

### やってみよう

読んだ本の「ページ数」と「読んだ時間（分）」から読書スピードを計算し、読者へのアドバイスを返すシステムを作ってみましょう。

次の2つのメソッドを定義します。
1. `calc_speed(pages, minutes)`:
   ページ数と読書時間を受け取り、1ページあたりに要した時間（分）を計算して返すメソッド。計算式は `minutes.to_f / pages` （小数）とします（`to_f` を使うことで小数の割り算になります）。
2. `reading_advice(pages, minutes)`:
   メソッド内で `calc_speed(pages, minutes)` を呼び出し、そのスピードが `1.0`（1ページあたり1分）以下なら `"素晴らしいスピードです！" `、`1.0` を超える場合は `"じっくり丁寧に読めていますね！"` というアドバイスメッセージを返すメソッド。

メソッドを定義したら、次の数値についてメソッドを呼び出し、戻り値を `puts` で画面に表示してください。
1. ページ数 `150`、時間 `120` 分

作成するファイル：
```text
stretch45.rb
```

表示例：
```text
素晴らしいスピードです！
```

実行するコマンド：
```bash
ruby stretch45.rb
```

上の表示（120.0 / 150 = 0.8分なので1.0以下になり、「素晴らしいスピードです！」）になれば成功です。

<details>
<summary>解答例 (stretch45_answer.rb)</summary>

```ruby
# stretch45_answer.rb
def calc_speed(pages, minutes)
  minutes.to_f / pages
end

def reading_advice(pages, minutes)
  speed = calc_speed(pages, minutes)
  if speed <= 1.0
    "素晴らしいスピードです！"
  else
    "じっくり丁寧に読めていますね！"
  end
end

puts reading_advice(150, 120)
```

解答例を確認するときは、`stretch45_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch45_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題46：【ゲーム得点計算】トリム平均スコア ( `stretch46.rb` )

### やってみよう

複数のゲームの得点配列から、極端な値（最高得点と最低得点）を1つずつ取り除いた、残りの得点の合計値を計算するシステムを作ってみましょう。

次の2つのメソッドを定義します。
1. `trim_extremes(scores)`:
   数値の配列を受け取り、その配列から最高得点（`scores.max`）と最低得点（`scores.min`）をそれぞれ1つずつ引き算した合計値を返すメソッド。計算式は `scores.sum - scores.max - scores.min` とします。
2. `format_score_report(scores)`:
   スコア配列を受け取り、メソッド内で `trim_extremes(scores)` を呼び出して合計値を求め、「最高・最低を除いた調整合計スコアは○○点です」という文字列を返すメソッド。

メソッドを定義したら、次の配列を定義してメソッドを呼び出し、戻り値を `puts` で画面に表示してください。

```ruby
game_scores = [80, 95, 60, 75, 90]
```

作成するファイル：
```text
stretch46.rb
```

表示例：
```text
最高・最低を除いた調整合計スコアは245点です
```

実行するコマンド：
```bash
ruby stretch46.rb
```

上の表示（合計400から、最高95と最低60を引いた245点）になれば成功です。

<details>
<summary>解答例 (stretch46_answer.rb)</summary>

```ruby
# stretch46_answer.rb
def trim_extremes(scores)
  scores.sum - scores.max - scores.min
end

def format_score_report(scores)
  trimmed_total = trim_extremes(scores)
  "最高・最低を除いた調整合計スコアは#{trimmed_total}点です"
end

game_scores = [80, 95, 60, 75, 90]
puts format_score_report(game_scores)
```

解答例を確認するときは、`stretch46_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch46_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題47：【学習記録】目標達成日数のカウント ( `stretch47.rb` )

### やってみよう

1週間の学習時間（分）の配列を受け取り、目標時間（毎日60分以上）を達成した日数を数え、その日数に応じて評価メッセージを返すシステムを作ってみましょう。

次の2つのメソッドを定義します。
1. `count_achieved_days(study_times)`:
   数値の配列を受け取り、その中で `60` 以上の値がいくつあるかをカウントして返すメソッド。メソッド内で変数 `count = 0` を用意し、`study_times.each` で `60` 以上の値を数えてください。
2. `achievement_evaluation(study_times)`:
   配列を受け取り、メソッド内で `count_achieved_days(study_times)` を呼び出して達成日数を取得する。達成日数が `5` 日以上なら `"素晴らしい頑張りです！"`、`3` 日以上 `5` 日未満なら `"順調ですね、その調子です！"`、それ以外なら `"もう少し時間を作ってみましょう！"` という評価文字列を返すメソッド。

メソッドを定義したら、次の配列を定義してメソッドを呼び出し、戻り値を `puts` で画面に表示してください。

```ruby
this_week_records = [45, 90, 60, 30, 80, 120, 15]
```

作成するファイル：
```text
stretch47.rb
```

表示例：
```text
順調ですね、その調子です！
```

実行するコマンド：
```bash
ruby stretch47.rb
```

上の表示（60分以上が4日間［90, 60, 80, 120］なので「順調ですね、その調子です！」）になれば成功です。

<details>
<summary>解答例 (stretch47_answer.rb)</summary>

```ruby
# stretch47_answer.rb
def count_achieved_days(study_times)
  count = 0
  study_times.each do |time|
    if time >= 60
      count = count + 1
    end
  end
  count
end

def achievement_evaluation(study_times)
  achieved = count_achieved_days(study_times)
  if achieved >= 5
    "素晴らしい頑張りです！"
  elsif achieved >= 3
    "順調ですね、その調子です！"
  else
    "もう少し時間を作ってみましょう！"
  end
end

this_week_records = [45, 90, 60, 30, 80, 120, 15]
puts achievement_evaluation(this_week_records)
```

解答例を確認するときは、`stretch47_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch47_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題48：【家計簿】今月の収支計算と貯金目標判定 ( `stretch48.rb` )

### やってみよう

収入と支出の履歴ハッシュが入った配列から、最終的な貯金額を計算し、目標の貯金額を達成できているか判定する家計簿システムを作ってみましょう。

次の2つのメソッドを定義します。
1. `calc_savings(transactions)`:
   ハッシュの配列を受け取り、最終的な貯金額を計算して返すメソッド。各ハッシュの `"type"` というキーが `"income"` (収入) なら `"amount"` の値を足し、`"expense"` (支出) なら引き算して、合計残高を返します。
2. `savings_status(transactions, target)`:
   履歴配列と目標金額 `target` を受け取る。メソッド内で `calc_savings(transactions)` を呼び出して貯金額を計算し、貯金額が `target` 以上なら「目標達成です！貯金額: ○○円」、未満なら「目標まであと△△円必要です」という文字列を返すメソッド。

メソッドを定義したら、次の配列を定義し、目標貯金額 `30000` 円についてメソッドを呼び出し、戻り値を `puts` で画面に表示してください。

```ruby
my_ledger = [
  { "type" => "income", "amount" => 100000 },
  { "type" => "expense", "amount" => 60000 },
  { "type" => "expense", "amount" => 15000 },
  { "type" => "income", "amount" => 5000 }
]
target_savings = 30000
```

作成するファイル：
```text
stretch48.rb
```

表示例：
```text
目標達成です！貯金額: 30000円
```

実行するコマンド：
```bash
ruby stretch48.rb
```

上の表示（100000 - 60000 - 15000 + 5000 = 30000円なので「目標達成です！貯金額: 30000円」）になれば成功です。

<details>
<summary>解答例 (stretch48_answer.rb)</summary>

```ruby
# stretch48_answer.rb
def calc_savings(transactions)
  balance = 0
  transactions.each do |t|
    if t["type"] == "income"
      balance = balance + t["amount"]
    elsif t["type"] == "expense"
      balance = balance - t["amount"]
    end
  end
  balance
end

def savings_status(transactions, target)
  savings = calc_savings(transactions)
  if savings >= target
    "目標達成です！貯金額: #{savings}円"
  else
    diff = target - savings
    "目標まであと#{diff}円必要です"
  end
end

my_ledger = [
  { "type" => "income", "amount" => 100000 },
  { "type" => "expense", "amount" => 60000 },
  { "type" => "expense", "amount" => 15000 },
  { "type" => "income", "amount" => 5000 }
]
target_savings = 30000

puts savings_status(my_ledger, target_savings)
```

解答例を確認するときは、`stretch48_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch48_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題49：【社員名簿】指定部署の社員の連絡先一覧を作る ( `stretch49.rb` )

### やってみよう

社員データのハッシュの配列から、指定された部署に所属する社員だけを抽出し、メールアドレスの一覧を作成するシステムを作ってみましょう。

次の2つのメソッドを定義します。
1. `belongs_to_dept?(employee, dept)`:
   社員ハッシュと部署名 `dept` を受け取り、社員の所属部署（`employee["dept"]`）が一致する場合に `true`、そうでない場合に `false` を返すメソッド。
2. `make_email_list(employees, dept)`:
   社員のハッシュ配列と部署名を受け取る。メソッド内で空の配列（`result = []`）を用意し、各社員をチェックする。`belongs_to_dept?(employee, dept)` が `true` の場合、その社員の「名前 <メールアドレス>」の形式の文字列（例: `山田 <yamada@example.com>`）を配列に追加し、最後にその配列を戻り値として返すメソッド。

メソッドを定義したら、次の配列を定義してください。

```ruby
staff = [
  { "name" => "山田", "dept" => "開発部", "email" => "yamada@example.com" },
  { "name" => "佐藤", "dept" => "営業部", "email" => "sato@example.com" },
  { "name" => "田中", "dept" => "開発部", "email" => "tanaka@example.com" }
]
```

`make_email_list` メソッドを使って `"開発部"` の連絡先リストを取得し、戻り値（配列）の各文字列を `puts` で1行ずつ画面に表示してください。

作成するファイル：
```text
stretch49.rb
```

表示例：
```text
山田 <yamada@example.com>
田中 <tanaka@example.com>
```

実行するコマンド：
```bash
ruby stretch49.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (stretch49_answer.rb)</summary>

```ruby
# stretch49_answer.rb
def belongs_to_dept?(employee, dept)
  employee["dept"] == dept
end

def make_email_list(employees, dept)
  result = []
  employees.each do |emp|
    if belongs_to_dept?(emp, dept)
      result << "#{emp["name"]} <#{emp["email"]}>"
    end
  end
  result
end

staff = [
  { "name" => "山田", "dept" => "開発部", "email" => "yamada@example.com" },
  { "name" => "佐藤", "dept" => "営業部", "email" => "sato@example.com" },
  { "name" => "田中", "dept" => "開発部", "email" => "tanaka@example.com" }
]

email_list = make_email_list(staff, "開発部")
email_list.each do |email_item|
  puts email_item
end
```

解答例を確認するときは、`stretch49_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch49_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 問題50：【ECサイト総合会計】割引適用と送料計算 ( `stretch50.rb` )

### やってみよう

第7回の総まとめ問題です。
ショッピングカートに入った複数商品の合計額を求め、特定の商品の割引処理を行った上で、送料（合計額が5000円以上で無料、5000円未満なら一律500円）を加算した最終的なお会計テキストを出力するシステムを、複数の小さなメソッドを組み合わせて作ってみましょう。

次の3つのメソッドを定義します。
1. `calc_item_total(item)`:
   商品のハッシュを受け取り、割引適用後の金額を計算して返すメソッド。
   もしハッシュの `"discount"` キーが `true` である場合は、価格 `"price"` から `200` 引いた額を、そうでない場合は元の価格を返します。
2. `calc_cart_payment(cart)`:
   商品のハッシュ配列を受け取る。メソッド内で `each` ループを使い、各商品について `calc_item_total(item)` を呼び出して割引後の各商品の合計金額を計算して返すメソッド。
3. `make_final_bill(cart)`:
   商品のハッシュ配列を受け取る。メソッド内で `calc_cart_payment(cart)` を呼び出して商品合計額を計算する。
   商品合計額が `5000` 以上なら送料は `0`（無料）、未満なら送料は `500` とし、送料を加算した最終請求額を求める。
   戻り値として、「商品合計: ○○円、送料: △△円、ご請求額: ☆☆円」という明細の文字列を返すメソッド。

メソッドを定義したら、次の配列を定義して `make_final_bill` メソッドを呼び出し、戻り値を `puts` で表示してください。

```ruby
my_cart = [
  { "name" => "パーカー", "price" => 4500, "discount" => true },
  { "name" => "Tシャツ", "price" => 1200, "discount" => false }
]
```

作成するファイル：
```text
stretch50.rb
```

表示例：
```text
商品合計: 5500円、送料: 0円、ご請求額: 5500円
```

実行するコマンド：
```bash
ruby stretch50.rb
```

上の表示（パーカーの割引後価格4300円 + Tシャツの1200円 = 5500円になり、5000円以上なので送料0円、最終請求額5500円）になれば成功です。

<details>
<summary>解答例 (stretch50_answer.rb)</summary>

```ruby
# stretch50_answer.rb
def calc_item_total(item)
  if item["discount"]
    item["price"] - 200
  else
    item["price"]
  end
end

def calc_cart_payment(cart)
  total = 0
  cart.each do |item|
    total = total + calc_item_total(item)
  end
  total
end

def make_final_bill(cart)
  cart_total = calc_cart_payment(cart)
  if cart_total >= 5000
    shipping = 0
  else
    shipping = 500
  end
  final_amount = cart_total + shipping
  "商品合計: #{cart_total}円、送料: #{shipping}円、ご請求額: #{final_amount}円"
end

my_cart = [
  { "name" => "パーカー", "price" => 4500, "discount" => true },
  { "name" => "Tシャツ", "price" => 1200, "discount" => false }
]

puts make_final_bill(my_cart)
```

解答例を確認するときは、`stretch50_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby stretch50_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>
