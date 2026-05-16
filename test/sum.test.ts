
import { describe, expect, it } from "vitest";
import { sum } from "../src";

describe("sum", () =>
{
	it("adds two numbers", () =>
	{
		expect(sum(1, 2)).toBe(3);
		expect(sum(-122.42, 3.1416)).toBe(-119.2784);
	});
});