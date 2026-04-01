# 第4回 もっと練習

チャレンジ問題を全部終えた人向けです。第1回〜第4回で学んだ `puts`、変数、`#{}`、`if`/`elsif`/`else`、`times` を使って解きましょう。

---

## 問題1：1から20までの偶数を表示

1から20までの中で、偶数だけを表示してみましょう。

ヒント：

- `times` で20回くり返せます
- 数字が偶数かどうかは `% 2 == 0` で調べられます

<details>
<summary>解答例</summary>

```ruby
20.times do |i|
  n = i + 1

  if n % 2 == 0
    puts n
  end
end
```

</details>

---

## 問題2：3回じゃんけん

3回くり返して、毎回ランダムに手を出すじゃんけんプログラムを作りましょう。

ヒント：

```ruby
hand = rand(1..3)
```

1ならグー、2ならチョキ、3ならパーとして表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
3.times do |i|
  hand = rand(1..3)

  if hand == 1
    hand_name = "グー"
  elsif hand == 2
    hand_name = "チョキ"
  else
    hand_name = "パー"
  end

  puts "#{i + 1}回目：#{hand_name}"
end
```

</details>

---

## 問題3：FizzBuzz はじめの一歩

1から20までの数字を順番に表示しながら、

- 3で割り切れるときは `Fizz`
- 5で割り切れるときは `Buzz`
- 3でも5でも割り切れるときは `FizzBuzz`

を表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
20.times do |i|
  n = i + 1

  if n % 3 == 0 && n % 5 == 0
    puts "FizzBuzz"
  elsif n % 3 == 0
    puts "Fizz"
  elsif n % 5 == 0
    puts "Buzz"
  else
    puts n
  end
end
```

</details>

---

## 問題4：段々増えるメッセージ

次のような出力を作ってみましょう。

```
Ruby
RubyRuby
RubyRubyRuby
RubyRubyRubyRuby
```

ヒント：文字列は掛け算できます。

<details>
<summary>解答例</summary>

```ruby
4.times do |i|
  puts "Ruby" * (i + 1)
end
```

</details>

---

## 問題5：おみくじ5回チャレンジ

おみくじを5回引いてみましょう。

- 1：大吉
- 2：中吉
- 3：小吉
- 4：末吉
- 5：凶

何回目のおみくじかも表示してみましょう。

<details>
<summary>解答例</summary>

```ruby
5.times do |i|
  number = rand(1..5)

  if number == 1
    result = "大吉"
  elsif number == 2
    result = "中吉"
  elsif number == 3
    result = "小吉"
  elsif number == 4
    result = "末吉"
  else
    result = "凶"
  end

  puts "#{i + 1}回目：#{result}"
end
```

</details>

---

## 問題6：自由研究

第1回〜第4回で学んだことを全部使って、自分だけのプログラムを作ってみましょう。

アイデア例：

- 10回占いを出すプログラム
- 5人分の点数を順番に判定するプログラム
- だんだん大きくなる顔文字を表示するプログラム
