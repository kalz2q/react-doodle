# react-doodle

dotinstall , お絵かきアプリ canvas, html5, jquery
=> react, typescript, codepen ベースに翻訳する

react addEventListner canvas
を学ぶ必要がありそう。なので検索
React/Canvas に絵を書くコンポーネントを作成
https://px-wing.hatenablog.com/entry/2020/08/15/055738
コンポーネントのみであるが、useEffect と useState だけしか使っていないのが好感。
=> 06-not-working-error => useRef を使わないと render のたびに lost とか。

React で Canvas を使ってお絵描きツールを作る
https://qiita.com/amabie-mamoru/items/af1f7c7d0877022dbe89
=> これは出来ていないが、出来そうなのでやろう。
useRef しか使っていない。これにするか。=> 07-worked!!!!

うまく行かないので codepen にあるやつを翻訳してみよう
https://codepen.io/jmaurad/pen/QzVeRz
Drawing React Component
=> 発想が違うみたい。翻訳することも出来ない。
hook を使わずに state 管理している。

How to draw on a page using react hooks and typescript
https://www.ankursheel.com/blog/react-component-draw-page-hooks-typescript
=> 05 に翻訳したものを保存したが動いてはいない。
