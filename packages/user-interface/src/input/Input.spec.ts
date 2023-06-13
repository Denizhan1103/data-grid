import {render} from "@testing-library/react"
 
import Input from "."

describe('<Input /> (Headless)',() =>{
    it('Should render correctly.', () =>{
        const component = render(<Input/>)
    })
    // it('Must be call onChange callback function when contain data changed')
    // it('Must be visible as contain the got prop when get startValue as prop')
})