# 第8回 発展練習：クラスを使って部品を作ろう

## この練習について

Practice と同じ進め方で進めてください。

1. `stretch01.rb` のようなファイルを作る
2. 自分で考えてコードを書く
3. `ruby stretch01.rb` で実行する
4. 動いたら、解答例を開く
5. `stretch01_answer.rb` を作り、解答例を写す（コピーしてもOK）
6. `ruby stretch01_answer.rb` を実行する
7. 自分の実行結果と解答例の実行結果を比べる

### 💡 進め方のコツ
この発展練習では、以下の4つのクラス（テーマ）を順番に作成・拡張していきます。
- **テーマ1：`Book` クラス（本）**
- **テーマ2：`Product` クラス（商品）**
- **テーマ3：`Task` クラス（タスク）**
- **テーマ4：`Reservation` クラス（予約）**

各テーマ内の問題は、前の問題で作成したクラスのコードをもとに新しいメソッドや変数を追加していきます。そのため、**前回の問題で自分で書いたコードを次のファイルの冒頭にコピー＆ペーストし、そこに新しい機能を追加する**形で進めると、効率よく開発を進めることができます。

---

## 📚 テーマ1：`Book` クラス（本）

まずは本を表現する `Book` クラスから始めます。段階的にクラスを拡張していきましょう。

### 📝 1. `Book` クラスを作る ( `stretch01.rb` )

`Book` クラスを作り、`initialize(title)` でタイトルを受け取るようにしてください。`title_message` メソッドで `"タイトル：#{@title}"` を返すようにしてください。

インスタンスを1つ作り、`title_message` を表示してください。

作成するファイル：
```text
stretch01.rb
```

表示例：
```text
タイトル：Rubyプログラミング入門
```

実行するコマンド：
```bash
ruby stretch01.rb
```

<details>
<summary>解答例 (stretch01_answer.rb)</summary>

```ruby
# stretch01_answer.rb
class Book
  def initialize(title)
    @title = title
  end

  def title_message
    "タイトル：#{@title}"
  end
end

book = Book.new("Rubyプログラミング入門")
puts book.title_message
```

```bash
ruby stretch01_answer.rb
```

</details>

---

### 📝 2. 著者名を追加する ( `stretch02.rb` )

新しいファイルに `Book` クラスを書き、`initialize(title, author)` でタイトルと著者名を受け取るようにしてください。`info` メソッドで `"タイトル：#{@title}（著者：#{@author}）"` を返すようにしてください。

インスタンスを1つ作り、`info` を表示してください。

作成するファイル：
```text
stretch02.rb
```

表示例：
```text
タイトル：Rubyプログラミング入門（著者：まつもとゆきひろ）
```

実行するコマンド：
```bash
ruby stretch02.rb
```

<details>
<summary>解答例 (stretch02_answer.rb)</summary>

```ruby
# stretch02_answer.rb
class Book
  def initialize(title, author)
    @title = title
    @author = author
  end

  def info
    "タイトル：#{@title}（著者：#{@author}）"
  end
end

book = Book.new("Rubyプログラミング入門", "まつもとゆきひろ")
puts book.info
```

```bash
ruby stretch02_answer.rb
```

</details>

---

### 📝 3. 価格を追加する ( `stretch03.rb` )

新しいファイルに `Book` クラスを書き、`initialize(title, author, price)` でタイトル、著者名、価格を受け取るようにしてください。`info` メソッドを拡張し、`"タイトル：#{@title}（著者：#{@author}｜#{@price}円）"` を返すようにしてください。

インスタンスを1つ作り、`info` を表示してください。

作成するファイル：
```text
stretch03.rb
```

表示例：
```text
タイトル：Rubyプログラミング入門（著者：まつもとゆきひろ｜3000円）
```

実行するコマンド：
```bash
ruby stretch03.rb
```

<details>
<summary>解答例 (stretch03_answer.rb)</summary>

```ruby
# stretch03_answer.rb
class Book
  def initialize(title, author, price)
    @title = title
    @author = author
    @price = price
  end

  def info
    "タイトル：#{@title}（著者：#{@author}｜#{@price}円）"
  end
end

book = Book.new("Rubyプログラミング入門", "まつもとゆきひろ", 3000)
puts book.info
```

```bash
ruby stretch03_answer.rb
```

</details>

---

### 📝 4. 複数の本を一覧表示する ( `stretch04.rb` )

新しいファイルに問3と同じ `Book` クラスを書き、3つの本（Bookインスタンス）を作って配列に入れてください。`each` を使って、それぞれの本の `info` を順番に表示してください。

作成するファイル：
```text
stretch04.rb
```

表示例：
```text
タイトル：Rubyプログラミング入門（著者：まつもとゆきひろ｜3000円）
タイトル：Railsガイド（著者：DHH｜4500円）
タイトル：アルゴリズム図鑑（著者：石田保輝｜2400円）
```

実行するコマンド：
```bash
ruby stretch04.rb
```

<details>
<summary>解答例 (stretch04_answer.rb)</summary>

```ruby
# stretch04_answer.rb
class Book
  def initialize(title, author, price)
    @title = title
    @author = author
    @price = price
  end

  def info
    "タイトル：#{@title}（著者：#{@author}｜#{@price}円）"
  end
end

books = [
  Book.new("Rubyプログラミング入門", "まつもとゆきひろ", 3000),
  Book.new("Railsガイド", "DHH", 4500),
  Book.new("アルゴリズム図鑑", "石田保輝", 2400)
]

books.each do |book|
  puts book.info
end
```

```bash
ruby stretch04_answer.rb
```

</details>

---

### 📝 5. 貸出状態を追加する ( `stretch05.rb` )

新しいファイルに `Book` クラスを書き、`initialize(title, author, price)` の中で、初期状態として `@rented = false` をセットするようにしてください。また、貸出を行う `rent` メソッドを作り、呼び出されたら `@rented` を `true` に変更するようにしてください。

インスタンスを1つ作り、`rent` を呼び出してください。この問題では画面への出力はありません。「エラーが出ず、何も表示されなければ成功」です。

作成するファイル：
```text
stretch05.rb
```

表示例：
```text
（何も表示されません）
```

実行するコマンド：
```bash
ruby stretch05.rb
```

<details>
<summary>解答例 (stretch05_answer.rb)</summary>

```ruby
# stretch05_answer.rb
class Book
  def initialize(title, author, price)
    @title = title
    @author = author
    @price = price
    @rented = false
  end

  def rent
    @rented = true
  end
end

book = Book.new("Rubyプログラミング入門", "まつもとゆきひろ", 3000)
book.rent
```

```bash
ruby stretch05_answer.rb
```

</details>

---

### 📝 6. 貸出ステータスのメッセージを表示する ( `stretch06.rb` )

新しいファイルに `Book` クラスを書き、`status_message` メソッドを追加してください。`status_message` は、`@rented` が `true` なら `"#{@title}（貸出中）"` を、`false` なら `"#{@title}（貸出可能）"` を返すようにしてください。

インスタンスを1つ作り、`rent` を呼び出す前と呼び出した後で、それぞれ `status_message` を表示してください。

作成するファイル：
```text
stretch06.rb
```

表示例：
```text
Rubyプログラミング入門（貸出可能）
Rubyプログラミング入門（貸出中）
```

実行するコマンド：
```bash
ruby stretch06.rb
```

<details>
<summary>解答例 (stretch06_answer.rb)</summary>

```ruby
# stretch06_answer.rb
class Book
  def initialize(title, author, price)
    @title = title
    @author = author
    @price = price
    @rented = false
  end

  def rent
    @rented = true
  end

  def status_message
    if @rented
      "#{@title}（貸出中）"
    else
      "#{@title}（貸出可能）"
    end
  end
end

book = Book.new("Rubyプログラミング入門", "まつもとゆきひろ", 3000)
puts book.status_message
book.rent
puts book.status_message
```

```bash
ruby stretch06_answer.rb
```

</details>

---

### 📝 7. 複数の本を貸し出して一覧表示する ( `stretch07.rb` )

新しいファイルに問6と同じ `Book` クラスを書き、3つの本を配列に入れてください。そのうち2つ目の本だけ `rent` メソッドを呼び出して貸出中にしてください。その後、`each` を使って、すべての本の `status_message` を順番に表示してください。

作成するファイル：
```text
stretch07.rb
```

表示例：
```text
Rubyプログラミング入門（貸出可能）
Railsガイド（貸出中）
アルゴリズム図鑑（貸出可能）
```

実行するコマンド：
```bash
ruby stretch07.rb
```

<details>
<summary>解答例 (stretch07_answer.rb)</summary>

```ruby
# stretch07_answer.rb
class Book
  def initialize(title, author, price)
    @title = title
    @author = author
    @price = price
    @rented = false
  end

  def rent
    @rented = true
  end

  def status_message
    if @rented
      "#{@title}（貸出中）"
    else
      "#{@title}（貸出可能）"
    end
  end
end

books = [
  Book.new("Rubyプログラミング入門", "まつもとゆきひろ", 3000),
  Book.new("Railsガイド", "DHH", 4500),
  Book.new("アルゴリズム図鑑", "石田保輝", 2400)
]

books[1].rent

books.each do |book|
  puts book.status_message
end
```

```bash
ruby stretch07_answer.rb
```

</details>

---

### 📝 8. 貸出中の本だけを絞り込んで表示する ( `stretch08.rb` )

新しいファイルに `Book` クラスを書き、貸出状態を返す `rented?` メソッド（`@rented` の値を返す）を追加してください。

3つの本を配列に入れ、1つ目と3つ目の本を `rent` して貸出中にしてください。その後、`each` の中で `if` 条件を使い、**貸出中の本だけ** `status_message` を表示してください。

作成するファイル：
```text
stretch08.rb
```

表示例：
```text
Rubyプログラミング入門（貸出中）
アルゴリズム図鑑（貸出中）
```

実行するコマンド：
```bash
ruby stretch08.rb
```

<details>
<summary>解答例 (stretch08_answer.rb)</summary>

```ruby
# stretch08_answer.rb
class Book
  def initialize(title, author, price)
    @title = title
    @author = author
    @price = price
    @rented = false
  end

  def rent
    @rented = true
  end

  def rented?
    @rented
  end

  def status_message
    if @rented
      "#{@title}（貸出中）"
    else
      "#{@title}（貸出可能）"
    end
  end
end

books = [
  Book.new("Rubyプログラミング入門", "まつもとゆきひろ", 3000),
  Book.new("Railsガイド", "DHH", 4500),
  Book.new("アルゴリズム図鑑", "石田保輝", 2400)
]

books[0].rent
books[2].rent

books.each do |book|
  if book.rented?
    puts book.status_message
  end
end
```

```bash
ruby stretch08_answer.rb
```

</details>

---

## 📦 テーマ2：`Product` クラス（商品）

次に、仕入れや販売による在庫数の増減（状態変化）や、価格の計算を伴う `Product` クラスを作成します。

### 📝 9. `Product` クラスを作る ( `stretch09.rb` )

`Product` クラスを作り、`initialize(name, price)` で商品名と価格を受け取るようにしてください。`info` メソッドで `"商品名：#{@name}（価格：#{@price}円）"` を返すようにしてください。

インスタンスを1つ作り、`info` を表示してください。

作成するファイル：
```text
stretch09.rb
```

表示例：
```text
商品名：りんご（価格：200円）
```

実行するコマンド：
```bash
ruby stretch09.rb
```

<details>
<summary>解答例 (stretch09_answer.rb)</summary>

```ruby
# stretch09_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
  end

  def info
    "商品名：#{@name}（価格：#{@price}円）"
  end
end

product = Product.new("りんご", 200)
puts product.info
```

```bash
ruby stretch09_answer.rb
```

</details>

---

### 📝 10. 在庫数を追加する ( `stretch10.rb` )

新しいファイルに `Product` クラスを書き、`initialize(name, price)` の中で初期の在庫数として `@stock = 0` をセットするようにしてください。また、`stock_info` メソッドを作り、`"商品名：#{@name}（在庫：#{@stock}個）"` を返すようにしてください。

インスタンスを1つ作り、`stock_info` を表示してください。

作成するファイル：
```text
stretch10.rb
```

表示例：
```text
商品名：りんご（在庫：0個）
```

実行するコマンド：
```bash
ruby stretch10.rb
```

<details>
<summary>解答例 (stretch10_answer.rb)</summary>

```ruby
# stretch10_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
    @stock = 0
  end

  def stock_info
    "商品名：#{@name}（在庫：#{@stock}個）"
  end
end

product = Product.new("りんご", 200)
puts product.stock_info
```

```bash
ruby stretch10_answer.rb
```

</details>

---

### 📝 11. 在庫を仕入れる ( `stretch11.rb` )

新しいファイルに `Product` クラスを書き、在庫を増やす `restock(count)` メソッドを追加してください。`restock` が呼ばれたら、`@stock` に `count` の値を加算するようにしてください。

インスタンスを1つ作り、`restock(5)` を呼び出す前と呼び出した後で、それぞれ `stock_info` を表示してください。

作成するファイル：
```text
stretch11.rb
```

表示例：
```text
商品名：りんご（在庫：0個）
商品名：りんご（在庫：5個）
```

実行するコマンド：
```bash
ruby stretch11.rb
```

<details>
<summary>解答例 (stretch11_answer.rb)</summary>

```ruby
# stretch11_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
    @stock = 0
  end

  def stock_info
    "商品名：#{@name}（在庫：#{@stock}個）"
  end

  def restock(count)
    @stock = @stock + count
  end
end

product = Product.new("りんご", 200)
puts product.stock_info
product.restock(5)
puts product.stock_info
```

```bash
ruby stretch11_answer.rb
```

</details>

---

### 📝 12. 商品を1個売る ( `stretch12.rb` )

新しいファイルに `Product` クラスを書き、商品を販売して在庫を減らす `sell` メソッドを追加してください。`sell` が呼ばれたら、`@stock` の値を `1` 減らすようにしてください。

インスタンスを1つ作り、まず `restock(5)` を呼び出し、その後に `sell` を呼び出す前と呼び出した後で、それぞれ `stock_info` を表示してください。

作成するファイル：
```text
stretch12.rb
```

表示例：
```text
商品名：りんご（在庫：5個）
商品名：りんご（在庫：4個）
```

実行するコマンド：
```bash
ruby stretch12.rb
```

<details>
<summary>解答例 (stretch12_answer.rb)</summary>

```ruby
# stretch12_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
    @stock = 0
  end

  def stock_info
    "商品名：#{@name}（在庫：#{@stock}個）"
  end

  def restock(count)
    @stock = @stock + count
  end

  def sell
    @stock = @stock - 1
  end
end

product = Product.new("りんご", 200)
product.restock(5)
puts product.stock_info
product.sell
puts product.stock_info
```

```bash
ruby stretch12_answer.rb
```

</details>

---

### 📝 13. 在庫があるか判定する ( `stretch13.rb` )

新しいファイルに `Product` クラスを書き、在庫があるかどうかを判定する `in_stock?` メソッドを追加してください。`@stock` が1以上なら `true`、0個なら `false` を返すようにします。

インスタンスを1つ作り、初期状態（在庫0個）の時の `in_stock?` の結果を表示したあと、`restock(3)` を呼び出して在庫がある状態にしてから、もう一度 `in_stock?` の結果を表示してください。

作成するファイル：
```text
stretch13.rb
```

表示例：
```text
false
true
```

実行するコマンド：
```bash
ruby stretch13.rb
```

<details>
<summary>解答例 (stretch13_answer.rb)</summary>

```ruby
# stretch13_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
    @stock = 0
  end

  def in_stock?
    @stock > 0
  end

  def restock(count)
    @stock = @stock + count
  end
end

product = Product.new("りんご", 200)
puts product.in_stock?
product.restock(3)
puts product.in_stock?
```

```bash
ruby stretch13_answer.rb
```

</details>

---

### 📝 14. 在庫切れの時は売れないようにする ( `stretch14.rb` )

新しいファイルに `Product` クラスを書き、`sell` メソッドの挙動を以下のように改善してください。

- 在庫がある場合（`@stock` が1以上）：`@stock` を1減らす
- 在庫がない場合（`@stock` が0）：`"エラー：#{@name}は在庫切れです"` と `puts` で画面に表示し、在庫数は減らさない（0のままにする）

インスタンスを1つ作り、仕入れを行わない初期状態（在庫0個）のまま `sell` を呼び出してエラーメッセージが表示されることを確認してください。

作成するファイル：
```text
stretch14.rb
```

表示例：
```text
エラー：りんごは在庫切れです
```

実行するコマンド：
```bash
ruby stretch14.rb
```

<details>
<summary>解答例 (stretch14_answer.rb)</summary>

```ruby
# stretch14_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
    @stock = 0
  end

  def sell
    if @stock > 0
      @stock = @stock - 1
    else
      puts "エラー：#{@name}は在庫切れです"
    end
  end
end

product = Product.new("りんご", 200)
product.sell
```

```bash
ruby stretch14_answer.rb
```

</details>

---

### 📝 15. 在庫がある商品だけを一覧表示する ( `stretch15.rb` )

新しいファイルに `Product` クラス（問13で作成した `in_stock?` や `restock` メソッドを持つもの）を書きます。

3つの商品を配列に入れ、1つ目の商品に `restock(5)`、3つ目の商品に `restock(2)` を行って仕入れをしてください。2つ目の商品は仕入れを行わず在庫0のままとします。

その後、`each` の中で `if` 条件を使い、**在庫がある商品だけ** `stock_info` を表示してください。

作成するファイル：
```text
stretch15.rb
```

表示例：
```text
商品名：りんご（在庫：5個）
商品名：みかん（在庫：2個）
```

実行するコマンド：
```bash
ruby stretch15.rb
```

<details>
<summary>解答例 (stretch15_answer.rb)</summary>

```ruby
# stretch15_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
    @stock = 0
  end

  def stock_info
    "商品名：#{@name}（在庫：#{@stock}個）"
  end

  def restock(count)
    @stock = @stock + count
  end

  def in_stock?
    @stock > 0
  end
end

products = [
  Product.new("りんご", 200),
  Product.new("バナナ", 150),
  Product.new("みかん", 100)
]

products[0].restock(5)
products[2].restock(2)

products.each do |product|
  if product.in_stock?
    puts product.stock_info
  end
end
```

```bash
ruby stretch15_answer.rb
```

</details>

---

### 📝 16. 全商品の総在庫金額を表示する ( `stretch16.rb` )

新しいファイルに `Product` クラスを書き、その商品の在庫金額（単価×在庫数）を計算して返す `stock_value` メソッドを追加してください。

3つの商品を配列に入れ、それぞれ異なる個数を仕入れ（`restock`）てください。その後、`each` を使って全商品の在庫金額を足し合わせ、最後に `"総在庫金額：xxxx円"` と表示してください。

作成するファイル：
```text
stretch16.rb
```

表示例：
```text
総在庫金額：1500円
```

実行するコマンド：
```bash
ruby stretch16.rb
```

<details>
<summary>解答例 (stretch16_answer.rb)</summary>

```ruby
# stretch16_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
    @stock = 0
  end

  def restock(count)
    @stock = @stock + count
  end

  def stock_value
    @price * @stock
  end
end

products = [
  Product.new("りんご", 200),
  Product.new("バナナ", 150),
  Product.new("みかん", 100)
]

products[0].restock(3) # 200 * 3 = 600円
products[1].restock(4) # 150 * 4 = 600円
products[2].restock(3) # 100 * 3 = 300円

total_value = 0

products.each do |product|
  total_value = total_value + product.stock_value
end

puts "総在庫金額：#{total_value}円"
```

```bash
ruby stretch16_answer.rb
```

</details>

---

## 📋 テーマ3：`Task` クラス（タスク）

ここからは、完了状態と優先度を持つ `Task` クラスを実装し、複数の条件による絞り込みや判定を学びます。

### 📝 17. `Task` クラスを作る ( `stretch17.rb` )

`Task` クラスを作り、`initialize(name)` でタスク名を受け取り、初期状態として `@done = false` をセットするようにしてください。また、`status_message` メソッドで、`@done` が `true` なら `"［完了］#{@name}"`、`false` なら `"［未完了］#{@name}"` を返すようにしてください。

インスタンスを1つ作り、`status_message` を表示してください。

作成するファイル：
```text
stretch17.rb
```

表示例：
```text
［未完了］部屋の掃除
```

実行するコマンド：
```bash
ruby stretch17.rb
```

<details>
<summary>解答例 (stretch17_answer.rb)</summary>

```ruby
# stretch17_answer.rb
class Task
  def initialize(name)
    @name = name
    @done = false
  end

  def status_message
    if @done
      "［完了］#{@name}"
    else
      "［未完了］#{@name}"
    end
  end
end

task = Task.new("部屋の掃除")
puts task.status_message
```

```bash
ruby stretch17_answer.rb
```

</details>

---

### 📝 18. 優先度を追加する ( `stretch18.rb` )

新しいファイルに `Task` クラスを書き、`initialize(name, priority)` でタスク名と優先度（`"高"`, `"中"`, `"低"` など）を受け取るようにしてください。また、初期値として `@done = false` も同様にセットしてください。`info` メソッドを作り、`"［未完了］［優先度：#{@priority}］#{@name}"` などの現在の情報を返すようにしてください。

インスタンスを1つ作り、`info` を表示してください。

作成するファイル：
```text
stretch18.rb
```

表示例：
```text
［未完了］［優先度：高］レポート提出
```

実行するコマンド：
```bash
ruby stretch18.rb
```

<details>
<summary>解答例 (stretch18_answer.rb)</summary>

```ruby
# stretch18_answer.rb
class Task
  def initialize(name, priority)
    @name = name
    @priority = priority
    @done = false
  end

  def info
    status = if @done
               "完了"
             else
               "未完了"
             end
    "［#{status}］［優先度：#{@priority}］#{@name}"
  end
end

task = Task.new("レポート提出", "高")
puts task.info
```

```bash
ruby stretch18_answer.rb
```

</details>

---

### 📝 19. タスクを完了にする ( `stretch19.rb` )

新しいファイルに `Task` クラスを書き、タスクを完了状態にする `finish` メソッドを追加してください。`finish` が呼び出されたら、`@done` を `true` に変更するようにします。

インスタンスを1つ作り、`finish` を呼び出す前と呼び出した後で、それぞれ `status_message` を表示してください。

作成するファイル：
```text
stretch19.rb
```

表示例：
```text
［未完了］部屋の掃除
［完了］部屋の掃除
```

実行するコマンド：
```bash
ruby stretch19.rb
```

<details>
<summary>解答例 (stretch19_answer.rb)</summary>

```ruby
# stretch19_answer.rb
class Task
  def initialize(name)
    @name = name
    @done = false
  end

  def finish
    @done = true
  end

  def status_message
    if @done
      "［完了］#{@name}"
    else
      "［未完了］#{@name}"
    end
  end
end

task = Task.new("部屋の掃除")
puts task.status_message
task.finish
puts task.status_message
```

```bash
ruby stretch19_answer.rb
```

</details>

---

### 📝 20. 状態と優先度をまとめて表示する ( `stretch20.rb` )

新しいファイルに `Task` クラスを書き、これまでに作成した `@priority` の保持、`finish` メソッドによる完了状態変更、および状態を含めた `info` メソッドの出力をすべて組み合わせてください。

インスタンスを1つ作り、`finish` メソッドを呼び出す前と呼び出した後で、それぞれ `info` を表示してください。

作成するファイル：
```text
stretch20.rb
```

表示例：
```text
［未完了］［優先度：高］レポート提出
［完了］［優先度：高］レポート提出
```

実行するコマンド：
```bash
ruby stretch20.rb
```

<details>
<summary>解答例 (stretch20_answer.rb)</summary>

```ruby
# stretch20_answer.rb
class Task
  def initialize(name, priority)
    @name = name
    @priority = priority
    @done = false
  end

  def finish
    @done = true
  end

  def info
    status = if @done
               "完了"
             else
               "未完了"
             end
    "［#{status}］［優先度：#{@priority}］#{@name}"
  end
end

task = Task.new("レポート提出", "高")
puts task.info
task.finish
puts task.info
```

```bash
ruby stretch20_answer.rb
```

</details>

---

### 📝 21. 複数のタスクを一覧表示する ( `stretch21.rb` )

新しいファイルに問20と同じ `Task` クラスを書きます。

3つのタスクを配列に入れてください。そのうち2つ目のタスクだけ `finish` メソッドを呼び出して完了状態にしてください。その後、`each` を使って、すべてのタスクの `info` を順番に表示してください。

作成するファイル：
```text
stretch21.rb
```

表示例：
```text
［未完了］［優先度：高］レポート提出
［完了］［優先度：中］買い物
［未完了］［優先度：低］メール返信
```

実行するコマンド：
```bash
ruby stretch21.rb
```

<details>
<summary>解答例 (stretch21_answer.rb)</summary>

```ruby
# stretch21_answer.rb
class Task
  def initialize(name, priority)
    @name = name
    @priority = priority
    @done = false
  end

  def finish
    @done = true
  end

  def info
    status = if @done
               "完了"
             else
               "未完了"
             end
    "［#{status}］［優先度：#{@priority}］#{@name}"
  end
end

tasks = [
  Task.new("レポート提出", "高"),
  Task.new("買い物", "中"),
  Task.new("メール返信", "低")
]

tasks[1].finish

tasks.each do |task|
  puts task.info
end
```

```bash
ruby stretch21_answer.rb
```

</details>

---

### 📝 22. 未完了のタスクだけを一覧表示する ( `stretch22.rb` )

新しいファイルに `Task` クラスを書き、タスクが完了しているかどうかを返す `done?` メソッド（`@done` の値を返す）を追加してください。

3つのタスクを配列に入れ、1つ目のタスクだけ `finish` して完了にしてください。その後、`each` の中で `if` 条件を使い、**未完了のタスクだけ** `info` を表示してください。

作成するファイル：
```text
stretch22.rb
```

表示例：
```text
［未完了］［優先度：中］買い物
［未完了］［優先度：低］メール返信
```

実行するコマンド：
```bash
ruby stretch22.rb
```

<details>
<summary>解答例 (stretch22_answer.rb)</summary>

```ruby
# stretch22_answer.rb
class Task
  def initialize(name, priority)
    @name = name
    @priority = priority
    @done = false
  end

  def finish
    @done = true
  end

  def done?
    @done
  end

  def info
    status = if @done
               "完了"
             else
               "未完了"
             end
    "［#{status}］［優先度：#{@priority}］#{@name}"
  end
end

tasks = [
  Task.new("レポート提出", "高"),
  Task.new("買い物", "中"),
  Task.new("メール返信", "低")
]

tasks[0].finish

tasks.each do |task|
  if !task.done?
    puts task.info
  end
end
```

```bash
ruby stretch22_answer.rb
```

</details>

---

### 📝 23. 優先度が「高」で、かつ未完了のタスクだけを表示する ( `stretch23.rb` )

新しいファイルに `Task` クラスを書き、タスクの優先度を返す `priority` メソッド（`@priority` の値を返す）を追加してください。

4つのタスクを配列に入れます。1つ目と3つ目のタスクを `finish` で完了状態にしてください。

その後、`each` の中で `&&` 演算子を使い、**「優先度が 高」かつ「未完了（done? が false）」のタスクだけ** `info` を表示してください。

作成するファイル：
```text
stretch23.rb
```

表示例：
```text
［未完了］［優先度：高］部屋の掃除
```

実行するコマンド：
```bash
ruby stretch23.rb
```

<details>
<summary>解答例 (stretch23_answer.rb)</summary>

```ruby
# stretch23_answer.rb
class Task
  def initialize(name, priority)
    @name = name
    @priority = priority
    @done = false
  end

  def finish
    @done = true
  end

  def done?
    @done
  end

  def priority
    @priority
  end

  def info
    status = if @done
               "完了"
             else
               "未完了"
             end
    "［#{status}］［優先度：#{@priority}］#{@name}"
  end
end

tasks = [
  Task.new("レポート提出", "高"),
  Task.new("買い物", "中"),
  Task.new("部屋の掃除", "高"),
  Task.new("メール返信", "低")
]

tasks[0].finish

tasks.each do |task|
  if task.priority == "高" && !task.done?
    puts task.info
  end
end
```

```bash
ruby stretch23_answer.rb
```

</details>

---

## 📝 予約クラス

最後に、文字列による状態遷移（未確定、確定、キャンセル）の処理と、人数の合計計算を伴う `Reservation` クラスを作成します。

### 📝 24. `Reservation` クラスを作る ( `stretch24.rb` )

`Reservation` クラスを作り、`initialize(name, count)` で予約者名と人数を受け取るようにしてください。`info` メソッドで `"予約者：#{@name}様（#{@count}名）"` を返すようにしてください。

インスタンスを1つ作り、`info` を表示してください。

作成するファイル：
```text
stretch24.rb
```

表示例：
```text
予約者：田中様（3名）
```

実行するコマンド：
```bash
ruby stretch24.rb
```

<details>
<summary>解答例 (stretch24_answer.rb)</summary>

```ruby
# stretch24_answer.rb
class Reservation
  def initialize(name, count)
    @name = name
    @count = count
  end

  def info
    "予約者：#{@name}様（#{@count}名）"
  end
end

res = Reservation.new("田中", 3)
puts res.info
```

```bash
ruby stretch24_answer.rb
```

</details>

---

### 📝 25. ステータス変数を入れる ( `stretch25.rb` )

新しいファイルに `Reservation` クラスを書き、`initialize(name, count)` の中で初期のステータスとして `@status = "未確定"` をセットするようにしてください。また、`status_info` メソッドを作り、`"予約者：#{@name}様（#{@count}名）［ステータス：#{@status}］"` を返すようにしてください。

インスタンスを1つ作り、`status_info` を表示してください。

作成するファイル：
```text
stretch25.rb
```

表示例：
```text
予約者：田中様（3名）［ステータス：未確定］
```

実行するコマンド：
```bash
ruby stretch25.rb
```

<details>
<summary>解答例 (stretch25_answer.rb)</summary>

```ruby
# stretch25_answer.rb
class Reservation
  def initialize(name, count)
    @name = name
    @count = count
    @status = "未確定"
  end

  def status_info
    "予約者：#{@name}様（#{@count}名）［ステータス：#{@status}］"
  end
end

res = Reservation.new("田中", 3)
puts res.status_info
```

```bash
ruby stretch25_answer.rb
```

</details>

---

### 📝 26. 予約を確定する ( `stretch26.rb` )

新しいファイルに `Reservation` クラスを書き、ステータスを確定にする `confirm` メソッドを追加してください。`confirm` が呼び出されたら、`@status` の値を `"確定"` に変更するようにします。

インスタンスを1つ作り、`confirm` を呼び出す前と呼び出した後で、それぞれ `status_info` を表示してください。

作成するファイル：
```text
stretch26.rb
```

表示例：
```text
予約者：田中様（3名）［ステータス：未確定］
予約者：田中様（3名）［ステータス：確定］
```

実行するコマンド：
```bash
ruby stretch26.rb
```

<details>
<summary>解答例 (stretch26_answer.rb)</summary>

```ruby
# stretch26_answer.rb
class Reservation
  def initialize(name, count)
    @name = name
    @count = count
    @status = "未確定"
  end

  def confirm
    @status = "確定"
  end

  def status_info
    "予約者：#{@name}様（#{@count}名）［ステータス：#{@status}］"
  end
end

res = Reservation.new("田中", 3)
puts res.status_info
res.confirm
puts res.status_info
```

```bash
ruby stretch26_answer.rb
```

</details>

---

### 📝 27. 予約をキャンセルする ( `stretch27.rb` )

新しいファイルに `Reservation` クラスを書き、ステータスをキャンセルにする `cancel` メソッドを追加してください。`cancel` が呼び出されたら、`@status` の値を `"キャンセル"` に変更するようにします。

インスタンスを1つ作り、`cancel` を呼び出した後の `status_info` を表示してください。

作成するファイル：
```text
stretch27.rb
```

表示例：
```text
予約者：田中様（3名）［ステータス：キャンセル］
```

実行するコマンド：
```bash
ruby stretch27.rb
```

<details>
<summary>解答例 (stretch27_answer.rb)</summary>

```ruby
# stretch27_answer.rb
class Reservation
  def initialize(name, count)
    @name = name
    @count = count
    @status = "未確定"
  end

  def cancel
    @status = "キャンセル"
  end

  def status_info
    "予約者：#{@name}様（#{@count}名）［ステータス：#{@status}］"
  end
end

res = Reservation.new("田中", 3)
res.cancel
puts res.status_info
```

```bash
ruby stretch27_answer.rb
```

</details>

---

### 📝 28. 複数の予約を一覧表示する ( `stretch28.rb` )

新しいファイルに `Reservation` クラスを書き、これまでに定義した `confirm` メソッドと `cancel` メソッドの両方を備えるようにしてください。

3つの予約を配列に入れます。1つ目の予約を `confirm` で確定、3つ目の予約を `cancel` でキャンセルにしてください。2つ目の予約はそのまま（未確定）とします。

その後、`each` を使って、すべての予約の `status_info` を順番に表示してください。

作成するファイル：
```text
stretch28.rb
```

表示例：
```text
予約者：田中様（3名）［ステータス：確定］
予約者：鈴木様（2名）［ステータス：未確定］
予約者：佐藤様（5名）［ステータス：キャンセル］
```

実行するコマンド：
```bash
ruby stretch28.rb
```

<details>
<summary>解答例 (stretch28_answer.rb)</summary>

```ruby
# stretch28_answer.rb
class Reservation
  def initialize(name, count)
    @name = name
    @count = count
    @status = "未確定"
  end

  def confirm
    @status = "確定"
  end

  def cancel
    @status = "キャンセル"
  end

  def status_info
    "予約者：#{@name}様（#{@count}名）［ステータス：#{@status}］"
  end
end

reservations = [
  Reservation.new("田中", 3),
  Reservation.new("鈴木", 2),
  Reservation.new("佐藤", 5)
]

reservations[0].confirm
reservations[2].cancel

reservations.each do |res|
  puts res.status_info
end
```

```bash
ruby stretch28_answer.rb
```

</details>

---

### 📝 29. 確定した予約だけの人数を合計して表示する ( `stretch29.rb` )

新しいファイルに `Reservation` クラスを書き、現在のステータスを返す `status` メソッド（`@status` の値を返す）と、予約人数を返す `count` メソッド（`@count` の値を返す）を追加してください。

3つの予約を配列に入れます。1つ目と3つ目の予約を `confirm` で確定してください。2つ目の予約はそのまま（未確定）とします。

その後、`each` を使って**ステータスが「確定」の予約だけ**人数を足し合わせ、最後に `"確定済みの予約人数合計：x名"` と表示してください。

作成するファイル：
```text
stretch29.rb
```

表示例：
```text
確定済みの予約人数合計：8名
```

実行するコマンド：
```bash
ruby stretch29.rb
```

<details>
<summary>解答例 (stretch29_answer.rb)</summary>

```ruby
# stretch29_answer.rb
class Reservation
  def initialize(name, count)
    @name = name
    @count = count
    @status = "未確定"
  end

  def confirm
    @status = "確定"
  end

  def status
    @status
  end

  def count
    @count
  end
end

reservations = [
  Reservation.new("田中", 3),
  Reservation.new("鈴木", 2),
  Reservation.new("佐藤", 5)
]

reservations[0].confirm
reservations[2].confirm

total_count = 0

reservations.each do |res|
  if res.status == "確定"
    total_count = total_count + res.count
  end
end

puts "確定済みの予約人数合計：#{total_count}名"
```

```bash
ruby stretch29_answer.rb
```

</details>

---

### 📝 30. 予約人数が「4名以上」の予約だけを表示する ( `stretch30.rb` )

新しいファイルに `Reservation` クラスを書き、予約人数を返す `count` メソッド（`@count` の値を返す）を追加してください。

3つの予約を配列に入れます。1つ目の予約を `confirm`、3つ目の予約を `cancel` にしてください。2つ目の予約はそのまま（未確定）とします。

その後、`each` の中で `if` 条件を使い、**予約人数が「4名以上」の予約だけ** `status_info` を表示してください。

作成するファイル：
```text
stretch30.rb
```

表示例：
```text
予約者：佐藤様（5名）［ステータス：キャンセル］
```

実行するコマンド：
```bash
ruby stretch30.rb
```

<details>
<summary>解答例 (stretch30_answer.rb)</summary>

```ruby
# stretch30_answer.rb
class Reservation
  def initialize(name, count)
    @name = name
    @count = count
    @status = "未確定"
  end

  def confirm
    @status = "確定"
  end

  def cancel
    @status = "キャンセル"
  end

  def count
    @count
  end

  def status_info
    "予約者：#{@name}様（#{@count}名）［ステータス：#{@status}］"
  end
end

reservations = [
  Reservation.new("田中", 3),
  Reservation.new("鈴木", 2),
  Reservation.new("佐藤", 5)
]

reservations[0].confirm
reservations[2].cancel

reservations.each do |res|
  if res.count >= 4
    puts res.status_info
  end
end
```

```bash
ruby stretch30_answer.rb
```

</details>

---

課題30まで終わったら、第8回の練習はすべて完了です。お疲れさまでした。
