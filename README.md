# レポジトリ内容

この課題は、Web白熱教室のReact課題その6「[【エクササイズ】2画面を持つクイズアプリをReactで実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/js-exercise-for-react-router-1/)」の課題レポジトリになります。

## 課題

- 以下の完成形の画像と同じ見た目になるように実装する
- 具体的な実装の流れは、以下の「課題をクリアするためのステップ」の内容を参考にすること

## 完成形

後ほど記述

### 課題をクリアするためのステップ(実装のヒント)

後ほど記述


## 実装→レビュー依頼の流れ

1. このレポジトリをフォークして、フォークした自分のレポジトリを `git clone` してパソコンにダウンロードする
1. masterブランチからdevelopブランチに切り替えて `npx create-react-app .` を実行してReact開発環境を構築する
1. 1つの機能を実装する毎に、developブランチからfeatureブランチを切って作業をすすめる
    - [git flow](https://qiita.com/KosukeSone/items/514dd24828b485c69a05) で開発をすすめること

## 参考記事

課題をこなしていて、行き詰まったら以下の資料を参考にしていただければ解答にたどり着けるかと思います。

- Web白熱教室
    - React
        - [【React】コンポーネントのstateの使い方を理解する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/understand-and-how-to-use-the-state/)
        - [【React】コンポーネントのライフサイクルを理解する【ライフサイクル図付き】](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/understand-the-lifecycle-of-components/)
        - [【React】コンポーネントにクリックイベントを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/how-to-handle-click-events/)
        - [【React】配列のmapメソッドを活用してリストを作成する方法](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/lists-and-keys/)
        - [【React】入力フォームを作成する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/forms/)
        - [【React】子コンポーネントから親コンポーネントの関数を実行する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/call-parent-functions-from-a-child-component/)
    - React Router
        - [【JavaScript】React Routerとは](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/what-is-the-react-router/)
        - [React Routerでルーティングの設定と表示切り替えを行う](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/routing-with-browser-router-and-route-in-react-router/)
        - [【React Router】HashRouterを使ってルーティングを設定する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/routing-with-hash-router-and-route-in-react-router/)
        - [【React Router】Redirectで別ページにリダイレクトさせる](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/how-to-redirect-with-react-router/)
        - [【React Router】history, location, matchを理解する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/react/history-location-match-in-react-router/)
- プルリクエスト(`git flow` の開発スタイルで機能毎にブランチを分けて実装を進める際に参考になるページ)
    - https://github.com/tsuyopon-xyz/api_server_with_mock_db/pulls?q=is%3Apr+is%3Aclosed
- Jest
    - [Getting Started](https://jestjs.io/docs/ja/getting-started)
        - Babelの設定など
            - import, exportをテスト実行時にも有効にするために必要
    - [expect](https://jestjs.io/docs/ja/expect)
        - アサーションメソッド
- クイズデータに含まれる特殊文字を人間が読みやすい形式に変換してくれる機能が含まれているライブラリ
    - [he](https://github.com/mathiasbynens/he)