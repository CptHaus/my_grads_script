# regrid.gs
指定した解像度の緯度・経度座標に内挿した格子データを.binファイルに書き出す

## 説明
- `regrid varname file_num intp_typ date resl lon0 lon1 lat0 lat1` で実行
    - `varname`: 今開いているctlファイルの変数のうち, 新しい格子に内挿して書き出したい変数名を指定 (varsに書かれているもの)
    - `file_num`: 書き出したい変数のctlファイルのファイル番号
    - `intp_typ`: bessel, bilin, aave のいずれかを指定(lterp関数の内挿オプションを参照)
    - `date`: 書き出したい日付(YYYYMMDDHH)を指定
    - `resl`: 書き出し先の格子の緯度・経度間隔をdeg単位で指定
    - `lon0, lon1`: 経度の最小値(西端)と最大値(東端)を指定
    - `lat0, lat1`: 緯度の最小値(南端)と最大値(北端)を指定
    - 0.1度間隔でlon=120-150, lat=20-50の範囲の格子に2025/06/27 12Zの海面気圧(JRA-55ならprmslmsl)内挿したい場合
        - `regrid prmslmsl 1 bessel 2025062712 0.1 120 150 20 50`
- 実行すると以下の順序で, 新しい格子に内挿した変数のファイル"regrid.bin"が生成される
    1. `'make_dummy_grid 'resl' 'lon0' 'lon1' 'lat0' 'lat1` が実行され, 内挿先のダミー格子データが作成される
    2. `dummy_grid.ctl` を開き, lterp関数を使用して `dummy_grid.bin` の格子に内挿
    3. `fwrite` を使用して内挿データを `regrid.bin` に書き出す
    4. `regrid.bin` をGrADSで読むためのctlファイル `regrid.ctl` を作成
    5. 不要なファイルを削除して終了
- `open regrid.ctl` をして実際に内挿された変数の描画確認ができる
- 他のスクリプトから日付に関するループなどで本スクリプトを呼び出して使用することも可能
    - その場合は, regrid.bin を1ループごとに別名に変更するなどしなければ上書きされるので注意

## 注意
- `make_dummy_grid` の実行中にfortranコードを生成してコンパイルし, それを実行して格子データを作っている
    - コンパイラにはifortを使用するので, その環境で使用すること
    - 他のコンパイラを使用したい場合は, 関数 make_grid 内で'ifort'から始まる行を変更すればよい
    - ctlファイルのoptionsには'big_endian'を指定している
        - コンパイラを変える場合やlittle_endianで出力する場合には, それに合わせてoptionsの記述を変更すること
- `regrid.bin` のエンディアンを変えたい場合には, `regrid.gs` 内の `set fwrite `の行を変更すればよい
