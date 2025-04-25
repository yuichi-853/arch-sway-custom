# Marked の見出しの検証
========================

# # 見出し１
## ## 見出し２
### ### 見出し３
#### #### 見出し４

---

上記は `marked.js` による Markdown → HTML 変換のテスト用ファイルです。  
それぞれの見出しが HTML の `<h1>` 〜 `<h4>` に変換されるかどうかを確認してください。

以下は段落や強調、リストの変換確認です：

---

これは通常の段落です。**太字**や*斜体*も含まれます。

- 箇条書き１
- 箇条書き２
  - ネストされたリスト

1. 番号付きリスト
2. 番号付きリスト２

---

コードブロックのbash構文ハイライトの確認：

```bash
sudo pacman -S nvim
```

```toml
"$schema" = "https://yazi-rs.github.io/schemas/yazi.json"

[manager]
ratio          = [ 1, 4, 3 ]
sort_by        = "alphabetical"
sort_sensitive = false
sort_reverse 	 = false
sort_dir_first = true
sort_translit  = false
linemode       = "none"
show_hidden    = true
show_symlink   = true
scrolloff      = 5
mouse_events   = [ "click", "scroll" ]
title_format   = "Yazi: {cwd}"
```
