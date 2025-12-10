# mon2mm.gsf
1~12月までの英語略記名を3文字(大文字)で入力すると, その月を整数2桁(JAN ---> 01)で返す関数.

## 説明
- `mm = mon2mm(mon)`
    - mon として JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC のいずれかを入力 (小文字は不可)
    - mon に対応する月を整数値"2桁"で返す
    - 例: `mon = FEB` のとき `mm = 02` を返す

## 注意
- GASCRP に書かれている参照先のディレクトリに置いて使用することを想定
