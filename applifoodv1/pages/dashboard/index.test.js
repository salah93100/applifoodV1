import DashboardUI from '../../components/DashboardUI'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Test Dashbord Ui',()=>{
    test('Should render Dashboard without Crash',async()=>{
        render(<DashboardUI/>)
    })
})

