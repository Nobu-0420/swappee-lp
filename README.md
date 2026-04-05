# Urbanpass ランディングページ

Techmaiz のサービス「Urbanpass」の LP。React (Vite) + Tailwind CSS、モバイルファーストのレスポンシブ構成。

## 技術スタック

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- フォント: Noto Sans JP / Inter（Google Fonts）

## カラー・トーン

- メイン: 深いネイビー `#001f3f` / 青エメラルド `#00CED1`
- 背景: 白基調
- ターゲット: 都心の高級マンション居住者・ビジネスパーソン

## セクション構成

1. **ヒーロー** - ロゴ（θ）・メイン/サブコピー・CTA「LINEで先行登録する」
2. **課題提起** - おとり物件・検索の疲弊・アナログ手続きの3カード
3. **解決策** - Urbanpassの3つの価値カード + 従来 vs Urbanpass 比較表
4. **フッター** - ロゴ、Urbanpass、コピーライト、ソーシャルリンク（ダミー）

## 開発

```bash
npm install
npm run dev
```

`http://localhost:5173` で表示。

## ビルド

```bash
npm run build
npm run preview
```

ビルド成果物は `dist/` に出力されます。
