import axios, { AxiosResponse } from 'axios'

export const addDefaultWorkout = async (token: String): Promise<any> => {
    const config = {
        headers: {
            authorization: `Bearer ${token}`,
        },
    }
    let res: AxiosResponse
    try {
        res = await axios.post('/workout', {}, config)
    } catch (e) {
        console.log(`Adding workout request failed: ${e}`)
        return
    }
    return res
}
