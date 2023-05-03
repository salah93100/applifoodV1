import { render, screen } from '@testing-library/react'
import PushMenu from './PushMenu'
import '@testing-library/jest-dom'

describe('Test button Push Menu',()=>{
    test('should test Render PushMEnu and menu button',()=>{
        render(<PushMenu/>)
    })
})