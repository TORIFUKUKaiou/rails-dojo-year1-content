/**
 * 第15回 前期期末試験の Google フォームを作成する Google Apps Script です。
 *
 * 実行方法
 * 1. https://script.google.com/ で新しいプロジェクトを作成する
 * 2. このファイルの内容を貼り付けて保存する
 * 3. createExamQuizForm を実行し、権限を許可する
 * 4. 実行ログに表示される「編集用URL」を開く
 *
 * 実行するたびに、新しい Google フォームが1つ作成されます。
 */
function createExamQuizForm() {
  const formTitle = "第15回 前期期末試験";
  const form = FormApp.create(formTitle);

  form.setDescription(
    [
      "前期に学んだ Ruby、Web の仕組み、Ruby on Rails の基礎を確認するための試験です。",
      "",
      "【配点】",
      "・全30点",
      "・第1部：選択式29問（各1点）",
      "・第2部：実技1問（1点）",
      "",
      "【試験の進め方】",
      "・試験時間：180分",
      "・第1部と第2部を、上から順に取り組んでください。",
      "・講義資料、過去の演習ファイル、インターネット検索、生成AIは使って構いません。",
      "・コードの動きを確かめたいときは、Codespaces で短い Ruby プログラムを作り、実際に実行して確認して構いません。"
    ].join("\n")
  );
  form.setIsQuiz(true);
  form.setAllowResponseEdits(false);
  form.setCollectEmail(true);
  form.setProgressBar(true);
  form.setShuffleQuestions(false);
  form.setConfirmationMessage("回答を送信しました。");

  addStudentInformation_(form);
  addCodespaceInstructions_(form);
  addPart1Questions_(form);
  addPart2PracticalQuestion_(form);

  Logger.log("==================================================");
  Logger.log("Google フォームが作成されました。");
  Logger.log("編集用URL: " + form.getEditUrl());
  Logger.log("回答用URL: " + form.getPublishedUrl());
  Logger.log("==================================================");
}

function addStudentInformation_(form) {
  form.addSectionHeaderItem()
    .setTitle("【受験者情報】")
    .setHelpText("学籍番号と氏名を入力してください。");

  form.addTextItem()
    .setTitle("学籍番号")
    .setRequired(true);

  form.addTextItem()
    .setTitle("氏名")
    .setRequired(true);
}

function addCodespaceInstructions_(form) {
  form.addPageBreakItem()
    .setTitle("Codespace を起動する")
    .setHelpText(
      [
        "第2部で Rails を使うため、最初に Codespace を起動します。",
        "",
        "注意：Create codespace をそのままクリックせず、三点リーダー ... から New with options... を選びます。",
        "Rails が入っている環境を指定して Codespace を作成してください。"
      ].join("\n")
    );

  addInstruction_(
    form,
    "Step 0-1：GitHub のリポジトリを開く",
    [
      "ブラウザで次のリポジトリを開きます。",
      "https://github.com/TORIFUKUKaiou/rails-tutorial-companion",
      "",
      "GitHub にログインしていない場合は、ログインしてください。",
      "リポジトリの画面が表示されれば次へ進みます。"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 0-2：Codespaces の画面を開く",
    [
      "リポジトリ画面の右上付近にある、緑色の Code ボタンをクリックします。",
      "表示されたメニューの中で、Codespaces タブをクリックします。"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 0-3：作成メニューを開く",
    [
      "Codespaces タブの中にある三点リーダー ... をクリックします。",
      "表示されたメニューから、次をクリックします。",
      "",
      "New with options..."
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 0-4：Rails 用の Dev Container を選ぶ",
    [
      "設定画面が表示されたら、Dev container configuration を探します。",
      "Dev container configuration で、次を選びます。",
      "",
      "Rails 8.0.2.1 Ready",
      "",
      "必ず Rails 8.0.2.1 Ready を選びます。",
      "Ruby だけの環境を選ぶと、第2部で使う Rails が入っていません。"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 0-5：Codespace を作成する",
    [
      "設定画面で Codespace を作成するボタンをクリックします。",
      "ボタン名は、画面によって次のどちらかです。",
      "",
      "Create codespace",
      "または",
      "Create codespace on main",
      "",
      "Codespace の作成が始まったら、エディタのような画面が開くまで待ちます。",
      "下の方にターミナルが表示されれば準備できています。",
      "ターミナルが表示されていない場合は、画面上部のメニューから Terminal → New Terminal を選びます。"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 0-6：Rails のバージョンを確認する",
    [
      "ターミナルで次のコマンドを実行します。",
      "",
      "rails _8.0.2.1_ --version",
      "",
      "次のように表示されることを確認します。",
      "",
      "Rails 8.0.2.1",
      "",
      "この試験では Rails 8.0.2.1 を使います。",
      "違うバージョンが表示された場合は、作業を進める前に教員へ確認してください。"
    ].join("\n")
  );
}

function addPart1Questions_(form) {
  form.addPageBreakItem()
    .setTitle("第1部：選択式問題（全29問・各1点）")
    .setHelpText("各問について、最も適切な選択肢を1つ選んでください。");

  const examData = [
    {
      number: 1,
      section: "A. Ruby 基礎：変数・演算（問1〜問4）",
      prompt: [
        "次の Ruby プログラムを実行したとき、ターミナルに出力される値はどれですか。",
        "",
        "amount = 450",
        "coupon = 120",
        "amount = amount - coupon",
        "coupon = amount + 50",
        "",
        "puts coupon"
      ].join("\n"),
      choices: ["330", "380", "450", "570"],
      answer: 2,
      explanation: "3行目で amount は 450 - 120 により 330 になります。4行目で coupon には 330 + 50 の 380 が代入されます。"
    },
    {
      number: 2,
      section: "A. Ruby 基礎：変数・演算（問1〜問4）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される結果はどれですか。",
        "",
        'student = "佐藤"',
        "",
        'puts "こんにちは、#{student}さん"',
        "puts 'こんにちは、#{student}さん'"
      ].join("\n"),
      choices: [
        "こんにちは、佐藤さん が2行出力される。",
        "こんにちは、#{student}さん が2行出力される。",
        "1行目に こんにちは、佐藤さん、2行目に こんにちは、#{student}さん が出力される。",
        "エラーになり、何も出力されない。"
      ],
      answer: 3,
      explanation: "ダブルクォーテーションで囲んだ文字列では、#{} による式展開が行われます。シングルクォーテーションで囲んだ文字列では式展開されないため、#{student} の文字がそのまま出力されます。"
    },
    {
      number: 3,
      section: "A. Ruby 基礎：変数・演算（問1〜問4）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        "number = 19",
        "divider = 4",
        "",
        "puts number / divider"
      ].join("\n"),
      choices: ["4", "4.75", "4.0", "エラーになる。"],
      answer: 1,
      explanation: "19 と 4 はどちらも整数です。Ruby で整数どうしを割ると、結果も整数になり、小数点以下は切り捨てられます。そのため 19 / 4 は 4 です。"
    },
    {
      number: 4,
      section: "A. Ruby 基礎：変数・演算（問1〜問4）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        "price = 750",
        "count = 3",
        "shipping_fee = 200",
        "total = price * count + shipping_fee",
        "",
        "puts total"
      ].join("\n"),
      choices: ["950", "2250", "2450", "2650"],
      answer: 3,
      explanation: "price * count は 750 * 3 なので 2250 です。そこへ送料の 200 を足すため、total は 2450 になります。"
    },
    {
      number: 5,
      section: "B. Ruby 基礎：条件分岐（問5〜問8）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される文字はどれですか。",
        "",
        "score = 85",
        "",
        "if score >= 60",
        '  puts "C"',
        "elsif score >= 80",
        '  puts "B"',
        "else",
        '  puts "A"',
        "end"
      ].join("\n"),
      choices: ["A", "B", "C", "B と C の両方"],
      answer: 3,
      explanation: "if、elsif、else は上から順に条件を確認します。85 >= 60 は真なので、最初の puts \"C\" が実行されます。その後の elsif は確認されません。"
    },
    {
      number: 6,
      section: "B. Ruby 基礎：条件分岐（問5〜問8）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される結果はどれですか。",
        "",
        "has_reservation = false",
        "is_member = true",
        "",
        "if has_reservation && is_member",
        '  puts "入場できます（会員料金）"',
        "elsif has_reservation || is_member",
        '  puts "入場できます（通常料金）"',
        "else",
        '  puts "入場できません"',
        "end"
      ].join("\n"),
      choices: ["入場できます（会員料金）", "入場できます（通常料金）", "入場できません", "エラーになる"],
      answer: 2,
      explanation: "&& は両方が true のときだけ真です。今回は予約がないため、最初の条件は偽です。|| はどちらか一方が true なら真であり、is_member が true なので、通常料金のメッセージが出力されます。"
    },
    {
      number: 7,
      section: "B. Ruby 基礎：条件分岐（問5〜問8）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される結果はどれですか。",
        "",
        "memo = nil",
        "",
        "if memo",
        '  puts "メモがあります"',
        "else",
        '  puts "メモがありません"',
        "end"
      ].join("\n"),
      choices: ["メモがあります", "メモがありません", "何も表示されずに終了する", "エラーになる"],
      answer: 2,
      explanation: "Ruby では false と nil だけが偽として扱われます。memo には nil が入っているため、else 側が実行されます。"
    },
    {
      number: 8,
      section: "B. Ruby 基礎：条件分岐（問5〜問8）",
      prompt: "次の条件式のうち、結果が true になるものはどれですか。",
      choices: ["7 < 7", '"Ruby" == "ruby"', "!false", "12 != 12"],
      answer: 3,
      explanation: "7 < 7 は成り立たず、文字列の比較では大文字と小文字を区別します。12 != 12 も成り立ちません。!false は false を否定するため true です。"
    },
    {
      number: 9,
      section: "C. Ruby 基礎：繰り返し（問9〜問12）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        "total = 0",
        "",
        "4.times do |i|",
        "  total += i + 1",
        "end",
        "",
        "puts total"
      ].join("\n"),
      choices: ["4", "6", "10", "16"],
      answer: 3,
      explanation: "4.times のブロック変数 i は 0、1、2、3 と変わります。足している値は i + 1 なので、1 + 2 + 3 + 4 の 10 になります。"
    },
    {
      number: 10,
      section: "C. Ruby 基礎：繰り返し（問9〜問12）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        "sum = 0",
        "",
        "[2, 4, 6].each do |number|",
        "  sum += number",
        "end",
        "",
        "puts sum"
      ].join("\n"),
      choices: ["6", "12", "24", "エラーになる"],
      answer: 2,
      explanation: "each は配列の要素を1つずつ number に入れて繰り返します。sum には 2、4、6 が順に足されるため、結果は 12 です。"
    },
    {
      number: 11,
      section: "C. Ruby 基礎：繰り返し（問9〜問12）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される結果はどれですか。",
        "",
        "numbers = [1, 2, 3, 4, 5]",
        "squares = []",
        "",
        "numbers.each do |number|",
        "  if number % 2 == 1",
        "    squares << number * number",
        "  end",
        "end",
        "",
        "p squares"
      ].join("\n"),
      choices: ["[1, 4, 9, 16, 25]", "[2, 4]", "[1, 3, 5]", "[1, 9, 25]"],
      answer: 4,
      explanation: "number % 2 == 1 は、number を2で割った余りが1、つまり奇数であるかを確認する条件です。奇数の 1、3、5 だけが選ばれ、それぞれの2乗である 1、9、25 が squares に追加されます。"
    },
    {
      number: 12,
      section: "C. Ruby 基礎：繰り返し（問9〜問12）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        "count = 0",
        "",
        "4.times do",
        "  count += 2",
        "end",
        "",
        "puts count"
      ].join("\n"),
      choices: ["0", "2", "4", "8"],
      answer: 4,
      explanation: "ブロック変数を書かなくても、4.times の中の処理は4回実行されます。count は 2 ずつ4回増えるため、8 です。"
    },
    {
      number: 13,
      section: "D. Ruby 基礎：配列（問13〜問16）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        'fruits = ["りんご", "みかん", "ぶどう"]',
        "",
        "puts fruits[1]"
      ].join("\n"),
      choices: ["りんご", "みかん", "ぶどう", "エラーになる"],
      answer: 2,
      explanation: "配列の番号（添字）は 0 から始まります。fruits[0] がりんご、fruits[1] がみかんです。"
    },
    {
      number: 14,
      section: "D. Ruby 基礎：配列（問13〜問16）",
      prompt: '配列 items = ["ノート", "ペン"] の末尾に "消しゴム" を追加するコードとして、正しいものはどれですか。',
      choices: [
        'items << "消しゴム"',
        'items.add("消しゴム")',
        'items = "消しゴム"',
        'items[0] = "消しゴム"'
      ],
      answer: 1,
      explanation: "<< は、配列の末尾に要素を追加する書き方です。items.add という Array のメソッドはありません。4番は追加ではなく、最初の要素を上書きします。"
    },
    {
      number: 15,
      section: "D. Ruby 基礎：配列（問13〜問16）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        'members = ["A", "B", "C", "D"]',
        "",
        "puts members.length - 1"
      ].join("\n"),
      choices: ["2", "3", "4", "D"],
      answer: 2,
      explanation: "members.length は配列に入っている要素の数で、4 です。そこから 1 を引くため、出力される値は 3 です。"
    },
    {
      number: 16,
      section: "D. Ruby 基礎：配列（問13〜問16）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される結果はどれですか。",
        "",
        "scores = [70, 80, 90]",
        "scores[2] = 100",
        "",
        "p scores"
      ].join("\n"),
      choices: ["[100, 80, 90]", "[70, 100, 90]", "[70, 80, 100]", "[70, 80, 90, 100]"],
      answer: 3,
      explanation: "scores[2] は配列の3番目の要素です。= 100 は末尾に追加するのではなく、3番目の 90 を 100 へ書き換えます。"
    },
    {
      number: 17,
      section: "E. Ruby 基礎：ハッシュ（問17〜問20）",
      prompt: '作品名を "夏休みの映画"、上映時間を 120 として、"title" と "minutes" をキーにしたハッシュを作るコードとして正しいものはどれですか。',
      choices: [
        'movie = ["title", "夏休みの映画", "minutes", 120]',
        'movie = { "title" => "夏休みの映画", "minutes" => 120 }',
        'movie = { "夏休みの映画" => "title", 120 => "minutes" }',
        'movie = { "title" = "夏休みの映画", "minutes" = 120 }'
      ],
      answer: 2,
      explanation: 'ハッシュでは、キー => 値 の形で対応するデータを入れます。"title" がキー、"夏休みの映画" が値です。'
    },
    {
      number: 18,
      section: "E. Ruby 基礎：ハッシュ（問17〜問20）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        'profile = { "name" => "田中", "club" => "写真部" }',
        "",
        'puts profile["club"]'
      ].join("\n"),
      choices: ["田中", "写真部", "club", "エラーになる"],
      answer: 2,
      explanation: 'profile["club"] は、"club" というキーに対応する値を取り出します。その値は "写真部" です。'
    },
    {
      number: 19,
      section: "E. Ruby 基礎：ハッシュ（問17〜問20）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        "classes = [",
        '  { "name" => "1A", "members" => ["佐藤", "鈴木"] },',
        '  { "name" => "1B", "members" => ["田中"] }',
        "]",
        "",
        'puts classes[0]["members"][1]'
      ].join("\n"),
      choices: ["1A", "佐藤", "鈴木", "田中"],
      answer: 3,
      explanation: 'classes[0] で最初のハッシュを取り出します。そこから "members" の配列を取り出し、[1] で2番目の要素を選ぶため、"鈴木" が出力されます。'
    },
    {
      number: 20,
      section: "E. Ruby 基礎：ハッシュ（問17〜問20）",
      prompt: 'ハッシュ profile = { "name" => "森" } に、"grade" をキー、1 を値として追加するコードはどれですか。',
      choices: [
        'profile.add("grade" => 1)',
        'profile << { "grade" => 1 }',
        'profile["grade"] = 1',
        'profile.push("grade", 1)'
      ],
      answer: 3,
      explanation: 'ハッシュにキーと値を追加・更新するときは、ハッシュ名["キー"] = 値 の形で書きます。'
    },
    {
      number: 21,
      section: "F. Ruby 基礎：メソッドとクラス（問21〜問26）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        "def calculate(number)",
        "  number * 3",
        "  number + 4",
        "end",
        "",
        "puts calculate(6)"
      ].join("\n"),
      choices: ["6", "10", "18", "22"],
      answer: 2,
      explanation: "Ruby のメソッドでは、return を書かない場合、最後に評価された式の値が戻り値になります。number * 3 ではなく、最後の number + 4 が使われるため、6 + 4 の 10 が出力されます。"
    },
    {
      number: 22,
      section: "F. Ruby 基礎：メソッドとクラス（問21〜問26）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        'def greeting(name = "ゲスト")',
        '  "こんにちは、#{name}さん"',
        "end",
        "",
        "puts greeting"
      ].join("\n"),
      choices: ["こんにちは、ゲストさん", "こんにちは、さん", "引数エラーになる", "何も表示されない"],
      answer: 1,
      explanation: 'name = "ゲスト" は、引数が渡されなかった場合に使う初期値です。greeting を引数なしで呼び出すと、name には "ゲスト" が入ります。'
    },
    {
      number: 23,
      section: "F. Ruby 基礎：メソッドとクラス（問21〜問26）",
      prompt: "Ruby のメソッドについて、正しい説明はどれですか。",
      choices: [
        "def で始めたメソッド定義は、end で閉じる。",
        "メソッドはプログラムを起動したときに1回だけ自動で実行される。",
        "メソッドに引数として値を渡すことはできない。",
        "メソッドの戻り値を使うには、必ず return を書かなければならない。"
      ],
      answer: 1,
      explanation: "メソッドは def メソッド名 で定義を始め、end で定義を終えます。メソッドは呼び出したときに実行され、引数を受け取れます。また、Ruby では return を書かなくても最後に評価された値が戻り値になります。"
    },
    {
      number: 24,
      section: "F. Ruby 基礎：メソッドとクラス（問21〜問26）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        "class Lamp",
        "  def initialize(color)",
        "    @color = color",
        "  end",
        "",
        "  def color",
        "    @color",
        "  end",
        "end",
        "",
        'lamp = Lamp.new("青")',
        "puts lamp.color"
      ].join("\n"),
      choices: ["青", "color", "nil", "エラーになる"],
      answer: 1,
      explanation: 'Lamp.new("青") により initialize が呼ばれ、インスタンス変数 @color に "青" が入ります。color メソッドは @color を戻すので、青 が出力されます。'
    },
    {
      number: 25,
      section: "F. Ruby 基礎：メソッドとクラス（問21〜問26）",
      prompt: "次のうち、initialize メソッドが自動的に実行されるタイミングとして正しいものはどれですか。",
      choices: [
        "Ruby のプログラムを起動した直後",
        "クラスの中に新しいメソッドを書いたとき",
        "クラス名.new でインスタンスを作ったとき",
        "インスタンスを削除したとき"
      ],
      answer: 3,
      explanation: "initialize は初期化メソッドです。Lamp.new のように new で新しいインスタンスを作ると、自動的に呼び出されます。"
    },
    {
      number: 26,
      section: "F. Ruby 基礎：メソッドとクラス（問21〜問26）",
      prompt: [
        "次の Ruby プログラムを実行したとき、出力される値はどれですか。",
        "",
        "class Point",
        "  def initialize",
        "    @value = 10",
        "  end",
        "",
        "  def add(number)",
        "    @value += number",
        "  end",
        "",
        "  def show",
        "    puts @value",
        "  end",
        "end",
        "",
        "point = Point.new",
        "point.add(5)",
        "point.add(2)",
        "point.show"
      ].join("\n"),
      choices: ["10", "12", "15", "17"],
      answer: 4,
      explanation: "Point.new の時点で @value は 10 です。add(5) で 15、続く add(2) で 17 になり、show がその値を表示します。"
    },
    {
      number: 27,
      section: "G. Web の仕組み（問27〜問28）",
      prompt: "ブラウザのフォームから、新しい予約データをサーバーへ登録するときに最も適した HTTP メソッドはどれですか。",
      choices: ["GET", "POST", "INDEX", "HTML"],
      answer: 2,
      explanation: "POST は、フォームで入力した内容を送信し、新しいデータを登録するときに使います。GET は主に情報を取得・表示するときに使います。INDEX と HTML は HTTP メソッドではありません。"
    },
    {
      number: 28,
      section: "G. Web の仕組み（問27〜問28）",
      prompt: "Web アプリケーションのリクエストとレスポンスの流れとして、正しい説明はどれですか。",
      choices: [
        "ブラウザがサーバーへレスポンスを送り、サーバーがリクエストを返す。",
        "ブラウザが URL をもとにサーバーへリクエストを送り、サーバーが処理結果をレスポンスとして返す。",
        "データベースがブラウザへリクエストを送り、ブラウザが HTML を保存する。",
        "サーバーはブラウザからの操作と関係なく、常に HTML を送り続ける。"
      ],
      answer: 2,
      explanation: "ブラウザからサーバーへの要求がリクエストです。サーバーがその要求を処理し、HTML などの結果をブラウザへ返すことをレスポンスと呼びます。"
    },
    {
      number: 29,
      section: "H. Rails の基礎（問29）",
      prompt: [
        "Rails アプリケーションで、次のコマンドを実行しました。",
        "",
        "bin/rails generate scaffold Event name:string place:string event_date:date",
        "",
        "この直後の状態について、正しい説明はどれですか。"
      ].join("\n"),
      choices: [
        "migration は作られるが、データベースにテーブルを作るには bin/rails db:migrate を実行する必要がある。",
        "Event の一覧画面だけが作られ、モデルやコントローラーは作られない。",
        "Rails サーバーが自動的に起動する。",
        "データベースにテーブルが作られるため、db:migrate は不要である。"
      ],
      answer: 1,
      explanation: "generate scaffold は、モデル、コントローラー、ビュー、ルーティング、migration などのファイルを生成します。しかし、migration をデータベースに反映する処理は別です。テーブルを作るには bin/rails db:migrate を実行します。"
    }
  ];

  let currentSection = "";

  examData.forEach(function(question) {
    if (question.section !== currentSection) {
      currentSection = question.section;
      form.addSectionHeaderItem().setTitle("■ " + currentSection);
    }

    const item = form.addMultipleChoiceItem();
    item
      .setTitle("【問" + question.number + "】\n" + question.prompt)
      .setPoints(1)
      .setRequired(true);

    const choices = question.choices.map(function(choiceText, index) {
      return item.createChoice(choiceText, index + 1 === question.answer);
    });
    item.setChoices(choices);

    const feedback = FormApp.createFeedback()
      .setText("【正解：" + question.answer + "】\n" + question.explanation)
      .build();
    item.setFeedbackForCorrect(feedback);
    item.setFeedbackForIncorrect(feedback);
  });
}

function addPart2PracticalQuestion_(form) {
  form.addPageBreakItem()
    .setTitle("第2部：実技試験（問30・1点）")
    .setHelpText(
      [
        "下の手順を上から順に実施し、最後に問30へ回答します。",
        "新しく Rails アプリケーションを作ります。第13回で作ったアプリケーションのフォルダを使い回さないでください。",
        "サーバーを起動するターミナルと、ほかのコマンドを実行するターミナルは分けて使います。"
      ].join("\n")
    );

  addInstruction_(
    form,
    "実技の内容",
    [
      "Codespaces 上で新しい Rails アプリケーションを作り、イベントの予定を登録・表示・編集・削除できる Web アプリケーションを完成させます。",
      "作るアプリケーションの名前は「イベント予定アプリ」です。"
    ].join("\n")
  );

  addInstruction_(
    form,
    "完成させる画面",
    [
      "次の機能を確認します。",
      "・Create：新しいイベントを登録できる",
      "・Read：イベントの一覧と詳細を表示できる",
      "・Update：登録したイベントを編集できる",
      "・Delete：登録したイベントを削除できる",
      "・見た目：一覧画面の見出しを自分用に変更し、CSS を適用している"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 1：Rails アプリケーションを新しく作る",
    [
      "ターミナルで次のコマンドを実行します。",
      "",
      "rails _8.0.2.1_ new event_planner_app",
      "",
      "コマンドが終わると、event_planner_app フォルダが作られます。",
      "次のコマンドを実行して、作成したアプリケーションのフォルダへ移動します。",
      "",
      "cd event_planner_app",
      "",
      "現在いる場所を確認します。",
      "",
      "pwd",
      "",
      "表示の最後が event_planner_app になっていれば成功です。",
      "続けて Rails のバージョンを確認します。",
      "",
      "bin/rails --version",
      "",
      "次のように表示されれば成功です。",
      "",
      "Rails 8.0.2.1"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 2：Event の scaffold を作る",
    [
      "このアプリケーションでは、イベントを表す Event というデータを扱います。",
      "次のコマンドを実行します。",
      "",
      "bin/rails generate scaffold Event name:string place:string event_date:date capacity:integer",
      "",
      "出力の中に、次のような行が含まれていれば成功です。",
      "",
      "create    app/models/event.rb",
      "create    app/controllers/events_controller.rb",
      "create    app/views/events",
      "",
      "指定した項目の意味：",
      "・name（string）：イベント名",
      "・place（string）：開催場所",
      "・event_date（date）：開催日",
      "・capacity（integer）：定員"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 3：データベースに反映する",
    [
      "次のコマンドを実行します。",
      "",
      "bin/rails db:migrate",
      "",
      "出力の中に次のような行が含まれていれば成功です。",
      "",
      "CreateEvents: migrated",
      "",
      "これで、イベントを保存するためのテーブルがデータベースに作られました。"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 4：Codespaces 用の設定を追加する",
    [
      "config/environments/development.rb を開きます。",
      "ファイルの中から、次の行を探します。",
      "",
      "Rails.application.configure do",
      "",
      "そのすぐ下に、次のコードを追加して保存します。",
      "",
      'pf_domain = ENV["GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"]',
      'codespace_name = ENV["CODESPACE_NAME"]',
      "",
      "if pf_domain.present? && codespace_name.present?",
      '  pf_host = "#{codespace_name}-3000.#{pf_domain}"',
      "  config.hosts << pf_host",
      "  config.action_controller.forgery_protection_origin_check = false",
      "end",
      "",
      "development.rb のファイル全体を置き換えないでください。",
      "もともと書かれている内容は消さず、上のコードだけを Rails.application.configure do と end の間に追加します。"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 5：一覧画面の見出しを変更する",
    [
      "app/views/events/index.html.erb を開きます。",
      "ファイルの上の方にある次の行を探します。",
      "",
      "<h1>Events</h1>",
      "",
      "自分の名前を自分の名前に置き換え、次の形に変更して保存します。",
      "",
      "<h1>自分の名前のイベント予定</h1>",
      "",
      "たとえば、名前が山田花子の場合は次のようになります。",
      "",
      "<h1>山田花子のイベント予定</h1>"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 6：CSS を追加する",
    [
      "app/assets/stylesheets/application.css を開きます。",
      "ファイルの一番下に、次の CSS を追加して保存します。",
      "",
      "body {",
      "  max-width: 900px;",
      "  margin: 48px auto;",
      "  padding: 0 24px;",
      "  background: #fff7ed;",
      "  color: #431407;",
      '  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;',
      "}",
      "",
      "h1 {",
      "  margin-bottom: 24px;",
      "  color: #9a3412;",
      "}",
      "",
      "a {",
      "  color: #c2410c;",
      "  font-weight: 700;",
      "  text-decoration: none;",
      "}",
      "",
      "a:hover {",
      "  text-decoration: underline;",
      "}",
      "",
      'div[id^="event_"] {',
      "  margin: 16px 0;",
      "  padding: 20px 24px;",
      "  border-left: 6px solid #f97316;",
      "  border-radius: 12px;",
      "  background: #ffffff;",
      "  box-shadow: 0 10px 24px rgba(124, 45, 18, 0.10);",
      "}",
      "",
      "form:not(.button_to) {",
      "  max-width: 640px;",
      "  margin: 24px 0;",
      "  padding: 24px;",
      "  border-radius: 16px;",
      "  background: #ffffff;",
      "  box-shadow: 0 10px 24px rgba(124, 45, 18, 0.10);",
      "}",
      "",
      "label {",
      "  display: block;",
      "  margin-bottom: 6px;",
      "  font-weight: 700;",
      "}",
      "",
      'input[type="text"],',
      'input[type="number"],',
      'input[type="date"],',
      "textarea {",
      "  width: 100%;",
      "  box-sizing: border-box;",
      "  margin-bottom: 16px;",
      "  padding: 10px 12px;",
      "  border: 1px solid #fdba74;",
      "  border-radius: 10px;",
      "  font: inherit;",
      "}",
      "",
      'input[type="submit"],',
      "button {",
      "  padding: 10px 18px;",
      "  border: 0;",
      "  border-radius: 999px;",
      "  background: #ea580c;",
      "  color: #ffffff;",
      "  font-weight: 700;",
      "  cursor: pointer;",
      "}",
      "",
      'input[type="submit"]:hover,',
      "button:hover {",
      "  background: #c2410c;",
      "}",
      "",
      'p[style*="green"] {',
      "  padding: 12px 16px;",
      "  border-radius: 12px;",
      "  background: #dcfce7;",
      "  color: #166534 !important;",
      "  font-weight: 700;",
      "}"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 7：Rails サーバーを起動して一覧画面を開く",
    [
      "新しいターミナルを1つ開きます。",
      "新しいターミナルでも、event_planner_app フォルダにいることを確認します。",
      "",
      "pwd",
      "",
      "表示の最後が event_planner_app でなければ、次のコマンドで移動します。",
      "",
      "cd event_planner_app",
      "",
      "次のコマンドを実行して Rails サーバーを起動します。",
      "",
      "bin/rails server -b 0.0.0.0",
      "",
      "次のような表示が出れば、サーバーは起動しています。",
      "",
      "* Listening on http://0.0.0.0:3000",
      "",
      "このターミナルは Rails サーバーを動かすために使います。",
      "サーバーを止めるまで、このターミナルには次のコマンドを入力しません。",
      "",
      "Codespaces の Ports タブから、3000番ポートの転送 URL を開きます。",
      "URL の最後に /events を付けます。",
      "",
      "例：https://xxxxxxxx-3000.app.github.dev/events",
      "",
      "見出しが「自分の名前のイベント予定」と表示され、背景色やフォームの見た目が変わっていれば成功です。"
    ].join("\n")
  );

  addInstruction_(
    form,
    "Step 8：ブラウザで CRUD を確認する",
    [
      "ブラウザで New event をクリックし、次のイベントを登録します。",
      "・Name：Ruby発表会",
      "・Place：視聴覚室",
      "・Event date：今日以降の日付",
      "・Capacity：30",
      "",
      "Create Event をクリックします。",
      "イベントの詳細画面が表示されれば、Create と Read の確認ができています。",
      "",
      "次に Back to events をクリックし、一覧画面に Ruby発表会 が表示されていることを確認します。",
      "一覧または詳細画面から Edit this event をクリックします。",
      "Capacity を 40 に変更し、Update Event をクリックします。",
      "詳細画面に定員 40 が表示されれば、Update の確認ができています。",
      "",
      "次に Destroy this event をクリックします。",
      "一覧画面に戻り、Ruby発表会 が表示されなくなっていれば Delete の確認ができています。",
      "",
      "最後に、イベントをもう1件登録します。",
      "内容は自分で決めて構いませんが、イベント名、場所、開催日、定員をすべて入力してください。"
    ].join("\n")
  );

  const item = form.addMultipleChoiceItem();
  item
    .setTitle("【問30】イベント予定アプリを完成させたか")
    .setHelpText(
      [
        "上の実技手順を最後まで完了してから回答します。",
        "",
        "次のすべてを確認できた場合は「できた」を選びます。",
        "・/events で、イベントの新規登録、一覧・詳細の表示、編集、削除を確認できた",
        "・一覧画面の見出しを変更し、CSS を適用できた",
        "・最後にイベントを1件登録した状態にできた",
        "",
        "1つでも確認できていない場合は「できなかった」を選びます。"
      ].join("\n")
    )
    .setPoints(1)
    .setRequired(true);

  item.setChoices([
    item.createChoice("できた", true),
    item.createChoice("できなかった", false)
  ]);

  const feedback = FormApp.createFeedback()
    .setText(
      [
        "上の確認項目をすべて満たした場合の選択肢は「できた」です。",
        "1つでも未完了または未確認の項目がある場合は「できなかった」を選び、実技手順に戻って確認します。"
      ].join("\n")
    )
    .build();
  item.setFeedbackForCorrect(feedback);
  item.setFeedbackForIncorrect(feedback);
}

function addInstruction_(form, title, helpText) {
  form.addSectionHeaderItem()
    .setTitle(title)
    .setHelpText(helpText);
}
