import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";



describe ('Prueba en <CounterApp />', () => {

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={10} />);
        expect(container).toMatchSnapshot();
    });

    test(' debe mostrar el valor inicial de 100', () => {
        const value = 100;
        render(<CounterApp value={value}/>) 
        expect(screen.getByText(value)).toBeTruthy
    });


    test('debe incrementar el value con el boton', () => {
        render (<CounterApp value={10}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy
    });


    test('debe decrementar el value con el boton', () => {
        render (<CounterApp value={10}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy
    });


    test('debe resetear el value con el boton', () => {

        render (<CounterApp value={10}/>)

        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('Reset'))

        expect(screen.getByText(10)).toBeTruthy

    })

})