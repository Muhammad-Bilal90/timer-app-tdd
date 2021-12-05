import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Timer from './timer';

test('testing Timer Component', () => {
    render(<Timer />);
    const linkElement = screen.getByTitle(/timerDisplay/i);
    screen.getByText(/00 : 00/i);
    expect(linkElement).toBeInTheDocument();
});

test('testing start button test', () => {
    render(<Timer />);
    const linkElemnt = screen.getByText(/Start/i);
    expect(linkElemnt).toBeValid();
});

test('testing stop button test', () => {
    render(<Timer />);
    const linkElemnt = screen.getByText(/Stop/i);
    expect(linkElemnt).toBeValid();
});

test('testing reset button test', () => {
    render(<Timer />);
    const linkElemnt = screen.getByText(/Reset/i);
    expect(linkElemnt).toBeValid();
});

test('testing start button count function', async () => {
    render(<Timer />);
    jest.useFakeTimers();

    screen.getByText(/00 : 00/i);

    act(() => {
        fireEvent.click(screen.getByText(/Start/i));
        jest.advanceTimersByTime(9000);
    });
    const linkElement = await screen.findByText(/00 : 09/i);
    expect(linkElement).toBeInTheDocument();
});

test('testing stop button count function', async () => {
    render(<Timer/>);
    jest.useFakeTimers();

    screen.getByText(/00 : 00/i);

    act(() => {
        fireEvent.click(screen.getByText(/Stop/i));
        jest.advanceTimersByTime(8000);
    });

    const linkElement1 = await screen.findByText(/00 : 00/i); 
    expect(linkElement1).toBeInTheDocument();

    act(() => {
        fireEvent.click(screen.getByText(/Start/i));
        jest.advanceTimersByTime(9000);
        fireEvent.click(screen.getByText(/Stop/i));
    });
    
    const linkElement2 = await screen.findByText(/00 : 09/i);
    expect(linkElement2).toBeInTheDocument();
});

test('testing rest button count function', async () => {
    render(<Timer />);
    jest.useFakeTimers();

    screen.getByText(/00 : 00/i);

    act(() => {
        fireEvent.click(screen.getByText(/Reset/i));
        jest.advanceTimersByTime(60000);
    });

    const linkElement3 = await screen.findByText(/00 : 00/i);
    expect(linkElement3).toBeInTheDocument();

    act(() => {
        fireEvent.click(screen.getByText(/Start/i));
        jest.advanceTimersByTime(70000);
        fireEvent.click(screen.getByText(/Reset/i));
    });

    const linkElement4 = await screen.findByText(/00 : 00/i);
    expect(linkElement4).toBeInTheDocument();
});