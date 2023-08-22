import { add } from "@/helpers";
import { describe, it, expect } from "vitest";

describe("Helpers", () => {
	it("adds two numbers", () => {
		expect(add(1, 2)).toBe(3);
	});
});
