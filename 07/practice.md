# 第7回 練習：メソッドを作って処理を使い回そう

## 今日のゴール

- 自分でメソッドを定義（`def` 〜 `end`）し、呼び出せるようになる。
- 引数を使って、メソッドの外から中へデータを渡せるようになる。
- 戻り値を使って、メソッド内の計算結果を外で受け取れるようになる。
- メソッドのスコープ（見えない壁）を意識し、適切に変数を扱えるようになる。

---

## この練習について

コピーすれば早く終わりますが、今は自分の手で打って慣れることの方が大事です。
特に最初のうちは、入力に慣れること自体が練習です。できるだけ自分で打って進めましょう。

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

解答例を見ることは、自分の書き方を確認し、別の考え方を学ぶための作業です。

「動いたから終わり」ではありません。
解答例と比べるところまでが、この練習です。

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

## 📝 1. メソッドを作る ( `practice01.rb` )

### やってみよう

「こんにちは」と表示する `greet` メソッドを作ってみましょう。
ただし、この問題ではメソッドを作る（定義する）だけにして、呼び出す命令は書かないでください。

作成するファイル：
```text
practice01.rb
```

実行するコマンド：
```bash
ruby practice01.rb
```

この問題では、まだ画面に表示する命令を書いていません。
実行してエラーが出ず、何も表示されなければ成功です。

<details>
<summary>解答例 (practice01_answer.rb)</summary>

```ruby
# practice01_answer.rb
def greet
  puts "こんにちは"
end
```

解答例を確認するときは、`practice01_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice01_answer.rb
```

実行してエラーが出ず、何も表示されないことを確認してください。

</details>

---

## 📝 2. メソッドを呼び出す ( `practice02.rb` )

### やってみよう

問1で作った `greet` メソッドを定義し、その下でメソッドを「呼び出して」実行してみましょう。

作成するファイル：
```text
practice02.rb
```

表示例：
```text
こんにちは
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
def greet
  puts "こんにちは"
end

greet
```

解答例を確認するときは、`practice02_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice02_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 3. 同じメソッドを複数回呼び出す ( `practice03.rb` )

### やってみよう

「おはようございます」と表示する `say_morning` メソッドを作り、そのメソッドを `times` を使って「100回」呼び出してみましょう。
第4回で学んだ `100.times` の繰り返しの中に、メソッドを呼び出すコードを書いてください。

作成するファイル：
```text
practice03.rb
```

表示例（最初の数行）：
```text
おはようございます
おはようございます
おはようございます
...（合計100回表示されます）
```

実行するコマンド：
```bash
ruby practice03.rb
```

上の表示（100行のおはようございます）になれば成功です。

<details>
<summary>解答例 (practice03_answer.rb)</summary>

```ruby
# practice03_answer.rb
def say_morning
  puts "おはようございます"
end

100.times do
  say_morning
end
```

解答例を確認するときは、`practice03_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice03_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 4. 引数を1つ受け取る ( `practice04.rb` )

### やってみよう

引数として名前を受け取る `greet` メソッドを作ってみましょう。
引数名は `name` とし、メソッドの中で「こんにちは、○○さん」と表示されるようにしてください。
メソッドを作ったら、引数に `"田中"` を渡して呼び出してください。

作成するファイル：
```text
practice04.rb
```

表示例：
```text
こんにちは、田中さん
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
def greet(name)
  puts "こんにちは、#{name}さん"
end

greet("田中")
```

解答例を確認するときは、`practice04_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice04_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 5. 引数を変えて呼び出す ( `practice05.rb` )

### やってみよう

引数として名前を受け取る `say_goodnight` メソッドを作ってみましょう。
引数名は `name` とし、メソッドの中で「おやすみなさい、○○さん」と表示されるようにしてください。
メソッドを作ったら、次の2つの名前を引数に渡して、それぞれ呼び出してください。
1. `"佐藤"`
2. `"鈴木"`

作成するファイル：
```text
practice05.rb
```

表示例：
```text
おやすみなさい、佐藤さん
おやすみなさい、鈴木さん
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
def say_goodnight(name)
  puts "おやすみなさい、#{name}さん"
end

say_goodnight("佐藤")
say_goodnight("鈴木")
```

解答例を確認するときは、`practice05_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice05_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 6. 数値を引数で受け取る ( `practice06.rb` )

### やってみよう

数値を受け取り、それを2倍した値を計算する `double` メソッドを作ってみましょう。
引数名は `number` とします。

> [!IMPORTANT]
> メソッドの中では `puts` を使わず、**数字の計算だけ**を書くようにしてください。
> メソッドを呼び出す外側で `puts` を使って、画面に計算結果を表示させます。

メソッドを作ったら、メソッドの外で `puts` を使い、次の2つの数値を引数に渡して、それぞれ呼び出した結果を表示してください。
1. `5`
2. `12`

作成するファイル：
```text
practice06.rb
```

表示例：
```text
10
24
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
def double(number)
  number * 2
end

puts double(5)
puts double(12)
```

解答例を確認するときは、`practice06_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice06_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 7. 引数を2つ受け取る ( `practice07.rb` )

### やってみよう

名前と年齢の2つの引数を受け取る `introduce` メソッドを作ってみましょう。
引数名は `name` と `age` とし、メソッドの中で「○○さんは△△歳です」と表示されるようにしてください。
メソッドを作ったら、次の2組のデータを引数に渡して、それぞれ呼び出してください。
1. 名前 `"山田"`、年齢 `18`
2. 名前 `"小林"`、年齢 `20`

作成するファイル：
```text
practice07.rb
```

表示例：
```text
山田さんは18歳です
小林さんは20歳です
```

実行するコマンド：
```bash
ruby practice07.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice07_answer.rb)</summary>

```ruby
# practice07_answer.rb
def introduce(name, age)
  puts "#{name}さんは#{age}歳です"
end

introduce("山田", 18)
introduce("小林", 20)
```

解答例を確認するときは、`practice07_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice07_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 8. 3つの数値の合計を表示する ( `practice08.rb` )

### やってみよう

3つの数値を受け取り、その合計を計算する `sum` メソッドを作ってみましょう。
引数名は `a`、`b`、`c` とします。

> [!IMPORTANT]
> メソッドの中では `puts` を使わず、**数字の計算だけ**を書くようにしてください。
> メソッドを呼び出す外側で `puts` を使って、画面に計算結果を表示させます。

メソッドを作ったら、メソッドの外で `puts` を使い、引数に `10`、`20`、`30` を渡して呼び出した結果を表示してください。

作成するファイル：
```text
practice08.rb
```

表示例：
```text
60
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
def sum(a, b, c)
  a + b + c
end

puts sum(10, 20, 30)
```

解答例を確認するときは、`practice08_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice08_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 9. 計算結果を戻り値として返す ( `practice09.rb` )

### やってみよう

2つの数値を受け取り、その合計を**戻り値として返す** `add` メソッドを作ってみましょう。
引数名は `a` と `b` とします。
メソッドの中では `puts` などの表示は行わず、計算結果の式だけを書いてください。
メソッドを定義したら、引数に `10` と `20` を渡して呼び出すコードを書いてください（結果を変数に代入するだけで、画面には何も表示しません）。

作成するファイル：
```text
practice09.rb
```

実行するコマンド：
```bash
ruby practice09.rb
```

この問題では、まだ画面に表示する命令を書いていません。
実行してエラーが出ず、何も表示されなければ成功です。

<details>
<summary>解答例 (practice09_answer.rb)</summary>

```ruby
# practice09_answer.rb
def add(a, b)
  a + b
end

result = add(10, 20)
```

解答例を確認するときは、`practice09_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice09_answer.rb
```

実行してエラーが出ず、何も表示されないことを確認してください。

</details>

---

## 📝 10. 戻り値を変数に入れて表示する ( `practice10.rb` )

### やってみよう

問9で作った `add` メソッドを定義し、呼び出し時に返ってきた戻り値を変数 `result` に代入して、`puts result` で画面に表示してみましょう。
引数には `10` と `20` を渡してください。

作成するファイル：
```text
practice10.rb
```

表示例：
```text
30
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
def add(a, b)
  a + b
end

result = add(10, 20)
puts result
```

解答例を確認するときは、`practice10_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice10_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 11. 戻り値を別の計算で使う ( `practice11.rb` )

### やってみよう

メソッドから返ってきた戻り値は、変数に入れてさらに別の計算に使うことができます。
`add` メソッドを定義し、`add(100, 200)` の戻り値を変数 `result` に代入してください。
その後、`result` と `50` を引数にして、もう一度 `add` メソッドを呼び出してください。
2回目の戻り値は変数 `answer` に代入し、`puts answer` で画面に表示してみましょう。

作成するファイル：
```text
practice11.rb
```

表示例：
```text
350
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
def add(a, b)
  a + b
end

result = add(100, 200)
answer = add(result, 50)
puts answer
```

`result` には、`add(100, 200)` の戻り値である `300` が入ります。
その `result` を次の `add` メソッドに引数として渡すため、`300 + 50` の結果である `350` が `answer` に入ります。

解答例を確認するときは、`practice11_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice11_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 12. 文字列を戻り値として返す ( `practice12.rb` )

### やってみよう

引数として名前を受け取り、歓迎メッセージの文字列を戻り値として返す `make_message` メソッドを作ってみましょう。
引数名は `name` とし、戻り値として「ようこそ、○○さん！」という文字列を返してください。
メソッドの外で戻り値を変数 `message` に代入し、`puts message` で表示してください。
引数には `"高橋"` を渡してください。

作成するファイル：
```text
practice12.rb
```

表示例：
```text
ようこそ、高橋さん！
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
def make_message(name)
  "ようこそ、#{name}さん！"
end

message = make_message("高橋")
puts message
```

解答例を確認するときは、`practice12_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice12_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 13. `puts` を使ったメソッドの戻り値を `p` で確認する ( `practice13.rb` )

### やってみよう

メソッドの中で `puts` を実行した場合、メソッド自体の戻り値がどうなるかを `p` を使って確かめてみましょう。
次の `calc_a` メソッドを定義し、メソッドの戻り値を変数 `answer_a` に代入して、`p answer_a` で変数の中身を確認してください。

```ruby
def calc_a
  puts 3 + 5
end
```

作成するファイル：
```text
practice13.rb
```

表示例：
```text
8
nil
```

実行するコマンド：
```bash
ruby practice13.rb
```

上の表示になれば成功です。

### なぜ nil と表示されるのか？

`puts` は画面に文字を表示する仕事をしますが、呼び出し元には「何もない（空っぽ）」を表す `nil` という特別な値を返します。
`calc_a` メソッドの最後に実行されたのは `puts` であるため、メソッド自体の戻り値も `nil` になります。

<details>
<summary>解答例 (practice13_answer.rb)</summary>

```ruby
# practice13_answer.rb
def calc_a
  puts 3 + 5
end

answer_a = calc_a
p answer_a
```

解答例を確認するときは、`practice13_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice13_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 14. 戻り値をpで確認する ( `practice14.rb` )

### やってみよう

画面に表示せず、計算した値そのものを戻り値にするメソッドの動きを `p` で確かめてみましょう。
次の `calc_b` メソッドを定義し、メソッドの戻り値を変数 `answer_b` に代入して、`p answer_b` で変数の中身を確認してください。

```ruby
def calc_b
  3 + 5
end
```

作成するファイル：
```text
practice14.rb
```

表示例：
```text
8
```

実行するコマンド：
```bash
ruby practice14.rb
```

上の表示になれば成功です。

### なぜ 8 と表示されるのか？

`calc_b` の中には `puts` がありません。メソッドの最後に実行・評価された式である `3 + 5` の計算結果（`8`）がそのまま戻り値になります。

<details>
<summary>解答例 (practice14_answer.rb)</summary>

```ruby
# practice14_answer.rb
def calc_b
  3 + 5
end

answer_b = calc_b
p answer_b
```

解答例を確認するときは、`practice14_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice14_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 15. nilと数値の違いを並べて確認する ( `practice15.rb` )

### やってみよう

問13の `calc_a`（`puts` あり）と問14の `calc_b`（`puts` なし）を両方定義し、それぞれの戻り値を `answer_a` と `answer_b` に代入して、`p` で同時に中身を確認してみましょう。

作成するファイル：
```text
practice15.rb
```

表示例：
```text
8
nil
8
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
def calc_a
  puts 3 + 5
end

def calc_b
  3 + 5
end

answer_a = calc_a
p answer_a

answer_b = calc_b
p answer_b
```

解答例を確認するときは、`practice15_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice15_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 16. スコープ（見えない壁）のエラーを確認する ( `practice16.rb` )

### やってみよう

メソッドの外側で作った変数は、メソッドの中からは直接見えないことをエラー画面で確かめてみましょう。
次のコードを書き、実行してエラーが出ることを確認してください。

```ruby
message = "こんにちは"

def say_hello
  puts message
end

say_hello
```

作成するファイル：
```text
practice16.rb
```

実行するコマンド：
```bash
ruby practice16.rb
```

> [!IMPORTANT]
> この課題は、メソッドの外で作った変数を中から使うとエラーになることを確認する問題です。
> 実行するとエラーになりますが、この問題ではエラーが表示されれば確認成功です。

### どんなエラーが表示された？

ターミナルに `undefined local variable or method 'message'`（`message` という変数やメソッドが見つかりません）というエラーが表示されます。メソッドの中からは、外の変数 `message` が壁に阻まれて見えないためです。

<details>
<summary>解答例 (practice16_answer.rb)</summary>

```ruby
# practice16_answer.rb
message = "こんにちは"

def say_hello
  puts message
end

say_hello
```

解答例を確認するときは、`practice16_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice16_answer.rb
```

エラーが表示されることを確認してください。

</details>

---

## 📝 17. 引数を使って壁を越えさせる ( `practice17.rb` )

### やってみよう

問16でエラーになったプログラムを、**引数**を使って正しく動くように修正してみましょう。
`say_hello` メソッドに引数 `text` を追加し、メソッドを呼び出す際に外側の変数 `message` を引数として渡すように書き換えてください。

作成するファイル：
```text
practice17.rb
```

表示例：
```text
こんにちは
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
message = "こんにちは"

def say_hello(text)
  puts text
end

say_hello(message)
```

`message` はメソッドの外側で作った変数で、中には文字列 `"こんにちは"` が入っています。
`say_hello(message)` と呼び出すと、`message` に入っている値がメソッドへ渡され、メソッドの中では引数 `text` という名前で受け取ります。
そのため、外側と内側で変数名が `message` と `text` のように違っていても、`puts text` で `"こんにちは"` を表示できます。

解答例を確認するときは、`practice17_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice17_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 18. 配列の要素数を返すメソッド ( `practice18.rb` )

### やってみよう

配列を引数として受け取り、その要素数を戻り値として返す `count_elements` メソッドを作ってみましょう。
引数名は `array` とし、要素数を調べるには `array.length` を使ってください。
メソッドを定義したら、次の配列を引数に渡して呼び出し、戻り値を変数 `count` に入れて `puts count` で表示してください。

```ruby
fruits = ["りんご", "バナナ", "オレンジ"]
```

作成するファイル：
```text
practice18.rb
```

表示例：
```text
3
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
def count_elements(array)
  array.length
end

fruits = ["りんご", "バナナ", "オレンジ"]
count = count_elements(fruits)
puts count
```

解答例を確認するときは、`practice18_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice18_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 19. 配列の合計を返すメソッド ( `practice19.rb` )

### やってみよう

数値が入った配列を引数として受け取り、その合計を戻り値として返す `calc_total` メソッドを作ってみましょう。
引数名は `numbers` とし、合計を計算するには `numbers.sum` を使ってください。
メソッドを定義したら、次の配列を引数に渡して呼び出し、戻り値を変数 `total` に入れて `puts total` で表示してください。

```ruby
points = [10, 20, 30, 40]
```

作成するファイル：
```text
practice19.rb
```

表示例：
```text
100
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
def calc_total(numbers)
  numbers.sum
end

points = [10, 20, 30, 40]
total = calc_total(points)
puts total
```

解答例を確認するときは、`practice19_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice19_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 20. 配列の情報から文章を作って返す ( `practice20.rb` )

### やってみよう

点数の配列を引数として受け取り、合計点と人数をまとめた文章を戻り値として返す `make_summary` メソッドを作ってみましょう。
引数名は `scores` とします。戻り値は「参加者は○人で、合計点は○点です」という文字列にしてください。
メソッドを定義したら、次の配列を引数に渡して呼び出し、戻り値を変数 `result` に代入して `puts result` で表示してください。

```ruby
points = [80, 90, 70, 85]
```

作成するファイル：
```text
practice20.rb
```

表示例：
```text
参加者は4人で、合計点は325点です
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
def make_summary(scores)
  total = scores.sum
  count = scores.length
  "参加者は#{count}人で、合計点は#{total}点です"
end

points = [80, 90, 70, 85]
result = make_summary(points)
puts result
```

解答例を確認するときは、`practice20_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice20_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 21. ハッシュを引数に受け取る ( `practice21.rb` )

### やってみよう

ハッシュを引数として受け取り、その中の名前を戻り値として返す `get_name` メソッドを作ってみましょう。
引数名は `person` とし、メソッドの中ではハッシュの `"name"` というキーを使って名前を取り出し、その値を戻り値として返してください。

> [!IMPORTANT]
> この問題では、メソッドの中に `puts` は書きません。
> 名前を戻り値として返し、メソッドの外で `puts` を使って表示してください。

メソッドを定義したら、次のハッシュを引数に渡して呼び出し、戻り値を `puts` で表示してください。

```ruby
student = { "name" => "田中", "age" => 20 }
```

作成するファイル：
```text
practice21.rb
```

表示例：
```text
田中
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
def get_name(person)
  person["name"]
end

student = { "name" => "田中", "age" => 20 }
puts get_name(student)
```

`get_name(student)` は、ハッシュから取り出した名前を戻り値として返します。
画面への表示は、メソッドの外側にある `puts` が担当しています。

解答例を確認するときは、`practice21_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice21_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 22. ハッシュからプロフィール文を返す ( `practice22.rb` )

### やってみよう

ユーザー情報のハッシュを引数として受け取り、プロフィール文を戻り値として返す `make_profile` メソッドを作ってみましょう。
引数名は `user` とし、戻り値として「○○さんは△△出身です」という文字列を返してください。
メソッドを定義したら、次のハッシュを引数に渡して呼び出し、戻り値を変数 `profile` に入れて `puts profile` で表示してください。

```ruby
member = { "name" => "佐藤", "city" => "長崎" }
```

作成するファイル：
```text
practice22.rb
```

表示例：
```text
佐藤さんは長崎出身です
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
def make_profile(user)
  "#{user["name"]}さんは#{user["city"]}出身です"
end

member = { "name" => "佐藤", "city" => "長崎" }
profile = make_profile(member)
puts profile
```

解答例を確認するときは、`practice22_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice22_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 23. 商品ハッシュから情報テキストを返す ( `practice23.rb` )

### やってみよう

商品情報のハッシュを引数として受け取り、紹介テキストを戻り値として返す `format_item` メソッドを作ってみましょう。
引数名は `item` とし、戻り値として「【商品情報】○○は△△円です」という文字列を返してください。
メソッドを定義したら、次のハッシュを引数に渡して呼び出し、戻り値を変数 `text` に代入して `puts text` で表示してください。

```ruby
product = { "name" => "消しゴム", "price" => 100 }
```

作成するファイル：
```text
practice23.rb
```

表示例：
```text
【商品情報】消しゴムは100円です
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
def format_item(item)
  "【商品情報】#{item["name"]}は#{item["price"]}円です"
end

product = { "name" => "消しゴム", "price" => 100 }
text = format_item(product)
puts text
```

解答例を確認するときは、`practice23_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice23_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 24. 条件分岐とメソッドの組み合わせ ( `practice24.rb` )

### やってみよう

点数を引数に受け取り、その点数によって「合格」か「再確認」かの文字列を戻り値として返す `check_pass` メソッドを作ってみましょう。
引数名は `score` とします。
メソッドの中で、もし `score` が `60` 以上なら文字列 `"合格"`、そうでなければ文字列 `"再確認"` を戻り値として返してください。

> [!IMPORTANT]
> この問題では、メソッドの中に `puts` は書きません。
> 判定した文字列を戻り値として返し、メソッドの外で `puts` を使って表示してください。

メソッドを定義したら、次の2つの点数についてそれぞれ呼び出し、戻り値を `puts` で表示してください。
1. `75`
2. `45`

作成するファイル：
```text
practice24.rb
```

表示例：
```text
合格
再確認
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
def check_pass(score)
  if score >= 60
    "合格"
  else
    "再確認"
  end
end

puts check_pass(75)
puts check_pass(45)
```

`if` の結果として選ばれた文字列が、`check_pass` メソッドの戻り値になります。
表示はメソッドの外側の `puts` が担当しています。

解答例を確認するときは、`practice24_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice24_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 25. 名前と点数で判定文を返す ( `practice25.rb` )

### やってみよう

名前と点数の2つの引数を受け取り、判定結果の文章を戻り値として返す `get_result_message` メソッドを作ってみましょう。
引数名は `name` と `score` とします。
もし `score` が `60` 以上なら「○○さんは合格です」、そうでなければ「○○さんは再確認です」という文字列を戻り値として返してください。
メソッドを定義したら、次の2つの呼び出しを行い、それぞれの戻り値を `puts` で表示してください。
1. 引数 `"鈴木"`、`80`
2. 引数 `"高橋"`、`50`

作成するファイル：
```text
practice25.rb
```

表示例：
```text
鈴木さんは合格です
高橋さんは再確認です
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
def get_result_message(name, score)
  if score >= 60
    "#{name}さんは合格です"
  else
    "#{name}さんは再確認です"
  end
end

puts get_result_message("鈴木", 80)
puts get_result_message("高橋", 50)
```

解答例を確認するときは、`practice25_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice25_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 26. 配列の繰り返しでメソッドを使う ( `practice26.rb` )

### やってみよう

あらかじめ作ったメソッドを、`each` の繰り返し処理の中で何度も使ってみましょう。
まず、名前を受け取って「こんにちは、○○さん」という文字列を戻り値として返す `make_greeting` メソッドを作ります（引数名は `name`）。

> [!IMPORTANT]
> この問題では、メソッドの中に `puts` は書きません。
> メソッドは1人分の挨拶文を戻り値として返し、`each` の中で `puts` を使って表示してください。

その下で次の配列を作り、`each` を使って配列から1人ずつ名前を取り出し、`make_greeting` メソッドに渡してください。返ってきた文字列を `puts` で表示します。

```ruby
names = ["田中", "佐藤", "鈴木"]
```

作成するファイル：
```text
practice26.rb
```

表示例：
```text
こんにちは、田中さん
こんにちは、佐藤さん
こんにちは、鈴木さん
```

実行するコマンド：
```bash
ruby practice26.rb
```

上の表示になれば成功です。

<details>
<summary>解答例 (practice26_answer.rb)</summary>

```ruby
# practice26_answer.rb
def make_greeting(name)
  "こんにちは、#{name}さん"
end

names = ["田中", "佐藤", "鈴木"]

names.each do |name|
  puts make_greeting(name)
end
```

`make_greeting(name)` は挨拶文を作って戻り値として返し、`puts` は `each` の中でその文章を表示します。

解答例を確認するときは、`practice26_answer.rb` を作成し, 上のコードを書いてから次を実行してください。

```bash
ruby practice26_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 27. ハッシュの配列を繰り返しメソッドに渡す ( `practice27.rb` )

### やってみよう

学生データのハッシュを受け取り、名前と点数に応じた判定結果の文字列を戻り値として返す `check_student` メソッドを作ってみましょう。
引数名は `student` とします。メソッドの中では `student["name"]` や `student["score"]` を使い、点数が `60` 以上なら文字列「○○さんは合格」、そうでなければ文字列「○○さんは再確認」を戻り値として返してください。

> [!IMPORTANT]
> この問題では、メソッドの中に `puts` は書きません。
> メソッドは1人分の判定結果を戻り値として返し、`each` の中で `puts` を使って表示してください。

メソッドを定義したら、次の配列を定義し、`each` を使って1人ずつメソッドに渡してください。返ってきた文字列を `puts` で表示します。

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 55 },
  { "name" => "佐藤", "score" => 90 }
]
```

作成するファイル：
```text
practice27.rb
```

表示例：
```text
田中さんは合格
鈴木さんは再確認
佐藤さんは合格
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
def check_student(student)
  if student["score"] >= 60
    "#{student["name"]}さんは合格"
  else
    "#{student["name"]}さんは再確認"
  end
end

students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 55 },
  { "name" => "佐藤", "score" => 90 }
]

students.each do |student|
  puts check_student(student)
end
```

`check_student(student)` は、受け取った1人分のハッシュを調べて、表示したい文章を戻り値として返します。
`each` の中の `puts` が、1人ずつ返ってきた文章を画面に表示しています。

解答例を確認するときは、`practice27_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice27_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 28. 商品データの配列とメソッド ( `practice28.rb` )

### やってみよう

商品情報のハッシュを引数として受け取り、商品情報の文字列を戻り値として返す `format_item_info` メソッドを作ってみましょう。
引数名は `item` とし、メソッドの中では文字列「商品名: ○○ (価格: △△円)」を戻り値として返してください。

> [!IMPORTANT]
> この問題では、メソッドの中に `puts` は書きません。
> メソッドは1つの商品について表示したい文字列を戻り値として返し、`each` の中で `puts` を使って表示してください。

メソッドを定義したら、次の配列を定義し、`each` を使って1つずつ商品情報をメソッドに渡してください。返ってきた文字列を `puts` で表示します。

```ruby
items = [
  { "name" => "ノート", "price" => 150 },
  { "name" => "鉛筆", "price" => 80 },
  { "name" => "消しゴム", "price" => 100 }
]
```

作成するファイル：
```text
practice28.rb
```

表示例：
```text
商品名: ノート (価格: 150円)
商品名: 鉛筆 (価格: 80円)
商品名: 消しゴム (価格: 100円)
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
def format_item_info(item)
  "商品名: #{item["name"]} (価格: #{item["price"]}円)"
end

items = [
  { "name" => "ノート", "price" => 150 },
  { "name" => "鉛筆", "price" => 80 },
  { "name" => "消しゴム", "price" => 100 }
]

items.each do |item|
  puts format_item_info(item)
end
```

`format_item_info(item)` は、受け取った商品ハッシュから表示用の文章を作り、その文章を戻り値として返します。
メソッド名の `format` は、ここでは「表示するための文章の形に整える」という意味です。実際に画面へ表示する処理は、`each` の中の `puts` が担当します。

解答例を確認するときは、`practice28_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice28_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 29. 【総合問題1】優秀者をフォーマットして出力する ( `practice29.rb` )

### やってみよう

これまでに学んだメソッドの「引数」「戻り値」「条件分岐」「繰り返し（`each`）」「ハッシュ」を組み合わせてみましょう。

### `true` と `false` を知ろう

条件が正しいかどうかを表す値に、`true`（正しい）と `false`（正しくない）があります。
この2つは文字列ではないため、`"true"` のように `"` で囲まずに書きます。

比較を行う式は、結果として `true` または `false` を返します。

```ruby
p 85 >= 80
p 70 >= 80
```

実行すると、次のように表示されます。

```text
true
false
```

したがって、次のメソッドは、点数が `80` 以上なら `true`、そうでなければ `false` を戻り値として返します。

```ruby
def check_high_score(student)
  student["score"] >= 80
end
```

戻り値の `true` または `false` は、変数に入れてから `if` で調べることができます。

```ruby
student = { "name" => "田中", "score" => 85 }

is_high_score = check_high_score(student)

if is_high_score
  puts "80点以上です"
end
```

`is_high_score` は、「80点以上かどうか」を表す変数です。
この変数に `true` が入っていると `if` の中の処理が実行されます。
`false` が入っていると、`if` の中の処理は実行されません。

次の2つのメソッドを作ってください。
1. `check_high_score(student)`:
   学生のハッシュを受け取り、`student["score"] >= 80` の判定結果を戻り値として返す。
2. `format_message(student)`:
   学生のハッシュを受け取り、「優秀者: ○○さん (△△点)」という文字列を戻り値として返す。

メソッドを定義したら、次の配列を定義してください。

```ruby
students = [
  { "name" => "田中", "score" => 85 },
  { "name" => "鈴木", "score" => 70 },
  { "name" => "佐藤", "score" => 95 },
  { "name" => "高橋", "score" => 60 }
]
```

`students.each` で各学生のデータを1つずつ取り出し、次の処理を行ってください。
- まず `check_high_score` メソッドを使って、その学生が80点以上か判定し、戻り値を変数 `is_high_score` に入れる。
- `if is_high_score` と書き、`is_high_score` が `true` の場合のみ、`format_message` メソッドを使ってメッセージを作り、その結果を `puts` で画面に表示する。

作成するファイル：
```text
practice29.rb
```

表示例：
```text
優秀者: 田中さん (85点)
優秀者: 佐藤さん (95点)
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
def check_high_score(student)
  student["score"] >= 80
end

def format_message(student)
  "優秀者: #{student["name"]}さん (#{student["score"]}点)"
end

students = [
  { "name" => "田中", "score" => 85 },
  { "name" => "鈴木", "score" => 70 },
  { "name" => "佐藤", "score" => 95 },
  { "name" => "高橋", "score" => 60 }
]

students.each do |student|
  is_high_score = check_high_score(student)

  if is_high_score
    message = format_message(student)
    puts message
  end
end
```

解答例を確認するときは、`practice29_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice29_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>

---

## 📝 30. 【総合問題2】お会計とクーポンの割引処理 ( `practice30.rb` )

### やってみよう

第7回のまとめ問題です。
商品の価格とクーポンの有無によってお会計のテキストを表示するプログラムを、2つのメソッドを組み合わせて作ってみましょう。

次の2つのメソッドを作ってください。
1. `apply_discount(price, coupon_used)`:
   商品の元の価格 `price` と、クーポン使用の有無 `coupon_used`（`true` または `false`）を引数で受け取る。
   クーポンが使用されている（`coupon_used` が `true`）場合は価格から `100` 引いた値を、そうでない（`false`）場合はそのままの価格を戻り値として返す。
2. `create_bill(item)`:
   商品情報のハッシュ `item` を引数で受け取る。
   メソッドの中で `apply_discount` メソッドを呼び出して割引後の価格を計算し、「【お会計】○○: △△円」という文字列を戻り値として返す。

メソッドを定義したら、次の配列を定義してください。

```ruby
items = [
  { "name" => "りんご", "price" => 150, "coupon" => true },
  { "name" => "バナナ", "price" => 120, "coupon" => false },
  { "name" => "ぶどう", "price" => 300, "coupon" => true }
]
```

`items.each` で商品を1つずつ取り出し、`create_bill` メソッドを呼び出し、その戻り値を `puts` で画面に表示してください。

作成するファイル：
```text
practice30.rb
```

表示例：
```text
【お会計】りんご: 50円
【お会計】バナナ: 120円
【お会計】ぶどう: 200円
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
def apply_discount(price, coupon_used)
  if coupon_used
    price - 100
  else
    price
  end
end

def create_bill(item)
  discounted_price = apply_discount(item["price"], item["coupon"])
  "【お会計】#{item["name"]}: #{discounted_price}円"
end

items = [
  { "name" => "りんご", "price" => 150, "coupon" => true },
  { "name" => "バナナ", "price" => 120, "coupon" => false },
  { "name" => "ぶどう", "price" => 300, "coupon" => true }
]

items.each do |item|
  bill = create_bill(item)
  puts bill
end
```

解答例を確認するときは、`practice30_answer.rb` を作成し、上のコードを書いてから次を実行してください。

```bash
ruby practice30_answer.rb
```

自分のプログラムと解答例の表示結果を比べてください。

</details>
