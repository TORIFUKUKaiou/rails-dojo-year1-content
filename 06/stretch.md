# 第6回 もっと練習

この課題は、[練習](practice.md) を終えた人向けの発展課題です。第1回〜第6回で学んだ `puts`、変数、`#{}`、`if`/`elsif`/`else`、`gets.to_i`、`gets.chomp`、`times`、配列、`each`、範囲、ハッシュを使って解きましょう。

後半では、`rand`、`break`、`max`、`min`、`include?` なども使います。まだ授業で深く扱っていないものは、問題の近くにヒントを入れています。

Practice と同じように、自分で解いたあとで解答例を開き、実行結果や書き方を比べてください。

やればやるほど力がつきます。できるところまで進めましょう。

---

### 📝 問題1：色の辞書を作る ( `stretch001.rb` )

次のハッシュを作り、`"red"` と `"blue"` の日本語を表示してみましょう。

```ruby
colors = { "red" => "赤", "blue" => "青", "green" => "緑" }
```

<details>
<summary>解答例 (stretch001_answer.rb)</summary>

```ruby
# stretch001_answer.rb
colors = { "red" => "赤", "blue" => "青", "green" => "緑" }

puts colors["red"]
puts colors["blue"]
```

</details>

---

### 📝 問題2：メニューの値段を表示する ( `stretch002.rb` )

次のハッシュを使って、カレーとサラダの値段を表示してみましょう。

```ruby
# stretch001_answer.rb
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }
```

表示例：

```text
カレーは700円です
サラダは300円です
```

<details>
<summary>解答例 (stretch002_answer.rb)</summary>

```ruby
# stretch002_answer.rb
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }

puts "カレーは#{menu["カレー"]}円です"
puts "サラダは#{menu["サラダ"]}円です"
```

</details>

---

### 📝 問題3：在庫を追加する ( `stretch003.rb` )

次のハッシュに `"消しゴム" => 6` を追加して、全部表示してみましょう。

```ruby
# stretch001_answer2.rb
stock = { "ノート" => 12, "ペン" => 20 }
```

<details>
<summary>解答例 (stretch003_answer.rb)</summary>

```ruby
# stretch003_answer.rb
stock = { "ノート" => 12, "ペン" => 20 }

stock["消しゴム"] = 6

stock.each do |name, count|
  puts "#{name}: #{count}個"
end
```

</details>

---

### 📝 問題4：在庫を減らす ( `stretch004.rb` )

次のハッシュのペンの在庫を3個減らして、ペンの在庫を表示してみましょう。

```ruby
stock = { "ノート" => 12, "ペン" => 20, "消しゴム" => 6 }
```

<details>
<summary>解答例 (stretch004_answer.rb)</summary>

```ruby
# stretch004_answer.rb
stock = { "ノート" => 12, "ペン" => 20, "消しゴム" => 6 }

stock["ペン"] = stock["ペン"] - 3

puts "ペン: #{stock["ペン"]}個"
```

</details>

---

### 📝 問題5：登録されている商品か調べる ( `stretch005.rb` )

次のハッシュに `"えんぴつ"` が登録されているか調べてみましょう。

```ruby
stock = { "ノート" => 12, "ペン" => 20, "消しゴム" => 6 }
```

表示例：

```text
えんぴつは登録されていません
```

<details>
<summary>解答例 (stretch005_answer.rb)</summary>

```ruby
# stretch005_answer.rb
stock = { "ノート" => 12, "ペン" => 20, "消しゴム" => 6 }

if stock.key?("えんぴつ")
  puts "えんぴつは登録されています"
else
  puts "えんぴつは登録されていません"
end
```

</details>

---

### 📝 問題6：キーの一覧に番号をつける ( `stretch006.rb` )

次のハッシュのキーを取り出し、番号つきで表示してみましょう。

```ruby
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }
```

表示例：

```text
1. カレー
2. ラーメン
3. サラダ
```

<details>
<summary>解答例 (stretch006_answer.rb)</summary>

```ruby
# stretch006_answer.rb
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }

number = 1

menu.keys.each do |name|
  puts "#{number}. #{name}"
  number = number + 1
end
```

</details>

---

### 📝 問題7：値段の合計を出す ( `stretch007.rb` )

次のハッシュの値段を合計して表示してみましょう。

```ruby
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }
```

表示例：

```text
合計：1850円
```

<details>
<summary>解答例 (stretch007_answer.rb)</summary>

```ruby
# stretch007_answer.rb
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }

total = 0

menu.each do |name, price|
  total = total + price
end

puts "合計：#{total}円"
```

</details>

---

### 📝 問題8：一番高い値段を表示する ( `stretch008.rb` )

次のハッシュから、一番高い値段を表示してみましょう。

```ruby
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }
```

> [!TIP]
> `menu.values` で値段だけの配列を取り出せます。
> 配列には `max` を使えます。

<details>
<summary>解答例 (stretch008_answer.rb)</summary>

```ruby
# stretch008_answer.rb
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }

puts menu.values.max
```

</details>

---

### 📝 問題9：一番安い値段を表示する ( `stretch009.rb` )

次のハッシュから、一番安い値段を表示してみましょう。

```ruby
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }
```

> [!TIP]
> `menu.values` で値段だけの配列を取り出せます。
> 配列には `min` を使えます。

<details>
<summary>解答例 (stretch009_answer.rb)</summary>

```ruby
# stretch009_answer.rb
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }

puts menu.values.min
```

</details>

---

### 📝 問題10：入力した言葉を辞書で調べる ( `stretch010.rb` )

英単語を入力し、日本語を表示してみましょう。

```ruby
words = { "apple" => "りんご", "book" => "本", "school" => "学校" }
```

入力例を含む実行例：

```text
英単語を入力してください
apple
りんご
```

> [!TIP]
> 入力は `gets.chomp` で受け取ります。

<details>
<summary>解答例 (stretch010_answer.rb)</summary>

```ruby
# stretch010_answer.rb
words = { "apple" => "りんご", "book" => "本", "school" => "学校" }

puts "英単語を入力してください"
word = gets.chomp

puts words[word]
```

</details>

---

### 📝 問題11：辞書にない言葉を判定する ( `stretch011.rb` )

英単語を入力し、辞書にあれば日本語を表示し、なければ `登録されていません` と表示してみましょう。

```ruby
words = { "apple" => "りんご", "book" => "本", "school" => "学校" }
```

入力例を含む実行例：

```text
英単語を入力してください
orange
登録されていません
```

<details>
<summary>解答例 (stretch011_answer.rb)</summary>

```ruby
# stretch011_answer.rb
words = { "apple" => "りんご", "book" => "本", "school" => "学校" }

puts "英単語を入力してください"
word = gets.chomp

if words.key?(word)
  puts words[word]
else
  puts "登録されていません"
end
```

</details>

---

### 📝 問題12：出席状況を表示する ( `stretch012.rb` )

次のハッシュを使って、出席している人だけを表示してみましょう。

```ruby
attendance = { "田中" => true, "鈴木" => false, "佐藤" => true }
```

表示例：

```text
田中
佐藤
```

<details>
<summary>解答例 (stretch012_answer.rb)</summary>

```ruby
# stretch012_answer.rb
attendance = { "田中" => true, "鈴木" => false, "佐藤" => true }

attendance.each do |name, present|
  if present
    puts name
  end
end
```

</details>

---

### 📝 問題13：欠席者数を数える ( `stretch013.rb` )

次のハッシュを使って、欠席者数を表示してみましょう。

```ruby
attendance = { "田中" => true, "鈴木" => false, "佐藤" => true, "高橋" => false }
```

表示例：

```text
欠席者：2人
```

<details>
<summary>解答例 (stretch013_answer.rb)</summary>

```ruby
# stretch013_answer.rb
attendance = { "田中" => true, "鈴木" => false, "佐藤" => true, "高橋" => false }

count = 0

attendance.each do |name, present|
  if present == false
    count = count + 1
  end
end

puts "欠席者：#{count}人"
```

</details>

---

### 📝 問題14：天気ごとのメッセージ ( `stretch014.rb` )

天気を入力し、ハッシュからメッセージを取り出して表示してみましょう。

```ruby
messages = { "晴れ" => "外に出よう", "雨" => "傘を持とう", "雪" => "あたたかくしよう" }
```

入力例を含む実行例：

```text
天気を入力してください
雨
傘を持とう
```

<details>
<summary>解答例 (stretch014_answer.rb)</summary>

```ruby
# stretch014_answer.rb
messages = { "晴れ" => "外に出よう", "雨" => "傘を持とう", "雪" => "あたたかくしよう" }

puts "天気を入力してください"
weather = gets.chomp

if messages.key?(weather)
  puts messages[weather]
else
  puts "登録されていない天気です"
end
```

</details>

---

### 📝 問題15：商品一覧を表示する ( `stretch015.rb` )

次の配列を使って、商品名と値段を表示してみましょう。

```ruby
products = [
  { "name" => "Tシャツ", "price" => 1500 },
  { "name" => "バッグ", "price" => 3200 },
  { "name" => "くつ下", "price" => 500 }
]
```

表示例：

```text
Tシャツ: 1500円
バッグ: 3200円
くつ下: 500円
```

<details>
<summary>解答例 (stretch015_answer.rb)</summary>

```ruby
# stretch015_answer.rb
products = [
  { "name" => "Tシャツ", "price" => 1500 },
  { "name" => "バッグ", "price" => 3200 },
  { "name" => "くつ下", "price" => 500 }
]

products.each do |product|
  puts "#{product["name"]}: #{product["price"]}円"
end
```

</details>

---

### 📝 問題16：2000円以上の商品だけ表示する ( `stretch016.rb` )

次の配列から、2000円以上の商品だけ表示してみましょう。

```ruby
products = [
  { "name" => "Tシャツ", "price" => 1500 },
  { "name" => "バッグ", "price" => 3200 },
  { "name" => "くつ下", "price" => 500 }
]
```

<details>
<summary>解答例 (stretch016_answer.rb)</summary>

```ruby
# stretch016_answer.rb
products = [
  { "name" => "Tシャツ", "price" => 1500 },
  { "name" => "バッグ", "price" => 3200 },
  { "name" => "くつ下", "price" => 500 }
]

products.each do |product|
  if product["price"] >= 2000
    puts product["name"]
  end
end
```

</details>

---

### 📝 問題17：在庫ありの商品だけ表示する ( `stretch017.rb` )

次の配列から、在庫が1個以上ある商品だけ表示してみましょう。

```ruby
products = [
  { "name" => "ノート", "stock" => 4 },
  { "name" => "ペン", "stock" => 0 },
  { "name" => "消しゴム", "stock" => 8 }
]
```

<details>
<summary>解答例 (stretch017_answer.rb)</summary>

```ruby
# stretch017_answer.rb
products = [
  { "name" => "ノート", "stock" => 4 },
  { "name" => "ペン", "stock" => 0 },
  { "name" => "消しゴム", "stock" => 8 }
]

products.each do |product|
  if product["stock"] >= 1
    puts product["name"]
  end
end
```

</details>

---

### 📝 問題18：商品を1つ追加する ( `stretch018.rb` )

次の配列に商品を1つ追加し、商品名を全部表示してみましょう。

```ruby
products = [
  { "name" => "ノート", "price" => 120 },
  { "name" => "ペン", "price" => 80 }
]
```

追加する商品：

```ruby
{ "name" => "消しゴム", "price" => 60 }
```

<details>
<summary>解答例 (stretch018_answer.rb)</summary>

```ruby
# stretch018_answer.rb
products = [
  { "name" => "ノート", "price" => 120 },
  { "name" => "ペン", "price" => 80 }
]

products << { "name" => "消しゴム", "price" => 60 }

products.each do |product|
  puts product["name"]
end
```

</details>

---

### 📝 問題19：商品の値段を変更する ( `stretch019.rb` )

次の配列の2番目の商品であるペンの値段を100円に変更し、商品一覧を表示してみましょう。

```ruby
products = [
  { "name" => "ノート", "price" => 120 },
  { "name" => "ペン", "price" => 80 }
]
```

<details>
<summary>解答例 (stretch019_answer.rb)</summary>

```ruby
# stretch019_answer.rb
products = [
  { "name" => "ノート", "price" => 120 },
  { "name" => "ペン", "price" => 80 }
]

products[1]["price"] = 100

products.each do |product|
  puts "#{product["name"]}: #{product["price"]}円"
end
```

</details>

---

### 📝 問題20：商品の平均金額を出す ( `stretch020.rb` )

次の配列を使って、商品の平均金額を表示してみましょう。

```ruby
products = [
  { "name" => "Tシャツ", "price" => 1500 },
  { "name" => "バッグ", "price" => 3200 },
  { "name" => "くつ下", "price" => 500 }
]
```

表示例：

```text
平均：1733円
```

> [!TIP]
> 合計を出してから、`products.length` で割ります。

> [!NOTE]
> Rubyでは、整数同士の割り算をすると、小数点以下は切り捨てられて整数になります。
> この問題では `5200 / 3` の結果が `1733` になります。

<details>
<summary>解答例 (stretch020_answer.rb)</summary>

```ruby
# stretch020_answer.rb
products = [
  { "name" => "Tシャツ", "price" => 1500 },
  { "name" => "バッグ", "price" => 3200 },
  { "name" => "くつ下", "price" => 500 }
]

total = 0

products.each do |product|
  total = total + product["price"]
end

average = total / products.length

puts "平均：#{average}円"
```

</details>

---

### 📝 問題21：クラスごとの名簿を表示する ( `stretch021.rb` )

次のハッシュを使って、A組の名前を全部表示してみましょう。

```ruby
classes = {
  "A" => ["田中", "鈴木", "佐藤"],
  "B" => ["高橋", "伊藤"]
}
```

<details>
<summary>解答例 (stretch021_answer.rb)</summary>

```ruby
# stretch021_answer.rb
classes = {
  "A" => ["田中", "鈴木", "佐藤"],
  "B" => ["高橋", "伊藤"]
}

classes["A"].each do |name|
  puts name
end
```

</details>

---

### 📝 問題22：クラスごとの人数を表示する ( `stretch022.rb` )

次のハッシュを使って、各クラスの人数を表示してみましょう。

```ruby
classes = {
  "A" => ["田中", "鈴木", "佐藤"],
  "B" => ["高橋", "伊藤"]
}
```

表示例：

```text
A組: 3人
B組: 2人
```

<details>
<summary>解答例 (stretch022_answer.rb)</summary>

```ruby
# stretch022_answer.rb
classes = {
  "A" => ["田中", "鈴木", "佐藤"],
  "B" => ["高橋", "伊藤"]
}

classes.each do |class_name, names|
  puts "#{class_name}組: #{names.length}人"
end
```

</details>

---

### 📝 問題23：カテゴリごとの商品を表示する ( `stretch023.rb` )

次のハッシュを使って、カテゴリと商品名を表示してみましょう。

```ruby
categories = {
  "文房具" => ["ノート", "ペン"],
  "食品" => ["パン", "牛乳", "卵"]
}
```

表示例：

```text
文房具
- ノート
- ペン
食品
- パン
- 牛乳
- 卵
```

<details>
<summary>解答例 (stretch023_answer.rb)</summary>

```ruby
# stretch023_answer.rb
categories = {
  "文房具" => ["ノート", "ペン"],
  "食品" => ["パン", "牛乳", "卵"]
}

categories.each do |category, items|
  puts category

  items.each do |item|
    puts "- #{item}"
  end
end
```

</details>

---

### 📝 問題24：教科ごとの点数配列を合計する ( `stretch024.rb` )

次のハッシュを使って、教科ごとの合計点を表示してみましょう。

```ruby
scores = {
  "国語" => [70, 80, 90],
  "数学" => [60, 75, 85]
}
```

表示例：

```text
国語: 240点
数学: 220点
```

<details>
<summary>解答例 (stretch024_answer.rb)</summary>

```ruby
# stretch024_answer.rb
scores = {
  "国語" => [70, 80, 90],
  "数学" => [60, 75, 85]
}

scores.each do |subject, points|
  total = 0

  points.each do |point|
    total = total + point
  end

  puts "#{subject}: #{total}点"
end
```

</details>

---

### 📝 問題25：ユーザーの住所を表示する ( `stretch025.rb` )

次のハッシュから、ユーザー名と市区町村を表示してみましょう。

```ruby
user = {
  "name" => "田中",
  "address" => {
    "prefecture" => "福岡県",
    "city" => "福岡市"
  }
}
```

表示例：

```text
田中さんは福岡市に住んでいます
```

<details>
<summary>解答例 (stretch025_answer.rb)</summary>

```ruby
# stretch025_answer.rb
user = {
  "name" => "田中",
  "address" => {
    "prefecture" => "福岡県",
    "city" => "福岡市"
  }
}

puts "#{user["name"]}さんは#{user["address"]["city"]}に住んでいます"
```

</details>

---

### 📝 問題26：住所を変更する ( `stretch026.rb` )

次のハッシュの市区町村を `"北九州市"` に変更して表示してみましょう。

```ruby
user = {
  "name" => "田中",
  "address" => {
    "prefecture" => "福岡県",
    "city" => "福岡市"
  }
}
```

<details>
<summary>解答例 (stretch026_answer.rb)</summary>

```ruby
# stretch026_answer.rb
user = {
  "name" => "田中",
  "address" => {
    "prefecture" => "福岡県",
    "city" => "福岡市"
  }
}

user["address"]["city"] = "北九州市"

puts user["address"]["city"]
```

</details>

---

### 📝 問題27：商品レビューの平均点を出す ( `stretch027.rb` )

次のハッシュから、レビュー点数の平均を表示してみましょう。

```ruby
product = {
  "name" => "ノート",
  "reviews" => [5, 4, 3, 5]
}
```

表示例：

```text
平均：4点
```

> [!NOTE]
> Rubyでは、整数同士の割り算をすると、小数点以下は切り捨てられて整数になります。
> この問題では `17 / 4` の結果が `4` になります。

<details>
<summary>解答例 (stretch027_answer.rb)</summary>

```ruby
# stretch027_answer.rb
product = {
  "name" => "ノート",
  "reviews" => [5, 4, 3, 5]
}

total = 0

product["reviews"].each do |score|
  total = total + score
end

average = total / product["reviews"].length

puts "平均：#{average}点"
```

</details>

---

### 📝 問題28：投稿データのタグを表示する ( `stretch028.rb` )

次の投稿データから、タグを全部表示してみましょう。

```ruby
post = {
  "title" => "Rubyの勉強",
  "tags" => ["Ruby", "配列", "ハッシュ"]
}
```

<details>
<summary>解答例 (stretch028_answer.rb)</summary>

```ruby
# stretch028_answer.rb
post = {
  "title" => "Rubyの勉強",
  "tags" => ["Ruby", "配列", "ハッシュ"]
}

post["tags"].each do |tag|
  puts tag
end
```

</details>

---

### 📝 問題29：投稿データにタグを追加する ( `stretch029.rb` )

次の投稿データに `"JSON"` というタグを追加して、タグを全部表示してみましょう。

```ruby
post = {
  "title" => "Rubyの勉強",
  "tags" => ["Ruby", "配列", "ハッシュ"]
}
```

<details>
<summary>解答例 (stretch029_answer.rb)</summary>

```ruby
# stretch029_answer.rb
post = {
  "title" => "Rubyの勉強",
  "tags" => ["Ruby", "配列", "ハッシュ"]
}

post["tags"] << "JSON"

post["tags"].each do |tag|
  puts tag
end
```

</details>

---

### 📝 問題30：投稿者の名前を表示する ( `stretch030.rb` )

次の投稿データから、投稿者の名前を表示してみましょう。

```ruby
post = {
  "title" => "Rubyの勉強",
  "author" => {
    "name" => "山田",
    "role" => "student"
  }
}
```

<details>
<summary>解答例 (stretch030_answer.rb)</summary>

```ruby
# stretch030_answer.rb
post = {
  "title" => "Rubyの勉強",
  "author" => {
    "name" => "山田",
    "role" => "student"
  }
}

puts post["author"]["name"]
```

</details>

---

### 📝 問題31：記事一覧のタイトルだけ表示する ( `stretch031.rb` )

次の配列から、記事のタイトルだけを表示してみましょう。

```ruby
articles = [
  { "title" => "Ruby入門", "likes" => 12 },
  { "title" => "Rails入門", "likes" => 20 },
  { "title" => "HTML入門", "likes" => 8 }
]
```

<details>
<summary>解答例 (stretch031_answer.rb)</summary>

```ruby
# stretch031_answer.rb
articles = [
  { "title" => "Ruby入門", "likes" => 12 },
  { "title" => "Rails入門", "likes" => 20 },
  { "title" => "HTML入門", "likes" => 8 }
]

articles.each do |article|
  puts article["title"]
end
```

</details>

---

### 📝 問題32：いいね数が10以上の記事だけ表示する ( `stretch032.rb` )

次の配列から、いいね数が10以上の記事タイトルだけを表示してみましょう。

```ruby
articles = [
  { "title" => "Ruby入門", "likes" => 12 },
  { "title" => "Rails入門", "likes" => 20 },
  { "title" => "HTML入門", "likes" => 8 }
]
```

<details>
<summary>解答例 (stretch032_answer.rb)</summary>

```ruby
# stretch032_answer.rb
articles = [
  { "title" => "Ruby入門", "likes" => 12 },
  { "title" => "Rails入門", "likes" => 20 },
  { "title" => "HTML入門", "likes" => 8 }
]

articles.each do |article|
  if article["likes"] >= 10
    puts article["title"]
  end
end
```

</details>

---

### 📝 問題33：いいね数の合計を出す ( `stretch033.rb` )

次の配列から、いいね数の合計を表示してみましょう。

```ruby
articles = [
  { "title" => "Ruby入門", "likes" => 12 },
  { "title" => "Rails入門", "likes" => 20 },
  { "title" => "HTML入門", "likes" => 8 }
]
```

<details>
<summary>解答例 (stretch033_answer.rb)</summary>

```ruby
# stretch033_answer.rb
articles = [
  { "title" => "Ruby入門", "likes" => 12 },
  { "title" => "Rails入門", "likes" => 20 },
  { "title" => "HTML入門", "likes" => 8 }
]

total = 0

articles.each do |article|
  total = total + article["likes"]
end

puts "合計：#{total}"
```

</details>

---

### 📝 問題34：コメント数を表示する ( `stretch034.rb` )

次の配列から、記事タイトルとコメント数を表示してみましょう。

```ruby
articles = [
  { "title" => "Ruby入門", "comments" => ["よい", "助かる"] },
  { "title" => "Rails入門", "comments" => ["難しい"] }
]
```

表示例：

```text
Ruby入門: 2件
Rails入門: 1件
```

<details>
<summary>解答例 (stretch034_answer.rb)</summary>

```ruby
# stretch034_answer.rb
articles = [
  { "title" => "Ruby入門", "comments" => ["よい", "助かる"] },
  { "title" => "Rails入門", "comments" => ["難しい"] }
]

articles.each do |article|
  puts "#{article["title"]}: #{article["comments"].length}件"
end
```

</details>

---

### 📝 問題35：コメントを全部表示する ( `stretch035.rb` )

次の配列から、記事タイトルとコメントを全部表示してみましょう。

```ruby
articles = [
  { "title" => "Ruby入門", "comments" => ["よい", "助かる"] },
  { "title" => "Rails入門", "comments" => ["難しい"] }
]
```

<details>
<summary>解答例 (stretch035_answer.rb)</summary>

```ruby
# stretch035_answer.rb
articles = [
  { "title" => "Ruby入門", "comments" => ["よい", "助かる"] },
  { "title" => "Rails入門", "comments" => ["難しい"] }
]

articles.each do |article|
  puts article["title"]

  article["comments"].each do |comment|
    puts "- #{comment}"
  end
end
```

</details>

---

### 📝 問題36：入力した商品名の値段を表示する ( `stretch036.rb` )

商品名を入力し、メニューにあれば値段を表示してみましょう。

```ruby
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }
```

入力例を含む実行例：

```text
商品名を入力してください
カレー
カレーは700円です
```

<details>
<summary>解答例 (stretch036_answer.rb)</summary>

```ruby
# stretch036_answer.rb
menu = { "カレー" => 700, "ラーメン" => 850, "サラダ" => 300 }

puts "商品名を入力してください"
name = gets.chomp

if menu.key?(name)
  puts "#{name}は#{menu[name]}円です"
else
  puts "登録されていません"
end
```

</details>

---

### 📝 問題37：入力した商品名の在庫を減らす ( `stretch037.rb` )

商品名を入力し、在庫があれば1個減らして表示してみましょう。

```ruby
stock = { "ノート" => 3, "ペン" => 0, "消しゴム" => 5 }
```

入力例を含む実行例：

```text
商品名を入力してください
ノート
ノートの在庫は2個です
```

<details>
<summary>解答例 (stretch037_answer.rb)</summary>

```ruby
# stretch037_answer.rb
stock = { "ノート" => 3, "ペン" => 0, "消しゴム" => 5 }

puts "商品名を入力してください"
name = gets.chomp

if stock.key?(name)
  if stock[name] >= 1
    stock[name] = stock[name] - 1
    puts "#{name}の在庫は#{stock[name]}個です"
  else
    puts "#{name}は在庫切れです"
  end
else
  puts "登録されていません"
end
```

</details>

---

### 📝 問題38：入力した人数分の名前と点数をハッシュにする ( `stretch038.rb` )

3人分の名前と点数を入力し、名前をキー、点数を値にしたハッシュを作って表示してみましょう。

> [!TIP]
> `scores = {}` と書くと、最初は中身が空っぽのハッシュを作ることができます。
> キーボードから繰り返し入力したデータを、少しずつ追加していきたいときに便利です。
> 点数は `gets.to_i` で受け取ります。

入力例を含む実行例：

```text
名前を入力してください
田中
点数を入力してください
80
名前を入力してください
鈴木
点数を入力してください
55
名前を入力してください
佐藤
点数を入力してください
92
田中: 80点
鈴木: 55点
佐藤: 92点
```

<details>
<summary>解答例 (stretch038_answer.rb)</summary>

```ruby
# stretch038_answer.rb
scores = {}

3.times do
  puts "名前を入力してください"
  name = gets.chomp

  puts "点数を入力してください"
  score = gets.to_i

  scores[name] = score
end

scores.each do |name, score|
  puts "#{name}: #{score}点"
end
```

</details>

---

### 📝 問題39：入力した点数表から合格者だけ表示する ( `stretch039.rb` )

3人分の名前と点数を入力し、60点以上の人だけ表示してみましょう。

入力例を含む実行例：

```text
名前を入力してください
田中
点数を入力してください
80
名前を入力してください
鈴木
点数を入力してください
55
名前を入力してください
佐藤
点数を入力してください
92
田中: 80点
佐藤: 92点
```

<details>
<summary>解答例 (stretch039_answer.rb)</summary>

```ruby
# stretch039_answer.rb
scores = {}

3.times do
  puts "名前を入力してください"
  name = gets.chomp

  puts "点数を入力してください"
  score = gets.to_i

  scores[name] = score
end

scores.each do |name, score|
  if score >= 60
    puts "#{name}: #{score}点"
  end
end
```

</details>

---

### 📝 問題40：入力した点数表の平均を出す ( `stretch040.rb` )

3人分の名前と点数を入力し、平均点を表示してみましょう。

入力例を含む実行例：

```text
名前を入力してください
田中
点数を入力してください
80
名前を入力してください
鈴木
点数を入力してください
55
名前を入力してください
佐藤
点数を入力してください
92
平均：75点
```

<details>
<summary>解答例 (stretch040_answer.rb)</summary>

```ruby
# stretch040_answer.rb
scores = {}

3.times do
  puts "名前を入力してください"
  name = gets.chomp

  puts "点数を入力してください"
  score = gets.to_i

  scores[name] = score
end

total = 0

scores.each do |name, score|
  total = total + score
end

average = total / scores.length

puts "平均：#{average}点"
```

</details>

---

### 📝 問題41：ランダムな点数表を作る ( `stretch041.rb` )

3人分の名前を配列で用意し、点数は `rand(1..100)` で作ってハッシュに入れましょう。

```ruby
names = ["田中", "鈴木", "佐藤"]
```

> [!TIP]
> `rand(1..100)` は、1から100までのランダムな整数を作ります。

<details>
<summary>解答例 (stretch041_answer.rb)</summary>

```ruby
# stretch041_answer.rb
names = ["田中", "鈴木", "佐藤"]
scores = {}

names.each do |name|
  scores[name] = rand(1..100)
end

scores.each do |name, score|
  puts "#{name}: #{score}点"
end
```

</details>

---

### 📝 問題42：ランダムな在庫を作る ( `stretch042.rb` )

商品名の配列を使って、商品ごとの在庫数をランダムに作って表示してみましょう。

```ruby
items = ["ノート", "ペン", "消しゴム"]
```

在庫数は `rand(0..10)` で作ります。

<details>
<summary>解答例 (stretch042_answer.rb)</summary>

```ruby
# stretch042_answer.rb
items = ["ノート", "ペン", "消しゴム"]
stock = {}

items.each do |item|
  stock[item] = rand(0..10)
end

stock.each do |item, count|
  puts "#{item}: #{count}個"
end
```

</details>

---

### 📝 問題43：シンボルキーの商品を表示する ( `stretch043.rb` )

次のハッシュから、商品名と値段を表示してみましょう。

```ruby
item = { name: "ノート", price: 120, stock: 8 }
```

> [!TIP]
> キーを `name: "ノート"` のように書き、`item[:name]` で取り出す方法をシンボルキーと呼びます。
> Railsのプログラムでは、この `:` を使った書き方がよく出てきます。

<details>
<summary>解答例 (stretch043_answer.rb)</summary>

```ruby
# stretch043_answer.rb
item = { name: "ノート", price: 120, stock: 8 }

puts "#{item[:name]}: #{item[:price]}円"
```

</details>

---

### 📝 問題44：シンボルキーの商品を更新する ( `stretch044.rb` )

次のハッシュの在庫を1個減らして表示してみましょう。

```ruby
item = { name: "ノート", price: 120, stock: 8 }
```

<details>
<summary>解答例 (stretch044_answer.rb)</summary>

```ruby
# stretch044_answer.rb
item = { name: "ノート", price: 120, stock: 8 }

item[:stock] = item[:stock] - 1

puts "#{item[:name]}: #{item[:stock]}個"
```

</details>

---

### 📝 問題45：シンボルキーの配列を表示する ( `stretch045.rb` )

次の配列を使って、商品名と値段を表示してみましょう。

```ruby
items = [
  { name: "ノート", price: 120 },
  { name: "ペン", price: 80 },
  { name: "消しゴム", price: 60 }
]
```

<details>
<summary>解答例 (stretch045_answer.rb)</summary>

```ruby
# stretch045_answer.rb
items = [
  { name: "ノート", price: 120 },
  { name: "ペン", price: 80 },
  { name: "消しゴム", price: 60 }
]

items.each do |item|
  puts "#{item[:name]}: #{item[:price]}円"
end
```

</details>

---

### 📝 問題46：ユーザーごとの購入履歴を表示する ( `stretch046.rb` )

次のハッシュを使って、ユーザーごとの購入履歴を表示してみましょう。

```ruby
users = {
  "田中" => ["ノート", "ペン"],
  "鈴木" => ["バッグ"],
  "佐藤" => ["消しゴム", "ノート", "定規"]
}
```

<details>
<summary>解答例 (stretch046_answer.rb)</summary>

```ruby
# stretch046_answer.rb
users = {
  "田中" => ["ノート", "ペン"],
  "鈴木" => ["バッグ"],
  "佐藤" => ["消しゴム", "ノート", "定規"]
}

users.each do |name, items|
  puts name

  items.each do |item|
    puts "- #{item}"
  end
end
```

</details>

---

### 📝 問題47：購入数が多いユーザーを表示する ( `stretch047.rb` )

次のハッシュを使って、購入数が2個以上のユーザーだけ表示してみましょう。

```ruby
users = {
  "田中" => ["ノート", "ペン"],
  "鈴木" => ["バッグ"],
  "佐藤" => ["消しゴム", "ノート", "定規"]
}
```

<details>
<summary>解答例 (stretch047_answer.rb)</summary>

```ruby
# stretch047_answer.rb
users = {
  "田中" => ["ノート", "ペン"],
  "鈴木" => ["バッグ"],
  "佐藤" => ["消しゴム", "ノート", "定規"]
}

users.each do |name, items|
  if items.length >= 2
    puts name
  end
end
```

</details>

---

### 📝 問題48：注文データの合計金額を出す ( `stretch048.rb` )

次の注文データから、合計金額を表示してみましょう。

```ruby
order = {
  "items" => [
    { "name" => "ノート", "price" => 120, "count" => 2 },
    { "name" => "ペン", "price" => 80, "count" => 3 }
  ]
}
```

表示例：

```text
合計金額：480円
```

> [!TIP]
> `order["items"]` で商品の配列を取り出すことができます。
> その配列に対して `each` を使い、繰り返しの中で各商品の `"price"` と `"count"` を掛け合わせて合計に足していきましょう。

<details>
<summary>解答例 (stretch048_answer.rb)</summary>

```ruby
# stretch048_answer.rb
order = {
  "items" => [
    { "name" => "ノート", "price" => 120, "count" => 2 },
    { "name" => "ペン", "price" => 80, "count" => 3 }
  ]
}

total = 0

order["items"].each do |item|
  total = total + (item["price"] * item["count"])
end

puts "合計金額：#{total}円"
```

</details>

---

### 📝 問題49：注文データに商品を追加する ( `stretch049.rb` )

次の注文データに商品を追加し、合計金額を表示してみましょう。

```ruby
order = {
  "items" => [
    { "name" => "ノート", "price" => 120, "count" => 2 },
    { "name" => "ペン", "price" => 80, "count" => 3 }
  ]
}
```

追加する商品：

```ruby
{ "name" => "消しゴム", "price" => 60, "count" => 1 }
```

表示例：

```text
合計金額：540円
```

> [!TIP]
> `order["items"]` は商品の配列です。
> `<<` を使うと、その配列に商品ハッシュを追加できます。

<details>
<summary>解答例 (stretch049_answer.rb)</summary>

```ruby
# stretch049_answer.rb
order = {
  "items" => [
    { "name" => "ノート", "price" => 120, "count" => 2 },
    { "name" => "ペン", "price" => 80, "count" => 3 }
  ]
}

order["items"] << { "name" => "消しゴム", "price" => 60, "count" => 1 }

total = 0

order["items"].each do |item|
  total = total + (item["price"] * item["count"])
end

puts "合計金額：#{total}円"
```

</details>

---

### 📝 問題50：小さな会員カードを作る ( `stretch050.rb` )

名前、年齢、好きなものを入力し、ハッシュに入れてプロフィールを表示してみましょう。

入力例を含む実行例：

```text
名前を入力してください
山田
年齢を入力してください
18
好きなものを入力してください
カレー
山田さんは18歳で、好きなものはカレーです
```

<details>
<summary>解答例 (stretch050_answer.rb)</summary>

```ruby
# stretch050_answer.rb
member = {}

puts "名前を入力してください"
member["name"] = gets.chomp

puts "年齢を入力してください"
member["age"] = gets.to_i

puts "好きなものを入力してください"
member["favorite"] = gets.chomp

puts "#{member["name"]}さんは#{member["age"]}歳で、好きなものは#{member["favorite"]}です"
```

</details>
