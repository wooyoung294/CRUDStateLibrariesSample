import {act, fireEvent, render, waitFor} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import TodoCardContainer from "./TodoCardContainer";
import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";

beforeEach(() => {
    // Axios-mock-adaptor 사용 및 response 데이터 정의
    const mockAxios: MockAdapter = new MockAdapter(axios, {delayResponse: 0})
    mockAxios.onGet('http://localhost:8181/getTodoList')
        .reply(200,
            [
                {
                    "num": 0,
                    "title": "@testing-library/react",
                    "content": "Test content",
                    "date": "2024-02-21",
                    "status": "대기중",
                }
            ]
        )
    mockAxios.onPost('http://localhost:8181/createTodo')
        .reply(200,
            [
                {
                    "num": 0,
                    "title": "@testing-library/react",
                    "content": "Test content",
                    "date": "2024-02-21",
                    "status": "대기중",
                },
                {
                    "num": 1,
                    "title": "createNewItemTitle",
                    "content": "createNewItemContent",
                    "date": "2024-03-02",
                    "status": "대기중",
                }
            ]
            , {'Content-Type': 'application/json'}
        )
    mockAxios.onPatch('http://localhost:8181/updateTodo')
        .reply(200,
            [
                {
                    "num": 0,
                    "title": "@testing-library/react",
                    "content": "Test content",
                    "date": "2024-02-21",
                    "status": "완료",
                }
            ]
            , {'Content-Type': 'application/json'}
        )
    mockAxios.onDelete('http://localhost:8181/deleteTodo?num=0')
        .reply(200,
            []
        )

});

describe("TodoCardContainer", () => {

    const queryClient = new QueryClient()
    test("Mount TodoCardContainer And Effect is Succeed", async () => {
        const {getByText} = render(
            <QueryClientProvider client={queryClient}>
                <TodoCardContainer/>
            </QueryClientProvider>
        )
        await waitFor(() => {
            expect(getByText('@testing-library/react')).toBeInTheDocument();
        })
    })

    test("Create New TodoItem", async () => {
        const {getByText, getByPlaceholderText, getByTestId} = render(
            <QueryClientProvider client={queryClient}>
                <TodoCardContainer/>
            </QueryClientProvider>
        )

        await waitFor(() => {
            expect(getByText('@testing-library/react')).toBeInTheDocument();
            expect(getByText('추가')).toBeInTheDocument();
        })

        fireEvent.click(getByText('추가'));

        const modalTitleInput = getByPlaceholderText('제목을 입력하세요.');
        fireEvent.change(modalTitleInput, {target: {value: 'createNewItemTitle'}});

        const modalContentInput = getByPlaceholderText('내용을 입력하세요.');
        fireEvent.change(modalContentInput, {target: {value: 'createNewItemContent'}});


        const modalDateInput = getByTestId('dateInput');
        fireEvent.change(modalDateInput, {target: {value: '2024-03-02'}});

        fireEvent.click(getByText('저장'));

        await waitFor(() => {
            expect(getByText('createNewItemTitle')).toBeInTheDocument();
        })

    })

    test("Update TodoItem", async () => {
        const {getByText} = render(
            <QueryClientProvider client={queryClient}>
                <TodoCardContainer/>
            </QueryClientProvider>
        )

        let dropDown,dropItem: HTMLElement;
        await waitFor(() => {
            expect(getByText('@testing-library/react')).toBeInTheDocument();
            dropDown=getByText('대기중',{selector:'button'});
            expect(dropDown).toBeInTheDocument();
            expect(dropDown).toHaveClass('dropdown-toggle');
            fireEvent.click(dropDown);
        })


        await waitFor(() => {
            dropItem=getByText('완료',{selector:'a'});
            expect(dropItem).toBeInTheDocument();
            expect(dropItem).toHaveClass('dropdown-item');
        })

        await act(async () => {
            fireEvent.click(dropItem);
        });

        await waitFor(() => {
            dropDown=getByText('완료',{selector:'button'});
            expect(dropDown).toBeInTheDocument();
            expect(dropDown).toHaveClass('dropdown-toggle');
        })
    })

    test("Delete TodoItem", async () => {
        const {getByText, queryByText} = render(
            <QueryClientProvider client={queryClient}>
                <TodoCardContainer/>
            </QueryClientProvider>
        )

        await waitFor(() => {
            expect(getByText('@testing-library/react')).toBeInTheDocument();
            expect(getByText('삭제')).toBeInTheDocument();
        })

        await act(async () => {
            fireEvent.click(getByText('삭제'));
        });

        await waitFor(() => {
            // getByText 함수는 요소를 찾을 수 없을 때 오류를 발생
            // 따라서 queryByText 함수를 사용
            // queryByText 함수는 요소를 찾을 수 없을 때 null 반환
            expect(queryByText('@testing-library/react')).not.toBeInTheDocument();
        })
    })
})