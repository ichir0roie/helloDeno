import { assert } from "https://deno.land/std@0.115.1/testing/asserts.ts";

Deno.test("Hello Test", () => {
  assert("Hello");
});

// なんだこれ、かっけぇな！
// https://deno.land/manual@v1.16.2/testing/assertions

/**
 * # Examples
 *
 * ```ts
 * import { foo } from "./foo.ts";
 * ```
 */
export function foo(): string {
  return "foo";
}

// まじか、これかっけえな、しかもmdじゃん
