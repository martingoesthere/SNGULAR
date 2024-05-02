import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App, { TotalSerie } from "./App";

describe("TotalSerie", () => {
  test("numeroTriangular", () => {
    expect(TotalSerie.numeroTriangular(1)).toBe(1);
    expect(TotalSerie.numeroTriangular(2)).toBe(3);
    expect(TotalSerie.numeroTriangular(3)).toBe(6);
    expect(TotalSerie.numeroTriangular(4)).toBe(10);
  });

  test("fibonacci", () => {
    expect(TotalSerie.fibonacci(0)).toBe(0);
    expect(TotalSerie.fibonacci(1)).toBe(1);
    expect(TotalSerie.fibonacci(2)).toBe(1);
    expect(TotalSerie.fibonacci(3)).toBe(2);
    expect(TotalSerie.fibonacci(4)).toBe(3);
  });

  test("esPrimo", () => {
    expect(TotalSerie.esPrimo(1)).toBe(false);
    expect(TotalSerie.esPrimo(2)).toBe(true);
    expect(TotalSerie.esPrimo(3)).toBe(true);
    expect(TotalSerie.esPrimo(4)).toBe(false);
    expect(TotalSerie.esPrimo(5)).toBe(true);
  });

  test("serie", () => {
    expect(TotalSerie.serie(1)).toBe(0);
    expect(TotalSerie.serie(2)).toBe(0);
    expect(TotalSerie.serie(3)).toBe(3);
    expect(TotalSerie.serie(4)).toBe(4);
  });
});

describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("updates the result when form is submitted", () => {
    const { getByLabelText, getByText } = render(<App />);
    const input = getByLabelText("Type number 'n':");
    const button = getByText("Process");

    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.click(button);

    expect(
      getByText("The result for n is = 3: 'n' of the serie is: 3")
    ).toBeInTheDocument();
  });
});
