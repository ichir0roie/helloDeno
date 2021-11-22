const watcher = Deno.watchFs(".");
for await (const event of watcher) {
  console.log(">>>> event", event);
  // Example event: { kind: "create", paths: [ "/home/alice/deno/foo.txt" ] }
}

/**
 * なんかファイル作ったら出力される。
 *
>>>> event {kind: 'create', paths: Array(1)}
arg1:{kind: 'create', paths: Array(1)}
kind:'create'
paths:(1) ['C:\\laptopWorks\\myGit\\helloDeno\\.\\da']
0:'C:\\laptopWorks\\myGit\\helloDeno\\.\\da'
[[Prototype]]:Object
length:1
[[Prototype]]:Object
 */
