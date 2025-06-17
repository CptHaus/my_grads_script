# get_gdate.gsf
date=2025061712 のように yyyymmddhh 形式で時刻を入力すると,
12Z17JUN2025 のようにGrADSで時刻を指定する際の形式の時刻を返す関数.

## 説明
- `gdate = get_gdate(date)`
    - date として yyyymmddhh 形式の時刻を入力
    - GrADS で `set time ...` によって時刻を指定する際の形式に変換された時刻を返す

## 注意
- 他のGrADS スクリプトからこの関数を使用する場合には, 予め `ret = gsfallow('on')` を実行しておく
- mm2mon.gsf を使用するので, GASCRP に書かれている参照先に mm2mon.gsf が必要
- この関数ファイルもGASCRP に書かれている参照先のディレクトリに置いて使用することを想定
