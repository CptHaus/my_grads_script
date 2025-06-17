# new_color.gs
このスクリプトを実行すると, 色番号100 ~ 175に対して color_sample.jpg に示されている色が定義される.

GrADSでは予め1~19の色番号に色が指定されている.
これら以外の色を使いたい場合, `set rgb 色番号 R値 G値 B値 A値` を実行することで, 20番以降に好きな色を指定可能である.
new_color.gs では, `set rgb ...` コマンドを用いて新規の色を定義している.
さらに色を追加したい場合には, new_color.gs 内の関数 DefCols に `set rgb 色番号 R値 G値 B値 A値` を新規に書き加えればよい.

## 説明
- `new_color [-sample (SHOW | FIG)]` で実行
    - sample: 'SHOW'->カラー一覧の表示のみ | 'FIG'->カラー一覧を画像として保存(color_sample.jpg)
    - sample の指定が無い場合は '-sample SHOW' として処理
- new_color.gs を保存したディレクトリと異なる場所から上記のように実行したい場合
    - 例えば, /home/chen/grads/script/ に new_color.gs を置いている場合は次を予め実行すればよい
    - `export GASCRP="${GASCRP} /home/chen/grads/script`
    - ~/.bashrc に上記を書き込んでおけば楽 (書き込み後に `source ~/.bashrc` を実行)

## 注意
- サンプル画像の生成では ImageMagick の convert コマンドを使用している
    - ImageMagick の使用できない環境では, `-sample SHOW` で実行しないとエラーが出るはず
    - 関数 ShowSample 内の `gxprint tmp.eps` を `gxprint color_sample.png` に書き換え, その後の2行をコメントアウトすれば良い
- このスクリプトでは色番号20 ~ 100番をあえて使用しないようにしている
    - color.gs (http://kodama.fubuki.info/wiki/wiki.cgi/GrADS/script/color.gs?lang=en) では, 色番号16から順に色を定義する
    - color.gs を実行すると, そこで定義される色の数だけ16番以降の色番号の設定が上書きされる
    - カラーバーを構成する色の個数が極端に多くなければ(80色程度以下ならば), new_color.gs で定義した100番目以降の色の設定は上書きされない
    - カラーバーの色を非常に多くした場合には, 100番目以降も上書きされる可能性がある
        - 例: `color 0 200 1 -kind white->red` とした場合には16~217番まで上書きされる
    - color.gs を実行した後に再度 new_color.gs を実行すれば, new_color.gs の色設定に戻すことができる