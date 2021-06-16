import axios, { AxiosResponse } from 'axios'

export const getCircuitsByCircuitIds = async (token: string, circuitIds: string[]): Promise<any> => {
    const config = {
        headers: {
            authorization: `Bearer ${token}`,
        },
    }

    let response: AxiosResponse
    try {
        response = await axios.get(`/circuits?circuitIds=${circuitIds}`, config)
    } catch (e) {
        return console.log(`Fetching circuits by circuit ids failed. ${e}`)
    }
    return response.data
}
