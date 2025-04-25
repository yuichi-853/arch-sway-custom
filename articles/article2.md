# Wayland設定

Waylandの設定や周辺ツールについて説明します。

## 1. Waylandの概要
- X11 に代わる次世代のディスプレイサーバープロトコル。

## 2. パッケージ
- `wayland`
- `xorg-server-xwayland` (Xwaylandのサポートが必要な場合)

## 3. 環境変数
アプリがWaylandを使用できるよう、以下の環境変数をセットします。

```bash
export XDG_SESSION_TYPE=wayland
export GDK_BACKEND=wayland
```
