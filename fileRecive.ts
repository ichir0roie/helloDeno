/**
 * Receiving a file
 */
import { writableStreamFromWriter } from "https://deno.land/std@0.115.1/streams/mod.ts";

const fileResponse = await fetch("https://deno.land/logo.svg");

if (fileResponse.body) {
  const file = await Deno.open("./Data/logo.svg", {
    write: true,
    create: true,
  });
  const writableStream = writableStreamFromWriter(file);
  await fileResponse.body.pipeTo(writableStream);
}

console.log("finish save svg?");
