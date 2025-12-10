# get_date.gsf
'q time'で取得できるGrADS形式の時刻を指定した形式に変換して出力

## 説明
- `date = get_date(kind,format)`
    - kind には以下のどれかを選択
        - 'y': 年のみ出力
        - 'ym': 年月のみ出力
        - 'ymd': 年月日のみ出力
        - 'ymdh': 年月日と時刻[hr]まで出力
        - 'ymdhn': 年月日と時分まで出力
    - format には 1 または 2 を入力してフォーマットを指定
        - 1: yyyy/mm/dd hh:nnZ
        - 2: yyyy-mm-dd hh:nnZ
    - `q time`で取得した時刻を上記形式でdateに返す
    - 例: 00:30Z10DEC2025 の場合
        - kind='ymdhn', format=1 ---> 2025/12/10 00:30Z
        - kind='ymd', format=2: 2025-12-10 

## 注意
- 他のGrADS スクリプトからこの関数を使用する場合には, 予め `ret = gsfallow('on')` を実行しておく
- mon2mm.gsf を使用するので, GASCRP に書かれている参照先に mon2mm.gsf が必要
- この関数ファイルもGASCRP に書かれている参照先のディレクトリに置いて使用することを想定
