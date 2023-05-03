import { render as rtlRender } from '@testing-library/react'
import DashboardUI from '../../components/DashboardUI'

function Wrapper({children}){
    return <DashboardUI>{children}</DashboardUI>
    }
export function Render(ui) {
    rtlRender(ui,{wrapper:Wrapper})
}

