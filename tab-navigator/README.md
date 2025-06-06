# Search Result Keyboard Navigator (Chrome Extension)

Google検索結果をキーボードだけで操作できる Chrome拡張機能です。

---

## ✨ 主な機能

- `Tab`：検索結果のリンクを次へ移動
- `Shift + Tab`：リンクを前に移動
- `Enter`：選択中のリンクを新しいタブで開く
- 選択中のリンクには左に `▶️` マークを表示

---

## 📦 インストール方法

1. このリポジトリをクローンまたはZIPでダウンロード
2. `chrome://extensions/` にアクセス
3. 「デベロッパーモード」を ON にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. この拡張機能のフォルダを選択

---

## 🔧 開発ファイル構成

```
my-extension/
├── manifest.json # 拡張機能の定義
├── content.js # 検索ページ上で動作するメインスクリプト
├── content.css # 選択中リンクのマークの装飾（任意）
└── icon.png # 拡張機能のアイコン（任意）
```

---

## 📝 補足

- 現時点では検索結果のページ送り（次ページ／前ページ）は未対応です
- GoogleのDOM構造が変わった場合、リンク取得ロジックの更新が必要になる場合があります

---

## 📄 ライセンス

MIT License