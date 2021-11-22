/**
 * subprocess_simple.ts
 */

// create subprocess
const p = Deno.run({
  cmd: ["ls"],
});

// await its completion
await p.status();

/*
why this is not move.

Debugger listening on ws://127.0.0.1:9229/ws/92b1c572-091f-4591-b978-da9db4ce1f79
Debugger session started.
Debugger session ended
error: Uncaught NotFound: The system cannot find the file specified. (os error 2)
const p = Deno.run({
               ^
    at Object.opSync (deno:core/01_core.js:142:12)
    at opRun (deno:runtime/js/40_process.js:27:17)
    at Object.run (deno:runtime/js/40_process.js:114:17)
    at file:///C:/laptopWorks/myGit/helloDeno/subprocess_simple.ts:6:16
*/
