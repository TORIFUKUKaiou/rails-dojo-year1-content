# 第15回：前期期末試験

> [!IMPORTANT]
> この試験は、前期に学んだ Ruby、Web の仕組み、Ruby on Rails の基礎を確認するための試験です。
> 第1部と第2部を、上から順に取り組んでください。

## 試験の進め方

- 試験時間は 180 分です。
- この試験は全 30 点です。第1部は選択式 29 問（各1点）、第2部は実技 1 問（1点）です。
- 第1部は、教員から指定された Google フォームに回答してください。
- 第2部は、Rails の scaffold を使って Web アプリケーションを作る実技試験です。実技を完了したら、Google フォームで「できた」または「できなかった」を選びます。
- 講義資料、過去の演習ファイル、インターネット検索、生成AIは使って構いません。
- コードの動きを確かめたいときは、Codespaces で短い Ruby プログラムを作り、実際に実行して確認して構いません。

---

## Codespace を起動する

第2部で Rails を使うため、最初に Codespace を起動します。

> [!IMPORTANT]
> <code>Create codespace</code> をそのままクリックせず、三点リーダー <code>...</code> から <code>New with options...</code> を選びます。
> Rails が入っている環境を指定して Codespace を作成してください。

### Step 0-1：GitHub のリポジトリを開く

ブラウザで次のリポジトリを開きます。

- [TORIFUKUKaiou/rails-tutorial-companion](https://github.com/TORIFUKUKaiou/rails-tutorial-companion)

GitHub にログインしていない場合は、ログインしてください。

リポジトリの画面が表示されれば次へ進みます。

### Step 0-2：Codespaces の画面を開く

リポジトリ画面の右上付近にある、緑色の <code>Code</code> ボタンをクリックします。

表示されたメニューの中で、<code>Codespaces</code> タブをクリックします。

### Step 0-3：作成メニューを開く

<code>Codespaces</code> タブの中にある三点リーダー <code>...</code> をクリックします。

表示されたメニューから、次をクリックします。

~~~text
New with options...
~~~

![](../images/codespaces-Newwithoptions.png)

### Step 0-4：Rails 用の Dev Container を選ぶ

設定画面が表示されたら、<code>Dev container configuration</code> を探します。

<code>Dev container configuration</code> で、次を選びます。

~~~text
Rails 8.0.2.1 Ready
~~~

![](../images/codespaces-rails-ready.png)

> [!IMPORTANT]
> 必ず <code>Rails 8.0.2.1 Ready</code> を選びます。
> Ruby だけの環境を選ぶと、第2部で使う Rails が入っていません。

### Step 0-5：Codespace を作成する

設定画面で Codespace を作成するボタンをクリックします。

ボタン名は、画面によって次のどちらかで表示されます。

~~~text
Create codespace
~~~

または、

~~~text
Create codespace on main
~~~

Codespace の作成が始まったら、エディタのような画面が開くまで待ちます。

下の方にターミナルが表示されれば準備できています。ターミナルが表示されていない場合は、画面上部のメニューから次を選びます。

~~~text
Terminal → New Terminal
~~~

### Step 0-6：Rails のバージョンを確認する

ターミナルで次のコマンドを実行します。

~~~bash
rails _8.0.2.1_ --version
~~~

次のように表示されることを確認します。

~~~text
Rails 8.0.2.1
~~~

> [!IMPORTANT]
> この試験では Rails <code>8.0.2.1</code> を使います。
> 違うバージョンが表示された場合は、作業を進める前に教員へ確認してください。

---

# 第1部：選択式問題（全29問・各1点）

各問について、最も適切な選択肢を1つ選んでください。

## A. Ruby 基礎：変数・演算（問1〜問4）

### 問1

次の Ruby プログラムを実行したとき、ターミナルに出力される値はどれですか。

~~~ruby
amount = 450
coupon = 120
amount = amount - coupon
coupon = amount + 50

puts coupon
~~~

1. <code>330</code>
2. <code>380</code>
3. <code>450</code>
4. <code>570</code>

<details>
<summary>解答・解説</summary>

**解答：2**

3行目で <code>amount</code> は <code>450 - 120</code> により <code>330</code> になります。4行目で <code>coupon</code> には <code>330 + 50</code> の <code>380</code> が代入されます。

</details>

### 問2

次の Ruby プログラムを実行したとき、出力される結果はどれですか。

~~~ruby
student = "佐藤"

puts "こんにちは、#{student}さん"
puts 'こんにちは、#{student}さん'
~~~

1. <code>こんにちは、佐藤さん</code> が2行出力される。
2. <code>こんにちは、#{student}さん</code> が2行出力される。
3. 1行目に <code>こんにちは、佐藤さん</code>、2行目に <code>こんにちは、#{student}さん</code> が出力される。
4. エラーになり、何も出力されない。

<details>
<summary>解答・解説</summary>

**解答：3**

ダブルクォーテーションで囲んだ文字列では、<code>#{}</code> による式展開が行われます。シングルクォーテーションで囲んだ文字列では式展開されないため、<code>#{student}</code> の文字がそのまま出力されます。

</details>

### 問3

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
number = 19
divider = 4

puts number / divider
~~~

1. <code>4</code>
2. <code>4.75</code>
3. <code>4.0</code>
4. エラーになる。

<details>
<summary>解答・解説</summary>

**解答：1**

<code>19</code> と <code>4</code> はどちらも整数です。Ruby で整数どうしを割ると、結果も整数になり、小数点以下は切り捨てられます。そのため <code>19 / 4</code> は <code>4</code> です。

</details>

### 問4

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
price = 750
count = 3
shipping_fee = 200
total = price * count + shipping_fee

puts total
~~~

1. <code>950</code>
2. <code>2250</code>
3. <code>2450</code>
4. <code>2650</code>

<details>
<summary>解答・解説</summary>

**解答：3**

<code>price * count</code> は <code>750 * 3</code> なので <code>2250</code> です。そこへ送料の <code>200</code> を足すため、<code>total</code> は <code>2450</code> になります。

</details>

---

## B. Ruby 基礎：条件分岐（問5〜問8）

### 問5

次の Ruby プログラムを実行したとき、出力される文字はどれですか。

~~~ruby
score = 85

if score >= 60
  puts "C"
elsif score >= 80
  puts "B"
else
  puts "A"
end
~~~

1. <code>A</code>
2. <code>B</code>
3. <code>C</code>
4. <code>B</code> と <code>C</code> の両方

<details>
<summary>解答・解説</summary>

**解答：3**

<code>if</code>、<code>elsif</code>、<code>else</code> は上から順に条件を確認します。<code>85 >= 60</code> は真なので、最初の <code>puts "C"</code> が実行されます。その後の <code>elsif</code> は確認されません。

</details>

### 問6

次の Ruby プログラムを実行したとき、出力される結果はどれですか。

~~~ruby
has_reservation = false
is_member = true

if has_reservation && is_member
  puts "入場できます（会員料金）"
elsif has_reservation || is_member
  puts "入場できます（通常料金）"
else
  puts "入場できません"
end
~~~

1. 入場できます（会員料金）
2. 入場できます（通常料金）
3. 入場できません
4. エラーになる

<details>
<summary>解答・解説</summary>

**解答：2**

<code>&&</code> は両方が <code>true</code> のときだけ真です。今回は予約がないため、最初の条件は偽です。<code>||</code> はどちらか一方が <code>true</code> なら真であり、<code>is_member</code> が <code>true</code> なので、通常料金のメッセージが出力されます。

</details>

### 問7

次の Ruby プログラムを実行したとき、出力される結果はどれですか。

~~~ruby
memo = nil

if memo
  puts "メモがあります"
else
  puts "メモがありません"
end
~~~

1. メモがあります
2. メモがありません
3. 何も表示されずに終了する
4. エラーになる

<details>
<summary>解答・解説</summary>

**解答：2**

Ruby では <code>false</code> と <code>nil</code> だけが偽として扱われます。<code>memo</code> には <code>nil</code> が入っているため、<code>else</code> 側が実行されます。

</details>

### 問8

次の条件式のうち、結果が <code>true</code> になるものはどれですか。

1. <code>7 &lt; 7</code>
2. <code>"Ruby" == "ruby"</code>
3. <code>!false</code>
4. <code>12 != 12</code>

<details>
<summary>解答・解説</summary>

**解答：3**

<code>7 &lt; 7</code> は成り立たず、文字列の比較では大文字と小文字を区別します。<code>12 != 12</code> も成り立ちません。<code>!false</code> は <code>false</code> を否定するため <code>true</code> です。

</details>

---

## C. Ruby 基礎：繰り返し（問9〜問12）

### 問9

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
total = 0

4.times do |i|
  total += i + 1
end

puts total
~~~

1. <code>4</code>
2. <code>6</code>
3. <code>10</code>
4. <code>16</code>

<details>
<summary>解答・解説</summary>

**解答：3**

<code>4.times</code> のブロック変数 <code>i</code> は <code>0</code>、<code>1</code>、<code>2</code>、<code>3</code> と変わります。足している値は <code>i + 1</code> なので、<code>1 + 2 + 3 + 4</code> の <code>10</code> になります。

</details>

### 問10

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
sum = 0

[2, 4, 6].each do |number|
  sum += number
end

puts sum
~~~

1. <code>6</code>
2. <code>12</code>
3. <code>24</code>
4. エラーになる

<details>
<summary>解答・解説</summary>

**解答：2**

<code>each</code> は配列の要素を1つずつ <code>number</code> に入れて繰り返します。<code>sum</code> には <code>2</code>、<code>4</code>、<code>6</code> が順に足されるため、結果は <code>12</code> です。

</details>

### 問11

次の Ruby プログラムを実行したとき、出力される結果はどれですか。

~~~ruby
numbers = [1, 2, 3, 4, 5]
squares = []

numbers.each do |number|
  if number % 2 == 1
    squares << number * number
  end
end

p squares
~~~

1. <code>[1, 4, 9, 16, 25]</code>
2. <code>[2, 4]</code>
3. <code>[1, 3, 5]</code>
4. <code>[1, 9, 25]</code>

<details>
<summary>解答・解説</summary>

**解答：4**

<code>number % 2 == 1</code> は、<code>number</code> を2で割った余りが1、つまり奇数であるかを確認する条件です。奇数の <code>1</code>、<code>3</code>、<code>5</code> だけが選ばれ、それぞれの2乗である <code>1</code>、<code>9</code>、<code>25</code> が <code>squares</code> に追加されます。

</details>

### 問12

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
count = 0

4.times do
  count += 2
end

puts count
~~~

1. <code>0</code>
2. <code>2</code>
3. <code>4</code>
4. <code>8</code>

<details>
<summary>解答・解説</summary>

**解答：4**

ブロック変数を書かなくても、<code>4.times</code> の中の処理は4回実行されます。<code>count</code> は <code>2</code> ずつ4回増えるため、<code>8</code> です。

</details>

---

## D. Ruby 基礎：配列（問13〜問16）

### 問13

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
fruits = ["りんご", "みかん", "ぶどう"]

puts fruits[1]
~~~

1. りんご
2. みかん
3. ぶどう
4. エラーになる

<details>
<summary>解答・解説</summary>

**解答：2**

配列の番号（添字）は <code>0</code> から始まります。<code>fruits[0]</code> がりんご、<code>fruits[1]</code> がみかんです。

</details>

### 問14

配列 <code>items = ["ノート", "ペン"]</code> の末尾に <code>"消しゴム"</code> を追加するコードとして、正しいものはどれですか。

1. <code>items &lt;&lt; "消しゴム"</code>
2. <code>items.add("消しゴム")</code>
3. <code>items = "消しゴム"</code>
4. <code>items[0] = "消しゴム"</code>

<details>
<summary>解答・解説</summary>

**解答：1**

<code>&lt;&lt;</code> は、配列の末尾に要素を追加する書き方です。<code>items.add</code> という Array のメソッドはありません。4番は追加ではなく、最初の要素を上書きします。

</details>

### 問15

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
members = ["A", "B", "C", "D"]

puts members.length - 1
~~~

1. <code>2</code>
2. <code>3</code>
3. <code>4</code>
4. <code>D</code>

<details>
<summary>解答・解説</summary>

**解答：2**

<code>members.length</code> は配列に入っている要素の数で、<code>4</code> です。そこから <code>1</code> を引くため、出力される値は <code>3</code> です。

</details>

### 問16

次の Ruby プログラムを実行したとき、出力される結果はどれですか。

~~~ruby
scores = [70, 80, 90]
scores[2] = 100

p scores
~~~

1. <code>[100, 80, 90]</code>
2. <code>[70, 100, 90]</code>
3. <code>[70, 80, 100]</code>
4. <code>[70, 80, 90, 100]</code>

<details>
<summary>解答・解説</summary>

**解答：3**

<code>scores[2]</code> は配列の3番目の要素です。<code>= 100</code> は末尾に追加するのではなく、3番目の <code>90</code> を <code>100</code> へ書き換えます。

</details>

---

## E. Ruby 基礎：ハッシュ（問17〜問20）

### 問17

作品名を <code>"夏休みの映画"</code>、上映時間を <code>120</code> として、<code>"title"</code> と <code>"minutes"</code> をキーにしたハッシュを作るコードとして正しいものはどれですか。

1. <code>movie = ["title", "夏休みの映画", "minutes", 120]</code>
2. <code>movie = { "title" =&gt; "夏休みの映画", "minutes" =&gt; 120 }</code>
3. <code>movie = { "夏休みの映画" =&gt; "title", 120 =&gt; "minutes" }</code>
4. <code>movie = { "title" = "夏休みの映画", "minutes" = 120 }</code>

<details>
<summary>解答・解説</summary>

**解答：2**

ハッシュでは、<code>キー =&gt; 値</code> の形で対応するデータを入れます。<code>"title"</code> がキー、<code>"夏休みの映画"</code> が値です。

</details>

### 問18

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
profile = { "name" => "田中", "club" => "写真部" }

puts profile["club"]
~~~

1. 田中
2. 写真部
3. club
4. エラーになる

<details>
<summary>解答・解説</summary>

**解答：2**

<code>profile["club"]</code> は、<code>"club"</code> というキーに対応する値を取り出します。その値は <code>"写真部"</code> です。

</details>

### 問19

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
classes = [
  { "name" => "1A", "members" => ["佐藤", "鈴木"] },
  { "name" => "1B", "members" => ["田中"] }
]

puts classes[0]["members"][1]
~~~

1. 1A
2. 佐藤
3. 鈴木
4. 田中

<details>
<summary>解答・解説</summary>

**解答：3**

<code>classes[0]</code> で最初のハッシュを取り出します。そこから <code>"members"</code> の配列を取り出し、<code>[1]</code> で2番目の要素を選ぶため、<code>"鈴木"</code> が出力されます。

</details>

### 問20

ハッシュ <code>profile = { "name" =&gt; "森" }</code> に、<code>"grade"</code> をキー、<code>1</code> を値として追加するコードはどれですか。

1. <code>profile.add("grade" =&gt; 1)</code>
2. <code>profile &lt;&lt; { "grade" =&gt; 1 }</code>
3. <code>profile["grade"] = 1</code>
4. <code>profile.push("grade", 1)</code>

<details>
<summary>解答・解説</summary>

**解答：3**

ハッシュにキーと値を追加・更新するときは、<code>ハッシュ名["キー"] = 値</code> の形で書きます。

</details>

---

## F. Ruby 基礎：メソッドとクラス（問21〜問26）

### 問21

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
def calculate(number)
  number * 3
  number + 4
end

puts calculate(6)
~~~

1. <code>6</code>
2. <code>10</code>
3. <code>18</code>
4. <code>22</code>

<details>
<summary>解答・解説</summary>

**解答：2**

Ruby のメソッドでは、<code>return</code> を書かない場合、最後に評価された式の値が戻り値になります。<code>number * 3</code> ではなく、最後の <code>number + 4</code> が使われるため、<code>6 + 4</code> の <code>10</code> が出力されます。

</details>

### 問22

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
def greeting(name = "ゲスト")
  "こんにちは、#{name}さん"
end

puts greeting
~~~

1. こんにちは、ゲストさん
2. こんにちは、さん
3. 引数エラーになる
4. 何も表示されない

<details>
<summary>解答・解説</summary>

**解答：1**

<code>name = "ゲスト"</code> は、引数が渡されなかった場合に使う初期値です。<code>greeting</code> を引数なしで呼び出すと、<code>name</code> には <code>"ゲスト"</code> が入ります。

</details>

### 問23

Ruby のメソッドについて、正しい説明はどれですか。

1. <code>def</code> で始めたメソッド定義は、<code>end</code> で閉じる。
2. メソッドはプログラムを起動したときに1回だけ自動で実行される。
3. メソッドに引数として値を渡すことはできない。
4. メソッドの戻り値を使うには、必ず <code>return</code> を書かなければならない。

<details>
<summary>解答・解説</summary>

**解答：1**

メソッドは <code>def メソッド名</code> で定義を始め、<code>end</code> で定義を終えます。メソッドは呼び出したときに実行され、引数を受け取れます。また、Ruby では <code>return</code> を書かなくても最後に評価された値が戻り値になります。

</details>

### 問24

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
class Lamp
  def initialize(color)
    @color = color
  end

  def color
    @color
  end
end

lamp = Lamp.new("青")
puts lamp.color
~~~

1. 青
2. color
3. nil
4. エラーになる

<details>
<summary>解答・解説</summary>

**解答：1**

<code>Lamp.new("青")</code> により <code>initialize</code> が呼ばれ、インスタンス変数 <code>@color</code> に <code>"青"</code> が入ります。<code>color</code> メソッドは <code>@color</code> を戻すので、<code>青</code> が出力されます。

</details>

### 問25

次のうち、<code>initialize</code> メソッドが自動的に実行されるタイミングとして正しいものはどれですか。

1. Ruby のプログラムを起動した直後
2. クラスの中に新しいメソッドを書いたとき
3. <code>クラス名.new</code> でインスタンスを作ったとき
4. インスタンスを削除したとき

<details>
<summary>解答・解説</summary>

**解答：3**

<code>initialize</code> は初期化メソッドです。<code>Lamp.new</code> のように <code>new</code> で新しいインスタンスを作ると、自動的に呼び出されます。

</details>

### 問26

次の Ruby プログラムを実行したとき、出力される値はどれですか。

~~~ruby
class Point
  def initialize
    @value = 10
  end

  def add(number)
    @value += number
  end

  def show
    puts @value
  end
end

point = Point.new
point.add(5)
point.add(2)
point.show
~~~

1. <code>10</code>
2. <code>12</code>
3. <code>15</code>
4. <code>17</code>

<details>
<summary>解答・解説</summary>

**解答：4**

<code>Point.new</code> の時点で <code>@value</code> は <code>10</code> です。<code>add(5)</code> で <code>15</code>、続く <code>add(2)</code> で <code>17</code> になり、<code>show</code> がその値を表示します。

</details>

---

## G. Web の仕組み（問27〜問28）

### 問27

ブラウザのフォームから、新しい予約データをサーバーへ登録するときに最も適した HTTP メソッドはどれですか。

1. <code>GET</code>
2. <code>POST</code>
3. <code>INDEX</code>
4. <code>HTML</code>

<details>
<summary>解答・解説</summary>

**解答：2**

<code>POST</code> は、フォームで入力した内容を送信し、新しいデータを登録するときに使います。<code>GET</code> は主に情報を取得・表示するときに使います。<code>INDEX</code> と <code>HTML</code> は HTTP メソッドではありません。

</details>

### 問28

Web アプリケーションのリクエストとレスポンスの流れとして、正しい説明はどれですか。

1. ブラウザがサーバーへレスポンスを送り、サーバーがリクエストを返す。
2. ブラウザが URL をもとにサーバーへリクエストを送り、サーバーが処理結果をレスポンスとして返す。
3. データベースがブラウザへリクエストを送り、ブラウザが HTML を保存する。
4. サーバーはブラウザからの操作と関係なく、常に HTML を送り続ける。

<details>
<summary>解答・解説</summary>

**解答：2**

ブラウザからサーバーへの要求がリクエストです。サーバーがその要求を処理し、HTML などの結果をブラウザへ返すことをレスポンスと呼びます。

</details>

---

## H. Rails の基礎（問29）

### 問29

Rails アプリケーションで、次のコマンドを実行しました。

~~~bash
bin/rails generate scaffold Event name:string place:string event_date:date
~~~

この直後の状態について、正しい説明はどれですか。

1. migration は作られるが、データベースにテーブルを作るには <code>bin/rails db:migrate</code> を実行する必要がある。
2. Event の一覧画面だけが作られ、モデルやコントローラーは作られない。
3. Rails サーバーが自動的に起動する。
4. データベースにテーブルが作られるため、<code>db:migrate</code> は不要である。

<details>
<summary>解答・解説</summary>

**解答：1**

<code>generate scaffold</code> は、モデル、コントローラー、ビュー、ルーティング、migration などのファイルを生成します。しかし、migration をデータベースに反映する処理は別です。テーブルを作るには <code>bin/rails db:migrate</code> を実行します。

</details>

---

# 第2部：実技試験（問30・1点）

## 問30：イベント予定アプリを完成させたか

この問題は、下の実技手順を最後まで完了してから回答します。

次のすべてを確認できた場合は「できた」を選びます。1つでも確認できていない場合は「できなかった」を選びます。

- <code>/events</code> で、イベントの新規登録、一覧・詳細の表示、編集、削除を確認できた
- 一覧画面の見出しを変更し、CSS を適用できた
- 最後にイベントを1件登録した状態で、指定された提出物を用意できた

Google フォーム用の選択肢：

1. できた
2. できなかった

<details>
<summary>解答・解説</summary>

**解答：実際の結果を選ぶ**

上の確認項目をすべて満たした場合の選択肢は「できた」です。1つでも未完了または未確認の項目がある場合は「できなかった」を選び、実技手順に戻って確認します。

</details>

### 実技の内容

Codespaces 上で新しい Rails アプリケーションを作り、イベントの予定を登録・表示・編集・削除できる Web アプリケーションを完成させます。

作るアプリケーションの名前は **イベント予定アプリ** です。

> [!IMPORTANT]
> 新しく Rails アプリケーションを作ります。第13回で作ったアプリケーションのフォルダを使い回さないでください。
> サーバーを起動するターミナルと、ほかのコマンドを実行するターミナルは分けて使います。

### 完成させる画面

完成後のアプリケーションには、次の機能が必要です。

| 操作 | 確認すること |
|---|---|
| Create | 新しいイベントを登録できる |
| Read | イベントの一覧と詳細を表示できる |
| Update | 登録したイベントを編集できる |
| Delete | 登録したイベントを削除できる |
| 見た目 | 一覧画面の見出しを自分用に変更し、CSSを適用している |

### Step 1：Rails アプリケーションを新しく作る

ターミナルで次のコマンドを実行します。

~~~bash
rails _8.0.2.1_ new event_planner_app
~~~

コマンドが終わると、<code>event_planner_app</code> フォルダが作られます。

次のコマンドを実行して、作成したアプリケーションのフォルダへ移動します。

~~~bash
cd event_planner_app
~~~

現在いる場所を確認します。

~~~bash
pwd
~~~

表示の最後が <code>event_planner_app</code> になっていれば成功です。

続けて Rails のバージョンを確認します。

~~~bash
bin/rails --version
~~~

次のように表示されれば成功です。

~~~text
Rails 8.0.2.1
~~~

### Step 2：Event の scaffold を作る

このアプリケーションでは、イベントを表す <code>Event</code> というデータを扱います。

次のコマンドを実行します。

~~~bash
bin/rails generate scaffold Event name:string place:string event_date:date capacity:integer
~~~

出力の中に、次のような行が含まれていれば成功です。

~~~text
create    app/models/event.rb
create    app/controllers/events_controller.rb
create    app/views/events
~~~

このコマンドに指定した項目は、次の意味です。

| 項目 | 型 | 保存する内容 |
|---|---|---|
| <code>name</code> | <code>string</code> | イベント名 |
| <code>place</code> | <code>string</code> | 開催場所 |
| <code>event_date</code> | <code>date</code> | 開催日 |
| <code>capacity</code> | <code>integer</code> | 定員 |

### Step 3：データベースに反映する

次のコマンドを実行します。

~~~bash
bin/rails db:migrate
~~~

出力の中に次のような行が含まれていれば成功です。

~~~text
CreateEvents: migrated
~~~

これで、イベントを保存するためのテーブルがデータベースに作られました。

### Step 4：Codespaces 用の設定を追加する

<code>config/environments/development.rb</code> を開きます。

ファイルの中から、次の行を探します。

~~~ruby
Rails.application.configure do
~~~

そのすぐ下に、次のコードを追加して保存します。

~~~ruby
pf_domain = ENV["GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"]
codespace_name = ENV["CODESPACE_NAME"]

if pf_domain.present? && codespace_name.present?
  pf_host = "#{codespace_name}-3000.#{pf_domain}"
  config.hosts << pf_host
  config.action_controller.forgery_protection_origin_check = false
end
~~~

追加後の先頭付近は、次の形になります。

~~~ruby
Rails.application.configure do
  pf_domain = ENV["GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"]
  codespace_name = ENV["CODESPACE_NAME"]

  if pf_domain.present? && codespace_name.present?
    pf_host = "#{codespace_name}-3000.#{pf_domain}"
    config.hosts << pf_host
    config.action_controller.forgery_protection_origin_check = false
  end

  # もともと書かれていた設定は、この下にも続きます
end
~~~

> [!IMPORTANT]
> <code>development.rb</code> のファイル全体を置き換えないでください。
> もともと書かれている内容は消さず、上のコードだけを <code>Rails.application.configure do</code> と <code>end</code> の間に追加します。

### Step 5：一覧画面の見出しを変更する

<code>app/views/events/index.html.erb</code> を開きます。

ファイルの上の方にある次の行を探します。

~~~erb
<h1>Events</h1>
~~~

<code>自分の名前</code> を自分の名前に置き換え、次の形に変更して保存します。

~~~erb
<h1>自分の名前のイベント予定</h1>
~~~

たとえば、名前が山田花子の場合は次のようになります。

~~~erb
<h1>山田花子のイベント予定</h1>
~~~

### Step 6：CSS を追加する

<code>app/assets/stylesheets/application.css</code> を開きます。

ファイルの一番下に、次の CSS を追加して保存します。

~~~css
body {
  max-width: 900px;
  margin: 48px auto;
  padding: 0 24px;
  background: #fff7ed;
  color: #431407;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

h1 {
  margin-bottom: 24px;
  color: #9a3412;
}

a {
  color: #c2410c;
  font-weight: 700;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

div[id^="event_"] {
  margin: 16px 0;
  padding: 20px 24px;
  border-left: 6px solid #f97316;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(124, 45, 18, 0.10);
}

form:not(.button_to) {
  max-width: 640px;
  margin: 24px 0;
  padding: 24px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(124, 45, 18, 0.10);
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 700;
}

input[type="text"],
input[type="number"],
input[type="date"],
textarea {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 10px 12px;
  border: 1px solid #fdba74;
  border-radius: 10px;
  font: inherit;
}

input[type="submit"],
button {
  padding: 10px 18px;
  border: 0;
  border-radius: 999px;
  background: #ea580c;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

input[type="submit"]:hover,
button:hover {
  background: #c2410c;
}

p[style*="green"] {
  padding: 12px 16px;
  border-radius: 12px;
  background: #dcfce7;
  color: #166534 !important;
  font-weight: 700;
}
~~~

### Step 7：Rails サーバーを起動して一覧画面を開く

新しいターミナルを1つ開きます。新しいターミナルでも、<code>event_planner_app</code> フォルダにいることを確認します。

~~~bash
pwd
~~~

表示の最後が <code>event_planner_app</code> でなければ、次のコマンドで移動します。

~~~bash
cd event_planner_app
~~~

次のコマンドを実行して Rails サーバーを起動します。

~~~bash
bin/rails server -b 0.0.0.0
~~~

次のような表示が出れば、サーバーは起動しています。

~~~text
* Listening on http://0.0.0.0:3000
~~~

> [!IMPORTANT]
> このターミナルは Rails サーバーを動かすために使います。
> サーバーを止めるまで、このターミナルには次のコマンドを入力しません。

Codespaces の <code>Ports</code> タブから、3000番ポートの転送 URL を開きます。

URL の最後に <code>/events</code> を付けます。

~~~text
/events
~~~

たとえば、次のような URL になります。

~~~text
https://xxxxxxxx-3000.app.github.dev/events
~~~

見出しが「自分の名前のイベント予定」と表示され、背景色やフォームの見た目が変わっていれば成功です。

### Step 8：ブラウザで CRUD を確認する

ブラウザで <code>New event</code> をクリックし、次のイベントを登録します。

| 項目 | 入力する値 |
|---|---|
| Name | Ruby発表会 |
| Place | 視聴覚室 |
| Event date | 今日以降の日付 |
| Capacity | 30 |

<code>Create Event</code> をクリックします。

イベントの詳細画面が表示されれば、Create と Read の確認ができています。

次に <code>Back to events</code> をクリックし、一覧画面に <code>Ruby発表会</code> が表示されていることを確認します。

一覧または詳細画面から <code>Edit this event</code> をクリックします。<code>Capacity</code> を次の値に変更します。

~~~text
40
~~~

<code>Update Event</code> をクリックし、詳細画面に定員 <code>40</code> が表示されることを確認します。これで Update の確認ができています。

次に <code>Destroy this event</code> をクリックします。一覧画面に戻り、<code>Ruby発表会</code> が表示されなくなっていれば Delete の確認ができています。

最後に、提出用としてイベントをもう1件登録します。内容は自分で決めて構いませんが、イベント名、場所、開催日、定員をすべて入力してください。

### 提出するもの

教員から指定された提出先へ、次の2つを提出してください。

1. <code>/events</code> を開いた Codespaces のプレビュー URL
2. 変更した <code>app/views/events/index.html.erb</code> のファイル全体

提出前に、プレビュー URL を開き直してください。自分の名前を入れた見出し、CSS、提出用に登録したイベントが表示されることを確認します。

---

### 問30の解答・解説

実技試験では、Step 1〜Step 8 の手順をすべて完了し、問30の確認項目をすべて満たした状態が解答です。その場合は、Google フォームで「できた」を選びます。

### コマンドの確認

Rails アプリケーションを作るコマンドは次のとおりです。

~~~bash
rails _8.0.2.1_ new event_planner_app
~~~

Event の scaffold を生成し、データベースへ反映するコマンドは次のとおりです。

~~~bash
bin/rails generate scaffold Event name:string place:string event_date:date capacity:integer
bin/rails db:migrate
~~~

<code>generate scaffold</code> は必要なファイルと migration を作り、<code>db:migrate</code> は migration をデータベースへ反映します。この2つは役割が異なるため、両方を実行する必要があります。

### 完成状態の確認

次のすべてを確認できれば、実技試験の指定内容を満たしています。

- <code>/events</code> を開くと、変更した見出しが表示される
- CSS が読み込まれ、背景、カード、フォーム、ボタンの見た目が変わる
- イベントを新規登録できる
- 登録したイベントの一覧と詳細を表示できる
- イベントを編集できる
- イベントを削除できる

CRUD は、ブラウザで画面を開くだけでは確認できません。作成・表示・編集・削除を実際に行い、画面の変化まで確認します。
