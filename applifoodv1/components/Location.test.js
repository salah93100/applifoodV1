import { numberOfLocation } from "./Location"
import { fireEvent, render, screen } from '@testing-library/react'
import Location from "./Location"
import '@testing-library/jest-dom'

describe('Test nubmber Location',()=>{
it('Should first Test',()=>{
    const expectedNumber=2
    const expectedArray=[{s:"d"},{e:"d"}]
    expect(numberOfLocation(expectedArray.length)).toEqual(expectedNumber)
})
it('Should second Test',()=>{
    const expectedNumber=3
    const expectedArray=[{s:"d"},{e:"d"},{s:"d"}]
    expect(numberOfLocation(expectedArray.length)).toEqual(expectedNumber)
})
test('Location Render',async()=>{
render(<Location />)
const  buttonLocation=screen.getByRole('button',{name:"Ajouter une Location"});
const  textLocation=screen.getByTestId('custom-element');
expect(textLocation.textContent).toBe('Annuler false')
fireEvent.click(buttonLocation)
expect(textLocation.textContent).toBe('Annuler true')
})
})