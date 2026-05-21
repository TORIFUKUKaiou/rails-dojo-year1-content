# 第6回 練習：ハッシュでデータを管理しよう

## 今日のゴール

ハッシュを作り、キーを使って値を取り出し、書き換えたり追加したりできるようになる。

配列とハッシュを組み合わせたデータも扱います。Webサービスや<ruby>JSON<rt>ジェイソン</rt></ruby>でよく出てくる形に少しずつ慣れていきましょう。

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

## プログラムの基本構造（おさらい）

```text
入力 → 処理 → 出力
```

今日は「処理」の部分で、ハッシュから必要な値を取り出します。

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

## 📝 1. ハッシュを作る ( `practice01.rb` )

### やってみよう

自分の名前、年齢、出身地を入れたハッシュを作ってみましょう。

この問題では、まだ画面に表示する命令を書いていません。
実行してエラーが出ず、何も表示されなければ成功です。

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "山田", "age" => 18, "city" => "福岡" }
```

</details>

---

## 📝 2. キーを使って取り出す ( `practice02.rb` )

### やってみよう

次のハッシュから、名前と出身地を表示してみましょう。

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }
```

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

puts person["name"]
puts person["city"]
```

</details>

---

## 📝 3. 文章の中で使う ( `practice03.rb` )

### やってみよう

次のハッシュを使って、次のように表示してみましょう。

```ruby
person = { "name" => "佐藤", "age" => 19, "city" => "長崎" }
```

表示例：

```text
佐藤さんは長崎出身です
```

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "佐藤", "age" => 19, "city" => "長崎" }

puts "#{person["name"]}さんは#{person["city"]}出身です"
```

</details>

---

## 📝 4. 複数行でハッシュを書く ( `practice04.rb` )

### やってみよう

商品情報をハッシュで作り、商品名と値段を表示してみましょう。

- 商品名：りんご
- 値段：120
- 在庫：8

<details>
<summary>解答例</summary>

```ruby
item = {
  "name" => "りんご",
  "price" => 120,
  "stock" => 8
}

puts item["name"]
puts item["price"]
```

</details>

---

## 📝 5. 値を書き換える ( `practice05.rb` )

### やってみよう

次のハッシュの `age` を `21` に書き換えて、年齢を表示してみましょう。

```ruby
person = { "name" => "田中", "age" => 20 }
```

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "田中", "age" => 20 }

person["age"] = 21

puts person["age"]
```

</details>

---

## 📝 6. 値を追加する ( `practice06.rb` )

### やってみよう

次のハッシュに `city` を追加して、次のように表示してみましょう。

```ruby
person = { "name" => "田中", "age" => 20 }
```

表示例：

```text
田中さんは福岡出身です
```

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "田中", "age" => 20 }

person["city"] = "福岡"

puts "#{person["name"]}さんは#{person["city"]}出身です"
```

</details>

---

## 📝 7. `each` で全部表示する ( `practice07.rb` )

### やってみよう

次のハッシュを `each` で全部表示してみましょう。

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }
```

表示例：

```text
name: 田中
age: 20
city: 福岡
```

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

person.each do |key, value|
  puts "#{key}: #{value}"
end
```

</details>

---

## 📝 8. 点数表を表示する ( `practice08.rb` )

### やってみよう

教科ごとの点数をハッシュで作り、次のように表示してみましょう。

```text
国語: 70点
数学: 85点
英語: 90点
```

<details>
<summary>解答例</summary>

```ruby
scores = { "国語" => 70, "数学" => 85, "英語" => 90 }

scores.each do |subject, score|
  puts "#{subject}: #{score}点"
end
```

</details>

---

## 📝 9. `keys` でキーの一覧を表示する ( `practice09.rb` )

### やってみよう

次のハッシュのキー一覧を表示してみましょう。

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }
```

<details>
<summary>解答例</summary>

`person.keys` は、キーの一覧を配列として返します。

### 解答例1：1行ずつ表示する

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

puts person.keys
```

`puts person.keys` と書くと、キーが1行ずつ表示されます。

### 解答例2：配列の形で確認する

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

p person.keys
```

`p person.keys` と書くと、`["name", "age", "city"]` のように配列の形で確認できます。

`p` は、値の中身を確認したいときに使える表示用の命令です。

</details>

---

## 📝 10. `values` で値の一覧を表示する ( `practice10.rb` )

### やってみよう

次のハッシュの値一覧を表示してみましょう。

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }
```

<details>
<summary>解答例</summary>

`person.values` は、値の一覧を配列として返します。

### 解答例1：1行ずつ表示する

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

puts person.values
```

`puts person.values` と書くと、値が1行ずつ表示されます。

### 解答例2：配列の形で確認する

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

p person.values
```

`p person.values` と書くと、`["田中", 20, "福岡"]` のように配列の形で確認できます。

`p` は、値の中身を確認したいときに使える表示用の命令です。

</details>

---

## 📝 11. `length` で個数を調べる ( `practice11.rb` )

### やってみよう

次のハッシュに、キーと値のセットがいくつあるか表示してみましょう。

```ruby
item = { "name" => "りんご", "price" => 120, "stock" => 8 }
```

表示例：

```text
項目数：3
```

<details>
<summary>解答例</summary>

```ruby
item = { "name" => "りんご", "price" => 120, "stock" => 8 }

puts "項目数：#{item.length}"
```

</details>

---

## 📝 12. `key?` でキーがあるか調べる ( `practice12.rb` )

### やってみよう

次のハッシュに `"city"` というキーがあるか調べてみましょう。

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }
```

表示例：

```text
出身地が登録されています
```

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "田中", "age" => 20, "city" => "福岡" }

if person.key?("city")
  puts "出身地が登録されています"
else
  puts "出身地はまだ登録されていません"
end
```

</details>

---

## 📝 13. `key?` と `else` を使う ( `practice13.rb` )

### やってみよう

次のハッシュに `"city"` というキーがあるか調べてみましょう。

```ruby
person = { "name" => "田中", "age" => 20 }
```

表示例：

```text
出身地はまだ登録されていません
```

<details>
<summary>解答例</summary>

```ruby
person = { "name" => "田中", "age" => 20 }

if person.key?("city")
  puts person["city"]
else
  puts "出身地はまだ登録されていません"
end
```

</details>

---

## 📝 14. 配列とハッシュを使い分ける ( `practice14.rb` )

### やってみよう

次の配列とハッシュを使って、表示例のように表示してみましょう。

```ruby
foods = ["カレー", "ラーメン", "寿司"]
person = { "name" => "田中", "food" => "カレー" }
```

表示例：

```text
好きな食べ物一覧
カレー
ラーメン
寿司
田中さんが一番好きなのはカレーです
```

<details>
<summary>解答例</summary>

```ruby
foods = ["カレー", "ラーメン", "寿司"]
person = { "name" => "田中", "food" => "カレー" }

puts "好きな食べ物一覧"

foods.each do |food|
  puts food
end

puts "#{person["name"]}さんが一番好きなのは#{person["food"]}です"
```

</details>

---

## 📝 15. 配列の中にハッシュを入れる ( `practice15.rb` )

### やってみよう

次の配列から、全員の名前と点数を表示してみましょう。

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 65 },
  { "name" => "佐藤", "score" => 92 }
]
```

表示例：

```text
田中: 80点
鈴木: 65点
佐藤: 92点
```

<details>
<summary>解答例</summary>

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 65 },
  { "name" => "佐藤", "score" => 92 }
]

students.each do |student|
  puts "#{student["name"]}: #{student["score"]}点"
end
```

</details>

---

## 📝 16. 80点以上の人だけ表示する ( `practice16.rb` )

### やってみよう

次の配列から、80点以上の人だけ表示してみましょう。

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 65 },
  { "name" => "佐藤", "score" => 92 }
]
```

表示例：

```text
田中: 80点
佐藤: 92点
```

<details>
<summary>解答例</summary>

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 65 },
  { "name" => "佐藤", "score" => 92 }
]

students.each do |student|
  if student["score"] >= 80
    puts "#{student["name"]}: #{student["score"]}点"
  end
end
```

</details>

---

## 📝 17. 合格者の人数を数える ( `practice17.rb` )

### やってみよう

次の配列から、60点以上の人数を数えて表示してみましょう。

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 55 },
  { "name" => "佐藤", "score" => 92 },
  { "name" => "高橋", "score" => 48 }
]
```

表示例：

```text
合格者：2人
```

<details>
<summary>解答例</summary>

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 55 },
  { "name" => "佐藤", "score" => 92 },
  { "name" => "高橋", "score" => 48 }
]

count = 0

students.each do |student|
  if student["score"] >= 60
    count = count + 1
  end
end

puts "合格者：#{count}人"
```

</details>

---

## 📝 18. 点数の合計を出す ( `practice18.rb` )

### やってみよう

次の配列から、点数の合計を表示してみましょう。

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 65 },
  { "name" => "佐藤", "score" => 92 }
]
```

表示例：

```text
合計：237点
```

> [!TIP]
> 最初に `total = 0` を用意します。
> `students.each do |student|` では、`student` に1人分のハッシュが入ります。
> そのハッシュから `student["score"]` で点数を取り出し、`total` に足していきます。

<details>
<summary>解答例</summary>

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 65 },
  { "name" => "佐藤", "score" => 92 }
]

total = 0

students.each do |student|
  total = total + student["score"]
end

puts "合計：#{total}点"
```

</details>

---

## 📝 19. ハッシュの値に配列を入れる ( `practice19.rb` )

### やってみよう

次のハッシュから、1番目と2番目の好きな食べ物を表示してみましょう。

```ruby
person = {
  "name" => "田中",
  "favorites" => ["カレー", "ラーメン", "寿司"]
}
```

<details>
<summary>解答例</summary>

```ruby
person = {
  "name" => "田中",
  "favorites" => ["カレー", "ラーメン", "寿司"]
}

puts person["favorites"][0]
puts person["favorites"][1]
```

</details>

---

## 📝 20. ハッシュの中の配列を `each` で表示する ( `practice20.rb` )

### やってみよう

次のハッシュから、好きな食べ物を全部表示してみましょう。

```ruby
person = {
  "name" => "田中",
  "favorites" => ["カレー", "ラーメン", "寿司"]
}
```

<details>
<summary>解答例</summary>

```ruby
person = {
  "name" => "田中",
  "favorites" => ["カレー", "ラーメン", "寿司"]
}

person["favorites"].each do |food|
  puts food
end
```

</details>

---

## 📝 21. ハッシュの中の配列に追加する ( `practice21.rb` )

### やってみよう

次のハッシュの `favorites` に `"うどん"` を追加して、全部表示してみましょう。

```ruby
person = {
  "name" => "田中",
  "favorites" => ["カレー", "ラーメン", "寿司"]
}
```

<details>
<summary>解答例</summary>

```ruby
person = {
  "name" => "田中",
  "favorites" => ["カレー", "ラーメン", "寿司"]
}

person["favorites"] << "うどん"

person["favorites"].each do |food|
  puts food
end
```

</details>

---

## 📝 22. ハッシュの値にハッシュを入れる ( `practice22.rb` )

### やってみよう

次のハッシュから、数学（`math`）の点数を表示してみましょう。

```ruby
student = {
  "name" => "田中",
  "scores" => {
    "japanese" => 80,
    "math" => 90,
    "english" => 75
  }
}
```

<details>
<summary>解答例</summary>

```ruby
student = {
  "name" => "田中",
  "scores" => {
    "japanese" => 80,
    "math" => 90,
    "english" => 75
  }
}

puts student["scores"]["math"]
```

</details>

---

## 📝 23. ハッシュの中のハッシュを書き換える ( `practice23.rb` )

### やってみよう

次のハッシュの英語（`english`）の点数を `85` に書き換えて、英語（`english`）の点数を表示してみましょう。

```ruby
student = {
  "name" => "田中",
  "scores" => {
    "japanese" => 80,
    "math" => 90,
    "english" => 75
  }
}
```

<details>
<summary>解答例</summary>

```ruby
student = {
  "name" => "田中",
  "scores" => {
    "japanese" => 80,
    "math" => 90,
    "english" => 75
  }
}

student["scores"]["english"] = 85

puts student["scores"]["english"]
```

</details>

---

## 📝 24. <ruby>JSON<rt>ジェイソン</rt></ruby>風のデータからタイトルを取り出す ( `practice24.rb` )

### やってみよう

次のハッシュから、記事のタイトルを表示してみましょう。

```ruby
article = {
  "title" => "はじめての記事",
  "tags" => ["Ruby", "Rails"],
  "author" => {
    "name" => "田中",
    "city" => "福岡"
  }
}
```

<details>
<summary>解答例</summary>

```ruby
article = {
  "title" => "はじめての記事",
  "tags" => ["Ruby", "Rails"],
  "author" => {
    "name" => "田中",
    "city" => "福岡"
  }
}

puts article["title"]
```

</details>

---

## 📝 25. <ruby>JSON<rt>ジェイソン</rt></ruby>風のデータからタグと作者を取り出す ( `practice25.rb` )

### やってみよう

次のハッシュから、先頭のタグと作者の名前を表示してみましょう。

```ruby
article = {
  "title" => "はじめての記事",
  "tags" => ["Ruby", "Rails"],
  "author" => {
    "name" => "田中",
    "city" => "福岡"
  }
}
```

<details>
<summary>解答例</summary>

```ruby
article = {
  "title" => "はじめての記事",
  "tags" => ["Ruby", "Rails"],
  "author" => {
    "name" => "田中",
    "city" => "福岡"
  }
}

puts article["tags"][0]
puts article["author"]["name"]
```

</details>

---

## 📝 26. <ruby>JSON<rt>ジェイソン</rt></ruby>風のデータのタグを全部表示する ( `practice26.rb` )

### やってみよう

次のハッシュから、タグを全部表示してみましょう。

```ruby
article = {
  "title" => "はじめての記事",
  "tags" => ["Ruby", "Rails"],
  "author" => {
    "name" => "田中",
    "city" => "福岡"
  }
}
```

<details>
<summary>解答例</summary>

```ruby
article = {
  "title" => "はじめての記事",
  "tags" => ["Ruby", "Rails"],
  "author" => {
    "name" => "田中",
    "city" => "福岡"
  }
}

article["tags"].each do |tag|
  puts tag
end
```

</details>

---

## 📝 27. シンボルのキーを使う ( `practice27.rb` )

### やってみよう

次のハッシュから、名前と年齢を表示してみましょう。

```ruby
person = { name: "田中", age: 20, city: "福岡" }
```

> [!TIP]
> シンボルのキーは、`person[:name]` のように指定します。
> 文字列のキーで使った `person["name"]` とは書き方が異なります。

<details>
<summary>解答例</summary>

```ruby
person = { name: "田中", age: 20, city: "福岡" }

puts person[:name]
puts person[:age]
```

</details>

---

## 📝 28. シンボルのキーを `each` で見る ( `practice28.rb` )

### やってみよう

次のハッシュを `each` で全部表示してみましょう。

```ruby
person = { name: "田中", age: 20, city: "福岡" }
```

<details>
<summary>解答例</summary>

```ruby
person = { name: "田中", age: 20, city: "福岡" }

person.each do |key, value|
  puts "#{key}: #{value}"
end
```

</details>

---

## 📝 29. 商品データを整えて表示する ( `practice29.rb` )

### やってみよう

次の配列を使って、商品名、値段、在庫を1行ずつ表示してみましょう。

```ruby
items = [
  { "name" => "りんご", "price" => 120, "stock" => 8 },
  { "name" => "バナナ", "price" => 90, "stock" => 12 },
  { "name" => "みかん", "price" => 60, "stock" => 20 }
]
```

表示例：

```text
りんご: 120円 在庫8個
バナナ: 90円 在庫12個
みかん: 60円 在庫20個
```

<details>
<summary>解答例</summary>

```ruby
items = [
  { "name" => "りんご", "price" => 120, "stock" => 8 },
  { "name" => "バナナ", "price" => 90, "stock" => 12 },
  { "name" => "みかん", "price" => 60, "stock" => 20 }
]

items.each do |item|
  puts "#{item["name"]}: #{item["price"]}円 在庫#{item["stock"]}個"
end
```

</details>

---

## 📝 30. 商品の合計金額を出す ( `practice30.rb` )

### やってみよう

次の配列を使って、商品の合計金額を表示してみましょう。

```ruby
items = [
  { "name" => "ノート", "price" => 120, "count" => 2 },
  { "name" => "ペン", "price" => 80, "count" => 3 },
  { "name" => "消しゴム", "price" => 60, "count" => 1 }
]
```

表示例：

```text
合計金額：540円
```

> [!TIP]
> 1つの商品ごとの金額は、`price * count` で計算できます。
> `each` で商品を1つずつ取り出し、合計用の変数に足していきます。

<details>
<summary>解答例</summary>

```ruby
items = [
  { "name" => "ノート", "price" => 120, "count" => 2 },
  { "name" => "ペン", "price" => 80, "count" => 3 },
  { "name" => "消しゴム", "price" => 60, "count" => 1 }
]

total = 0

items.each do |item|
  total = total + (item["price"] * item["count"])
end

puts "合計金額：#{total}円"
```

`item["price"] * item["count"]` を `()` で囲むと、先に1商品分の小計を計算していることが分かりやすくなります。

</details>

---

さらに力をつけるため、[Stretch](stretch.md) へ進みましょう。
