import React from 'react'
import Home from './Home'

import { render, fireEvent, waitFor } from "react-native-testing-library"

describe('Home', () => {
    xit('Should display CopWatch', async () => {
        const { getByText } = render(<Home />)

        const title = await waitFor(() => getByText("CopWatch"))

        expect(title).toBeTruthy()
    })   
})