import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "./ThemeContext";

describe("useTheme Hook", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("デフォルトテーマはlightである", () => {
    let theme: string | undefined;
    const TestComponent = () => {
      const { theme: currentTheme } = useTheme();
      theme = currentTheme;
      return <div>Theme: {currentTheme}</div>;
    };

    render(
      <ThemeProvider defaultTheme="light">
        <TestComponent />
      </ThemeProvider>
    );

    expect(theme).toBe("light");
  });

  it("テーマをdarkに切り替えられる", () => {
    let theme: string | undefined;

    const TestComponent2 = () => {
      const { theme: currentTheme, toggleTheme: toggle } = useTheme();
      theme = currentTheme;
      return (
        <div>
          <div>Theme: {currentTheme}</div>
          <button onClick={toggle} data-testid="toggle-btn">
            ToggleTheme
          </button>
        </div>
      );
    };

    render(
      <ThemeProvider defaultTheme="light">
        <TestComponent2 />
      </ThemeProvider>
    );

    expect(theme).toBe("light");

    const button = screen.getByTestId("toggle-btn");
    fireEvent.click(button);

    expect(theme).toBe("dark");
  });

  it("テーマ設定がlocalStorageに保存される", () => {
    const TestComponent3 = () => {
      const { toggleTheme: toggle } = useTheme();
      return (
        <button onClick={toggle} data-testid="toggle-btn-storage">
          ToggleTheme
        </button>
      );
    };

    render(
      <ThemeProvider defaultTheme="light">
        <TestComponent3 />
      </ThemeProvider>
    );

    const button = screen.getByTestId("toggle-btn-storage");
    fireEvent.click(button);

    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("localStorageから保存されたテーマを復元できる", () => {
    localStorage.setItem("theme", "dark");

    let theme: string | undefined;
    const TestComponent4 = () => {
      const { theme: currentTheme } = useTheme();
      theme = currentTheme;
      return <div>Theme: {currentTheme}</div>;
    };

    render(
      <ThemeProvider defaultTheme="light">
        <TestComponent4 />
      </ThemeProvider>
    );

    expect(theme).toBe("dark");
  });

  it("ダークテーマがHTMLにclassを追加する", () => {
    const TestComponent5 = () => {
      const { toggleTheme: toggle } = useTheme();
      return (
        <button onClick={toggle} data-testid="toggle-btn-class">
          ToggleTheme
        </button>
      );
    };

    render(
      <ThemeProvider defaultTheme="light">
        <TestComponent5 />
      </ThemeProvider>
    );

    expect(document.documentElement.classList.contains("dark")).toBe(false);

    const button = screen.getByTestId("toggle-btn-class");
    fireEvent.click(button);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
