# 第6回：Stretch ── ハッシュをもう少し使ってみる

## 今日のゴール

ハッシュを使って、少し複雑なデータの持ち方にも触れてみる。

---

## この課題について

この課題は、[練習](practice.md) を終えた人向けの発展課題です。

やればやるほど力がつきます。できるところまで進めましょう。

---

## 課題1：記号のキーを見てみる（15分）

Rubyでは、キーに文字列だけでなくシンボルを使うこともあります。

```ruby
person = { name: "田中", age: 20, city: "福岡" }
```

### やってみよう

このハッシュから、名前と年齢を表示してみましょう。

ヒント：

```ruby
puts person[:name]
```

<details>
<summary>解答例</summary>

```ruby
person = { name: "田中", age: 20, city: "福岡" }

puts person[:name]
puts person[:age]
```

</details>

---

## 課題2：配列の中にハッシュを入れる（20分）

1人分の情報をハッシュにできるなら、複数人分は配列にまとめられます。

```ruby
students = [
  { "name" => "田中", "score" => 80 },
  { "name" => "鈴木", "score" => 65 },
  { "name" => "佐藤", "score" => 92 }
]
```

### やってみよう

全員の名前と点数を、1行ずつ表示してみましょう。

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

## 課題3：辞書のように使う（20分）

ハッシュは、言葉と意味を対応づけるような使い方もできます。

```ruby
capitals = { "日本" => "東京", "韓国" => "ソウル", "中国" => "北京" }
```

### やってみよう

`"韓国"` の首都を表示してみましょう。余裕があれば、自分で国を1つ追加してください。

<details>
<summary>解答例</summary>

```ruby
capitals = { "日本" => "東京", "韓国" => "ソウル", "中国" => "北京" }

puts capitals["韓国"]

capitals["タイ"] = "バンコク"
puts capitals["タイ"]
```

</details>

---

## 課題4：点数表を見やすくする（20分）

次のハッシュがあります。

```ruby
scores = { "国語" => 70, "数学" => 85, "英語" => 90 }
```

### やってみよう

次のように表示してみましょう。

```
国語は70点です
数学は85点です
英語は90点です
```

そのあと、80点以上なら `よくできました` と続けて表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
scores = { "国語" => 70, "数学" => 85, "英語" => 90 }

scores.each do |subject, score|
  puts "#{subject}は#{score}点です"

  if score >= 80
    puts "よくできました"
  end
end
```

</details>
