
import { describe, expect, it } from "vitest";
import { sub } from "../src";

describe("sub", () =>
{
	it("subtracts two numbers", () =>
	{
		expect(sub(1, 2)).toBe(-1);
		expect(sub(-122.42, 3.1416)).toBe(-125.5616);
	});
});