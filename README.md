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
