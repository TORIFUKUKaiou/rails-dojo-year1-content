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

---

## 📝 1. `Book` クラスを作る ( `stretch01.rb` )

`Book` クラスを作り、`initialize(title)` でタイトルを受け取ってください。`title_message` メソッドで `"タイトル：#{@title}"` を返すようにしてください。

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

## 📝 2. `Movie` クラスを作る ( `stretch02.rb` )

`Movie` クラスを作り、`initialize(title)` で作品名を受け取ってください。`title_message` メソッドで `"作品名：#{@title}"` を返すようにしてください。

インスタンスを1つ作り、`title_message` を表示してください。

作成するファイル：
```text
stretch02.rb
```

表示例：
```text
作品名：バック・トゥ・ザ・フューチャー
```

実行するコマンド：
```bash
ruby stretch02.rb
```

<details>
<summary>解答例 (stretch02_answer.rb)</summary>

```ruby
# stretch02_answer.rb
class Movie
  def initialize(title)
    @title = title
  end

  def title_message
    "作品名：#{@title}"
  end
end

movie = Movie.new("バック・トゥ・ザ・フューチャー")
puts movie.title_message
```

```bash
ruby stretch02_answer.rb
```

</details>

---

## 📝 3. `Game` クラスを作る ( `stretch03.rb` )

`Game` クラスを作り、`initialize(title)` でゲーム名を受け取ってください。`title_message` メソッドで `"ゲーム名：#{@title}"` を返すようにしてください。

インスタンスを1つ作り、`title_message` を表示してください。

作成するファイル：
```text
stretch03.rb
```

表示例：
```text
ゲーム名：ゼルダの伝説
```

実行するコマンド：
```bash
ruby stretch03.rb
```

<details>
<summary>解答例 (stretch03_answer.rb)</summary>

```ruby
# stretch03_answer.rb
class Game
  def initialize(title)
    @title = title
  end

  def title_message
    "ゲーム名：#{@title}"
  end
end

game = Game.new("ゼルダの伝説")
puts game.title_message
```

```bash
ruby stretch03_answer.rb
```

</details>

---

## 📝 4. `Profile` クラスを作る ( `stretch04.rb` )

`Profile` クラスを作り、`initialize(name)` で名前を受け取ってください。`name_message` メソッドで `"名前：#{@name}"` を返すようにしてください。

インスタンスを1つ作り、`name_message` を表示してください。

作成するファイル：
```text
stretch04.rb
```

表示例：
```text
名前：山田太郎
```

実行するコマンド：
```bash
ruby stretch04.rb
```

<details>
<summary>解答例 (stretch04_answer.rb)</summary>

```ruby
# stretch04_answer.rb
class Profile
  def initialize(name)
    @name = name
  end

  def name_message
    "名前：#{@name}"
  end
end

profile = Profile.new("山田太郎")
puts profile.name_message
```

```bash
ruby stretch04_answer.rb
```

</details>

---

## 📝 5. `Memo` クラスを作る ( `stretch05.rb` )

`Memo` クラスを作り、`initialize(body)` でメモ本文を受け取ってください。`body_message` メソッドで `"メモ：#{@body}"` を返すようにしてください。

インスタンスを1つ作り、`body_message` を表示してください。

作成するファイル：
```text
stretch05.rb
```

表示例：
```text
メモ：牛乳を買う
```

実行するコマンド：
```bash
ruby stretch05.rb
```

<details>
<summary>解答例 (stretch05_answer.rb)</summary>

```ruby
# stretch05_answer.rb
class Memo
  def initialize(body)
    @body = body
  end

  def body_message
    "メモ：#{@body}"
  end
end

memo = Memo.new("牛乳を買う")
puts memo.body_message
```

```bash
ruby stretch05_answer.rb
```

</details>

---

## 📝 6. `Book` に著者名を追加する ( `stretch06.rb` )

新しいファイルに `Book` クラスを書き、`initialize(title, author)` でタイトルと著者名を受け取ってください。`info` メソッドで `"#{@title}：#{@author}"` を返すようにしてください。

インスタンスを1つ作り、`info` を表示してください。

作成するファイル：
```text
stretch06.rb
```

表示例：
```text
Rubyプログラミング入門：まつもとゆきひろ
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
  def initialize(title, author)
    @title = title
    @author = author
  end

  def info
    "#{@title}：#{@author}"
  end
end

book = Book.new("Rubyプログラミング入門", "まつもとゆきひろ")
puts book.info
```

```bash
ruby stretch06_answer.rb
```

</details>

---

## 📝 7. `Movie` に上映時間を追加する ( `stretch07.rb` )

新しいファイルに `Movie` クラスを書き、`initialize(title, duration)` で作品名と上映時間（分）を受け取ってください。`info` メソッドで `"#{@title}：#{@duration}分"` を返すようにしてください。

インスタンスを1つ作り、`info` を表示してください。

作成するファイル：
```text
stretch07.rb
```

表示例：
```text
バック・トゥ・ザ・フューチャー：116分
```

実行するコマンド：
```bash
ruby stretch07.rb
```

<details>
<summary>解答例 (stretch07_answer.rb)</summary>

```ruby
# stretch07_answer.rb
class Movie
  def initialize(title, duration)
    @title = title
    @duration = duration
  end

  def info
    "#{@title}：#{@duration}分"
  end
end

movie = Movie.new("バック・トゥ・ザ・フューチャー", 116)
puts movie.info
```

```bash
ruby stretch07_answer.rb
```

</details>

---

## 📝 8. `Game` にジャンルを追加する ( `stretch08.rb` )

新しいファイルに `Game` クラスを書き、`initialize(title, genre)` でゲーム名とジャンルを受け取ってください。`info` メソッドで `"#{@title}（#{@genre}）"` を返すようにしてください。

インスタンスを1つ作り、`info` を表示してください。

作成するファイル：
```text
stretch08.rb
```

表示例：
```text
ゼルダの伝説（アクションRPG）
```

実行するコマンド：
```bash
ruby stretch08.rb
```

<details>
<summary>解答例 (stretch08_answer.rb)</summary>

```ruby
# stretch08_answer.rb
class Game
  def initialize(title, genre)
    @title = title
    @genre = genre
  end

  def info
    "#{@title}（#{@genre}）"
  end
end

game = Game.new("ゼルダの伝説", "アクションRPG")
puts game.info
```

```bash
ruby stretch08_answer.rb
```

</details>

---

## 📝 9. `Profile` に年齢を追加する ( `stretch09.rb` )

新しいファイルに `Profile` クラスを書き、`initialize(name, age)` で名前と年齢を受け取ってください。`introduce` メソッドで `"#{@name}です。#{@age}歳です。"` を返すようにしてください。

インスタンスを1つ作り、`introduce` を表示してください。

作成するファイル：
```text
stretch09.rb
```

表示例：
```text
山田太郎です。20歳です。
```

実行するコマンド：
```bash
ruby stretch09.rb
```

<details>
<summary>解答例 (stretch09_answer.rb)</summary>

```ruby
# stretch09_answer.rb
class Profile
  def initialize(name, age)
    @name = name
    @age = age
  end

  def introduce
    "#{@name}です。#{@age}歳です。"
  end
end

profile = Profile.new("山田太郎", 20)
puts profile.introduce
```

```bash
ruby stretch09_answer.rb
```

</details>

---

## 📝 10. `Memo` に作成日を追加する ( `stretch10.rb` )

新しいファイルに `Memo` クラスを書き、`initialize(created_date, body)` で作成日と本文を受け取ってください。`list_item` メソッドで `"#{@created_date}：#{@body}"` を返すようにしてください。

インスタンスを2つ作り、それぞれ `list_item` を表示してください。

作成するファイル：
```text
stretch10.rb
```

表示例：
```text
2024-06-01：牛乳を買う
2024-06-02：本を返却する
```

実行するコマンド：
```bash
ruby stretch10.rb
```

<details>
<summary>解答例 (stretch10_answer.rb)</summary>

```ruby
# stretch10_answer.rb
class Memo
  def initialize(created_date, body)
    @created_date = created_date
    @body = body
  end

  def list_item
    "#{@created_date}：#{@body}"
  end
end

memo1 = Memo.new("2024-06-01", "牛乳を買う")
memo2 = Memo.new("2024-06-02", "本を返却する")

puts memo1.list_item
puts memo2.list_item
```

```bash
ruby stretch10_answer.rb
```

</details>

---

## 📝 11. `Task` に完了状態を持たせ、前後を表示する ( `stretch11.rb` )

`Task` クラスを作り、`initialize(name)` でタスク名を受け取り、`@done = false` をセットしてください。`finish` メソッドで `@done` を `true` にし、`status_message` メソッドで `"#{@name}：完了"` または `"#{@name}：未完了"` を返すようにしてください。

タスクを1つ作り、`finish` の前後で `status_message` を表示してください。

作成するファイル：
```text
stretch11.rb
```

表示例：
```text
課題を提出する：未完了
課題を提出する：完了
```

実行するコマンド：
```bash
ruby stretch11.rb
```

<details>
<summary>解答例 (stretch11_answer.rb)</summary>

```ruby
# stretch11_answer.rb
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
      "#{@name}：完了"
    else
      "#{@name}：未完了"
    end
  end
end

task = Task.new("課題を提出する")
puts task.status_message
task.finish
puts task.status_message
```

```bash
ruby stretch11_answer.rb
```

</details>

---

## 📝 12. `Memo` に固定表示状態を持たせる ( `stretch12.rb` )

`Memo` クラスを作り、`initialize(body)` でメモ本文を受け取り、`@pinned = false` をセットしてください。`pin` メソッドで `@pinned` を `true` にし、`status_message` メソッドで `"メモ（固定あり）：#{@body}"` または `"メモ（固定なし）：#{@body}"` を返すようにしてください。

メモを1つ作り、`pin` の前後で `status_message` を表示してください。

作成するファイル：
```text
stretch12.rb
```

表示例：
```text
メモ（固定なし）：牛乳を買う
メモ（固定あり）：牛乳を買う
```

実行するコマンド：
```bash
ruby stretch12.rb
```

<details>
<summary>解答例 (stretch12_answer.rb)</summary>

```ruby
# stretch12_answer.rb
class Memo
  def initialize(body)
    @body = body
    @pinned = false
  end

  def pin
    @pinned = true
  end

  def pinned?
    @pinned
  end

  def status_message
    if @pinned
      "メモ（固定あり）：#{@body}"
    else
      "メモ（固定なし）：#{@body}"
    end
  end
end

memo = Memo.new("牛乳を買う")
puts memo.status_message
memo.pin
puts memo.status_message
```

```bash
ruby stretch12_answer.rb
```

</details>

---

## 📝 13. `Book` に貸出状態を持たせる ( `stretch13.rb` )

`Book` クラスを作り、`initialize(title)` でタイトルを受け取り、`@rented = false` をセットしてください。`rent` メソッドで `@rented` を `true` にし、`status_message` メソッドで `"#{@title}：貸出中"` または `"#{@title}：貸出可能"` を返すようにしてください。

本を1つ作り、`rent` の前後で `status_message` を表示してください。

作成するファイル：
```text
stretch13.rb
```

表示例：
```text
Rubyプログラミング入門：貸出可能
Rubyプログラミング入門：貸出中
```

実行するコマンド：
```bash
ruby stretch13.rb
```

<details>
<summary>解答例 (stretch13_answer.rb)</summary>

```ruby
# stretch13_answer.rb
class Book
  def initialize(title)
    @title = title
    @rented = false
  end

  def rent
    @rented = true
  end

  def status_message
    if @rented
      "#{@title}：貸出中"
    else
      "#{@title}：貸出可能"
    end
  end
end

book = Book.new("Rubyプログラミング入門")
puts book.status_message
book.rent
puts book.status_message
```

```bash
ruby stretch13_answer.rb
```

</details>

---

## 📝 14. `Seat` に予約状態を持たせる ( `stretch14.rb` )

`Seat` クラスを作り、`initialize(number)` で席番号を受け取り、`@reserved = false` をセットしてください。`reserve` メソッドで `@reserved` を `true` にし、`status_message` メソッドで `"#{@number}：予約済み"` または `"#{@number}：空席"` を返すようにしてください。

席を1つ作り、`reserve` の前後で `status_message` を表示してください。

作成するファイル：
```text
stretch14.rb
```

表示例：
```text
A1：空席
A1：予約済み
```

実行するコマンド：
```bash
ruby stretch14.rb
```

<details>
<summary>解答例 (stretch14_answer.rb)</summary>

```ruby
# stretch14_answer.rb
class Seat
  def initialize(number)
    @number = number
    @reserved = false
  end

  def reserve
    @reserved = true
  end

  def status_message
    if @reserved
      "#{@number}：予約済み"
    else
      "#{@number}：空席"
    end
  end
end

seat = Seat.new("A1")
puts seat.status_message
seat.reserve
puts seat.status_message
```

```bash
ruby stretch14_answer.rb
```

</details>

---

## 📝 15. `Order` に支払い状態を持たせる ( `stretch15.rb` )

`Order` クラスを作り、`initialize(order_number)` で注文番号を受け取り、`@paid = false` をセットしてください。`pay` メソッドで `@paid` を `true` にし、`status_message` メソッドで `"#{@order_number}：支払い済み"` または `"#{@order_number}：未払い"` を返すようにしてください。

注文を1つ作り、`pay` の前後で `status_message` を表示してください。

作成するファイル：
```text
stretch15.rb
```

表示例：
```text
注文001：未払い
注文001：支払い済み
```

実行するコマンド：
```bash
ruby stretch15.rb
```

<details>
<summary>解答例 (stretch15_answer.rb)</summary>

```ruby
# stretch15_answer.rb
class Order
  def initialize(order_number)
    @order_number = order_number
    @paid = false
  end

  def pay
    @paid = true
  end

  def status_message
    if @paid
      "#{@order_number}：支払い済み"
    else
      "#{@order_number}：未払い"
    end
  end
end

order = Order.new("注文001")
puts order.status_message
order.pay
puts order.status_message
```

```bash
ruby stretch15_answer.rb
```

</details>

---

## 📝 16. `User` にログイン状態を持たせる ( `stretch16.rb` )

`User` クラスを作り、`initialize(name)` で名前を受け取り、`@logged_in = false` をセットしてください。`login` メソッドで `@logged_in` を `true` にし、`status_message` メソッドで `"#{@name}：ログイン中"` または `"#{@name}：ログアウト中"` を返すようにしてください。

ユーザーを1つ作り、`login` の前後で `status_message` を表示してください。

作成するファイル：
```text
stretch16.rb
```

表示例：
```text
田中：ログアウト中
田中：ログイン中
```

実行するコマンド：
```bash
ruby stretch16.rb
```

<details>
<summary>解答例 (stretch16_answer.rb)</summary>

```ruby
# stretch16_answer.rb
class User
  def initialize(name)
    @name = name
    @logged_in = false
  end

  def login
    @logged_in = true
  end

  def status_message
    if @logged_in
      "#{@name}：ログイン中"
    else
      "#{@name}：ログアウト中"
    end
  end
end

user = User.new("田中")
puts user.status_message
user.login
puts user.status_message
```

```bash
ruby stretch16_answer.rb
```

</details>

---

## 📝 17. `Message` に既読状態を持たせる ( `stretch17.rb` )

`Message` クラスを作り、`initialize(body)` で本文を受け取り、`@read = false` をセットしてください。`read` メソッドで `@read` を `true` にし、`status_message` メソッドで `"#{@body}：既読"` または `"#{@body}：未読"` を返すようにしてください。

メッセージを1つ作り、`read` の前後で `status_message` を表示してください。

作成するファイル：
```text
stretch17.rb
```

表示例：
```text
おはようございます：未読
おはようございます：既読
```

実行するコマンド：
```bash
ruby stretch17.rb
```

<details>
<summary>解答例 (stretch17_answer.rb)</summary>

```ruby
# stretch17_answer.rb
class Message
  def initialize(body)
    @body = body
    @read = false
  end

  def read
    @read = true
  end

  def status_message
    if @read
      "#{@body}：既読"
    else
      "#{@body}：未読"
    end
  end
end

message = Message.new("おはようございます")
puts message.status_message
message.read
puts message.status_message
```

```bash
ruby stretch17_answer.rb
```

</details>

---

## 📝 18. `Coupon` に使用済み状態を持たせる ( `stretch18.rb` )

`Coupon` クラスを作り、`initialize(name)` でクーポン名を受け取り、`@used = false` をセットしてください。`use` メソッドで `@used` を `true` にし、`status_message` メソッドで `"#{@name}：使用済み"` または `"#{@name}：未使用"` を返すようにしてください。

クーポンを1つ作り、`use` の前後で `status_message` を表示してください。

作成するファイル：
```text
stretch18.rb
```

表示例：
```text
10%OFFクーポン：未使用
10%OFFクーポン：使用済み
```

実行するコマンド：
```bash
ruby stretch18.rb
```

<details>
<summary>解答例 (stretch18_answer.rb)</summary>

```ruby
# stretch18_answer.rb
class Coupon
  def initialize(name)
    @name = name
    @used = false
  end

  def use
    @used = true
  end

  def status_message
    if @used
      "#{@name}：使用済み"
    else
      "#{@name}：未使用"
    end
  end
end

coupon = Coupon.new("10%OFFクーポン")
puts coupon.status_message
coupon.use
puts coupon.status_message
```

```bash
ruby stretch18_answer.rb
```

</details>

---

## 📝 19. `Product` に在庫数を持たせる ( `stretch19.rb` )

`Product` クラスを作り、`initialize(name, stock)` で商品名と在庫数を受け取ってください。`sell` メソッドで在庫を1つ減らし、`stock_info` メソッドで `"#{@name}：在庫#{@stock}個"` を返すようにしてください。

商品を1つ作り、`sell` を呼ぶ前後で `stock_info` を表示してください。

作成するファイル：
```text
stretch19.rb
```

表示例：
```text
りんご：在庫5個
りんご：在庫4個
```

実行するコマンド：
```bash
ruby stretch19.rb
```

<details>
<summary>解答例 (stretch19_answer.rb)</summary>

```ruby
# stretch19_answer.rb
class Product
  def initialize(name, stock)
    @name = name
    @stock = stock
  end

  def sell
    @stock = @stock - 1
  end

  def stock_info
    "#{@name}：在庫#{@stock}個"
  end
end

product = Product.new("りんご", 5)
puts product.stock_info
product.sell
puts product.stock_info
```

```bash
ruby stretch19_answer.rb
```

</details>

---

## 📝 20. `Counter` に回数を持たせ、呼び出すたびに増やす ( `stretch20.rb` )

`Counter` クラスを作り、`initialize` で `@count = 0` をセットしてください。`up` メソッドで `@count` を1増やし、`show` メソッドで `"カウント：#{@count}"` を返すようにしてください。

カウンターを1つ作り、`show` を表示してから `up` を3回呼び出して、その都度 `show` を表示してください。

作成するファイル：
```text
stretch20.rb
```

表示例：
```text
カウント：0
カウント：1
カウント：2
カウント：3
```

実行するコマンド：
```bash
ruby stretch20.rb
```

<details>
<summary>解答例 (stretch20_answer.rb)</summary>

```ruby
# stretch20_answer.rb
class Counter
  def initialize
    @count = 0
  end

  def up
    @count = @count + 1
  end

  def show
    "カウント：#{@count}"
  end
end

counter = Counter.new
puts counter.show
counter.up
puts counter.show
counter.up
puts counter.show
counter.up
puts counter.show
```

```bash
ruby stretch20_answer.rb
```

</details>

---

## 📝 21. `Book` インスタンスを配列に入れて一覧表示する ( `stretch21.rb` )

`Book` クラスに `initialize(title, author)` と `info`（`"#{@title}：#{@author}"` を返す）を作ってください。

本を3つ配列に入れ、`each` で `info` を一覧表示してください。

作成するファイル：
```text
stretch21.rb
```

表示例：
```text
Rubyプログラミング入門：まつもとゆきひろ
Railsガイド：DHH
アルゴリズム図鑑：石田保輝
```

実行するコマンド：
```bash
ruby stretch21.rb
```

<details>
<summary>解答例 (stretch21_answer.rb)</summary>

```ruby
# stretch21_answer.rb
class Book
  def initialize(title, author)
    @title = title
    @author = author
  end

  def info
    "#{@title}：#{@author}"
  end
end

books = [
  Book.new("Rubyプログラミング入門", "まつもとゆきひろ"),
  Book.new("Railsガイド", "DHH"),
  Book.new("アルゴリズム図鑑", "石田保輝")
]

books.each do |book|
  puts book.info
end
```

```bash
ruby stretch21_answer.rb
```

</details>

---

## 📝 22. `Movie` インスタンスを配列に入れて一覧表示する ( `stretch22.rb` )

`Movie` クラスに `initialize(title, duration)` と `info`（`"#{@title}：#{@duration}分"` を返す）を作ってください。

映画を3つ配列に入れ、`each` で `info` を一覧表示してください。

作成するファイル：
```text
stretch22.rb
```

表示例：
```text
バック・トゥ・ザ・フューチャー：116分
君の名は。：106分
千と千尋の神隠し：125分
```

実行するコマンド：
```bash
ruby stretch22.rb
```

<details>
<summary>解答例 (stretch22_answer.rb)</summary>

```ruby
# stretch22_answer.rb
class Movie
  def initialize(title, duration)
    @title = title
    @duration = duration
  end

  def info
    "#{@title}：#{@duration}分"
  end
end

movies = [
  Movie.new("バック・トゥ・ザ・フューチャー", 116),
  Movie.new("君の名は。", 106),
  Movie.new("千と千尋の神隠し", 125)
]

movies.each do |movie|
  puts movie.info
end
```

```bash
ruby stretch22_answer.rb
```

</details>

---

## 📝 23. `Task` インスタンスを配列に入れ、完了状態つきで表示する ( `stretch23.rb` )

`Task` クラスに `initialize(name)`、`@done = false`、`finish`、`status_message`（`"#{@name}：完了"` または `"#{@name}：未完了"`）を作ってください。

タスクを3つ配列に入れ、2つ目だけ `finish` してから `each` で `status_message` を表示してください。

作成するファイル：
```text
stretch23.rb
```

表示例：
```text
買い物に行く：未完了
レポートを書く：完了
部屋を片付ける：未完了
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
  def initialize(name)
    @name = name
    @done = false
  end

  def finish
    @done = true
  end

  def status_message
    if @done
      "#{@name}：完了"
    else
      "#{@name}：未完了"
    end
  end
end

task1 = Task.new("買い物に行く")
task2 = Task.new("レポートを書く")
task3 = Task.new("部屋を片付ける")

task2.finish

tasks = [task1, task2, task3]

tasks.each do |task|
  puts task.status_message
end
```

```bash
ruby stretch23_answer.rb
```

</details>

---

## 📝 24. `Product` インスタンスを配列に入れ、価格つきで表示する ( `stretch24.rb` )

`Product` クラスに `initialize(name, price)` と `info`（`"#{@name}：#{@price}円"` を返す）を作ってください。

商品を4つ配列に入れ、`each` で `info` を一覧表示してください。

作成するファイル：
```text
stretch24.rb
```

表示例：
```text
りんご：200円
バナナ：150円
みかん：100円
ぶどう：350円
```

実行するコマンド：
```bash
ruby stretch24.rb
```

<details>
<summary>解答例 (stretch24_answer.rb)</summary>

```ruby
# stretch24_answer.rb
class Product
  def initialize(name, price)
    @name = name
    @price = price
  end

  def info
    "#{@name}：#{@price}円"
  end
end

products = [
  Product.new("りんご", 200),
  Product.new("バナナ", 150),
  Product.new("みかん", 100),
  Product.new("ぶどう", 350)
]

products.each do |product|
  puts product.info
end
```

```bash
ruby stretch24_answer.rb
```

</details>

---

## 📝 25. `Student` インスタンスを配列に入れ、点数と合否を表示する ( `stretch25.rb` )

`Student` クラスに `initialize(name, score)` と `report`（`"#{@name}：#{@score}点（合格）"` または `"（不合格）"` を返す）を作ってください。

学生を4人配列に入れ、`each` で `report` を一覧表示してください。

作成するファイル：
```text
stretch25.rb
```

表示例：
```text
田中：80点（合格）
鈴木：55点（不合格）
佐藤：92点（合格）
山田：60点（合格）
```

実行するコマンド：
```bash
ruby stretch25.rb
```

<details>
<summary>解答例 (stretch25_answer.rb)</summary>

```ruby
# stretch25_answer.rb
class Student
  def initialize(name, score)
    @name = name
    @score = score
  end

  def report
    if @score >= 60
      "#{@name}：#{@score}点（合格）"
    else
      "#{@name}：#{@score}点（不合格）"
    end
  end
end

students = [
  Student.new("田中", 80),
  Student.new("鈴木", 55),
  Student.new("佐藤", 92),
  Student.new("山田", 60)
]

students.each do |student|
  puts student.report
end
```

```bash
ruby stretch25_answer.rb
```

</details>

---

## 📝 26. `Coupon` インスタンスを配列に入れ、使用状態を表示する ( `stretch26.rb` )

`Coupon` クラスに `initialize(name)`、`@used = false`、`use`、`status_message`（`"#{@name}：使用済み"` または `"#{@name}：未使用"`）を作ってください。

クーポンを3つ配列に入れ、2つ目だけ `use` してから `each` で `status_message` を一覧表示してください。

作成するファイル：
```text
stretch26.rb
```

表示例：
```text
10%OFFクーポン：未使用
送料無料クーポン：使用済み
500円引きクーポン：未使用
```

実行するコマンド：
```bash
ruby stretch26.rb
```

<details>
<summary>解答例 (stretch26_answer.rb)</summary>

```ruby
# stretch26_answer.rb
class Coupon
  def initialize(name)
    @name = name
    @used = false
  end

  def use
    @used = true
  end

  def status_message
    if @used
      "#{@name}：使用済み"
    else
      "#{@name}：未使用"
    end
  end
end

coupon1 = Coupon.new("10%OFFクーポン")
coupon2 = Coupon.new("送料無料クーポン")
coupon3 = Coupon.new("500円引きクーポン")

coupon2.use

coupons = [coupon1, coupon2, coupon3]

coupons.each do |coupon|
  puts coupon.status_message
end
```

```bash
ruby stretch26_answer.rb
```

</details>

---

## 📝 27. `Message` インスタンスを配列に入れ、既読状態を表示する ( `stretch27.rb` )

`Message` クラスに `initialize(body)`、`@read = false`、`read`、`status_message`（`"#{@body}：既読"` または `"#{@body}：未読"`）を作ってください。

メッセージを3つ配列に入れ、1つ目だけ `read` してから `each` で `status_message` を一覧表示してください。

作成するファイル：
```text
stretch27.rb
```

表示例：
```text
おはようございます：既読
ありがとうございます：未読
了解しました：未読
```

実行するコマンド：
```bash
ruby stretch27.rb
```

<details>
<summary>解答例 (stretch27_answer.rb)</summary>

```ruby
# stretch27_answer.rb
class Message
  def initialize(body)
    @body = body
    @read = false
  end

  def read
    @read = true
  end

  def status_message
    if @read
      "#{@body}：既読"
    else
      "#{@body}：未読"
    end
  end
end

msg1 = Message.new("おはようございます")
msg2 = Message.new("ありがとうございます")
msg3 = Message.new("了解しました")

msg1.read

messages = [msg1, msg2, msg3]

messages.each do |message|
  puts message.status_message
end
```

```bash
ruby stretch27_answer.rb
```

</details>

---

## 📝 28. `Seat` インスタンスを配列に入れ、予約状態を表示する ( `stretch28.rb` )

`Seat` クラスに `initialize(number)`、`@reserved = false`、`reserve`、`status_message`（`"#{@number}：予約済み"` または `"#{@number}：空席"`）を作ってください。

席を5つ配列に入れ、A2 と A5 だけ `reserve` してから `each` で `status_message` を一覧表示してください。

作成するファイル：
```text
stretch28.rb
```

表示例：
```text
A1：空席
A2：予約済み
A3：空席
A4：空席
A5：予約済み
```

実行するコマンド：
```bash
ruby stretch28.rb
```

<details>
<summary>解答例 (stretch28_answer.rb)</summary>

```ruby
# stretch28_answer.rb
class Seat
  def initialize(number)
    @number = number
    @reserved = false
  end

  def reserve
    @reserved = true
  end

  def status_message
    if @reserved
      "#{@number}：予約済み"
    else
      "#{@number}：空席"
    end
  end
end

seat1 = Seat.new("A1")
seat2 = Seat.new("A2")
seat3 = Seat.new("A3")
seat4 = Seat.new("A4")
seat5 = Seat.new("A5")

seat2.reserve
seat5.reserve

seats = [seat1, seat2, seat3, seat4, seat5]

seats.each do |seat|
  puts seat.status_message
end
```

```bash
ruby stretch28_answer.rb
```

</details>

---

## 📝 29. `Order` インスタンスを配列に入れ、支払い状態を表示する ( `stretch29.rb` )

`Order` クラスに `initialize(order_number)`、`@paid = false`、`pay`、`status_message`（`"#{@order_number}：支払い済み"` または `"#{@order_number}：未払い"`）を作ってください。

注文を3つ配列に入れ、2つ目だけ `pay` してから `each` で `status_message` を一覧表示してください。

作成するファイル：
```text
stretch29.rb
```

表示例：
```text
注文001：未払い
注文002：支払い済み
注文003：未払い
```

実行するコマンド：
```bash
ruby stretch29.rb
```

<details>
<summary>解答例 (stretch29_answer.rb)</summary>

```ruby
# stretch29_answer.rb
class Order
  def initialize(order_number)
    @order_number = order_number
    @paid = false
  end

  def pay
    @paid = true
  end

  def status_message
    if @paid
      "#{@order_number}：支払い済み"
    else
      "#{@order_number}：未払い"
    end
  end
end

order1 = Order.new("注文001")
order2 = Order.new("注文002")
order3 = Order.new("注文003")

order2.pay

orders = [order1, order2, order3]

orders.each do |order|
  puts order.status_message
end
```

```bash
ruby stretch29_answer.rb
```

</details>

---

## 📝 30. `Memo` の配列から固定メモだけ表示する ( `stretch30.rb` )

`Memo` クラスに `initialize(body)`、`@pinned = false`、`pin`、`pinned?`（`@pinned` を返す）、`body_message`（`"#{@body}"` を返す）を作ってください。

メモを3つ配列に入れ、1つ目だけ `pin` してください。`each` の中で `pinned?` が `true` のメモだけ `body_message` を表示してください。

作成するファイル：
```text
stretch30.rb
```

表示例：
```text
重要：明日の会議は10時から
```

実行するコマンド：
```bash
ruby stretch30.rb
```

<details>
<summary>解答例 (stretch30_answer.rb)</summary>

```ruby
# stretch30_answer.rb
class Memo
  def initialize(body)
    @body = body
    @pinned = false
  end

  def pin
    @pinned = true
  end

  def pinned?
    @pinned
  end

  def body_message
    @body
  end
end

memo1 = Memo.new("重要：明日の会議は10時から")
memo2 = Memo.new("牛乳を買う")
memo3 = Memo.new("本を返却する")

memo1.pin

memos = [memo1, memo2, memo3]

memos.each do |memo|
  if memo.pinned?
    puts memo.body_message
  end
end
```

```bash
ruby stretch30_answer.rb
```

</details>

---

## 📝 31. `Article` に `draft?` メソッドを作る ( `stretch31.rb` )

`Article` クラスに `initialize(title)`、`@published = false`、`publish`、`draft?`（公開前なら `true`、公開済みなら `false` を返す）を作ってください。

記事を1つ作り、`draft?` を表示してから `publish` し、もう一度 `draft?` を表示してください。

作成するファイル：
```text
stretch31.rb
```

表示例：
```text
true
false
```

実行するコマンド：
```bash
ruby stretch31.rb
```

<details>
<summary>解答例 (stretch31_answer.rb)</summary>

```ruby
# stretch31_answer.rb
class Article
  def initialize(title)
    @title = title
    @published = false
  end

  def publish
    @published = true
  end

  def draft?
    !@published
  end
end

article = Article.new("はじめての記事")
puts article.draft?
article.publish
puts article.draft?
```

```bash
ruby stretch31_answer.rb
```

</details>

---

## 📝 32. `Article` に `unpublish` を追加する ( `stretch32.rb` )

新しいファイルに `Article` クラスを書き、`initialize(title)`、`@published = false`、`publish`（`@published` を `true` に）、`unpublish`（`@published` を `false` に）、`status_message`（`"公開済み"` または `"下書き"`）を作ってください。

記事を1つ作り、公開 → 非公開 → 再公開の順に状態を表示してください。

作成するファイル：
```text
stretch32.rb
```

表示例：
```text
下書き
公開済み
下書き
公開済み
```

実行するコマンド：
```bash
ruby stretch32.rb
```

<details>
<summary>解答例 (stretch32_answer.rb)</summary>

```ruby
# stretch32_answer.rb
class Article
  def initialize(title)
    @title = title
    @published = false
  end

  def publish
    @published = true
  end

  def unpublish
    @published = false
  end

  def status_message
    if @published
      "公開済み"
    else
      "下書き"
    end
  end
end

article = Article.new("はじめての記事")
puts article.status_message
article.publish
puts article.status_message
article.unpublish
puts article.status_message
article.publish
puts article.status_message
```

```bash
ruby stretch32_answer.rb
```

</details>

---

## 📝 33. `Comment` クラスを作る ( `stretch33.rb` )

`Comment` クラスを作り、`initialize(poster, body)` で投稿者名と本文を受け取ってください。`info` メソッドで `"#{@poster}：#{@body}"` を返すようにしてください。

コメントを2つ作り、それぞれ `info` を表示してください。

作成するファイル：
```text
stretch33.rb
```

表示例：
```text
田中：Rubyは楽しいですね
佐藤：私も同感です
```

実行するコマンド：
```bash
ruby stretch33.rb
```

<details>
<summary>解答例 (stretch33_answer.rb)</summary>

```ruby
# stretch33_answer.rb
class Comment
  def initialize(poster, body)
    @poster = poster
    @body = body
  end

  def info
    "#{@poster}：#{@body}"
  end
end

comment1 = Comment.new("田中", "Rubyは楽しいですね")
comment2 = Comment.new("佐藤", "私も同感です")

puts comment1.info
puts comment2.info
```

```bash
ruby stretch33_answer.rb
```

</details>

---

## 📝 34. `Category` クラスを作る ( `stretch34.rb` )

`Category` クラスを作り、`initialize(name, description)` でカテゴリ名と説明文を受け取ってください。`info` メソッドで `"カテゴリ：#{@name}｜#{@description}"` を返すようにしてください。

カテゴリを2つ作り、それぞれ `info` を表示してください。

作成するファイル：
```text
stretch34.rb
```

表示例：
```text
カテゴリ：プログラミング｜コードの書き方を学ぶ
カテゴリ：デザイン｜見た目を整える技術
```

実行するコマンド：
```bash
ruby stretch34.rb
```

<details>
<summary>解答例 (stretch34_answer.rb)</summary>

```ruby
# stretch34_answer.rb
class Category
  def initialize(name, description)
    @name = name
    @description = description
  end

  def info
    "カテゴリ：#{@name}｜#{@description}"
  end
end

category1 = Category.new("プログラミング", "コードの書き方を学ぶ")
category2 = Category.new("デザイン", "見た目を整える技術")

puts category1.info
puts category2.info
```

```bash
ruby stretch34_answer.rb
```

</details>

---

## 📝 35. `Tag` クラスを作る ( `stretch35.rb` )

`Tag` クラスを作り、`initialize(name)` でタグ名を受け取ってください。`display` メソッドで `"##{@name}"` の形で返すようにしてください。

タグを3つ作り、それぞれ `display` を表示してください。

作成するファイル：
```text
stretch35.rb
```

表示例：
```text
#Ruby
#Rails
#プログラミング
```

実行するコマンド：
```bash
ruby stretch35.rb
```

<details>
<summary>解答例 (stretch35_answer.rb)</summary>

```ruby
# stretch35_answer.rb
class Tag
  def initialize(name)
    @name = name
  end

  def display
    "##{@name}"
  end
end

tag1 = Tag.new("Ruby")
tag2 = Tag.new("Rails")
tag3 = Tag.new("プログラミング")

puts tag1.display
puts tag2.display
puts tag3.display
```

```bash
ruby stretch35_answer.rb
```

</details>

---

## 📝 36. `UserProfile` クラスを作る ( `stretch36.rb` )

`UserProfile` クラスを作り、`initialize(name, bio, location)` で名前・自己紹介・居住地を受け取ってください。`display` メソッドで次の3行を1つの文字列として返すようにしてください。

```
名前：田中太郎
自己紹介：Rubyを勉強中です
居住地：東京
```

インスタンスを1つ作り、`puts` で表示してください。

作成するファイル：
```text
stretch36.rb
```

表示例：
```text
名前：田中太郎
自己紹介：Rubyを勉強中です
居住地：東京
```

実行するコマンド：
```bash
ruby stretch36.rb
```

<details>
<summary>解答例 (stretch36_answer.rb)</summary>

```ruby
# stretch36_answer.rb
class UserProfile
  def initialize(name, bio, location)
    @name = name
    @bio = bio
    @location = location
  end

  def display
    "名前：#{@name}\n自己紹介：#{@bio}\n居住地：#{@location}"
  end
end

profile = UserProfile.new("田中太郎", "Rubyを勉強中です", "東京")
puts profile.display
```

```bash
ruby stretch36_answer.rb
```

</details>

---

## 📝 37. `Event` クラスを作る ( `stretch37.rb` )

`Event` クラスを作り、`initialize(name, date, location)` でイベント名・日付・開催場所を受け取ってください。`info` メソッドで `"#{@name}｜#{@date}｜#{@location}"` を返すようにしてください。

イベントを2つ作り、それぞれ `info` を表示してください。

作成するファイル：
```text
stretch37.rb
```

表示例：
```text
Ruby勉強会｜2024-07-01｜渋谷
Rails入門勉強会｜2024-07-15｜新宿
```

実行するコマンド：
```bash
ruby stretch37.rb
```

<details>
<summary>解答例 (stretch37_answer.rb)</summary>

```ruby
# stretch37_answer.rb
class Event
  def initialize(name, date, location)
    @name = name
    @date = date
    @location = location
  end

  def info
    "#{@name}｜#{@date}｜#{@location}"
  end
end

event1 = Event.new("Ruby勉強会", "2024-07-01", "渋谷")
event2 = Event.new("Rails入門勉強会", "2024-07-15", "新宿")

puts event1.info
puts event2.info
```

```bash
ruby stretch37_answer.rb
```

</details>

---

## 📝 38. `Reservation` クラスを作る ( `stretch38.rb` )

`Reservation` クラスを作り、`initialize(name, count)` で予約者名と人数を受け取り、`@confirmed = false` をセットしてください。`confirm` メソッドで `@confirmed` を `true` にし、`status_message` メソッドで `"#{@name}：#{@count}名｜予約済み"` または `"#{@name}：#{@count}名｜未予約"` を返すようにしてください。

予約を1つ作り、`confirm` の前後で `status_message` を表示してください。

作成するファイル：
```text
stretch38.rb
```

表示例：
```text
田中：3名｜未予約
田中：3名｜予約済み
```

実行するコマンド：
```bash
ruby stretch38.rb
```

<details>
<summary>解答例 (stretch38_answer.rb)</summary>

```ruby
# stretch38_answer.rb
class Reservation
  def initialize(name, count)
    @name = name
    @count = count
    @confirmed = false
  end

  def confirm
    @confirmed = true
  end

  def status_message
    if @confirmed
      "#{@name}：#{@count}名｜予約済み"
    else
      "#{@name}：#{@count}名｜未予約"
    end
  end
end

reservation = Reservation.new("田中", 3)
puts reservation.status_message
reservation.confirm
puts reservation.status_message
```

```bash
ruby stretch38_answer.rb
```

</details>

---

## 📝 39. `CartItem` クラスを作る ( `stretch39.rb` )

`CartItem` クラスを作り、`initialize(name, price, quantity)` で商品名・単価・個数を受け取ってください。`subtotal` メソッドで `@price * @quantity` を返し、`info` メソッドで `"#{@name}：#{@price}円 × #{@quantity}個 = #{subtotal}円"` を返すようにしてください。

カートアイテムを1つ作り、`info` を表示してください。

作成するファイル：
```text
stretch39.rb
```

表示例：
```text
りんご：200円 × 3個 = 600円
```

実行するコマンド：
```bash
ruby stretch39.rb
```

<details>
<summary>解答例 (stretch39_answer.rb)</summary>

```ruby
# stretch39_answer.rb
class CartItem
  def initialize(name, price, quantity)
    @name = name
    @price = price
    @quantity = quantity
  end

  def subtotal
    @price * @quantity
  end

  def info
    "#{@name}：#{@price}円 × #{@quantity}個 = #{subtotal}円"
  end
end

item = CartItem.new("りんご", 200, 3)
puts item.info
```

```bash
ruby stretch39_answer.rb
```

</details>

---

## 📝 40. `Review` クラスを作る ( `stretch40.rb` )

`Review` クラスを作り、`initialize(product_name, score, comment)` で商品名・点数・コメントを受け取ってください。`info` メソッドで `"商品：#{@product_name}｜#{@score}点｜#{@comment}"` を返すようにしてください。

レビューを2つ作り、それぞれ `info` を表示してください。

作成するファイル：
```text
stretch40.rb
```

表示例：
```text
商品：Rubyテキスト｜5点｜とても分かりやすかった
商品：Railsガイド｜3点｜少し難しかった
```

実行するコマンド：
```bash
ruby stretch40.rb
```

<details>
<summary>解答例 (stretch40_answer.rb)</summary>

```ruby
# stretch40_answer.rb
class Review
  def initialize(product_name, score, comment)
    @product_name = product_name
    @score = score
    @comment = comment
  end

  def info
    "商品：#{@product_name}｜#{@score}点｜#{@comment}"
  end
end

review1 = Review.new("Rubyテキスト", 5, "とても分かりやすかった")
review2 = Review.new("Railsガイド", 3, "少し難しかった")

puts review1.info
puts review2.info
```

```bash
ruby stretch40_answer.rb
```

</details>

---

## 📝 41. `CartItem` を複数作り、各商品の小計を一覧表示する ( `stretch41.rb` )

新しいファイルに問39と同じ `CartItem` クラスをもう一度書き、カートアイテムを3つ配列に入れて、`each` で `info` を一覧表示してください。

作成するファイル：
```text
stretch41.rb
```

表示例：
```text
りんご：200円 × 3個 = 600円
バナナ：150円 × 2個 = 300円
みかん：100円 × 5個 = 500円
```

実行するコマンド：
```bash
ruby stretch41.rb
```

<details>
<summary>解答例 (stretch41_answer.rb)</summary>

```ruby
# stretch41_answer.rb
class CartItem
  def initialize(name, price, quantity)
    @name = name
    @price = price
    @quantity = quantity
  end

  def subtotal
    @price * @quantity
  end

  def info
    "#{@name}：#{@price}円 × #{@quantity}個 = #{subtotal}円"
  end
end

items = [
  CartItem.new("りんご", 200, 3),
  CartItem.new("バナナ", 150, 2),
  CartItem.new("みかん", 100, 5)
]

items.each do |item|
  puts item.info
end
```

```bash
ruby stretch41_answer.rb
```

</details>

---

## 📝 42. `CartItem` の配列から合計金額を計算する ( `stretch42.rb` )

新しいファイルに問39と同じ `CartItem` クラスをもう一度書き、カートアイテムを3つ配列に入れてください。`each` で各商品の `info` を表示しながら、合計金額も計算して最後に表示してください。

合計金額は、`each` の前に変数 `total = 0` を作り、`each` の中で `total = total + item.subtotal` を加算していく方法で求めてください。

作成するファイル：
```text
stretch42.rb
```

表示例：
```text
りんご：200円 × 3個 = 600円
バナナ：150円 × 2個 = 300円
みかん：100円 × 5個 = 500円
合計：1400円
```

実行するコマンド：
```bash
ruby stretch42.rb
```

<details>
<summary>解答例 (stretch42_answer.rb)</summary>

```ruby
# stretch42_answer.rb
class CartItem
  def initialize(name, price, quantity)
    @name = name
    @price = price
    @quantity = quantity
  end

  def subtotal
    @price * @quantity
  end

  def info
    "#{@name}：#{@price}円 × #{@quantity}個 = #{subtotal}円"
  end
end

items = [
  CartItem.new("りんご", 200, 3),
  CartItem.new("バナナ", 150, 2),
  CartItem.new("みかん", 100, 5)
]

total = 0

items.each do |item|
  puts item.info
  total = total + item.subtotal
end

puts "合計：#{total}円"
```

```bash
ruby stretch42_answer.rb
```

</details>

---

## 📝 43. `Review` を複数作り、高評価のものに「高評価」と表示する ( `stretch43.rb` )

新しいファイルに問40と同じ `Review` クラスをもう一度書き、`rating_message` メソッドを追加してください。`@score` が4以上なら `"#{@product_name}：#{@score}点（高評価）"`、そうでなければ `"#{@product_name}：#{@score}点"` を返すようにしてください。

レビューを3つ配列に入れ、`each` で `rating_message` を一覧表示してください。

作成するファイル：
```text
stretch43.rb
```

表示例：
```text
Rubyテキスト：5点（高評価）
Railsガイド：3点
アルゴリズム図鑑：4点（高評価）
```

実行するコマンド：
```bash
ruby stretch43.rb
```

<details>
<summary>解答例 (stretch43_answer.rb)</summary>

```ruby
# stretch43_answer.rb
class Review
  def initialize(product_name, score, comment)
    @product_name = product_name
    @score = score
    @comment = comment
  end

  def rating_message
    if @score >= 4
      "#{@product_name}：#{@score}点（高評価）"
    else
      "#{@product_name}：#{@score}点"
    end
  end
end

reviews = [
  Review.new("Rubyテキスト", 5, "とても分かりやすかった"),
  Review.new("Railsガイド", 3, "少し難しかった"),
  Review.new("アルゴリズム図鑑", 4, "図が見やすい")
]

reviews.each do |review|
  puts review.rating_message
end
```

```bash
ruby stretch43_answer.rb
```

</details>

---

## 📝 44. `Event` を複数作り、開催場所つきの一覧を表示する ( `stretch44.rb` )

新しいファイルに問37と同じ `Event` クラスをもう一度書き、`location_info` メソッドを追加してください。`"#{@name}｜#{@location}"` を返すようにしてください。

イベントを3つ配列に入れ、`each` で `location_info` を一覧表示してください。

作成するファイル：
```text
stretch44.rb
```

表示例：
```text
Ruby勉強会｜渋谷
Rails入門勉強会｜新宿
プログラミング体験会｜池袋
```

実行するコマンド：
```bash
ruby stretch44.rb
```

<details>
<summary>解答例 (stretch44_answer.rb)</summary>

```ruby
# stretch44_answer.rb
class Event
  def initialize(name, date, location)
    @name = name
    @date = date
    @location = location
  end

  def location_info
    "#{@name}｜#{@location}"
  end
end

events = [
  Event.new("Ruby勉強会", "2024-07-01", "渋谷"),
  Event.new("Rails入門勉強会", "2024-07-15", "新宿"),
  Event.new("プログラミング体験会", "2024-07-20", "池袋")
]

events.each do |event|
  puts event.location_info
end
```

```bash
ruby stretch44_answer.rb
```

</details>

---

## 📝 45. `Reservation` を複数作り、状態つきで一覧表示する ( `stretch45.rb` )

新しいファイルに問38と同じ `Reservation` クラスをもう一度書き、予約を3つ配列に入れてください。1つ目と3つ目だけ `confirm` してから、`each` で `status_message` を一覧表示してください。

作成するファイル：
```text
stretch45.rb
```

表示例：
```text
田中：3名｜予約済み
鈴木：2名｜未予約
佐藤：5名｜予約済み
```

実行するコマンド：
```bash
ruby stretch45.rb
```

<details>
<summary>解答例 (stretch45_answer.rb)</summary>

```ruby
# stretch45_answer.rb
class Reservation
  def initialize(name, count)
    @name = name
    @count = count
    @confirmed = false
  end

  def confirm
    @confirmed = true
  end

  def status_message
    if @confirmed
      "#{@name}：#{@count}名｜予約済み"
    else
      "#{@name}：#{@count}名｜未予約"
    end
  end
end

res1 = Reservation.new("田中", 3)
res2 = Reservation.new("鈴木", 2)
res3 = Reservation.new("佐藤", 5)

res1.confirm
res3.confirm

reservations = [res1, res2, res3]

reservations.each do |res|
  puts res.status_message
end
```

```bash
ruby stretch45_answer.rb
```

</details>

---

## 📝 46. `Product` に在庫切れ判定を追加する ( `stretch46.rb` )

`Product` クラスに `initialize(name, stock)` と `sold_out?` メソッドを作ってください。`sold_out?` は `@stock` が0なら `true`、1以上なら `false` を返すようにしてください。`status_message` メソッドで `"#{@name}：在庫切れ"` または `"#{@name}：在庫あり"` を返すようにしてください。

商品を2つ作り（在庫あり・在庫切れ各1つ）、それぞれ `status_message` を表示してください。

作成するファイル：
```text
stretch46.rb
```

表示例：
```text
りんご：在庫あり
バナナ：在庫切れ
```

実行するコマンド：
```bash
ruby stretch46.rb
```

<details>
<summary>解答例 (stretch46_answer.rb)</summary>

```ruby
# stretch46_answer.rb
class Product
  def initialize(name, stock)
    @name = name
    @stock = stock
  end

  def sold_out?
    @stock == 0
  end

  def status_message
    if sold_out?
      "#{@name}：在庫切れ"
    else
      "#{@name}：在庫あり"
    end
  end
end

product1 = Product.new("りんご", 5)
product2 = Product.new("バナナ", 0)

puts product1.status_message
puts product2.status_message
```

```bash
ruby stretch46_answer.rb
```

</details>

---

## 📝 47. 在庫切れの商品だけ「在庫切れ」と表示する ( `stretch47.rb` )

新しいファイルに問46と同じ `Product` クラスをもう一度書き、商品を4つ配列に入れてください。`each` の中で `sold_out?` が `true` の商品だけ `status_message` を表示してください。

作成するファイル：
```text
stretch47.rb
```

表示例：
```text
バナナ：在庫切れ
ぶどう：在庫切れ
```

実行するコマンド：
```bash
ruby stretch47.rb
```

<details>
<summary>解答例 (stretch47_answer.rb)</summary>

```ruby
# stretch47_answer.rb
class Product
  def initialize(name, stock)
    @name = name
    @stock = stock
  end

  def sold_out?
    @stock == 0
  end

  def status_message
    if sold_out?
      "#{@name}：在庫切れ"
    else
      "#{@name}：在庫あり"
    end
  end
end

products = [
  Product.new("りんご", 5),
  Product.new("バナナ", 0),
  Product.new("みかん", 3),
  Product.new("ぶどう", 0)
]

products.each do |product|
  if product.sold_out?
    puts product.status_message
  end
end
```

```bash
ruby stretch47_answer.rb
```

</details>

---

## 📝 48. 公開済みの `Article` だけ一覧表示する ( `stretch48.rb` )

`Article` クラスに `initialize(title)`、`@published = false`、`publish`、`published?`、`title_message`（`"#{@title}"` を返す）を作ってください。

記事を4つ配列に入れ、2つ目と4つ目だけ `publish` してから、`each` の中で `published?` が `true` の記事だけ `title_message` を表示してください。

作成するファイル：
```text
stretch48.rb
```

表示例：
```text
Railsとは
クラスとは
```

実行するコマンド：
```bash
ruby stretch48.rb
```

<details>
<summary>解答例 (stretch48_answer.rb)</summary>

```ruby
# stretch48_answer.rb
class Article
  def initialize(title)
    @title = title
    @published = false
  end

  def publish
    @published = true
  end

  def published?
    @published
  end

  def title_message
    @title
  end
end

article1 = Article.new("はじめての記事")
article2 = Article.new("Railsとは")
article3 = Article.new("Rubyを学ぶ")
article4 = Article.new("クラスとは")

article2.publish
article4.publish

articles = [article1, article2, article3, article4]

articles.each do |article|
  if article.published?
    puts article.title_message
  end
end
```

```bash
ruby stretch48_answer.rb
```

</details>

---

## 📝 49. 未完了の `Task` だけ一覧表示する ( `stretch49.rb` )

`Task` クラスに `initialize(name)`、`@done = false`、`finish`、`done?`、`name_message`（`"#{@name}"` を返す）を作ってください。

タスクを4つ配列に入れ、1つ目と3つ目だけ `finish` してから、`each` の中で `done?` が `false` のタスクだけ `name_message` を表示してください。

作成するファイル：
```text
stretch49.rb
```

表示例：
```text
レポートを書く
部屋を片付ける
```

実行するコマンド：
```bash
ruby stretch49.rb
```

<details>
<summary>解答例 (stretch49_answer.rb)</summary>

```ruby
# stretch49_answer.rb
class Task
  def initialize(name)
    @name = name
    @done = false
  end

  def finish
    @done = true
  end

  def done?
    @done
  end

  def name_message
    @name
  end
end

task1 = Task.new("買い物に行く")
task2 = Task.new("レポートを書く")
task3 = Task.new("メールを送る")
task4 = Task.new("部屋を片付ける")

task1.finish
task3.finish

tasks = [task1, task2, task3, task4]

tasks.each do |task|
  if !task.done?
    puts task.name_message
  end
end
```

```bash
ruby stretch49_answer.rb
```

</details>

---

## 📝 50. `Article` と `Comment` を別々のクラスで表現する ( `stretch50.rb` )

`Article` クラスに `initialize(title)` と `title_message`（`"記事：#{@title}"` を返す）を作ってください。`Comment` クラスに `initialize(body)` と `body_message`（`"コメント：#{@body}"` を返す）を作ってください。

記事を1つ、コメントを2つ作り、記事のタイトルを表示してからコメントを順番に表示してください。

作成するファイル：
```text
stretch50.rb
```

表示例：
```text
記事：Rubyを学ぼう
コメント：わかりやすかったです
コメント：ためになりました
```

実行するコマンド：
```bash
ruby stretch50.rb
```

<details>
<summary>解答例 (stretch50_answer.rb)</summary>

```ruby
# stretch50_answer.rb
class Article
  def initialize(title)
    @title = title
  end

  def title_message
    "記事：#{@title}"
  end
end

class Comment
  def initialize(body)
    @body = body
  end

  def body_message
    "コメント：#{@body}"
  end
end

article = Article.new("Rubyを学ぼう")
comment1 = Comment.new("わかりやすかったです")
comment2 = Comment.new("ためになりました")

puts article.title_message

comments = [comment1, comment2]
comments.each do |comment|
  puts comment.body_message
end
```

```bash
ruby stretch50_answer.rb
```

</details>

---

課題50まで終わったら、第8回の練習はすべて完了です。お疲れさまでした。
