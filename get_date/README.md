# get_date.gsf
'q time'で取得できるGrADS形式の時刻を指定した形式に変換して出力

## 説明
- `date = get_date(n)`
    - n には 1 または 2 を入力してフォーマットを指定
        - 1: yyyy/mm/dd hh:nnZ
        - 2: yyyy-mm-dd hh:nnZ
    - `q time`で取得した時刻を上記形式でdateに返す
    - 例: 00:30Z10DEC2025 の場合
        - n=1: 2025/12/10 00:30Z
        - n=2: 2025-12-10 00:30Z 

## 注意
- 他のGrADS スクリプトからこの関数を使用する場合には, 予め `ret = gsfallow('on')` を実行しておく
- mon2mm.gsf を使用するので, GASCRP に書かれている参照先に mon2mm.gsf が必要
- この関数ファイルもGASCRP に書かれている参照先のディレクトリに置いて使用することを想定
