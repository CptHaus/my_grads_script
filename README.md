# my_grads_script

自作の GrADS スクリプト置き場

## Install and Uninstall
リポジトリをcloneしてください
```sh
$ git clone https://github.com/CptHaus/my_grads_script.git
$ cd my_grads_script
```
`Makefile`の変数`INSTALL`を編集し、インストール先のディレクトリを設定します。
`Makefile`を実行することで、指定したディレクトリにツールがコピーされます
```sh
$ vim Makefile
$ make install
```
コピーされたツールの削除は、`Makefile`を用いて行います
```sh
$ make uninstall
```

## 新しいツールを作成したら
1. 新しいディレクトリを指定する変数を`????_PATH`の名前で定義します
1. 新しいツールの名前を指定する変数を`????_FILE`の名前で定義します
1. 新しいツールのパス入りファイル名を`????`の名前で定義します
1. `????`を`SCRIPT`という変数に追加します
1. install後のパス入りファイル名を`????_COPIED`の名前で定義します
1. `????_COPIED`を`COPIED`という変数に追加します

