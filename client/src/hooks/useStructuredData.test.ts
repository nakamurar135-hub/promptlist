import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useStructuredData } from "./useStructuredData";

describe("useStructuredData", () => {
  beforeEach(() => {
    // headをクリア
    document.head.innerHTML = "";
  });

  afterEach(() => {
    // テスト後にクリア
    document.head.innerHTML = "";
  });

  it("should add Article schema to head", () => {
    renderHook(() =>
      useStructuredData({
        title: "Test Article",
        description: "Test Description",
      })
    );

    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).toBeTruthy();
    expect(script?.textContent).toContain("Test Article");
    expect(script?.textContent).toContain("Test Description");
  });

  it("should include @context and @type", () => {
    renderHook(() =>
      useStructuredData({
        title: "Test Article",
        description: "Test Description",
      })
    );

    const script = document.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(script?.textContent || "{}");

    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Article");
  });

  it("should use provided author", () => {
    renderHook(() =>
      useStructuredData({
        title: "Test Article",
        description: "Test Description",
        author: "Custom Author",
      })
    );

    const script = document.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(script?.textContent || "{}");

    expect(schema.author.name).toBe("Custom Author");
  });

  it("should remove script on unmount", () => {
    const { unmount } = renderHook(() =>
      useStructuredData({
        title: "Test Article",
        description: "Test Description",
      })
    );

    expect(document.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(1);

    unmount();

    expect(document.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(0);
  });

  it("should update schema when props change", () => {
    const { rerender } = renderHook(
      (props) =>
        useStructuredData({
          title: props.title,
          description: props.description,
        }),
      {
        initialProps: {
          title: "Original Title",
          description: "Original Description",
        },
      }
    );

    let script = document.querySelector('script[type="application/ld+json"]');
    let schema = JSON.parse(script?.textContent || "{}");
    expect(schema.headline).toBe("Original Title");

    rerender({
      title: "Updated Title",
      description: "Updated Description",
    });

    script = document.querySelector('script[type="application/ld+json"]');
    schema = JSON.parse(script?.textContent || "{}");
    expect(schema.headline).toBe("Updated Title");
  });
});
