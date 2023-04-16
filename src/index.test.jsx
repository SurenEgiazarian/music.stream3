// import React from "react";
// import { BASE_API_URL } from "../../../services/constants";
// import { setupApiStore } from "../../../test-utils";
// import { TodosList } from "./index";
// import { render, screen } from "@testing-library/react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
// import { todoApi } from "../../../services/todo";

// // Описываем endpoint-ы, которые хотим замокировать
// export const handlers = [
//   rest.get(`${BASE_API_URL}/todos`, (req, res, ctx) => {
//     return res(
//       ctx.json([{ completed: false, id: "1", title: "My first todo" }])
//     );
//   }),
// ];

// // Готовим моковый сервер
// const server = setupServer(...handlers);

// // Мокируем api store
// const storeRef = setupApiStore(todoApi);

// describe("TodoList feature", () => {
//   // Поднимаем тестовый сервер перед запуском тестов
//   beforeAll(() => server.listen());

//   // Чистим обработчики между тестами
//   afterEach(() => server.resetHandlers());

//   // Отрубаем сервер после выполнения тестов.
//   // НЕ ЗАБЫВАЙТЕ ЭТО ДЕЛАТЬ, иначе сервер будет работать вхолостую
//   afterAll(() => server.close());

//   it("should show requested data", async () => {
//     render(<TodosList />, { wrapper: storeRef.wrapper });

//     // Проверяем начальное состояние компонента
//     screen.getByText("Loading...");

//     // Ждем ответа от сервера. Как только он придет,
//     // отрисуется пункт списка
//     expect(await screen.findByText(/my first todo/i)).toBeInTheDocument();
//     expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
//   });
// });